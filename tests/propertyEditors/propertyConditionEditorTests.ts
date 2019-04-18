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
    "question",
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
    "question",
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
  assert.notOk(editor.koAddConditionQuestion(), "question should empty");
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

QUnit.test(
  "Apostrophes in answers break VisibleIf - https://github.com/surveyjs/editor/issues/476",
  function(assert) {
    var question = new Survey.QuestionText("q1");
    var property = Survey.JsonObject.metaData.findProperty(
      "question",
      "visibleIf"
    );
    var editor = new SurveyPropertyConditionEditor(property);
    editor.koAddConditionQuestion("q2");
    editor.koAddConditionValue("d'2");
    editor.object = question;
    editor.addCondition();
    assert.equal(
      editor.koTextValue(),
      "{q2} = 'd\\'2'",
      "Apostrophe is escaped"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor add question for dynamic panel",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        {
          name: "dp",
          type: "paneldynamic",
          templateElements: [
            {
              name: "q1",
              type: "text",
              visibleIf: "{panel.q2} = 1"
            },
            {
              name: "q2",
              type: "text"
            }
          ]
        }
      ]
    });
    survey.setDesignMode(true);
    var panel = <Survey.QuestionPanelDynamic>survey.getQuestionByName("dp");
    var question = panel.template.getQuestionByName("q1");
    var property = Survey.JsonObject.metaData.findProperty(
      "question",
      "visibleIf"
    );
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.koAddConditionQuestion("panel.q2");
    editor.koAddConditionValue("2");
    editor.addCondition();
    assert.equal(
      editor.koTextValue(),
      "{panel.q2} = 1 and {panel.q2} = 2",
      "condition was added correctly"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, use question.valueName, bug: #353",
  function(assert) {
    var property = Survey.JsonObject.metaData.findProperty(
      "question",
      "visibleIf"
    );
    var survey = new Survey.Survey();
    var page = survey.addNewPage("p");
    var question = page.addNewQuestion("text", "q1");
    var question2 = <Survey.Question>page.addNewQuestion("text", "q2");
    question2.valueName = "val2";
    var matrix = <Survey.QuestionMatrixDropdown>(
      page.addNewQuestion("matrixdropdown", "matrix")
    );
    matrix.choices = [1, 2];
    matrix.rows = ["row1"];
    matrix.addColumn("column1");
    matrix.valueName = "val3";

    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koAddConditionQuestion("q2");
    editor.koAddConditionValue("abc");
    editor.addCondition();
    assert.equal(
      editor.koTextValue(),
      "{val2} = 'abc'",
      "valueName property is used"
    );

    editor.koTextValue("");
    editor.koAddConditionQuestion("matrix.row1.column1");
    editor.koAddConditionValue("1");
    editor.addCondition();
    assert.equal(
      editor.koTextValue(),
      "{val3.row1.column1} = 1",
      "valueName property is used in matrix"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, use question.valueName, bug: #367",
  function(assert) {
    var property = Survey.JsonObject.metaData.findProperty(
      "question",
      "visibleIf"
    );
    var survey = new Survey.Survey();
    var page = survey.addNewPage("p");
    var question = <Survey.QuestionDropdown>page.addNewQuestion("text", "q1");
    var question2 = <Survey.QuestionDropdown>(
      page.addNewQuestion("dropdown", "q2.")
    );
    question2.choices = [1, 2, 3, 4];
    question2.valueName = "val2";

    var matrix = <Survey.QuestionMatrixDropdown>(
      page.addNewQuestion("matrixdropdown", "matrix")
    );
    matrix.choices = [1, 2];
    matrix.rows = ["row1"];
    matrix.addColumn("column1");

    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();

    editor.koAddConditionQuestion("q2.");
    assert.equal(editor.koHasValueSurvey(), true, "There is value survey");
    var valueSurvey = editor.koValueSurvey();
    var valueQuestion = valueSurvey.getQuestionByName("question");
    assert.ok(valueQuestion, "Value survey created correctly");
    assert.equal(
      valueQuestion.choices.length,
      4,
      "value question created correctly"
    );

    editor.koAddConditionQuestion("matrix.row1.column1");
    assert.equal(
      editor.koHasValueSurvey(),
      true,
      "Thre is value survey for matrix column"
    );
    var valueSurvey = editor.koValueSurvey();
    var valueQuestion = valueSurvey.getQuestionByName("question");
    assert.ok(
      valueQuestion,
      "Value survey for matrix column created correctly"
    );
    assert.equal(
      valueQuestion.choices.length,
      2,
      "value question  for matrix column created correctly"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, add condition from wizard on apply, without pressing 'Add' button",
  function(assert) {
    var property = Survey.JsonObject.metaData.findProperty(
      "question",
      "visibleIf"
    );
    var survey = new Survey.Survey();
    var page = survey.addNewPage("p");
    var question = page.addNewQuestion("text", "q1");
    var question2 = <Survey.Question>page.addNewQuestion("text", "q2");
    question2.valueName = "val2";
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koAddConditionQuestion("q2");
    editor.koAddConditionValue("abc");
    editor.apply();
    assert.equal(
      editor.koTextValue(),
      "{val2} = 'abc'",
      "valueName property is used"
    );
  }
);

QUnit.test("SurveyPropertyConditionEditor.allConditionQuestions", function(
  assert
) {
  var property = Survey.JsonObject.metaData.findProperty(
    "question",
    "visibleIf"
  );
  var survey = new Survey.Survey();
  var page = survey.addNewPage("p");
  var question = page.addNewQuestion("text", "q1");
  page.addNewQuestion("text", "q2");
  page.addNewQuestion("text", "q3");
  var editor = new SurveyPropertyConditionEditor(property);
  editor.object = question;
  var res = [];
  for (var i = 0; i < editor.allConditionQuestions.length; i++) {
    var item = editor.allConditionQuestions[i];
    res.push({ name: item.name, text: item.text });
  }
  assert.deepEqual(
    res,
    [{ name: "q2", text: "q2" }, { name: "q3", text: "q3" }],
    "returns questions correctly"
  );
});

QUnit.test(
  "SurveyPropertyConditionEditor.allCondtionQuestions for matrix column",
  function(assert) {
    var property = Survey.JsonObject.metaData.findProperty(
      "matrixdropdowncolumn",
      "visibleIf"
    );
    var survey = new Survey.Survey();
    var page = survey.addNewPage("p");
    var question = <Survey.QuestionMatrixDropdown>(
      page.addNewQuestion("matrixdropdown", "q1")
    );
    question.columns.splice(0, question.columns.length);
    question.addColumn("col1");
    var column = question.addColumn("col2");
    question.addColumn("col3");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = column;
    assert.equal(
      editor.allConditionQuestions.filter(e => e.name === "row.col1").length >
        0,
      true,
      "row.col1 is here"
    );
    assert.equal(
      editor.allConditionQuestions.filter(e => e.name === "row.col2").length >
        0,
      false,
      "row.col2 is not here"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor.allCondtionQuestions for panel dynamic",
  function(assert) {
    var property = Survey.JsonObject.metaData.findProperty(
      "question",
      "visibleIf"
    );
    var survey = new Survey.Survey();
    var page = survey.addNewPage("p");
    var question = <Survey.QuestionPanelDynamic>(
      page.addNewQuestion("paneldynamic", "q1")
    );
    question.template.addNewQuestion("text", "q1");
    question.template.addNewQuestion("text", "q2");
    question.template.addNewQuestion("text", "q3");
    question.panelCount = 1;
    var panelQuestion = question.template.questions[1];
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = panelQuestion;
    assert.equal(
      editor.allConditionQuestions.filter(e => e.name === "panel.q1").length >
        0,
      true,
      "panel.q1 is here"
    );
    assert.equal(
      editor.allConditionQuestions.filter(e => e.name === "panel.q2").length >
        0,
      false,
      "panel.q2 is not here"
    );
  }
);
