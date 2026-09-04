import { Action } from "survey-core";
import type { ILintFinding, ILintRuleInfo, ISurveyLintResult } from "survey-core/linter";
import type { SurveyCreatorModel } from "../creator-base";
import { getFindingSeverityKind, getLinterString } from "./linter-messages";
import { parseLintPath } from "./lint-path";
import { resolveFindingTarget } from "./linter-locator";

// How the findings are laid out. "severity" is what a save asks about - the counts that decide
// whether a save is blocked; "rule" is the JSON tab's reading of the same result: which checks
// exist and which of them passed.
export type LintGroupBy = "severity" | "rule";

const severityOrder = ["error", "warning", "info"];

// Rules that only have something to report about the JSON as authored. The designer saves what
// the serializer produced, and it drops exactly what these rules look for, so reporting them
// as passed would claim the survey is clean of a defect that was never looked for.
const authoringOnlyRules = [
  "property/unknown", "property/dead", "element/unknown-type", "trigger/unknown-type",
  "validator/unknown-type", "mask/mismatch"
];

export function getSeverityIcon(kind: string): string {
  return kind === "error" ? "icon-error-16x16" : "icon-warning-24x24";
}

// Document order, which a path sort does not give: "elements[10]" sorts before "elements[3]"
// as a string, and the list reads top to bottom like the survey.
function comparePaths(path1: string, path2: string): number {
  const left = parseLintPath(path1);
  const right = parseLintPath(path2);
  for (let i = 0; i < Math.min(left.length, right.length); i++) {
    const el1 = left[i];
    const el2 = right[i];
    if (el1 === el2) continue;
    if (typeof el1 === "number" && typeof el2 === "number") return el1 < el2 ? -1 : 1;
    return String(el1) < String(el2) ? -1 : 1;
  }
  return left.length - right.length;
}

function getPageName(creator: SurveyCreatorModel, element: any): string {
  let current = element;
  while(!!current && !current.isPage) {
    current = current.parent || current.page;
  }
  return !!current ? creator.getObjectDisplayName(current, "lint-finding-page") : undefined;
}

// The place of the finding, for the tooltip: the element the way the designer names it
// elsewhere, its page, and the raw path the linter reported.
function getFindingLocation(creator: SurveyCreatorModel, finding: ILintFinding): string {
  const target = resolveFindingTarget(creator, finding);
  const parts: Array<string> = [];
  if (!!target.element && target.element !== creator.survey) {
    const name = creator.getObjectDisplayName(target.element, "lint-finding");
    const pageName = getPageName(creator, target.element);
    parts.push(!!pageName && pageName !== name
      ? (<any>getLinterString("findingContext"))["format"](name, pageName)
      : name);
  }
  parts.push((<any>getLinterString("findingLocation"))["format"](finding.path));
  return parts.join(" - ");
}

function createFindingAction(creator: SurveyCreatorModel, finding: ILintFinding,
  id: string): Action {
  const kind = getFindingSeverityKind(finding.severity);
  const navigable = !!resolveFindingTarget(creator, finding).element;
  const css = ["svc-json-linter__finding", "svc-json-linter__finding--" + kind];
  // a finding with no place on the design surface must not look clickable
  if (navigable) css.push("svc-json-linter__finding--navigable");
  const message = creator.linter.composeMessage(finding);
  return new Action({
    id: id,
    component: "json-error-item",
    title: message,
    tooltip: message + "\n" + getFindingLocation(creator, finding),
    iconName: getSeverityIcon(kind),
    iconSize: "auto",
    css: css.join(" "),
    data: {
      finding: finding,
      navigable: navigable,
      showFixButton: false
    }
  });
}

function createGroupAction(severity: string, count: number): Action {
  const title = (<any>getLinterString("group" +
    severity.charAt(0).toUpperCase() + severity.substring(1)))["format"](count);
  return new Action({
    id: "linter-group-" + severity,
    title: title,
    enabled: false,
    css: "svc-json-linter__group svc-json-linter__group--" + severity
  });
}

function createSummaryAction(count: number): Action {
  return new Action({
    id: "linter-summary",
    title: count > 0
      ? (<any>getLinterString("resultIssues"))["format"](count)
      : getLinterString("noIssues"),
    css: "svc-json-linter__summary"
  });
}

function buildBySeverity(creator: SurveyCreatorModel,
  findings: Array<ILintFinding>): Array<Action> {
  const res: Array<Action> = [];
  severityOrder.forEach(severity => {
    const group = findings.filter(finding => finding.severity === severity);
    if (group.length === 0) return;
    res.push(createGroupAction(severity, group.length));
    group.sort((el1, el2) => comparePaths(el1.path, el2.path));
    group.forEach((finding, index) =>
      res.push(createFindingAction(creator, finding, "linter-issue-" + severity + "-" + index)));
  });
  return res;
}

function getRuleStatus(creator: SurveyCreatorModel, rule: ILintRuleInfo,
  found: Array<ILintFinding>, appliesToAuthoredJsonOnly: boolean): string {
  if (found.length > 0) {
    return found.some(finding => getFindingSeverityKind(finding.severity) === "error")
      ? "error" : "warning";
  }
  return appliesToAuthoredJsonOnly && authoringOnlyRules.indexOf(rule.id) > -1
    ? "notApplicable" : "passed";
}

function getStatusIcon(status: string): string {
  if (status === "passed") return "icon-check-16x16";
  if (status === "error") return "icon-error-16x16";
  if (status === "warning") return "icon-warning-24x24";
  return undefined;
}

function buildByRule(creator: SurveyCreatorModel, findings: Array<ILintFinding>,
  appliesToAuthoredJsonOnly: boolean): Array<Action> {
  const res: Array<Action> = [];
  creator.linter.getRules().forEach(rule => {
    const found = findings.filter(finding => finding.ruleId === rule.id);
    const status = getRuleStatus(creator, rule, found, appliesToAuthoredJsonOnly);
    const title = getLinterString("rules." + rule.id);
    const css = ["svc-json-linter__rule", "svc-json-linter__rule--" + status];
    res.push(new Action({
      id: "linter-rule-" + rule.id,
      title: found.length > 0 ? title + " (" + found.length + ")" : title,
      tooltip: status === "notApplicable"
        ? getLinterString("resultNotApplicable")
        : getLinterString("ruleDescriptions." + rule.id),
      iconName: getStatusIcon(status),
      iconSize: "auto",
      css: css.join(" "),
      data: { ruleId: rule.id }
    }));
    found.sort((el1, el2) => comparePaths(el1.path, el2.path));
    found.forEach((finding, index) =>
      res.push(createFindingAction(creator, finding, "linter-finding-" + rule.id + "-" + index)));
  });
  return res;
}

// The rows of the linter panel for a result the designer produced: every finding carries the
// element it points at, so a click selects it and focuses the property it is about.
export function buildLintActions(creator: SurveyCreatorModel, result: ISurveyLintResult,
  groupBy: LintGroupBy): Array<Action> {
  const findings = !!result ? result.findings.slice() : [];
  const res = groupBy === "rule"
    // the designer analyses what the serializer produced, so the authoring-only checks did not
    // run against anything they could report on
    ? buildByRule(creator, findings, true)
    : buildBySeverity(creator, findings);
  res.push(createSummaryAction(findings.length));
  return res;
}
