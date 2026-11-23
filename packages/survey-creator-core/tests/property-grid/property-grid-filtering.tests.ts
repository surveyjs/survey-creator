import { PanelModel, Question, QuestionMatrixDynamicModel, QuestionPanelDynamicModel, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";

// A Filter Control reaches a question as a field only in the template of a Dynamic Panel (the library's
// isFilterFieldInReach), so only there the property grid shows allowFiltering.
const templateQuestion = (json: any): Question => {
  const survey = new SurveyModel({ elements: [{ type: "paneldynamic", name: "p", templateElements: [json] }] });
  return <Question>(<QuestionPanelDynamicModel>survey.getQuestionByName("p")).template.getQuestionByName(json.name);
};

// allowFiltering (survey-library #11890): whether the Filter Control offers a question, or a column
// of a dynamic matrix, as a filter field.
describe("Property grid: allowFiltering", () => {
  test("allowFiltering is on the Data tab of a question", () => {
    const propertyGrid = new PropertyGridModelTester(templateQuestion({ type: "text", name: "q1" }));
    const editor = <Question>propertyGrid.survey.getQuestionByName("allowFiltering");
    expect(!!editor, "#1").toBe(true);
    expect((<PanelModel>editor.parent).name, "#2").toBe("data");
    expect(editor.isVisible, "#3").toBe(true);
    const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" }] });
    const topLevelGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
    expect(topLevelGrid.survey.getQuestionByName("allowFiltering").isVisible, "#4: no Filter Control reaches a question outside a Dynamic Panel").toBe(false);
  });
  test("no allowFiltering for a question that cannot be filtered", () => {
    const propertyGrid = new PropertyGridModelTester(templateQuestion({ type: "file", name: "q1" }));
    const editor = <Question>propertyGrid.survey.getQuestionByName("allowFiltering");
    expect(!!editor && editor.isVisible).toBe(false);
  });
  test("allowFiltering of a column follows allowSort on the General tab", () => {
    const survey = new SurveyModel({ elements: [{ type: "matrixdynamic", name: "m", columns: [{ name: "col1", cellType: "text" }] }] });
    const column = (<QuestionMatrixDynamicModel>survey.getQuestionByName("m")).columns[0];
    const propertyGrid = new PropertyGridModelTester(column);
    const editor = <Question>propertyGrid.survey.getQuestionByName("allowFiltering");
    const panel = <PanelModel>editor.parent;
    expect(panel.name, "#1").toBe("general");
    const names = panel.elements.map(el => el.name);
    expect(names.indexOf("allowFiltering"), "#2").toBe(names.indexOf("allowSort") + 1);
  });
});
