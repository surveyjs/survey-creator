import { SurveyModel, QuestionTextModel } from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { EmptySurveyCreatorOptions } from "../../src/creator-settings";
import { QuestionLinkValueModel } from "../../src/components/link-value";

const linkDummy = new QuestionLinkValueModel("q");

test("Several pages for one category", () => {
  const survey = new SurveyModel({});
  const options = new EmptySurveyCreatorOptions();
  const propertyGrid = new PropertyGridModelTester(undefined as any, options);
  propertyGrid.showOneCategoryInPropertyGrid = true;
  propertyGrid.obj = survey;
  const propSurvey = propertyGrid.survey;
  expect(propSurvey.pages.length > 1).toBeTruthy();
  expect(propSurvey.currentPage.name).toBe("general");
});
test("selectProperty(propName, false) ", () => {
  const survey = new SurveyModel({ elements: [{ type: "dropdown", name: "q1", choices: [1, 2] }] });
  const dropdown = survey.getQuestionByName("q1");
  const options = new EmptySurveyCreatorOptions();
  const propertyGrid = new PropertyGridModelTester(survey, options);
  propertyGrid.showOneCategoryInPropertyGrid = true;
  propertyGrid.obj = dropdown;
  const propSurvey = propertyGrid.survey;
  propertyGrid.selectProperty("choices", false);
  expect(propSurvey.currentPage.name).toBe("choices");
});
test("Go to visibleIf link", () => {
  const question = new QuestionTextModel("q");
  question.visibleIf = "{q2} = 'abc'";
  const options = new EmptySurveyCreatorOptions();
  const propertyGrid = new PropertyGridModelTester(undefined as any, options);
  propertyGrid.showOneCategoryInPropertyGrid = true;
  propertyGrid.obj = question;
  const visibleIfGoQuestion = <QuestionLinkValueModel>propertyGrid.survey.getQuestionByName("visible_overridingProperty");
  expect(visibleIfGoQuestion.isVisible).toBe(true);
  visibleIfGoQuestion.doLinkClick();
  expect(propertyGrid.survey.currentPage.name).toBe("logic");
});
