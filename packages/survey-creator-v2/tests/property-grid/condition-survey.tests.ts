import { SurveyModel } from "survey-knockout";
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
  nameQuestion.questionName = "q2";
  expect(conditionEditor.isReady).toEqual(false);
  editPanel.getQuestionByName("questionValue").value = 2;
  expect(conditionEditor.isReady).toEqual(true);
  expect(conditionEditor.text).toEqual("{q} = 1 and {q2} = 2");
});
