import { StringEditorViewModelBase } from "../src/components/string-editor";
import { SurveyModel, LocalizableString } from "survey-core";
import { CreatorTester } from "./creator-tester";
test("Test css", (): any => {
  new CreatorTester();
  const survey: SurveyModel = new SurveyModel({
    pages: [
      {
        elements: [
          { name: "q", type: "text" }
        ]
      }
    ]
  });
  const locStrSurvey: LocalizableString = new LocalizableString(survey, false, "description");
  var stringEditorSurveyTitle = new StringEditorViewModelBase(locStrSurvey);
  expect(stringEditorSurveyTitle.className("")).toEqual("svc-string-editor");

  const locStrQuestion: LocalizableString = new LocalizableString(survey.getQuestionByName("q"), false, "description");
  var stringEditorQuestion = new StringEditorViewModelBase(locStrQuestion);

  expect(stringEditorQuestion.className("")).toEqual("svc-string-editor svc-string-editor--hidden");
  expect(stringEditorQuestion.className("desc")).toEqual("svc-string-editor");
});
test("onPropertyValueChanging callback", () => {
  var question = new QuestionTextModel("q1");
  var options = new EmptySurveyCreatorOptions();
  options.onValueChangingCallback = function (options) {
    options.newValue = options.newValue.trim();
  };
  var propertyGrid = new PropertyGridModelTester(question, options);
  var titleQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("title")
  );
  titleQuestion.value = " ss   ";
  expect(question.title).toEqual("ss");
});
