import { ActionContainer, PanelModel, Question, settings as surveySettings } from "survey-core";
import { CreatorTester } from "../creator-tester";
import { PropertyGridModelTester } from "../property-grid/property-grid.base";
import { ConditionEditor } from "../../src/property-grid/condition-survey";
import { TabLogicPlugin } from "../../src/components/tabs/logic-plugin";
import { ExpressionAssistantRequestEvent } from "../../src/creator-events-api";
import {
  ExpressionAssistant, IExpressionAssistantOptions, showExpressionAssistant,
} from "../../src/expression-assistant/expression-assistant";
import { buildExpressionContext } from "../../src/expression-assistant/expression-context";
import { getExpressionLintOptions } from "../../src/expression-assistant/expression-check";

export * from "../../src/components/link-value";

const fruitJson = {
  elements: [
    { type: "radiogroup", name: "fruit", choices: ["apple", "banana"] },
    { type: "text", name: "q2" },
  ],
};

function createCreator(json: any = fruitJson, options?: any): { creator: CreatorTester, requests: Array<ExpressionAssistantRequestEvent> } {
  const creator = new CreatorTester(options);
  creator.JSON = json;
  const requests: Array<ExpressionAssistantRequestEvent> = [];
  creator.onGenerateExpression.add((_, options) => { requests.push(options); });
  return { creator: creator, requests: requests };
}
function getTitleActions(creator: CreatorTester, obj: any, propertyName: string): Array<any> {
  const propertyGrid = new PropertyGridModelTester(obj, creator);
  const question = propertyGrid.survey.getQuestionByName(propertyName);
  return question.getTitleActions();
}
function getAssistantAction(creator: CreatorTester, obj: any, propertyName: string): any {
  return getTitleActions(creator, obj, propertyName).filter(a => a.id === "property-grid-expression-assistant")[0];
}
// A property-grid assistant on question q2's visibleIf, the way the title action opens it.
function createAssistant(creator: CreatorTester, name: string = "q2", propertyName: string = "visibleIf"): ExpressionAssistant {
  const obj: any = creator.survey.getQuestionByName(name);
  const options: IExpressionAssistantOptions = {
    creator: creator,
    getInput: () => ({ sites: [{ obj: obj, propertyName: propertyName }] }),
    getExpression: () => obj[propertyName] || "",
    accept: (expression: string) => { obj[propertyName] = expression; },
  };
  return new ExpressionAssistant(options);
}

describe("The expression assistant: availability (ai-expressions)", () => {
  test("no handler: no title action and no prompt line", () => {
    const creator = new CreatorTester();
    creator.JSON = fruitJson;
    const q2 = creator.survey.getQuestionByName("q2");
    expect(getAssistantAction(creator, q2, "visibleIf")).toBeUndefined();
    const editor = new ConditionEditor(creator.survey, q2, creator, "visibleIf");
    editor.isModal = false;
    expect(editor.assistantPrompt).toBeFalsy();
    expect(editor.showExpressionAssistant()).toBeUndefined();
  });
  test("with a handler: a title action on condition and expression properties, a prompt line in the Logic tab editor only", () => {
    const { creator } = createCreator({ elements: [{ type: "text", name: "q1", inputType: "number" }, { type: "text", name: "q2" }] });
    const q1 = creator.survey.getQuestionByName("q1");
    const action = getAssistantAction(creator, q1, "visibleIf");
    expect(action).toBeTruthy();
    expect(action.enabled).toBe(true);
    expect(action.iconName).toBe("icon-toolbox-expression-24x24");
    expect(getAssistantAction(creator, q1, "minValueExpression")).toBeTruthy();
    const editor = new ConditionEditor(creator.survey, q1, creator, "visibleIf");
    // the modal: the property grid's title action opens the assistant
    expect(editor.isModal).toBe(true);
    expect(editor.assistantPrompt).toBeFalsy();
    editor.isModal = false;
    expect(editor.assistantPrompt).toBeTruthy();
    expect(editor.editSurvey.getAllQuestions()[0]).toBe(editor.assistantPrompt);
    const titleActions = editor.assistantPrompt.getTitleActions();
    expect(titleActions.map(a => a.id)).toContain("condition-expression-assistant");
  });
  test("a read-only property disables the action", () => {
    const { creator } = createCreator();
    creator.readOnly = true;
    expect(getAssistantAction(creator, creator.survey.getQuestionByName("q2"), "visibleIf").enabled).toBe(false);
  });
  test("onPropertyEditorUpdateTitleActions can remove the action", () => {
    const { creator } = createCreator();
    creator.onPropertyEditorUpdateTitleActions.add((_, options) => {
      options.titleActions.splice(0, options.titleActions.length,
        ...options.titleActions.filter(a => a.id !== "property-grid-expression-assistant"));
    });
    expect(getAssistantAction(creator, creator.survey.getQuestionByName("q2"), "visibleIf")).toBeUndefined();
  });
});

describe("The expression assistant: a request and its result (ai-expressions)", () => {
  test("generate, a clean check, review, Accept: the property is set in one undo step", () => {
    const { creator, requests } = createCreator();
    const assistant = createAssistant(creator);
    assistant.generate("show when apple is chosen");
    expect(assistant.status).toBe("loading");
    expect(requests).toHaveLength(1);
    const request = requests[0];
    expect(request.kind).toBe("generate");
    expect(request.prompt).toBe("show when apple is chosen");
    expect(request.expression).toBe("");
    expect(request.isCondition).toBe(true);
    expect(request.element).toBe(creator.survey.getQuestionByName("q2"));
    expect(request.propertyName).toBe("visibleIf");
    expect(request.sites).toEqual([{ element: request.element, propertyName: "visibleIf" }]);
    expect(request.context.variables.map(v => v.name)).toEqual(["fruit"]);
    expect(request.systemPrompt.indexOf("SurveyJS expression syntax")).toBeGreaterThan(-1);
    expect(request.signal.aborted).toBe(false);
    expect(request.history).toEqual([{ kind: "generate", prompt: "show when apple is chosen" }]);
    request.callback({ expression: "{fruit} = 'apple'", explanation: "Shown for apple." });
    expect(assistant.status).toBe("review");
    expect(assistant.expression).toBe("{fruit} = 'apple'");
    expect(assistant.checkResult.findings).toHaveLength(0);
    expect(assistant.canAccept).toBe(true);
    const canUndo = creator.undoRedoManager.canUndo();
    expect(assistant.accept()).toBe(true);
    expect(assistant.status).toBe("accepted");
    expect(creator.survey.getQuestionByName("q2").visibleIf).toBe("{fruit} = 'apple'");
    expect(creator.undoRedoManager.canUndo()).toBe(true);
    creator.undo();
    expect(creator.survey.getQuestionByName("q2").visibleIf).toBeFalsy();
    expect(creator.undoRedoManager.canUndo()).toBe(canUndo);
  });
  test("Reject leaves the property and the undo stack alone, and aborts a pending request", () => {
    const { creator, requests } = createCreator();
    const assistant = createAssistant(creator);
    assistant.generate("x");
    const canUndo = creator.undoRedoManager.canUndo();
    assistant.reject();
    expect(requests[0].signal.aborted).toBe(true);
    requests[0].callback({ expression: "{fruit} = 'apple'" });
    expect(assistant.expression).toBe("");
    expect(creator.survey.getQuestionByName("q2").visibleIf).toBeFalsy();
    expect(creator.undoRedoManager.canUndo()).toBe(canUndo);
  });
  test("modify when the target has an expression; Refine sends modify with the history", () => {
    const { creator, requests } = createCreator();
    creator.survey.getQuestionByName("q2").visibleIf = "{fruit} = 'banana'";
    const assistant = createAssistant(creator);
    assistant.generate("also apple");
    expect(requests[0].kind).toBe("modify");
    expect(requests[0].expression).toBe("{fruit} = 'banana'");
    requests[0].callback({ expression: "{fruit} anyof ['apple', 'banana']" });
    assistant.refine("only apple");
    expect(requests[1].kind).toBe("modify");
    expect(requests[1].prompt).toBe("only apple");
    expect(requests[1].expression).toBe("{fruit} anyof ['apple', 'banana']");
    expect(requests[1].history).toEqual([
      { kind: "modify", prompt: "also apple" },
      { kind: "modify", expression: "{fruit} anyof ['apple', 'banana']" },
      { kind: "modify", prompt: "only apple" },
    ]);
  });
  test("errors: one automatic fix with the English findings, then review", () => {
    const { creator, requests } = createCreator();
    const assistant = createAssistant(creator);
    assistant.generate("apple");
    requests[0].callback({ expression: "{frut} = 'apple'" });
    expect(assistant.status).toBe("loading");
    expect(assistant.fixCount).toBe(1);
    expect(requests).toHaveLength(2);
    expect(requests[1].kind).toBe("fix");
    expect(requests[1].prompt).toBe("");
    expect(requests[1].expression).toBe("{frut} = 'apple'");
    expect(requests[1].findings).toEqual([{
      ruleId: "reference/unknown", reason: "notFound", severity: "error", message: requests[1].findings[0].message,
    }]);
    expect(requests[1].findings[0].message.indexOf("\"frut\" is not found")).toBe(0);
    requests[1].callback({ expression: "{fruit} = 'apple'" });
    expect(assistant.status).toBe("review");
    expect(assistant.canAccept).toBe(true);
    expect(assistant.getReviewHtml().indexOf("corrected automatically")).toBeGreaterThan(-1);
  });
  test("errors after the fix attempts: Accept disabled; the option sets the number of attempts", () => {
    const { creator, requests } = createCreator(fruitJson, { expressionAssistantFixAttempts: 2 });
    expect(creator.expressionAssistantFixAttempts).toBe(2);
    const assistant = createAssistant(creator);
    assistant.generate("apple");
    requests[0].callback({ expression: "{frut} = 'apple'" });
    requests[1].callback({ expression: "{fruut} = 'apple'" });
    requests[2].callback({ expression: "{fruuut} = 'apple'" });
    expect(requests).toHaveLength(3);
    expect(assistant.status).toBe("review");
    expect(assistant.canAccept).toBe(false);
    expect(assistant.accept()).toBe(false);
    expect(assistant.getStatusText()).toBe("The suggested expression has errors and cannot be accepted.");
    expect(creator.survey.getQuestionByName("q2").visibleIf).toBeFalsy();
  });
  test("warnings only: Accept enabled; a one-click fix re-checks without a request", () => {
    const { creator, requests } = createCreator(fruitJson, { expressionAssistantFixAttempts: 0 });
    const assistant = createAssistant(creator);
    assistant.generate("apple");
    requests[0].callback({ expression: "{fruit} = 'aple'" });
    expect(assistant.checkResult.warningCount).toBe(1);
    expect(assistant.canAccept).toBe(true);
    assistant.generate("again");
    requests[1].callback({ expression: "{frut} = 'apple'" });
    expect(assistant.canAccept).toBe(false);
    const finding = assistant.checkResult.findings[0];
    expect(finding.fix.expression).toBe("{fruit} = 'apple'");
    assistant.applyFix(finding);
    expect(requests).toHaveLength(2);
    expect(assistant.expression).toBe("{fruit} = 'apple'");
    expect(assistant.canAccept).toBe(true);
  });
  test("Explain: no check, no Accept, the explanation shown", () => {
    const { creator, requests } = createCreator();
    creator.survey.getQuestionByName("q2").visibleIf = "{fruit} = 'apple'";
    const assistant = createAssistant(creator);
    assistant.explain();
    expect(requests[0].kind).toBe("explain");
    expect(requests[0].expression).toBe("{fruit} = 'apple'");
    expect(requests[0].history).toEqual([]);
    requests[0].callback({ explanation: "Shown when the respondent picks apple." });
    expect(assistant.status).toBe("explained");
    expect(assistant.checkResult).toBeUndefined();
    expect(assistant.canAccept).toBe(false);
    expect(assistant.getReviewHtml().indexOf("Shown when the respondent picks apple.")).toBeGreaterThan(-1);
  });
});

describe("The expression assistant: delivery (ai-expressions)", () => {
  test("the first callback counts; later ones are ignored", () => {
    const { creator, requests } = createCreator();
    const assistant = createAssistant(creator);
    assistant.generate("x");
    requests[0].callback({ expression: "{fruit} = 'apple'" });
    requests[0].callback({ expression: "{fruit} = 'banana'" });
    expect(assistant.expression).toBe("{fruit} = 'apple'");
  });
  test("a handler that never answers stays loading until Cancel; an answer after Cancel or closing is ignored", () => {
    const { creator, requests } = createCreator();
    const assistant = createAssistant(creator);
    assistant.generate("x");
    expect(assistant.status).toBe("loading");
    assistant.cancel();
    expect(assistant.status).toBe("cancelled");
    expect(requests[0].signal.aborted).toBe(true);
    requests[0].callback({ expression: "{fruit} = 'apple'" });
    expect(assistant.status).toBe("cancelled");
    assistant.generate("y");
    assistant.dispose();
    expect(requests[1].signal.aborted).toBe(true);
    requests[1].callback({ expression: "{fruit} = 'apple'" });
    expect(assistant.expression).toBe("");
  });
  test("error, empty and raw text results", () => {
    const { creator, requests } = createCreator();
    const assistant = createAssistant(creator);
    assistant.generate("x");
    requests[0].callback({ error: "Quota exceeded" });
    expect(assistant.status).toBe("error");
    expect(assistant.getStatusText()).toBe("The assistant reported: Quota exceeded");
    assistant.generate("x");
    requests[1].callback();
    expect(assistant.status).toBe("empty");
    assistant.generate("x");
    requests[2].callback({ text: "{\"expression\": \"\", \"explanation\": \"There is no age question.\"}" });
    expect(assistant.status).toBe("empty");
    expect(assistant.getReviewHtml().indexOf("There is no age question.")).toBeGreaterThan(-1);
    assistant.generate("x");
    requests[3].callback({ text: "```json\n{\"expression\": \"{fruit} = 'apple'\", \"explanation\": \"ok\"}\n```" });
    expect(assistant.status).toBe("review");
    expect(assistant.expression).toBe("{fruit} = 'apple'");
    expect(assistant.explanation).toBe("ok");
  });
  test("AI text is escaped wherever an html question shows it", () => {
    const { creator, requests } = createCreator();
    const assistant = createAssistant(creator);
    assistant.generate("x");
    requests[0].callback({ expression: "{fruit} = '<b>'", explanation: "<img src=x onerror=alert(1)>" });
    const html = assistant.getReviewHtml();
    expect(html.indexOf("<img")).toBe(-1);
    expect(html.indexOf("&lt;img src=x onerror=alert(1)&gt;")).toBeGreaterThan(-1);
    expect(html.indexOf("'&lt;b&gt;'") > -1 || html.indexOf("&#39;&lt;b&gt;&#39;") > -1).toBe(true);
    const status: any = assistant.survey.getQuestionByName("status");
    expect(status.html.indexOf("role=\"status\" aria-live=\"polite\"")).toBeGreaterThan(-1);
  });
  test("onLintSurvey fires once per request, not per check or fix attempt", () => {
    const { creator, requests } = createCreator();
    let counter = 0;
    creator.onLintSurvey.add(() => { counter++; });
    const assistant = createAssistant(creator);
    assistant.generate("x");
    requests[0].callback({ expression: "{frut} = 'apple'" });
    requests[1].callback({ expression: "{fruit} = 'apple'" });
    expect(counter).toBe(1);
    assistant.refine("y");
    expect(counter).toBe(2);
  });
  test("a name the host removes in onLintSurvey is neither offered nor accepted", () => {
    const { creator, requests } = createCreator();
    creator.variablePresets = { presets: [{ name: "p1", variables: { tier: "gold" } }] };
    creator.onLintSurvey.add((_, options) => {
      options.lintOptions.knownVariables = (options.lintOptions.knownVariables || []).filter(name => name !== "tier");
    });
    const assistant = createAssistant(creator);
    assistant.generate("x");
    expect(requests[0].context.variables.map(v => v.name)).not.toContain("tier");
    requests[0].callback({ expression: "{tier} = 'gold'" });
    requests[1].callback({ expression: "{tier} = 'gold'" });
    expect(assistant.checkResult.findings.map(f => f.ruleId)).toEqual(["reference/unknown"]);
  });
  test("the handler gets 02's context and prompt; its changes do not leak into the next request", () => {
    const { creator, requests } = createCreator();
    const assistant = createAssistant(creator);
    assistant.generate("x");
    const expected = buildExpressionContext(creator, [{ obj: creator.survey.getQuestionByName("q2"), propertyName: "visibleIf" }], "",
      undefined, getExpressionLintOptions(creator));
    expect(requests[0].context).toEqual(expected.context);
    expect(requests[0].systemPrompt).toBe(expected.systemPrompt);
    requests[0].context.variables.splice(0, 1);
    requests[0].systemPrompt = "changed";
    requests[0].callback({ expression: "{fruit} = 'apple'" });
    assistant.refine("y");
    expect(requests[1].context.variables.map(v => v.name)).toEqual(["fruit"]);
    expect(requests[1].systemPrompt).toBe(expected.systemPrompt);
  });
});

describe("The expression assistant: entry points (ai-expressions)", () => {
  let savedShowDialog: any;
  let dialogs: Array<any>;
  beforeEach(() => {
    savedShowDialog = surveySettings.showDialog;
    dialogs = [];
    surveySettings.showDialog = <any>((options: any) => {
      const footerToolbar = new ActionContainer();
      footerToolbar.setItems([{ id: "cancel", title: "Cancel" }, { id: "apply", title: "Apply" }]);
      const popup = { options: options, footerToolbar: footerToolbar };
      dialogs.push(popup);
      return popup;
    });
  });
  afterEach(() => { surveySettings.showDialog = savedShowDialog; });

  test("the title action opens the dialog: Accept and Reject are its Apply and Cancel", () => {
    const { creator, requests } = createCreator();
    const q2 = creator.survey.getQuestionByName("q2");
    const propertyGrid = new PropertyGridModelTester(q2, creator);
    const pgQuestion = propertyGrid.survey.getQuestionByName("visibleIf");
    pgQuestion.getTitleActions().filter(a => a.id === "property-grid-expression-assistant")[0].action();
    expect(dialogs).toHaveLength(1);
    const popup = dialogs[0];
    expect(popup.options.componentName).toBe("survey");
    const footer = popup.footerToolbar;
    expect(footer.actions.map(a => a.id)).toEqual(["expression-assistant-explain", "expression-assistant-generate",
      "expression-assistant-stop", "cancel", "apply"]);
    expect(footer.getActionById("apply").title).toBe("Accept");
    expect(footer.getActionById("cancel").title).toBe("Reject");
    expect(footer.getActionById("apply").enabled).toBe(false);
    expect(footer.getActionById("expression-assistant-generate").enabled).toBe(false);
    const survey = popup.options.data.survey;
    survey.setValue("prompt", "apple");
    expect(footer.getActionById("expression-assistant-generate").enabled).toBe(true);
    footer.getActionById("expression-assistant-generate").action();
    expect(survey.getQuestionByName("prompt").isReadOnly).toBe(true);
    expect(footer.getActionById("expression-assistant-stop").visible).toBe(true);
    requests[0].callback({ expression: "{fruit} = 'apple'" });
    expect(footer.getActionById("apply").enabled).toBe(true);
    expect(footer.getActionById("expression-assistant-generate").title).toBe("Refine");
    // Accept writes through the property grid question: its value and the property change once
    expect(popup.options.onApply()).toBe(true);
    expect(pgQuestion.value).toBe("{fruit} = 'apple'");
    expect(q2.visibleIf).toBe("{fruit} = 'apple'");
    popup.options.onHide();
  });
  test("closing the dialog aborts a pending request", () => {
    const { creator, requests } = createCreator();
    const editor = new ConditionEditor(creator.survey, creator.survey.getQuestionByName("q2"), creator, "visibleIf");
    const assistant = editor.showExpressionAssistant();
    expect(assistant.prompt).toBe("");
    assistant.generate("apple");
    dialogs[0].options.onHide();
    expect(requests[0].signal.aborted).toBe(true);
    expect(assistant.isDisposed).toBe(true);
  });
  test("the Logic tab condition editor's AI line is a title with the AI action and no input", () => {
    const { creator } = createCreator();
    const editor = new ConditionEditor(creator.survey, creator.survey.getQuestionByName("q2"), creator, "visibleIf");
    editor.isModal = false;
    expect(editor.assistantPrompt.getType()).toBe("expression");
    expect(editor.assistantPrompt.hasTitle).toBe(true);
    editor.assistantPrompt.getTitleActions().filter(a => a.id === "condition-expression-assistant")[0].action();
    expect(dialogs).toHaveLength(1);
    expect(dialogs[0].options.data.survey.getValue("prompt")).toBeFalsy();
  });
  test("condition modal: a buildable result fills the rows, another the text editor; Apply writes once", () => {
    const { creator, requests } = createCreator();
    const q2 = creator.survey.getQuestionByName("q2");
    const editor = new ConditionEditor(creator.survey, q2, creator, "visibleIf");
    let assistant = editor.showExpressionAssistant();
    assistant.generate("apple");
    requests[0].callback({ expression: "{fruit} = 'apple'" });
    expect(assistant.accept()).toBe(true);
    expect(editor.panel.visible).toBe(true);
    expect(editor.textEditor.visible).toBe(false);
    expect(editor.panel.panels[0].getQuestionByName("questionName").value).toBe("fruit");
    expect(q2.visibleIf).toBeFalsy();
    assistant = editor.showExpressionAssistant();
    assistant.generate("count");
    requests[1].callback({ expression: "iif({fruit} = 'apple', 1, 0) > 0" });
    expect(assistant.accept()).toBe(true);
    expect(editor.panel.visible).toBe(false);
    expect(editor.textEditor.visible).toBe(true);
    expect(editor.textEditor.value).toBe("iif({fruit} = 'apple', 1, 0) > 0");
    expect(q2.visibleIf).toBeFalsy();
    let changes = 0;
    q2.registerFunctionOnPropertyValueChanged("visibleIf", () => { changes++; });
    expect(editor.apply()).toBe(true);
    expect(q2.visibleIf).toBe("iif({fruit} = 'apple', 1, 0) > 0");
    expect(changes).toBe(1);
  });
  test("Logic tab: a question action and a new setvalue trigger; Accept fills the rule; saving creates the trigger", () => {
    surveySettings.animationEnabled = false;
    const { creator, requests } = createCreator({
      elements: [{ type: "radiogroup", name: "fruit", choices: ["apple", "banana"] }, { type: "text", name: "q2", visibleIf: "{fruit} = 'banana'" }, { type: "text", name: "q3" }],
    }, { showLogicTab: true });
    const plugin = <TabLogicPlugin>creator.getPlugin("logic");
    plugin.activate();
    const logic = plugin.model;
    logic.editItem(logic.items[0]);
    logic.itemEditor.panel.addPanel();
    const panel = logic.itemEditor.panels[1];
    panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
    (<PanelModel>panel.getElementByName("triggerQuestionsPanel")).getQuestionByName("setToName").value = "q3";
    const editor = logic.expressionEditor;
    expect(editor.assistantPrompt).toBeTruthy();
    const assistant = editor.showExpressionAssistant();
    assistant.generate("apple");
    expect(requests[0].kind).toBe("modify");
    expect(requests[0].sites.map(s => s.propertyName)).toEqual(["visibleIf", "expression"]);
    requests[0].callback({ expression: "{nosuch} = 1" });
    requests[1].callback({ expression: "{nosuch} = 1" });
    expect(assistant.canAccept).toBe(false);
    // the finding of the trigger names the action it belongs to
    expect(assistant.getReviewHtml().indexOf("in &quot;Set answer&quot;")).toBeGreaterThan(-1);
    assistant.generate("apple");
    requests[2].callback({ expression: "{fruit} = 'apple'" });
    expect(assistant.accept()).toBe(true);
    expect(editor.text).toBe("{fruit} = 'apple'");
    expect(logic.expressionEditorIsFastEntry).toBe(false);
    expect(creator.survey.triggers).toHaveLength(0);
    expect(logic.saveEditableItem()).toBe(true);
    expect(creator.survey.getQuestionByName("q2").visibleIf).toBe("{fruit} = 'apple'");
    expect(creator.survey.triggers).toHaveLength(1);
    expect(creator.survey.triggers[0].expression).toBe("{fruit} = 'apple'");
  });
  test("Logic tab: a non-buildable result goes to the text editor and switches fast entry on", () => {
    surveySettings.animationEnabled = false;
    const { creator, requests } = createCreator({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2", visibleIf: "{q1} = 1" }],
    }, { showLogicTab: true });
    const plugin = <TabLogicPlugin>creator.getPlugin("logic");
    plugin.activate();
    const logic = plugin.model;
    logic.editItem(logic.items[0]);
    const assistant = logic.expressionEditor.showExpressionAssistant();
    assistant.generate("x");
    requests[0].callback({ expression: "age({q1}) > 18" });
    expect(assistant.accept()).toBe(true);
    expect(logic.expressionEditor.textEditor.visible).toBe(true);
    expect(logic.expressionEditorIsFastEntry).toBe(true);
    expect(logic.expressionEditorCanShowBuilder).toBe(false);
  });
  test("Logic tab: a pending setValueExpression closing a loop is reported with the result", () => {
    surveySettings.animationEnabled = false;
    const { creator, requests } = createCreator({
      elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }, { type: "text", name: "q3", defaultValueExpression: "{q2}" }],
    }, { showLogicTab: true });
    const plugin = <TabLogicPlugin>creator.getPlugin("logic");
    plugin.activate();
    const logic = plugin.model;
    logic.addNew();
    const panel = logic.itemEditor.panels[0];
    panel.getQuestionByName("logicTypeName").value = "question_setValue";
    panel.getQuestionByName("elementSelector").value = "q2";
    panel.getQuestionByName("setValueExpression").value = "{q3}";
    const assistant = logic.expressionEditor.showExpressionAssistant();
    assistant.generate("x");
    requests[0].callback({ expression: "{q1} notempty" });
    expect(assistant.checkResult.findings.map(f => f.ruleId)).toEqual(["cycle/value-write"]);
    // a warning: shown, Accept stays possible (D5: errors block)
    expect(assistant.canAccept).toBe(true);
  });
  test("a rule with no action yet cannot accept a result", () => {
    surveySettings.animationEnabled = false;
    const { creator, requests } = createCreator({ elements: [{ type: "text", name: "q1" }] }, { showLogicTab: true });
    const plugin = <TabLogicPlugin>creator.getPlugin("logic");
    plugin.activate();
    plugin.model.addNew();
    const assistant = plugin.model.expressionEditor.showExpressionAssistant();
    assistant.generate("x");
    requests[0].callback({ expression: "{q1} = 1" });
    expect(assistant.canAccept).toBe(false);
    expect(assistant.getStatusText()).toBe("Add an action to the rule before asking the assistant.");
  });
});
