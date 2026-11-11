import { ActionContainer, FilterAIRequestEvent, QuestionMatrixDynamicModel, buildFilterAIContext, buildFilterAISystemPrompt, settings as surveySettings } from "survey-core";
import { CreatorTester } from "../creator-tester";
import { PropertyGridModelTester } from "./property-grid.base";

// A Filter Control preset's expression in the property grid: the author types it, and while the
// application answers onAIExpressionRequest the same AI wand as on any other expression writes it -
// with the filter's own part from survey-core: the records' fields, not the survey's questions.
const json = { elements: [
  { type: "matrixdynamic", name: "m", columns: [
    { name: "country", cellType: "dropdown", choices: ["de", "fr"] },
    { name: "age", cellType: "text", inputType: "number" }] },
  { type: "filter", name: "f", source: "m", items: [{ name: "adults", expression: "{age} > 18" }, { name: "blank" }] }] };

function createCreator(withHandler: boolean = true): { creator: CreatorTester, requests: Array<FilterAIRequestEvent> } {
  const creator = new CreatorTester();
  creator.JSON = json;
  const requests: Array<FilterAIRequestEvent> = [];
  if (withHandler) {
    creator.onAIExpressionRequest.add((_, options) => { requests.push(<FilterAIRequestEvent>options); });
  }
  return { creator: creator, requests: requests };
}
function getExpressionEditor(creator: CreatorTester, index: number): any {
  const grid = new PropertyGridModelTester(creator.survey.getQuestionByName("f"), creator);
  const row = (<QuestionMatrixDynamicModel>grid.survey.getQuestionByName("items")).visibleRows[index];
  row.showDetailPanel();
  return row.detailPanel.getQuestionByName("expression");
}
function getWand(question: any): any {
  return question.getTitleActions().filter((a: any) => a.id === "property-grid-expression-assistant")[0];
}

describe("Property grid: the AI wand of a filter preset's expression", () => {
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
  // Opens the wand of the preset in the given row and asks for a filter.
  function ask(creator: CreatorTester, index: number, prompt: string): { popup: any, editor: any } {
    const editor = getExpressionEditor(creator, index);
    getWand(editor).action();
    const popup = dialogs[dialogs.length - 1];
    popup.options.data.survey.setValue("prompt", prompt);
    popup.footerToolbar.getActionById("expression-assistant-generate").action();
    return { popup: popup, editor: editor };
  }

  test("the wand is there only while the application answers onAIExpressionRequest", () => {
    expect(getWand(getExpressionEditor(createCreator(false).creator, 0)), "#1").toBeUndefined();
    const wand = getWand(getExpressionEditor(createCreator().creator, 0));
    expect([wand.iconName, wand.title], "#2").toEqual(["icon-ai-24x24", "Write with AI"]);
  });
  test("the request is the filter's: the control's fields, the filter prompt and answer format; no Explain", () => {
    const { creator, requests } = createCreator();
    const filter: any = creator.survey.getQuestionByName("f");
    const { popup } = ask(creator, 1, "adults from Germany");
    expect(popup.footerToolbar.actions.map((a: any) => a.id), "#1")
      .toEqual(["expression-assistant-generate", "expression-assistant-stop", "cancel", "apply"]);
    expect(requests.length, "#2").toBe(1);
    const request = requests[0];
    expect([request.action, request.userPrompt, request.expression, request.question, request.responseFormat.name], "#3")
      .toEqual(["generate", "adults from Germany", "", filter, "survey_filter"]);
    const context = buildFilterAIContext(filter);
    expect(request.context.fields.map((f: any) => f.name), "#4").toEqual(["country", "age"]);
    expect(request.systemPrompt, "#5").toBe(buildFilterAISystemPrompt(context));
  });
  test("a preset with an expression asks to change it", () => {
    const { creator, requests } = createCreator();
    ask(creator, 0, "older than 30");
    expect([requests[0].action, requests[0].expression]).toEqual(["modify", "{age} > 18"]);
  });
  test("an answer that is no list of conditions is accepted; Accept writes the expression, one undo takes it back", () => {
    const { creator, requests } = createCreator();
    const item = (<any>creator.survey.getQuestionByName("f")).items[1];
    const { popup, editor } = ask(creator, 1, "the young and the old");
    requests[0].callback({ data: { expression: "{age} < 18 or {age} > 65", title: "Ends", explanation: "" } });
    const apply = popup.footerToolbar.getActionById("apply");
    expect(apply.enabled, "#1").toBe(true);
    expect(popup.options.onApply(), "#2").toBe(true);
    expect([editor.value, item.expression], "#3").toEqual(["{age} < 18 or {age} > 65", "{age} < 18 or {age} > 65"]);
    creator.undo();
    expect(item.expression, "#4").toBeFalsy();
    popup.options.onHide();
  });
  test("an answer that does not parse goes back to the model with what is wrong", () => {
    const { creator, requests } = createCreator();
    const { popup } = ask(creator, 1, "adults");
    requests[0].callback({ data: { expression: "{age} >", title: "", explanation: "" } });
    expect(requests.length, "#1").toBe(2);
    expect([requests[1].attempt, requests[1].expression, requests[1].issues.map(i => i.code), requests[1].question], "#2")
      .toEqual([1, "{age} >", ["filter:syntax"], creator.survey.getQuestionByName("f")]);
    requests[1].callback({ data: { expression: "{age} > 18", title: "", explanation: "" } });
    expect(popup.footerToolbar.getActionById("apply").enabled, "#3").toBe(true);
    popup.options.onHide();
  });
});
