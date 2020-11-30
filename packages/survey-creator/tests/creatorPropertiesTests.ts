import { creatorProperties } from "../src/questionEditors/properties";
import { SurveyQuestionProperties } from "../src/questionEditors/questionEditor";
import { SurveyQuestionEditorDefinition } from "../src/questionEditors/questionEditorDefinition";
import * as Survey from "survey-knockout";

export default QUnit.module("creatorPropertiesTests");

function createCopy(obj: any) {
  let res, value, key;
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  res = Array.isArray(obj) ? [] : {};
  for (key in obj) {
    value = obj[key];
    res[key] = createCopy(value);
  }
  return res;
}
var copyDefinition = null;
function storePropertyGridDefinition() {
  copyDefinition = createCopy(SurveyQuestionEditorDefinition.definition);
}
function restorePropertyGridDefinition() {
  if (!copyDefinition) return;
  SurveyQuestionEditorDefinition.definition = copyDefinition;
  copyDefinition = null;
}

QUnit.test("Hide/show property", function (assert) {
  //TODO require some functionality from Survey Library
  //creatorProperties.hideProperty("hasOther");
  //var model = new SurveyQuestionProperties(new Survey.QuestionDropdown("q1"));
  //assert.notOk(model.getProperty("hasOther"), "The hasOther is invisible");
  creatorProperties.showProperty("hasOther");
  var model = new SurveyQuestionProperties(new Survey.QuestionDropdown("q1"));
  assert.ok(model.getProperty("hasOther"), "The hasOther is visible now");
});
QUnit.test("Hide category", function (assert) {
  storePropertyGridDefinition();
  var model = new SurveyQuestionProperties(new Survey.QuestionDropdown("q1"));
  assert.ok(model.getTabByName("data"), "data category is here");
  creatorProperties.hideCategory("data");
  model = new SurveyQuestionProperties(new Survey.QuestionDropdown("q1"));
  assert.notOk(model.getTabByName("data"), "data category is hidden");
  restorePropertyGridDefinition();
  model = new SurveyQuestionProperties(new Survey.QuestionDropdown("q1"));
  assert.ok(model.getTabByName("data"), "data category is here again");
});
