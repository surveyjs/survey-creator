import { StringEditorViewModelBase } from "../src/components/string-editor";
import { SurveyModel, LocalizableString, Serializer } from "survey-core";
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
test("Test string editor content editable", (): any => {
  let creator = new CreatorTester();
  const survey: SurveyModel = new SurveyModel({
    pages: [
      {
        elements: [
          { name: "q1", type: "text" },
          { name: "q2", type: "comment" },
          { name: "q3", type: "text" }
        ]
      }
    ]
  });

  Serializer.getProperty(
    "comment",
    "description"
  ).readOnly = true;

  creator.onGetPropertyReadOnly.add(function(editor, options) {
    var obj = options.obj;
    if (!obj || !obj.page) return;

    //you may check obj.getType();
    if (obj.name === "q3") {
      options.readOnly = true;
    }
  });

  var stringEditorQuestion1Description = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q1"), false, "description"), creator);
  expect(stringEditorQuestion1Description.contentEditable).toEqual(true);
  var stringEditorQuestion2Description = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q2"), false, "description"), creator);
  expect(stringEditorQuestion2Description.contentEditable).toEqual(false);
  var stringEditorQuestion3Description = new StringEditorViewModelBase(new LocalizableString(survey.getQuestionByName("q3"), false, "description"), creator);
  expect(stringEditorQuestion3Description.contentEditable).toEqual(false);

});