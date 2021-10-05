import { StringEditorViewModelBase } from "../src/components/string-editor";
import { SurveyModel, LocalizableString } from "survey-core";
import { CreatorTester } from "./creator-tester";
test("Test css", (): any => {
  let creator = new CreatorTester();
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
  var stringEditorSurveyTitle = new StringEditorViewModelBase(locStrSurvey, creator);
  expect(stringEditorSurveyTitle.className("")).toEqual("svc-string-editor");

  const locStrQuestion: LocalizableString = new LocalizableString(survey.getQuestionByName("q"), false, "description");
  var stringEditorQuestion = new StringEditorViewModelBase(locStrQuestion, creator);

  expect(stringEditorQuestion.className("")).toEqual("svc-string-editor svc-string-editor--hidden");
  expect(stringEditorQuestion.className("desc")).toEqual("svc-string-editor");
});
