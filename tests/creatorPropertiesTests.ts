import { creatorProperties } from "../src/questionEditors/properties";
import { SurveyQuestionProperties } from "../src/questionEditors/questionEditor";
import * as Survey from "survey-knockout";

export default QUnit.module("creatorPropertiesTests");

QUnit.test("Hide/show property", function (assert) {
  //TODO require some functionality from Survey Library
  //creatorProperties.hideProperty("hasOther");
  //var model = new SurveyQuestionProperties(new Survey.QuestionDropdown("q1"));
  //assert.notOk(model.getProperty("hasOther"), "The hasOther is invisible");
  creatorProperties.showProperty("hasOther");
  var model = new SurveyQuestionProperties(new Survey.QuestionDropdown("q1"));
  assert.ok(model.getProperty("hasOther"), "The hasOther is visible now");
});
