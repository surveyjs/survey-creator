import { SurveyModel, Question, QuestionMatrixDropdown } from "survey-knockout";
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
  var matrix = <QuestionMatrixDropdown>(
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
