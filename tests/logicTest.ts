import * as Survey from "survey-knockout";
import { SurveyLogic, SurveyLogicItem } from "../src/logic";
export default QUnit.module("LogicTabTests");

QUnit.test("Get list of logic item", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  assert.equal(logic.items.length, 0, "There are no items");
});
