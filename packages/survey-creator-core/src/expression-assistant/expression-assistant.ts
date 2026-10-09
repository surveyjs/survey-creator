import {
  Action, Base, IAction, IDialogOptions, PanelModel, Question, Serializer, SurveyModel, property, settings as surveySettings,
} from "survey-core";
import { ISurveyLintOptions } from "survey-core/linter";
import { SurveyCreatorModel } from "../creator-base";
import { ExpressionAssistantRequestEvent, ExpressionAssistantRequestKind } from "../creator-events-api";
import { getLocString } from "../editorLocalization";
import { ConditionEditor } from "../property-grid/condition-survey";
import { QuestionLinkValueModel } from "../components/link-value";
import {
  checkExpression, getExpressionLintOptions, IExpressionCheckFinding, IExpressionCheckPending, IExpressionCheckResult, IExpressionSite,
} from "./expression-check";
import { buildExpressionContext, IExpressionContext } from "./expression-context";
import { parseExpressionResponse } from "./expression-response";

import "./expression-assistant.scss";

export interface IExpressionAssistantInput {
  sites: Array<IExpressionSite>;
  pending?: IExpressionCheckPending;
}

// What an entry point hands the assistant. Everything about the target is read through these
// callbacks when a request starts, so the assistant never works on a stale snapshot.
export interface IExpressionAssistantOptions {
  creator: SurveyCreatorModel;
  // where the expression goes; the Logic tab reads it from the rule editor (with what else saving changes)
  getInput: () => IExpressionAssistantInput;
  // the expression the target holds now: "modify" when there is one, "generate" when it is empty
  getExpression: () => string;
  // writes an accepted expression - one undo step, through the entry point's own path
  accept: (expression: string) => void;
  // the condition editor the request comes from, for the AI context's variable list
  editor?: ConditionEditor;
  // the independent rendering of an expression shown in the review
  getDisplayText?: (expression: string) => string;
  prompt?: string;
}

export type ExpressionAssistantStatus = "ready" | "loading" | "review" | "explained" | "cancelled" | "error" | "empty" | "accepted";

export interface IExpressionAssistantHistoryItem {
  kind: string;
  prompt?: string;
  expression?: string;
  explanation?: string;
}

// The creator a property grid or a condition editor works for: the designer survey carries it.
export function getExpressionAssistantCreator(obj: any): SurveyCreatorModel {
  let survey = !!obj && typeof obj.getSurvey === "function" ? obj.getSurvey() : undefined;
  if (!survey && !!obj && obj.isSurvey) survey = obj;
  return !!survey ? survey.creator : undefined;
}

export function isExpressionAssistantAvailable(creator: SurveyCreatorModel): boolean {
  return !!creator && !!creator.onGenerateExpression && !creator.onGenerateExpression.isEmpty;
}

const iconName = "icon-toolbox-expression-24x24";
export const expressionAssistantIconName = iconName;

function escapeHtml(text: string): string {
  return String(text === undefined || text === null ? "" : text)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function format(name: string, ...args: Array<any>): string {
  const str = getLocString(name);
  return args.length > 0 ? (<any>str)["format"].apply(str, args) : str;
}
function clone<T>(value: T): T {
  return value === undefined ? value : JSON.parse(JSON.stringify(value));
}

interface IAssistantRequest {
  input: IExpressionAssistantInput;
  lintOptions: ISurveyLintOptions;
  context: IExpressionContext;
  systemPrompt: string;
}

// One assistant session: an entry point creates it, shows it, and it is disposed when the popup closes.
// State lives here, not on the creator: the creator only owns the event and the fix-attempts option.
export class ExpressionAssistant extends Base {
  @property({ defaultValue: "ready" }) status: ExpressionAssistantStatus;
  @property({ defaultValue: "" }) prompt: string;
  // the suggested expression under review
  @property({ defaultValue: "" }) expression: string;
  @property({ defaultValue: "" }) explanation: string;
  @property({ defaultValue: "" }) errorText: string;
  @property({ defaultValue: 0 }) fixCount: number;
  public checkResult: IExpressionCheckResult;
  public history: Array<IExpressionAssistantHistoryItem> = [];
  private controller: AbortController;
  private request: IAssistantRequest;
  private surveyValue: SurveyModel;

  constructor(public readonly options: IExpressionAssistantOptions) {
    super();
    this.prompt = options.prompt || "";
  }
  public getType(): string { return "expressionassistant"; }
  public get creator(): SurveyCreatorModel { return this.options.creator; }
  public get currentExpression(): string { return this.options.getExpression() || ""; }
  public get isLoading(): boolean { return this.status === "loading"; }
  public get hasResult(): boolean { return this.status === "review" && !!this.checkResult; }
  public get canAccept(): boolean {
    return this.hasResult && !!this.expression && this.checkResult.isComplete && this.checkResult.errorCount === 0;
  }
  public get canGenerate(): boolean { return !this.isLoading && !!(this.prompt || "").trim(); }
  public get canExplain(): boolean { return !this.isLoading && !!this.currentExpression; }

  // "generate" for an empty target, "modify" for one with an expression; after a result, a new
  // prompt refines that result
  public generate(prompt?: string): void {
    if (prompt !== undefined)this.prompt = prompt;
    if (this.hasResult || this.status === "explained" && !!this.expression) {
      this.startRequest("modify", this.prompt, this.expression || this.currentExpression);
      return;
    }
    const current = this.currentExpression;
    this.startRequest(!!current ? "modify" : "generate", this.prompt, current);
  }
  public refine(prompt: string): void {
    this.prompt = prompt;
    this.startRequest("modify", prompt, this.expression || this.currentExpression);
  }
  public explain(): void {
    this.startRequest("explain", "", this.currentExpression);
  }
  // a one-click fix of the check: applied here and checked again, no request
  public applyFix(finding: IExpressionCheckFinding): void {
    if (!finding || !finding.fix || !this.request) return;
    this.setResult(finding.fix.expression, this.explanation);
  }
  public accept(): boolean {
    if (!this.canAccept) return false;
    this.options.accept(this.expression);
    this.status = "accepted";
    return true;
  }
  public reject(): void {
    this.abort();
  }
  public cancel(): void {
    if (!this.isLoading) return;
    this.abort();
    this.status = "cancelled";
  }
  public dispose(): void {
    this.abort();
    if (!!this.surveyValue) {
      this.surveyValue.dispose();
      this.surveyValue = undefined;
    }
    super.dispose();
  }

  private abort(): void {
    if (!!this.controller) {
      this.controller.abort();
      this.controller = undefined;
    }
  }
  private startRequest(kind: ExpressionAssistantRequestKind, prompt: string, expression: string): void {
    this.abort();
    const input = this.options.getInput() || { sites: [] };
    // one onLintSurvey per request: the same options build the context and every check of it, so
    // the AI is never told a name the check rejects
    const lintOptions = getExpressionLintOptions(this.creator);
    const built = buildExpressionContext(this.creator, input.sites, expression, this.options.editor, lintOptions);
    this.request = { input: input, lintOptions: lintOptions, context: built.context, systemPrompt: built.systemPrompt };
    this.fixCount = 0;
    this.errorText = "";
    if (kind !== "explain") {
      this.checkResult = undefined;
      this.history.push({ kind: kind, prompt: prompt });
    }
    this.send(kind, prompt, expression);
  }
  private send(kind: ExpressionAssistantRequestKind, prompt: string, expression: string,
    findings?: Array<IExpressionCheckFinding>): void {
    const controller = new AbortController();
    this.controller = controller;
    this.status = "loading";
    let isAnswered = false;
    const sites = this.request.input.sites || [];
    const options: ExpressionAssistantRequestEvent = {
      kind: kind, prompt: prompt || "", expression: expression || "",
      isCondition: this.request.context.target.isCondition,
      element: sites.length > 0 ? sites[0].obj : undefined,
      propertyName: sites.length > 0 ? sites[0].propertyName : undefined,
      sites: sites.map(site => ({ element: site.obj, propertyName: site.propertyName })),
      // copies: a handler that adjusts them changes this request only
      context: clone(this.request.context),
      systemPrompt: this.request.systemPrompt,
      history: clone(this.history),
      signal: controller.signal,
      callback: (result) => {
        if (isAnswered || controller.signal.aborted || this.controller !== controller || this.isDisposed) return;
        isAnswered = true;
        this.controller = undefined;
        this.onResult(kind, result);
      }
    };
    if (!!findings) {
      options.findings = findings.map(f => ({ ruleId: f.ruleId, reason: f.reason, severity: f.severity, message: f.englishText }));
    }
    this.creator.onGenerateExpression.fire(this.creator, options);
  }
  private onResult(kind: ExpressionAssistantRequestKind,
    result: { expression?: string, explanation?: string, text?: string, error?: string }): void {
    if (!!result && !!result.error) {
      this.errorText = String(result.error);
      this.status = "error";
      return;
    }
    let expression = !!result && typeof result.expression === "string" ? result.expression : undefined;
    let explanation = !!result && typeof result.explanation === "string" ? result.explanation : undefined;
    if (expression === undefined && !!result && typeof result.text === "string") {
      const parsed = parseExpressionResponse(result.text);
      if (!!parsed) {
        expression = parsed.expression;
        if (explanation === undefined) explanation = parsed.explanation;
      }
    }
    expression = (expression || "").trim();
    if (kind === "explain") {
      this.explanation = explanation || "";
      this.status = !!this.explanation ? "explained" : "empty";
      return;
    }
    if (!expression) {
      this.explanation = explanation || "";
      this.status = "empty";
      return;
    }
    this.history.push({ kind: kind, expression: expression, explanation: explanation });
    const check = this.setResult(expression, explanation || "", true);
    // an unchecked site is no defect of the expression: a correction request cannot help it
    if (check.errorCount > 0 && this.fixCount < Math.max(0, this.creator.expressionAssistantFixAttempts || 0)) {
      this.fixCount++;
      this.send("fix", "", expression, check.findings);
      return;
    }
    this.status = "review";
  }
  private setResult(expression: string, explanation: string, isPending?: boolean): IExpressionCheckResult {
    const input = this.request.input;
    this.expression = expression;
    this.explanation = explanation;
    this.checkResult = checkExpression(this.creator, expression, input.sites, input.pending, this.request.lintOptions);
    if (!isPending) {
      this.status = "review";
      this.updateSurvey();
    }
    return this.checkResult;
  }

  // The popup's content is a survey; the review is rendered as escaped HTML (AI text is shown as text).
  public get survey(): SurveyModel {
    if (!this.surveyValue) {
      this.surveyValue = this.createSurvey();
    }
    return this.surveyValue;
  }
  private createSurvey(): SurveyModel {
    const json = {
      elements: [
        {
          type: "comment", name: "prompt", title: getLocString("aiex.promptTitle"),
          placeholder: getLocString("aiex.promptPlaceholder"), rows: 3, autoGrow: true, textUpdateMode: "onTyping"
        },
        { type: "html", name: "status" },
        { type: "html", name: "review", visible: false },
        { type: "panel", name: "fixes", visible: false },
      ]
    };
    const survey = this.creator.createSurvey(json, "expression-assistant");
    survey.showQuestionNumbers = "off";
    survey.showNavigationButtons = false;
    survey.questionErrorLocation = "bottom";
    survey.setValue("prompt", this.prompt);
    survey.onValueChanged.add((_, options) => {
      if (options.name === "prompt")this.prompt = options.value || "";
    });
    this.registerFunctionOnPropertiesValueChanged(["status", "expression", "explanation", "errorText", "fixCount"],
      () => this.updateSurvey(), "survey");
    this.updateSurvey(survey);
    return survey;
  }
  public getStatusText(): string {
    switch(this.status) {
      case "loading": return getLocString("aiex.statusLoading");
      case "cancelled": return getLocString("aiex.statusCancelled");
      case "error": return format("aiex.statusError", this.errorText);
      case "empty": return getLocString("aiex.statusEmpty");
      case "explained": return getLocString("aiex.statusExplained");
      case "review":
        if (!this.checkResult) return getLocString("aiex.statusReview");
        if (this.checkResult.errorCount > 0) return getLocString("aiex.blockedByErrors");
        if (!this.checkResult.isComplete) {
          return getLocString(this.checkResult.unaddressedSites.length === 0 && (!this.request || this.request.input.sites.length === 0)
            ? "aiex.noActions" : "aiex.notChecked");
        }
        return getLocString("aiex.statusReview");
      default: return getLocString("aiex.statusReady");
    }
  }
  private getDisplayText(expression: string): string {
    if (!expression || !this.options.getDisplayText) return "";
    try {
      return this.options.getDisplayText(expression) || "";
    } catch{
      return "";
    }
  }
  private getFindingContext(finding: IExpressionCheckFinding): string {
    const tag: any = !!finding.site ? finding.site.tag : undefined;
    if (!tag || !tag.logicType) return "";
    const el: any = finding.site.obj;
    const name = !!el && typeof el.name === "string" && !!el.name ? " " + el.name : "";
    return format("aiex.inAction", tag.logicType.displayName + name);
  }
  public getReviewHtml(): string {
    const parts: Array<string> = [];
    const row = (label: string, value: string, cssClass: string) =>
      parts.push("<div class=\"svc-expression-assistant__" + cssClass + "\"><span class=\"svc-expression-assistant__label\">" +
        escapeHtml(label) + ":</span> " + value + "</div>");
    const showResult = this.status === "review" || this.status === "accepted";
    if (showResult && !!this.currentExpression) {
      row(getLocString("aiex.currentExpression"), "<code>" + escapeHtml(this.currentExpression) + "</code>", "current");
    }
    if (showResult && !!this.expression) {
      row(getLocString("aiex.newExpression"), "<code>" + escapeHtml(this.expression) + "</code>", "suggested");
      const display = this.getDisplayText(this.expression);
      if (!!display && display !== this.expression) row(getLocString("aiex.readsAs"), escapeHtml(display), "display");
    }
    if ((showResult || this.status === "explained" || this.status === "empty") && !!this.explanation) {
      row(getLocString("aiex.explanation"), escapeHtml(this.explanation), "explanation");
    }
    if (showResult && this.fixCount > 0) {
      parts.push("<div class=\"svc-expression-assistant__note\">" + escapeHtml(getLocString("aiex.fixedAutomatically")) + "</div>");
    }
    const findings = showResult && !!this.checkResult ? this.checkResult.findings : [];
    if (findings.length > 0) {
      parts.push("<div class=\"svc-expression-assistant__label\">" + escapeHtml(getLocString("aiex.findings")) + ":</div><ul class=\"svc-expression-assistant__findings\">");
      findings.forEach(f => {
        const severity = getLocString("aiex.severity" + f.severity.charAt(0).toUpperCase() + f.severity.substring(1));
        const where = this.getFindingContext(f);
        parts.push("<li class=\"svc-expression-assistant__finding svc-expression-assistant__finding--" + escapeHtml(f.severity) + "\">" +
          "<strong>" + escapeHtml(severity) + "</strong>: " + escapeHtml(f.text) + (!!where ? " " + escapeHtml(where) : "") + "</li>");
      });
      parts.push("</ul>");
    }
    return parts.join("");
  }
  private updateSurvey(survey?: SurveyModel): void {
    survey = survey || this.surveyValue;
    if (!survey || survey.isDisposed) return;
    const statusQuestion: any = survey.getQuestionByName("status");
    statusQuestion.html = "<div class=\"svc-expression-assistant__status\" role=\"status\" aria-live=\"polite\">" +
      escapeHtml(this.getStatusText()) + "</div>";
    const review: any = survey.getQuestionByName("review");
    const html = this.getReviewHtml();
    review.html = html;
    review.visible = !!html;
    survey.getQuestionByName("prompt").readOnly = this.isLoading;
    this.updateFixes(survey);
    this.updateActions();
  }
  private updateFixes(survey: SurveyModel): void {
    const panel = <PanelModel>survey.getPanelByName("fixes");
    panel.elements.slice().forEach(el => panel.removeElement(el));
    const findings = this.status === "review" && !!this.checkResult ? this.checkResult.findings.filter(f => !!f.fix) : [];
    findings.forEach((finding, index) => {
      const question = <QuestionLinkValueModel>Serializer.createClass("linkvalue");
      question.name = "fix" + index;
      question.titleLocation = "hidden";
      question.showValueInLink = false;
      question.allowClear = false;
      question.linkValueText = format("aiex.applyFix", finding.fix.title + " - " + finding.fix.expression);
      question.linkClickCallback = () => this.applyFix(finding);
      panel.addElement(question);
    });
    panel.visible = findings.length > 0;
  }

  // the footer of the dialog: Accept and Reject are its Apply and Cancel; Generate, Explain and Stop
  // are added in front of them
  private popupModel: any;
  public generateAction: Action;
  public explainAction: Action;
  public stopAction: Action;
  public attachPopup(popupModel: any): void {
    this.popupModel = popupModel;
    this.generateAction = new Action({
      id: "expression-assistant-generate", title: getLocString("aiex.generate"), visibleIndex: 10,
      action: () => this.generate()
    } as IAction);
    this.explainAction = new Action({
      id: "expression-assistant-explain", title: getLocString("aiex.explain"), visibleIndex: 20,
      action: () => this.explain()
    } as IAction);
    this.stopAction = new Action({
      id: "expression-assistant-stop", title: getLocString("aiex.stop"), visibleIndex: 30,
      action: () => this.cancel()
    } as IAction);
    const toolbar = !!popupModel ? popupModel.footerToolbar : undefined;
    if (!!toolbar) {
      toolbar.actions.splice(0, 0, this.explainAction, this.generateAction, this.stopAction);
      const apply = toolbar.getActionById("apply");
      if (!!apply) apply.title = getLocString("aiex.accept");
      const cancel = toolbar.getActionById("cancel");
      if (!!cancel) cancel.title = getLocString("aiex.reject");
    }
    this.registerFunctionOnPropertiesValueChanged(["prompt"], () => this.updateActions(), "actions");
    this.updateActions();
  }
  private updateActions(): void {
    if (!this.generateAction) return;
    this.generateAction.title = getLocString(this.hasResult ? "aiex.refine" : "aiex.generate");
    this.generateAction.enabled = this.canGenerate;
    this.explainAction.enabled = this.canExplain;
    this.stopAction.visible = this.isLoading;
    const toolbar = !!this.popupModel ? this.popupModel.footerToolbar : undefined;
    const apply = !!toolbar ? toolbar.getActionById("apply") : undefined;
    if (!!apply) apply.enabled = this.canAccept;
  }
}

// Opens the assistant in a dialog. With no dialog implementation (settings.showDialog not set, as in
// unit tests) the assistant is returned without a popup.
export function showExpressionAssistant(options: IExpressionAssistantOptions): ExpressionAssistant {
  const assistant = new ExpressionAssistant(options);
  const creator = options.creator;
  const survey = assistant.survey;
  if (!surveySettings.showDialog) return assistant;
  const popupModel = surveySettings.showDialog(<IDialogOptions>{
    componentName: "survey",
    data: { survey: survey, model: survey },
    onApply: (): boolean => assistant.accept(),
    onCancel: (): void => assistant.reject(),
    onHide: (): void => assistant.dispose(),
    cssClass: "svc-property-editor svc-creator-popup svc-expression-assistant",
    title: getLocString("aiex.title"),
    displayMode: creator.isMobileView ? "overlay" : "popup",
    isFocusedContent: true
  }, creator.rootElement);
  assistant.attachPopup(popupModel);
  return assistant;
}

// The property grid entry point: the title action of an expression or condition property.
export function createExpressionAssistantTitleAction(obj: Base, question: Question, getDisplayText?: (expression: string) => string): IAction {
  const creator = getExpressionAssistantCreator(obj);
  if (!isExpressionAssistantAvailable(creator)) return undefined;
  const propertyName = (<any>question).property?.name;
  if (!propertyName) return undefined;
  return {
    id: "property-grid-expression-assistant",
    iconName: iconName,
    iconSize: "auto",
    title: getLocString("aiex.actionTitle"),
    showTitle: false,
    enabled: !question.isReadOnly,
    action: () => {
      showExpressionAssistant({
        creator: creator,
        getInput: () => ({ sites: [{ obj: obj, propertyName: propertyName }] }),
        getExpression: () => (<any>obj)[propertyName] || "",
        // the property grid question's own value path: onValueChanging and validation run as for a
        // typed value, and the property setter fires once - one undo step
        accept: (expression: string) => { question.value = expression; },
        getDisplayText: getDisplayText,
      });
    }
  };
}
