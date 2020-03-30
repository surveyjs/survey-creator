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
  editor.isEditorShowing = true;
  editor.addCondition();
  var editorItem = editor.koEditorItems()[1];
  assert.equal(editorItem.isReady, false, "We can't add condition");
  editorItem.questionName = "q2";
  assert.equal(editorItem.isReady, false, "value is empty");
  editorItem.value = "2";
  assert.equal(editorItem.isReady, true, "Can add condition");
  assert.equal(
    editor.koTextValue(),
    "{q} = 1 and {q2} = 2",
    "condition was added"
  );

  editor.koTextValue("");
  editorItem = editor.koEditorItems()[0];
  assert.notOk(editorItem.questionName, "question should empty");
  assert.equal(editorItem.isReady, false, "values were reset.");
  editorItem.questionName = "q1";
  editorItem.value = "abc";
  assert.equal(editor.koTextValue(), "{q1} = 'abc'", "condition was replaced");

  editorItem.value = null;
  assert.equal(editorItem.isReady, false, "value is not set");
  editorItem.operator = "empty";
  assert.equal(editorItem.isReady, true, "empty doesn't require value");
  assert.equal(editor.koTextValue(), "{q1} empty", "condition was replaced");
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q2";
    assert.ok(editorItem.nameQuestion, "question value is created");
    editorItem.value = JSON.stringify(["item1's"]);
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q2";
    editorItem.value = "d'2";
    assert.equal(
      editorItem.toString(),
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
    editor.isEditorShowing = true;
    editor.addCondition();
    var editorItem = editor.koEditorItems()[1];
    editorItem.questionName = "panel.q2";
    editorItem.value = "2";
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q2";
    editorItem.value = "abc";
    assert.equal(
      editor.koTextValue(),
      "{val2} = 'abc'",
      "valueName property is used"
    );

    editorItem.questionName = "matrix.row1.column1";
    editorItem.value = "1";
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q2.";
    var valueQuestion = editorItem.valueQuestion;
    assert.ok(valueQuestion, "Value question created correctly");
    assert.equal(
      valueQuestion.choices.length,
      4,
      "value question created correctly"
    );

    editorItem.questionName = "matrix.row1.column1";
    valueQuestion = editorItem.valueQuestion;
    assert.ok(
      valueQuestion,
      "Value question for matrix column created correctly"
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q2";
    var questionValue = editorItem.valueQuestion;
    assert.ok(questionValue, "There question value");
    assert.equal(
      questionValue.getType(),
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q2";
    editorItem.value = "abc";
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
    editor.isEditorShowing = true;
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
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q2";
    var vQuestion = editorItem.valueQuestion;
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q1";
    editorItem.valueQuestion.value = 1;
    assert.equal(
      editor.koTextValue(),
      "{q1} = [1]",
      "Set expression correctly"
    );
    editorItem.questionName = "q3";
    assert.equal(editor.koTextValue(), "", "Set expression is reset");
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
    visEditor.isEditorShowing = true;
    var editorItem = visEditor.koEditorItems()[0];
    editorItem.questionName = "row.Column2";
    var questionValue = editorItem.valueQuestion;
    assert.equal(
      questionValue.getType(),
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    assert.equal(editorItem.isReady, false, "There is no question set");
    assert.notOk(editorItem.value, "It is empty by default");
    editorItem.questionName = "q1";
    assert.equal(editorItem.value, 1, "The value equals default value");
    assert.equal(editorItem.isReady, true, "The question has default value");
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q3";
    editorItem.value = "val1";
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
    editorItem.value = "val2";
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
    editorItem.operator = "notequal";
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
    editorItem.questionName = "q1";
    assert.equal(editor.koTextValue(), "", "Reset the value");
    editorItem.value = 2;
    assert.equal(
      editor.koTextValue(),
      "{q1} = 2",
      "Set value automatically #2"
    );

    editor.object = survey.getQuestionByName("q3");
    editor.beforeShow();
    editor.isEditorShowing = true;
    editorItem = editor.koEditorItems()[0];
    assert.equal(
      editor.koTextValue(),
      "{q2} = 1",
      "Update the value on object change"
    );
    editorItem.questionName = "q2";
    editorItem.value = 3;
    assert.equal(editor.koTextValue(), "{q2} = 3", "update the koTextValue");
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q1";
    editorItem.operator = "empty";
    assert.equal(
      editor.koTextValue(),
      "{q1} empty",
      "Set text value automatically"
    );
    assert.equal(editor.koValue(), "{q1} empty", "Set koValue automatically");
    editorItem.operator = "equals";
    assert.equal(editor.koValue(), "", "Set koValue is empty");
  }
);

QUnit.test("SurveyPropertyConditionEditor, clearCondition", function(assert) {
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
  editor.isEditorShowing = true;
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
});
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "q2";
    editorItem.value = "abc";
    assert.equal(editor.koValue(), "{q2} = 'abc'", "value is set");
    assert.equal(
      question.visibleIf,
      "{q2} = 'abc'",
      "value is set into question"
    );
  }
);
QUnit.test("SurveyPropertyConditionEditor, enabled operators", function(
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
  editor.isEditorShowing = true;
  var checkFun = function(questionName: string, operatorNames: Array<string>) {
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = questionName;
    var choices = editorItem.operatorQuestion.choices;
    for (var i = 0; i < choices.length; i++) {
      var isItemEnabled = choices[i].isEnabled;
      var operatorName = choices[i].value;
      assert.notOk(
        isItemEnabled && operatorNames.indexOf(operatorName) < 0,
        "Operator: '" +
          operatorName +
          " should not be for question: " +
          questionName
      );
      assert.notOk(
        !isItemEnabled && operatorNames.indexOf(operatorName) > -1,
        "Operator: '" +
          operatorName +
          " should be for question: " +
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "question1";
    editorItem.value = "item1";
    editorItem.operator = "notequal";
    assert.equal(editorItem.value, "item1", "Keep the value");
    editorItem.operator = "empty";
    assert.notOk(editorItem.value, "Reset the value");
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
  editor.isEditorShowing = true;
  var editorItem = editor.koEditorItems()[0];
  editorItem.questionName = "question1";
  var questionValue = editorItem.valueQuestion;
  assert.equal(
    questionValue.getType(),
    "dropdown",
    "It is dropdown by default"
  );
  editorItem.operator = "anyof";
  questionValue = editorItem.valueQuestion;
  assert.equal(questionValue.getType(), "checkbox", "It is checkbox for anyof");
  editorItem.operator = "equal";
  questionValue = editorItem.valueQuestion;
  assert.equal(questionValue.getType(), "dropdown", "It is dropdown again");
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    editorItem.questionName = "question1";
    editorItem.value = "item1";
    assert.equal(
      editor.koTextValue(),
      "{question1} = 'item1'",
      "Use apostrophes"
    );
    editorItem.value = 1;
    assert.equal(editor.koTextValue(), "{question1} = 1", "No apostrophes");
    editorItem.operator = "anyof";
    editorItem.value = ["item1", 1];
    assert.equal(
      editor.koTextValue(),
      "{question1} anyof ['item1', 1]",
      "any of"
    );

    editorItem.questionName = "question2";
    editorItem.operator = "equal";
    editorItem.value = ["item1", 1];
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
  editor.isEditorShowing = true;
  assert.equal(editor.koActiveView(), "form", "Show Builder initial");
  assert.equal(editor.koCanParseExpression(), true, "We can parse expression");
  assert.equal(editor.koEditorItems().length, 2, "There are two conditions");
  editor.koValue("{q1} = 'abc' or {q2} = 1 and {q2} = 2");
  assert.equal(editor.koCanParseExpression(), true, "We can parse expression");
  assert.equal(editor.koEditorItems().length, 3, "There are three conditions");
  assert.equal(editor.koActiveView(), "form", "Show Builder 1");
  editor.koValue("{q1} = 'abc' and ({q2} = 1 or {q2} = 2)");
  assert.equal(
    editor.koCanParseExpression(),
    false,
    "It is a tree and not a flat conditions"
  );
  assert.equal(editor.koActiveView(), "text", "Show Text 1");
  editor.koValue("{q1} empty");
  assert.equal(editor.koCanParseExpression(), true, "No const");
  editor.koActiveView("form");
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
  assert.equal(editor.koActiveView(), "form", "Show Builder 2");
  editor.koValue("1 < {q11}");
  assert.equal(
    editor.koCanParseExpression(),
    false,
    "There is no question like this, binary operand"
  );
  assert.equal(editor.koActiveView(), "text", "Show Text 2");
  editor.koValue("{q11} empty");
  assert.equal(
    editor.koCanParseExpression(),
    false,
    "There is no question like this, unary operand"
  );
  editor.koTextValue("not t");
  assert.equal(
    editor.koIsTextConditionValid(),
    false,
    "The expression is not valid"
  );
  assert.equal(
    editor.koCanParseExpression(),
    false,
    "We can't parse invalid expression"
  );
  editor.koTextValue("{q3} = [1, 2]");
  assert.equal(
    editor.koIsTextConditionValid(),
    true,
    "The expression is valid: {q3} = [1, 2]"
  );
  assert.equal(
    editor.koCanParseExpression(),
    true,
    "We can parse valid expression: {q3} = [1, 2]"
  );
});
/* TODO bug fixed in Library v1.5.18
QUnit.test(
  "SurveyPropertyConditionEditor, parse koEditorItems() question.valueName",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        { name: "q1", type: "text", valueName: "val1" },
        { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
        { name: "q3", type: "checkbox", choices: [1, 2, 3] },
        { name: "q4", type: "text", visibleIf: "{val1} = 'abc' and {q2} = 1" }
      ]
    });
    var question = survey.getQuestionByName("q4");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.isEditorShowing = true;
    assert.equal(editor.koActiveView(), "form", "Show Builder initial");
    assert.equal(
      editor.koCanParseExpression(),
      true,
      "We can parse expression"
    );
    assert.equal(editor.koEditorItems().length, 2, "There are two conditions");
    editor.koValue("{val1} = 'abc' or {q2} = 1 and {q2} = 2");
  }
);
*/
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
    editor.isEditorShowing = true;
    assert.equal(editor.koEditorItems().length, 1, "There is one item");
    var editorItem = editor.koEditorItems()[0];
    assert.equal(editorItem.value, "abc", "Value set correctly");
    assert.equal(
      editorItem.valueQuestion.getType(),
      "text",
      "question value type is correct"
    );
    editorItem.questionName = "q2";
    assert.notOk(editorItem.value, "Value is empty on changing the value");
    assert.equal(
      editorItem.valueQuestion.getType(),
      "dropdown",
      "question value type is dropdown for editing radiogroup"
    );
    editorItem.questionName = "q3";
    assert.equal(
      editorItem.valueQuestion.getType(),
      "checkbox",
      "question value type is checkbox for editing checkbox"
    );
    editorItem.questionName = "q2";
    assert.equal(
      editorItem.valueQuestion.getType(),
      "dropdown",
      "question value type is dropdown for editing radiogroup, #2"
    );
    assert.equal(
      editorItem.valueQuestion.choices.length,
      3,
      "There are 3 choices"
    );
    editorItem.operator = "anyof";
    assert.equal(
      editorItem.valueQuestion.getType(),
      "checkbox",
      "question value type is checkbox for editing radiogroup, operator anyof"
    );
    editorItem.operator = "equal";
    assert.equal(
      editorItem.valueQuestion.getType(),
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
    editor.isEditorShowing = true;
    assert.equal(editor.koValue(), "", "The value is empty");
    assert.equal(
      editor.koEditorItems().length,
      1,
      "We have one item for editing"
    );
    var editorItem = editor.koEditorItems()[0];
    assert.equal(
      editorItem.valueQuestion.isReadOnly,
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
    assert.equal(editor.koValue(), "{q1} = 'abc'", "koValue set correctly");
    assert.equal(
      editor.koTextValue(),
      "{q1} = 'abc'",
      "koTextValue set correctly"
    );
    assert.equal(
      editorItem.conjunctionQuestion.isVisible,
      false,
      "Conjuction is invisible for the first item"
    );
    editor.addCondition();
    editorItem = editor.koEditorItems()[1];
    assert.equal(
      editorItem.conjunctionQuestion.isVisible,
      true,
      "Conjuction is invisible for the second item"
    );
    assert.equal(editor.koValue(), "{q1} = 'abc'", "Second item is empty");
    editorItem.questionName = "q2";
    assert.notOk(editorItem.toString(), "string is empty - no value");
    assert.equal(
      editor.koValue(),
      "{q1} = 'abc'",
      "Second item value is empty"
    );
    editorItem.value = 2;
    assert.equal(editorItem.toString(), "{q2} = 2", "string returns condition");
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
    editorItem.conjunction = "or";
    assert.equal(
      editor.koValue(),
      "{q1} = 'abc' or {q2} empty",
      "Change the conjunction"
    );
    assert.equal(editorItem.isFirst, false, "It is second");
    editor.removeCondition(editor.koEditorItems()[0]);
    assert.equal(editorItem.isFirst, true, "It is first now");
    assert.equal(editor.koValue(), "{q2} empty", "Remove the item");
  }
);
QUnit.test("SurveyPropertyConditionEditor, isWideMode = true", function(
  assert
) {
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
  editor.isWideMode = true;
  editor.object = question;
  editor.beforeShow();
  editor.isEditorShowing = true;
  var editorItem = editor.koEditorItems()[0];
  var questionValue = editorItem.valueQuestion;
  assert.equal(questionValue.titleLocation, "hidden", "Hide question title");
  assert.equal(questionValue.startWithNewLine, false, "Keep on the same line");
  editorItem.questionName = "q3";
  questionValue = editorItem.valueQuestion;
  assert.notEqual(
    questionValue.titleLocation,
    "hidden",
    "Show question title - checkbox"
  );
  assert.equal(
    questionValue.startWithNewLine,
    true,
    "Show on the next line - checkbox"
  );
  editorItem.questionName = "q2";
  questionValue = editorItem.valueQuestion;
  assert.equal(
    questionValue.titleLocation,
    "hidden",
    "Hide question title - radiogroup/dropdown"
  );
  assert.equal(
    questionValue.startWithNewLine,
    false,
    "Keep on the same line - radiogroup/dropdown"
  );
});

QUnit.test(
  "SurveyPropertyConditionEditor, editorItem question width, isWideMode = false",
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
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    assert.equal(
      editorItem.nameQuestion.width,
      "70%",
      "name question for first item"
    );
    assert.equal(
      editorItem.operatorQuestion.width,
      "30%",
      "operator question for first item"
    );
    assert.equal(
      editorItem.valueQuestion.width,
      "",
      "value question for first item"
    );
    editor.addCondition();
    editorItem = editor.koEditorItems()[1];
    assert.equal(
      editorItem.conjunctionQuestion.width,
      "25%",
      "conjunction question for second item"
    );
    assert.equal(
      editorItem.nameQuestion.width,
      "45%",
      "name question for second item"
    );
    assert.equal(
      editorItem.operatorQuestion.width,
      "30%",
      "operator question for second item"
    );
    assert.equal(
      editorItem.valueQuestion.width,
      "",
      "value question for second item"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, editorItem question width, isWideMode = true",
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
    editor.isWideMode = true;
    editor.beforeShow();
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    assert.equal(
      editorItem.nameQuestion.width,
      "40%",
      "name question for first item"
    );
    assert.equal(
      editorItem.operatorQuestion.width,
      "25%",
      "operator question for first item"
    );
    assert.equal(
      editorItem.valueQuestion.width,
      "35%",
      "value question for first item"
    );
    editorItem.questionName = "q3";
    assert.equal(
      editorItem.nameQuestion.width,
      "40%",
      "name question for first item + checkbox"
    );
    assert.equal(
      editorItem.operatorQuestion.width,
      "60%",
      "operator question for first item + checkbox"
    );
    assert.equal(
      editorItem.valueQuestion.width,
      "",
      "value question for first item + checkbox"
    );

    editor.addCondition();
    editorItem = editor.koEditorItems()[1];
    assert.equal(
      editorItem.conjunctionQuestion.width,
      "15%",
      "conjunction question for second item"
    );
    assert.equal(
      editorItem.nameQuestion.width,
      "25%",
      "name question for first item"
    );
    assert.equal(
      editorItem.operatorQuestion.width,
      "25%",
      "operator question for second item"
    );
    assert.equal(
      editorItem.valueQuestion.width,
      "35%",
      "name question for second item"
    );
    editorItem.questionName = "q3";
    assert.equal(
      editorItem.conjunctionQuestion.width,
      "15%",
      "conjunction question for second item + checkbox"
    );
    assert.equal(
      editorItem.nameQuestion.width,
      "25%",
      "name question for first item + checkbox"
    );
    assert.equal(
      editorItem.operatorQuestion.width,
      "60%",
      "operator question for second item + checkbox"
    );
    assert.equal(
      editorItem.valueQuestion.width,
      "",
      "name question for second item + checkbox"
    );
  }
);

QUnit.test(
  "SurveyPropertyConditionEditor, editorItem valueQuestion set correct value for array, Bug #700",
  function(assert) {
    var survey = new Survey.Survey({
      elements: [
        { name: "q1", type: "text", visibleIf: "{q2} = ['item1', 'item3']" },
        { name: "q2", type: "checkbox", choices: ["item1", "item2", "item3"] }
      ]
    });
    var question = survey.getQuestionByName("q1");
    var property = Survey.Serializer.findProperty("question", "visibleIf");
    var editor = new SurveyPropertyConditionEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.isEditorShowing = true;
    var editorItem = editor.koEditorItems()[0];
    assert.deepEqual(
      editorItem.valueQuestion.value,
      ["item1", "item3"],
      "set valueQuestion value correctly to array"
    );
  }
);
