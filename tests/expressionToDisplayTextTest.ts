import * as Survey from "survey-knockout";
import { ExpressionToDisplayText } from "../src/expressionToDisplayText";

export default QUnit.module("ExpressionToDisplayText Tests");

QUnit.test("Replace question titles test", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "My Question 1" },
      { type: "text", name: "q2" }
    ]
  });
  var expressionToText = new ExpressionToDisplayText(survey);
  assert.equal(
    expressionToText.toDisplayText("{q1} = 1"),
    "{My Question 1} = 1",
    "Replace the question name with title"
  );
  assert.equal(
    expressionToText.toDisplayText("{q2} = 2"),
    "{q2} = 2",
    "There is no title"
  );
});
