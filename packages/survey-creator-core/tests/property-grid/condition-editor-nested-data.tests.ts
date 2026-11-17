import { SurveyModel, Question, QuestionDropdownModel, settings } from "survey-core";
import { ConditionEditor } from "../../src/property-grid/condition-survey";
import { EmptySurveyCreatorOptions } from "../../src/creator-settings";
import { SurveyLogic } from "../../src/components/tabs/logic";
import { ExpressionToDisplayText } from "../../src/expressionToDisplayText";
import { TextareaJsonEditorModel } from "../../src/components/tabs/json-editor-textarea";
import { CreatorTester } from "../creator-tester";
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
    expect(getListNames(survey, survey.getQuestionByName("q1"))).toEqual(["address.kind", "address.street", "address.town"]);
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
    expect(getListNames(survey, survey.getQuestionByName("q1"))).toEqual(["panel1.kind", "panel1.street", "panel1.town"]);
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
    expect(nameQuestion.choices.map(c => c.value)).toEqual(["address.kind", "address.street", "address.town"]);
    expect(editor.hasErrors()).toBe(false);
    expect(editor.isReady).toBe(true);
    getRow(editor, 0).getQuestionByName("questionValue").value = "y";
    expect(editor.apply()).toBe(true);
    expect(q1.visibleIf).toBe("{address.street} = 'y' and {address.kind} = 'work'");
  });
  test("an inner question's name that starts with its valueName does not change the entry's text", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [addressPanel({ elements: [{ type: "text", name: "town2", valueName: "town" }] }),
      { type: "text", name: "q1" }] });
    const editor = new ConditionEditor(survey, survey.getQuestionByName("q1"), new EmptySurveyCreatorOptions(), "visibleIf");
    expect(editor.allConditionQuestions.map(item => item.value + ":" + item.text)).toEqual(["address.town:address.town"]);
  });
  test("{page1.address.street} opens as a row on street in \"panelAndPage\" and round-trips", () => {
    const survey = new SurveyModel({ dataNesting: "panelAndPage", pages: [{ name: "page1", elements: [addressPanel()] },
      { name: "page2", elements: [{ type: "text", name: "q1", visibleIf: "{page1.address.street} = 'x'" }] }] });
    expect(survey.getQuestionByName("page1.panel1.street").getDataPath()).toEqual(["page1", "address", "street"]);
    const q1 = survey.getQuestionByName("page2.q1");
    expect(getListNames(survey, q1)).toEqual(["page1.address.kind", "page1.address.street", "page1.address.town"]);
    const editor = new ConditionEditor(survey, q1, new EmptySurveyCreatorOptions(), "visibleIf");
    expect(editor.panel.panels).toHaveLength(1);
    expect(getRow(editor).getQuestionByName("questionName").value).toBe("page1.address.street");
    expect(getRow(editor).getQuestionByName("questionValue").value).toBe("x");
    expect(editor.text).toBe("{page1.address.street} = 'x'");
    expect(editor.hasErrors()).toBe(false);
  });
  test("a condition inside the container offers the same paths", () => {
    const survey = new SurveyModel(surveyJson());
    // a path from the root resolves inside the container too
    expect(getListNames(survey, survey.getQuestionByName("panel1.street"))).toEqual(["address.kind", "address.town", "q1"]);
  });
  test("a variable relative to the container opens as a row on its question and round-trips", () => {
    // the row keeps the variable as written and gets the question, the value editor and the text of the listed entry
    const check = (survey: SurveyModel, q: Question, name: string, entry: string): void => {
      const text = "{" + name + "} = 'work'";
      q.visibleIf = text;
      const editor = new ConditionEditor(survey, q, new EmptySurveyCreatorOptions(), "visibleIf");
      const row = getRow(editor);
      const valueQuestion = <QuestionDropdownModel>row.getQuestionByName("questionValue");
      expect(valueQuestion.getType(), name).toBe("dropdown");
      expect(valueQuestion.choices.map(c => c.value), name).toEqual(["home", "work"]);
      expect(row.getQuestionByName("questionName").value, name).toBe(name);
      expect((<QuestionDropdownModel>row.getQuestionByName("questionName")).selectedItem?.text, name).toBe(entry);
      expect(editor.hasErrors(), name).toBe(false);
      expect(editor.text, name).toBe(text);
    };
    // inside the container {kind} is kind's key
    let survey = new SurveyModel(surveyJson());
    check(survey, survey.getQuestionByName("panel1.street"), "kind", "address.kind");
    // in "panelAndPage" {address.kind} is the path from the page
    survey = new SurveyModel({ dataNesting: "panelAndPage", pages: [{ name: "page1", elements: [addressPanel()] }] });
    check(survey, survey.getQuestionByName("page1.panel1.street"), "address.kind", "page1.address.kind");
  });
  test("sub-entries of an inner matrix and multiple text follow the data path, with their own valueName", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [addressPanel({ elements: [
      { type: "matrix", name: "m", valueName: "mv", rows: ["r1"], columns: ["c1", "c2"] },
      { type: "multipletext", name: "mt", valueName: "mtv", items: [{ name: "i1" }] }
    ] }), { type: "text", name: "q1" }] });
    expect(getListNames(survey, survey.getQuestionByName("q1"))).toEqual(["address.mtv.i1", "address.mv.r1"]);

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
    expect(getListNames(survey, survey.getQuestionByName("q1"))).toEqual(["address.kind", "address.street", "address.town", "shared"]);
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
});

describe("renames rewrite names and paths (nested data, survey-library #12233)", () => {
  const createCreator = (json: any): CreatorTester => {
    const creator = new CreatorTester();
    creator.JSON = json;
    return creator;
  };
  const checkRename = (json: any, expressions: { [name: string]: [string, string] }, change: (creator: CreatorTester) => void): void => {
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
  };
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
    checkRename(surveyJson(), { q1: ["{street} = 1 and {address.street} = 2", "{road} = 1 and {address.road} = 2"] },
      creator => creator.survey.getQuestionByName("panel1.street").name = "road");
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
  test("rename city (valueName town) -> place: {city} follows, {address.town} does not change", () => {
    checkRename(surveyJson(), { q1: ["{city} = 1 and {address.town} = 2", "{place} = 1 and {address.town} = 2"] },
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
  test("\"page\" mode: a page-level question is inner: {a} keeps its name, {page1.a} follows its valueName", () => {
    const json = (): any => ({ dataNesting: "page", pages: [{ name: "page1", elements: [
      { type: "text", name: "a" }, { type: "text", name: "b", valueName: "bv" }, { type: "text", name: "q1" }] }] });
    checkRename(json(), { q1: ["{a} = 1 and {page1.a} = 2", "{a} = 1 and {page1.av} = 2"] },
      creator => creator.survey.getQuestionByName("page1.a").valueName = "av");
    checkRename(json(), { q1: ["{b} = 1 and {page1.bv} = 2", "{b2} = 1 and {page1.bv} = 2"] },
      creator => creator.survey.getQuestionByName("page1.b").name = "b2");
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
    // the entry is the listed one, the question's data path, whichever form the variable used
    const info = findInnerQuestion(survey, "address.kind.x");
    expect(info.entryName).toBe("address.kind.x");
    expect(info.rest).toBe(".x");
    expect(findInnerQuestion(survey, "kind.x", survey.getQuestionByName("panel1.street")).entryName).toBe("address.kind.x");

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
    // the relative form opens on the listed entry; the listed key with the postfix stays as written, as for
    // {q1-unwrapped}
    const editor = new ConditionEditor(survey, rows[1].q, new EmptySurveyCreatorOptions(), "visibleIf");
    expect((<QuestionDropdownModel>getRow(editor).getQuestionByName("questionName")).selectedItem?.text).toBe("address.kind");
  });
  test("an inner question and a top-level value name equal to its name are listed apart", () => {
    const survey = new SurveyModel({ dataNesting: "auto", elements: [addressPanel(), { type: "text", name: "q1" },
      { type: "text", name: "q2", valueName: "city" }, { type: "text", name: "q3", valueName: "street" }] });
    const q1 = survey.getQuestionByName("q1");
    // {city} and {street} read q2 and q3 at runtime; the inner questions are listed by their paths (sorted by
    // the texts: q2 and q3 show their names)
    expect(getListNames(survey, q1)).toEqual(["address.kind", "address.street", "address.town", "city", "street"]);
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
