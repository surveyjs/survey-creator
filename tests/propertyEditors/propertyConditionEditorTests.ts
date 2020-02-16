import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  doGetCompletions,
  SurveyPropertyConditionEditor
} from "../../src/propertyEditors/propertyConditionEditor";
import { SurveyPropertyEditorFactory } from "../../src/propertyEditors/propertyEditorFactory";
import { SurveyPropertyDropdownColumnsEditor } from "../../src/propertyEditors/propertyMatrixDropdownColumnsEditor";
import { SurveyElementEditorContent } from "../../src/questionEditors/questionEditor";

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

  //TODO uncomment after releasing v1.0.88
  //assert.equal(completions.length, 22 + 1, "all completions");
  assert.equal(completions[0].value, "{expression}", "questions first");

  prefix = null;
  completions = doGetCompletions(prevIdentifier, prefix, {
    question: currentQuestion,
    questions: usableQuestions
  });

  //TODO uncomment after releasing v1.0.88
  //assert.equal(completions.length, 22 + 1, "all completions");
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
  var property = Survey.Serializer.findProperty("question", "visibleIf");
  var editor = new SurveyPropertyConditionEditor(property);
  assert.equal(
    editor.koIsTextConditionValid(),
    true,
    "The empty value is valid"
  );
  editor.object = question;
  // TODO: reanimate condition error checks
  // assert.equal(
  //   editor.koIsValid(),
  //   false,
  //   "The question.visibleIf was not valid"
  // );
  editor.koTextValue("{q} = 1");
  assert.equal(
    editor.koIsTextConditionValid(),
    true,
    "The condition is value now"
  );
});

QUnit.test("SurveyPropertyConditionEditor.addCondition", function(assert) {
  var survey = new Survey.SurveyModel({
    questions: [
      { type: "text", name: "q1" },
      { type: "text", name: "q" },
      { type: "text", name: "q2" }
    ]
  });
  var question = survey.getQuestionByName("q1");
  question.visibleIf = "{q} = 1";
  var property = Survey.Serializer.findProperty("question", "visibleIf");
  var editor = new SurveyPropertyConditionEditor(property);
  editor.object = question;
  editor.beforeShow();
  assert.equal(editor.koIsConditionValid(), false, "We can't add condition");
  editor.koConditionQuestion("q2");
  assert.equal(editor.koIsConditionValid(), false, "value is empty");
  editor.conditionValue = "2";
  assert.equal(editor.koIsConditionValid(), true, "Can add condition");
  editor.object = question;
  editor.addCondition();
  assert.equal(
    editor.koTextValue(),
    "{q} = 1 and {q2} = 2",
    "condition was added"
  );
  assert.notOk(editor.koConditionQuestion(), "question should empty");
  assert.equal(editor.koIsConditionValid(), false, "values were reset.");
  editor.koConditionQuestion("q1");
  editor.conditionValue = "abc";

  editor.koTextValue(""); // TODO: reanimate condition error checks
  editor.addCondition();
  assert.equal(editor.koTextValue(), "{q1} = 'abc'", "condition was replaced");

  editor.koConditionQuestion("q1");
  assert.equal(editor.koIsConditionValid(), false, "value is not set");
  editor.koConditionOperator("empty");
  assert.equal(
    editor.koIsConditionValid(),
    true,
    "empty doesn't require value"
  );
});

QUnit.test(
  "SurveyPropertyConditionEditor.addCondition quotes - https://surveyjs.answerdesk.io/ticket/details/T2679",
  function(assert) {
    var survey = new Survey.SurveyModel({
      questions: [
        { type: "text", name: "q1" },
        { type: "dropdown", name: "q2" }
      ]
    });
    var question = survey.getQuestionByName("q1");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koConditionQuestion("q2");
    assert.equal(editor.koHasValueSurvey(), true, "Value survey is created");
    editor.conditionValue = JSON.stringify(["item1's"]);
    editor.replaceCondition();
    assert.equal(
      editor.koTextValue(),
      '{q2} = ["item1\\\'s"]',
      "Single quote escaped in condition"
    );
  }
);

QUnit.test(
  "Apostrophes in answers break VisibleIf - https://github.com/surveyjs/editor/issues/476",
  function(assert) {
    var survey = new Survey.SurveyModel({
      questions: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" }
      ]
    });
    var question = survey.getQuestionByName("q1");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koConditionQuestion("q2");
    editor.conditionValue = "d'2";
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
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koConditionQuestion("panel.q2");
    editor.conditionValue = "2";
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
    var property = Survey.Serializer.findProperty("question", "visibleIf");
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
    editor.koConditionQuestion("q2");
    editor.conditionValue = "abc";
    editor.replaceCondition();
    assert.equal(
      editor.koTextValue(),
      "{val2} = 'abc'",
      "valueName property is used"
    );

    editor.koTextValue("");
    editor.koConditionQuestion("matrix.row1.column1");
    editor.conditionValue = "1";
    editor.replaceCondition();
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
    var property = Survey.Serializer.findProperty("question", "visibleIf");
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

    editor.koConditionQuestion("q2.");
    assert.equal(editor.koHasValueSurvey(), true, "There is value survey");
    var valueSurvey = editor.koValueSurvey();
    var valueQuestion = valueSurvey.getQuestionByName("question");
    assert.ok(valueQuestion, "Value survey created correctly");
    assert.equal(
      valueQuestion.choices.length,
      4,
      "value question created correctly"
    );

    editor.koConditionQuestion("matrix.row1.column1");
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
  "SurveyPropertyConditionEditor, use dropdown question instead of readiogroup for editing values",
  function(assert) {
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var survey = new Survey.Survey();
    var page = survey.addNewPage("p");
    var question = <Survey.QuestionDropdown>page.addNewQuestion("text", "q1");
    var question2 = <Survey.QuestionRadiogroup>(
      page.addNewQuestion("radiogroup", "q2")
    );
    question2.choices = [1, 2, 3, 4];
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();

    editor.koConditionQuestion("q2");
    assert.equal(editor.koHasValueSurvey(), true, "There is value survey");
    var valueSurvey = editor.koValueSurvey();
    assert.equal(
      valueSurvey.getAllQuestions()[0].getType(),
      "dropdown",
      "Use dropdown instead of radiogroup"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, add condition from wizard on apply, without pressing 'Add' button",
  function(assert) {
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var survey = new Survey.Survey();
    var page = survey.addNewPage("p");
    var question = page.addNewQuestion("text", "q1");
    var question2 = <Survey.Question>page.addNewQuestion("text", "q2");
    question2.valueName = "val2";
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koConditionQuestion("q2");
    editor.conditionValue = "abc";
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
  var property = Survey.Serializer.findProperty("question", "visibleIf");
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
    [
      { name: "q2", text: "q2" },
      { name: "q3", text: "q3" }
    ],
    "returns questions correctly"
  );
});

QUnit.test(
  "SurveyPropertyConditionEditor.allCondtionQuestions for matrix column",
  function(assert) {
    var property = Survey.Serializer.findProperty(
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
    var property = Survey.Serializer.findProperty("question", "visibleIf");
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

QUnit.test(
  "SurveyPropertyConditionEditor show invisible choices and make all choices enabled, Bug: https://surveyjs.answerdesk.io/ticket/details/T1921",
  function(assert) {
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var survey = new Survey.Survey();
    var page = survey.addNewPage("p");
    var question = page.addNewQuestion("text", "q1");
    var radioQuestion = page.addNewQuestion("dropdown", "q2");
    radioQuestion.choices = [
      { value: 1, visibleIf: "{a} = 1" },
      { value: 1, enabledIf: "{b} = 1" }
    ];
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    assert.equal(
      editor.allConditionQuestions.length,
      1,
      "There are one question"
    );
    assert.equal(
      editor.allConditionQuestions[0].name,
      "q2",
      "It is our question"
    );
    editor.koConditionQuestion("q2");
    var vSurvey = editor.koValueSurvey();
    var vQuestion = <Survey.QuestionRadiogroup>vSurvey.getAllQuestions()[0];
    assert.equal(vQuestion.visibleChoices.length, 2, "Show all choices");
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, error in value input, Bug# T2598 (customer marked it private)",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        { name: "q1", type: "checkbox", choices: [1, 2, 3] },
        { name: "q2", type: "checkbox", choices: [1, 2, 3] },
        { name: "q3", type: "checkbox", choices: ["a", "b"] },
        { name: "q4", type: "text" }
      ]
    });
    var question = survey.getQuestionByName("q2");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koConditionQuestion("q1");
    assert.equal(editor.koHasValueSurvey(), true, "Value Survey is ready");
    editor.koValueSurvey().setValue("question", 1);
    assert.equal(editor.conditionValue, 1, "Set condition value from survey");
    editor.koConditionQuestion("q3");
    assert.notOk(
      editor.conditionValue,
      "Empty condition value on changing question name"
    );
    editor.koConditionQuestion("q4");
    assert.equal(
      editor.koHasValueSurvey(),
      true,
      "Value Survey exists for all question types"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, could not edit value for row.column1 on editing column, Bug# T3376 (customer marked it private)",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        {
          name: "question1",
          type: "matrixdynamic",
          columns: [{ name: "Column1" }, { name: "Column2" }],
          choices: [1, 2, 3, 4, 5]
        }
      ]
    });
    var question = <Survey.QuestionMatrixDynamic>(
      survey.getQuestionByName("question1")
    );
    var property = Survey.Serializer.findProperty(
      "matrixdropdownbase",
      "columns"
    );
    var columnsEditor = new SurveyPropertyDropdownColumnsEditor(property);
    columnsEditor.object = question;
    columnsEditor.beforeShow();
    var itemViewModel = columnsEditor.createItemViewModel(question.columns[0]);
    columnsEditor.onEditItemClick(itemViewModel);
    var colDetailEditor = <SurveyElementEditorContent>(
      columnsEditor.koEditItem().itemEditor
    );
    var visEditor = <SurveyPropertyConditionEditor>(
      colDetailEditor.getPropertyEditorByName("visibleIf").editor
    );
    assert.ok(visEditor, "visibleIf editor is here");
    assert.equal(
      visEditor.koHasValueSurvey(),
      false,
      "Value Survey is not ready"
    );
    visEditor.koConditionQuestion("row.Column2");
    assert.equal(visEditor.koHasValueSurvey(), true, "Value Survey is ready");
    var valSurvey = visEditor.koValueSurvey();
    assert.equal(
      valSurvey.getAllQuestions()[0].getType(),
      "dropdown",
      "value question is dropdown"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, question has defaultValue and user could not add condition with it, Bug# T2778 (customer marked it private)",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        { name: "q1", type: "radiogroup", choices: [1, 2, 3], defaultValue: 1 },
        { name: "q2", type: "text" }
      ]
    });
    var question = survey.getQuestionByName("q2");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    assert.equal(
      editor.koIsConditionValid(),
      false,
      "There is no question set"
    );
    assert.notOk(editor.conditionValue, "It is empty by default");
    editor.koConditionQuestion("q1");
    assert.equal(editor.conditionValue, "1", "The value equals default value");
    assert.equal(
      editor.koIsConditionValid(),
      true,
      "The question has default value"
    );
  }
);
QUnit.test(
  "SurveyPropertyConditionEditor, test koConditionDisplayText property",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        {
          name: "q1",
          title: "Question 1",
          type: "radiogroup",
          choices: [
            { value: 1, text: "Item 1" },
            { value: 2, text: "Item 2" },
            { value: 3, text: "Item 3" }
          ]
        },
        { name: "q2", type: "text", visibleIf: "{q1} = 1" }
      ]
    });
    var question = survey.getQuestionByName("q2");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    assert.equal(editor.koConditionDisplayText(), "({Question 1} == Item 1)");
    editor.koValue("");
    assert.equal(editor.koConditionDisplayText(), "Expression is empty");
    editor.koValue("{q1} < 2");
    assert.equal(editor.koConditionDisplayText(), "({Question 1} < Item 2)");
  }
);
QUnit.test(
  "SurveyPropertyConditionEditor, automatically modify koTextValue/koValue without apply",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        {
          name: "q1",
          title: "Question 1",
          type: "radiogroup",
          choices: [
            { value: 1, text: "Item 1" },
            { value: 2, text: "Item 2" },
            { value: 3, text: "Item 3" }
          ]
        },
        { name: "q2", type: "text" },
        { name: "q3", type: "text", visibleIf: "{q2} = 1" }
      ]
    });
    var question = survey.getQuestionByName("q2");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koConditionQuestion("q3");
    editor.conditionValue = "val1";
    assert.equal(
      editor.koTextValue(),
      "{q3} = 'val1'",
      "Set text value automatically"
    );
    assert.equal(
      editor.koValue(),
      "{q3} = 'val1'",
      "Set koValue automatically"
    );
    editor.conditionValue = "val2";
    assert.equal(
      editor.koTextValue(),
      "{q3} = 'val2'",
      "Update text value automatically"
    );
    assert.equal(
      editor.koValue(),
      "{q3} = 'val2'",
      "Update koValue automatically"
    );
    editor.koConditionOperator("notequal");
    assert.equal(
      editor.koTextValue(),
      "{q3} <> 'val2'",
      "Update text value automatically on changing operator"
    );
    assert.equal(
      editor.koValue(),
      "{q3} <> 'val2'",
      "Update koValue automatically on changing operator"
    );
    editor.koConditionQuestion("q1");
    assert.equal(editor.koTextValue(), "", "Reset the value");
    editor.conditionValue = 2;
    assert.equal(
      editor.koTextValue(),
      "{q1} = 2",
      "Set value automatically #2"
    );
    editor.replaceCondition();
    editor.conditionValue = 3;
    assert.equal(editor.koTextValue(), "{q1} = 2", "Stop update the value");

    editor.object = survey.getQuestionByName("q3");
    editor.beforeShow();
    assert.equal(
      editor.koTextValue(),
      "{q2} = 1",
      "Update the value on object change"
    );
    editor.koConditionQuestion("q2");
    editor.conditionValue = 3;
    assert.equal(
      editor.koTextValue(),
      "{q2} = 1",
      "Do not update the koTextValue"
    );
  }
);
QUnit.test(
  "SurveyPropertyConditionEditor, automatically modify koTextValue/koValue with empty/non empty",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        {
          name: "q1",
          title: "Question 1",
          type: "radiogroup",
          choices: [
            { value: 1, text: "Item 1" },
            { value: 2, text: "Item 2" },
            { value: 3, text: "Item 3" }
          ]
        },
        { name: "q2", type: "text" }
      ]
    });
    var question = survey.getQuestionByName("q2");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koConditionQuestion("q1");
    editor.koConditionOperator("empty");
    assert.equal(
      editor.koTextValue(),
      "{q1} empty",
      "Set text value automatically"
    );
    assert.equal(editor.koValue(), "{q1} empty", "Set koValue automatically");
    editor.koConditionOperator("equals");
    assert.equal(editor.koValue(), "", "Set koValue is empty");
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, clearCondition/koHasConditionAppliedValue",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        {
          name: "q1",
          title: "Question 1",
          type: "radiogroup",
          choices: [
            { value: 1, text: "Item 1" },
            { value: 2, text: "Item 2" },
            { value: 3, text: "Item 3" }
          ]
        },
        { name: "q2", type: "text" }
      ]
    });
    var question = survey.getQuestionByName("q2");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    assert.equal(
      editor.koHasConditionAppliedValue(),
      false,
      "It is false by default"
    );
    editor.koConditionQuestion("q1");
    editor.koConditionOperator("empty");
    assert.equal(
      editor.koHasConditionAppliedValue(),
      false,
      "It is false since it was not applied"
    );
    editor.replaceCondition();
    assert.equal(
      editor.koHasConditionAppliedValue(),
      true,
      "It is true, after apply"
    );
    editor.clearCondition();
    assert.equal(
      editor.koHasConditionAppliedValue(),
      false,
      "It is false, after clear"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, clearCondition/koHasConditionAppliedValue",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        { name: "q1", type: "text" },
        { name: "q2", type: "text" }
      ]
    });
    var question = survey.getQuestionByName("q2");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koTextValue("{q1} = ");
    assert.equal(
      editor.koIsTextConditionValid(),
      false,
      "Condition is not valid"
    );
    assert.equal(editor.koValue(), "", "Invalid condition, value is empty");
    assert.equal(
      editor.koConditionDisplayText(),
      editor.getLocString("pe.expressionIsEmpty"),
      "Invalid condition, display text is empty"
    );
    editor.koTextValue("{q1} = '1'");
    assert.equal(
      editor.koValue(),
      "{q1} = '1'",
      "Condition is valid, value is set"
    );
    assert.equal(
      editor.koTextValue(),
      "{q1} = '1'",
      "Condition is valid, text value is set"
    );
  }
);
QUnit.test(
  "SurveyPropertyConditionEditor, modify koValue for editor in Modal Window",
  function(assert) {
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var survey = new Survey.Survey();
    var page = survey.addNewPage("p");
    var question = page.addNewQuestion("text", "q1");
    page.addNewQuestion("text", "q2");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.onChanged = function(newValue) {
      question.visibleIf = newValue;
    };
    editor.object = question;
    editor.beforeShow();
    editor.isCompactMode = false;
    editor.koConditionQuestion("q2");
    editor.conditionValue = "abc";
    assert.equal(editor.koValue(), "{q2} = 'abc'", "value is set");
    assert.equal(
      question.visibleIf,
      "{q2} = 'abc'",
      "value is set into question"
    );
  }
);
QUnit.test("SurveyPropertyConditionEditor, koVisibleOperators", function(
  assert
) {
  var survey = new Survey.Survey({
    elements: [
      { name: "q1", type: "text" },
      { name: "qText", type: "text" },
      { name: "qComment", type: "comment" },
      { name: "qRadio", type: "radiogroup", choices: [1, 2] },
      { name: "qDropdown", type: "dropdown", choices: [1, 2] },
      { name: "qRating", type: "rating" },
      { name: "qCheck", type: "checkbox", choices: [1, 2] },
      { name: "qBoolean", type: "boolean" },
      { name: "qExpression", type: "expression" },
      { name: "qFile", type: "file" },
      { name: "qImagepicker", type: "imagepicker" },
      { name: "qMatrix", type: "matrix", rows: ["row1", "row2"] },
      {
        name: "qMatrixdropdown",
        type: "matrixdropdown",
        rows: ["row1", "row2"],
        columns: [
          { cellType: "text", name: "col1" },
          { cellType: "radiogroup", name: "col2" },
          { cellType: "checkbox", name: "col3" }
        ]
      },
      {
        name: "qMatrixdynamic",
        type: "matrixdynamic",
        rowCount: 2,
        columns: [
          { cellType: "text", name: "col1" },
          { cellType: "radiogroup", name: "col2" },
          { cellType: "checkbox", name: "col3" }
        ]
      },
      { name: "qMultipletext", type: "multipletext" }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var property = Survey.Serializer.findProperty("question", "visibleIf");
  var editor = new SurveyPropertyConditionEditor(property);
  editor.object = question;
  editor.beforeShow();
  var checkFun = function(questionName: string, operatorNames: Array<string>) {
    editor.koConditionQuestion(questionName);
    var ops = editor.koVisibleOperators();
    var names = [];
    for (var i = 0; i < ops.length; i++) {
      names.push(ops[i].name);
    }
    assert.equal(
      editor.koVisibleOperators().length,
      operatorNames.length,
      "Operators lentgh is correct for question: '" +
        questionName +
        "', " +
        JSON.stringify(names)
    );
    for (var i = 0; i < operatorNames.length; i++) {
      assert.ok(
        names.indexOf(operatorNames[i]) > -1,
        "Operator: '" +
          operatorNames[i] +
          "' is here for question: " +
          questionName
      );
    }
  };
  var checkFunMultiple = function(
    questionNames: Array<string>,
    operatorNames: Array<string>
  ) {
    for (var i = 0; i < questionNames.length; i++) {
      checkFun(questionNames[i], operatorNames);
    }
  };
  assert.equal(
    editor.koVisibleOperators().length,
    SurveyPropertyEditorFactory.getOperators().length,
    "Show all operators when question is not set"
  );
  checkFunMultiple(
    [
      "qText",
      "qComment",
      "qMatrixdropdown.row1.col1",
      "qMatrixdynamic[0].col1"
    ],
    [
      "empty",
      "notempty",
      "equal",
      "notequal",
      "contains",
      "notcontains",
      "greater",
      "less",
      "greaterorequal",
      "lessorequal"
    ]
  );
  checkFunMultiple(
    [
      "qRadio",
      "qDropdown",
      "qMatrix.row1",
      "qMatrixdropdown.row1.col2",
      "qMatrixdynamic[0].col2"
    ],
    [
      "empty",
      "notempty",
      "equal",
      "notequal",
      "anyof",
      "greater",
      "less",
      "greaterorequal",
      "lessorequal"
    ]
  );
  checkFunMultiple(
    ["qCheck", "qMatrixdropdown.row1.col3", "qMatrixdynamic[0].col3"],
    [
      "empty",
      "notempty",
      "equal",
      "notequal",
      "contains",
      "notcontains",
      "anyof",
      "allof"
    ]
  );
  checkFun("qBoolean", ["empty", "notempty", "equal", "notequal"]);
  checkFunMultiple(
    ["qExpression", "qRating"],
    [
      "empty",
      "notempty",
      "equal",
      "notequal",
      "greater",
      "less",
      "greaterorequal",
      "lessorequal"
    ]
  );
  checkFun("qFile", ["empty", "notempty"]);
  checkFun("qImagepicker", ["empty", "notempty", "equal", "notequal", "anyof"]);
  //["empty", "notempty", "equal", "notequal", "contains", "notcontains", "anyof", "allof", "greater", "less", "greaterorequal", "lessorequal"]
});
QUnit.test(
  "SurveyPropertyConditionEditor, keep condition value on changing operation when it possible",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        { name: "q1", type: "text" },
        { name: "question1", type: "radiogroup", choices: ["item1", "item2"] }
      ]
    });
    var question = survey.getQuestionByName("q1");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koConditionQuestion("question1");
    editor.conditionValue = "item1";
    editor.koConditionOperator("notequal");
    assert.equal(editor.conditionValue, "item1", "Keep the value");
    editor.koConditionOperator("empty");
    assert.notOk(editor.conditionValue, "Reset the value");
  }
);
QUnit.test("SurveyPropertyConditionEditor, selectbase + anyof", function(
  assert
) {
  var survey = new Survey.Survey({
    elements: [
      { name: "q1", type: "text" },
      { name: "question1", type: "dropdown", choices: ["item1", "item2"] }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var property = Survey.Serializer.findProperty("question", "visibleIf");
  var editor = new SurveyPropertyConditionEditor(property);
  editor.object = question;
  editor.beforeShow();
  editor.koConditionQuestion("question1");
  assert.equal(
    editor
      .koValueSurvey()
      .getAllQuestions()[0]
      .getType(),
    "dropdown",
    "It is dropdown by default"
  );
  editor.koConditionOperator("anyof");
  assert.equal(
    editor
      .koValueSurvey()
      .getAllQuestions()[0]
      .getType(),
    "checkbox",
    "It is checkbox for anyof"
  );
  editor.koConditionOperator("equal");
  assert.equal(
    editor
      .koValueSurvey()
      .getAllQuestions()[0]
      .getType(),
    "dropdown",
    "It is dropdown again"
  );
});
QUnit.test(
  "SurveyPropertyConditionEditor, add apostrophes to string value",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        { name: "q1", type: "text" },
        { name: "question1", type: "radiogroup", choices: ["item1", 1] },
        { name: "question2", type: "checkbox", choices: ["item1", 1] }
      ]
    });
    var question = survey.getQuestionByName("q1");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.koConditionQuestion("question1");
    editor.conditionValue = "item1";
    assert.equal(
      editor.koTextValue(),
      "{question1} = 'item1'",
      "Use apostrophes"
    );
    editor.conditionValue = 1;
    assert.equal(editor.koTextValue(), "{question1} = 1", "No apostrophes");
    editor.koConditionOperator("anyof");
    editor.conditionValue = ["item1", 1];
    assert.equal(
      editor.koTextValue(),
      "{question1} anyof ['item1', 1]",
      "any of"
    );

    editor.koConditionQuestion("question2");
    editor.koConditionOperator("equal");
    editor.conditionValue = ["item1", 1];
    assert.equal(
      editor.koTextValue(),
      "{question2} = ['item1', 1]",
      "checkbox"
    );
  }
);

QUnit.test("SurveyPropertyConditionEditor, parse koEditorItems()", function(
  assert
) {
  var survey = new Survey.Survey({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: [1, 2, 3] },
      { name: "q4", type: "text", visibleIf: "{q1} = 'abc' and {q2} = 1" }
    ]
  });
  var question = survey.getQuestionByName("q4");
  var property = Survey.Serializer.findProperty("question", "visibleIf");
  var editor = new SurveyPropertyConditionEditor(property);
  editor.object = question;
  editor.beforeShow();
  assert.equal(editor.koCanParseExpression(), true, "We can parse expression");
  assert.equal(editor.koEditorItems().length, 2, "There are two conditions");
  editor.koValue("{q1} = 'abc' or {q2} = 1 and {q2} = 2");
  assert.equal(editor.koCanParseExpression(), true, "We can parse expression");
  assert.equal(editor.koEditorItems().length, 3, "There are three conditions");
  editor.koValue("{q1} = 'abc' and ({q2} = 1 or {q2} = 2)");
  assert.equal(
    editor.koCanParseExpression(),
    false,
    "It is a tree and not a flat conditions"
  );
  editor.koValue("{q1} empty");
  assert.equal(editor.koCanParseExpression(), true, "No const");
  assert.equal(
    editor.koEditorItems()[0].questionName,
    "q1",
    "question name parsed correctly"
  );
  assert.equal(
    editor.koEditorItems()[0].operator,
    "empty",
    "operator parsed correctly"
  );
  editor.koValue("1 < {q1}");
  assert.equal(editor.koCanParseExpression(), true, "Const on right");
  assert.equal(editor.koEditorItems()[0].value, 1, "Value parse correctly");
  assert.equal(
    editor.koEditorItems()[0].questionName,
    "q1",
    "Field Name parse correctly"
  );
  assert.equal(
    editor.koEditorItems()[0].operator,
    "greater",
    "Make the opposite value"
  );
  editor.koValue("1 < {q11}");
  assert.equal(
    editor.koCanParseExpression(),
    false,
    "There is no question like this, binary operand"
  );
  editor.koValue("{q11} empty");
  assert.equal(
    editor.koCanParseExpression(),
    false,
    "There is no question like this, unary operand"
  );
});
QUnit.test(
  "SurveyPropertyConditionEditor, change questionName in ConditionEditorItem",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        { name: "q1", type: "text" },
        { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
        { name: "q3", type: "checkbox", choices: [1, 2, 3] },
        { name: "q4", type: "text", visibleIf: "{q1} = 'abc'" }
      ]
    });
    var question = survey.getQuestionByName("q4");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    assert.equal(editor.koEditorItems().length, 1, "There is one item");
    var editorItem = editor.koEditorItems()[0];
    assert.equal(editorItem.value, "abc", "Value set correctly");
    assert.equal(
      editorItem.survey.getQuestionByName("questionValue").getType(),
      "text",
      "question value type is correct"
    );
    editorItem.questionName = "q2";
    assert.notOk(editorItem.value, "Value is empty on changing the value");
    assert.equal(
      editorItem.survey.getQuestionByName("questionValue").getType(),
      "dropdown",
      "question value type is dropdown for editing radiogroup"
    );
    editorItem.questionName = "q3";
    assert.equal(
      editorItem.survey.getQuestionByName("questionValue").getType(),
      "checkbox",
      "question value type is checkbox for editing checkbox"
    );
    editorItem.questionName = "q2";
    assert.equal(
      editorItem.survey.getQuestionByName("questionValue").getType(),
      "dropdown",
      "question value type is dropdown for editing radiogroup, #2"
    );
    assert.equal(
      editorItem.survey.getQuestionByName("questionValue").choices.length,
      3,
      "There are 3 choices"
    );
    editorItem.operator = "anyof";
    assert.equal(
      editorItem.survey.getQuestionByName("questionValue").getType(),
      "checkbox",
      "question value type is checkbox for editing radiogroup, operator anyof"
    );
    editorItem.operator = "equal";
    assert.equal(
      editorItem.survey.getQuestionByName("questionValue").getType(),
      "dropdown",
      "question value type is dropdown for editing radiogroup, #3"
    );
  }
);
QUnit.test(
  "SurveyPropertyConditionEditor, create expression from scratch",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        { name: "q1", type: "text" },
        { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
        { name: "q3", type: "checkbox", choices: [1, 2, 3] },
        { name: "q4", type: "text" }
      ]
    });
    var question = survey.getQuestionByName("q4");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    assert.equal(editor.koValue(), "", "The value is empty");
    assert.equal(
      editor.koEditorItems().length,
      1,
      "We have one item for editing"
    );
    var editorItem = editor.koEditorItems()[0];
    assert.equal(
      editorItem.survey.getQuestionByName("questionValue").isReadOnly,
      true,
      "It is readOnly when there is no questionName"
    );
    editorItem.questionName = "q1";
    editorItem.value = "abc";
    assert.equal(
      editorItem.toString(),
      "{q1} = 'abc'",
      "editorItem.toString() works correctly"
    );
    assert.equal(editor.koValue(), "{q1} = 'abc'", "Value set correctly");
    editor.addConditionEditorItem();
    editorItem = editor.koEditorItems()[1];
    assert.equal(editor.koValue(), "{q1} = 'abc'", "Second item is empty");
    editorItem.questionName = "q2";
    assert.equal(
      editor.koValue(),
      "{q1} = 'abc'",
      "Second item value is empty"
    );
    editorItem.value = 2;
    assert.equal(
      editor.koValue(),
      "{q1} = 'abc' and {q2} = 2",
      "Second item is here"
    );
    editorItem.operator = "empty";
    assert.equal(
      editor.koValue(),
      "{q1} = 'abc' and {q2} empty",
      "Second item has no value"
    );
  }
);
