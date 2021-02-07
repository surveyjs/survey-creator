import {
  QuestionTextModel,
  PageModel,
  SurveyModel,
  JsonObjectProperty,
  Serializer,
} from "survey-knockout";
import { PropertiesHelpTexts } from "../../src/property-grid/properties-helptext";
import {
  defaultStrings,
  editorLocalization,
} from "../../src/editorLocalization";

test("property editor propertyHelpText", () => {
  var curStrings = editorLocalization.getLocale("");
  curStrings.pehelp.title = "Common Title";
  curStrings.pehelp.survey_title = "Survey Title";
  curStrings.pehelp.page_title = "Page Title";
  curStrings.pehelp.question_title = "Question Title";
  var questionText = new QuestionTextModel("q1");
  var questionTitleProp = Serializer.findProperty("question", "title");
  var survey = new SurveyModel();
  var surveyTitleProp = Serializer.findProperty("survey", "title");
  var page = new PageModel("p1");
  var pageTitleProp = Serializer.findProperty("page", "title");

  var helptexts = PropertiesHelpTexts.instance;
  expect(helptexts.getHelpText(questionText, questionTitleProp)).toEqual(
    "Question Title"
  );
  expect(helptexts.getHelpText(page, pageTitleProp)).toEqual("Page Title");
  expect(helptexts.getHelpText(survey, surveyTitleProp)).toEqual(
    "Survey Title"
  );

  delete curStrings.pehelp["page_title"];
  helptexts.reset();
  expect(helptexts.getHelpText(page, pageTitleProp)).toEqual("Common Title");

  var defaultValueExpressionProp = Serializer.findProperty(
    "question",
    "defaultValueExpression"
  );
  expect(defaultValueExpressionProp).toBeTruthy();
  expect(
    helptexts
      .getHelpText(questionText, defaultValueExpressionProp)
      .indexOf("You can use curly brackets") > -1
  ).toBeTruthy();
});
