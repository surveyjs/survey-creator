import {
  SurveyModel,
  Question,
  QuestionMatrixDropdownModel,
  QuestionMatrixDynamicModel,
  QuestionDropdownModel,
  QuestionRadiogroupModel,
  QuestionPanelDynamicModel,
  ItemValue,
  QuestionTextModel,
  ComponentCollection,
  QuestionCheckboxModel
} from "survey-core";
import { ConditionEditor, ConditionEditorItemsBuilder } from "../../src/property-grid/condition-survey";
import { settings, EmptySurveyCreatorOptions } from "../../src/creator-settings";

export * from "../../src/components/link-value";

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
      { type: "text", name: "question3" }
    ]
  });
  var conditionEditor = new ConditionEditor(
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
      { type: "text", name: "q2" }
    ]
  });
  var conditionEditor = new ConditionEditor(
    survey,
    survey.getQuestionByName("q1")
  );
  expect(conditionEditor.title).toEqual("Rule is incorrect");
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
  expect(conditionEditor.title).toEqual("{q} = 1 and {q2} = 2");
});
test("Custom text for condition title", () => {
  const survey = new SurveyModel({
    questions: [
      { type: "text", name: "q1" },
      { type: "text", name: "q" },
      { type: "text", name: "q2" }
    ]
  });
  const options = new EmptySurveyCreatorOptions();
  options.onConditionGetTitleCallback = (expression: string, title: string): string => {
    if (!expression) return "Please setup the expression";
    return "Your expression is: " + title;
  };
  const conditionEditor = new ConditionEditor(survey, survey.getQuestionByName("q1"), options);
  expect(conditionEditor.title).toEqual("Please setup the expression");
  conditionEditor.text = "{q} = 1";
  expect(conditionEditor.title).toEqual("Your expression is: {q} = 1");
  conditionEditor.panel.addPanel();
  expect(conditionEditor.title).toEqual("Please setup the expression");
  var editPanel = conditionEditor.panel.panels[1];
  var nameQuestion = editPanel.getQuestionByName("questionName");
  nameQuestion.value = "q2";
  editPanel.getQuestionByName("questionValue").value = 2;
  expect(conditionEditor.title).toEqual("Your expression is: {q} = 1 and {q2} = 2");
});

test("Do not delete the only condition, but clear it", () => {
  var survey = new SurveyModel({
    questions: [
      { type: "text", name: "q1" },
      { type: "text", name: "q" },
      { type: "text", name: "q2" }
    ]
  });
  var conditionEditor = new ConditionEditor(
    survey,
    survey.getQuestionByName("q1")
  );
  conditionEditor.text = "{q} = 1";
  expect(conditionEditor.panel.panelCount).toEqual(1);
  expect(conditionEditor.isReady).toEqual(true);
  conditionEditor.panel.removePanel(0);
  expect(conditionEditor.panel.panelCount).toEqual(1);
  expect(conditionEditor.isReady).toEqual(false);
  var editPanel = conditionEditor.panel.panels[0];
  var nameQuestion = editPanel.getQuestionByName("questionName");
  expect(nameQuestion.isEmpty()).toBeTruthy();
});

test("addCondition quotes - https://surveyjs.answerdesk.io/ticket/details/T2679", () => {
  var survey = new SurveyModel({
    questions: [
      { type: "text", name: "q1" },
      { type: "dropdown", name: "q2" }
    ]
  });
  var editor = new ConditionEditor(survey, survey.getQuestionByName("q1"));
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
      { type: "dropdown", name: "q2" }
    ]
  });
  var editor = new ConditionEditor(survey, survey.getQuestionByName("q1"));
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
        name: "pd",
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
  var pd = <QuestionPanelDynamicModel>survey.getQuestionByName("pd");
  var editor = new ConditionEditor(survey, pd.template.getQuestionByName("q1"));
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

  var editor = new ConditionEditor(survey, question);

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

  var editor = new ConditionEditor(survey, question);

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
test("Don't use dropdown question instead of readiogroup for editing values", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = <QuestionDropdownModel>page.addNewQuestion("text", "q1");
  var question2 = <QuestionRadiogroupModel>(page.addNewQuestion("radiogroup", "q2"));
  question2.choices = [1, 2, 3, 4];

  var editor = new ConditionEditor(survey, question);

  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q2";
  var valueQuestion = panel.getQuestionByName("questionValue");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.getType()).toEqual("radiogroup");
});
test("Add condition from wizard on apply, without pressing 'Add' button", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = page.addNewQuestion("text", "q1");
  var question2 = <Question>page.addNewQuestion("text", "q2");

  var editor = new ConditionEditor(survey, question);

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

  var editor = new ConditionEditor(survey, question);

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

  var editor = new ConditionEditor(survey, question);
  var res = [];
  for (var i = 0; i < editor.allConditionQuestions.length; i++) {
    var item = editor.allConditionQuestions[i];
    res.push({ value: item.value, text: item.text });
  }
  expect(res).toEqual([
    { value: "q2", text: "q2" },
    { value: "q3", text: "q3" }
  ]);
});
test("allCondtionQuestions for choices in a question", () => {
  const survey = new SurveyModel();
  const page = survey.addNewPage("p");
  const question = <QuestionDropdownModel>(
    page.addNewQuestion("radiogroup", "q1")
  );
  question.choices = [1, 2, 3];
  page.addNewQuestion("text", "q2");
  question.columns.splice(0, question.columns.length);

  const editor = new ConditionEditor(survey, question.choices[0]);
  const condQuestions = editor.allConditionQuestions;
  expect(condQuestions).toHaveLength(1);
  expect(condQuestions[0].value).toEqual("q2");
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

  var editor = new ConditionEditor(survey, column);
  expect(
    editor.allConditionQuestions.filter((e) => e.value === "row.col1").length > 0
  ).toBeTruthy();
  expect(
    editor.allConditionQuestions.filter((e) => e.value === "row.col2").length > 0
  ).toBeFalsy();
});
test("allCondtionQuestions for choices in matrix column", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = <QuestionMatrixDropdownModel>(
    page.addNewQuestion("matrixdropdown", "q1")
  );
  question.columns.splice(0, question.columns.length);
  question.addColumn("col1");
  const column = question.addColumn("col2");
  column.cellType = "dropdown";
  (<any>column).choices = [1, 2, 3];
  question.addColumn("col3");

  const editor = new ConditionEditor(survey, (<any>column).choices[0]);
  expect(
    editor.allConditionQuestions.filter((e) => e.value === "row.col1").length > 0
  ).toBeTruthy();
  expect(
    editor.allConditionQuestions.filter((e) => e.value === "row.col2").length > 0
  ).toBeFalsy();
});
test("allCondtionQuestions for panel dynamic", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = <QuestionPanelDynamicModel>(
    page.addNewQuestion("paneldynamic", "panel1")
  );
  question.template.addNewQuestion("text", "q1");
  question.template.addNewQuestion("text", "q2");
  question.template.addNewQuestion("text", "q3");
  question.panelCount = 1;
  var panelQuestion = question.template.questions[1];

  var editor = new ConditionEditor(survey, panelQuestion);
  expect(
    editor.allConditionQuestions.filter((e) => e.value === "panel.q1").length > 0
  ).toBeTruthy();
  expect(
    editor.allConditionQuestions.filter((e) => e.value === "panel.q2").length > 0
  ).toBeFalsy();
});
test("allCondtionQuestions for choices in question in panel dynamic", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = <QuestionPanelDynamicModel>(
    page.addNewQuestion("paneldynamic", "panel1")
  );
  question.template.addNewQuestion("text", "q1");
  const panelQuestion = <QuestionDropdownModel>question.template.addNewQuestion("dropdown", "q2");
  panelQuestion.choices = [1, 2, 3];
  question.template.addNewQuestion("text", "q3");
  question.panelCount = 1;

  var editor = new ConditionEditor(survey, panelQuestion.choices[0]);
  expect(
    editor.allConditionQuestions.filter((e) => e.value === "panel.q1").length > 0
  ).toBeTruthy();
  expect(
    editor.allConditionQuestions.filter((e) => e.value === "panel.q2").length > 0
  ).toBeFalsy();
});
test("Show invisible choices and make all choices enabled, Bug: https://surveyjs.answerdesk.io/ticket/details/T1921", () => {
  var survey = new SurveyModel();
  var page = survey.addNewPage("p");
  var question = page.addNewQuestion("text", "q1");
  var radioQuestion = <QuestionDropdownModel>page.addNewQuestion("dropdown", "q2");
  radioQuestion.choices = [
    { value: 1, visibleIf: "{a} = 1" },
    { value: 1, enabledIf: "{b} = 1" }
  ];

  var editor = new ConditionEditor(survey, question);
  expect(editor.allConditionQuestions).toHaveLength(1);
  expect(editor.allConditionQuestions[0].value).toEqual("q2");

  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q2";
  var valueQuestion = panel.getQuestionByName("questionValue");
  expect(valueQuestion.visibleChoices).toHaveLength(2);
});
test("Show choices from carry-forward, bug#4243", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "checkbox", name: "q1", choices: [10, 20, 30] },
      { type: "dropdown", name: "q2", choicesFromQuestion: "q1", choicesFromQuestionMode: "selected" },
      { type: "text", name: "q3" },
    ]
  });
  const question = survey.getQuestionByName("q3");

  var editor = new ConditionEditor(survey, question);
  expect(editor.allConditionQuestions).toHaveLength(2);
  expect(editor.allConditionQuestions[1].value).toEqual("q2");

  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q2";
  var valueQuestion = panel.getQuestionByName("questionValue");
  expect(valueQuestion.visibleChoices).toHaveLength(3);
  expect(valueQuestion.visibleChoices[0].value).toBe(10);
  expect(valueQuestion.visibleChoices[2].value).toBe(30);
});
test("Error in value input, Bug# T2598 (customer marked it private)", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "checkbox", choices: [1, 2, 3] },
      { name: "q2", type: "checkbox", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: ["a", "b"] },
      { name: "q4", type: "text" }
    ]
  });
  var question = survey.getQuestionByName("q2");

  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q1";
  panel.getQuestionByName("questionValue").value = [1];
  expect(editor.text).toEqual("{q1} allof [1]");
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
        choices: [1, 2, 3, 4, 5]
      }
    ]
  });
  var question = <QuestionMatrixDynamicModel>(
    survey.getQuestionByName("question1")
  );

  var editor = new ConditionEditor(survey, question.columns[0]);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "row.Column2";
  var questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue.getType()).toEqual("dropdown");
});
test("Question has defaultValue and user could not add condition with it, Bug# T2778 (customer marked it private)", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "radiogroup", choices: [1, 2, 3], defaultValue: 1 },
      { name: "q2", type: "text" }
    ]
  });
  var question = survey.getQuestionByName("q2");

  var editor = new ConditionEditor(survey, question);
  expect(editor.isReady).toEqual(false);
  var panel = editor.panel.panels[0];
  var questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue.isReadOnly).toBeTruthy();
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
          { value: 3, text: "Item 3" }
        ]
      },
      { name: "q2", type: "text" }
    ]
  });
  var question = survey.getQuestionByName("q2");

  var editor = new ConditionEditor(survey, question);
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
      { name: "q2", type: "text" }
    ]
  });
  var question = survey.getQuestionByName("q2");

  var editor = new ConditionEditor(survey, question);
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

  var editor = new ConditionEditor(survey, question);
  var checkFun = function (questionName: string, operatorNames: Array<string>) {
    var panel = editor.panel.panels[0];
    panel.getQuestionByName("questionName").value = questionName;
    var choices = panel.getQuestionByName("operator").choices;
    for (var i = 0; i < choices.length; i++) {
      const isItemEnabled = choices[i].isEnabled;
      const isItemVisible = choices[i].isVisible;
      var operatorName = choices[i].value;
      expect(isItemEnabled && operatorNames.indexOf(operatorName) < 0).toBeFalsy();
      expect(!isItemEnabled && operatorNames.indexOf(operatorName) > -1).toBeFalsy();
      expect(isItemVisible && operatorNames.indexOf(operatorName) < 0).toBeFalsy();
      expect(!isItemVisible && operatorNames.indexOf(operatorName) > -1).toBeFalsy();
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
    ["qRating"],
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
});
test("Keep condition value on changing operation when it possible", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "question1", type: "radiogroup", choices: ["item1", "item2"] }
    ]
  });
  var question = survey.getQuestionByName("q1");

  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "question1";
  panel.getQuestionByName("questionValue").value = "item1";
  panel.getQuestionByName("operator").value = "notequal";
  expect(panel.getQuestionByName("questionValue").value).toEqual("item1");
  panel.getQuestionByName("operator").value = "empty";
  expect(panel.getQuestionByName("questionValue").isEmpty()).toBeTruthy();
});
test("Selectbase + anyof", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "question1", type: "dropdown", choices: ["item1", "item2"] }
    ]
  });
  var question = survey.getQuestionByName("q1");

  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "question1";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual(
    "dropdown"
  );
  panel.getQuestionByName("operator").value = "anyof";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual(
    "checkbox"
  );
  panel.getQuestionByName("operator").value = "equal";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual(
    "dropdown"
  );
});
test("expression question", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "question1", type: "expression" }
    ]
  });
  var question = survey.getQuestionByName("q1");

  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "question1";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual("text");
});
test("Do not show question description", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      {
        name: "question1",
        type: "dropdown",
        choices: ["item1", "item2"],
        description: "Some text"
      }
    ]
  });
  var question = survey.getQuestionByName("q1");

  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "question1";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual(
    "dropdown"
  );
  expect(panel.getQuestionByName("questionValue").description).toBeFalsy();
});
test("Add apostrophes to string value", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "question1", type: "radiogroup", choices: ["item1", 1] },
      { name: "question2", type: "checkbox", choices: ["item1", 1] }
    ]
  });
  var question = survey.getQuestionByName("q1");

  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "question1";
  panel.getQuestionByName("questionValue").value = "item1";
  expect(editor.text).toEqual("{question1} = 'item1'");
  panel.getQuestionByName("questionValue").value = 1;
  expect(editor.text).toEqual("{question1} = 1");

  panel.getQuestionByName("operator").value = "anyof";
  panel.getQuestionByName("questionValue").value = ["item1", 1];
  expect(editor.text).toEqual("{question1} anyof ['item1', 1]");

  panel.getQuestionByName("questionName").value = "question2";
  panel.getQuestionByName("operator").value = "equal";
  panel.getQuestionByName("questionValue").value = ["item1", 1];
  expect(editor.text).toEqual("{question2} = ['item1', 1]");
});
test("Parse expressions", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: [1, 2, 3] },
      { name: "q4", type: "text", visibleIf: "{q1} = 'abc' and {q2} = 1" }
    ],
    calculatedValues: [{ name: "val1", expression: "{q1} + {q2}" }]
  });
  survey.setVariable("user", "admin");
  var question = survey.getQuestionByName("q4");
  var editor = new ConditionEditor(survey, question);
  editor.text = "{q1} = 'abc' or {q2} = 1 and {q2} = 2";
  expect(editor.isReady).toBeTruthy();
  expect(editor.panel.panels).toHaveLength(3);
  editor.text = "{q1} = 'abc' and ({q2} = 1 or {q2} = 2)";
  expect(editor.isReady).toBeFalsy();
  expect(editor.panel.panels).toHaveLength(1);
  editor.text = "{q1} empty";
  expect(editor.isReady).toBeTruthy();
  editor.text = "1 < {q1}";
  expect(editor.isReady).toBeTruthy();
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionName").value).toEqual("q1");
  expect(panel.getQuestionByName("operator").value).toEqual("greater");
  expect(panel.getQuestionByName("questionValue").value).toEqual(1);
  editor.text = "1 < {q11}";
  expect(editor.isReady).toBeFalsy();
  editor.text = "{q11} empty";
  expect(editor.isReady).toBeFalsy();
  editor.text = "not t";
  expect(editor.isReady).toBeFalsy();
  editor.text = "{q3} = [1, 2]";
  expect(editor.isReady).toBeTruthy();

  editor.text = "{user} = 'user1'";
  expect(editor.isReady).toBeTruthy();
  panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionName").value).toEqual("user");
  expect(panel.getQuestionByName("questionValue").getType()).toEqual("text");
  expect(panel.getQuestionByName("questionValue").value).toEqual("user1");

  editor.text = "{val1} = 2";
  expect(editor.isReady).toBeTruthy();
  panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionName").value).toEqual("val1");
  expect(panel.getQuestionByName("questionValue").getType()).toEqual("text");
  expect(panel.getQuestionByName("questionValue").value).toEqual(2);
});
test("Set variables to editSurvey based on 'questionValue'", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: [1, 2, 3] },
      { name: "q4", type: "text", visibleIf: "{q1} = 'abc' and {q2} = 1" }
    ]
  });
  const question = survey.getQuestionByName("q4");
  const editor = new ConditionEditor(survey, question, new EmptySurveyCreatorOptions(), "visibleIf");
  const panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionValue").value).toBe("abc");
  expect(editor.editSurvey.getVariable("q1")).toBe("abc");
  expect(editor.editSurvey.getVariable("q2")).toBe(1);
  panel.getQuestionByName("questionValue").value = "def";
  expect(editor.editSurvey.getVariable("q1")).toBe("def");
});
test("Parse calcaluted values, Bug #727 and Bug #740", () => {
  var survey = new SurveyModel({
    elements: [{ name: "q1", type: "text" }],
    calculatedValues: [
      {
        name: "var1",
        expression: "1"
      }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var editor = new ConditionEditor(survey, question);
  editor.text = "{var1} = 1";
  expect(editor.isReady).toBeTruthy();
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionName").value).toEqual("var1");
  expect(panel.getQuestionByName("questionValue").getType()).toEqual("text");
  expect(panel.getQuestionByName("questionValue").value).toEqual(1);

  editor.text = "{var1} notempty";
  expect(editor.isReady).toBeTruthy();
  panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionName").value).toEqual("var1");
  expect(panel.getQuestionByName("questionValue").isEmpty()).toBeTruthy();
});
test("Change questionName in panel", () => {
  var survey = new SurveyModel({
    elements: [
      { "name": "q1", "type": "text" },
      { "name": "q2", "type": "radiogroup", choices: [1, 2, 3] },
      { "name": "q3", "type": "checkbox", choices: [1, 2, 3] },
      { "name": "q4", "type": "text", visibleIf: "{q1} = 'abc'" }
    ]
  });
  var question = survey.getQuestionByName("q4");
  var editor = new ConditionEditor(survey, question);
  editor.text = "{q1} = 'abc'";
  expect(editor.isReady).toBeTruthy();
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionName").value).toEqual("q1");
  expect(panel.getQuestionByName("questionValue").getType()).toEqual("text");
  expect(panel.getQuestionByName("questionValue").value).toEqual("abc");

  panel.getQuestionByName("questionName").value = "q2";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual("radiogroup");

  panel.getQuestionByName("questionName").value = "q3";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual("checkbox");

  panel.getQuestionByName("questionName").value = "q2";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual("radiogroup");
  expect(panel.getQuestionByName("questionValue").choices).toHaveLength(3);

  panel.getQuestionByName("operator").value = "anyof";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual("checkbox");

  panel.getQuestionByName("operator").value = "equal";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual("radiogroup");
});
test("Create expression from scratch", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: [1, 2, 3] },
      { name: "q4", type: "text" }
    ]
  });
  var question = survey.getQuestionByName("q4");
  var editor = new ConditionEditor(survey, question);
  expect(editor.panel.panels).toHaveLength(1);
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionValue").isReadOnly).toBeTruthy();
  panel.getQuestionByName("questionName").value = "q1";
  panel.getQuestionByName("questionValue").value = "abc";
  expect(editor.text).toEqual("{q1} = 'abc'");
  expect(panel.getQuestionByName("conjunction").isVisible).toBeFalsy();
  editor.panel.addPanel();
  panel = editor.panel.panels[1];
  expect(panel.getQuestionByName("conjunction").isVisible).toBeTruthy();
  expect(panel.getQuestionByName("conjunction").choices).toHaveLength(2);
  expect(panel.getQuestionByName("conjunction").choices[0].value).toEqual(
    "and"
  );
  expect(panel.getQuestionByName("conjunction").choices[0].text).toEqual("and");
  expect(panel.getQuestionByName("conjunction").choices[1].value).toEqual("or");
  expect(panel.getQuestionByName("conjunction").choices[1].text).toEqual("or");
  panel.getQuestionByName("questionName").value = "q2";
  expect(editor.isReady).toBeFalsy();
  panel.getQuestionByName("questionValue").value = 2;
  expect(editor.text).toEqual("{q1} = 'abc' and {q2} = 2");
  panel.getQuestionByName("operator").value = "empty";
  expect(editor.text).toEqual("{q1} = 'abc' and {q2} empty");
  panel.getQuestionByName("conjunction").value = "or";
  expect(editor.text).toEqual("{q1} = 'abc' or {q2} empty");
  editor.panel.removePanel(0);
  expect(panel.getQuestionByName("conjunction").isVisible).toBeFalsy();
  expect(editor.text).toEqual("{q2} empty");
});

test.skip("Set question width", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: [1, 2, 3] },
      { name: "q4", type: "text" }
    ]
  });
  var question = survey.getQuestionByName("q4");
  var editor = new ConditionEditor(survey, question);
  expect(editor.panel.panels).toHaveLength(1);

  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionName").startWithNewLine).toBeFalsy();
  expect(panel.getQuestionByName("operator").startWithNewLine).toBeFalsy();
  expect(panel.getQuestionByName("questionValue").startWithNewLine).toBeFalsy();
  expect(panel.getQuestionByName("questionName").width).toEqual("40%");
  expect(panel.getQuestionByName("operator").width).toEqual("25%");
  expect(panel.getQuestionByName("questionValue").width).toEqual("35%");

  panel.getQuestionByName("questionName").value = "q3";
  expect(panel.getQuestionByName("questionName").startWithNewLine).toBeFalsy();
  expect(panel.getQuestionByName("operator").startWithNewLine).toBeFalsy();
  expect(
    panel.getQuestionByName("questionValue").startWithNewLine
  ).toBeTruthy();
  expect(panel.getQuestionByName("questionName").width).toEqual("40%");
  expect(panel.getQuestionByName("operator").width).toEqual("60%");
  expect(panel.getQuestionByName("questionValue").width).toEqual("");

  editor.panel.addPanel();
  panel = editor.panel.panels[1];
  expect(panel.getQuestionByName("questionName").startWithNewLine).toBeFalsy();
  expect(panel.getQuestionByName("operator").startWithNewLine).toBeFalsy();
  expect(panel.getQuestionByName("questionValue").startWithNewLine).toBeFalsy();
  expect(panel.getQuestionByName("conjunction").width).toEqual("15%");
  expect(panel.getQuestionByName("questionName").width).toEqual("25%");
  expect(panel.getQuestionByName("operator").width).toEqual("25%");
  expect(panel.getQuestionByName("questionValue").width).toEqual("35%");

  panel.getQuestionByName("questionName").value = "q3";
  expect(panel.getQuestionByName("questionName").startWithNewLine).toBeFalsy();
  expect(panel.getQuestionByName("operator").startWithNewLine).toBeFalsy();
  expect(
    panel.getQuestionByName("questionValue").startWithNewLine
  ).toBeTruthy();
  expect(panel.getQuestionByName("conjunction").width).toEqual("15%");
  expect(panel.getQuestionByName("questionName").width).toEqual("25%");
  expect(panel.getQuestionByName("operator").width).toEqual("60%");
  expect(panel.getQuestionByName("questionValue").width).toEqual("");
});

test("Set correct value for array, Bug #700", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text", visibleIf: "{q2} = ['item1', 'item3']" },
      { name: "q2", type: "checkbox", choices: ["item1", "item2", "item3"] }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var editor = new ConditionEditor(survey, question);
  editor.text = "{q2} = ['item1', 'item3']";
  expect(editor.isReady).toBeTruthy();
  var panel = editor.panel.panels[0];
  var val = panel.getQuestionByName("questionValue").value;
  expect(val).toHaveLength(2);
  expect(val).toContain("item1");
  expect(val).toContain("item3");
});
test("anyof/allof is enabled on editing, Bug #804", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      {
        name: "q2",
        type: "checkbox",
        choices: ["item1", "item2", "item3"],
        visibleIf: "{q1} = 'a'"
      }
    ]
  });
  var question = survey.getQuestionByName("q2");
  var editor = new ConditionEditor(survey, question);
  editor.text = "{q1} = 'a'";
  const panel = editor.panel.panels[0];
  const opQuestion = <QuestionDropdownModel>panel.getQuestionByName("operator");
  opQuestion.onOpenedCallBack();
  const opChoices = opQuestion.choices;
  const itemValue = ItemValue.getItemByValue(opChoices, "anyof");
  expect(itemValue.isEnabled).toBeFalsy();
  expect(itemValue.isVisible).toBeFalsy();
});
test("remove operators", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      {
        name: "q2",
        type: "checkbox",
        choices: ["item1", "item2", "item3"],
        visibleIf: "{q1} = 'a'"
      }
    ]
  });
  const containsValue = settings.operators.contains;
  const anyofValue = settings.operators.anyof;
  settings.operators.contains = ["checkbox"];
  settings.operators.anyof = ["checkbox"];
  const question = survey.getQuestionByName("q2");
  const editor = new ConditionEditor(survey, question);
  editor.text = "{q1} = 'a'";
  const panel = editor.panel.panels[0];
  const opQuestion = <QuestionDropdownModel>panel.getQuestionByName("operator");
  opQuestion.onOpenedCallBack();
  const opChoices = opQuestion.choices;
  expect(ItemValue.getItemByValue(opChoices, "anyof").isVisible).toBeFalsy();
  expect(ItemValue.getItemByValue(opChoices, "contains").isVisible).toBeFalsy();
  expect(ItemValue.getItemByValue(opChoices, "equal").isVisible).toBeTruthy();
  settings.operators.contains = containsValue;
  settings.operators.anyof = anyofValue;
});
test("Change operators via callback", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text", visibleIf: "{q2} = 'a'" },
      {
        name: "q2",
        type: "checkbox",
        choices: ["item1", "item2", "item3"]
      }
    ]
  });
  const question = survey.getQuestionByName("q1");
  const options = new EmptySurveyCreatorOptions();
  let evnt_questionType: string = "";
  options.isConditionOperatorEnabled = (questionName: string, question: Question, operator: string, isEnabled: boolean): boolean => {
    if (questionName === "q2" && ["contains", "anyof"].indexOf(operator) > -1) return false;
    evnt_questionType = question.getType();
    return isEnabled;
  };
  const editor = new ConditionEditor(survey, question, options, "visibleIf");
  const panel = editor.panel.panels[0];
  const qOperator = <QuestionDropdownModel>panel.getQuestionByName("operator");
  qOperator.onOpenedCallBack();
  expect(ItemValue.getItemByValue(qOperator.visibleChoices, "anyof").isVisible).toBeFalsy();
  expect(ItemValue.getItemByValue(qOperator.visibleChoices, "contains").isVisible).toBeFalsy();
  expect(ItemValue.getItemByValue(qOperator.visibleChoices, "equal").isVisible).toBeTruthy();
  expect(evnt_questionType).toBe("checkbox");
});
test("file question type should not set operator to 'equal'", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      {
        name: "q2",
        type: "file"
      },
      { name: "q3", type: "text" }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q2";
  expect(panel.getQuestionByName("operator").value).toEqual("empty");
  expect(panel.getQuestionByName("questionValue")).toBeFalsy();
  panel.getQuestionByName("questionName").value = "q3";
  expect(panel.getQuestionByName("operator").value).toEqual("equal");
  expect(panel.getQuestionByName("questionValue")).toBeTruthy();
});

test("onConditionQuestionsGetListCallback", () => {
  var survey = new SurveyModel({
    elements: [{ name: "q1", type: "text" }]
  });
  var question = survey.getQuestionByName("q1");
  var survey2 = new SurveyModel({
    elements: [
      { name: "question1", type: "dropdown", choices: ["item1", "item2"] }
    ]
  });
  var options = new EmptySurveyCreatorOptions();
  var propName = "";
  options.onConditionQuestionsGetListCallback = (
    propertyName: string,
    object: any,
    editor: any,
    res: any[],
    variables: string[]
  ): string => {
    propName = propertyName;
    res.push(survey2.getQuestionByName("question1"));
    return "";
  };
  var editor = new ConditionEditor(survey, question, options, "visibleIf");
  expect(propName).toEqual("visibleIf");
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "question1";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual(
    "dropdown"
  );
});
test("Add ability to remove variables onConditionQuestionsGetListCallback #5710", () => {
  const survey = new SurveyModel({
    elements: [{ name: "q1", type: "text" }, { name: "q2", type: "text" }]
  });
  survey.setVariable("abc", 1);
  survey.setVariable("edf", 1);
  const question = survey.getQuestionByName("q1");
  const options = new EmptySurveyCreatorOptions();
  options.onConditionQuestionsGetListCallback = (
    propertyName: string,
    object: any,
    editor: any,
    res: any[],
    variables: string[]
  ): string => {
    variables.splice(0, 1);
    return "";
  };
  const editor = new ConditionEditor(survey, question, options, "visibleIf");
  const panel = editor.panel.panels[0];
  const dropdownQuestion = <QuestionDropdownModel>panel.getQuestionByName("questionName");
  expect(dropdownQuestion.choices).toHaveLength(2);
  expect(dropdownQuestion.choices[0].value).toBe("q2");
  expect(dropdownQuestion.choices[1].value).toBe("edf");
});
test("getObjectDisplayName", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", title: "Question 2", type: "text" }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var options = new EmptySurveyCreatorOptions();
  options.getObjectDisplayName = (
    obj: any,
    area: string,
    reason: string,
    displayName
  ): string => {
    return obj.title + " [" + obj.name + "]";
  };
  var editor = new ConditionEditor(survey, question, options, "visibleIf");
  var panel = editor.panel.panels[0];
  var questionName = panel.getQuestionByName("questionName");
  expect(questionName.choices).toHaveLength(1);
  expect(questionName.choices[0].value).toEqual("q2");
  expect(questionName.choices[0].text).toEqual("Question 2 [q2]");
});
test("show calculated values", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "text" }
    ],
    calculatedValues: [
      { name: "val1", expression: "{q2} + 2" }
    ],
  });
  var question = survey.getQuestionByName("q1");
  var options = new EmptySurveyCreatorOptions();
  var editor = new ConditionEditor(survey, question, options, "visibleIf");
  var panel = editor.panel.panels[0];
  var questionName = panel.getQuestionByName("questionName");
  expect(questionName.choices).toHaveLength(2);
  expect(questionName.choices[0].value).toEqual("q2");
  expect(questionName.choices[1].value).toEqual("val1");
});
test("options.maxLogicItemsInCondition, hide `Add Condition` on exceeding the value", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", title: "Question 2", type: "text" }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var options = new EmptySurveyCreatorOptions();
  options.maxLogicItemsInCondition = 2;
  options.getObjectDisplayName = (
    obj: any,
    area: string,
    reason: string,
    displayName
  ): string => {
    return obj.title + " [" + obj.name + "]";
  };
  var editor = new ConditionEditor(survey, question, options, "visibleIf");
  expect(editor.panel.maxPanelCount).toEqual(1);

  editor.panel.addPanel();
  expect(editor.panel.maxPanelCount).toEqual(2);
});

test("valueName with ':', Bug #953", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text", valueName: "profile:q1" },
      {
        name: "q2",
        type: "text"
      }
    ]
  });
  var question = survey.getQuestionByName("q2");
  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "profile:q1";
  panel.getQuestionByName("questionValue").value = "1";
  expect(editor.text).toEqual("{profile:q1} = 1");
});
test("convert 000 into '000'", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      {
        name: "q2",
        type: "text"
      }
    ]
  });
  var question = survey.getQuestionByName("q2");
  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q1";
  panel.getQuestionByName("questionValue").value = "000";
  expect(editor.text).toEqual("{q1} = '000'");
});
test("do not convert '000' into 0", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      {
        name: "q2",
        type: "text",
        visibleIf: "{q1} = '000'"
      }
    ]
  });
  var question = survey.getQuestionByName("q2");
  var editor = new ConditionEditor(survey, question);
  editor.text = "{q1} = '000'";
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionValue").value).toEqual("000");
  panel.getQuestionByName("questionValue").value = "00000";
  expect(editor.text).toEqual("{q1} = '00000'");
});
test("SurveyPropertyConditionEditor dynamic matrix in dynamic panel, Bug #1072", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      {
        name: "dp",
        type: "paneldynamic",
        panelCount: 2,
        templateElements: [
          {
            name: "q2",
            type: "text"
          },
          {
            name: "matrix",
            type: "matrixdynamic",
            choices: [1, 2, 3],
            columns: [{ name: "col1", cellType: "dropdown" }, { name: "col2" }],
            rowCount: 1
          }
        ]
      }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "dp[0].matrix[0].col1";
  expect(panel.getQuestionByName("questionValue").getType()).toEqual(
    "dropdown"
  );
  expect(panel.getQuestionByName("questionValue").choices).toHaveLength(3);
});

test("Check text for add panel button", () => {
  var editor = new ConditionEditor(
    new SurveyModel(),
    new QuestionTextModel("q1")
  );
  expect(editor.panel.panelAddText).toEqual("Add Condition");
});
test("Show rating/ranking in new line", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "rating" },
      { name: "q4", type: "ranking", choices: [1, 2, 3] }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  var questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue.titleLocation).toEqual("top");
  expect(questionValue.startWithNewLine).toBeTruthy();

  panel.getQuestionByName("questionName").value = "q3";
  questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue.titleLocation).toEqual("top");
  expect(questionValue.startWithNewLine).toBeTruthy();

  panel.getQuestionByName("questionName").value = "q4";
  questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue.titleLocation).toEqual("top");
  expect(questionValue.startWithNewLine).toBeTruthy();

  panel.getQuestionByName("questionName").value = "q2";
  questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue.titleLocation).toEqual("top");
  expect(questionValue.startWithNewLine).toBeTruthy();
});
test("Make question value invisible for empty/notempty if they are in the new line", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "ranking", choices: [1, 2, 3] }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var editor = new ConditionEditor(survey, question);
  editor.isModal = false;
  var panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q1";
  panel.getQuestionByName("operator").value = "equal";
  var questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue.startWithNewLine).toBeTruthy();
  expect(questionValue.isReadOnly).toBeFalsy();
  expect(questionValue.isVisible).toBeTruthy();
  panel.getQuestionByName("operator").value = "empty";
  expect(questionValue.startWithNewLine).toBeTruthy();
  expect(questionValue.isVisible).toBeFalsy();

  panel.getQuestionByName("questionName").value = "q2";
  panel.getQuestionByName("operator").value = "equal";
  var questionValue = panel.getQuestionByName("questionValue");
  expect(questionValue.startWithNewLine).toBeTruthy();
  expect(questionValue.isReadOnly).toBeFalsy();
  expect(questionValue.isVisible).toBeTruthy();
  panel.getQuestionByName("operator").value = "empty";
  expect(questionValue.startWithNewLine).toBeTruthy();
  expect(questionValue.isVisible).toBeFalsy();
});
test("Set minWidth property to question correctly", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: [1, 2, 3] }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var editor = new ConditionEditor(survey, question);
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("questionName").minWidth).toEqual("50px");
  expect(panel.getQuestionByName("operator").minWidth).toEqual("50px");
  expect(panel.getQuestionByName("questionValue").minWidth).toEqual("50px");
  editor.panel.addPanel();
  panel = editor.panel.panels[1];
  expect(panel.getQuestionByName("conjunction").minWidth).toEqual("50px");
  expect(panel.getQuestionByName("questionName").minWidth).toEqual("50px");
  expect(panel.getQuestionByName("operator").minWidth).toEqual("50px");
  expect(panel.getQuestionByName("questionValue").minWidth).toEqual("50px");
});
test("setIsFastEntry method, not a modal mode", () => {
  const survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text", visibleIf: "{q2} = 1" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: [1, 2, 3] }
    ]
  });
  const question = survey.getQuestionByName("q1");
  const editor = new ConditionEditor(survey, question, undefined, "visibleIf");
  expect(editor.panel.titleLocation).toEqual("hidden");
  editor.isModal = false;
  expect(editor.panel.visible).toBeTruthy();
  expect(editor.textEditor.visible).toBeFalsy();
  expect(editor.text).toEqual("{q2} = 1");

  editor.setIsFastEntry(true);
  expect(editor.panel.visible).toBeFalsy();
  expect(editor.textEditor.visible).toBeTruthy();
  expect(editor.textEditor.value).toEqual("{q2} = 1");
  expect(editor.text).toEqual("{q2} = 1");

  editor.textEditor.value = "{q2} = 2";
  expect(editor.text).toEqual("{q2} = 2");

  editor.setIsFastEntry(false);
  expect(editor.panel.visible).toBeTruthy();
  expect(editor.textEditor.visible).toBeFalsy();
  expect(editor.text).toEqual("{q2} = 2");
});
test("Set text property, not a modal mode", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: [1, 2, 3] }
    ]
  });
  var question = survey.getQuestionByName("q1");
  var editor = new ConditionEditor(survey, question);
  editor.isModal = false;
  editor.text = "{q2} = 1";
  expect(editor.panel.visible).toBeTruthy();
  expect(editor.textEditor.visible).toBeFalsy();
  expect(editor.text).toEqual("{q2} = 1");
  editor.text = "{q2} = 1 dskfjsdfjds";
  expect(editor.panel.visible).toBeFalsy();
  expect(editor.textEditor.visible).toBeTruthy();
  expect(editor.text).toEqual("{q2} = 1 dskfjsdfjds");
  editor.text = "{q2} = 2";
  expect(editor.panel.visible).toBeTruthy();
  expect(editor.textEditor.visible).toBeFalsy();
  expect(editor.text).toEqual("{q2} = 2");
});
test("Can parse expression", () => {
  expect(ConditionEditor.canBuildExpression("{q1} = 1")).toBeTruthy();
  expect(ConditionEditor.canBuildExpression("age({q1}) = 1")).toBeFalsy();
});
test("questionName choices", () => {
  const survey = new SurveyModel({
    elements: [
      { name: "question 1", type: "text" },
      { name: "question 11", type: "text" },
      { name: "question 2", type: "text" },
      { name: "question 10", type: "text" },
    ]
  });
  const question = survey.getQuestionByName("q4");
  const editor = new ConditionEditor(survey, question);
  const panel = editor.panel.panels[0];
  const choices = panel.getQuestionByName("questionName").choices;
  expect(choices).toHaveLength(4);
  expect(choices[0].text).toEqual("question 1");
  expect(choices[1].text).toEqual("question 2");
  expect(choices[2].text).toEqual("question 10");
  expect(choices[3].text).toEqual("question 11");
});
test("questionName choices and calculated values", () => {
  const survey = new SurveyModel({
    elements: [{ type: "text", name: "q1" }],
    calculatedValues: [{ name: "defaultSetValue", expression: "false" }]
  });
  const question = survey.getQuestionByName("q1");
  const editor = new ConditionEditor(survey, question);
  const panel = editor.panel.panels[0];
  const choices = panel.getQuestionByName("questionName").choices;
  expect(choices).toHaveLength(1);
  expect(choices[0].text).toEqual("defaultSetValue");
});
test("questionName title visibility", () => {
  const survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "text" },
      { name: "q3", type: "text" },
      { name: "q4", type: "text" },
    ]
  });
  const question = survey.getQuestionByName("q4");
  const editor = new ConditionEditor(survey, question);
  let panel1 = editor.panel.panels[0];
  expect(panel1.getQuestionByName("questionName").titleLocation).toEqual("left");
  editor.panel.addPanel();
  let panel2 = editor.panel.panels[1];
  expect(panel2.getQuestionByName("questionName").titleLocation).toEqual("hidden");

  editor.text = "{q1}=1 and {q2}=2";
  expect(editor.panel.panels).toHaveLength(2);
  panel1 = editor.panel.panels[0];
  expect(panel1.getQuestionByName("questionName").titleLocation).toEqual("left");
  panel2 = editor.panel.panels[1];
  expect(panel2.getQuestionByName("questionName").titleLocation).toEqual("hidden");
});
test("isModified", () => {
  const survey = new SurveyModel({
    questions: [
      { type: "text", name: "q1" },
      { type: "text", name: "q" },
      { type: "text", name: "q2" }
    ]
  });
  const conditionEditor = new ConditionEditor(survey, survey.getQuestionByName("q1"));
  expect(conditionEditor.isModified("")).toBeFalsy();
  conditionEditor.text = "{q} > 2";
  expect(conditionEditor.isModified("")).toBeTruthy();
  expect(conditionEditor.isModified("{q}   > 2")).toBeFalsy();
  conditionEditor.panel.removePanel(0);
  expect(conditionEditor.isModified("")).toBeFalsy();
  expect(conditionEditor.isModified("{q} > 2")).toBeTruthy();
  conditionEditor.text = "{q} > 2";
  conditionEditor.setIsFastEntry(true);
  expect(conditionEditor.isModified("{q} > 2")).toBeFalsy();
  conditionEditor.text = "{q} >   2";
  expect(conditionEditor.isModified("{q} > 2")).toBeFalsy();
});
test("Set and remove condition editor context based on matrix dynamic", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "matrixdynamic", name: "q1", choices: [1, 2, 3, 4],
        columns: [{ name: "col1" }, { name: "col2" }, { name: "col3" }]
      },
      { type: "text", name: "q2" },
      {
        type: "matrixdynamic", name: "q3",
        columns: [{ name: "col1" }, { name: "col2" }, { name: "col3" }]
      },
    ]
  });
  const conditionEditor = new ConditionEditor(survey);
  expect(conditionEditor.context).toBeFalsy();
  const firstPanel = conditionEditor.panel.panels[0];
  const questionName = <QuestionDropdownModel>firstPanel.getQuestionByName("questionName");
  expect(questionName.choices).toHaveLength(3 * 2 + 1 + 3 * 2);
  questionName.value = "q1.row.col1";
  let questionValue = firstPanel.getQuestionByName("questionValue");
  expect(questionValue.getType()).toEqual("dropdown");
  expect((<QuestionDropdownModel>questionValue).choices).toHaveLength(4);
  expect(conditionEditor.context).toBeTruthy();
  expect(conditionEditor.context.name).toEqual("q1");
  expect(questionName.choices).toHaveLength(3 * 2 + 1 + 3);
  questionName.value = "q2";
  expect(conditionEditor.context).toBeFalsy();
  expect(questionName.choices).toHaveLength(3 * 2 + 1 + 3 * 2);
  questionName.value = "q1.row.col1";
  questionValue = firstPanel.getQuestionByName("questionValue");
  questionValue.value = 3;
  expect(conditionEditor.text).toEqual("{row.col1} = 3");
});
test("Setup context initially for column", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "matrixdynamic", name: "q1", choices: [1, 2, 3, 4],
        columns: [{ name: "col1" }, { name: "col2" }, { name: "col3" }]
      },
      { type: "text", name: "q2" },
      {
        type: "matrixdynamic", name: "q3",
        columns: [{ name: "col1" }, { name: "col2" }, { name: "col3" }]
      },
    ]
  });
  const conditionEditor = new ConditionEditor(survey);
  conditionEditor.context = survey.getQuestionByName("q1");
  conditionEditor.text = "{row.col1} = 2";
  expect(conditionEditor.context).toBeTruthy();
  expect(conditionEditor.context.name).toEqual("q1");
  const firstPanel = conditionEditor.panel.panels[0];
  const questionName = <QuestionDropdownModel>firstPanel.getQuestionByName("questionName");
  expect(questionName.choices).toHaveLength(3 * 2 + 1 + 3);
  expect(questionName.value).toEqual("q1.row.col1");
});
test("Set and remove condition editor context based on panel dynamic", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "paneldynamic", name: "q1",
        templateElements: [{ type: "text", name: "q1_col1" }, { type: "text", name: "q1_col2" }, { type: "text", name: "q1_col3" }]
      },
      { type: "text", name: "q2" },
      {
        type: "paneldynamic", name: "q3",
        templateElements: [{ type: "text", name: "q2_col1" }, { type: "text", name: "q2_col2" }, { type: "text", name: "q2_col3" }]
      },
    ]
  });
  const conditionEditor = new ConditionEditor(survey);
  expect(conditionEditor.context).toBeFalsy();
  const firstPanel = conditionEditor.panel.panels[0];
  const questionName = <QuestionDropdownModel>firstPanel.getQuestionByName("questionName");
  expect(questionName.choices).toHaveLength(3 * 2 + 1 + 3 * 2);
  questionName.value = "q1.panel.q1_col1";
  let questionValue = firstPanel.getQuestionByName("questionValue");
  expect(questionValue.getType()).toEqual("text");
  expect(conditionEditor.context).toBeTruthy();
  expect(conditionEditor.context.name).toEqual("q1");
  expect(questionName.choices).toHaveLength(3 * 2 + 1 + 3);
  questionName.value = "q2";
  expect(conditionEditor.context).toBeFalsy();
  expect(questionName.choices).toHaveLength(3 * 2 + 1 + 3 * 2);
  questionName.value = "q1.panel.q1_col1";
  questionValue = firstPanel.getQuestionByName("questionValue");
  questionValue.value = 3;
  expect(conditionEditor.text).toEqual("{panel.q1_col1} = 3");
});
test("Setup context initially for question in panel dynamic", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "paneldynamic", name: "q1",
        templateElements: [{ type: "text", name: "q1_col1" }, { type: "text", name: "q1_col2" }, { type: "text", name: "q1_col3" }]
      },
      { type: "text", name: "q2" },
      {
        type: "paneldynamic", name: "q3",
        templateElements: [{ type: "text", name: "q2_col1" }, { type: "text", name: "q2_col2" }, { type: "text", name: "q2_col3" }]
      },
    ]
  });
  const conditionEditor = new ConditionEditor(survey);
  conditionEditor.context = survey.getQuestionByName("q1");
  conditionEditor.text = "{panel.q1_col1} = 2";
  expect(conditionEditor.context).toBeTruthy();
  expect(conditionEditor.context.name).toEqual("q1");
  const firstPanel = conditionEditor.panel.panels[0];
  const questionName = <QuestionDropdownModel>firstPanel.getQuestionByName("questionName");
  expect(questionName.choices).toHaveLength(3 * 2 + 1 + 3);
  expect(questionName.value).toEqual("q1.panel.q1_col1");
});
test("if conditionEditorItem is not ready then text edit is empty", () => {
  const survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: [1, 2, 3] },
      { name: "q4", type: "text", visibleIf: "{q1} = 'abc' and {q2} = 1" }
    ],
    calculatedValues: [{ name: "val1", expression: "{q1} + {q2}" }]
  });
  const question = survey.getQuestionByName("q4");
  const conditionEditor = new ConditionEditor(survey, question);
  conditionEditor.text = "{q1} = 'abc' or {q2} = 1 and {q2} = 2";

  expect(conditionEditor["getEditorItems"]()).toHaveLength(3);
  expect(conditionEditor.text).toEqual("{q1} = 'abc' or {q2} = 1 and {q2} = 2");

  conditionEditor.panel.addPanel();
  expect(conditionEditor["getEditorItems"]()).toHaveLength(4);
  expect(conditionEditor.text).toEqual("{q1} = 'abc' or {q2} = 1 and {q2} = 2");
});
test("show placeholder for first empty panel in popup", () => {
  const survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "text" },
    ]
  });
  const question = survey.getQuestionByName("q1");
  const conditionEditor = new ConditionEditor(survey, question);
  conditionEditor.isModal = true;
  const firstPlaceholder = conditionEditor.panel.panels[0].getQuestionByName("placeholder");
  expect(firstPlaceholder.visible).toBe(true);
  conditionEditor.panel.panels[0].getQuestionByName("questionName").value = "q1";
  expect(firstPlaceholder.visible).toBe(false);
  conditionEditor.panel.panels[0].getQuestionByName("questionValue").value = "test_value";
  conditionEditor.panel.addPanel();
  expect(conditionEditor.panel.panels[1].getQuestionByName("placeholder").visible).toBe(false);
});
test("do not show placeholder in logic tab", () => {
  const survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "text" },
    ]
  });
  const question = survey.getQuestionByName("q1");
  const conditionEditor = new ConditionEditor(survey, question);
  conditionEditor.isModal = false;
  conditionEditor.text = "";
  const firstPlaceholder = conditionEditor.panel.panels[0].getQuestionByName("placeholder");
  expect(firstPlaceholder.visible).toBe(false);
});

test("Check errors for logic popup", () => {
  let notifierLog = "";
  const creatorMock = {
    notify: () => {
      notifierLog += "->called";
    }
  };
  const survey = new SurveyModel({
    elements: [{ name: "q1", type: "text" }, { name: "q2", type: "text" }],
  });
  (<any>survey).creator = creatorMock;

  const options = new EmptySurveyCreatorOptions();
  const question = survey.getQuestionByName("q1");
  const editor = new ConditionEditor(survey, question, options, "visibleIf");
  const panel = editor.panel.panels[0];
  expect(editor.apply()).toBe(false);
  expect(panel.getQuestionByName("questionName").errors.length > 0).toBe(true);
  expect(notifierLog).toBe("->called");
  panel.getQuestionByName("questionName").value = "q2";
  panel.getQuestionByName("questionValue").value = "2";
  expect(editor.apply()).toBe(true);
  expect(panel.getQuestionByName("questionName").errors.length > 0).toBe(false);
  expect(notifierLog).toBe("->called");
});
test("Change the default operator", () => {
  settings.logic.defaultOperator = "anyof";
  var survey = new SurveyModel({
    questions: [
      { type: "checkbox", name: "q1", choices: [1, 2, 3] },
      { type: "dropdown", name: "q2", choices: [1, 2, 3] }
    ]
  });
  var editor = new ConditionEditor(survey, survey.getQuestionByName("q1"));
  expect(editor.panel.panels).toHaveLength(1);
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("operator").value).toEqual("anyof");
  settings.logic.defaultOperator = "equal";
});
test("Add unwrapped value if checkbox valuePropertyName is set", () => {
  var survey = new SurveyModel({
    questions: [
      { type: "checkbox", name: "q1", choices: ["apple", "banana", "orange"], valuePropertyName: "fruit" },
      { type: "text", name: "q2", "visibleIf": "{q1-unwrapped} allof ['apple', 'orange']" }
    ]
  });
  const q2 = survey.getQuestionByName("q2");
  var editor = new ConditionEditor(survey, q2, undefined, "visibleIf");
  expect(editor.panel.panels).toHaveLength(1);
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("operator").value).toEqual("allof");
  const qName = <QuestionCheckboxModel>panel.getQuestionByName("questionName");
  expect(qName.choices).toHaveLength(1);
  expect(qName.choices[0].value).toBe("q1-unwrapped");
  expect(qName.choices[0].text).toBe("q1");
  const qValue = <QuestionCheckboxModel>panel.getQuestionByName("questionValue");
  expect(qValue.valuePropertyName).toBeFalsy();
  expect(qValue.value).toHaveLength(2);
  expect(qValue.value[0]).toBe("apple");
  expect(qValue.value[1]).toBe("orange");
  qValue.renderedValue = ["banana"];
  editor.apply();
  expect(q2.visibleIf).toBe("{q1-unwrapped} allof ['banana']");
});
test("Condition editor and question value cssClasses", () => {
  ComponentCollection.Instance.add({ name: "comp1", questionJSON: { "type": "dropdown", name: "q", choices: [1, 2, 3] } });
  const survey = new SurveyModel({
    questions: [
      { type: "comp1", name: "q1", choices: [1, 2, 3] },
      { type: "dropdown", name: "q2", choices: [1, 2, 3] },
      { type: "text", name: "q3" }
    ]
  });
  const editor = new ConditionEditor(survey, survey.getQuestionByName("q3"));
  const panel = editor.panel.panels[0];
  panel.getQuestionByName("questionName").value = "q2";
  const q2 = panel.getQuestionByName("questionValue");
  expect(q2.getType()).toBe("dropdown");
  expect(q2.cssClasses.content).toContain("sd-question__content");
  panel.getQuestionByName("questionName").value = "q1";
  const comp = panel.getQuestionByName("questionValue");
  expect(comp.getType()).toBe("comp1");
  expect(comp.cssClasses.content).toContain("sd-question__content");
  expect(comp.contentQuestion).toBeTruthy();
  expect(comp.contentQuestion.cssClasses.content).toContain("sd-question__content");
  ComponentCollection.Instance.clear();
});
test("Hide search for conjunction", () => {
  var survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3] },
      { name: "q3", type: "checkbox", choices: [1, 2, 3] },
      { name: "q4", type: "text" }
    ]
  });
  var question = survey.getQuestionByName("q4");
  var editor = new ConditionEditor(survey, question);
  expect(editor.panel.panels).toHaveLength(1);
  var panel = editor.panel.panels[0];
  expect(panel.getQuestionByName("operator").searchEnable).toBeFalsy();
  expect(panel.getQuestionByName("operator").dropdownListModel.listModel.searchEnabled).toBeFalsy();
  expect(panel.getQuestionByName("questionValue").isReadOnly).toBeTruthy();
  panel.getQuestionByName("questionName").value = "q1";
  panel.getQuestionByName("questionValue").value = "abc";
  expect(editor.text).toEqual("{q1} = 'abc'");
  expect(panel.getQuestionByName("conjunction").isVisible).toBeFalsy();
  editor.panel.addPanel();
  panel = editor.panel.panels[1];
  expect(panel.getQuestionByName("operator").searchEnable).toBeFalsy();
  expect(panel.getQuestionByName("operator").dropdownListModel.listModel.searchEnabled).toBeFalsy();
  expect(panel.getQuestionByName("conjunction").isVisible).toBeTruthy();
  expect(panel.getQuestionByName("conjunction").choices).toHaveLength(2);
  expect(panel.getQuestionByName("conjunction").searchEnable).toBeFalsy();
  expect(panel.getQuestionByName("conjunction").dropdownListModel.listModel.searchEnabled).toBeFalsy();
});
test("Do not show comment for other if storeOthersAsComment is true/false", () => {
  const survey = new SurveyModel({
    elements: [
      { name: "q1", type: "text" },
      { name: "q2", type: "radiogroup", choices: [1, 2, 3], showOtherItem: true },
      { name: "q3", type: "checkbox", choices: [1, 2, 3], showOtherItem: true },
      { name: "q4", type: "radiogroup", choices: [1, 2, 3], showOtherItem: true, storeOthersAsComment: false },
      { name: "q5", type: "text", visibleIf: "{q2} = 'other' and {q3} = ['other'] and {q4} = 'foo'" }
    ]
  });
  const question = survey.getQuestionByName("q5");
  const conditionEditor = new ConditionEditor(survey, question, undefined, "visibleIf");
  expect(conditionEditor.panel.panelCount).toBe(3);
  const radioQuestion = <QuestionRadiogroupModel>conditionEditor.panel.panels[0].getQuestionByName("questionValue");
  const checkQuestion = <QuestionCheckboxModel>conditionEditor.panel.panels[1].getQuestionByName("questionValue");
  const radioQuestion2 = <QuestionRadiogroupModel>conditionEditor.panel.panels[2].getQuestionByName("questionValue");
  expect(radioQuestion.value).toBe("other");
  expect(radioQuestion.choices).toHaveLength(4);
  expect(radioQuestion.choices[3].value).toBe("other");
  expect(radioQuestion.otherItem.value).toBe("#other#");
  expect(radioQuestion.showOtherItem).toBeFalsy();

  expect(checkQuestion.value).toHaveLength(1);
  expect(checkQuestion.value[0]).toBe("other");
  expect(checkQuestion.choices).toHaveLength(4);
  expect(checkQuestion.choices[3].value).toBe("other");
  expect(checkQuestion.otherItem.value).toBe("#other#");
  expect(checkQuestion.showOtherItem).toBeFalsy();

  expect(radioQuestion2.value).toBe("foo");
  expect(radioQuestion2.choices).toHaveLength(3);
  expect(radioQuestion2.choices[2].value).toBe(3);
  expect(radioQuestion2.otherItem.value).toBe("other");
  expect(radioQuestion2.showOtherItem).toBeTruthy();
  expect(radioQuestion2.comment).toBe("foo");
});
