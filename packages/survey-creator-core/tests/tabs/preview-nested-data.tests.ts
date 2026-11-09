import { SurveyModel } from "survey-core";
import { CreatorTester } from "../creator-tester";
import { TabTestPlugin } from "../../src/components/tabs/test-plugin";
import { SurveyResultsModel } from "../../src/components/results";
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
function answerAndComplete(survey: SurveyModel): void {
  survey.getQuestionByName("street").value = "Main St";
  survey.getQuestionByName("city").value = "Oslo";
  survey.getQuestionByName("q1").value = "yes";
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
    creator.JSON = { elements: [
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
    answerAndComplete(survey);
    const results = new SurveyResultsModel(survey);
    expect(results.resultText).toBe(JSON.stringify({ page1: { address: { street: "Main St", city: "Oslo" }, q1: "yes" } }, null, 4));
    expect(getRows(results)).toStrictEqual(expectedRows);
  });
  test("Moving a question into and out of a nesting panel in the designer changes where Preview stores it", () => {
    const creator = new CreatorTester();
    creator.JSON = { elements: [
      { ...addressPanel, valueName: "address" },
      { type: "text", name: "q1" }
    ] };
    const q1 = creator.survey.getQuestionByName("q1");
    creator.survey.getPanelByName("address").addElement(q1);
    let survey = getPreviewSurvey(creator);
    survey.getQuestionByName("q1").value = "moved";
    expect(survey.data).toStrictEqual({ address: { q1: "moved" } });
    creator.activeTab = "designer";
    creator.survey.pages[0].addElement(creator.survey.getQuestionByName("q1"));
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
    expect(creator.survey.getPanelByName("address").valueName).toBe("addr");
    const saved = creator.JSON;
    expect(saved.dataNesting).toBe("panel");
    expect(saved.pages[0].valueName).toBe("p");
    expect(saved.pages[0].elements[0].valueName).toBe("addr");
  });
  test("The JSON tab's linter checks paths of a nested variable definition", () => {
    const creator = new CreatorTester({ variablePresets: {
      definition: { elements: [
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
