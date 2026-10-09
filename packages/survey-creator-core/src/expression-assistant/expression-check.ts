import { Base, Helpers, Serializer } from "survey-core";
import { applyFix, ILintFinding, ISurveyLintOptions, LintFindingSeverity, lintSurvey } from "survey-core/linter";
import { SurveyCreatorModel } from "../creator-base";
import { composeLintMessage, getCreatorLintOptions, getLintFixTitle } from "../components/tabs/json-editor-linter";
import { getConditionVariableNames } from "../property-grid/condition-survey";
import { formatLintPath, getValueByLintPath, joinLintPath, LintPathResolver, parseLintPath } from "./lint-paths";

// A place the checked expression is written to.
export interface IExpressionSite {
  // the object the expression is written to: an object of the designer survey, or a draft
  obj: Base;
  propertyName: string;
  // a draft that is not in the survey yet (a trigger edited in the Logic tab): its JSON
  draftJson?: any;
  // the survey object the draft stands in for (an existing trigger being edited), if any;
  // without it the draft is appended to its collection
  replaces?: Base;
  // other values saving writes to obj (the setValueExpression of a Logic tab set-value action)
  siblings?: { [propertyName: string]: any };
  // the expression the site holds now, which the baseline is linted with. obj[propertyName] when
  // not set; the Logic tab sets the rule's own expression, since saving overwrites what is there
  currentExpression?: string;
  // caller data, mapped back on the findings (the Logic tab puts its action model here)
  tag?: any;
}

// What else saving changes (the Logic tab): properties it clears and collection items (triggers,
// completedHtmlOnCondition items) it removes.
export interface IExpressionCheckPending {
  cleared: Array<IExpressionSite>;
  removed: Array<Base>;
}

export interface IExpressionCheckFinding {
  ruleId: string;
  reason: string;
  severity: LintFindingSeverity;
  path: string;
  // the site the finding involves, if any
  site?: IExpressionSite;
  // localized, like in the JSON tab
  text: string;
  // the linter's English message - what an AI is told when it is asked to fix the expression
  englishText: string;
  // a repair that only respells the expression itself
  fix?: { title: string, expression: string };
}

export interface IExpressionCheckResult {
  expression: string;
  findings: Array<IExpressionCheckFinding>;
  errorCount: number;
  warningCount: number;
  infoCount: number;
  // sites the expression could not be written to; the check says nothing about them
  unaddressedSites: Array<IExpressionSite>;
  // false when there is no site at all or some site is unaddressed: the result does not cover
  // every place the expression goes to
  isComplete: boolean;
}

// The options the check lints with: the JSON tab's, plus the runtime variable names the condition
// editor offers. Build them once per request and pass them to every check of it - building them
// fires creator.onLintSurvey.
export function getExpressionLintOptions(creator: SurveyCreatorModel): ISurveyLintOptions {
  return getCreatorLintOptions(creator,
    getConditionVariableNames(creator.survey, creator.variablePresetsModel));
}

// setValueIf and setValueExpression are one writer for the linter (rules/cycle-value-write.ts),
// and a loop through that writer is listed under whichever of the two comes first.
const VALUE_WRITE_GROUPS: Array<Array<string>> = [["setValueIf", "setValueExpression"]];

export interface IExpressionSiteInfo {
  site: IExpressionSite;
  objPath: string;
  path: string;
}

export interface IExpressionCheckJson {
  baseline: any;
  candidate: any;
  sites: Array<IExpressionSiteInfo>;
  unaddressedSites: Array<IExpressionSite>;
}

function getDraftCollection(obj: Base): string {
  const type = obj.getType();
  if (Serializer.isDescendantOf(type, "surveytrigger")) return "triggers";
  if (Serializer.isDescendantOf(type, "urlconditionitem")) return "navigateToUrlOnCondition";
  if (Serializer.isDescendantOf(type, "htmlconditionitem")) return "completedHtmlOnCondition";
  return undefined;
}

function isEmptyValue(value: any): boolean {
  return value === undefined || value === null || value === "";
}

// The snapshot is mutated in place: it is the fresh object survey.toJSON() returned.
function getNode(json: any, path: string): any {
  const node = !path ? json : getValueByLintPath(json, path);
  return !!node && typeof node === "object" && !Array.isArray(node) ? node : undefined;
}

// An item value with nothing but a value is written as the bare value; a property needs an object.
function ensureObjectNode(json: any, path: string): any {
  const segments = parseLintPath(path);
  if (segments.length === 0) return json;
  const parent = getValueByLintPath(json, formatLintPath(segments.slice(0, segments.length - 1)));
  const key = segments[segments.length - 1];
  if (!parent || typeof parent !== "object") return undefined;
  const node = parent[key];
  if (node === undefined || node === null) return undefined;
  if (typeof node !== "object") {
    parent[key] = { value: node };
  }
  return getNode(json, path);
}

function writeValues(node: any, values: { [name: string]: any }): void {
  if (!node || !values) return;
  Object.keys(values).forEach(name => {
    if (isEmptyValue(values[name])) delete node[name];
    else node[name] = values[name];
  });
}

// What saving produces, twice: with the expressions the sites hold now (baseline) and with the
// candidate. Both are built on one snapshot, so they share their paths, and whatever is wrong with
// the snapshot itself - a draft trigger with no target yet - is in both and cancels out.
export function buildExpressionCheckJson(creator: SurveyCreatorModel, expression: string,
  sites: Array<IExpressionSite>, pending?: IExpressionCheckPending): IExpressionCheckJson {
  const survey = creator.survey;
  const json = survey.toJSON();
  const resolver = new LintPathResolver(survey);
  const res: IExpressionCheckJson = { baseline: json, candidate: json, sites: [], unaddressedSites: [] };
  // removed collection items first, highest index first, and every path is remapped past them
  const removedIndexes: { [collection: string]: Array<number> } = {};
  ((!!pending && pending.removed) || []).forEach(obj => {
    const segments = parseLintPath(resolver.getPath(obj));
    if (segments.length !== 2 || typeof segments[1] !== "number") return;
    const collection = <string>segments[0];
    if (!removedIndexes[collection]) removedIndexes[collection] = [];
    if (removedIndexes[collection].indexOf(segments[1]) < 0) removedIndexes[collection].push(segments[1]);
  });
  Object.keys(removedIndexes).forEach(collection => {
    const indexes = removedIndexes[collection].sort((a, b) => b - a);
    const arr = json[collection];
    if (!Array.isArray(arr)) return;
    indexes.forEach(index => arr.splice(index, 1));
  });
  const getPath = (obj: Base): string => {
    const path = resolver.getPath(obj);
    if (path === undefined) return undefined;
    const segments = parseLintPath(path);
    const removed = removedIndexes[<string>segments[0]];
    if (!removed || typeof segments[1] !== "number") return path;
    const index = <number>segments[1];
    if (removed.indexOf(index) > -1) return undefined;
    segments[1] = index - removed.filter(i => i < index).length;
    return formatLintPath(segments);
  };
  ((!!pending && pending.cleared) || []).forEach(site => {
    const objPath = getPath(site.obj);
    if (objPath === undefined) return;
    const node = ensureObjectNode(json, objPath);
    if (!node) return;
    delete node[site.propertyName];
    writeValues(node, site.siblings);
  });
  (sites || []).forEach(site => {
    let objPath: string;
    if (!!site.draftJson) {
      const collection = !!site.replaces
        ? <string>parseLintPath(resolver.getPath(site.replaces))[0]
        : getDraftCollection(site.obj);
      const draft = JSON.parse(JSON.stringify(site.draftJson));
      // a detached object writes no type; the survey writes one into the array the way the
      // array's property names it ("setvalue" for a setvaluetrigger)
      const prop = !!collection ? Serializer.findProperty("survey", collection) : undefined;
      if (!!prop && !prop.className && !draft.type) {
        draft.type = prop.getObjType(site.obj.getType());
      }
      if (!!site.replaces) {
        objPath = getPath(site.replaces);
        const segments = parseLintPath(objPath);
        if (objPath !== undefined && Array.isArray(json[collection])) {
          json[collection][<number>segments[1]] = draft;
        }
      } else if (!!collection) {
        if (!Array.isArray(json[collection])) json[collection] = [];
        json[collection].push(draft);
        objPath = collection + "[" + (json[collection].length - 1) + "]";
      }
    } else {
      objPath = getPath(site.obj);
    }
    const node = objPath !== undefined ? ensureObjectNode(json, objPath) : undefined;
    if (!node) {
      res.unaddressedSites.push(site);
      return;
    }
    writeValues(node, site.siblings);
    res.sites.push({ site: site, objPath: objPath, path: joinLintPath(objPath, site.propertyName) });
  });
  // the expressions go in through the linter's own applyFix, which copies only the containers on
  // the way: the two documents share everything else. It returns its input unchanged, without an
  // error, when a path does not apply - so a reference comparison tells whether the write happened.
  const write = (doc: any, info: IExpressionSiteInfo, value: string): any =>
    applyFix(doc, { reason: "", edits: [{ op: "set", path: info.path, value: value }] });
  const written: Array<IExpressionSiteInfo> = [];
  res.sites.forEach(info => {
    const current = info.site.currentExpression !== undefined
      ? info.site.currentExpression : (<any>info.site.obj)[info.site.propertyName];
    const baseline = write(res.baseline, info, isEmptyValue(current) ? "" : current);
    const candidate = write(res.candidate, info, expression);
    if (baseline === res.baseline || candidate === res.candidate) {
      res.unaddressedSites.push(info.site);
      return;
    }
    res.baseline = baseline;
    res.candidate = candidate;
    written.push(info);
  });
  res.sites = written;
  return res;
}

function isAtPath(path: string, sitePath: string): boolean {
  return path === sitePath || path.indexOf(sitePath + ".") === 0;
}

function getWriteGroupPaths(info: IExpressionSiteInfo): Array<string> {
  const group = VALUE_WRITE_GROUPS.filter(names => names.indexOf(info.site.propertyName) > -1)[0];
  return !!group ? group.map(name => joinLintPath(info.objPath, name)) : [info.path];
}

// Whether a finding of the candidate involves a site, so it is reported whether or not the
// baseline has it too - an unchanged defect is still a defect of the expression being accepted.
function isFindingAtSite(finding: ILintFinding, info: IExpressionSiteInfo): boolean {
  if (isAtPath(finding.path, info.path)) return true;
  const related = finding.related || [];
  if (related.some(rel => isAtPath(rel.path, info.path))) return true;
  // A loop is reported at its first member and names the others only in "related", listing a
  // trigger by its own path and a setValueIf/setValueExpression pair by either property. Other
  // rules list plain elements there (the twin of a duplicate name, ...), which says nothing about
  // the expression, so this is for the loops only.
  if (finding.ruleId.indexOf("cycle/") !== 0) return false;
  const groupPaths = getWriteGroupPaths(info);
  return related.some(rel => rel.path === info.objPath || groupPaths.indexOf(rel.path) > -1);
}

// Two findings of the two runs are the same defect when they agree on everything but the English
// text, which may quote the very expression that changed.
export function isSameLintFinding(a: ILintFinding, b: ILintFinding): boolean {
  return a.ruleId === b.ruleId && a.path === b.path && a.reason === b.reason &&
    Helpers.isTwoValueEquals(a.messageData, b.messageData);
}

// A repair is offered only when it respells the expression and nothing else: a fix that edits the
// choices or a trigger target changes the survey, which is not what the author is accepting.
export function getExpressionFix(finding: ILintFinding, candidate: any,
  sites: Array<IExpressionSiteInfo>): { title: string, expression: string } {
  const fix = finding.fix;
  if (!fix || !Array.isArray(fix.edits) || fix.edits.length === 0) return undefined;
  const sitePaths = sites.map(info => info.path);
  if (!fix.edits.every(edit => edit.op === "set" && sitePaths.indexOf(edit.path) > -1)) return undefined;
  const fixed = applyFix(candidate, fix);
  if (fixed === candidate) return undefined;
  const expression = getValueByLintPath(fixed, fix.edits[0].path);
  if (typeof expression !== "string") return undefined;
  return { title: getLintFixTitle(finding), expression: expression };
}

// Checks a candidate expression for the places it goes to. Reported are the findings that involve
// a site, in full, and every other finding the candidate introduces - one the baseline (the same
// survey with the expressions the sites hold now) does not have. Nothing is written to the survey.
export function checkExpression(creator: SurveyCreatorModel, expression: string,
  sites: Array<IExpressionSite>, pending?: IExpressionCheckPending,
  lintOptions?: ISurveyLintOptions): IExpressionCheckResult {
  const res: IExpressionCheckResult = {
    expression: expression, findings: [], errorCount: 0, warningCount: 0, infoCount: 0,
    unaddressedSites: [], isComplete: false,
  };
  const docs = buildExpressionCheckJson(creator, expression, sites, pending);
  res.unaddressedSites = docs.unaddressedSites;
  res.isComplete = docs.sites.length > 0 && docs.unaddressedSites.length === 0;
  if (docs.sites.length === 0) return res;
  const options = lintOptions || getExpressionLintOptions(creator);
  const baseline = lintSurvey(docs.baseline, options).findings;
  const candidate = lintSurvey(docs.candidate, options).findings;
  candidate.forEach(finding => {
    const info = docs.sites.filter(item => isFindingAtSite(finding, item))[0];
    if (!info && baseline.some(item => isSameLintFinding(item, finding))) return;
    const item: IExpressionCheckFinding = {
      ruleId: finding.ruleId, reason: finding.reason, severity: finding.severity, path: finding.path,
      text: composeLintMessage(finding), englishText: finding.message,
    };
    if (!!info) item.site = info.site;
    const fix = getExpressionFix(finding, docs.candidate, docs.sites);
    if (!!fix) item.fix = fix;
    res.findings.push(item);
    if (finding.severity === "error") res.errorCount++;
    else if (finding.severity === "warning") res.warningCount++;
    else res.infoCount++;
  });
  return res;
}
