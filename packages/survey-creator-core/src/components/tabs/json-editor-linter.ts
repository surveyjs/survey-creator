import { Action, Base, ListModel, property } from "survey-core";
import type { ILintFinding, ILintRuleInfo, ISurveyLintResult } from "survey-core/linter";
import { SurveyCreatorModel } from "../../creator-base";
import { SurveyTextWorker, SurveyTextWorkerLinterFinding } from "../../textWorker";
import { getFindingSeverityKind, getLinterString } from "../../linter/linter-messages";
import "./json-editor-linter.scss";

// The message helpers used to live here; they are shared with the save flow now, and the
// re-export keeps the JSON tab's own import path working.
export { formatNamed, getFindingSeverityKind, getLinterString } from "../../linter/linter-messages";

// The JSON tab's view of a lint run: the check list, and the findings mapped onto positions in
// the editor text. The analysis itself belongs to creator.linter, which the save flow shares.
export class JsonEditorLinterModel extends Base {
  // "waiting" until the text parses for the first time; the panel keeps its last result while
  // the JSON has syntax errors.
  @property({ defaultValue: true }) isWaitingForValidJson: boolean;
  @property({ defaultValue: 0 }) issueCount: number;
  public result: ISurveyLintResult;
  public findings: Array<SurveyTextWorkerLinterFinding> = [];
  private rulesValue: Array<ILintRuleInfo>;

  constructor(private creator: SurveyCreatorModel,
    private gotoError: (at: number, row: number, column: number) => void) {
    super();
    this.updateCheckList();
  }

  // The registry as the running survey-core reports it: a rule this version of the creator has
  // no name for still gets a row, titled by its own id.
  private get rules(): Array<ILintRuleInfo> {
    if (!this.rulesValue) {
      this.rulesValue = this.creator.linter.getRules();
    }
    return this.rulesValue;
  }

  // The linter reads the JSON as authored: the serializer normalizes away the very defects it
  // looks for, so SurveyTextWorker.survey is not what it is given. The text doubles as the
  // cache key - the same text never needs a second run.
  public run(textWorker: SurveyTextWorker, text?: string): void {
    this.creator.linter.run({ json: textWorker.json, reason: "editor", key: text },
      (result: ISurveyLintResult) => this.applyResult(result, textWorker));
  }

  private applyResult(result: ISurveyLintResult, textWorker: SurveyTextWorker): void {
    this.result = result;
    const findings = !!result ? result.findings : [];
    this.findings = findings.map(finding => {
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

  public composeMessage(finding: ILintFinding): string {
    return this.creator.linter.composeMessage(finding);
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
    if (found.some(item => getFindingSeverityKind(item.severity) === "error")) return "error";
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
    css.push("svc-json-linter__finding--" + getFindingSeverityKind(item.severity));
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
