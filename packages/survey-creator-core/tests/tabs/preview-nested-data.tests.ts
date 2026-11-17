import { SurveyModel } from "survey-core";
import { CreatorTester } from "../creator-tester";
import { TabTestPlugin } from "../../src/components/tabs/test-plugin";
import { SurveyResultsItemModel, SurveyResultsModel } from "../../src/components/results";
import { TabJsonEditorTextareaPlugin, TextareaJsonEditorModel } from "../../src/components/tabs/json-editor-textarea";

function getPreviewSurvey(creator: CreatorTester): SurveyModel {
  if (creator.activeTab !== "preview") {
    creator.activeTab = "preview";
  }
  return (<TabTestPlugin>creator.getPlugin("test")).model.survey;
}
const addressPanel = {
  type: "panel", name: "address", title: "Address", elements: [
    { type: "text", name: "street", title: "Street" },
    { type: "text", name: "city", title: "City" }
  ]
};
// In a nesting mode a bare name finds only the survey's own elements: an inner question is found by its path of
// names (survey-library #12233). pagePath is the page's part of it, when the page holds data.
function answerAndComplete(survey: SurveyModel, pagePath: string = ""): void {
  survey.getQuestionByName(pagePath + "address.street").value = "Main St";
  survey.getQuestionByName(pagePath + "address.city").value = "Oslo";
  survey.getQuestionByName(pagePath + "q1").value = "yes";
  survey.doComplete();
}
function getRows(results: SurveyResultsModel): Array<any> {
  return results.resultData.map(item => ({ name: item.name, title: item.title, value: item.value, isNode: !!item.isNode }));
}
const expectedRows = [
  { name: "street", title: "Street", value: "Main St", isNode: false },
  { name: "city", title: "City", value: "Oslo", isNode: false },
  { name: "q1", title: "Question 1", value: "yes", isNode: false }
];

describe("Preview results, moving elements and the JSON tab (nested data, survey-library #12233)", () => {
  test("Results: the JSON view is the nested object and the table has one row per question", () => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "auto", elements: [
      { ...addressPanel, valueName: "address" },
      { type: "text", name: "q1", title: "Question 1" }
    ] };
    const survey = getPreviewSurvey(creator);
    answerAndComplete(survey);
    const results = new SurveyResultsModel(survey);
    const data = { address: { street: "Main St", city: "Oslo" }, q1: "yes" };
    expect(JSON.parse(results.resultText)).toStrictEqual(data);
    expect(results.resultText).toBe(JSON.stringify(data, null, 4));
    expect(getRows(results)).toStrictEqual(expectedRows);
  });
  test("Results with panelAndPage: the page and the panel nest by name, the table is the same", () => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "panelAndPage", pages: [{ name: "page1", elements: [
      addressPanel,
      { type: "text", name: "q1", title: "Question 1" }
    ] }] };
    const survey = getPreviewSurvey(creator);
    answerAndComplete(survey, "page1.");
    const results = new SurveyResultsModel(survey);
    expect(results.resultText).toBe(JSON.stringify({ page1: { address: { street: "Main St", city: "Oslo" }, q1: "yes" } }, null, 4));
    expect(getRows(results)).toStrictEqual(expectedRows);
  });
  test("Moving a question into and out of a nesting panel in the designer changes where Preview stores it", () => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "auto", elements: [
      { ...addressPanel, valueName: "address" },
      { type: "text", name: "q1" }
    ] };
    const q1 = creator.survey.getQuestionByName("q1");
    creator.survey.getPanelByName("address").addElement(q1);
    let survey = getPreviewSurvey(creator);
    expect(survey.getQuestionByName("q1"), "q1 is in the panel's name scope now").toBeNull();
    survey.getQuestionByName("address.q1").value = "moved";
    expect(survey.data).toStrictEqual({ address: { q1: "moved" } });
    creator.activeTab = "designer";
    creator.survey.pages[0].addElement(creator.survey.getQuestionByName("address.q1"));
    expect(creator.JSON.pages[0].elements.map((el: any) => el.name)).toStrictEqual(["address", "q1"]);
    survey = getPreviewSurvey(creator);
    survey.getQuestionByName("q1").value = "back";
    expect(survey.data).toStrictEqual({ q1: "back" });
  });
  test("The JSON tab keeps valueName and dataNesting through an edit and back", () => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "panel", pages: [{ name: "page1", valueName: "p", elements: [
      { ...addressPanel, valueName: "addr" }
    ] }] };
    creator.activeTab = "json";
    const plugin = <TabJsonEditorTextareaPlugin>creator.getPlugin("json");
    const json = JSON.parse(plugin.model.text);
    expect(json.dataNesting).toBe("panel");
    expect(json.pages[0].valueName).toBe("p");
    expect(json.pages[0].elements[0].valueName).toBe("addr");
    json.title = "Edited";
    plugin.model.text = JSON.stringify(json);
    creator.activeTab = "designer";
    expect(creator.survey.title).toBe("Edited");
    expect(creator.survey.dataNesting).toBe("panel");
    expect(creator.survey.pages[0].valueName).toBe("p");
    // the page holds data under "p": the panel is in its name scope
    expect(creator.survey.getPanelByName("page1.address").valueName).toBe("addr");
    const saved = creator.JSON;
    expect(saved.dataNesting).toBe("panel");
    expect(saved.pages[0].valueName).toBe("p");
    expect(saved.pages[0].elements[0].valueName).toBe("addr");
  });
  test("Results in auto: an inner question's row gets that question, so its piped title renders", () => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "auto", elements: [
      { ...addressPanel, valueName: "address", elements: [
        { type: "text", name: "street", title: "Street of {q1}" },
        { type: "text", name: "city", title: "**City**" }] },
      { type: "text", name: "q1", title: "Question 1" }
    ] };
    const survey = getPreviewSurvey(creator);
    answerAndComplete(survey);
    const rows = new SurveyResultsModel(survey).resultData;
    expect(rows.map(row => row.name)).toStrictEqual(["street", "city", "q1"]);
    expect(rows[0].question).toBe(survey.getQuestionByName("address.street"));
    expect(rows[1].question).toBe(survey.getQuestionByName("address.city"));
    expect(rows[2].question).toBe(survey.getQuestionByName("q1"));
    expect(rows[0].question.locTitle.renderedHtml).toBe("Street of yes");
  });
  test("Results in auto: a top-level street and an inner street each get their own question", () => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "auto", elements: [
      { type: "text", name: "street", title: "Top street" },
      { ...addressPanel, valueName: "address" }
    ] };
    const survey = getPreviewSurvey(creator);
    survey.getQuestionByName("street").value = "Top";
    survey.getQuestionByName("address.street").value = "Inner";
    survey.doComplete();
    const rows = new SurveyResultsModel(survey).resultData;
    expect(rows.map(row => [row.name, row.title, row.value])).toStrictEqual([["street", "Top street", "Top"], ["street", "Street", "Inner"]]);
    expect(rows[0].question).toBe(survey.getQuestionByName("street"));
    expect(rows[1].question).toBe(survey.getQuestionByName("address.street"));
    expect(rows[1].question.title).toBe("Street");
  });
  test("Results with panelAndPage: an inner question's row gets that question", () => {
    const creator = new CreatorTester();
    creator.JSON = { dataNesting: "panelAndPage", pages: [{ name: "page1", elements: [
      { ...addressPanel, elements: [
        { type: "text", name: "street", title: "Street of {page1.q1}" },
        { type: "text", name: "city", title: "**City**" }] },
      { type: "text", name: "q1", title: "Question 1" }
    ] }] };
    const survey = getPreviewSurvey(creator);
    answerAndComplete(survey, "page1.");
    const rows = new SurveyResultsModel(survey).resultData;
    expect(rows.map(row => row.name)).toStrictEqual(["street", "city", "q1"]);
    expect(rows[0].question).toBe(survey.getQuestionByName("page1.address.street"));
    expect(rows[1].question).toBe(survey.getQuestionByName("page1.address.city"));
    expect(rows[2].question).toBe(survey.getQuestionByName("page1.q1"));
    expect(rows[0].question.locTitle.renderedHtml).toBe("Street of yes");
  });
  describe("Results: every row of every level gets its own question or none", () => {
    // Sub-rows are named by a matrix row, a cell, an index: a bare-name lookup gave some of them an unrelated question
    // (a matrix row r1 got the top-level r1), and threw in a nesting mode on an index name.
    const json = (mode: string) => ({ dataNesting: mode, elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "r1" },
      { type: "text", name: "c1" },
      { type: "radiogroup", name: "rg", choices: ["a", "b"], showCommentArea: true },
      { type: "checkbox", name: "cb", choices: ["a", "b"] },
      { type: "matrix", name: "m", rows: ["r1", "r2"], columns: ["c1", "c2"] },
      { type: "matrixdropdown", name: "md", rows: ["r1"], columns: [{ name: "c1", cellType: "text" }, { name: "q1", cellType: "text" }] },
      { type: "paneldynamic", name: "pd", templateElements: [{ type: "text", name: "q1" }, { type: "text", name: "pq" }] },
      { type: "multipletext", name: "mt", items: [{ name: "q1" }, { name: "t2" }] },
      { type: "panel", name: "panel1", elements: [{ type: "text", name: "inner" }] }
    ] });
    const data = {
      q1: "v", r1: "v", c1: "v", rg: "a", "rg-Comment": "note", cb: ["a", "b"],
      m: { r1: "c1", r2: "c2" }, md: { r1: { c1: "x", q1: "y" } },
      pd: [{ q1: "p1", pq: "z" }], mt: { q1: "m1", t2: "m2" }, extra: "e"
    };
    function flatten(items: Array<any>, path: string, res: Array<any>): Array<any> {
      items.forEach(item => {
        const itemPath = path + item.name;
        res.push([itemPath, item.question ? item.question.id : null]);
        flatten(item.items, itemPath + "/", res);
      });
      return res;
    }
    function flattenFields(items: Array<any>, res: Array<any>): Array<any> {
      items.filter(item => !!item).forEach(item => {
        res.push({ name: item.name, title: item.title, value: item.value, displayValue: item.displayValue, isNode: !!item.isNode });
        flattenFields(item.data || item.items || [], res);
      });
      return res;
    }
    ["none", "auto"].forEach(mode => {
      test(mode, () => {
        const survey = new SurveyModel(json(mode));
        survey.data = data;
        const panelInner = survey.getAllQuestions().filter(q => q.name === "inner")[0];
        panelInner.value = "in";
        const top = (name: string) => survey.getAllQuestions().filter(q => q.name === name && !q.parentQuestion)[0].id;
        const cells = (<any>survey.getAllQuestions().filter(q => q.name === "md")[0]).visibleRows[0].cells;
        const panel = (<any>survey.getAllQuestions().filter(q => q.name === "pd")[0]).panels[0];
        const results = new SurveyResultsModel(survey);
        expect(flatten(results.resultData, "", [])).toStrictEqual([
          ["q1", top("q1")], ["r1", top("r1")], ["c1", top("c1")],
          ["rg", top("rg")], ["rg/0", null], ["rg/0", null],
          ["cb", top("cb")], ["cb/0", null], ["cb/1", null],
          // today in "none": m/r1 got the top-level r1
          ["m", top("m")], ["m/r1", null], ["m/r2", null],
          // today in "none": md/r1 got the top-level r1, its cells the top-level c1 and q1
          ["md", top("md")], ["md/r1", null], ["md/r1/c1", cells[0].question.id], ["md/r1/q1", cells[1].question.id],
          // today in "none": pd/0/q1 got the top-level q1, pd/0/pq none (it gains its own question)
          ["pd", top("pd")], ["pd/0", null], ["pd/0/q1", panel.getQuestionByName("q1").id], ["pd/0/pq", panel.getQuestionByName("pq").id],
          ["mt", top("mt")],
          ["inner", panelInner.id],
          ["rg-Comment", null], ["extra", null]
        ]);
        // The rows' fields and the JSON view are what they were: the question ids stay out of them.
        expect(flattenFields(results.resultData, [])).toStrictEqual(flattenFields(survey.getPlainData({ includeEmpty: false, includeValues: true }), []));
        expect(results.resultText).toBe(JSON.stringify(survey.data, null, 4));
      });
    });
    test("building the table leaves the data alone: a matrix and a dynamic panel on a page never shown", () => {
      const survey = new SurveyModel({ pages: [
        { name: "p1", elements: [{ type: "text", name: "q1" }] },
        { name: "p2", visibleIf: "false", elements: [
          { type: "matrixdynamic", name: "md", rowCount: 2, columns: [{ name: "c1", cellType: "text", defaultValue: "d" }] },
          { type: "paneldynamic", name: "pd", panelCount: 1, templateElements: [{ type: "text", name: "t", defaultValue: "d" }] }] }
      ] });
      survey.getQuestionByName("q1").value = "v";
      survey.doComplete();
      const data = JSON.stringify(survey.data);
      let changes = 0;
      survey.onValueChanged.add(() => changes++);
      const results = new SurveyResultsModel(survey);
      expect(JSON.stringify(survey.data)).toBe(data);
      expect(changes).toBe(0);
      expect(results.resultData.map(row => row.name)).toStrictEqual(["q1"]);
    });
    ["none", "auto"].forEach(mode => {
      test("an extra data key keeps the question in a choice's panel that stores it (" + mode + ")", () => {
        const survey = new SurveyModel({ dataNesting: mode, elements: [
          { type: "radiogroup", name: "rg", choices: [{ value: "a", elements: [{ type: "text", name: "ca" }] }, "b"] },
          { type: "text", name: "q1", valueName: "v1" }
        ] });
        survey.data = { rg: "a", ca: "inner", v1: "x", q1: "extra" };
        const ca = survey.getQuestionByName("ca");
        expect(ca).toBeTruthy();
        const rows = new SurveyResultsModel(survey).resultData;
        expect(rows.map(row => [row.name, row.question ? row.question.name : null])).toStrictEqual([
          ["rg", "rg"], ["q1", "q1"],
          // ca's value is an extra key: ca stores it
          ["ca", "ca"],
          // today the extra key q1 got the question q1, which stores its value under v1
          ["q1", null]
        ]);
        expect(rows[2].question).toBe(ca);
      });
    });
    test("a paged matrix: a record off its page has no question for its cells", () => {
      const survey = new SurveyModel({ elements: [
        { type: "text", name: "c1" },
        { type: "matrixdynamic", name: "md", pageSize: 1, columns: [{ name: "c1", cellType: "text" }] }
      ] });
      survey.data = { c1: "top", md: [{ c1: "a" }, { c1: "b" }, { c1: "c" }] };
      const matrix = <any>survey.getQuestionByName("md");
      const results = new SurveyResultsModel(survey);
      const records = results.resultData[1].items;
      expect(records.length).toBe(3);
      expect(records.map((record: any) => record.items[0].question)).toStrictEqual([matrix.visibleRows[0].cells[0].question, null, null]);
    });
    test("a matrix row whose answer's value is a question's id gets no question", () => {
      const survey = new SurveyModel({ elements: [{ type: "text", name: "r1" }, { type: "matrix", name: "m", rows: ["r1"] }] });
      const r1 = survey.getQuestionByName("r1");
      const matrix = <any>survey.getQuestionByName("m");
      matrix.columns = [r1.id];
      r1.value = "v";
      matrix.value = { r1: r1.id };
      const rows = new SurveyResultsModel(survey).resultData;
      expect(rows[1].items.map((item: any) => [item.name, item.question])).toStrictEqual([["r1", null]]);
    });
    test("an item built from plain data without ids finds its question by name, as before", () => {
      const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" }] });
      survey.getQuestionByName("q1").value = "v";
      expect(new SurveyResultsItemModel(survey, survey.getPlainData()[0], 0).question).toBe(survey.getQuestionByName("q1"));
    });
    test("a choice whose value is a question's id gets no question", () => {
      const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" }, { type: "checkbox", name: "cb" }] });
      const q1 = survey.getQuestionByName("q1");
      const cb = <any>survey.getQuestionByName("cb");
      cb.choices = [q1.id];
      q1.value = "v";
      cb.value = [q1.id];
      const rows = new SurveyResultsModel(survey).resultData;
      expect(rows[1].items.map((item: any) => [item.name, item.question])).toStrictEqual([[0, null]]);
    });
  });
  test("The JSON tab's linter checks paths of a nested variable definition", () => {
    const creator = new CreatorTester({ variablePresets: {
      definition: { dataNesting: "auto", elements: [
        { type: "panel", name: "user", valueName: "users", elements: [
          { type: "dropdown", name: "tier", choices: ["gold", "silver"] },
          { type: "text", name: "name" }] },
        { type: "dropdown", name: "role", choices: ["admin", "user"] }] },
      presets: []
    } });
    const editor = new TextareaJsonEditorModel(creator);
    editor.text = JSON.stringify({ elements: [
      { type: "text", name: "q1", visibleIf: "{users.tier} = 'gold' and {role} = 'admin'" },
      { type: "text", name: "q2", visibleIf: "{users.nope} = 1" }
    ] }, null, 2);
    editor.processErrors(editor.text);
    const unknown = editor.linter.findings.filter(f => f.ruleId === "reference/unknown");
    expect(unknown.map(f => f.finding.messageData.name)).toStrictEqual(["users.nope"]);
  });
});
