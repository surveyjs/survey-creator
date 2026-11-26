import { ActionContainer, Base, SurveyModel, Question, QuestionDropdownModel, QuestionMatrixDynamicModel, PopupDropdownViewModel, settings } from "survey-core";
import { ConditionEditor } from "../../src/property-grid/condition-survey";
import { EmptySurveyCreatorOptions } from "../../src/creator-settings";
import { SurveyLogic } from "../../src/components/tabs/logic";
import { SurveyLogicUI } from "../../src/components/tabs/logic-ui";
import { TabLogicPlugin } from "../../src/components/tabs/logic-plugin";
import { ExpressionToDisplayText } from "../../src/expressionToDisplayText";
import { TextareaJsonEditorModel } from "../../src/components/tabs/json-editor-textarea";
import { CreatorTester } from "../creator-tester";
import { PropertyGridModelTester } from "./property-grid.base";
import { buildExpressionContext } from "../../src/expression-assistant/expression-context";
import { getExpressionLintOptions } from "../../src/expression-assistant/expression-check";
import { findInnerQuestion, getQuestionByVariableName } from "../../src/utils/data-path";

const addressPanel = (extra?: any): any => Object.assign({
  type: "panel", name: "panel1", valueName: "address", elements: [
    { type: "dropdown", name: "kind", choices: ["home", "work"] },
    { type: "text", name: "street" },
    { type: "text", name: "city", valueName: "town" }
  ]
}, extra || {});
const surveyJson = (extra?: any, panelExtra?: any): any => Object.assign({
  dataNesting: "auto",
  elements: [addressPanel(panelExtra), { type: "text", name: "q1" }]
}, extra || {});

function getListNames(survey: SurveyModel, obj: Question, propertyName: string = "visibleIf"): Array<string> {
  const editor = new ConditionEditor(survey, obj, new EmptySurveyCreatorOptions(), propertyName);
  return editor.allConditionQuestions.map(item => item.value);
}
function getRow(editor: ConditionEditor, index: number = 0): any {
  return editor.panel.panels[index];
}
function lintFindings(json: any): Array<any> {
  const creator = new CreatorTester();
  const editor = new TextareaJsonEditorModel(creator);
  editor.text = JSON.stringify(json, null, 2);
  editor.processErrors(editor.text);
  return editor.linter.findings;
}

describe("condition editor: inner questions (nested data, survey-library #12233)", () => {
  // A root expression does not find an inner question by its name: the editor lists and writes its data path,
  // the variable survey-core names it by (getQuestionVariableName).
  test("the list offers inner questions by their data paths: address.town, not city or town, and no container", () => {
    const survey = new SurveyModel(surveyJson());
    // sorted by the text, which shows the name "city" (address.city)
    expect(getListNames(survey, survey.getQuestionByName("q1"))).toEqual(["address.town", "address.kind", "address.street"]);
  });
  test("choosing address.kind gives {address.kind} = 'home' with kind's choices in the value editor", () => {
    const survey = new SurveyModel(surveyJson());
    const q1 = survey.getQuestionByName("q1");
    const editor = new ConditionEditor(survey, q1, new EmptySurveyCreatorOptions(), "visibleIf");
    const row = getRow(editor);
    row.getQuestionByName("questionName").value = "address.kind";
    const valueQuestion = <QuestionDropdownModel>row.getQuestionByName("questionValue");
    expect(valueQuestion.getType()).toBe("dropdown");
    expect(valueQuestion.choices.map(c => c.value)).toEqual(["home", "work"]);
    valueQuestion.value = "home";
    expect(editor.text).toBe("{address.kind} = 'home'");
    editor.apply();
    expect(q1.visibleIf).toBe("{address.kind} = 'home'");
  });
  test("dataNesting: \"panel\" without valueName lists the paths under the panel's name; \"none\" gives today's list", () => {
    let survey = new SurveyModel(surveyJson({ dataNesting: "panel" }, { valueName: undefined }));
    expect(survey.getQuestionByName("panel1.street").getDataPath()).toEqual(["panel1", "street"]);
    expect(getListNames(survey, survey.getQuestionByName("q1"))).toEqual(["panel1.town", "panel1.kind", "panel1.street"]);
    survey = new SurveyModel(surveyJson({ dataNesting: "none" }));
    // sorted by the text, which shows the name "city"
    expect(getListNames(survey, survey.getQuestionByName("q1"))).toEqual(["town", "kind", "street"]);
  });
  test("the expression written for city resolves at runtime, and the linter reports nothing for it", () => {
    const survey = new SurveyModel(surveyJson());
    const q1 = survey.getQuestionByName("q1");
    const editor = new ConditionEditor(survey, q1, new EmptySurveyCreatorOptions(), "visibleIf");
    const row = getRow(editor);
    row.getQuestionByName("questionName").value = "address.town";
    row.getQuestionByName("questionValue").value = "Oslo";
    expect(editor.text).toBe("{address.town} = 'Oslo'");

    const json = surveyJson();
    json.elements[1].visibleIf = editor.text;
    const runtime = new SurveyModel(json);
    runtime.data = { address: { town: "Oslo" } };
    expect(runtime.getQuestionByName("q1").isVisible).toBe(true);
    runtime.data = { address: { town: "Bergen" } };
    expect(runtime.getQuestionByName("q1").isVisible).toBe(false);

    expect(lintFindings(json).filter(f => f.ruleId === "reference/unknown")).toHaveLength(0);
    // the value name is not found at the root (D9). The name {city} is not either at runtime; survey-core's
    // linter still accepts it until it follows the scoped names (its own tests mark that step), so it is not
    // checked here.
    json.elements[1].visibleIf = "{town} = 'Oslo'";
    expect(lintFindings(json).filter(f => f.ruleId === "reference/unknown")).toHaveLength(1);
  });
  test("{address.street} and {address.kind} open as rows on their questions and round-trip", () => {
    const json = surveyJson();
    json.elements[1].visibleIf = "{address.street} = 'x' and {address.kind} = 'work'";
    const survey = new SurveyModel(json);
    const q1 = survey.getQuestionByName("q1");
    const editor = new ConditionEditor(survey, q1, new EmptySurveyCreatorOptions(), "visibleIf");
    expect(editor.panel.panels).toHaveLength(2);
    expect(getRow(editor, 0).getQuestionByName("questionName").value).toBe("address.street");
    expect(getRow(editor, 0).getQuestionByName("questionValue").getType()).toBe("text");
    expect(getRow(editor, 0).getQuestionByName("questionValue").value).toBe("x");
    const kindValue = <QuestionDropdownModel>getRow(editor, 1).getQuestionByName("questionValue");
    expect(kindValue.getType()).toBe("dropdown");
    expect(kindValue.choices.map(c => c.value)).toEqual(["home", "work"]);
    expect(kindValue.value).toBe("work");
    expect(editor.isReady).toBe(true);
    expect(editor.text).toBe("{address.street} = 'x' and {address.kind} = 'work'");
    // the path is the listed entry itself: no extra choice, and the rows validate
    const nameQuestion = <QuestionDropdownModel>getRow(editor, 0).getQuestionByName("questionName");
    expect(nameQuestion.selectedItem?.text).toBe("address.street");
    expect(nameQuestion.choices.map(c => c.value)).toEqual(["address.town", "address.kind", "address.street"]);
    expect(editor.hasErrors()).toBe(false);
    expect(editor.isReady).toBe(true);
    getRow(editor, 0).getQuestionByName("questionValue").value = "y";
    expect(editor.apply()).toBe(true);
    expect(q1.visibleIf).toBe("{address.street} = 'y' and {address.kind} = 'work'");
  });
  test("an inner question's name that starts with its valueName: the entry shows the name once", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [addressPanel({ elements: [{ type: "text", name: "town2", valueName: "town" }] }),
      { type: "text", name: "q1" }] });
    const editor = new ConditionEditor(survey, survey.getQuestionByName("q1"), new EmptySurveyCreatorOptions(), "visibleIf");
    expect(editor.allConditionQuestions.map(item => item.value + ":" + item.text)).toEqual(["address.town:address.town2"]);
  });
  test("{page1.address.street} opens as a row on street in \"panelAndPage\" and round-trips", () => {
    const survey = new SurveyModel({ dataNesting: "panelAndPage", pages: [{ name: "page1", elements: [addressPanel()] },
      { name: "page2", elements: [{ type: "text", name: "q1", visibleIf: "{page1.address.street} = 'x'" }] }] });
    expect(survey.getQuestionByName("page1.panel1.street").getDataPath()).toEqual(["page1", "address", "street"]);
    const q1 = survey.getQuestionByName("page2.q1");
    expect(getListNames(survey, q1)).toEqual(["page1.address.town", "page1.address.kind", "page1.address.street"]);
    const editor = new ConditionEditor(survey, q1, new EmptySurveyCreatorOptions(), "visibleIf");
    expect(editor.panel.panels).toHaveLength(1);
    expect(getRow(editor).getQuestionByName("questionName").value).toBe("page1.address.street");
    expect(getRow(editor).getQuestionByName("questionValue").value).toBe("x");
    expect(editor.text).toBe("{page1.address.street} = 'x'");
    expect(editor.hasErrors()).toBe(false);
  });
  test("a condition inside the container lists the names that reach its questions from there", () => {
    const survey = new SurveyModel(surveyJson());
    expect(getListNames(survey, survey.getQuestionByName("panel1.street"))).toEqual(["town", "kind", "q1"]);
  });
  test("a variable inside the container opens as a row on the listed entry; a longer text that reaches it too", () => {
    // the row gets the question, the value editor and the entry listed for the owner; saving writes its name
    const check = (survey: SurveyModel, q: Question, name: string, entry: string): void => {
      q.visibleIf = "{" + name + "} = 'work'";
      const editor = new ConditionEditor(survey, q, new EmptySurveyCreatorOptions(), "visibleIf");
      const row = getRow(editor);
      const valueQuestion = <QuestionDropdownModel>row.getQuestionByName("questionValue");
      expect(valueQuestion.getType(), name).toBe("dropdown");
      expect(valueQuestion.choices.map(c => c.value), name).toEqual(["home", "work"]);
      expect(row.getQuestionByName("questionName").value, name).toBe(entry);
      expect((<QuestionDropdownModel>row.getQuestionByName("questionName")).selectedItem?.text, name).toBe(entry);
      expect(editor.hasErrors(), name).toBe(false);
      expect(editor.text, name).toBe("{" + entry + "} = 'work'");
    };
    let survey = new SurveyModel(surveyJson());
    check(survey, survey.getQuestionByName("panel1.street"), "kind", "kind");
    check(survey, survey.getQuestionByName("panel1.street"), "address.kind", "kind");
    // in "panelAndPage" {address.kind} is the path from the page, {kind} the name inside the container
    survey = new SurveyModel({ dataNesting: "panelAndPage", pages: [{ name: "page1", elements: [addressPanel(), { type: "text", name: "q0" }] }] });
    check(survey, survey.getQuestionByName("page1.panel1.street"), "page1.address.kind", "kind");
    check(survey, survey.getQuestionByName("page1.q0"), "page1.address.kind", "address.kind");
  });
  test("sub-entries of an inner matrix and multiple text follow the data path, with their own valueName", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "matrix", name: "m", valueName: "mv", rows: ["r1"], columns: ["c1", "c2"] },
      { type: "multipletext", name: "mt", valueName: "mtv", items: [{ name: "i1" }] }
    ] }), { type: "text", name: "q1" }] });
    expect(getListNames(survey, survey.getQuestionByName("q1"))).toEqual(["address.mv.r1", "address.mtv.i1"]);

    const runtime = new SurveyModel({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "matrix", name: "m", valueName: "mv", rows: ["r1"], columns: ["c1", "c2"] },
      { type: "multipletext", name: "mt", valueName: "mtv", items: [{ name: "i1" }] }
    ] }), { type: "text", name: "q1", visibleIf: "{address.mv.r1} = 'c1' and {address.mtv.i1} = 'a'" }] });
    runtime.data = { address: { mv: { r1: "c1" }, mtv: { i1: "a" } } };
    expect(runtime.getQuestionByName("q1").isVisible).toBe(true);
    runtime.data = { address: { mv: { r1: "c2" }, mtv: { i1: "a" } } };
    expect(runtime.getQuestionByName("q1").isVisible).toBe(false);

    const q1 = runtime.getQuestionByName("q1");
    q1.visibleIf = "{address.mv.r1} = 'c1'";
    const editor = new ConditionEditor(runtime, q1, new EmptySurveyCreatorOptions(), "visibleIf");
    const valueQuestion = <QuestionDropdownModel>getRow(editor).getQuestionByName("questionValue");
    expect(valueQuestion.getType()).toBe("dropdown");
    expect(valueQuestion.choices.map(c => c.value)).toEqual(["c1", "c2"]);
    expect(editor.text).toBe("{address.mv.r1} = 'c1'");
  });
  test("a top-level question with valueName keeps today's {valueName}", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [addressPanel(), { type: "text", name: "q1" }, { type: "text", name: "q2", valueName: "shared" }] });
    // sorted by the text, which shows q2's name
    expect(getListNames(survey, survey.getQuestionByName("q1"))).toEqual(["address.town", "address.kind", "address.street", "shared"]);
  });
});

describe("condition editor: the text of an inner question's entry (nested data, survey-library #12233)", () => {
  // CS8: the data path with the question's own key replaced by its name, the top-level rule applied to the last
  // segment. The value written is the data path.
  const getEntries = (survey: SurveyModel, q: Question, options?: EmptySurveyCreatorOptions): Array<string> => {
    const editor = new ConditionEditor(survey, q, options || new EmptySurveyCreatorOptions(), "visibleIf");
    return editor.allConditionQuestions.map(item => item.value + ":" + item.text);
  };
  test("addressPanel(): city shows address.city, writes {address.town}, and the list is sorted by the text", () => {
    const survey = new SurveyModel(surveyJson());
    expect(getEntries(survey, survey.getQuestionByName("q1"))).toEqual(["address.town:address.city", "address.kind:address.kind",
      "address.street:address.street"]);
    expect(getEntries(survey, survey.getQuestionByName("panel1.street"))).toEqual(["town:city", "kind:kind", "q1:q1"]);
    const editor = new ConditionEditor(survey, survey.getQuestionByName("q1"), new EmptySurveyCreatorOptions(), "visibleIf");
    getRow(editor).getQuestionByName("questionName").value = "address.town";
    getRow(editor).getQuestionByName("questionValue").value = "Oslo";
    expect(editor.text).toBe("{address.town} = 'Oslo'");
  });
  test("sub-entries keep their tails: address.m.r1 and address.mt.i1, a matrix without valueName unchanged", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "matrix", name: "m", valueName: "mv", rows: ["r1"], columns: ["c1", "c2"] },
      { type: "multipletext", name: "mt", valueName: "mtv", items: [{ name: "i1" }] },
      { type: "matrixdropdown", name: "md", rows: ["r1"], columns: [{ name: "c1" }] }
    ] }), { type: "text", name: "q1" }, { type: "matrix", name: "tm", valueName: "tmv", rows: ["r1"], columns: ["c1"] }] });
    expect(getEntries(survey, survey.getQuestionByName("q1"))).toEqual(["address.mv.r1:address.m.r1",
      "address.md.r1.c1:address.md.r1.c1", "address.mtv.i1:address.mt.i1", "tmv.r1:tm.r1"]);
  });
  test("\"panelAndPage\" and a container in a container: only the last segment is replaced", () => {
    let survey = new SurveyModel({ dataNesting: "panelAndPage", pages: [{ name: "page1", elements: [addressPanel()] },
      { name: "page2", elements: [{ type: "text", name: "q1" }] }] });
    expect(getEntries(survey, survey.getQuestionByName("page2.q1"))).toEqual(["page1.address.town:page1.address.city",
      "page1.address.kind:page1.address.kind", "page1.address.street:page1.address.street"]);
    survey = new SurveyModel({ dataNesting: "auto", elements: [{ type: "panel", name: "outer", valueName: "town", elements: [addressPanel()] },
      { type: "text", name: "q1" }] });
    expect(getEntries(survey, survey.getQuestionByName("q1"))).toEqual(["town.address.town:town.address.city",
      "town.address.kind:town.address.kind", "town.address.street:town.address.street"]);
  });
  test("{town} inside the container is the listed entry: it shows city, and there is no extra choice", () => {
    const survey = new SurveyModel(surveyJson());
    const street = survey.getQuestionByName("panel1.street");
    street.visibleIf = "{town} = 'Oslo'";
    const editor = new ConditionEditor(survey, street, new EmptySurveyCreatorOptions(), "visibleIf");
    const nameQuestion = <QuestionDropdownModel>getRow(editor).getQuestionByName("questionName");
    expect(nameQuestion.value).toBe("town");
    expect(nameQuestion.selectedItem?.text).toBe("city");
    expect(nameQuestion.choices.map(c => c.value + ":" + c.text)).toEqual(["town:city", "kind:kind", "q1:q1"]);
    expect(editor.text).toBe("{town} = 'Oslo'");
  });
  test("two containers with one key and a city in each: the two entries show their data paths", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [
      { type: "panel", name: "p1", valueName: "address", elements: [{ type: "text", name: "city", valueName: "town" }, { type: "text", name: "street" }] },
      { type: "panel", name: "p2", valueName: "address", elements: [{ type: "text", name: "city", valueName: "town2" }] },
      { type: "text", name: "q1" }] });
    expect(getEntries(survey, survey.getQuestionByName("q1"))).toEqual(["address.street:address.street",
      "address.town:address.town", "address.town2:address.town2"]);
  });
  test("the expression assistant gets the text as the variable's title, the data path as its name", () => {
    const creator = new CreatorTester();
    creator.JSON = surveyJson();
    const site = { obj: creator.survey.getQuestionByName("q1"), propertyName: "visibleIf" };
    const context = buildExpressionContext(creator, [site], "", undefined, getExpressionLintOptions(creator)).context;
    const variables = context.variables.filter(v => v.kind === "question");
    expect(variables.map(v => v.name + ":" + (v.title || "")).sort()).toEqual(["address.kind:", "address.street:", "address.town:address.city"]);
  });
  test("onGetObjectDisplayName gets the new text and has the last word", () => {
    const survey = new SurveyModel(surveyJson());
    const options = new EmptySurveyCreatorOptions();
    const seen: Array<string> = [];
    options.getObjectDisplayName = (obj: Base, area: string, reason: string, displayName: string): string => {
      seen.push(displayName);
      return (<any>obj).name === "city" ? "City!" : displayName;
    };
    // the list is sorted by the host's text
    expect(getEntries(survey, survey.getQuestionByName("q1"), options)).toEqual(["address.kind:address.kind",
      "address.street:address.street", "address.town:City!"]);
    expect(seen).toContain("address.city");
  });
  test("useElementTitles: the question's title, unchanged", () => {
    const survey = new SurveyModel(surveyJson({}, { title: "Address", elements: [{ type: "text", name: "city", valueName: "town", title: "City title" }] }));
    const options = new EmptySurveyCreatorOptions();
    options.useElementTitles = true;
    expect(getEntries(survey, survey.getQuestionByName("q1"), options)).toEqual(["address.town:City title"]);
  });
});

describe("expression assistant: inner questions (nested data, survey-library #12233)", () => {
  test("the assistant is offered the editor's paths: address.town, address.mv.r1 and address.mtv.i1", () => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "text", name: "city", valueName: "town", title: "City" },
      { type: "matrix", name: "m", valueName: "mv", rows: ["r1"], columns: ["c1", "c2"] },
      { type: "multipletext", name: "mt", valueName: "mtv", items: [{ name: "i1" }] }
    ] }), { type: "text", name: "q1" }] };
    const site = { obj: creator.survey.getQuestionByName("q1"), propertyName: "visibleIf" };
    const context = buildExpressionContext(creator, [site], "", undefined, getExpressionLintOptions(creator)).context;
    const variables = context.variables.filter(v => v.kind === "question");
    expect(variables.map(v => v.name).sort()).toEqual(["address.mtv.i1", "address.mv.r1", "address.town"]);
    // a matrix row entry is described as one row, with the columns as its choices, as for a top-level matrix
    const row: any = variables.filter(v => v.name === "address.mv.r1")[0];
    expect(row.type).toBe("radiogroup");
    expect(row.choices.map(c => c.value)).toEqual(["c1", "c2"]);
  });
});

describe("logic tab: inner questions (nested data, survey-library #12233)", () => {
  const createSurvey = (): SurveyModel => new SurveyModel({ dataNesting: "auto", elements: [
    addressPanel({ elements: [
      { type: "text", name: "street", title: "Street title" },
      { type: "text", name: "city", valueName: "town", title: "City title" },
      { type: "text", name: "inner", visibleIf: "{street} = 'w'" }
    ] }),
    { type: "text", name: "q1", visibleIf: "{address.street} = 'x'" },
    { type: "text", name: "q2", visibleIf: "{street} = 'y'" },
    { type: "text", name: "q3", visibleIf: "{address.town} = 'z'" }
  ] });
  test("the question filter lists the inner questions and finds their rules", () => {
    const survey = createSurvey();
    const logic = new SurveyLogic(survey, new EmptySurveyCreatorOptions());
    const used = logic.getUsedQuestions().map(q => q.name);
    expect(used).toContain("street");
    expect(used).toContain("city");
    const getSuitable = (name: string): Array<string> => logic.items.filter(item => item.isSuitable(name)).map(item => item.expression);
    // inside the container {street} is street's key; q2's {street} is read at the root, where a bare name finds
    // no inner question (survey-library #12233)
    expect(getSuitable("street")).toEqual(["{street} = 'w'", "{address.street} = 'x'"]);
    expect(getSuitable("city")).toEqual(["{address.town} = 'z'"]);
  });
  test("the question filter lists a top-level question its rule reads by its value name", () => {
    const survey = new SurveyModel({ elements: [
      { type: "text", name: "q1", valueName: "val1" }, { type: "text", name: "q2", visibleIf: "{val1} = 1" }] });
    const logic = new SurveyLogic(survey, new EmptySurveyCreatorOptions());
    expect(logic.getUsedQuestions().map(q => q.name).sort()).toEqual(["q1", "q2"]);
  });
  test("the display text shows the inner question's title", () => {
    const survey = createSurvey();
    const options = new EmptySurveyCreatorOptions();
    options.useElementTitles = true;
    const toText = (expression: string): string => new ExpressionToDisplayText(survey, options).toDisplayText(expression);
    expect(toText("{address.street} = 'x'")).toBe("{Street title} == x");
    expect(toText("{address.town} = 'x'")).toBe("{City title} == x");
    // the display text resolves from the root, where a bare name finds no inner question: it stays as written,
    // as for any unknown name
    expect(toText("{street} = 'x'")).toBe("{street} == 'x'");
    expect(toText("{city} = 'x'")).toBe("{city} == 'x'");
    // as for a top-level question
    expect(toText("{q1} = 'x'")).toBe("{q1} == x");
  });
  // One name in two scopes: a top-level street and panel1's street, each read by its own rules. The filter's
  // entries are the questions' paths of names (survey-library #12233, CS6).
  const twoStreetsJson = (dataNesting: string = "auto"): any => ({ dataNesting: dataNesting, elements: [
    { type: "text", name: "street" },
    { type: "text", name: "q1", visibleIf: "{street} = 'root'" },
    addressPanel({ elements: [
      { type: "text", name: "street" },
      { type: "text", name: "inner", visibleIf: "{street} = 'inner'" }
    ] }),
    { type: "text", name: "q2", visibleIf: "{address.street} = 'path'" }
  ], triggers: [{ type: "copyvalue", expression: "{q1} = 1", setToName: "address.street", fromName: "street" }] });
  const getFilterEntries = (json: any): { plugin: TabLogicPlugin, filter: any, entries: Array<string> } => {
    const creator = new CreatorTester({ showLogicTab: true });
    creator.JSON = json;
    const plugin = <TabLogicPlugin>creator.getPlugin("logic");
    const filter = creator.getActionBarItem("svc-logic-filter-question");
    new PopupDropdownViewModel(filter.popupModel); // popupModel.onShow fills the list
    const animationEnabled = settings.animationEnabled;
    settings.animationEnabled = false;
    plugin.activate();
    filter.action();
    settings.animationEnabled = animationEnabled;
    const entries = filter.popupModel.contentComponentData.model.actions.slice(1).map((item: any) => item.id + "|" + item.title);
    return { plugin, filter, entries };
  };
  const getFiltered = (logic: SurveyLogic, filter: string, items?: Array<any>): Array<string> =>
    (items || logic.items).filter(item => item.isSuitable(filter)).map(item => item.expression).sort();
  test("two questions named street in two scopes: two filter entries, each filters its own rules", () => {
    const { plugin, filter, entries } = getFilterEntries(twoStreetsJson());
    expect(entries).toEqual(["panel1.inner|panel1.inner", "panel1.street|panel1.street", "q1|q1", "q2|q2", "street|street"]);
    const logic = plugin.model;
    // the trigger's fromName reads the top-level street, its setToName (a data path, O4a) writes panel1's
    expect(getFiltered(logic, "street")).toEqual(["{q1} = 1", "{street} = 'root'"]);
    expect(getFiltered(logic, "panel1.street")).toEqual(["{address.street} = 'path'", "{q1} = 1", "{street} = 'inner'"]);
    logic.questionFilter = "panel1.street";
    expect(filter.title, "the filter shows the id").toBe("panel1.street");
  });
  test("an action on an inner question is found by the question's path", () => {
    const { plugin } = getFilterEntries(twoStreetsJson());
    expect(getFiltered(plugin.model, "panel1.inner")).toEqual(["{street} = 'inner'"]);
    expect(getFiltered(plugin.model, "q1"), "a top-level question: its action and its variable").toEqual(["{q1} = 1", "{street} = 'root'"]);
  });
  test("a bare name set by code finds the rules of the inner question only that name has", () => {
    const logic = new SurveyLogicUI(createSurvey());
    const rows = <QuestionMatrixDynamicModel>logic.itemsSurvey.getQuestionByName("items");
    expect(rows.rowCount).toBe(4);
    logic.questionFilter = "street";
    expect(rows.rowCount).toBe(2);
    expect(getFiltered(logic, "street")).toEqual(["{address.street} = 'x'", "{street} = 'w'"]);
    expect(getFiltered(logic, "panel1.street"), "the path finds the same rules").toEqual(["{address.street} = 'x'", "{street} = 'w'"]);
  });
  test("a choice's visibleIf and an expression validator resolve in their question's scope", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [
      { type: "text", name: "street" },
      addressPanel({ elements: [
        { type: "text", name: "street" },
        { type: "dropdown", name: "d", choices: [{ value: 1, visibleIf: "{street} = 'x'" }, 2] },
        { type: "text", name: "t", validators: [{ type: "expression", expression: "{street} = 'y'" }] }
      ] })
    ] });
    const logic = new SurveyLogic(survey, new EmptySurveyCreatorOptions());
    // both are logic types the tab does not show (showInUI: false)
    const items = logic.invisibleItems;
    expect(getFiltered(logic, "panel1.street", items)).toEqual(["{street} = 'x'", "{street} = 'y'"]);
    expect(getFiltered(logic, "street", items), "the top-level street").toEqual([]);
  });
  test("one rule on questions in two scopes reads a street in each: both are listed, each finds the rule", () => {
    const root = [{ type: "text", name: "street" }, { type: "text", name: "q1", visibleIf: "{street} = 'x'" }];
    const panel = addressPanel({ elements: [{ type: "text", name: "street" }, { type: "text", name: "inner", visibleIf: "{street} = 'x'" }] });
    [root.concat([panel]), [panel].concat(root)].forEach((elements, index) => {
      const { plugin, entries } = getFilterEntries({ dataNesting: "auto", elements: elements });
      expect(plugin.model.items, "one rule, two actions").toHaveLength(1);
      expect(entries, "order " + index).toEqual(["panel1.inner|panel1.inner", "panel1.street|panel1.street", "q1|q1", "street|street"]);
      expect(getFiltered(plugin.model, "street"), "order " + index).toEqual(["{street} = 'x'"]);
      expect(getFiltered(plugin.model, "panel1.street"), "order " + index).toEqual(["{street} = 'x'"]);
    });
  });
  // Pins today's behaviour: a bare name of inner questions only (a host's filter) matches what the rule's first
  // action resolves the variable to, so the order of the actions decides (review-01, prompt 01, probe).
  test("a bare name of inner questions only: the first action's scope decides", () => {
    const panelA = { type: "panel", name: "pa", valueName: "a", elements: [
      { type: "text", name: "x", valueName: "k" }, { type: "text", name: "qa", visibleIf: "{k} = 1" }] };
    const panelB = { type: "panel", name: "pb", valueName: "b", elements: [
      { type: "text", name: "street", valueName: "k" }, { type: "text", name: "qb", visibleIf: "{k} = 1" }] };
    [[panelA, panelB], [panelB, panelA]].forEach((elements, index) => {
      const logic = new SurveyLogic(new SurveyModel({ dataNesting: "auto", elements: elements }), new EmptySurveyCreatorOptions());
      expect(logic.items, "one rule, two actions").toHaveLength(1);
      expect(getFiltered(logic, "street"), "order " + index).toEqual(index === 0 ? [] : ["{k} = 1"]);
      expect(getFiltered(logic, "pb.street"), "the path, order " + index).toEqual(["{k} = 1"]);
    });
  });
  test("a variable no scope resolves: a top-level question by its name is listed and found, a path of names is not", () => {
    const { plugin, entries } = getFilterEntries({ dataNesting: "auto", elements: [
      { type: "text", name: "q1", valueName: "vn" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{panel1.street} = 1" },
      addressPanel()
    ] });
    // {q1} reads nothing at runtime (q1 stores under vn), but the list and the filter keep master's match by name
    expect(entries).toEqual(["q1|q1", "q2|q2", "q3|q3"]);
    expect(getFiltered(plugin.model, "q1")).toEqual(["{q1} = 1"]);
    // {panel1.street} is a path of names, no variable: it reads nothing, and panel1's street is neither listed nor found
    expect(getFiltered(plugin.model, "panel1.street")).toEqual([]);
  });
  test("\"none\": the filter's ids are the questions' names", () => {
    const json = twoStreetsJson("none");
    json.elements.splice(0, 1);
    const { plugin, entries } = getFilterEntries(json);
    expect(entries).toEqual(["inner|inner", "q1|q1", "q2|q2", "street|street"]);
    expect(getFiltered(plugin.model, "street")).toEqual(["{q1} = 1", "{street} = 'inner'", "{street} = 'root'"]);
  });
  // Pins master's results where nothing nests (review-01, prompt 02, probes): resolving each variable, as in a
  // scoped survey, would give other ones, so the filter and the used questions keep their own code there.
  test("nothing nests: the filter matches the text, as on master", () => {
    for (const mode of ["none", "auto"]) {
      const logic = new SurveyLogic(new SurveyModel({ dataNesting: mode, elements: [
        { type: "text", name: "q1", valueName: "val1" },
        { type: "multipletext", name: "q2", items: [{ name: "x" }] },
        { type: "text", name: "q3", visibleIf: "{val1} = 1" },
        { type: "text", name: "q4", visibleIf: "sumInArray({q5}, 'q2.x') > 1" },
        { type: "text", name: "q5" }
      ], triggers: [{ type: "setvalue", expression: "{q5} = 1", setToName: "q2.x", setValue: 2 }] }), new EmptySurveyCreatorOptions());
      expect(getFiltered(logic, "q1"), mode + ": {val1} reads q1, its text is not q1").toEqual([]);
      expect(getFiltered(logic, "q2"), mode + ": the text 'q2.x' and a setToName q2.x").toEqual(["sumInArray({q5}, 'q2.x') > 1", "{q5} = 1"]);
    }
  });
  test("nothing nests: the used questions look a name up first, as on master", () => {
    for (const mode of ["none", "auto"]) {
      const used = new SurveyLogic(new SurveyModel({ dataNesting: mode, pages: [
        { name: "p1", visibleIf: "{q2} = 1", elements: [{ type: "text", name: "q1", valueName: "q2" }, { type: "text", name: "q2", valueName: "zz" }] },
        { name: "page2", elements: [{ type: "text", name: "p1" }] }
      ] }), new EmptySurveyCreatorOptions()).getUsedQuestions().map(q => q.name).sort();
      // {q2} reads q1 at runtime; the page's name finds the question p1
      expect(used, mode).toEqual(["p1", "q2"]);
    }
  });
  // survey-core's hasDataNesting() counts a container in a choice panel (its data nests: {chin: {x}}), so the
  // survey takes the scoped path (review-01, prompt 04)
  test("a container only in a choice panel: the filter resolves the variables", () => {
    const logic = new SurveyLogic(new SurveyModel({ dataNesting: "auto", elements: [
      { type: "text", name: "q1", valueName: "val1" },
      { type: "text", name: "q3", visibleIf: "{val1} = 1" },
      { type: "checkbox", name: "chbox", choices: [{ value: 1, elements: [
        { type: "panel", name: "chin", valueName: "chin", elements: [{ type: "text", name: "x" }] }] }] }
    ] }), new EmptySurveyCreatorOptions());
    expect(getFiltered(logic, "q1"), "{val1} reads q1").toEqual(["{val1} = 1"]);
  });
  // A rule's variables resolve in the rule's scope when all its actions share one (survey-library #12233, CS7):
  // {kind} on a question inside address is how the runtime and an author write it.
  const kindRuleJson = (): any => ({ dataNesting: "auto", elements: [
    addressPanel({ elements: [
      { type: "dropdown", name: "kind", choices: ["home", "work"] },
      { type: "text", name: "street", title: "Street title", visibleIf: "{kind} = 'home'" },
      { type: "text", name: "city", valueName: "town" }
    ] }),
    { type: "text", name: "q1" }
  ] });
  const titlesOptions = (): EmptySurveyCreatorOptions => {
    const options = new EmptySurveyCreatorOptions();
    options.useElementTitles = true;
    return options;
  };
  const getItemText = (logic: SurveyLogic, expression: string, items?: Array<any>): string =>
    (items || logic.items).filter(item => item.expression === expression)[0].expressionText;
  test("a rule on an inner question with an in-scope {kind}: opening it and saving it with no edit keeps the text", () => {
    const survey = new SurveyModel(kindRuleJson());
    const logic = new SurveyLogicUI(survey);
    logic.editItem(logic.items[0]);
    expect(logic.expressionEditor.text).toBe("{kind} = 'home'");
    expect(logic.saveEditableItem(), "the editor has no empty row").toBe(true);
    expect(survey.getQuestionByName("panel1.street").visibleIf).toBe("{kind} = 'home'");
  });
  test("the rule editor reads an in-scope {kind}: the row has kind's dropdown and shows the entry kind", () => {
    const logic = new SurveyLogicUI(new SurveyModel(kindRuleJson()));
    logic.editItem(logic.items[0]);
    const row = getRow(logic.expressionEditor);
    const questionName = <QuestionDropdownModel>row.getQuestionByName("questionName");
    expect(questionName.value, "the listed entry").toBe("kind");
    expect(questionName.selectedItem.text).toBe("kind");
    const value = <QuestionDropdownModel>row.getQuestionByName("questionValue");
    expect(value.getType()).toBe("dropdown");
    expect(value.choices.map(c => c.value)).toEqual(["home", "work"]);
    expect(value.value).toBe("home");
  });
  test("display texts with titles on resolve in the rule's scope; from the root a bare inner name stays raw", () => {
    const logic = new SurveyLogic(createSurvey(), titlesOptions());
    expect(getItemText(logic, "{street} = 'w'"), "on inner, inside address").toBe("{Street title} == w");
    expect(getItemText(logic, "{address.street} = 'x'")).toBe("{Street title} == x");
    expect(getItemText(logic, "{street} = 'y'"), "on the root q2").toBe("{street} == 'y'");

    const survey = new SurveyModel({ dataNesting: "panelAndPage", pages: [
      { name: "page1", elements: [
        addressPanel({ elements: [{ type: "text", name: "street", title: "Street title" }] }),
        { type: "text", name: "q0", visibleIf: "{address.street} = 'x'" }
      ] },
      { name: "page2", elements: [{ type: "text", name: "q2", visibleIf: "{page1.address.street} = 'y'" }] }
    ] });
    const pageLogic = new SurveyLogic(survey, titlesOptions());
    expect(getItemText(pageLogic, "{address.street} = 'x'"), "relative to page1").toBe("{Street title} == x");
    expect(getItemText(pageLogic, "{page1.address.street} = 'y'")).toBe("{Street title} == y");
  });
  test("a rule whose actions sit in two scopes resolves from the root, as before; one scope resolves in it", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [
      addressPanel({ elements: [
        { type: "text", name: "street", title: "Street title" },
        { type: "text", name: "inner", visibleIf: "{street} = 'x'" },
        { type: "text", name: "inner2", visibleIf: "{street} = 'y'" },
        { type: "text", name: "inner3", visibleIf: "{street} = 'y'" }
      ] }),
      { type: "text", name: "q1", visibleIf: "{street} = 'x'" }
    ] });
    const logic = new SurveyLogic(survey, titlesOptions());
    expect(logic.items.map(item => item.actions.length)).toEqual([2, 2]);
    expect(getItemText(logic, "{street} = 'x'"), "inner and the root q1").toBe("{street} == 'x'");
    expect(getItemText(logic, "{street} = 'y'"), "inner2 and inner3, both inside address").toBe("{Street title} == y");
  });
  test("a rule's shared owner: two child panels of a container and two containers on one key share it; two nesting containers and a container and the root do not", () => {
    const survey = new SurveyModel({ dataNesting: "auto", pages: [
      { name: "page1", elements: [
        addressPanel({ elements: [
          { type: "text", name: "street" },
          { type: "panel", name: "childA", elements: [{ type: "text", name: "a1", visibleIf: "{street} = 'x'" }] },
          { type: "panel", name: "childB", visibleIf: "{street} = 'x'", elements: [{ type: "text", name: "b1", visibleIf: "{street} = 'x'" }] },
          { type: "text", name: "s2", visibleIf: "{street} = 'y'" },
          { type: "panel", name: "geo", valueName: "geo", elements: [{ type: "text", name: "lat", visibleIf: "{street} = 'y'" }] },
          { type: "text", name: "kind", visibleIf: "{q1} = 1" }
        ] }),
        { type: "text", name: "q1", visibleIf: "{street} = 'z'" },
        { type: "panel", name: "other", valueName: "other", elements: [{ type: "text", name: "o1", visibleIf: "{street} = 'z'" }] }
      ] },
      { name: "page2", elements: [
        { type: "panel", name: "panel2", valueName: "address", elements: [{ type: "text", name: "city", visibleIf: "{q1} = 1" }] }
      ] }
    ] });
    const logic = new SurveyLogic(survey);
    const getContext = (expression: string): string => {
      const item = logic.items.filter(item => item.expression === expression)[0];
      const context: any = item.getExpressionContext();
      return item.actions.length + ": " + (!!context ? context.name : "null");
    };
    expect(getContext("{street} = 'x'"), "a1 in childA, childB's own expression and b1 in childB").toBe("3: a1");
    expect(getContext("{street} = 'y'"), "s2 in address, lat in address.geo").toBe("2: null");
    expect(getContext("{street} = 'z'"), "the root q1, o1 in other").toBe("2: null");
    expect(getContext("{q1} = 1"), "address split across two pages: kind on page1, city on page2").toBe("2: kind");
  });
  test("a rule's shared owner: a dotted key is not the path it spells (\"a.b\" and a > b)", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [
      { type: "text", name: "q1" },
      { type: "panel", name: "p1", valueName: "a.b", elements: [{ type: "text", name: "x1", visibleIf: "{q1} = 5" }] },
      { type: "panel", name: "pa", valueName: "a", elements: [
        { type: "panel", name: "pb", valueName: "b", elements: [{ type: "text", name: "x2", visibleIf: "{q1} = 5" }] }] }
    ] });
    const item = new SurveyLogic(survey).items[0];
    expect(item.actions.length).toBe(2);
    expect(item.getExpressionContext()).toBe(null);
  });
  test("a choice's visibleIf and a validator inside address: an in-scope {street} shows the title (their question's scope)", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [
      addressPanel({ elements: [
        { type: "text", name: "street", title: "Street title" },
        { type: "dropdown", name: "d", choices: [{ value: 1, visibleIf: "{street} = 'x'" }, 2] },
        { type: "text", name: "t", validators: [{ type: "expression", expression: "{street} = 'y'" }] }
      ] })
    ] });
    const logic = new SurveyLogic(survey, titlesOptions());
    expect(getItemText(logic, "{street} = 'x'", logic.invisibleItems)).toBe("{Street title} == x");
    expect(getItemText(logic, "{street} = 'y'", logic.invisibleItems)).toBe("{Street title} == y");
    const choice = (<QuestionDropdownModel>survey.getQuestionByName("panel1.d")).choices[0];
    expect(new ExpressionToDisplayText(survey, titlesOptions(), choice).toDisplayText("{street} = 'x'")).toBe("{Street title} == x");
  });
  const getSelectorValue = (panel: any, text: string): any =>
    (<QuestionDropdownModel>panel.getQuestionByName("elementSelector")).choices.filter(c => c.text === text)[0].value;
  test("the rule editor follows a saved rule's scope: an action moved to the root, a new rule on an inner question", () => {
    const survey = new SurveyModel(kindRuleJson());
    let logic = new SurveyLogicUI(survey);
    const item = logic.items[0];
    logic.editItem(item);
    const panel = logic.itemEditor.panels[0];
    panel.getQuestionByName("elementSelector").value = getSelectorValue(panel, "q1");
    expect(logic.saveEditableItem()).toBe(true);
    expect(survey.getQuestionByName("q1").visibleIf).toBe("{kind} = 'home'");
    logic.editItem(item);
    expect(logic.expressionEditor.scopeElement, "q1's scope, the root").toBe(survey.getQuestionByName("q1"));
    expect(getRow(logic.expressionEditor).getQuestionByName("questionName").value, "{kind} reads nothing on q1").toBeFalsy();

    survey.getQuestionByName("q1").visibleIf = "";
    logic = new SurveyLogicUI(survey);
    logic.addNew();
    logic.expressionEditor.text = "{address.kind} = 'home'";
    const newPanel = logic.itemEditor.panels[0];
    newPanel.getQuestionByName("logicTypeName").value = "question_visibility";
    newPanel.getQuestionByName("elementSelector").value = getSelectorValue(newPanel, "street");
    expect(logic.saveEditableItem()).toBe(true);
    const street = survey.getQuestionByName("panel1.street");
    // the new rule had no owner, so its list had the root's names; the save that gives it street writes the name
    // listed there
    expect(street.visibleIf).toBe("{kind} = 'home'");
    logic.editItem(logic.items[0]);
    expect(logic.expressionEditor.scopeElement).toBe(street);
    logic.expressionEditor.text = "{kind} = 'work'";
    expect(getRow(logic.expressionEditor).getQuestionByName("questionValue").getType()).toBe("dropdown");
    expect(logic.saveEditableItem()).toBe(true);
    expect(street.visibleIf).toBe("{kind} = 'work'");
  });
  test("a context that is no survey object resolves from the root", () => {
    const survey = createSurvey();
    expect(new ExpressionToDisplayText(survey, titlesOptions(), <any>{}).toDisplayText("{address.street} = 'x'")).toBe("{Street title} == x");
  });
  // Documents a change from one title to another (CS7, confirmed as an exception): inside address {kind} reads the
  // inner kind at runtime, not a root kind of the same name. The display text followed the root before.
  test("a root question with the same name as an in-scope one: the display text shows the in-scope question", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [
      { type: "text", name: "street", title: "Root street" },
      addressPanel({ elements: [
        { type: "text", name: "street", title: "Street title" },
        { type: "text", name: "inner", visibleIf: "{street} = 'x'" }
      ] })
    ] });
    expect(getItemText(new SurveyLogic(survey, titlesOptions()), "{street} = 'x'")).toBe("{Street title} == x");
  });
  test("\"none\": a rule on a question inside a panel resolves as before", () => {
    const json = kindRuleJson();
    json.dataNesting = "none";
    const logic = new SurveyLogic(new SurveyModel(json), titlesOptions());
    expect(getItemText(logic, "{kind} = 'home'")).toBe("{kind} == home");
  });
  describe("the expression assistant's display text", () => {
    let savedShowDialog: any;
    let dialogs: Array<any>;
    beforeEach(() => {
      savedShowDialog = settings.showDialog;
      dialogs = [];
      settings.showDialog = <any>((options: any) => {
        const footerToolbar = new ActionContainer();
        footerToolbar.setItems([{ id: "cancel", title: "Cancel" }, { id: "apply", title: "Apply" }]);
        const popup = { options: options, footerToolbar: footerToolbar };
        dialogs.push(popup);
        return popup;
      });
    });
    afterEach(() => { settings.showDialog = savedShowDialog; });
    const createCreator = (): { creator: CreatorTester, requests: Array<any> } => {
      const creator = new CreatorTester({ showLogicTab: true });
      creator.useElementTitles = true;
      creator.JSON = createSurvey().toJSON();
      const requests: Array<any> = [];
      creator.onAIExpressionRequest.add((_, options) => { requests.push(options); });
      return { creator, requests };
    };
    test("the Logic tab's rule editor: the rule's scope", () => {
      const { creator } = createCreator();
      const logic = new SurveyLogicUI(creator.survey, creator);
      logic.editItem(logic.items.filter(item => item.expression === "{street} = 'w'")[0]);
      expect(logic.expressionEditor.getExpressionDisplayText("{street} = 'w'")).toBe("{Street title} == w");
    });
    test("the property grid's condition editor: the edited object's scope", () => {
      const { creator } = createCreator();
      const inner = creator.survey.getQuestionByName("panel1.inner");
      const editor = new ConditionEditor(creator.survey, inner, creator, "visibleIf");
      expect(editor.showExpressionAssistant().options.getDisplayText("{street} = 'w'")).toBe("{Street title} == w");
    });
    test("the property grid's title action: the edited object's scope", () => {
      const { creator, requests } = createCreator();
      const inner = creator.survey.getQuestionByName("panel1.inner");
      const propertyGrid = new PropertyGridModelTester(inner, creator);
      const pgQuestion = propertyGrid.survey.getQuestionByName("visibleIf");
      pgQuestion.getTitleActions().filter(a => a.id === "property-grid-expression-assistant")[0].action();
      const popup = dialogs[0];
      const survey = popup.options.data.survey;
      survey.setValue("prompt", "street is v");
      popup.footerToolbar.getActionById("expression-assistant-generate").action();
      requests[0].callback({ data: { expression: "{street} = 'v'" } });
      expect(survey.getQuestionByName("review").html).toContain("{Street title} == v");
      popup.options.onHide();
    });
  });
});

describe("renames rewrite names and paths (nested data, survey-library #12233)", () => {
  const createCreator = (json: any): CreatorTester => {
    const creator = new CreatorTester();
    creator.JSON = json;
    return creator;
  };
  const checkRename = (json: any, expressions: { [name: string]: [string, string] }, change: (creator: CreatorTester) => void, checkRedo?: boolean): void => {
    Object.keys(expressions).forEach(name => {
      const el = findElement(json, name);
      el.visibleIf = expressions[name][0];
    });
    const creator = createCreator(json);
    change(creator);
    Object.keys(expressions).forEach(name => {
      expect(findQuestion(creator.survey, name).visibleIf, "after: " + name).toBe(expressions[name][1]);
    });
    creator.undo();
    Object.keys(expressions).forEach(name => {
      expect(findQuestion(creator.survey, name).visibleIf, "undo: " + name).toBe(expressions[name][0]);
    });
    if (!checkRedo) return;
    creator.redo();
    Object.keys(expressions).forEach(name => {
      expect(findQuestion(creator.survey, name).visibleIf, "redo: " + name).toBe(expressions[name][1]);
    });
  };
  // Pins master's rename of an action's question names: the whole name only. "q1.x" is another question's name
  // here, so renaming q1 keeps it (review-01, prompt 01, probe).
  test("a question rename without nesting keeps an action's name that only starts with the old name", () => {
    ["none", "auto"].forEach(dataNesting => {
      const creator = createCreator({
        dataNesting: dataNesting,
        elements: [{ type: "text", name: "q1" }, { type: "text", name: "q1.x" }, { type: "text", name: "q3" }],
        triggers: [{ type: "setvalue", expression: "{q1} = 1", setToName: "q1.x", setValue: 2 },
          { type: "copyvalue", expression: "{q1} = 2", setToName: "q1", fromName: "q1.x" }]
      });
      creator.survey.getQuestionByName("q1").name = "q2";
      const triggers: Array<any> = creator.survey.triggers;
      expect(triggers.map(t => [t.expression, t.setToName, t.fromName]), dataNesting).toEqual([
        ["{q2} = 1", "q1.x", undefined], ["{q2} = 2", "q2", "q1.x"]]);
    });
  });
  // The question by its name wherever its scope puts it: a rename of a container changes its path of names
  // (survey-library #12233).
  const findQuestion = (survey: SurveyModel, name: string): Question => survey.getAllQuestions().filter(q => q.name === name)[0] || null;
  const findElement = (json: any, name: string): any => {
    let res: any = undefined;
    const walk = (els: Array<any>): void => (els || []).forEach(el => {
      if (el.name === name) res = el;
      walk(el.elements);
    });
    walk(json.elements);
    (json.pages || []).forEach((p: any) => walk(p.elements));
    return res;
  };
  test("rename street -> road: {street} and {address.street}", () => {
    // the root {street} reads nothing (survey-library #12233, O3): it keeps its text
    checkRename(surveyJson(), { q1: ["{street} = 1 and {address.street} = 2", "{street} = 1 and {address.road} = 2"] },
      creator => creator.survey.getQuestionByName("panel1.street").name = "road");
  });
  test("an inner street renamed next to a top-level street: the root {street} reads the top-level one and stays", () => {
    checkRename({ dataNesting: "auto", elements: [addressPanel(), { type: "text", name: "street" }, { type: "text", name: "q1" }] },
      { q1: ["{street} = 1 and {address.street} = 2", "{street} = 1 and {address.road} = 2"] },
      creator => creator.survey.getQuestionByName("panel1.street").name = "road", true);
  });
  test("an inner street renamed: {street} in a panel with its own street stays, {address.street} there follows", () => {
    checkRename({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "text", name: "street" },
      { type: "panel", name: "inner", valueName: "inner", elements: [{ type: "text", name: "street" }, { type: "text", name: "x" }] }] }),
    { type: "text", name: "q1" }] },
    { x: ["{street} = 1 and {address.street} = 2", "{street} = 1 and {address.road} = 2"] },
    creator => creator.survey.getQuestionByName("panel1.street").name = "road", true);
  });
  test("the renamed key is taken in the owner's own panel: the text goes from the next scope outwards", () => {
    // inner has no street, so {street} reads address's; inner's own road would answer a plain {road}
    checkRename({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "text", name: "street" },
      { type: "panel", name: "inner", valueName: "inner", elements: [{ type: "text", name: "road" }, { type: "text", name: "x" }] }] }),
    { type: "text", name: "q1" }] },
    { x: ["{street} = 1", "{address.road} = 1"] },
    creator => creator.survey.getQuestionByName("panel1.street").name = "road", true);
  });
  test("the rewritten text reads the renamed question at runtime, and the kept one does not", () => {
    const creator = createCreator({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "text", name: "street" },
      { type: "panel", name: "inner", valueName: "inner", elements: [{ type: "text", name: "road" }, { type: "text", name: "x", visibleIf: "{street} = 1" }] }] }),
    { type: "text", name: "q1" }] });
    const street = creator.survey.getQuestionByName("panel1.street");
    const x = creator.survey.getQuestionByName("panel1.inner.x");
    expect(creator.survey.getQuestionByVariable("street", x).question).toBe(street);
    street.name = "road";
    expect(x.visibleIf).toBe("{address.road} = 1");
    expect(creator.survey.getQuestionByVariable("address.road", x).question).toBe(street);
    expect(creator.survey.getQuestionByVariable("road", x).question).not.toBe(street);
  });
  test("street gets a first valueName st: {street} inside the container follows its key", () => {
    checkRename(surveyJson({}, { elements: [
      { type: "dropdown", name: "kind", choices: ["home"] }, { type: "text", name: "street" }] }),
    { kind: ["{street} = 3", "{st} = 3"], q1: ["{address.street} = 1", "{address.st} = 1"] },
    creator => creator.survey.getQuestionByName("panel1.street").valueName = "st", true);
  });
  const scopedQ1Json = (): any => ({ dataNesting: "auto", elements: [
    addressPanel({ elements: [{ type: "text", name: "street" }] }),
    { type: "panel", name: "other", valueName: "other", elements: [{ type: "text", name: "q1" }, { type: "text", name: "y" }] },
    { type: "panel", name: "o2", valueName: "o2", elements: [{ type: "text", name: "z", valueName: "q1" }, { type: "text", name: "y2" }] },
    { type: "text", name: "q1" }, { type: "text", name: "q2" }] });
  test("a top-level q1 renamed: {q1} follows where it reads the root's q1, not where a panel has its own q1 key", () => {
    checkRename(scopedQ1Json(), {
      street: ["{q1} = 1", "{q1new} = 1"],
      y: ["{q1} = 2", "{q1} = 2"],
      y2: ["{q1} = 3", "{q1} = 3"],
      q2: ["{q1} = 4 and {other.q1} = 5", "{q1new} = 4 and {other.q1} = 5"]
    }, creator => creator.survey.getQuestionByName("q1").name = "q1new", true);
    checkRename(scopedQ1Json(), {
      street: ["{q1} = 1", "{v1} = 1"],
      y: ["{q1} = 2", "{q1} = 2"],
      q2: ["{q1} = 4", "{v1} = 4"]
    }, creator => creator.survey.getQuestionByName("q1").valueName = "v1", true);
  });
  test("\"none\": a rename rewrites the text everywhere, as on master", () => {
    checkRename(surveyJson({ dataNesting: "none" }, { elements: [
      { type: "dropdown", name: "kind", choices: ["home"] }, { type: "text", name: "street" }, { type: "text", name: "city", valueName: "town" }] }),
    { kind: ["{street} = 3", "{road} = 3"], q1: ["{address.street} = 1 and {street} = 2", "{address.street} = 1 and {road} = 2"] },
    creator => creator.survey.getQuestionByName("street").name = "road", true);
    checkRename(surveyJson({ dataNesting: "none" }), { q1: ["{city} = 1 and {town} = 2", "{city} = 1 and {town} = 2"] },
      creator => creator.survey.getQuestionByName("city").name = "place", true);
    const json = scopedQ1Json();
    json.dataNesting = "none";
    json.elements.splice(1, 1);
    checkRename(json, { street: ["{q1} = 1", "{q1new} = 1"], y2: ["{q1} = 3", "{q1new} = 3"] },
      creator => creator.getAllQuestions().filter(q => q.name === "q1")[0].name = "q1new", true);
  });
  test("panel1's valueName -> addr: {address.street} inside a panel with its own address key stays", () => {
    checkRename({ dataNesting: "auto", elements: [addressPanel(),
      { type: "panel", name: "other", valueName: "other", elements: [
        { type: "matrix", name: "mm", valueName: "address", rows: ["street"], columns: ["c1"] }, { type: "text", name: "y" }] },
      { type: "text", name: "q1" }] },
    { y: ["{address.street} = 'c1'", "{address.street} = 'c1'"], q1: ["{address.street} = 1", "{addr.street} = 1"] },
    creator => creator.survey.getPanelByName("panel1").valueName = "addr", true);
  });
  test("a dynamic panel's template question renamed: {panel.x} follows, {x} that reads nothing stays", () => {
    const creator = createCreator({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "paneldynamic", name: "dp", templateElements: [
        { type: "text", name: "x" }, { type: "text", name: "y", visibleIf: "{panel.x} = 1 and {x} = 2" }] }] }),
    { type: "text", name: "q1", visibleIf: "{x} = 3" }] });
    const template = (<any>creator.survey.getQuestionByName("panel1.dp")).template;
    const q1 = creator.survey.getQuestionByName("q1");
    template.getQuestionByName("x").name = "x2";
    expect(template.getQuestionByName("y").visibleIf, "after").toBe("{panel.x2} = 1 and {x} = 2");
    expect(q1.visibleIf, "after: q1").toBe("{x} = 3");
    creator.undo();
    expect(template.getQuestionByName("y").visibleIf, "undo").toBe("{panel.x} = 1 and {x} = 2");
    creator.redo();
    expect(template.getQuestionByName("y").visibleIf, "redo").toBe("{panel.x2} = 1 and {x} = 2");
  });
  test("a choice's visibleIf and an expression validator read in their question's scope: {street} follows", () => {
    const creator = createCreator({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "dropdown", name: "kind", choices: [{ value: "home", visibleIf: "{street} = 1" }],
        validators: [{ type: "expression", expression: "{street} = 2" }] },
      { type: "text", name: "street" }] }), { type: "text", name: "q1" }] });
    const kind: any = creator.survey.getQuestionByName("panel1.kind");
    creator.survey.getQuestionByName("panel1.street").name = "road";
    expect(kind.choices[0].visibleIf, "after: choice").toBe("{road} = 1");
    expect(kind.validators[0].expression, "after: validator").toBe("{road} = 2");
    creator.undo();
    expect(kind.choices[0].visibleIf, "undo: choice").toBe("{street} = 1");
    expect(kind.validators[0].expression, "undo: validator").toBe("{street} = 2");
  });
  test("a survey where no container nests any more renames as on master", () => {
    const creator = createCreator({ dataNesting: "auto", elements: [addressPanel(),
      { type: "paneldynamic", name: "dp", templateElements: [
        { type: "text", name: "x" }, { type: "text", name: "y", visibleIf: "{panel.x} = 1 and {x} = 2" }] },
      { type: "text", name: "q1", visibleIf: "{x} = 3" }] });
    creator.survey.getPanelByName("panel1").valueName = "";
    const template = (<any>creator.survey.getQuestionByName("dp")).template;
    template.getQuestionByName("x").name = "x2";
    expect(template.getQuestionByName("y").visibleIf).toBe("{panel.x2} = 1 and {x2} = 2");
    expect(creator.survey.getQuestionByName("q1").visibleIf).toBe("{x2} = 3");
  });
  test("a detail panel's question renamed: {row.x} in the detail panel follows", () => {
    // a rename in a detail panel does not reach the creator's handler today (report-01); the handler itself is
    // ready for it
    const creator = createCreator({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "matrixdynamic", name: "md", columns: [{ name: "c" }], detailPanelMode: "underRow", detailElements: [
        { type: "text", name: "x" }, { type: "text", name: "y", visibleIf: "{row.x} = 1 and {x} = 2" }] }] }),
    { type: "text", name: "q1", visibleIf: "{x} = 3" }] });
    const detail = (<any>creator.survey.getQuestionByName("panel1.md")).detailPanel;
    const x = detail.getQuestionByName("x");
    x.name = "x2";
    creator.updateConditionsOnNameChanged(x, "name", "x");
    expect(detail.getQuestionByName("y").visibleIf).toBe("{row.x2} = 1 and {x} = 2");
    expect(creator.survey.getQuestionByName("q1").visibleIf).toBe("{x} = 3");
  });
  test("one rule on elements in two scopes splits: inside the container {street} follows, at the root it stays", () => {
    const json = surveyJson({}, { elements: [{ type: "dropdown", name: "kind", choices: ["a"] }, { type: "text", name: "street" }] });
    checkRename(json, { kind: ["{street} = 1", "{road} = 1"], q1: ["{street} = 1", "{street} = 1"] },
      creator => creator.survey.getQuestionByName("panel1.street").name = "road", true);
    const creator = createCreator(json);
    creator.survey.getQuestionByName("panel1.street").name = "road";
    // the logic is built again after the split: the next rename finds the rule on kind alone
    creator.survey.getQuestionByName("panel1.road").valueName = "rd";
    expect(creator.survey.getQuestionByName("panel1.kind").visibleIf).toBe("{rd} = 1");
    expect(creator.survey.getQuestionByName("q1").visibleIf).toBe("{street} = 1");
  });
  test("a trigger's setToName: a data path follows, a bare root name that reads no inner question stays", () => {
    const creator = createCreator({ dataNesting: "auto", triggers: [
      { type: "setvalue", expression: "{q1} = 1", setToName: "street", setValue: 1 },
      { type: "copyvalue", expression: "{q1} = 2", setToName: "q1", fromName: "address.street" }],
    elements: [addressPanel(), { type: "text", name: "q1" }] });
    const names = (): Array<string> => creator.survey.triggers.map((t: any) => [t.setToName, t.fromName].filter(s => !!s).join(","));
    creator.survey.getQuestionByName("panel1.street").name = "road";
    expect(names(), "after").toEqual(["street", "q1,address.road"]);
    creator.undo();
    expect(names(), "undo").toEqual(["street", "q1,address.street"]);
    creator.redo();
    expect(names(), "redo").toEqual(["street", "q1,address.road"]);
  });
  test("an inner question's choice value renamed: {address.town} and an inner matrix's rows follow", () => {
    const creator = createCreator({ dataNesting: "auto", elements: [
      { type: "panel", name: "panel1", valueName: "address", elements: [
        { type: "radiogroup", name: "city", valueName: "town", choices: ["a", "b"] },
        { type: "matrixdropdown", name: "m", valueName: "mv", rows: ["r1"], columns: [{ name: "c1", cellType: "dropdown", choices: ["x", "y"] }] }] },
      { type: "text", name: "q1", visibleIf: "{address.town} = 'a' and {address.mv.r1.c1} = 'x'" }
    ] });
    creator.survey.getQuestionByName("panel1.city").choices[0].value = "a1";
    expect(creator.survey.getQuestionByName("q1").visibleIf, "#1").toBe("({address.town} = 'a1') and ({address.mv.r1.c1} = 'x')");
    creator.survey.getQuestionByName("panel1.m").columns[0].choices[0].value = "x1";
    expect(creator.survey.getQuestionByName("q1").visibleIf, "#2").toBe("({address.town} = 'a1') and ({address.mv.r1.c1} = 'x1')");
  });
  test("rename city (valueName town) -> place: no key changes, {city} (reads nothing) and {address.town} stay", () => {
    checkRename(surveyJson(), { q1: ["{city} = 1 and {address.town} = 2", "{city} = 1 and {address.town} = 2"] },
      creator => creator.survey.getQuestionByName("panel1.city").name = "place");
  });
  test("city's valueName -> village: {city} does not change, {address.town} follows", () => {
    checkRename(surveyJson(), { q1: ["{city} = 1 and {address.town} = 2", "{city} = 1 and {address.village} = 2"] },
      creator => creator.survey.getQuestionByName("panel1.city").valueName = "village");
  });
  test("street gets a first valueName st: {street} does not change, {address.street} follows", () => {
    checkRename(surveyJson(), { q1: ["{street} = 1 and {address.street} = 2", "{street} = 1 and {address.st} = 2"] },
      creator => creator.survey.getQuestionByName("panel1.street").valueName = "st");
  });
  test("panel1's valueName -> addr: {address.street} follows, {street} does not change", () => {
    checkRename(surveyJson(), { q1: ["{address.street} = 1 and {street} = 2 and {address} notempty", "{addr.street} = 1 and {street} = 2 and {addr} notempty"] },
      creator => creator.survey.getPanelByName("panel1").valueName = "addr");
  });
  test("\"panel\" mode: rename panel1 (no valueName): {panel1.street} follows", () => {
    checkRename(surveyJson({ dataNesting: "panel" }, { valueName: undefined }), { q1: ["{panel1.street} = 1 and {street} = 2", "{panelX.street} = 1 and {street} = 2"] },
      creator => creator.survey.getPanelByName("panel1").name = "panelX");
  });
  const pagesJson = (): any => ({ dataNesting: "panelAndPage", pages: [
    { name: "page1", elements: [addressPanel(), { type: "text", name: "q0" }] },
    { name: "page2", elements: [{ type: "text", name: "q2" }, { type: "text", name: "q3" }] }] });
  test("\"panelAndPage\": rename page1: the absolute path follows, the relative one inside page1 does not change", () => {
    checkRename(pagesJson(), {
      q0: ["{address.street} = 1", "{address.street} = 1"],
      q2: ["{page1.address.street} = 1", "{pageA.address.street} = 1"]
    }, creator => creator.survey.getPageByName("page1").name = "pageA");
  });
  test("\"panelAndPage\": panel1's valueName -> addr: the relative path inside page1 and the absolute path follow", () => {
    checkRename(pagesJson(), {
      q0: ["{address.street} = 1", "{addr.street} = 1"],
      q2: ["{page1.address.street} = 1", "{page1.addr.street} = 1"],
      // the same text on page2 does not resolve there: it is not rewritten
      q3: ["{address.street} = 1", "{address.street} = 1"]
    }, creator => creator.survey.getPanelByName("page1.panel1").valueName = "addr");
  });
  test("a panel with its own valueName renamed: nothing changes", () => {
    checkRename(surveyJson({ dataNesting: "panel" }), { q1: ["{address.street} = 1 and {street} = 2", "{address.street} = 1 and {street} = 2"] },
      creator => creator.survey.getPanelByName("panel1").name = "panelX");
  });
  test("a top-level question renamed: today's behaviour", () => {
    checkRename(surveyJson(), { street: ["{q1} = 1", "{q1new} = 1"] },
      creator => creator.survey.getQuestionByName("q1").name = "q1new");
    checkRename(surveyJson(), { street: ["{q1} = 1", "{v1} = 1"] },
      creator => creator.survey.getQuestionByName("q1").valueName = "v1");
  });
  test("\"page\" mode: a page-level question is inner: {a} and {page1.a} follow its valueName, {b} (reads nothing) stays", () => {
    const json = (): any => ({ dataNesting: "page", pages: [{ name: "page1", elements: [
      { type: "text", name: "a" }, { type: "text", name: "b", valueName: "bv" }, { type: "text", name: "q1" }] }] });
    checkRename(json(), { q1: ["{a} = 1 and {page1.a} = 2", "{av} = 1 and {page1.av} = 2"] },
      creator => creator.survey.getQuestionByName("page1.a").valueName = "av", true);
    checkRename(json(), { q1: ["{b} = 1 and {page1.bv} = 2", "{b} = 1 and {page1.bv} = 2"] },
      creator => creator.survey.getQuestionByName("page1.b").name = "b2", true);
  });
  test("an inner select question renamed: choicesFromQuestion follows, in \"auto\" and in \"page\" mode", () => {
    const creator = createCreator({ dataNesting: "auto", elements: [addressPanel(), { type: "dropdown", name: "q2", choicesFromQuestion: "kind" }] });
    creator.survey.getQuestionByName("panel1.kind").name = "kind2";
    expect(creator.survey.getQuestionByName("q2").choicesFromQuestion).toBe("kind2");
    creator.undo();
    expect(creator.survey.getQuestionByName("q2").choicesFromQuestion).toBe("kind");

    const pageCreator = createCreator({ dataNesting: "page", elements: [{ type: "dropdown", name: "a", choices: ["x"] },
      { type: "dropdown", name: "q2", choicesFromQuestion: "a" }] });
    pageCreator.survey.getQuestionByName("page1.a").name = "a2";
    expect(pageCreator.survey.getQuestionByName("page1.q2").choicesFromQuestion).toBe("a2");
  });
  // A rename asks survey-core what each variable reads before the change (survey.onDataKeyChangingCallback), on
  // every path that changes a key (review-01, prompt 03)
  test("a rename in the property grid and from code, with their undo and redo, give one result", () => {
    const json = surveyJson({}, { elements: [{ type: "dropdown", name: "kind", choices: ["a"], visibleIf: "{street} = 1" }, { type: "text", name: "street" }] });
    json.elements[1].visibleIf = "{address.street} = 2";
    const texts = (creator: CreatorTester): Array<string> => ["panel1.kind", "q1"].map(name => creator.survey.getQuestionByName(name).visibleIf);
    const byCode = createCreator(json);
    byCode.survey.getQuestionByName("panel1.street").name = "road";
    byCode.survey.getQuestionByName("panel1.road").valueName = "rd";
    const inGrid = createCreator(json);
    inGrid.selectElement(inGrid.survey.getQuestionByName("panel1.street"));
    inGrid.propertyGrid.getQuestionByName("name").value = "road";
    inGrid.propertyGrid.getQuestionByName("valueName").value = "rd";
    [byCode, inGrid].forEach((creator, index) => {
      expect(texts(creator), "after: " + index).toEqual(["{rd} = 1", "{address.rd} = 2"]);
      creator.undo();
      expect(texts(creator), "undo: " + index).toEqual(["{road} = 1", "{address.road} = 2"]);
      creator.undo();
      expect(texts(creator), "undo twice: " + index).toEqual(["{street} = 1", "{address.street} = 2"]);
      creator.redo();
      creator.redo();
      expect(texts(creator), "redo: " + index).toEqual(["{rd} = 1", "{address.rd} = 2"]);
    });
  });
  test("a key-changing callback with no change after it is not applied to a later change", () => {
    const creator = createCreator(surveyJson({ elements: [addressPanel(), { type: "text", name: "q1", visibleIf: "{address.street} = 1" },
      { type: "paneldynamic", name: "dp", templateElements: [{ type: "panel", name: "tp", valueName: "tv", elements: [{ type: "text", name: "x" }] }] }] }));
    const street = creator.survey.getQuestionByName("panel1.street");
    // the set after the callback does not happen (an exception). The next callback drops what the first one
    // found, even one with nothing to look up and no rewrite after it (a template panel's key). A change by
    // setPropertyValue (no callback; nothing in the Creator or survey-core sets a name that way) then
    // rewrites nothing.
    creator.survey.onDataKeyChangingCallback(street, "street", "road");
    (<any>creator.survey.getQuestionByName("dp")).template.getElementByName("tp").valueName = "tv2";
    street.setPropertyValue("name", "road");
    expect(creator.survey.getQuestionByName("q1").visibleIf).toBe("{address.street} = 1");
  });
  test("a name a scope further out holds too: {street} inside the container follows, the root one stays", () => {
    const json = { dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "text", name: "street" }, { type: "text", name: "k" }] }), { type: "text", name: "street" }, { type: "text", name: "q1" }] };
    checkRename(json, { k: ["{street} = 1", "{road} = 1"], q1: ["{street} = 2", "{street} = 2"] },
      creator => creator.survey.getQuestionByName("panel1.street").name = "road", true);
    checkRename(json, { k: ["{street} = 1", "{st} = 1"] },
      creator => creator.survey.getQuestionByName("panel1.street").valueName = "st", true);
    // a container key that a root container holds too
    checkRename({ dataNesting: "auto", elements: [
      { type: "panel", name: "r", valueName: "in", elements: [{ type: "text", name: "x" }] },
      { type: "panel", name: "out", valueName: "out", elements: [{ type: "text", name: "s" },
        { type: "panel", name: "i", valueName: "in", elements: [{ type: "text", name: "x" }] }] }] },
    { s: ["{in.x} = 1", "{in3.x} = 1"] }, creator => creator.survey.getPanelByName("out.i").valueName = "in3", true);
  });
  test("one key in two containers on two pages: only the variable of the renamed container follows", () => {
    checkRename({ dataNesting: "auto", pages: [
      { name: "p1", elements: [{ type: "panel", name: "a", valueName: "address", elements: [{ type: "text", name: "street" }] }] },
      { name: "p2", elements: [{ type: "panel", name: "b", valueName: "address", elements: [{ type: "text", name: "town" }] },
        { type: "text", name: "q1" }] }] },
    { q1: ["{address.street} = 1 and {address.town} = 2", "{addr.street} = 1 and {address.town} = 2"] },
    creator => creator.survey.getPanelByName("a").valueName = "addr", true);
  });
  test("a container's new key taken by a question inside it: the text read from inside drops the key", () => {
    checkRename(surveyJson({}, { elements: [{ type: "text", name: "kind" }, { type: "text", name: "street" }, { type: "text", name: "addr" }] }),
      { kind: ["{address.street} = 1", "{street} = 1"] }, creator => creator.survey.getPanelByName("panel1").valueName = "addr", true);
  });
  test("a numeric valueName from JSON changed: the variable follows", () => {
    // no undo here: survey-core's makeNameValid throws when undo sets the number back (str.trim)
    const creator = createCreator(surveyJson({}, { elements: [{ type: "text", name: "street", valueName: 7 }] }));
    const q1 = creator.survey.getQuestionByName("q1");
    q1.visibleIf = "{address.7} = 1";
    creator.survey.getQuestionByName("panel1.street").valueName = "st";
    expect(q1.visibleIf).toBe("{address.st} = 1");
  });
  test("a container's own value, a comment and a column total follow a key change", () => {
    const json = { dataNesting: "auto", elements: [addressPanel({ elements: [{ type: "text", name: "street", showCommentArea: true },
      { type: "matrixdropdown", name: "m", valueName: "mv", rows: ["r1"], columns: [{ name: "c1", totalType: "sum" }] }] }),
    { type: "text", name: "q1" }] };
    const text = "{address} notempty and {address.street-comment} = 1 and {address.mv-total.c1} = 2";
    checkRename(json, { q1: [text, "{addr} notempty and {addr.street-comment} = 1 and {addr.mv-total.c1} = 2"] },
      creator => creator.survey.getPanelByName("panel1").valueName = "addr", true);
    // the comment's postfix is not followed when the question itself is renamed, as before
    checkRename(json, { q1: [text, "{address} notempty and {address.street-comment} = 1 and {address.mv2-total.c1} = 2"] },
      creator => {
        creator.survey.getQuestionByName("panel1.street").name = "road";
        creator.survey.getQuestionByName("panel1.m").valueName = "mv2";
      });
  });
  test("a question inside a choice panel renamed: {chin.x} follows", () => {
    checkRename({ dataNesting: "auto", elements: [
      { type: "checkbox", name: "chbox", choices: [{ value: 1, elements: [
        { type: "panel", name: "chin", valueName: "chin", elements: [{ type: "text", name: "x" }] }] }] },
      { type: "text", name: "q1" }] },
    { q1: ["{chin.x} = 1", "{chin.y} = 1"] },
    creator => creator.survey.getAllQuestions(false, false, true).filter(q => q.name === "x")[0].name = "y", true);
  });
});

describe("findInnerQuestion (nested data, survey-library #12233)", () => {
  test("names and paths map to the inner question, and the lookup follows a change of the survey", () => {
    const survey = new SurveyModel(surveyJson());
    // from the root a bare name finds no inner question; inside the container a key does
    expect(findInnerQuestion(survey, "street")).toBeNull();
    expect(findInnerQuestion(survey, "street", survey.getQuestionByName("panel1.city")).question.name).toBe("street");
    expect(findInnerQuestion(survey, "address.street").question.name).toBe("street");
    expect(findInnerQuestion(survey, "Address.TOWN").question.name).toBe("city");
    expect(findInnerQuestion(survey, "town")).toBeNull();
    expect(findInnerQuestion(survey, "town", survey.getQuestionByName("panel1.street")).question.name).toBe("city");
    expect(findInnerQuestion(survey, "q1")).toBeNull();
    expect(findInnerQuestion(survey, "address.kind.x").rest).toBe(".x");
    expect(findInnerQuestion(survey, "kind.x", survey.getQuestionByName("panel1.street")).rest).toBe(".x");

    survey.getPanelByName("panel1").addNewQuestion("text", "road");
    expect(findInnerQuestion(survey, "address.road").question.name).toBe("road");
    survey.getQuestionByName("panel1.road").valueName = "rd";
    expect(findInnerQuestion(survey, "address.road")).toBeNull();
    expect(findInnerQuestion(survey, "address.rd").question.name).toBe("road");
    survey.getPanelByName("panel1").valueName = "addr";
    expect(findInnerQuestion(survey, "addr.rd").question.name).toBe("road");
    survey.dataNesting = "none";
    expect(findInnerQuestion(survey, "address.street")).toBeNull();
    expect(findInnerQuestion(survey, "street")).toBeNull();
  });
  test("getQuestionByVariableName: the question whose whole value a variable names", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [
      addressPanel({ elements: [
        { type: "text", name: "street" }, { type: "text", name: "city", valueName: "town" },
        { type: "matrix", name: "m", rows: ["r1"], columns: ["c1"] }] }),
      { type: "text", name: "q1", valueName: "val1" }, { type: "text", name: "q2", valueName: "street" }
    ] });
    const nameOf = (name: string, el?: any): string => getQuestionByVariableName(survey, name, el)?.name || null;
    expect(nameOf("val1"), "#1: a top-level question by its value name").toBe("q1");
    expect(nameOf("q1"), "#2: not by its name").toBe(null);
    expect(nameOf("city"), "#3: no inner question by its name from the root").toBe(null);
    expect(nameOf("address.town"), "#4: by its data path").toBe("city");
    expect(nameOf("m.r1"), "#5: a sub-entry names no whole value").toBe(null);
    expect(nameOf("m"), "#6").toBe(null);
    expect(nameOf("address.m"), "#6b").toBe("m");
    expect(nameOf("street"), "#7: at the root a top-level value name takes the name").toBe("q2");
    expect(nameOf("address.street"), "#8").toBe("street");
    expect(nameOf("street", survey.getQuestionByName("panel1.city")), "#9: inside the container, its own question").toBe("street");
    expect(nameOf("nosuchname"), "#10").toBe(null);
    expect(getQuestionByVariableName(survey, ""), "#11").toBe(null);
    expect(getQuestionByVariableName(null, "val1"), "#12").toBe(null);
  });
  test("a survey without nested data finds nothing", () => {
    const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2", valueName: "v2" }] });
    expect(findInnerQuestion(survey, "q1")).toBeNull();
    expect(findInnerQuestion(survey, "q2")).toBeNull();
  });
});

describe("the Creator uses survey-core's variable lookup (nested data, survey-library #12233)", () => {
  test("{address.kind-unwrapped} at the root and {kind-unwrapped} inside the container open as rows on kind and round-trip", () => {
    const json = surveyJson();
    json.elements[1].visibleIf = "{address.kind-unwrapped} = 'home'";
    json.elements[0].elements[1].visibleIf = "{kind-unwrapped} = 'work'";
    const survey = new SurveyModel(json);
    const rows = [
      { q: survey.getQuestionByName("q1"), name: "address.kind-unwrapped", text: "{address.kind-unwrapped} = 'home'" },
      { q: survey.getQuestionByName("panel1.street"), name: "kind-unwrapped", text: "{kind-unwrapped} = 'work'" }
    ];
    rows.forEach(item => {
      const editor = new ConditionEditor(survey, item.q, new EmptySurveyCreatorOptions(), "visibleIf");
      const valueQuestion = <QuestionDropdownModel>getRow(editor).getQuestionByName("questionValue");
      expect(valueQuestion.getType(), item.name).toBe("dropdown");
      expect(valueQuestion.choices.map(c => c.value), item.name).toEqual(["home", "work"]);
      expect(getRow(editor).getQuestionByName("questionName").value, item.name).toBe(item.name);
      expect(editor.text, item.name).toBe(item.text);
    });
    // the listed key with the postfix stays as written and is no choice, as for {q1-unwrapped}
    const editor = new ConditionEditor(survey, rows[1].q, new EmptySurveyCreatorOptions(), "visibleIf");
    expect((<QuestionDropdownModel>getRow(editor).getQuestionByName("questionName")).selectedItem).toBeFalsy();
  });
  test("an inner question and a top-level value name equal to its name are listed apart", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [addressPanel(), { type: "text", name: "q1" },
      { type: "text", name: "q2", valueName: "city" }, { type: "text", name: "q3", valueName: "street" }] });
    const q1 = survey.getQuestionByName("q1");
    // {city} and {street} read q2 and q3 at runtime; the inner questions are listed by their paths (sorted by
    // the texts: q2 and q3 show their names)
    expect(getListNames(survey, q1)).toEqual(["address.town", "address.kind", "address.street", "city", "street"]);
    const editor = new ConditionEditor(survey, q1, new EmptySurveyCreatorOptions(), "visibleIf");
    const row = getRow(editor);
    row.getQuestionByName("questionName").value = "address.town";
    row.getQuestionByName("questionValue").value = "x";
    expect(editor.text, "#1: the inner city").toBe("{address.town} = 'x'");
    row.getQuestionByName("questionName").value = "city";
    row.getQuestionByName("questionValue").value = "y";
    expect(editor.text, "#2: q2").toBe("{city} = 'y'");
    editor.text = "{address.street} = 'a' and {street} = 'b'";
    expect(editor.panel.panels.map(panel => panel.getQuestionByName("questionName").value), "#3: the rows round-trip")
      .toEqual(["address.street", "street"]);
    expect(editor.text).toBe("{address.street} = 'a' and {street} = 'b'");
  });
  test("findInnerQuestion keeps today's answers for comment keys, postfixes and top-level questions", () => {
    const survey = new SurveyModel(surveyJson({}, { elements: [{ type: "radiogroup", name: "kind", choices: ["home"], showOtherItem: true }] }));
    // from the root the comment key is reached by the question's path
    expect(survey.getQuestionByVariable("address.kind-Comment").isComment).toBe(true);
    expect(survey.getQuestionByVariable("kind-Comment")).toBeNull();
    expect(findInnerQuestion(survey, "address.kind-Comment")).toBeNull();
    expect(findInnerQuestion(survey, "address.kind-unwrapped")).toBeNull();
    expect(findInnerQuestion(survey, "q1")).toBeNull();
    expect(findInnerQuestion(survey, "address")).toBeNull();
    expect(findInnerQuestion(survey, "address.kind").question.name).toBe("kind");
  });
  test("findInnerQuestion with an empty unwrap postfix", () => {
    const postfix = settings.expressionVariables.unwrapPostfix;
    settings.expressionVariables.unwrapPostfix = "";
    try {
      const survey = new SurveyModel(surveyJson());
      expect(findInnerQuestion(survey, "street", survey.getQuestionByName("panel1.city")).question.name).toBe("street");
      expect(findInnerQuestion(survey, "address.street").question.name).toBe("street");
    } finally {
      settings.expressionVariables.unwrapPostfix = postfix;
    }
  });
  test("findInnerQuestion resolves from the root for a context the core cannot start from", () => {
    const survey = new SurveyModel(surveyJson({ triggers: [{ type: "setvalue", expression: "{street} = 'a'", setToName: "q1", setValue: "b" }] }));
    expect(findInnerQuestion(survey, "address.street", survey.triggers[0]).question.name).toBe("street");
  });
});
describe("the unwrap postfix after a records question (nested data, survey-library #12233)", () => {
  test("{pd[0].cb-unwrapped} and {panel.cb-unwrapped} open as rows on cb and round-trip", () => {
    const creator = new CreatorTester();
    creator.JSON = { elements: [
      { type: "paneldynamic", name: "pd", templateElements: [
        { type: "checkbox", name: "cb", choices: ["a"], valuePropertyName: "v" },
        { type: "text", name: "t1", visibleIf: "{panel.cb-unwrapped} allof ['a']" }] },
      { type: "text", name: "t2", visibleIf: "{pd[0].cb-unwrapped} allof ['a']" }] };
    const survey = creator.survey;
    const pd: any = survey.getQuestionByName("pd");
    const t1 = pd.template.getQuestionByName("t1");
    [[survey.getQuestionByName("t2"), "{pd[0].cb-unwrapped} allof ['a']"], [t1, "{panel.cb-unwrapped} allof ['a']"]].forEach(([q, text]: any) => {
      const editor = new ConditionEditor(survey, q, new EmptySurveyCreatorOptions(), "visibleIf");
      expect(getRow(editor).getQuestionByName("questionValue").getType()).toBe("checkbox");
      expect(editor.isReady).toBe(true);
      expect(editor.text).toBe(text);
    });
  });
});

// OPEN E (Andrew, 2026-11-20): a bare name is the default, read in the container, then its parent, then the
// survey. The editor lists each question by the name that reaches it from the rule's owner
// (SurveyModel.getQuestionVariableName(question, owner)).
describe("condition editor: the name that reaches a question from the rule (nested data, survey-library #12233)", () => {
  const getEntries = (survey: SurveyModel, q: Question): Array<string> =>
    new ConditionEditor(survey, q, new EmptySurveyCreatorOptions(), "visibleIf").allConditionQuestions.map(item => item.value + ":" + item.text);
  test("a rule inside address lists street, saves {street}, and reopens with that row selected", () => {
    const survey = new SurveyModel(surveyJson());
    const kind = survey.getQuestionByName("panel1.kind");
    let editor = new ConditionEditor(survey, kind, new EmptySurveyCreatorOptions(), "visibleIf");
    expect(editor.allConditionQuestions.map(item => item.value)).toEqual(["town", "q1", "street"]);
    getRow(editor).getQuestionByName("questionName").value = "street";
    getRow(editor).getQuestionByName("questionValue").value = "x";
    expect(editor.apply()).toBe(true);
    expect(kind.visibleIf).toBe("{street} = 'x'");
    editor = new ConditionEditor(survey, kind, new EmptySurveyCreatorOptions(), "visibleIf");
    const nameQuestion = <QuestionDropdownModel>getRow(editor).getQuestionByName("questionName");
    expect(nameQuestion.value).toBe("street");
    expect(nameQuestion.selectedItem?.text).toBe("street");
    expect(getRow(editor).getQuestionByName("questionValue").value).toBe("x");
    expect(editor.text).toBe("{street} = 'x'");

    const runtime = new SurveyModel(surveyJson({}, { elements: [{ type: "dropdown", name: "kind", choices: ["home"], visibleIf: "{street} = 'x'" }, { type: "text", name: "street" }] }));
    runtime.data = { address: { street: "x" } };
    expect(runtime.getQuestionByName("panel1.kind").isVisible).toBe(true);
    runtime.data = { address: { street: "y" } };
    expect(runtime.getQuestionByName("panel1.kind").isVisible).toBe(false);
  });
  test("a rule on page1 lists address.street; on page2, page1.address.street (\"panelAndPage\")", () => {
    const survey = new SurveyModel({ dataNesting: "panelAndPage", pages: [
      { name: "page1", elements: [addressPanel(), { type: "text", name: "q0" }] },
      { name: "page2", elements: [{ type: "text", name: "q1" }] }] });
    expect(getEntries(survey, survey.getQuestionByName("page1.q0"))).toEqual(["address.town:address.city", "address.kind:address.kind",
      "address.street:address.street", "page2.q1:page2.q1"]);
    expect(getEntries(survey, survey.getQuestionByName("page2.q1"))).toEqual(["page1.address.town:page1.address.city",
      "page1.address.kind:page1.address.kind", "page1.address.street:page1.address.street", "page1.q0:page1.q0"]);
  });
  test("a street hidden by an inner street: each is listed by the text that reaches it, a hidden one is not listed", () => {
    // at the root both are reached; inside address {street} reads the inner one and no text reaches the root one
    let survey = new SurveyModel({ dataNesting: "auto", elements: [{ type: "text", name: "street" }, addressPanel(), { type: "text", name: "q1" }] });
    expect(getEntries(survey, survey.getQuestionByName("q1"))).toEqual(["address.town:address.city", "address.kind:address.kind",
      "address.street:address.street", "street:street"]);
    expect(getEntries(survey, survey.getQuestionByName("panel1.kind"))).toEqual(["town:city", "q1:q1", "street:street"]);
    // a container in a container: inside inner the outer street takes the longer text
    survey = new SurveyModel({ dataNesting: "auto", elements: [{ type: "panel", name: "outer", valueName: "o", elements: [
      { type: "text", name: "street" },
      { type: "panel", name: "inner", valueName: "in", elements: [{ type: "text", name: "street" }, { type: "text", name: "x" }] }] },
    { type: "text", name: "q1" }] });
    expect(getEntries(survey, survey.getQuestionByName("q1"))).toEqual(["o.in.street:o.in.street", "o.in.x:o.in.x", "o.street:o.street"]);
    expect(getEntries(survey, survey.getQuestionByName("outer.inner.x"))).toEqual(["o.street:o.street", "q1:q1", "street:street"]);
    expect(getEntries(survey, survey.getQuestionByName("outer.street"))).toEqual(["in.street:in.street", "in.x:in.x", "q1:q1"]);
    // two questions that share a value name read one value: neither is hidden
    survey = new SurveyModel({ dataNesting: "auto", elements: [addressPanel(), { type: "text", name: "q2", valueName: "shared" },
      { type: "text", name: "q3", valueName: "shared" }] });
    expect(getEntries(survey, survey.getQuestionByName("panel1.kind")).filter(item => item.indexOf("shared") === 0)).toHaveLength(2);
  });
  test("a sub-entry inside the container: {mv.r1} opens on m's row, and the AI context describes it as a row", () => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "matrix", name: "m", valueName: "mv", rows: ["r1"], columns: ["c1", "c2"] },
      { type: "matrixdynamic", name: "md", columns: [{ name: "c1", cellType: "text" }] },
      { type: "text", name: "t" }] })] };
    const survey = creator.survey;
    const t = survey.getQuestionByName("panel1.t");
    expect(getEntries(survey, t)).toEqual(["mv.r1:m.r1", "md[0].c1:md[0].c1"]);
    t.visibleIf = "{mv.r1} = 'c2'";
    const editor = new ConditionEditor(survey, t, new EmptySurveyCreatorOptions(), "visibleIf");
    const valueQuestion = <QuestionDropdownModel>getRow(editor).getQuestionByName("questionValue");
    expect(valueQuestion.choices.map(c => c.value)).toEqual(["c1", "c2"]);
    expect(valueQuestion.value).toBe("c2");
    expect(editor.text).toBe("{mv.r1} = 'c2'");
    // the AI is told the same names; the row entry is described as one row
    const context = buildExpressionContext(creator, [{ obj: t, propertyName: "visibleIf" }], "", undefined, getExpressionLintOptions(creator)).context;
    const row: any = context.variables.filter(v => v.name === "mv.r1")[0];
    expect(row.type).toBe("radiogroup");
    expect(row.choices.map(c => c.value)).toEqual(["c1", "c2"]);
    expect(context.variables.filter(v => v.name === "md").length, "the whole value of md, by the same name").toBe(1);
  });
  test("a rename of street and of address with {street} in place inside address", () => {
    const creator = new CreatorTester();
    creator.JSON = surveyJson();
    const kind = creator.survey.getQuestionByName("panel1.kind");
    const editor = new ConditionEditor(creator.survey, kind, new EmptySurveyCreatorOptions(), "visibleIf");
    getRow(editor).getQuestionByName("questionName").value = "street";
    getRow(editor).getQuestionByName("questionValue").value = "x";
    editor.apply();
    expect(kind.visibleIf).toBe("{street} = 'x'");
    creator.survey.getQuestionByName("panel1.street").name = "road";
    expect(kind.visibleIf).toBe("{road} = 'x'");
    creator.survey.getPanelByName("panel1").valueName = "addr";
    expect(kind.visibleIf).toBe("{road} = 'x'");
    const reopened = new ConditionEditor(creator.survey, kind, new EmptySurveyCreatorOptions(), "visibleIf");
    expect(getRow(reopened).getQuestionByName("questionName").value).toBe("road");
    expect(reopened.allConditionQuestions.map(item => item.value)).toEqual(["town", "q1", "road"]);
    creator.undo();
    creator.undo();
    expect(kind.visibleIf).toBe("{street} = 'x'");
  });
  test("a choice value renamed: {kind} inside address and {address.kind} follow, a top-level kind's {kind} does not", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [
      addressPanel({ elements: [
        { type: "dropdown", name: "kind", choices: ["home"] },
        { type: "text", name: "inner", visibleIf: "{kind} = 'home'" },
        { type: "text", name: "inner2", visibleIf: "{address.kind} = 'home'" }] }),
      { type: "dropdown", name: "top", valueName: "kind", choices: ["home"] },
      { type: "text", name: "q1", visibleIf: "{kind} = 'home' and {address.kind} = 'home'" }] });
    const logic = new SurveyLogic(survey);
    const item = (<QuestionDropdownModel>survey.getQuestionByName("panel1.kind")).choices[0];
    item.value = "house";
    logic.renameItemValue(item, "home");
    expect(survey.getQuestionByName("panel1.inner").visibleIf).toBe("{kind} = 'house'");
    expect(survey.getQuestionByName("panel1.inner2").visibleIf).toBe("{address.kind} = 'house'");
    expect(survey.getQuestionByName("q1").visibleIf, "the root {kind} reads top").toBe("({kind} = 'home') and ({address.kind} = 'house')");
    const topItem = (<QuestionDropdownModel>survey.getQuestionByName("top")).choices[0];
    topItem.value = "flat";
    logic.renameItemValue(topItem, "home");
    expect(survey.getQuestionByName("panel1.inner").visibleIf, "{kind} inside address reads the inner kind").toBe("{kind} = 'house'");
    expect(survey.getQuestionByName("q1").visibleIf).toBe("({kind} = 'flat') and ({address.kind} = 'house')");
  });
  test("the Logic tab's rule editor lists the names from the rule's owner, and the root's for a new rule", () => {
    const survey = new SurveyModel(surveyJson({}, { elements: addressPanel().elements.concat([{ type: "text", name: "inner", visibleIf: "{street} = 'x'" }]) }));
    const logic = new SurveyLogicUI(survey);
    logic.editItem(logic.items[0]);
    expect(logic.expressionEditor.allConditionQuestions.map(item => item.value)).toEqual(["town", "inner", "kind", "q1", "street"]);
    expect(getRow(logic.expressionEditor).getQuestionByName("questionName").value).toBe("street");
    logic.addNew();
    expect(logic.expressionEditor.allConditionQuestions.map(item => item.value)).toEqual(["address.town", "address.inner",
      "address.kind", "address.street", "q1"]);
    // the filter and the used questions list the rule under street
    const saved = new SurveyLogic(survey);
    expect(saved.items.filter(item => item.isSuitable("street")).map(item => item.expression)).toEqual(["{street} = 'x'"]);
    expect(saved.getUsedQuestions().map(q => q.name)).toEqual(["street", "inner"]);
  });
  // review 1: a listed inner name that is a top-level question's name too ({town}, {kind}) keeps its question
  // and is written as it is; the inner entry that shows a top-level entry's text shows its data path
  test("an inner entry named like a top-level question: its value editor, its text and the variable written", () => {
    const json = { dataNesting: "auto", elements: [
      addressPanel({ elements: [{ type: "dropdown", name: "kind", choices: ["home"] }, { type: "dropdown", name: "city", valueName: "town", choices: ["Oslo"] },
        { type: "text", name: "street" }] }),
      { type: "text", name: "town", valueName: "tv" }, { type: "text", name: "kind", valueName: "k2" }] };
    const survey = new SurveyModel(json);
    const street = survey.getQuestionByName("panel1.street");
    expect(getEntries(survey, street)).toEqual(["kind:address.kind", "town:city", "k2:kind", "tv:town"]);
    const check = (name: string, value: string, text: string): void => {
      const editor = new ConditionEditor(survey, street, new EmptySurveyCreatorOptions(), "visibleIf");
      getRow(editor).getQuestionByName("questionName").value = name;
      const valueQuestion = getRow(editor).getQuestionByName("questionValue");
      expect(valueQuestion.getType(), name).toBe("dropdown");
      valueQuestion.value = value;
      expect(editor.text, name).toBe(text);
      editor.apply();
      const reopened = new ConditionEditor(survey, street, new EmptySurveyCreatorOptions(), "visibleIf");
      expect(getRow(reopened).getQuestionByName("questionName").value, name).toBe(name);
      expect(getRow(reopened).getQuestionByName("questionValue").getType(), name).toBe("dropdown");
      expect(reopened.text, name).toBe(text);
    };
    check("town", "Oslo", "{town} = 'Oslo'");
    check("kind", "home", "{kind} = 'home'");
    const runtime = new SurveyModel(json);
    runtime.getQuestionByName("panel1.street").visibleIf = "{kind} = 'home'";
    runtime.data = { address: { kind: "home" }, k2: "x" };
    expect(runtime.getQuestionByName("panel1.street").isVisible).toBe(true);
  });
  test("a longer text with the unwrap postfix opens on the listed entry and keeps the postfix", () => {
    const survey = new SurveyModel(surveyJson());
    const street = survey.getQuestionByName("panel1.street");
    street.visibleIf = "{address.kind-unwrapped} = 'home'";
    const editor = new ConditionEditor(survey, street, new EmptySurveyCreatorOptions(), "visibleIf");
    expect(getRow(editor).getQuestionByName("questionValue").getType()).toBe("dropdown");
    expect(editor.text).toBe("{kind-unwrapped} = 'home'");
  });
  test("a top-level question whose name reads a container's object inside address is not listed there", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [{ type: "dropdown", name: "kind", choices: ["a"] },
      { type: "panel", name: "panel1", valueName: "address", elements: [
        { type: "panel", name: "sub", valueName: "kind", elements: [{ type: "text", name: "x" }] }, { type: "text", name: "street" }] }] });
    expect(getEntries(survey, survey.getQuestionByName("panel1.street"))).toEqual(["kind.x:kind.x"]);
    expect(getEntries(survey, survey.getQuestionByName("kind"))).toEqual(["address.kind.x:address.kind.x", "address.street:address.street"]);
  });
  test("a matrix inside address: {m.r1} follows a row and a column rename; {md.r1.c1} a column and a cell choice rename", () => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "matrix", name: "m", rows: ["r1"], columns: ["c1"] },
      { type: "matrixdropdown", name: "md", rows: ["r1"], columns: [{ name: "c1", cellType: "dropdown", choices: ["x"] }] },
      { type: "text", name: "t", visibleIf: "{m.r1} = 'c1' and {md.r1.c1} = 'x'" }] })] };
    const survey = creator.survey;
    const t = survey.getQuestionByName("panel1.t");
    survey.getQuestionByName("panel1.m").rows[0].value = "r9";
    expect(t.visibleIf).toBe("{m.r9} = 'c1' and {md.r1.c1} = 'x'");
    survey.getQuestionByName("panel1.m").columns[0].value = "c9";
    expect(t.visibleIf).toBe("({m.r9} = 'c9') and ({md.r1.c1} = 'x')");
    const md: any = survey.getQuestionByName("panel1.md");
    md.columns[0].choices[0].value = "y";
    expect(t.visibleIf).toBe("({m.r9} = 'c9') and ({md.r1.c1} = 'y')");
    md.columns[0].name = "c2";
    expect(t.visibleIf).toBe("({m.r9} = 'c9') and ({md.r1.c2} = 'y')");
  });
  test("the Logic tab: a rule on a dynamic panel's template question inside address opens {panel.x} and saves it", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "paneldynamic", name: "pd", templateElements: [{ type: "dropdown", name: "x", choices: ["a"] },
        { type: "text", name: "y", visibleIf: "{panel.x} = 'a'" }] }] })] });
    const logic = new SurveyLogicUI(survey);
    logic.editItem(logic.items[0]);
    const row = getRow(logic.expressionEditor);
    expect(row.getQuestionByName("questionValue").getType()).toBe("dropdown");
    expect(logic.expressionEditor.text).toBe("{panel.x} = 'a'");
    expect(logic.saveEditableItem()).toBe(true);
    expect((<any>survey.getQuestionByName("panel1.pd")).template.getQuestionByName("y").visibleIf).toBe("{panel.x} = 'a'");
  });
  test("\"none\": the entries are unchanged inside a panel and at the root", () => {
    const survey = new SurveyModel(surveyJson({ dataNesting: "none" }));
    expect(getEntries(survey, survey.getQuestionByName("street"))).toEqual(["town:city", "kind:kind", "q1:q1"]);
    expect(getEntries(survey, survey.getQuestionByName("q1"))).toEqual(["town:city", "kind:kind", "street:street"]);
  });
});
