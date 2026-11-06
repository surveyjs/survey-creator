import { PanelModel, Question, QuestionMatrixDynamicModel, SurveyModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";

// allowFiltering (survey-library #11890): whether the Filter Control offers a question, or a column
// of a dynamic matrix, as a filter field.
describe("Property grid: allowFiltering", () => {
  test("allowFiltering is on the Data tab of a question", () => {
    const survey = new SurveyModel({ elements: [{ type: "text", name: "q1" }] });
    const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
    const editor = <Question>propertyGrid.survey.getQuestionByName("allowFiltering");
    expect(!!editor, "#1").toBe(true);
    expect((<PanelModel>editor.parent).name, "#2").toBe("data");
    expect(editor.isVisible, "#3").toBe(true);
  });
  test("no allowFiltering for a question that cannot be filtered", () => {
    const survey = new SurveyModel({ elements: [{ type: "file", name: "q1" }] });
    const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
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
