import * as Survey from "survey-knockout";
import {
  ExpressionToDisplayText,
  ExpressionRemoveVariable,
} from "../src/expressionToDisplayText";
import { editorLocalization } from "../src/editorLocalization";

export default QUnit.module("ExpressionToDisplayText Tests");

QUnit.test("Replace question titles test", function (assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "My Question 1" },
      { type: "text", name: "q2" },
    ],
  });
  var expressionToText = new ExpressionToDisplayText(survey, {
    showTitlesInExpressions: true,
  });
  assert.equal(
    expressionToText.toDisplayText("{q1} = 1"),
    "{My Question 1} == 1",
    "Replace the question name with title"
  );
  assert.equal(
    expressionToText.toDisplayText("{q2} = 2"),
    "{q2} == 2",
    "There is no title"
  );
});

QUnit.test("Replace question titles using valueName test", function (assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", valueName: "val1", title: "My Question 1" },
      { type: "text", name: "q2", valueName: "val2" },
    ],
  });
  var expressionToText = new ExpressionToDisplayText(survey, {
    showTitlesInExpressions: true,
  });
  assert.equal(
    expressionToText.toDisplayText("{val1} = 1"),
    "{My Question 1} == 1",
    "Replace the value name with title"
  );
  assert.equal(
    expressionToText.toDisplayText("{val2} = 2"),
    "{q2} == 2",
    "There is no title"
  );
});

QUnit.test("Delete question from expression", function (assert) {
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

QUnit.test("Display text for operator", function (assert) {
  var survey = new Survey.SurveyModel({
    elements: [{ type: "text", name: "q1" }],
  });
  var expressionToText = new ExpressionToDisplayText(survey);
  assert.equal(
    expressionToText.toDisplayText("{q1} notempty"),
    "{q1} is not empty",
    "Use display text for operators"
  );
});
QUnit.test("Display text in 'de' locale", function (assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
    ],
  });
  var deutschStrings = {
    op: {
      notempty: "ist nicht leer",
      and: "und",
    },
  };
  editorLocalization.locales["de"] = deutschStrings;
  editorLocalization.currentLocale = "de";
  var expressionToText = new ExpressionToDisplayText(survey);
  assert.equal(
    expressionToText.toDisplayText("{q1} notempty and ({q2} = 1)"),
    "{q1} ist nicht leer und ({q2} == 1)",
    "Translate operator to 'de' locale"
  );
  editorLocalization.currentLocale = "en";
});
