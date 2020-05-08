import * as Survey from "survey-knockout";
import {
  ExpressionToDisplayText,
  ExpressionRemoveVariable,
} from "../src/expressionToDisplayText";

export default QUnit.module("ExpressionToDisplayText Tests");

QUnit.test("Replace question titles test", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "My Question 1" },
      { type: "text", name: "q2" },
    ],
  });
  var expressionToText = new ExpressionToDisplayText(survey);
  assert.equal(
    expressionToText.toDisplayText("{q1} = 1"),
    "({My Question 1} == 1)",
    "Replace the question name with title"
  );
  assert.equal(
    expressionToText.toDisplayText("{q2} = 2"),
    "({q2} == 2)",
    "There is no title"
  );
});

QUnit.test("Delete question from expression", function(assert) {
  var removeVariable = new ExpressionRemoveVariable();
  assert.equal(
    removeVariable.remove("{q1} = 1", "q1"),
    "",
    "Expression becomes empty"
  );
  assert.equal(
    removeVariable.remove("{q2} = 2 and {q1} < 3 or {q2} = 1", "q1"),
    "(({q2} == 2) or ({q2} == 1))",
    "Remove {q1} from expression"
  );
  assert.equal(
    removeVariable.remove("{q2} = 2 and {q1} < 3 or {q2} = 1", "q5"),
    "{q2} = 2 and {q1} < 3 or {q2} = 1",
    "Do nothing"
  );
});
