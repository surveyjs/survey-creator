import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  doGetCompletions,
  SurveyPropertyConditionEditor
} from "../../src/propertyEditors/propertyConditionEditor";

export default QUnit.module("SurveyPropertyConditionEditor");

QUnit.test("Autocomplete without prefix test", function(assert) {
  var prevIdentifier = "";
  var currentQuestion = new Survey.QuestionDropdown("dropdown");
  var usableQuestions = [new Survey.QuestionExpression("expression")];
  var completions = null;
  var prefix = "";

  completions = doGetCompletions(prevIdentifier, prefix, {
    question: currentQuestion,
    questions: usableQuestions
  });

  assert.equal(completions.length, 22 + 1, "all completions");
  assert.equal(completions[0].value, "{expression}", "questions first");

  prefix = null;
  completions = doGetCompletions(prevIdentifier, prefix, {
    question: currentQuestion,
    questions: usableQuestions
  });

  assert.equal(completions.length, 22 + 1, "all completions");
  assert.equal(completions[0].value, "{expression}", "questions first");
});

QUnit.test("Autocomplete with prefix test", function(assert) {
  var prevIdentifier = "";
  var currentQuestion = new Survey.QuestionDropdown("dropdown");
  var usableQuestions = [
    new Survey.QuestionExpression("expression"),
    new Survey.QuestionDropdown("dropdown2")
  ];
  var completions = null;
  var prefix = "dr";

  completions = doGetCompletions(prevIdentifier, prefix, {
    question: currentQuestion,
    questions: usableQuestions
  });

  assert.equal(completions.length, 1, "filtered completions");
  assert.equal(completions[0].value, "{dropdown2}", "dropdown2");

  var prefix = "eq";

  completions = doGetCompletions(prevIdentifier, prefix, {
    question: currentQuestion,
    questions: usableQuestions
  });

  assert.equal(completions.length, 4, "filtered completions");
  assert.equal(completions[0].value, "equal", "equal");
});

QUnit.test("Autocomplete with matrix test", function(assert) {
  var prevIdentifier = "";
  var question = new Survey.QuestionMatrixDynamic("matrixdynamic");

  question.addColumn("c1");
  question.addColumn("c2");

  var currentQuestion: any = question.columns[0];
  var usableQuestions = [];
  var completions = null;
  var prefix = "{";

  completions = doGetCompletions(prevIdentifier, prefix, {
    question: currentQuestion,
    questions: usableQuestions
  });

  assert.equal(completions.length, 1, "row completions");
  assert.equal(completions[0].value, "{row.", "first row");

  prevIdentifier = "row";
  prefix = "";

  completions = doGetCompletions(prevIdentifier, prefix, {
    question: currentQuestion,
    questions: usableQuestions
  });

  assert.equal(completions.length, 1, "row completions");
  assert.equal(completions[0].value, "{row.c2}", "second row");
});

QUnit.test("Autocomplete with panel test", function(assert) {
  var prevIdentifier = "";
  var question = new Survey.QuestionPanelDynamic("paneldynamic");

  question.template.addNewQuestion("text", "q1");
  question.template.addNewQuestion("text", "q2");
  question.value = [{}];

  var currentQuestion: any = question.panels[0].elements[0];
  var usableQuestions = [];
  var completions = null;
  var prefix = "{";

  completions = doGetCompletions(prevIdentifier, prefix, {
    question: currentQuestion,
    questions: usableQuestions
  });

  assert.equal(completions.length, 1, "panel completions");
  assert.equal(completions[0].value, "{panel.", "first panel");

  prevIdentifier = "panel";
  prefix = "";

  completions = doGetCompletions(prevIdentifier, prefix, {
    question: currentQuestion,
    questions: usableQuestions
  });

  assert.equal(completions.length, 1, "panel completions");
  assert.equal(completions[0].value, "{panel.q2}", "second panel");
});

QUnit.test("SurveyPropertyConditionEditor.isValid", function(assert) {
  var question = new Survey.QuestionText("q1");
  question.visibleIf = "ddd";
  var property = Survey.JsonObject.metaData.findProperty(
    "questionbase",
    "visibleIf"
  );
  var editor = new SurveyPropertyConditionEditor(property);
  assert.equal(editor.koIsValid(), true, "The empty value is valid");
  editor.object = question;
  assert.equal(
    editor.koIsValid(),
    false,
    "The question.visibleIf was not valid"
  );
  editor.koTextValue("{q} = 1");
  assert.equal(editor.koIsValid(), true, "The condition is value now");
});

QUnit.test("SurveyPropertyConditionEditor.addCondition", function(assert) {
  var question = new Survey.QuestionText("q1");
  question.visibleIf = "{q} = 1";
  var property = Survey.JsonObject.metaData.findProperty(
    "questionbase",
    "visibleIf"
  );
  var editor = new SurveyPropertyConditionEditor(property);
  assert.equal(editor.koCanAddCondition(), false, "We can't add condition");
  editor.koAddConditionQuestion("q2");
  assert.equal(editor.koCanAddCondition(), false, "value is empty");
  editor.koAddConditionValue("2");
  assert.equal(editor.koCanAddCondition(), true, "Can add condition");
  editor.object = question;
  editor.addCondition();
  assert.equal(
    editor.koTextValue(),
    "{q} = 1 and {q2} = 2",
    "condition was added"
  );
  assert.equal(editor.koCanAddCondition(), false, "values were reset.");
  editor.koAddConditionQuestion("q1");
  editor.koAddConditionValue("abc");

  editor.koTextValue("fdfdfdf");
  editor.addCondition();
  assert.equal(editor.koTextValue(), "{q1} = 'abc'", "condition was replaced");

  editor.koAddConditionQuestion("q1");
  assert.equal(editor.koCanAddCondition(), false, "value is not set");
  editor.koAddConditionOperator("empty");
  assert.equal(editor.koCanAddCondition(), true, "empty doesn't require value");
});
