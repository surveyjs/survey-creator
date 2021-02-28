import {
  SurveyModel,
  QuestionHtmlModel,
  QuestionDropdownModel,
  PanelModel,
} from "survey-core";
import { SurveyLogic } from "../../src/tabs/logic";
import { LogicItemEditor } from "../../src/tabs/logic-item-editor";
import { SurveyLogicAction, SurveyLogicItem } from "../../src/tabs/logic-items";
import { getLogicString } from "../../src/tabs/logic-types";
import { settings } from "../../src/settings";

test("Check that expression Editor is created correctly", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
    ],
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  logic.editItem(logic.items[0]);
  expect(logic.editableItem).toEqual(logic.items[0]);
  expect(logic.expressionEditor).toBeTruthy();
  expect(logic.expressionEditor.text).toEqual("{q1} = 1");
  expect(logic.expressionEditor.panel.panelCount).toEqual(1);
  expect(logic.editableItem.actions).toHaveLength(2);
});
test("SurveyLogicItem, logicType and logicType name", () => {
  var survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1}=1" },
        ],
      },
      {
        elements: [{ type: "text", name: "q3" }],
      },
    ],
  });
  var logic = new SurveyLogic(survey);
  logic.editItem(logic.items[0]);
  expect(logic.editableItem.actions[0].logicTypeName).toEqual(
    "question_visibility"
  );
  expect(logic.editableItem.actions[0].element).toEqual(
    survey.getQuestionByName("q2")
  );
  logic.editableItem.actions[0].logicTypeName = "question_enable";
  expect(logic.editableItem.actions[0].logicTypeName).toEqual(
    "question_enable"
  );
  expect(logic.editableItem.actions[0].element).toBeFalsy();
});
test("LogicItemEditor: build panels and elementSelector", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4" },
    ],
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  var editor = new LogicItemEditor(logic.items[0]);
  expect(editor.panels).toHaveLength(2);
  var ltQuestion = <QuestionDropdownModel>(
    editor.panels[0].getQuestionByName("logicTypeName")
  );
  expect(ltQuestion).toBeTruthy();
  expect(ltQuestion.choices).toHaveLength(
    logic.items[0].actions[0].logicTypes.length
  );
  expect(ltQuestion.value).toEqual("question_visibility");
  var ltDescription = <QuestionHtmlModel>(
    editor.panels[0].getQuestionByName("logicTypeDescription")
  );
  expect(ltDescription.html).toBeTruthy();
  expect(ltDescription.html).toEqual(
    getLogicString("question_visibilityDescription")
  );
  var qSelector = <QuestionDropdownModel>(
    editor.panels[0].getQuestionByName("elementSelector")
  );
  expect(qSelector).toBeTruthy();
  expect(qSelector.visible).toBeTruthy();
  expect(qSelector.value).toEqual("q2");
  expect(qSelector.choices).toHaveLength(4);
  qSelector.value = "q4";
  expect(logic.items[0].actions[0].element).toEqual(
    survey.getQuestionByName("q4")
  );
});
test("LogicItemEditor: update a trigger", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "Question 1" },
      { type: "text", name: "q2", title: "Question 2" },
      { type: "text", name: "q3", title: "Question 3" },
    ],
    triggers: [
      {
        type: "runexpression",
        expression: "{q1} = 1",
        runExpression: "{q2} + 1",
        setToName: "q2",
      },
    ],
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  var editor = new LogicItemEditor(logic.items[0]);
  expect(editor.panels).toHaveLength(1);
  var ltQuestion = <QuestionDropdownModel>(
    editor.panels[0].getQuestionByName("logicTypeName")
  );
  expect(ltQuestion).toBeTruthy();
  expect(ltQuestion.choices).toHaveLength(
    logic.items[0].actions[0].logicTypes.length
  );
  expect(ltQuestion.value).toEqual("trigger_runExpression");
  var ltDescription = <QuestionHtmlModel>(
    editor.panels[0].getQuestionByName("logicTypeDescription")
  );
  expect(ltDescription.html).toBeTruthy();
  expect(ltDescription.html).toEqual(
    getLogicString("trigger_runExpressionDescription")
  );
  expect(
    editor.panels[0].getQuestionByName("elementSelector").visibl
  ).toBeFalsy();
  var panelTrigger = <PanelModel>(
    editor.panels[0].getElementByName("elementPanel")
  );
  expect(panelTrigger).toBeTruthy();
  expect(panelTrigger.visible).toBeTruthy();
  var runExpressionQuestion = panelTrigger.getQuestionByName("runExpression");
  expect(runExpressionQuestion).toBeTruthy();
  expect(runExpressionQuestion.visible).toBeTruthy();
  expect(runExpressionQuestion.value).toEqual("{q2} + 1");
  var setToNameQuestion = panelTrigger.getQuestionByName("setToName");
  expect(setToNameQuestion).toBeTruthy();
  expect(setToNameQuestion.visible).toBeTruthy();
  expect(setToNameQuestion.value).toEqual("q2");
  expect(setToNameQuestion.getType()).toEqual("dropdown");
  expect(setToNameQuestion.choices).toHaveLength(3);
  var expressionQuestion = panelTrigger.getQuestionByName("expression");
  expect(expressionQuestion).toBeTruthy();
  expect(expressionQuestion.visible).toBeFalsy();
});
