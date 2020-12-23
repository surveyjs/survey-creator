import {
  SurveyModel,
  Question,
  QuestionMatrixDropdownModel,
  QuestionMatrixDynamicModel,
  QuestionDropdownModel,
  QuestionRadiogroupModel,
  QuestionPanelDynamicModel,
} from "survey-knockout";
import {
  ConditionEditorBase,
  ConditionEditorItemsBuilder,
  ConditionEditorItem,
} from "../../src/property-grid/condition-survey";

test("Items Builder, simple test", () => {
  var builder = new ConditionEditorItemsBuilder();
  var items = builder.build("{question1} = 1");
  expect(items).toHaveLength(1);
  expect(items[0].questionName).toEqual("question1");
  expect(items[0].operator).toEqual("equal");
  expect(items[0].value).toEqual(1);
  items = builder.build("1 = {question1}");
  expect(items).toHaveLength(1);
  expect(items[0].questionName).toEqual("question1");
  expect(items[0].operator).toEqual("equal");
  expect(items[0].value).toEqual(1);
});

test("Setup simple panel", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2" },
      { type: "text", name: "question3" },
    ],
  });
  var conditionEditor = new ConditionEditorBase(
    survey,
    survey.getQuestionByName("question3")
  );
  conditionEditor.text = "{question1} = 2";
  expect(conditionEditor.panel.panelCount).toEqual(1);
  var editPanel = conditionEditor.panel.panels[0];
  expect(conditionEditor.allConditionQuestions).toHaveLength(2);
  var nameQuestion = editPanel.getQuestionByName("questionName");
  expect(nameQuestion.choices).toHaveLength(2);
  expect(conditionEditor.text).toEqual("{question1} = 2");
});

test("Add condition", () => {
  var survey = new SurveyModel({
    questions: [
      { type: "text", name: "q1" },
      { type: "text", name: "q" },
      { type: "text", name: "q2" },
    ],
  });
  var conditionEditor = new ConditionEditorBase(
    survey,
    survey.getQuestionByName("q1")
  );
  conditionEditor.text = "{q} = 1";
  expect(conditionEditor.panel.panelCount).toEqual(1);
  expect(conditionEditor.isReady).toEqual(true);
  conditionEditor.panel.addPanel();
  expect(conditionEditor.isReady).toEqual(false);
  var editPanel = conditionEditor.panel.panels[1];
  var nameQuestion = editPanel.getQuestionByName("questionName");
  expect(nameQuestion.choices).toHaveLength(2);
  nameQuestion.value = "q2";
  expect(conditionEditor.isReady).toEqual(false);
  editPanel.getQuestionByName("questionValue").value = 2;
  expect(conditionEditor.isReady).toEqual(true);
  expect(conditionEditor.text).toEqual("{q} = 1 and {q2} = 2");
});
test("addCondition quotes - https://surveyjs.answerdesk.io/ticket/details/T2679", () => {
  var survey = new SurveyModel({
    questions: [
      { type: "text", name: "q1" },
      { type: "dropdown", name: "q2" },
    ],
  });
  var editor = new ConditionEditorBase(survey, survey.getQuestionByName("q1"));
  expect(editor.panel.panels).toHaveLength(1);
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("operator").value).toEqual("equal");
  panel.getQuestionByName("questionName").value = "q2";
  panel.getQuestionByName("questionValue").value = JSON.stringify(["item1's"]);
  expect(editor.text).toEqual('{q2} = ["item1\\\'s"]');
});
test("Apostrophes in answers break VisibleIf - https://github.com/surveyjs/editor/issues/476", () => {
  var survey = new SurveyModel({
    questions: [
      { type: "text", name: "q1" },
      { type: "dropdown", name: "q2" },
    ],
  });
  var editor = new ConditionEditorBase(survey, survey.getQuestionByName("q1"));
  expect(editor.panel.panels).toHaveLength(1);
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("operator").value).toEqual("equal");
  panel.getQuestionByName("questionName").value = "q2";
  panel.getQuestionByName("questionValue").value = "d'2";
  expect(editor.text).toEqual("{q2} = 'd\\'2'");
});
test("Add question for dynamic panel", () => {
  var survey = new SurveyModel({
    elements: [
      {
        name: "dp",
        type: "paneldynamic",
        templateElements: [
          {
            name: "q1",
            type: "text",
            visibleIf: "{panel.q2} = 1",
          },
          {
            name: "q2",
            type: "text",
          },
        ],
      },
    ],
  });
  var editor = new ConditionEditorBase(survey, survey.getQuestionByName("dp"));
  editor.text = "{panel.q2} = 1";
  expect(editor.panel.panels).toHaveLength(1);
  var panel = editor.panel.addPanel();
  panel.getQuestionByName("questionName").value = "panel.q2";
  panel.getQuestionByName("questionValue").value = "2";
  expect(editor.text).toEqual("{panel.q2} = 1 and {panel.q2} = 2");
});
test("Use question.valueName, bug: #353", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = page.addNewQuestion("text", "q1");
  var question2 = <Question>page.addNewQuestion("text", "q2");
  question2.valueName = "val2";
  var matrix = <QuestionMatrixDropdownModel>(
    page.addNewQuestion("matrixdropdown", "matrix")
  );
  matrix.choices = [1, 2];
  matrix.rows = ["row1"];
  matrix.addColumn("column1");
  matrix.valueName = "val3";

  var editor = new ConditionEditorBase(survey, question);

  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "val2";
  panel.getQuestionByName("questionValue").value = "abc";
  expect(editor.text).toEqual("{val2} = 'abc'");

  panel.getQuestionByName("questionName").value = "val3.row1.column1";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual(
    "dropdown"
  );
  panel.getQuestionByName("questionValue").value = "1";
  expect(editor.text).toEqual("{val3.row1.column1} = 1");
});
test("Use question.valueName, bug: #367", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = <QuestionDropdownModel>page.addNewQuestion("text", "q1");
  var question2 = <QuestionDropdownModel>page.addNewQuestion("dropdown", "q2.");
  question2.choices = [1, 2, 3, 4];
  question2.valueName = "val2";

  var matrix = <QuestionMatrixDropdownModel>(
    page.addNewQuestion("matrixdropdown", "matrix")
  );
  matrix.choices = [1, 2];
  matrix.rows = ["row1"];
  matrix.addColumn("column1");

  var editor = new ConditionEditorBase(survey, question);

  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "val2";
  var valueQuestion = panel.getQuestionByName("questionValue");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.choices).toHaveLength(4);

  panel.getQuestionByName("questionName").value = "matrix.row1.column1";
  valueQuestion = panel.getQuestionByName("questionValue");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.choices).toHaveLength(2);
});
test("Use dropdown question instead of readiogroup for editing values", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = <QuestionDropdownModel>page.addNewQuestion("text", "q1");
  var question2 = <QuestionRadiogroupModel>(
    page.addNewQuestion("radiogroup", "q2")
  );
  question2.choices = [1, 2, 3, 4];

  var editor = new ConditionEditorBase(survey, question);

  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q2";
  var valueQuestion = panel.getQuestionByName("questionValue");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.getType()).toEqual("dropdown");
});
test("Add condition from wizard on apply, without pressing 'Add' button", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = page.addNewQuestion("text", "q1");
  var question2 = <Question>page.addNewQuestion("text", "q2");

  var editor = new ConditionEditorBase(survey, question);

  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "val2";
  panel.getQuestionByName("questionValue").value = "abc";
  expect(editor.text).toEqual("{val2} = 'abc'");
});
test("Add condition from wizard on apply, without pressing 'Add' button", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = page.addNewQuestion("text", "q1");
  var question2 = <Question>page.addNewQuestion("text", "q2");

  var editor = new ConditionEditorBase(survey, question);

  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "val2";
  panel.getQuestionByName("questionValue").value = "abc";
  expect(editor.text).toEqual("{val2} = 'abc'");
});
test("allConditionQuestions", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = page.addNewQuestion("text", "q1");
  page.addNewQuestion("text", "q2");
  page.addNewQuestion("text", "q3");

  var editor = new ConditionEditorBase(survey, question);
  var res = [];
  for (var i = 0; i < editor.allConditionQuestions.length; i++) {
    var item = editor.allConditionQuestions[i];
    res.push({ value: item.value, text: item.text });
  }
  expect(res).toEqual([
    { value: "q2", text: "q2" },
    { value: "q3", text: "q3" },
  ]);
});
test("allCondtionQuestions for matrix column", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = <QuestionMatrixDropdownModel>(
    page.addNewQuestion("matrixdropdown", "q1")
  );
  question.columns.splice(0, question.columns.length);
  question.addColumn("col1");
  var column = question.addColumn("col2");
  question.addColumn("col3");

  var editor = new ConditionEditorBase(survey, column);
  expect(
    editor.allConditionQuestions.filter((e) => e.name === "row.col1").length > 0
  ).toBeTruthy();
  expect(
    editor.allConditionQuestions.filter((e) => e.name === "row.col2").length > 0
  ).toBeFalsy();
});
test("allCondtionQuestions for panel dynamic", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = <QuestionPanelDynamicModel>(
    page.addNewQuestion("paneldynamic", "q1")
  );
  question.template.addNewQuestion("text", "q1");
  question.template.addNewQuestion("text", "q2");
  question.template.addNewQuestion("text", "q3");
  question.panelCount = 1;
  var panelQuestion = question.template.questions[1];

  var editor = new ConditionEditorBase(survey, panelQuestion);
  expect(
    editor.allConditionQuestions.filter((e) => e.name === "panel.q1").length > 0
  ).toBeTruthy();
  expect(
    editor.allConditionQuestions.filter((e) => e.name === "panel.q2").length > 0
  ).toBeFalsy();
});
test("Show invisible choices and make all choices enabled, Bug: https://surveyjs.answerdesk.io/ticket/details/T1921", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = page.addNewQuestion("text", "q1");
  var radioQuestion = page.addNewQuestion("dropdown", "q2");
  radioQuestion.choices = [
    { value: 1, visibleIf: "{a} = 1" },
    { value: 1, enabledIf: "{b} = 1" },
  ];

  var editor = new ConditionEditorBase(survey, question);
  expect(editor.allConditionQuestions).toHaveLength(1);
  expect(editor.allConditionQuestions[0].value).toEqual("q2");

  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q2";
  var valueQuestion = panel.getQuestionByName("questionValue");
  expect(valueQuestion.visibleChoices).toHaveLength(2);
});
test("Error in value input, Bug# T2598 (customer marked it private)", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "checkbox", choices: [1, 2, 3] },
      { name: "q2", type: "checkbox", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: ["a", "b"] },
      { name: "q4", type: "text" },
    ],
  });
  var question = survey.getQuestionByName("q2");

  var editor = new ConditionEditorBase(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q1";
  panel.getQuestionByName("questionValue").value = 1;
  expect(editor.text).toEqual("{q1} = [1]");
  panel.getQuestionByName("questionName").value = "q3";
  expect(editor.isReady).toEqual(false);
  expect(editor.text).toEqual("");
});
test("Could not edit value for row.column1 on editing column, Bug# T3376 (customer marked it private)", () => {
  var survey = new SurveyModel({
    elements: [
      {
        name: "question1",
        type: "matrixdynamic",
        columns: [{ name: "Column1" }, { name: "Column2" }],
        choices: [1, 2, 3, 4, 5],
      },
    ],
  });
  var question = <QuestionMatrixDynamicModel>(
    survey.getQuestionByName("question1")
  );

  var editor = new ConditionEditorBase(survey, question.columns[0]);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "row.Column2";
  var questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue.getType()).toEqual("dropdown");
});
test("Question has defaultValue and user could not add condition with it, Bug# T2778 (customer marked it private)", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "radiogroup", choices: [1, 2, 3], defaultValue: 1 },
      { name: "q2", type: "text" },
    ],
  });
  var question = survey.getQuestionByName("q2");

  var editor = new ConditionEditorBase(survey, question);
  expect(editor.isReady).toEqual(false);
  var panel = editor.panel.panels[0];
  var questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue).toBeFalsy();
  panel.getQuestionByName("questionName").value = "q1";
  questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue.value).toEqual(1);
  expect(editor.isReady).toEqual(true);
});
test("isReady for empty/non empty", () => {
  var survey = new SurveyModel({
    elements: [
      {
        name: "q1",
        title: "Question 1",
        type: "radiogroup",
        choices: [
          { value: 1, text: "Item 1" },
          { value: 2, text: "Item 2" },
          { value: 3, text: "Item 3" },
        ],
      },
      { name: "q2", type: "text" },
    ],
  });
  var question = survey.getQuestionByName("q2");

  var editor = new ConditionEditorBase(survey, question);
  expect(editor.isReady).toEqual(false);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q1";
  expect(editor.isReady).toEqual(false);
  panel.getQuestionByName("operator").value = "empty";
  expect(editor.isReady).toEqual(true);
  expect(editor.text).toEqual("{q1} empty");
  panel.getQuestionByName("operator").value = "equal";
  expect(editor.isReady).toEqual(false);
});
test("set invalid expression", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "text" },
    ],
  });
  var question = survey.getQuestionByName("q2");

  var editor = new ConditionEditorBase(survey, question);
  editor.text = "{q1} = ";
  expect(editor.isReady).toEqual(false);
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionName").isEmpty()).toEqual(true);
});
test("enabled operators", () => {
  var survey = new SurveyModel({
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
          { cellType: "checkbox", name: "col3" },
        ],
      },
      {
        name: "qMatrixdynamic",
        type: "matrixdynamic",
        rowCount: 2,
        columns: [
          { cellType: "text", name: "col1" },
          { cellType: "radiogroup", name: "col2" },
          { cellType: "checkbox", name: "col3" },
        ],
      },
      { name: "qMultipletext", type: "multipletext" },
    ],
  });
  var question = survey.getQuestionByName("q1");

  var editor = new ConditionEditorBase(survey, question);
  var checkFun = function (questionName: string, operatorNames: Array<string>) {
    var panel = editor.panel.panels[0];
    panel.getQuestionByName("questionName").value = questionName;
    var choices = panel.getQuestionByName("operator").choices;
    for (var i = 0; i < choices.length; i++) {
      var isItemEnabled = choices[i].isEnabled;
      var operatorName = choices[i].value;
      expect(
        isItemEnabled && operatorNames.indexOf(operatorName) < 0
      ).toBeFalsy();
      expect(
        !isItemEnabled && operatorNames.indexOf(operatorName) > -1
      ).toBeFalsy();
    }
  };
  var checkFunMultiple = function (
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
      "qExpression",
      "qMatrixdropdown.row1.col1",
      "qMatrixdynamic[0].col1",
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
      "lessorequal",
    ]
  );
  checkFunMultiple(
    [
      "qRadio",
      "qDropdown",
      "qMatrix.row1",
      "qMatrixdropdown.row1.col2",
      "qMatrixdynamic[0].col2",
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
      "lessorequal",
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
      "allof",
    ]
  );
  checkFun("qBoolean", ["empty", "notempty", "equal", "notequal"]);
  checkFunMultiple(
    ["qRating"],
    [
      "empty",
      "notempty",
      "equal",
      "notequal",
      "greater",
      "less",
      "greaterorequal",
      "lessorequal",
    ]
  );
  checkFun("qFile", ["empty", "notempty"]);
  checkFun("qImagepicker", ["empty", "notempty", "equal", "notequal", "anyof"]);
});
