import { Action, Base, ListModel, property } from "survey-core";
import {
  getRules, lintSurvey, ILintFinding, ILintRuleInfo, ISurveyLintResult,
} from "survey-core/linter";
import { SurveyCreatorModel } from "../../creator-base";
import { editorLocalization } from "../../editorLocalization";
import { SurveyTextWorker, SurveyTextWorkerLinterFinding } from "../../textWorker";
import "./json-editor-linter.scss";

export function getLinterString(name: string): string {
  return editorLocalization.getString("linter." + name);
}

// Undefined when the key is missing, instead of the last path segment getString falls back to.
// Not usable for the terms: a term whose text equals its key ("page": "page") reads as missing.
function getTemplate(name: string): string {
  return editorLocalization.getJsonValue("linter." + name);
}

function formatTemplate(name: string, ...args: Array<any>): string {
  const str = getTemplate(name);
  if (str === undefined) return undefined;
  return args.length > 0 ? (<any>str)["format"].apply(str, args) : str;
}

// The linter reports its facts in a named dictionary, so the templates take named placeholders.
export function formatNamed(template: string, data: { [key: string]: any }): string {
  if (!template) return template;
  return template.replace(/\{([^{}]+)\}/g, (match: string, key: string) => {
    const value = !!data ? data[key] : undefined;
    if (value === undefined || value === null) return match;
    // a list of plain values reads as a list; a structured one is composed into a string before
    // it gets here, and anything that slips through stays an unsubstituted placeholder rather
    // than "[object Object]"
    if (Array.isArray(value)) {
      return value.every(item => item === null || typeof item !== "object")
        ? value.join(", ")
        : match;
    }
    if (typeof value === "object") return match;
    return String(value);
  });
}

// The JSON form, like quoteValue in the core: the string "5" and the number 5 are different
// answers to "which values are allowed", and printing both as 5 hides the very defect.
function quoteValue(value: any): string {
  const res = JSON.stringify(value);
  return res === undefined ? String(value) : res;
}

function quoteList(values: Array<any>): string {
  if (!Array.isArray(values)) return undefined;
  return values.map(quoteValue).join(", ");
}

// Whether a term is a key of the group at all. Asked of the English dictionary, which defines
// the key set: a locale that has not translated the term still resolves through the fallback.
function hasTerm(group: string, key: string): boolean {
  if (key === undefined || key === null) return false;
  const en: any = editorLocalization.getLocaleStrings("en");
  const terms = !!en && !!en.linter ? en.linter.terms : undefined;
  const table = !!terms ? terms[group] : undefined;
  return !!table && table[key] !== undefined;
}

// The facts a finding of expression/contradiction or expression/meaningless-condition rests on.
// The reason names only the most concrete mechanism, while the core reports every fact it used
// and joins them all - dropping the rest would lose half of the explanation.
function joinFacts(parts: Array<string>): string {
  const separator = getTemplate("facts.separator");
  return parts.filter(part => !!part).join(separator !== undefined ? separator : ", ");
}

function conflictFact(conflict: any): string {
  if (!conflict || !conflict.kind) return undefined;
  const values: Array<any> = Array.isArray(conflict.values) ? conflict.values : [];
  const ref = "{" + conflict.name + "}";
  const and = getTemplate("facts.and");
  const params: { [key: string]: any } = { ref: ref };
  params.values = values.map(quoteValue).join(and !== undefined ? and : " and ");
  params.value = values.length > 0 ? quoteValue(values[0]) : undefined;
  params.min = values.length > 0 ? quoteValue(values[0]) : undefined;
  params.max = values.length > 1 ? quoteValue(values[1]) : undefined;
  // a kind this version does not know is left out rather than printed raw
  const template = getTemplate("facts.conflict." + conflict.kind);
  return template === undefined ? undefined : formatNamed(template, params);
}

function rangeFact(range: any): string {
  if (!range) return undefined;
  const bounds: Array<string> = [];
  if (range.min !== undefined) bounds.push(formatTemplate("facts.atLeast", quoteValue(range.min)));
  if (range.max !== undefined) bounds.push(formatTemplate("facts.atMost", quoteValue(range.max)));
  if (bounds.length === 0) return undefined;
  const and = getTemplate("facts.and");
  return formatNamed(getTemplate("facts.range"), {
    ref: "{" + range.name + "}",
    bounds: bounds.filter(bound => !!bound).join(and !== undefined ? and : " and "),
  });
}

function buildFacts(data: { [key: string]: any }): string {
  const parts: Array<string> = [];
  // the core's order: what conflicts, then what bounds ruled it out, then what is constant
  const conflicts: Array<any> = Array.isArray(data.conflicts) ? data.conflicts : [];
  parts.push(joinFacts(conflicts.map(conflictFact)));
  const ranges: Array<any> = Array.isArray(data.ranges) ? data.ranges : [];
  parts.push(joinFacts(ranges.map(rangeFact)));
  const constants = data.constants;
  if (!!constants && typeof constants === "object") {
    const template = getTemplate("facts.constant");
    parts.push(joinFacts(Object.keys(constants).map(name => formatNamed(template, {
      ref: "{" + name + "}", value: quoteValue(constants[name]),
    }))));
  }
  return joinFacts(parts);
}

// getString, not getTemplate: a term legitimately reads the same as its key ("page": "page"),
// which getJsonValue cannot tell from a missing key.
function getTerm(group: string, key: string): string {
  return getLinterString("terms." + group + "." + (hasTerm(group, key) ? key : "default"));
}

// The container level an unknown trigger-target segment belongs to. matrixdropdown addresses
// a row first and a column second, so its noun depends on how deep the segment is.
function getSegmentNoun(containerType: string, segmentIndex: number): string {
  if (containerType === "matrixdropdown") {
    return getTerm("segmentNoun", segmentIndex === 2 ? "matrixdropdownColumn" : "matrixdropdownRow");
  }
  return getTerm("segmentNoun", containerType);
}

export class JsonEditorLinterModel extends Base {
  // "waiting" until the text parses for the first time; the panel keeps its last result while
  // the JSON has syntax errors.
  @property({ defaultValue: true }) isWaitingForValidJson: boolean;
  @property({ defaultValue: 0 }) issueCount: number;
  public result: ISurveyLintResult;
  public findings: Array<SurveyTextWorkerLinterFinding> = [];
  private rules: Array<ILintRuleInfo> = getRules();

  constructor(private creator: SurveyCreatorModel,
    private gotoError: (at: number, row: number, column: number) => void) {
    super();
    this.updateCheckList();
  }

  public run(textWorker: SurveyTextWorker): void {
    // the linter reads the JSON as authored: the serializer normalizes away the very defects it
    // looks for, so SurveyTextWorker.survey is not what it is given
    this.result = lintSurvey(textWorker.json);
    this.findings = this.result.findings.map(finding => {
      const position = textWorker.getPositionByPath(finding.path);
      const item = new SurveyTextWorkerLinterFinding(
        position.at, this.composeMessage(finding), finding);
      item.rowAt = position.rowAt;
      item.columnAt = position.columnAt;
      return item;
    });
    this.isWaitingForValidJson = false;
    this.issueCount = this.findings.length;
    this.updateCheckList();
  }

  public setWaitingForValidJson(): void {
    this.isWaitingForValidJson = true;
    // the per-rule rows keep the result of the last run; only the summary changes
    this.updateCheckList();
  }

  public reset(): void {
    this.result = undefined;
    this.findings = [];
    this.isWaitingForValidJson = true;
    this.issueCount = 0;
    this.updateCheckList();
  }

  // The English "message" of a finding is composed from a base sentence plus optional clauses.
  // The same composition is done here from (ruleId, reason) and messageData, so the whole text
  // is localized. Falls back to the English message when the finding carries no reason - the
  // creator and survey-core are versioned separately.
  public composeMessage(finding: ILintFinding): string {
    if (!finding.reason) return finding.message;
    const template = getTemplate("messages." + finding.ruleId + "." + finding.reason);
    if (template === undefined) return finding.message;
    const params = this.getMessageParams(finding);
    // a sentence built around the facts needs them: a newer core reporting a fact this version
    // cannot name would otherwise read as "contradicts itself: ." - the English of the core is
    // a worse language but a whole sentence
    if (template.indexOf("{facts}") > -1 && !params.facts) return finding.message;
    const parts = [formatNamed(template, params)];
    this.getSuffixes(finding, template).forEach(suffix => { if (!!suffix) parts.push(suffix); });
    return parts.join(" ");
  }

  private getMessageParams(finding: ILintFinding): { [key: string]: any } {
    const data = finding.messageData || {};
    const params: { [key: string]: any } = {};
    for (const key in data) params[key] = data[key];
    // a nameless finding is addressed by its element, and a nameless element by its path
    if (!params.name) params.name = finding.elementName || finding.path;
    ["values", "available", "names", "setRoots"].forEach(key => {
      if (Array.isArray(data[key])) params[key] = quoteList(data[key]);
    });
    if (finding.ruleId === "expression/type-mismatch") {
      params.valueShapeText = getTerm("valueShape", data.valueShape);
    }
    if (finding.ruleId === "choices/dead-source") {
      params.fieldNoun = getTerm("sourceField", data.sourceType);
    }
    if (finding.ruleId === "trigger/unknown-target") {
      params.segmentNoun = getSegmentNoun(data.containerType, data.segmentIndex);
      params.kindText = getTerm("targetKind", data.kind);
      params.verb = getTerm("triggerVerb", data.prop);
    }
    if (finding.ruleId === "page/empty") {
      params.kindText = getTerm("containerKind", data.kind);
    }
    // a keyName names a column of a matrix or a question of a dynamic panel template
    if (finding.reason === "keyNameNotFound") {
      params.keyNoun = getTerm("segmentNoun", data.questionType);
    }
    if (finding.ruleId === "element/count-contradiction") {
      params.direction = getLinterString(
        "terms.countDirection." + (data.count < data.bound ? "below" : "above"));
    }
    if (finding.ruleId === "element/never-visible") {
      const dependsOn: Array<string> = Array.isArray(data.dependsOn) ? data.dependsOn : [];
      params.reads = dependsOn.map(name => "{" + name + "}").join(", ");
      params.deadClause = getLinterString(
        "terms.deadValueClause." + (dependsOn.length > 1 ? "many" : "one"));
    }
    if (finding.ruleId === "cycle/value-write") {
      const labels: Array<string> = Array.isArray(data.labels) ? data.labels : [];
      params.label = labels[0];
      params.chain = labels.join(" -> ");
    }
    if (finding.ruleId === "expression/contradiction" ||
      finding.ruleId === "expression/meaningless-condition") {
      params.facts = buildFacts(data);
    }
    if (finding.ruleId === "value/not-a-choice") {
      params.valuesText = quoteList(data.values);
      params.availableText = quoteList(data.available);
      params.sourceValuesText = quoteList(data.sourceValues);
      params.sourceShapeText = getTerm("copyShape", data.sourceShape);
      params.targetShapeText = getTerm("copyShape", data.targetShape);
    }
    return params;
  }

  private getSuffixes(finding: ILintFinding, template: string): Array<string> {
    const data = finding.messageData || {};
    const res: Array<string> = [];
    const suffix = (name: string, ...args: Array<any>): string =>
      formatTemplate.apply(undefined, ["suffixes." + name].concat(args));
    if (finding.ruleId === "expression/syntax") {
      if (typeof data.at === "number") res.push(suffix("atPosition", data.at));
      if (data.synthesized) res.push(suffix("fromLegacyTrigger"));
    }
    if (finding.ruleId === "name/duplicate" && !!data.scope) {
      res.push(suffix("inScope", data.scope));
    }
    if (finding.ruleId === "cycle/trigger") res.push(suffix("loopMayBeUnreachable"));
    // a member of the loop is a defaultValueExpression: it stops applying once the question is
    // answered, so the loop may be shorter-lived than it reads
    if (finding.ruleId === "cycle/value-write" && Array.isArray(data.labels) &&
      data.labels.some((label: string) => label.indexOf("defaultValueExpression") > -1)) {
      res.push(suffix("defaultValueExpressionNote"));
    }
    if (!!finding.suggestion) {
      // for one rule the suggestion is prose rather than a name, and carries its own reason
      const suggestionReason = data.suggestionReason;
      if (!!suggestionReason) {
        res.push(formatTemplate("suggestions." + suggestionReason, data.recordName || data.name));
      } else {
        res.push(suffix("didYouMean", finding.suggestion));
      }
    } else {
      if (finding.ruleId === "element/unknown-type") res.push(suffix("customComponentHint"));
      if (finding.ruleId === "expression/unknown-function") res.push(suffix("registerFunctionHint"));
      if (finding.ruleId === "trigger/unknown-type") res.push(suffix("triggerTypeDroppedHint"));
    }
    if (finding.ruleId === "trigger/unknown-target" && data.kind === "questionvalue" &&
      finding.reason === "rootNotFound") {
      res.push(suffix("knownVariablesHint"));
    }
    if (!!finding.hint) {
      res.push(formatTemplate("hints." + finding.hint.reason, finding.hint.name));
    }
    if (finding.ruleId === "reference/unknown" && data.refKind === "binding") {
      res.push(suffix("inBindings"));
    } else if (finding.ruleId === "reference/unknown" && data.refKind === "choicesByUrlVariable") {
      res.push(suffix("inChoicesByUrl"));
    } else if (!!data.expression && template.indexOf("{expression}") < 0) {
      // a template that quotes the expression itself needs no trailing "In expression: ..."
      res.push(suffix("inExpression", data.expression));
    }
    return res;
  }

  private checkListValue: ListModel;
  public get checkList(): ListModel {
    if (!this.checkListValue) {
      this.checkListValue = new ListModel({
        items: [],
        onSelectionChanged: (action: Action) => {
          const error: SurveyTextWorkerLinterFinding = action.data?.error;
          if (!!error && error.at > -1) {
            this.gotoError(error.at, error.rowAt, error.columnAt);
          }
        },
        allowSelection: false,
        searchEnabled: false
      });
      this.checkListValue.cssClasses = {
        item: "svc-json-linter__item",
        itemBody: "svc-json-linter__item-body",
        itemsContainer: "svc-json-linter",
        itemIcon: "svc-json-linter__icon"
      };
      this.checkListValue.hasVerticalScroller = true;
    }
    return this.checkListValue;
  }

  private updateCheckList(): void {
    const actions: Array<Action> = [];
    this.rules.forEach(rule => {
      const found = this.findings.filter(item => item.ruleId === rule.id);
      actions.push(this.createRuleAction(rule, found));
      // a check that found nothing has nothing to expand
      found.forEach((item, index) => actions.push(this.createFindingAction(rule, item, index)));
    });
    actions.push(this.createSummaryAction());
    this.checkList.setItems(actions);
  }

  // undefined before the first run: there is no status to show yet
  private getRuleStatus(found: Array<SurveyTextWorkerLinterFinding>): string {
    if (!this.result) return undefined;
    if (found.length === 0) return "passed";
    if (found.some(item => item.severity === "error")) return "error";
    // info shares the warning status: the icon set has no separate info icon
    return "warning";
  }

  private getStatusIcon(status: string): string {
    if (status === "passed") return "icon-check-16x16";
    if (status === "error") return "icon-error-16x16";
    if (status === "warning") return "icon-warning-24x24";
    return undefined;
  }

  private createRuleAction(rule: ILintRuleInfo,
    found: Array<SurveyTextWorkerLinterFinding>): Action {
    const title = getLinterString("rules." + rule.id);
    const status = this.getRuleStatus(found);
    const css = ["svc-json-linter__rule"];
    if (!!status) css.push("svc-json-linter__rule--" + status);
    return new Action({
      id: "linter-rule-" + rule.id,
      title: found.length > 0 ? title + " (" + found.length + ")" : title,
      tooltip: getLinterString("ruleDescriptions." + rule.id),
      iconName: this.getStatusIcon(status),
      iconSize: "auto",
      css: css.join(" "),
      data: { ruleId: rule.id }
    });
  }

  private createFindingAction(rule: ILintRuleInfo, item: SurveyTextWorkerLinterFinding,
    index: number): Action {
    const css = ["svc-json-linter__finding"];
    // info shares the warning colours, as it shares the warning icon
    css.push("svc-json-linter__finding--" + (item.severity === "error" ? "error" : "warning"));
    // a finding whose path did not resolve cannot be navigated to, so it must not look clickable
    if (item.at > -1) css.push("svc-json-linter__finding--navigable");
    return new Action({
      id: "linter-finding-" + rule.id + "-" + index,
      component: "json-error-item",
      title: item.text,
      tooltip: item.text,
      css: css.join(" "),
      data: {
        error: item,
        showFixButton: false
      }
    });
  }

  private createSummaryAction(): Action {
    let title: string;
    if (this.isWaitingForValidJson) {
      title = getLinterString("waitingForValidJson");
    } else if (this.findings.length === 0) {
      title = getLinterString("resultPassed");
    } else {
      title = (<any>getLinterString("resultIssues"))["format"](this.findings.length);
    }
    return new Action({
      id: "linter-summary",
      title: title,
      css: "svc-json-linter__summary"
    });
  }
}
