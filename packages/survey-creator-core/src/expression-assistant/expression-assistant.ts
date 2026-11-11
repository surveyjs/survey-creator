import {
  Action, AIRequestIssue, AIRequestResult, AIRequestSession, Base, ExpressionAIFeature, ExpressionAIRequestEvent, FilterAIRequestEvent,
  IAction, IAIFeature, IDialogOptions, IExpressionAIIssue as ICoreExpressionAIIssue, IExpressionResponse, PanelModel, Question, Serializer,
  SurveyModel, buildExpressionInstruction, property, settings as surveySettings,
} from "survey-core";
import { ISurveyLintOptions } from "survey-core/linter";
import { SurveyCreatorModel } from "../creator-base";
import { getLocString } from "../editorLocalization";
import { ConditionEditor } from "../property-grid/condition-survey";
import { QuestionLinkValueModel } from "../components/link-value";
import {
  checkExpression, getExpressionLintOptions, IExpressionCheckFinding, IExpressionCheckPending, IExpressionCheckResult, IExpressionSite,
} from "./expression-check";
import { buildExpressionContext, buildExpressionSystemPrompt } from "./expression-context";

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
  // a target that is no survey expression brings its own AI part; without it the request is built
  // from the survey's questions and every answer is checked by the survey linter
  aiFeature?: IExpressionAssistantFeature;
}

// What a request of an IExpressionAssistantFeature sends: the session's request without the parts
// the assistant fills in (action, prompt, retries).
export interface IExpressionAssistantFeatureRequest {
  feature: IAIFeature<IExpressionResponse, AIRequestIssue>;
  instruction: string;
  context: any;
  systemPrompt: string;
  buildSystemPrompt: (context: any) => string;
  getFields: (retryOf?: IExpressionResponse) => { [name: string]: any };
}
// The AI part of a target that is no survey expression (a Filter Control preset's): its own context,
// prompt and answer check instead of the survey's questions and the survey linter. It writes and
// changes an expression; there is nothing to explain.
export interface IExpressionAssistantFeature {
  createRequest(action: "generate" | "modify", prompt: string, expression: string): IExpressionAssistantFeatureRequest;
  // the problems of an expression, by the check the feature validates answers with
  check(expression: string): Array<AIRequestIssue>;
}
// The payload of creator.onAIExpressionRequest: a survey expression's, or a filter preset's
// (responseFormat.name "survey_filter", question - the Filter Control).
export type AIExpressionRequestEvent = ExpressionAIRequestEvent | FilterAIRequestEvent;

export type ExpressionAssistantStatus = "ready" | "loading" | "review" | "explained" | "cancelled" | "error" | "empty" | "accepted";

// The creator a property grid or a condition editor works for: the designer survey carries it.
export function getExpressionAssistantCreator(obj: any): SurveyCreatorModel {
  let survey = !!obj && typeof obj.getSurvey === "function" ? obj.getSurvey() : undefined;
  if (!survey && !!obj && obj.isSurvey) survey = obj;
  return !!survey ? survey.creator : undefined;
}

export function isExpressionAssistantAvailable(creator: SurveyCreatorModel): boolean {
  return !!creator && !!creator.onAIExpressionRequest && !creator.onAIExpressionRequest.isEmpty;
}

const iconName = "icon-ai-24x24";
export const expressionAssistantIconName = iconName;

function escapeHtml(text: string): string {
  return String(text === undefined || text === null ? "" : text)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function format(name: string, ...args: Array<any>): string {
  const str = getLocString(name);
  return args.length > 0 ? (<any>str)["format"].apply(str, args) : str;
}

type ExpressionAction = ExpressionAIRequestEvent["action"];
type IExpressionAIIssue = ICoreExpressionAIIssue<IExpressionCheckFinding>;

interface IAssistantRequest {
  input: IExpressionAssistantInput;
  lintOptions: ISurveyLintOptions;
}

// One assistant session: an entry point creates it, shows it, and it is disposed when the popup closes.
// State lives here, not on the creator: the creator only owns the event and the fix-attempts option.
// The requests go through an AIRequestSession, which keeps the conversation and sends a rejected
// answer back.
export class ExpressionAssistant extends Base {
  @property({ defaultValue: "ready" }) status: ExpressionAssistantStatus;
  @property({ defaultValue: "" }) prompt: string;
  // the suggested expression under review
  @property({ defaultValue: "" }) expression: string;
  @property({ defaultValue: "" }) explanation: string;
  @property({ defaultValue: "" }) errorText: string;
  @property({ defaultValue: 0 }) fixCount: number;
  public checkResult: IExpressionCheckResult;
  private session: AIRequestSession<IExpressionResponse, IExpressionAIIssue, AIExpressionRequestEvent>;
  private request: IAssistantRequest;
  private surveyValue: SurveyModel;

  constructor(public readonly options: IExpressionAssistantOptions) {
    super();
    const creator = options.creator;
    this.session = new AIRequestSession<IExpressionResponse, IExpressionAIIssue, AIExpressionRequestEvent>({
      fire: options => creator.onAIExpressionRequest.fire(creator, options),
      getFixAttempts: () => creator.aiFixAttempts,
    });
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
  public get canExplain(): boolean { return !this.options.aiFeature && !this.isLoading && !!this.currentExpression; }

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
    if (!!this.options.aiFeature) return;
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
    this.session.dispose();
    if (!!this.surveyValue) {
      this.surveyValue.dispose();
      this.surveyValue = undefined;
    }
    super.dispose();
  }

  private abort(): void {
    this.session.cancel();
  }
  private startRequest(action: ExpressionAction, prompt: string, expression: string): void {
    this.abort();
    if (!!this.options.aiFeature && action !== "explain") {
      this.startFeatureRequest(action, prompt, expression);
      return;
    }
    const input = this.options.getInput() || { sites: [] };
    // one onLintSurvey per request: the same options build the context and every check of it, so
    // the AI is never told a name the check rejects
    const lintOptions = getExpressionLintOptions(this.creator);
    const built = buildExpressionContext(this.creator, input.sites, expression, this.options.editor, lintOptions);
    this.request = { input: input, lintOptions: lintOptions };
    this.fixCount = 0;
    this.errorText = "";
    if (action !== "explain") {
      this.checkResult = undefined;
    }
    const sites = input.sites || [];
    // the check of the answer validated last: the session validates an answer right before it reports
    // it or sends it back, so onRetry and the result read the check of their own answer
    let answerCheckResult: IExpressionCheckResult;
    // One instance per author request: it checks every answer against the request's sites with the
    // request's lint options (one onLintSurvey per request).
    const feature = new ExpressionAIFeature<IExpressionCheckFinding>(answerExpression => {
      answerCheckResult = checkExpression(this.creator, answerExpression, sites, input.pending, lintOptions);
      // an unchecked site is no defect of the expression: it is no issue a retry could help
      return answerCheckResult.findings.map(f => ({ severity: f.severity, message: f.englishText, code: f.ruleId + ":" + f.reason, finding: f }));
    });
    this.status = "loading";
    this.session.send({
      feature: feature,
      action: action,
      userPrompt: prompt,
      instruction: buildExpressionInstruction(action, prompt, expression),
      context: built.context,
      systemPrompt: built.systemPrompt,
      buildSystemPrompt: buildExpressionSystemPrompt,
      // an explanation is no turn of the conversation that writes the expression
      keepTurn: action !== "explain",
      getFields: (retryOf?: IExpressionResponse) => ({
        expression: !!retryOf ? retryOf.expression : expression || "",
        isCondition: built.context.target.isCondition,
        targets: sites.map(site => ({ element: site.obj, propertyName: site.propertyName })),
      }),
      onRetry: (answer: IExpressionResponse, _: Array<IExpressionAIIssue>, attempt: number) => {
        this.fixCount = attempt;
        this.setResult(answer.expression, answer.explanation, true, answerCheckResult);
      },
    }, (result) => {
      if (!this.isDisposed)this.onResult(action, result, answerCheckResult);
    });
  }
  // A request of the target's own AI part: its context, prompt and check; the conversation, the
  // retries and the review are the assistant's as for any expression.
  private startFeatureRequest(action: "generate" | "modify", prompt: string, expression: string): void {
    const built = this.options.aiFeature.createRequest(action, prompt, expression);
    this.request = { input: { sites: [] }, lintOptions: undefined };
    this.fixCount = 0;
    this.errorText = "";
    this.checkResult = undefined;
    this.status = "loading";
    this.session.send(<any>{
      feature: built.feature,
      action: action,
      userPrompt: prompt,
      instruction: built.instruction,
      context: built.context,
      systemPrompt: built.systemPrompt,
      buildSystemPrompt: built.buildSystemPrompt,
      getFields: built.getFields,
      onRetry: (answer: IExpressionResponse, _: Array<AIRequestIssue>, attempt: number) => {
        this.fixCount = attempt;
        this.setResult(answer.expression, answer.explanation, true);
      },
    }, (result: AIRequestResult<IExpressionResponse, IExpressionAIIssue>) => {
      if (!this.isDisposed)this.onResult(action, result, undefined);
    });
  }
  // The check of an expression: the target's own (every issue a finding, nothing left unchecked), or
  // the survey linter at the request's sites.
  private checkExpression(expression: string): IExpressionCheckResult {
    const aiFeature = this.options.aiFeature;
    if (!aiFeature) {
      const input = this.request.input;
      return checkExpression(this.creator, expression, input.sites, input.pending, this.request.lintOptions);
    }
    const findings: Array<IExpressionCheckFinding> = aiFeature.check(expression).map(issue => ({
      ruleId: issue.code || "", reason: "", severity: issue.severity, path: "", text: issue.message, englishText: issue.message
    }));
    const count = (severity: string): number => findings.filter(f => f.severity === severity).length;
    return { expression: expression, findings: findings, errorCount: count("error"), warningCount: count("warning"), infoCount: count("info"),
      unaddressedSites: [], isComplete: true };
  }
  private onResult(action: ExpressionAction, result: AIRequestResult<IExpressionResponse, IExpressionAIIssue>,
    checkResult: IExpressionCheckResult): void {
    if (result.status === "error") {
      this.errorText = result.error;
      this.status = "error";
      return;
    }
    const answer = result.answer;
    if (action === "explain") {
      this.explanation = answer.explanation || "";
      this.status = !!this.explanation ? "explained" : "empty";
      return;
    }
    if (result.status === "empty") {
      this.explanation = answer.explanation || "";
      this.status = "empty";
      return;
    }
    this.setResult(answer.expression, answer.explanation || "", true, checkResult);
    this.status = "review";
  }
  private setResult(expression: string, explanation: string, isPending?: boolean, checkResult?: IExpressionCheckResult): IExpressionCheckResult {
    this.expression = expression;
    this.explanation = explanation;
    this.checkResult = checkResult || this.checkExpression(expression);
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
      // a target's own AI part only writes and changes an expression: no Explain
      const actions = !!this.options.aiFeature ? [this.generateAction, this.stopAction] : [this.explainAction, this.generateAction, this.stopAction];
      toolbar.actions.splice(0, 0, ...actions);
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

// The property grid entry point: the title action of an expression or condition property - or of a
// property whose expression is no survey expression, with that target's own AI part (aiFeature).
export function createExpressionAssistantTitleAction(obj: Base, question: Question, getDisplayText?: (expression: string) => string,
  aiFeature?: IExpressionAssistantFeature): IAction {
  const creator = getExpressionAssistantCreator(obj);
  if (!isExpressionAssistantAvailable(creator)) return undefined;
  const propertyName = (<any>question).property?.name;
  if (!propertyName) return undefined;
  return {
    id: "property-grid-expression-assistant",
    iconName: iconName,
    iconSize: "auto",
    appearance: { style: "neutral", mode: "tertiary" },
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
        aiFeature: aiFeature,
      });
    }
  };
}
