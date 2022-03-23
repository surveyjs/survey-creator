import {
  SurveyModel,
  QuestionHtmlModel,
  QuestionDropdownModel,
  SurveyTriggerRunExpression,
  PanelModel,
  SurveyTriggerSkip,
  QuestionMatrixDynamicModel,
  AdaptiveActionContainer,
  SurveyTriggerSetValue,
  QuestionPanelDynamicModel,
  Question,
  QuestionCommentModel
} from "survey-core";
import { SurveyLogic } from "../../src/components/tabs/logic";
import { SurveyLogicUI } from "../../src/components/tabs/logic-ui";
import { LogicItemEditor } from "../../src/components/tabs/logic-item-editor";
import { getLogicString } from "../../src/components/tabs/logic-types";
import { PropertyGridEditorCollection } from "../../src/property-grid/index";
import { PropertyGridEditorExpression } from "../../src/property-grid/condition";
import { PropertyGridTriggerValueInLogicEditor } from "../../src/property-grid/values";
import { QuestionEmbeddedSurveyModel } from "../../src/components/embedded-survey";
import { SurveyLogicAction } from "../../src/components/tabs/logic-items";
import { CreatorTester } from "../creator-tester";
import { TabLogicPlugin } from "../../src/components/tabs/logic-plugin";
import { wrapTextByCurlyBraces } from "../../src/utils/utils";
import { settings } from "../../src/settings";

export * from "../../src/components/link-value";

test("SurveyLogicItem, logicType and logicType name", () => {
  var survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1}=1" }
        ]
      },
      {
        elements: [{ type: "text", name: "q3" }]
      }
    ]
  });
  var logic = new SurveyLogic(survey);
  logic.editItem(logic.items[0]);
  expect(logic.editableItem.actions[0].logicTypeName).toEqual(
    "question_visibility"
  );
  expect(logic.editableItem.actions[0].element).toEqual(
    survey.getQuestionByName("q2")
  );
});
test("LogicItemEditor: build panels and elementSelector", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4" }
    ]
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  var editor = new LogicItemEditor(logic.items[0]);
  expect(editor.panels).toHaveLength(2);
  expect(editor.isModified).toBeFalsy();
  var ltQuestion = <QuestionDropdownModel>(
    editor.panels[0].getQuestionByName("logicTypeName")
  );
  expect(ltQuestion).toBeTruthy();
  expect(ltQuestion.choices).toHaveLength(logic.getVisibleLogicTypes().length);
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
  expect(editor.isModified).toBeFalsy();
  qSelector.value = "q4";
  expect(editor.isModified).toBeTruthy();
  editor.apply();
  expect(editor.isModified).toBeFalsy();
  expect(logic.items[0].actions[0].element).toEqual(
    survey.getQuestionByName("q4")
  );
  logic.items[0].apply("{q1} = 1");
  expect(survey.getQuestionByName("q2").visibleIf).toBeFalsy();
  expect(survey.getQuestionByName("q3").visibleIf).toEqual("{q1} = 1");
  expect(survey.getQuestionByName("q4").visibleIf).toEqual("{q1} = 1");
});
test("LogicUI: do not reset editing and logic item isModified ", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(1);
  const item = logic.items[0];
  logic.editItem(item);
  let editor = logic.itemEditor;
  expect(editor.isModified).toBeFalsy();
  let qSelector = <QuestionDropdownModel>(
    editor.panels[0].getQuestionByName("elementSelector")
  );
  qSelector.value = "q4";
  expect(editor.isModified).toBeTruthy();
  expect(item.isModified).toBeFalsy();
  logic.mode = "view";
  expect(item.isModified).toBeTruthy();

  logic.editItem(item);
  editor = logic.itemEditor;
  qSelector = <QuestionDropdownModel>(
    editor.panels[0].getQuestionByName("elementSelector")
  );
  expect(qSelector.value).toEqual("q4");
  logic.saveEditableItem();
  logic.mode = "view";
  expect(item.isModified).toBeFalsy();

  logic.editItem(item);
  logic.expressionEditor.text = "{q1} = 2";
  logic.mode = "view";
  expect(item.isModified).toBeTruthy();

  logic.editItem(item);
  logic.saveEditableItem();
  logic.mode = "view";
  expect(item.isModified).toBeFalsy();
});
test("LogicUI: isModified for new item", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
      { type: "text", name: "q4" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(0);
  logic.addNew();
  expect(logic.matrixItems.visibleRows).toHaveLength(1);
  const row = logic.matrixItems.visibleRows[0];
  row.showDetailPanel();
  logic.expressionEditor.text = "{q1}=1";
  const panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
  const triggerQuestionsPanel = <PanelModel>panel.getElementByName("triggerQuestionsPanel");
  const triggerEditorPanel = <PanelModel>panel.getElementByName("triggerEditorPanel");
  triggerQuestionsPanel.getQuestionByName("setToName").value = "q2";
  triggerEditorPanel.getQuestionByName("setValue").value = 2;
  row.detailPanel.footerActions[0].action();
  expect(row.isDetailPanelShowing).toBeFalsy();
  expect(survey.triggers).toHaveLength(1);
  const trigger = <SurveyTriggerSetValue>survey.triggers[0];
  expect(trigger.getType()).toEqual("setvaluetrigger");
  expect(trigger.setToName).toEqual("q2");
  expect(trigger.setValue).toEqual(2);
  expect(logic.items[0].isModified).toBeFalsy();
});
test("LogicUI: check 'setValue' question title", () => {
  let survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", },
      { type: "text", name: "q3", title: "Question 3" },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  logic.addNew();
  let row = logic.matrixItems.visibleRows[0];
  row.showDetailPanel();
  logic.expressionEditor.text = "{q1}=1";
  let panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
  let triggerQuestionsPanel = <PanelModel>panel.getElementByName("triggerQuestionsPanel");
  let triggerEditorPanel = <PanelModel>panel.getElementByName("triggerEditorPanel");

  triggerQuestionsPanel.getQuestionByName("setToName").value = "q2";
  let setValueQuestion = triggerEditorPanel.getQuestionByName("setValue");
  expect(setValueQuestion.title).toEqual("q2");
  expect(setValueQuestion.titleLocation).toEqual("top");
  expect(setValueQuestion.getTitleActions().length).toEqual(0);
  logic.itemEditor.panel.addPanel();
  panel = logic.itemEditor.panels[1];
  panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
  triggerQuestionsPanel = <PanelModel>panel.getElementByName("triggerQuestionsPanel");
  triggerEditorPanel = <PanelModel>panel.getElementByName("triggerEditorPanel");
  triggerQuestionsPanel.getQuestionByName("setToName").value = "q3";
  setValueQuestion = triggerEditorPanel.getQuestionByName("setValue");
  expect(setValueQuestion.title).toEqual("Question 3");
  expect(setValueQuestion.titleLocation).toEqual("top");
  expect(setValueQuestion.getTitleActions().length).toEqual(0);
});
test("LogicUI: dispose logic item ui", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  logic.editItem(logic.items[0]);
  const itemEditor = logic.itemEditor;
  const expressionEditor = logic.expressionEditor;
  expect(itemEditor.editSurvey.isDisposed).toBeFalsy();
  expect(expressionEditor.editSurvey.isDisposed).toBeFalsy();
  logic.mode = "view";
  expect(itemEditor.editSurvey.isDisposed).toBeFalsy();
  expect(expressionEditor.editSurvey.isDisposed).toBeFalsy();
  logic.dispose();
  expect(itemEditor.editSurvey.isDisposed).toBeTruthy();
  expect(expressionEditor.editSurvey.isDisposed).toBeTruthy();
});
test("LogicItemEditor: question selector order", () => {
  const survey = new SurveyModel({
    elements: [
      { name: "question 1", type: "text" },
      { name: "question 3", type: "text" },
      { name: "question 11", type: "text", visibleIf: "{question 3} = 1" },
      { name: "question 2", type: "text" },
      { name: "question 10", type: "text" },
    ]
  });
  const logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  const editor = new LogicItemEditor(logic.items[0]);
  expect(editor.panels).toHaveLength(1);
  const qSelector = <QuestionDropdownModel>(
    editor.panels[0].getQuestionByName("elementSelector")
  );
  expect(qSelector).toBeTruthy();
  const choices = qSelector.choices;
  expect(choices).toHaveLength(5);
  expect(choices[0].text).toEqual("question 1");
  expect(choices[1].text).toEqual("question 2");
  expect(choices[2].text).toEqual("question 3");
  expect(choices[3].text).toEqual("question 10");
  expect(choices[4].text).toEqual("question 11");
});

test("LogicItemEditor: update a trigger", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ],
    triggers: [
      {
        type: "runexpression",
        expression: "{q1} = 1",
        runExpression: "{q2} + 1",
        setToName: "q2"
      }
    ]
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  var editor = new LogicItemEditor(logic.items[0]);
  expect(editor.panels).toHaveLength(1);
  var ltQuestion = <QuestionDropdownModel>(
    editor.panels[0].getQuestionByName("logicTypeName")
  );
  expect(ltQuestion).toBeTruthy();
  expect(ltQuestion.choices).toHaveLength(logic.getVisibleLogicTypes().length);
  expect(ltQuestion.value).toEqual("trigger_runExpression");
  var ltDescription = <QuestionHtmlModel>(
    editor.panels[0].getQuestionByName("logicTypeDescription")
  );
  expect(ltDescription.html).toBeTruthy();
  expect(ltDescription.html).toEqual(
    getLogicString("trigger_runExpressionDescription")
  );
  expect(
    editor.panels[0].getQuestionByName("elementSelector").visible
  ).toBeFalsy();
  var panelTrigger = <PanelModel>(editor.panels[0].getElementByName("triggerEditorPanel"));
  expect(panelTrigger).toBeTruthy();
  expect(panelTrigger.visible).toBeTruthy();
  var runExpressionQuestion = panelTrigger.getQuestionByName("runExpression");
  expect(runExpressionQuestion).toBeTruthy();
  expect(runExpressionQuestion.visible).toBeTruthy();
  expect(runExpressionQuestion.value).toEqual("{q2} + 1");
  const triggerQuestionsPanel = <PanelModel>editor.panels[0].getElementByName("triggerQuestionsPanel");
  var setToNameQuestion = <QuestionDropdownModel>triggerQuestionsPanel.getQuestionByName("setToName");
  expect(setToNameQuestion).toBeTruthy();
  expect(setToNameQuestion.visible).toBeTruthy();
  expect(setToNameQuestion.value).toEqual("q2");
  expect(setToNameQuestion.getType()).toEqual("dropdown");
  expect(setToNameQuestion.choices).toHaveLength(3);
  var expressionQuestion = panelTrigger.getQuestionByName("expression");
  expect(expressionQuestion).toBeTruthy();
  expect(expressionQuestion.visible).toBeFalsy();
  runExpressionQuestion.value = "{q2} - 10";
  setToNameQuestion.value = "q3";
  editor.apply();
  var element = <SurveyTriggerRunExpression>logic.items[0].actions[0].element;
  expect(element.runExpression).toEqual("{q2} - 10");
  expect(element.setToName).toEqual("q3");
});
test("LogicItemEditor: add new actions", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(0);
  logic.addNew();
  var editor = new LogicItemEditor(logic.editableItem);
  expect(editor.panels).toHaveLength(1);
  var ltQuestion = <QuestionDropdownModel>(
    editor.panels[0].getQuestionByName("logicTypeName")
  );
  expect(ltQuestion).toBeTruthy();
  expect(ltQuestion.choices).toHaveLength(logic.getVisibleLogicTypes().length);
  expect(ltQuestion.value).toBeFalsy();
  var elSelectionQuestion = <QuestionDropdownModel>editor.panels[0].getQuestionByName("elementSelector");
  expect(elSelectionQuestion.visible).toBeFalsy();
  ltQuestion.value = "question_visibility";
  expect(elSelectionQuestion.visible).toBeTruthy();
  expect(elSelectionQuestion.choices).toHaveLength(3);
  elSelectionQuestion.value = "q2";
  editor.panel.addPanel();
  editor.panels[1].getQuestionByName("logicTypeName").value =
    "question_visibility";
  editor.panels[1].getQuestionByName("elementSelector").value = "q3";
  editor.apply();
  logic.editableItem.apply("{q1} = 1");
  expect(survey.getQuestionByName("q2").visibleIf).toEqual("{q1} = 1");
  expect(survey.getQuestionByName("q3").visibleIf).toEqual("{q1} = 1");
});
test("LogicItemEditor: remove actions", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{q1} = 1" }
    ]
  });
  var logic = new SurveyLogic(survey);
  var editor = new LogicItemEditor(logic.items[0]);
  expect(editor.panels).toHaveLength(2);
  editor.panel.removePanel(0);
  expect(editor.panels).toHaveLength(1);
  editor.panel.removePanel(0);
  expect(editor.panels).toHaveLength(1);
  var ltQuestion = <QuestionDropdownModel>(
    editor.panels[0].getQuestionByName("logicTypeName")
  );
  expect(ltQuestion).toBeTruthy();
  expect(ltQuestion.value).toBeFalsy();
  ltQuestion.value = "question_visibility";
  var elSelectionQuestion = <QuestionDropdownModel>editor.panels[0].getQuestionByName("elementSelector");
  expect(elSelectionQuestion.visible).toBeTruthy();
  expect(elSelectionQuestion.choices).toHaveLength(3);
  elSelectionQuestion.value = "q1";
  editor.apply();
  logic.items[0].apply("{q2} = 1");
  expect(survey.getQuestionByName("q1").visibleIf).toEqual("{q2} = 1");
  expect(survey.getQuestionByName("q2").visibleIf).toBeFalsy();
  expect(survey.getQuestionByName("q3").visibleIf).toBeFalsy();
});
test("SurveyLogicUI: Check that expression Editor is created correctly", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(1);
  logic.editItem(logic.items[0]);
  expect(logic.editableItem).toEqual(logic.items[0]);
  expect(logic.expressionEditor).toBeTruthy();
  expect(logic.expressionEditor.text).toEqual("{q1} = 1");
  expect(logic.expressionEditor.panel.panelCount).toEqual(1);
  expect(logic.editableItem.actions).toHaveLength(2);
});
test("SurveyLogicUI: Test logicItemsSurvey", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4", visibleIf: "{q1}=2" },
      { type: "text", name: "q5" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(2);
  var itemsQuestion = <QuestionMatrixDynamicModel>logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.rowCount).toEqual(2);
  expect(itemsQuestion.value).toHaveLength(2);
  logic.addNew();
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q5";
  expect(logic.itemEditor.hasErrors()).toBeFalsy();
  logic.expressionEditor.text = "{q1}=3";
  var res = logic.saveEditableItemAndBack();
  expect(res).toBeTruthy();
  expect(itemsQuestion.value).toHaveLength(3);
  expect(itemsQuestion.rowCount).toEqual(3);
  logic.removeItem(logic.items[0]);
  expect(itemsQuestion.value).toHaveLength(2);
  expect(itemsQuestion.rowCount).toEqual(2);
});
test("SurveyLogicItem, clonse and equals", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q5" }
    ],
    triggers: [
      { type: "setvalue", expression: "{q1}=1", setToName: "q5", setValue: 5 }
    ]
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  const item = logic.items[0];
  const clonedItem = item.clone();
  expect(clonedItem).toBeTruthy();
  expect(clonedItem.actions).toHaveLength(3);
  expect(clonedItem.expression).toEqual("{q1}=1");
  expect(clonedItem.actions[0].element).toEqual(item.actions[0].element);
  expect(item.equals(clonedItem)).toBeTruthy();
  clonedItem.expression = "{q1}=2";
  expect(item.equals(clonedItem)).toBeFalsy();
  clonedItem.expression = "{q1}=1";
  expect(item.equals(clonedItem)).toBeTruthy();
  const clonedTrigger = <SurveyTriggerSetValue>(clonedItem.actions[2].element);
  clonedTrigger.setValue = 6;
  expect(item.equals(clonedItem)).toBeFalsy();
  clonedTrigger.setValue = 5;
  expect(item.equals(clonedItem)).toBeTruthy();
});
test("SurveyLogicUI: Test changing list data on saveEditableItemAndBack", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(1);
  let itemsQuestion = <QuestionMatrixDynamicModel>logic.itemsSurvey.getQuestionByName("items");
  const rows = itemsQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  expect(rows[0].cells).toHaveLength(1);
  expect(rows[0].cells[0].question.getType()).toEqual("linkvalue");
  expect(itemsQuestion.value).toHaveLength(1);
  expect(itemsQuestion.value[0].rules).toEqual("If 'q1' == 1, make question 'q3' visible");
  logic.editItem(logic.items[0]);
  logic.expressionEditor.text = "{q2}=1";
  const panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("elementSelector").value = "q4";
  const res = logic.saveEditableItemAndBack();
  expect(res).toBeTruthy();
  itemsQuestion = <QuestionMatrixDynamicModel>logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.value).toHaveLength(1);
  expect(itemsQuestion.value[0].rules).toEqual("If 'q2' == 1, make question 'q4' visible");
});
test("SurveyLogicUI: Test logicItemsSurvey, data content on editing", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4", visibleIf: "{q1}=2" },
      { type: "text", name: "q5" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(2);
  var itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  var rows = itemsQuestion.visibleRows;
  expect(rows[0].cells[0].value).toEqual("If 'q1' == 1, make question 'q2' visible, make question 'q3' visible");
  logic.editItem(logic.items[0]);
  logic.expressionEditor.text = "{q1}=3";
  logic.saveEditableItem();
  rows = itemsQuestion.visibleRows;
  expect(rows[0].cells[0].value).toEqual("If 'q1' == 3, make question 'q2' visible, make question 'q3' visible");
});

test("SurveyLogicUI: Test logicItemEditor", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4", visibleIf: "{q1}=2" },
      { type: "text", name: "q5" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(2);
  expect(logic.itemEditor).toBeFalsy();
  logic.editItem(logic.items[0]);
  expect(logic.itemEditor).toBeTruthy();
  expect(logic.itemEditor.editableItem).toBeTruthy();
  expect(logic.itemEditor.panels).toHaveLength(2);
  expect(logic.mode).toEqual("edit");
  logic.mode = "view";
  expect(logic.itemEditor).toBeFalsy();
});
test("SurveyLogicUI: Add new item and action", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(0);
  logic.addNew();
  expect(logic.mode).toEqual("new");
  expect(logic.editableItem.actions).toHaveLength(0);
  expect(logic.itemEditor.editableItem).toBeTruthy();
  expect(logic.itemEditor.panels).toHaveLength(1);
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q2";
  var res = logic.saveEditableItemAndBack();
  expect(res).toBeTruthy();
  expect(logic.mode).toEqual("view");
  expect(logic.items).toHaveLength(1);
  var item = logic.items[0];
  expect(item.expression).toEqual("{q1} = 1");
  expect(item.actions).toHaveLength(1);
  expect(item.actions[0].logicTypeName).toEqual("question_visibility");
  expect(item.actions[0].element).toEqual(survey.getQuestionByName("q2"));
});
test("SurveyLogicUI: Add new item and action for panel.visibleIf", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      {
        type: "panel", name: "panel1",
        elements: [
          { type: "text", name: "q2" }
        ]
      },
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(0);
  logic.addNew();
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "panel_visibility";
  panel.getQuestionByName("elementSelector").value = "panel1";
  var res = logic.saveEditableItemAndBack();
  expect(res).toBeTruthy();
  const surveyPanel = <PanelModel>survey.getPanelByName("panel1");
  expect(surveyPanel.visibleIf).toEqual("{q1} = 1");
});
test("SurveyLogicUI: Do not duplicate new items", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(0);
  logic.addNew();
  expect(logic.mode).toEqual("new");
  expect(logic.editableItem.actions).toHaveLength(0);
  expect(logic.itemEditor.editableItem).toBeTruthy();
  expect(logic.itemEditor.panels).toHaveLength(1);
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q2";
  var res = logic.saveEditableItem();
  expect(res).toBeTruthy();
  logic.saveEditableItem();
  logic.saveEditableItem();
  logic.mode = "view";
  expect(logic.items).toHaveLength(1);
});
test("SurveyLogicUI: validate expression and actions", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(0);
  logic.addNew();
  expect(logic.mode).toEqual("new");
  expect(logic.editableItem.actions).toHaveLength(0);
  expect(logic.itemEditor.editableItem).toBeTruthy();
  expect(logic.itemEditor.panels).toHaveLength(1);
  expect(logic.itemEditor.hasErrors()).toBeTruthy();
  expect(logic.expressionEditor.isReady).toBeFalsy();
  var res = logic.saveEditableItem();
  expect(res).toBeFalsy();

  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeTruthy();
  logic.expressionEditor.text = "{q1} = 1";

  res = logic.saveEditableItem();
  expect(res).toBeFalsy();
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeTruthy();

  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q2";

  res = logic.saveEditableItem();
  expect(res).toBeTruthy();
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeFalsy();
});
test("SurveyLogicUI: create skipTo trigger", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
      { type: "text", name: "q4" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  logic.addNew();
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "trigger_skip";
  const triggerQuestionsPanel = <PanelModel>panel.getElementByName("triggerQuestionsPanel");
  expect(triggerQuestionsPanel.visible).toBeTruthy();
  var gotoNameQuestion = <QuestionDropdownModel>triggerQuestionsPanel.getQuestionByName("gotoName");
  expect(gotoNameQuestion).toBeTruthy();
  expect(gotoNameQuestion.getType()).toEqual("dropdown");
  expect(gotoNameQuestion.choices).toHaveLength(4);
  gotoNameQuestion.value = "q2";
  logic.saveEditableItem();
  expect(logic.items).toHaveLength(1);
  expect(survey.triggers).toHaveLength(1);
  expect(survey.triggers[0].getType()).toEqual("skiptrigger");
  expect(survey.triggers[0].expression).toEqual("{q1} = 1");
  expect((<SurveyTriggerSkip>survey.triggers[0]).gotoName).toEqual("q2");
});
test("SurveyLogicUI: Add new item and isModified", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", enableIf: "{q1} = 1" },
      { type: "text", name: "q3" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(1);
  logic.editItem(logic.items[0]);
  expect(logic.editableItem.isNew).toBeFalsy();
  expect(logic.editableItem.isModified).toBeFalsy();
  logic.expressionEditor.text = "{q1} = 2";
  logic["onEndEditing"]();
  expect(logic.items[0].isModified).toBeTruthy();

  logic.addNew();
  expect(logic.editableItem.isNew).toBeTruthy();
  expect(logic.editableItem.isModified).toBeFalsy();
  logic.expressionEditor.text = "{q1} = 1";
  const panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q2";
  expect(logic.editableItem.isNew).toBeTruthy();
  expect(logic.editableItem.isModified).toBeFalsy();

  const res = logic.saveEditableItem();
  expect(res).toBeTruthy();
  expect(logic.items[0].isModified).toBeTruthy();
  expect(logic.items[1].isNew).toBeFalsy();
  expect(logic.items[1].isModified).toBeFalsy();

  logic.editItem(logic.items[1]);
  logic.expressionEditor.text = "{q1} = 2";
  logic["onEndEditing"]();
  expect(logic.items[0].isModified).toBeTruthy();
  expect(logic.items[1].isModified).toBeTruthy();
});
test("LogicItemEditorUI: remove item", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{q1} = 1" }
    ]
  });
  expect(survey.getQuestionByName("q2").visibleIf).toBeTruthy();
  var logic = new SurveyLogicUI(survey);
  var itemsQuestion = <QuestionMatrixDynamicModel>logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.rowCount).toEqual(1);
  itemsQuestion.removeRow(0);
  expect(itemsQuestion.rowCount).toEqual(0);
  expect(survey.getQuestionByName("q2").visibleIf).toBeFalsy();
});
test("Create setValue trigger in logic", () => {
  PropertyGridEditorCollection.register(new PropertyGridTriggerValueInLogicEditor());
  var survey = new SurveyModel({
    elements: [
      { type: "dropdown", name: "q1", choices: [1, 2, 3] },
      { type: "text", name: "q2", readOnly: true }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  logic.addNew();
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];

  const getSetValueQuestion = () => {
    const elementPanel = <PanelModel>panel.getElementByName("triggerEditorPanel");
    return elementPanel.getQuestionByName("setValue");
  };
  const getSetToNameQuestion = () => {
    const triggerQuestionsPanel = <PanelModel>panel.getElementByName("triggerQuestionsPanel");
    return triggerQuestionsPanel.getQuestionByName("setToName");
  };

  panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
  var setValueQuestion = getSetValueQuestion();
  expect(setValueQuestion).toBeTruthy();
  expect(setValueQuestion.isVisible).toBeFalsy();
  expect(setValueQuestion.getType()).toEqual("linkvalue");
  getSetToNameQuestion().value = "q1";
  setValueQuestion = getSetValueQuestion();
  expect(setValueQuestion.isVisible).toBeTruthy();
  expect(setValueQuestion.getType()).toEqual("dropdown");
  getSetToNameQuestion().clearValue();
  setValueQuestion = getSetValueQuestion();
  expect(setValueQuestion.getType()).toEqual("linkvalue");
  expect(setValueQuestion.isVisible).toBeFalsy();
  getSetToNameQuestion().value = "q2";
  setValueQuestion = getSetValueQuestion();
  expect(setValueQuestion.isVisible).toBeTruthy();
  expect(setValueQuestion.getType()).toEqual("text");
  setValueQuestion.value = 2;

  panel.getQuestionByName("logicTypeName").value = "trigger_complete";
  const triggerEditorPanel = <PanelModel>panel.getElementByName("triggerEditorPanel");
  const triggerQuestionsPanel = <PanelModel>panel.getElementByName("triggerQuestionsPanel");
  expect(triggerQuestionsPanel.isVisible).toBeFalsy();
  expect(triggerEditorPanel.isVisible).toBeFalsy();
  panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
  expect(getSetToNameQuestion().value).toBeFalsy();
  expect(getSetValueQuestion().value).toBeFalsy();
});

test("LogicItemEditorUI: fast entry edit and change expressionEditorCanShowBuilder", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{q2} = 2" },
      { type: "text", name: "q4", visibleIf: "{q1} = 3" },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.rowCount).toEqual(3);
  expect(logic.expressionEditor).toBeFalsy();
  expect(logic.expressionEditorCanShowBuilder).toBeFalsy();

  logic.editItem(logic.items[0]);
  let editor = logic.expressionEditor;
  expect(logic.mode).toEqual("edit");
  expect(logic.expressionEditor).toBeTruthy();
  expect(logic.expressionEditorCanShowBuilder).toBeTruthy();
  expect(editor.textEditor.value).toEqual("{q1} = 1");
  editor.textEditor.value = "{q1} = 1 sfsferert";
  expect(logic.expressionEditorCanShowBuilder).toBeFalsy();

  editor.textEditor.value = "{q1} = 1";
  expect(logic.expressionEditorCanShowBuilder).toBeTruthy();

  itemsQuestion.removeRow(1);
  expect(logic.expressionEditorCanShowBuilder).toBeTruthy();

  itemsQuestion.removeRow(0);
  expect(logic.expressionEditorCanShowBuilder).toBeFalsy();
  expect(itemsQuestion.rowCount).toEqual(1);

  const row = itemsQuestion.visibleRows[0];
  row.showDetailPanel();
  expect(logic.expressionEditorCanShowBuilder).toBeTruthy();

  row.hideDetailPanel();
  expect(logic.expressionEditorCanShowBuilder).toBeFalsy();

  itemsQuestion.removeRow(0);
  expect(logic.expressionEditorCanShowBuilder).toBeFalsy();
});

test("LogicItemEditorUI: change expressionEditorIsFastEntry", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{q1} = 1" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.rowCount).toEqual(1);
  expect(logic.expressionEditor).toBeFalsy();

  logic.editItem(logic.items[0]);
  let editor = logic.expressionEditor;
  expect(logic.mode).toEqual("edit");
  expect(editor).toBeTruthy();
  expect(editor.textEditor.visible).toBeFalsy();
  expect(logic.expressionEditorIsFastEntry).toBeFalsy();
  expect(editor.text).toEqual("{q1} = 1");
  editor.text = "{q2} = 2";

  logic.toggleExpressionEditorIsFastEntry();
  expect(editor.textEditor.visible).toBeTruthy();
  expect(logic.expressionEditorIsFastEntry).toBeTruthy();
  expect(editor.text).toEqual("{q2} = 2");

  logic.toggleExpressionEditorIsFastEntry();
  expect(editor.textEditor.visible).toBeFalsy();
  expect(logic.expressionEditorIsFastEntry).toBeFalsy();
  expect(editor.text).toEqual("{q2} = 2");
});

test("LogicItemEditorUI: edit item two times and do Build/Edit", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{q1} = 1" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.rowCount).toEqual(1);
  expect(logic.expressionEditor).toBeFalsy();
  logic.editItem(logic.items[0]);
  expect(logic.mode).toEqual("edit");
  expect(logic.expressionEditor).toBeTruthy();

  let editor = logic.expressionEditor;
  expect(editor.isModal).toBeFalsy();
  expect(editor.panel.visible).toBeTruthy();
  expect(editor.textEditor.visible).toBeFalsy();

  logic.toggleExpressionEditorIsFastEntry();
  expect(editor.panel.visible).toBeFalsy();
  expect(editor.textEditor.visible).toBeTruthy();
  expect(editor.textEditor.value).toEqual("{q1} = 1");
  logic.toggleExpressionEditorIsFastEntry();

  logic.mode = "view";
  expect(logic.expressionEditor).toBeFalsy();

  logic.editItem(logic.items[0]);
  expect(logic.expressionEditor).toBeTruthy();
  editor = logic.expressionEditor;
  expect(editor.textEditor.visible).toBeFalsy();
  logic.toggleExpressionEditorIsFastEntry();
  expect(editor.panel.visible).toBeFalsy();
  expect(editor.textEditor.visible).toBeTruthy();
  expect(editor.textEditor.value).toEqual("{q1} = 1");
});

test("LogicItemEditorUI: check remove row action", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  expect(itemsQuestion.rowCount).toEqual(1);
  expect(itemsQuestion.renderedTable.rows[0].cells).toHaveLength(3);
  const cell = itemsQuestion.renderedTable.rows[0].cells[2];
  expect(cell.isActionsCell).toBeTruthy();
  expect(cell.item.value).toBeTruthy();
  const actions = <AdaptiveActionContainer>cell.item.value;
  expect(actions.actions).toHaveLength(1);
  const action = actions.actions[0];
  expect(action.component).toEqual("sv-action-bar-item");
  expect(action.iconName).toEqual("icon-delete");
  expect(action.title).toEqual("Remove");
  expect(action.showTitle).toBeFalsy();
  action.action();
  expect(itemsQuestion.rowCount).toEqual(0);
});

test("LogicItemEditorUI: edit logic item using detail panel", () => {
  const dummy = new QuestionEmbeddedSurveyModel("dummy");
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3" },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  expect(itemsQuestion.rowCount).toEqual(1);
  const row = itemsQuestion.visibleRows[0];
  expect(row.hasPanel).toBeTruthy();
  row.showDetailPanel();
  expect(logic.mode).toEqual("edit");
  expect(row.detailPanel).toBeTruthy();
  expect(row.detailPanel.footerActions).toHaveLength(1);
  const conditionsQuestion = <QuestionEmbeddedSurveyModel>row.detailPanel.getQuestionByName("conditions");
  expect(conditionsQuestion).toBeTruthy();
  expect(conditionsQuestion.embeddedSurvey).toBeTruthy();
  expect(logic.expressionEditor.editSurvey).toBeTruthy();
  expect(logic.expressionEditor.text).toEqual("{q1} = 1");
  expect(conditionsQuestion.embeddedSurvey).toEqual(logic.expressionEditor.editSurvey);

  const actionsQuestion = <QuestionEmbeddedSurveyModel>row.detailPanel.getQuestionByName("actions");
  expect(actionsQuestion).toBeTruthy();
  expect(actionsQuestion.embeddedSurvey).toBeTruthy();
  expect(logic.itemEditor.editSurvey).toBeTruthy();
  expect(logic.itemEditor.panels).toHaveLength(1);
  expect(actionsQuestion.embeddedSurvey).toEqual(logic.itemEditor.editSurvey);
  var panel = logic.itemEditor.panels[0];
  expect(panel.getQuestionByName("logicTypeName").value).toEqual("question_visibility");
  expect(panel.getQuestionByName("elementSelector").value).toEqual("q2");
  panel.getQuestionByName("elementSelector").value = "q3";

  expect(row.detailPanel.footerActions[0].title).toEqual("Done");
  row.detailPanel.footerActions[0].action();
  expect(logic.mode).toEqual("view");
  expect(row.detailPanel).toBeFalsy();
  expect(survey.getQuestionByName("q2").visibleIf).toBeFalsy();
  expect(survey.getQuestionByName("q3").visibleIf).toEqual("{q1} = 1");
});
test("LogicItemEditorUI: do not lost expression if it is incorrect and check isModified", () => {
  const dummy = new QuestionEmbeddedSurveyModel("dummy");
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3" },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  expect(logic.items[0].isModified).toBeFalsy();
  const row = itemsQuestion.visibleRows[0];
  row.showDetailPanel();
  expect(logic.items[0].isModified).toBeFalsy();
  expect(logic.expressionEditor.text).toEqual("{q1} = 1");
  row.hideDetailPanel();
  expect(logic.items[0].isModified).toBeFalsy();
  row.showDetailPanel();
  expect(logic.items[0].isModified).toBeFalsy();
  logic.expressionEditor.text = "{q1} = 2";
  row.hideDetailPanel();
  expect(logic.items[0].isModified).toBeTruthy();
  row.showDetailPanel();
  logic.expressionEditor.panel.addPanel();
  row.hideDetailPanel();
  row.showDetailPanel();
  expect(logic.expressionEditor.panel.panels).toHaveLength(2);
  logic.expressionEditor.panel.removePanel(1);
  expect(logic.expressionEditor.text).toEqual("{q1} = 2");
});

test("LogicItemEditorUI: create new logic item using detail panel", () => {
  const dummy = new QuestionEmbeddedSurveyModel("dummy");
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  expect(itemsQuestion.rowCount).toEqual(0);
  logic.addNewUI();
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].getDisplayText()).toEqual("New rule");
  expect(itemsQuestion.rowCount).toEqual(1);
  const row = itemsQuestion.visibleRows[0];
  expect(row.cells[0].question.value).toEqual("New rule");
  expect(row.hasPanel).toBeTruthy();
  expect(logic.mode).toEqual("new");
  expect(row.detailPanel).toBeTruthy();
  expect(row.detailPanel.footerActions).toHaveLength(1);
  const conditionsQuestion = <QuestionEmbeddedSurveyModel>row.detailPanel.getQuestionByName("conditions");
  expect(conditionsQuestion).toBeTruthy();
  expect(conditionsQuestion.embeddedSurvey).toBeTruthy();
  expect(logic.expressionEditor.editSurvey).toBeTruthy();
  expect(logic.expressionEditor.text).toBeFalsy();
  expect(conditionsQuestion.embeddedSurvey).toEqual(logic.expressionEditor.editSurvey);
  logic.expressionEditor.text = "{q1} = 1";

  const actionsQuestion = <QuestionEmbeddedSurveyModel>row.detailPanel.getQuestionByName("actions");
  expect(actionsQuestion).toBeTruthy();
  expect(actionsQuestion.startWithNewLine).toBeTruthy();
  expect(actionsQuestion.embeddedSurvey).toBeTruthy();
  expect(logic.itemEditor.editSurvey).toBeTruthy();
  expect(logic.itemEditor.panels).toHaveLength(1);
  expect(actionsQuestion.embeddedSurvey).toEqual(logic.itemEditor.editSurvey);
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q2";

  row.detailPanel.footerActions[0].action();
  expect(logic.mode).toEqual("view");
  expect(row.detailPanel).toBeFalsy();
  expect(row.cells[0].question.value).toEqual("If 'q1' == 1, make question 'q2' visible");
  expect(survey.getQuestionByName("q2").visibleIf).toEqual("{q1} = 1");
});
test("LogicItemEditorUI: create new logic several times", () => {
  const dummy = new QuestionEmbeddedSurveyModel("dummy");
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  expect(itemsQuestion.rowCount).toEqual(0);
  expect(logic.addNewButton.enabled).toBeTruthy();
  logic.addNewUI();
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeTruthy();
  expect(itemsQuestion.rowCount).toEqual(1);
  const row = itemsQuestion.visibleRows[0];
  expect(row.hasPanel).toBeTruthy();
  expect(logic.mode).toEqual("new");
  expect(row.detailPanel).toBeTruthy();
  expect(logic.addNewButton.enabled).toBeFalsy();
  row.hideDetailPanel();
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeTruthy();
  expect(logic.addNewButton.enabled).toBeTruthy();
  logic.addNewUI();
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeTruthy();
  expect(logic.addNewButton.enabled).toBeFalsy();
  itemsQuestion.removeRow(0);
  expect(itemsQuestion.rowCount).toEqual(0);
  expect(logic.items).toHaveLength(0);
  expect(logic.addNewButton.enabled).toBeTruthy();
});

test("LogicItemEditorUI: filter by question", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{q2} = 2" },
      { type: "text", name: "q4", visibleIf: "{q1} = 3" },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  expect(itemsQuestion.rowCount).toEqual(3);
  expect(logic.questionFilter).toBeFalsy();
  logic.questionFilter = "q1";
  expect(itemsQuestion.rowCount).toEqual(2);
  logic.questionFilter = "q4";
  expect(itemsQuestion.rowCount).toEqual(1);
  logic.questionFilter = "";
  expect(itemsQuestion.rowCount).toEqual(3);
});

test("LogicItemEditorUI: filter by question and delete", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{q2} = 2" },
      { type: "text", name: "q4", visibleIf: "{q1} = 3" },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(logic.itemsSurvey.getQuestionByName("items"));
  logic.questionFilter = "q4";
  expect(itemsQuestion.rowCount).toEqual(1);

  itemsQuestion.removeRow(0);
  expect(itemsQuestion.rowCount).toEqual(0);
  expect(survey.getQuestionByName("q4").visibleIf).toBeFalsy();

  logic.questionFilter = "";
  expect(itemsQuestion.rowCount).toEqual(2);
});

test("LogicItemEditorUI: filter by question and addNew", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{q2} = 2" },
      { type: "text", name: "q4", visibleIf: "{q1} = 3" },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  logic.questionFilter = "q4";
  expect(itemsQuestion.rowCount).toEqual(1);

  logic.addNewUI();
  expect(itemsQuestion.rowCount).toEqual(2);
  expect(logic.items).toHaveLength(4);

  logic.expressionEditor.text = "{q1} = 4";
  let panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q4";

  expect(logic.saveEditableItem()).toBeTruthy();
  expect(itemsQuestion.rowCount).toEqual(2);
  expect(logic.items).toHaveLength(4);
  expect(logic.questionFilter).toEqual("q4");

  logic.addNewUI();
  expect(itemsQuestion.rowCount).toEqual(3);
  expect(logic.items).toHaveLength(5);

  logic.expressionEditor.text = "{q1} = 4";
  panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q3";

  expect(logic.saveEditableItem()).toBeTruthy();
  expect(itemsQuestion.rowCount).toEqual(5);
  expect(logic.items).toHaveLength(5);
  expect(logic.questionFilter).toEqual("");
});

test("LogicItemEditorUI: filter by action type", () => {
  const survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3", visibleIf: "{q2} = 2" },
          { type: "text", name: "q4", visibleIf: "{q1} = 3" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q4",
      },
      {
        type: "copyvalue",
        expression: "{q2} = 2",
        setToName: "q3",
        fromName: "q4"
      }
    ],
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(logic.itemsSurvey.getQuestionByName("items"));
  expect(itemsQuestion.rowCount).toEqual(3);
  expect(logic.actionTypeFilter).toBeFalsy();
  logic.actionTypeFilter = "trigger_skip";
  expect(itemsQuestion.rowCount).toEqual(1);
  logic.actionTypeFilter = "";
  expect(itemsQuestion.rowCount).toEqual(3);
});

test("LogicItemEditorUI: filter by actionType and addNew", () => {
  const survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", enableIf: "{q1} = 1" },
          { type: "text", name: "q3", visibleIf: "{q2} = 2" },
          { type: "text", name: "q4", visibleIf: "{q1} = 3" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q4",
      },
      {
        type: "copyvalue",
        expression: "{q2} = 2",
        setToName: "q3",
        fromName: "q4"
      }
    ],
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(logic.itemsSurvey.getQuestionByName("items"));
  logic.actionTypeFilter = "question_enable";
  expect(itemsQuestion.rowCount).toEqual(1);

  logic.addNewUI();
  expect(itemsQuestion.rowCount).toEqual(2);
  expect(logic.items).toHaveLength(4);

  logic.expressionEditor.text = "{q1} = 4";
  let panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_enable";
  panel.getQuestionByName("elementSelector").value = "q4";
  expect(logic.saveEditableItem()).toBeTruthy();
  expect(itemsQuestion.rowCount).toEqual(2);
  expect(logic.items).toHaveLength(4);
  expect(logic.actionTypeFilter).toEqual("question_enable");

  logic.addNewUI();
  expect(itemsQuestion.rowCount).toEqual(3);
  expect(logic.items).toHaveLength(5);

  logic.expressionEditor.text = "{q1} = 4";
  panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_require";
  panel.getQuestionByName("elementSelector").value = "q3";
  expect(logic.saveEditableItem()).toBeTruthy();
  expect(itemsQuestion.rowCount).toEqual(5);
  expect(logic.items).toHaveLength(5);
  expect(logic.actionTypeFilter).toEqual("");
});

test("LogicItemEditorUI: filter by question and action type", () => {
  const survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3", visibleIf: "{q2} = 2" },
          { type: "text", name: "q4", visibleIf: "{q1} = 3" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q2",
      },
      {
        type: "copyvalue",
        expression: "{q2} = 2",
        setToName: "q3",
        fromName: "q4"
      }
    ],
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(logic.itemsSurvey.getQuestionByName("items"));
  expect(itemsQuestion.rowCount).toEqual(3);
  expect(logic.questionFilter).toBeFalsy();
  logic.questionFilter = "q1";
  expect(itemsQuestion.rowCount).toEqual(2);
  logic.actionTypeFilter = "trigger_skip";
  expect(itemsQuestion.rowCount).toEqual(1);
  logic.questionFilter = "q4";
  expect(itemsQuestion.rowCount).toEqual(0);
  logic.questionFilter = "";
  expect(itemsQuestion.rowCount).toEqual(1);
  logic.actionTypeFilter = "";
  expect(itemsQuestion.rowCount).toEqual(3);
});

test("LogicItemEditorUI: getUsedQuestions", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{q2} = 2" },
      { type: "text", name: "q4", visibleIf: "{q1} = 3" },
    ]
  });
  const logic = new SurveyLogic(survey);
  const questions = logic.getUsedQuestions();

  expect(questions).toHaveLength(4);
  expect(questions[0].name).toEqual("q1");
  expect(questions[3].name).toEqual("q4");
});

test("LogicItemEditorUI: getUsedActionTypes", () => {
  const survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3", visibleIf: "{q2} = 2" },
          { type: "text", name: "q4", visibleIf: "{q1} = 3" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q4",
      },
      {
        type: "copyvalue",
        expression: "{q2} = 2",
        setToName: "q3",
        fromName: "q4"
      }
    ],
  });
  const logic = new SurveyLogic(survey);
  const types = logic.getUsedActionTypes();

  expect(types).toHaveLength(3);
  expect(types[0].name).toEqual("question_visibility");
  expect(types[0].displayName).toEqual("Show (hide) question");
  expect(types[1].name).toEqual("trigger_skip");
  expect(types[1].displayName).toEqual("Skip to question");
  expect(types[2].name).toEqual("trigger_copyvalue");
  expect(types[2].displayName).toEqual("Copy question value");
});

test("LogicPlugin: question & action types are sorted ", () => {
  const creator = new CreatorTester({ showLogicTab: true });
  creator.JSON = {
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q10", visibleIf: "{q2} = 2" },
          { type: "text", name: "q4", visibleIf: "{q1} = 3" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q4",
      },
      {
        type: "copyvalue",
        expression: "{q2} = 2",
        setToName: "q10",
        fromName: "q4"
      }
    ],
  };
  const logicPlugin = <TabLogicPlugin>(creator.getPlugin("logic"));
  const filterActionType = logicPlugin.createActions().filter(action => action.id === "svc-logic-filter-actiontype")[0];
  const actionTypes = filterActionType.popupModel.contentComponentData.model.actions;
  const filterQuestion = logicPlugin.createActions().filter(action => action.id === "svc-logic-filter-question")[0];
  const questions = filterQuestion.popupModel.contentComponentData.model.actions;

  logicPlugin.activate();
  expect(actionTypes).toHaveLength(1);
  expect(actionTypes[0].title).toEqual("Show all action types");
  expect(questions).toHaveLength(1);
  expect(questions[0].title).toEqual("Show all questions");

  filterActionType.action();
  expect(actionTypes).toHaveLength(4);
  expect(actionTypes[0].title).toEqual("Show all action types");
  expect(actionTypes[1].title).toEqual("Copy question value");
  expect(actionTypes[2].title).toEqual("Show (hide) question");
  expect(actionTypes[3].title).toEqual("Skip to question");

  filterQuestion.action();
  expect(questions).toHaveLength(5);
  expect(questions[0].title).toEqual("Show all questions");
  expect(questions[1].title).toEqual("q1");
  expect(questions[2].title).toEqual("q2");
  expect(questions[3].title).toEqual("q4");
  expect(questions[4].title).toEqual("q10");
});

test("LogicPlugin: creator.readOnly", () => {
  const creator = new CreatorTester({ showLogicTab: true });
  creator.readOnly = true;
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
    ]
  };
  const logicPlugin = <TabLogicPlugin>(creator.getPlugin("logic"));
  logicPlugin.activate();
  expect(logicPlugin.model.readOnly).toBeTruthy();
  expect(logicPlugin.model.matrixItems.isReadOnly).toBeTruthy();
});

test("LogicItem isSuitable", () => {
  const survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3" },
          { type: "text", name: "q4" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q4",
      },
    ],
  });
  const logic = new SurveyLogic(survey);

  expect(logic.items).toHaveLength(1);
  let item = logic.items[0];

  expect(item.isSuitable("")).toBeTruthy();
  expect(item.isSuitable("q1")).toBeTruthy();
  expect(item.isSuitable("q2")).toBeTruthy();
  expect(item.isSuitable("q3")).toBeFalsy();
  expect(item.isSuitable("q4")).toBeTruthy();

  expect(item.isSuitable("", "")).toBeTruthy();
  expect(item.isSuitable("", "trigger_skip")).toBeTruthy();
  expect(item.isSuitable("", "question_enable")).toBeFalsy();

  expect(item.isSuitable("q3", "trigger_skip")).toBeFalsy();
  expect(item.isSuitable("q2", "question_enable")).toBeFalsy();
  expect(item.isSuitable("q4", "trigger_skip")).toBeTruthy();
});

test("LogicItem getQuestionNames", () => {
  const survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3" },
          { type: "text", name: "q4" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q4",
      },
      {
        type: "copyvalue",
        expression: "{q1} = 1",
        setToName: "q2",
        fromName: "q4"
      }
    ],
  });
  const logic = new SurveyLogic(survey);

  expect(logic.items).toHaveLength(1);
  let item = logic.items[0];

  expect(item.getQuestionNames()).toHaveLength(3);
  expect(item.getQuestionNames()[0]).toEqual("q1");
  expect(item.getQuestionNames()[1]).toEqual("q2");
  expect(item.getQuestionNames()[2]).toEqual("q4");
});

test("LogicItem getActionTypes", () => {
  const survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3" },
          { type: "text", name: "q4" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q4",
      },
      {
        type: "copyvalue",
        expression: "{q1} = 1",
        setToName: "q2",
        fromName: "q4"
      }
    ],
  });
  const logic = new SurveyLogic(survey);

  expect(logic.items).toHaveLength(1);
  let item = logic.items[0];

  expect(item.getActionTypes()).toHaveLength(3);
  expect(item.getActionTypes()[0]).toEqual("question_visibility");
  expect(item.getActionTypes()[1]).toEqual("trigger_skip");
  expect(item.getActionTypes()[2]).toEqual("trigger_copyvalue");
});

test("LogicAction isSuitableByQuestionName", () => {
  const survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q3",
      },
    ],
  });
  const logic = new SurveyLogic(survey);
  const action = logic.items[0].actions[1];
  expect(action.logicTypeName).toEqual("trigger_skip");
  expect(action.isSuitableByQuestionName("q1")).toBeFalsy();
  expect(action.isSuitableByQuestionName("q2")).toBeFalsy();
  expect(action.isSuitableByQuestionName("q3")).toBeTruthy();

  const action1 = new SurveyLogicAction(logic.getTypeByName("question_visibility"), survey.getQuestionByName("q1"), survey);
  expect(action1.isSuitableByQuestionName("q1")).toBeTruthy();
  expect(action1.isSuitableByQuestionName("q2")).toBeFalsy();
});

test("LogicAction isSuitableByLogicType", () => {
  const survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q3",
      },
    ],
  });
  const logic = new SurveyLogic(survey);
  const action1 = new SurveyLogicAction(logic.getTypeByName("question_visibility"), survey.getQuestionByName("q1"), survey);
  expect(action1.isSuitableByLogicType("question_visibility")).toBeTruthy();
  expect(action1.isSuitableByLogicType("trigger_skip")).toBeFalsy();
});
test("Logic onLogicItemRemoving events, Bug#1786", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  let allowRemove = false;
  let counter = 0;
  logic.onLogicItemRemoving.add((_, options) => {
    options.allowRemove = allowRemove;
    counter++;
  });
  let itemsQuestion = <QuestionMatrixDynamicModel>logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.rowCount).toEqual(1);
  expect(counter).toEqual(0);
  itemsQuestion.removeRow(0);
  expect(itemsQuestion.rowCount).toEqual(1);
  expect(logic.items).toHaveLength(1);
  expect(counter).toEqual(1);
  allowRemove = true;
  itemsQuestion.removeRow(0);
  expect(itemsQuestion.rowCount).toEqual(0);
  expect(logic.items).toHaveLength(0);
  expect(counter).toEqual(2);
});
test("Logic action expand/collapse icon update", () => {
  const dummy = new QuestionEmbeddedSurveyModel("dummy");
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  const expandAction = itemsQuestion.renderedTable["rowsActions"][0][1];
  const row = itemsQuestion.visibleRows[0];
  expect(row.isDetailPanelShowing).toBe(false);
  expect(expandAction.iconName).toEqual("icon-logic-expand");
  row.showDetailPanel();
  expect(row.isDetailPanelShowing).toBe(true);
  expect(expandAction.iconName).toEqual("icon-logic-collapse");
  row.hideDetailPanel();
  expect(row.isDetailPanelShowing).toBe(false);
  expect(expandAction.iconName).toEqual("icon-logic-expand");
});
test("SurveyLogicUI: check show/hide action switching placeholder 'Select panel/question'", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      {
        type: "panel", name: "panel1",
        elements: [
          { type: "text", name: "q2" }
        ]
      },
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(0);
  logic.addNew();
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "panel_visibility";
  expect((<QuestionDropdownModel>panel.getQuestionByName("elementSelector")).optionsCaption).toEqual("Select panel...");
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  expect((<QuestionDropdownModel>panel.getQuestionByName("elementSelector")).optionsCaption).toEqual("Select question...");
  panel.getQuestionByName("logicTypeName").value = "panel_visibility";
  expect((<QuestionDropdownModel>panel.getQuestionByName("elementSelector")).optionsCaption).toEqual("Select panel...");
});
test("Use logic for matrix columns", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "matrixdynamic", name: "q1", cellType: "text",
        columns: [{ name: "col1" }, { name: "col2", visibleIf: "{row.col1} = 1" }]
      },
      { type: "text", name: "q2" }
    ]
  });
  const logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  const item = logic.items[0];
  expect(item.expression).toEqual("{row.col1} = 1");
  expect(item.actions).toHaveLength(1);
  expect(item.actions[0].logicTypeName).toEqual(
    "column_visibility"
  );
});
test("LogicUI: edit matrix column visibleIf", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "matrixdynamic", name: "q1", cellType: "text",
        columns: [{ name: "col1" }, { name: "col2", visibleIf: "{row.col1} = 1" }, { name: "col3" }]
      },
      { type: "text", name: "q2" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  logic.editItem(logic.items[0]);
  const expressionEditor = logic.expressionEditor;
  expect(expressionEditor.context).toBeTruthy();
  expect(expressionEditor.context.name).toEqual("q1");
  const itemEditor = logic.itemEditor;
  expect(itemEditor.panels).toHaveLength(1);
  const actionPanel = itemEditor.panels[0];
  const logicTypeName = actionPanel.getQuestionByName("logicTypeName");
  expect(logicTypeName.value).toEqual("column_visibility");
  expect(logicTypeName.displayValue).toEqual("Show (hide) column");
  const colSelector = <QuestionDropdownModel>(actionPanel.getQuestionByName("elementSelector"));
  expect(colSelector.choices).toHaveLength(3);
  expect(colSelector.choices[0].text).toEqual("q1.col1");
  expect(colSelector.value).toEqual("q1.col2");
  colSelector.value = "q1.col3";
  logic.saveEditableItem();
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("q1");
  expect(matrix.columns[1].visibleIf).toBeFalsy();
  expect(matrix.columns[2].name).toEqual("col3");
  expect(matrix.columns[2].visibleIf).toEqual("{row.col1} = 1");
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  const row = itemsQuestion.visibleRows[0];
  expect(row.cells[0].value).toEqual("If 'row.col1' == 1, make column 'col3' of question 'q1' visible");
});
test("LogicUI: edit matrix column visibleIf. Filter selector if there is a context", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "matrixdynamic", name: "q1", cellType: "text",
        columns: [{ name: "col1" }, { name: "col2" }, { name: "col3" }]
      },
      { type: "text", name: "q2" },
      {
        type: "matrixdynamic", name: "q3", cellType: "text",
        columns: [{ name: "col1" }, { name: "col2" }]
      },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  logic.addNew();
  const expressionEditor = logic.expressionEditor;
  expect(expressionEditor.context).toBeFalsy();
  const itemEditor = logic.itemEditor;
  expect(itemEditor.panels).toHaveLength(1);
  expect(itemEditor.context).toBeFalsy();
  let actionPanel = itemEditor.panels[0];
  actionPanel.getQuestionByName("logicTypeName").value = "column_visibility";
  let colSelector = <QuestionDropdownModel>(actionPanel.getQuestionByName("elementSelector"));
  expect(colSelector.choices).toHaveLength(3 + 2);

  expect(expressionEditor.panel.panelCount).toEqual(1);
  const firstExpressionPanel = expressionEditor.panel.panels[0];
  const questionName = <QuestionDropdownModel>firstExpressionPanel.getQuestionByName("questionName");
  questionName.value = "q1.row.col1";
  let questionValue = firstExpressionPanel.getQuestionByName("questionValue");
  questionValue.value = 2;
  expect(expressionEditor.context).toBeTruthy();
  expect(itemEditor.context).toBeTruthy();
  colSelector = <QuestionDropdownModel>(actionPanel.getQuestionByName("elementSelector"));
  expect(colSelector.choices).toHaveLength(3);
  questionName.value = "q2";
  colSelector = <QuestionDropdownModel>(actionPanel.getQuestionByName("elementSelector"));
  expect(colSelector.choices).toHaveLength(3 + 2);
});
test("LogicUI: edit matrix column visibleIf. Filter logic types and delete actions if there is a context", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "matrixdynamic", name: "q1", cellType: "text",
        columns: [{ name: "col1" }, { name: "col2" }, { name: "col3" }]
      },
      { type: "text", name: "q2" },
      {
        type: "matrixdynamic", name: "q3", cellType: "text",
        columns: [{ name: "col1" }, { name: "col2" }]
      },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  logic.addNew();
  const expressionEditor = logic.expressionEditor;
  const itemEditor = logic.itemEditor;
  let actionPanel = itemEditor.panels[0];
  let logicTypeName = <QuestionDropdownModel>actionPanel.getQuestionByName("logicTypeName");
  expect(logicTypeName.choices.length).toBeGreaterThan(3);
  logicTypeName.value = "trigger_complete";
  itemEditor.panel.addPanel();
  actionPanel = itemEditor.panels[1];
  actionPanel.getQuestionByName("logicTypeName").value = "column_visibility";
  expect(itemEditor.panels).toHaveLength(2);

  const firstExpressionPanel = expressionEditor.panel.panels[0];
  const questionName = <QuestionDropdownModel>firstExpressionPanel.getQuestionByName("questionName");
  questionName.value = "q1.row.col1";
  let questionValue = firstExpressionPanel.getQuestionByName("questionValue");
  questionValue.value = 2;
  expect(expressionEditor.context).toBeTruthy();
  expect(itemEditor.context).toBeTruthy();
  expect(itemEditor.panels).toHaveLength(1);
  actionPanel = itemEditor.panels[0];
  logicTypeName = <QuestionDropdownModel>actionPanel.getQuestionByName("logicTypeName");
  expect(logicTypeName.choices.length).toEqual(3);
  expect(logicTypeName.value).toEqual("column_visibility");

  questionName.value = "q2";
  logicTypeName = <QuestionDropdownModel>actionPanel.getQuestionByName("logicTypeName");
  expect(logicTypeName.choices.length).toBeGreaterThan(3);
  expect(logicTypeName.value).toEqual("column_visibility");
});
test("LogicUI: edit matrix column visibleIf. Filter logic types by context initially", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "matrixdynamic", name: "q1", cellType: "text",
        columns: [{ name: "col1" }, { name: "col2", visibleIf: "{row.col1} = 1" }, { name: "col3" }]
      },
      { type: "text", name: "q2" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  logic.editItem(logic.items[0]);
  const itemEditor = logic.itemEditor;
  expect(itemEditor.context).toBeTruthy();
  let actionPanel = itemEditor.panels[0];
  let logicTypeName = <QuestionDropdownModel>actionPanel.getQuestionByName("logicTypeName");
  expect(logicTypeName.value).toEqual("column_visibility");
  expect(logicTypeName.choices.length).toEqual(3);
});
test("LogicUI: edit visibleIf property for panel dynamic question template", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "paneldynamic", name: "q1",
        templateElements: [
          { type: "text", name: "q1_col1" },
          { type: "text", name: "q1_col2", visibleIf: "{panel.q1_col1} = 1" },
          { type: "text", name: "q1_col3" }]
      },
      { type: "text", name: "q2" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(1);
  logic.editItem(logic.items[0]);
  const expressionEditor = logic.expressionEditor;
  expect(expressionEditor.context).toBeTruthy();
  expect(expressionEditor.context.name).toEqual("q1");
  const itemEditor = logic.itemEditor;
  expect(itemEditor.panels).toHaveLength(1);
  const actionPanel = itemEditor.panels[0];
  const logicTypeName = actionPanel.getQuestionByName("logicTypeName");
  expect(logicTypeName.value).toEqual("question_visibility");
  expect(logicTypeName.displayValue).toEqual("Show (hide) question");
  const colSelector = <QuestionDropdownModel>(actionPanel.getQuestionByName("elementSelector"));
  expect(colSelector.choices).toHaveLength(3);
  expect(colSelector.choices[0].text).toEqual("q1.q1_col1");
  expect(colSelector.value).toEqual("q1.q1_col2");
  colSelector.value = "q1.q1_col3";
  logic.saveEditableItem();
  const panel = <QuestionPanelDynamicModel>survey.getQuestionByName("q1");
  expect(<Question>(panel.templateElements[1]).visibleIf).toBeFalsy();
  expect((<Question>panel.templateElements[2]).visibleIf).toEqual("{panel.q1_col1} = 1");
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  const row = itemsQuestion.visibleRows[0];
  expect(row.cells[0].value).toEqual("If 'panel.q1_col1' == 1, make question 'q1_col3' visible");
});
test("LogicUI: edit panel dynamic question visibleIf. Filter selector if there is a context", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "paneldynamic", name: "q1",
        templateElements: [
          { type: "text", name: "q1_col1" },
          { type: "text", name: "q1_col2" },
          { type: "text", name: "q1_col3" }]
      },
      { type: "text", name: "q2" },
      {
        type: "paneldynamic", name: "q3",
        templateElements: [
          { type: "text", name: "q3_col1" },
          { type: "text", name: "q3_col2" },
          { type: "text", name: "q3_col3" }]
      }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  logic.addNew();
  const expressionEditor = logic.expressionEditor;
  expect(expressionEditor.context).toBeFalsy();
  const itemEditor = logic.itemEditor;
  expect(itemEditor.panels).toHaveLength(1);
  expect(itemEditor.context).toBeFalsy();
  let actionPanel = itemEditor.panels[0];
  actionPanel.getQuestionByName("logicTypeName").value = "question_visibility";
  let colSelector = <QuestionDropdownModel>(actionPanel.getQuestionByName("elementSelector"));
  expect(colSelector.choices).toHaveLength((1 + 3) + 1 + (1 + 3));

  expect(expressionEditor.panel.panelCount).toEqual(1);
  const firstExpressionPanel = expressionEditor.panel.panels[0];
  const questionName = <QuestionDropdownModel>firstExpressionPanel.getQuestionByName("questionName");
  questionName.value = "q1.panel.q1_col1";
  let questionValue = firstExpressionPanel.getQuestionByName("questionValue");
  questionValue.value = 2;
  expect(expressionEditor.context).toBeTruthy();
  expect(itemEditor.context).toBeTruthy();
  colSelector = <QuestionDropdownModel>(actionPanel.getQuestionByName("elementSelector"));
  expect(colSelector.choices).toHaveLength(3);
  questionName.value = "q2";
  colSelector = <QuestionDropdownModel>(actionPanel.getQuestionByName("elementSelector"));
  expect(colSelector.choices).toHaveLength((1 + 3) + 1 + (1 + 3));
});
test("LogicUI: edit panel dynamic question visibleIf. Filter logic types and delete actions if there is a context", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "paneldynamic", name: "q1",
        templateElements: [
          { type: "text", name: "q1_col1" },
          { type: "text", name: "q1_col2" },
          { type: "text", name: "q1_col3" }]
      },
      { type: "text", name: "q2" },
      {
        type: "paneldynamic", name: "q3",
        templateElements: [
          { type: "text", name: "q3_col1" },
          { type: "text", name: "q3_col2" },
          { type: "text", name: "q3_col3" }]
      }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  logic.addNew();
  const expressionEditor = logic.expressionEditor;
  const itemEditor = logic.itemEditor;
  let actionPanel = itemEditor.panels[0];
  let logicTypeName = <QuestionDropdownModel>actionPanel.getQuestionByName("logicTypeName");
  expect(logicTypeName.choices.length).toBeGreaterThan(3);
  logicTypeName.value = "trigger_complete";
  itemEditor.panel.addPanel();
  actionPanel = itemEditor.panels[1];
  actionPanel.getQuestionByName("logicTypeName").value = "question_visibility";
  expect(itemEditor.panels).toHaveLength(2);

  const firstExpressionPanel = expressionEditor.panel.panels[0];
  const questionName = <QuestionDropdownModel>firstExpressionPanel.getQuestionByName("questionName");
  questionName.value = "q1.panel.q1_col1";
  let questionValue = firstExpressionPanel.getQuestionByName("questionValue");
  questionValue.value = 2;
  expect(expressionEditor.context).toBeTruthy();
  expect(itemEditor.context).toBeTruthy();
  expect(itemEditor.panels).toHaveLength(1);
  actionPanel = itemEditor.panels[0];
  logicTypeName = <QuestionDropdownModel>actionPanel.getQuestionByName("logicTypeName");
  expect(logicTypeName.choices.length).toEqual(3);
  expect(logicTypeName.value).toEqual("question_visibility");

  questionName.value = "q2";
  logicTypeName = <QuestionDropdownModel>actionPanel.getQuestionByName("logicTypeName");
  expect(logicTypeName.choices.length).toBeGreaterThan(3);
  expect(logicTypeName.value).toEqual("question_visibility");
});
test("LogicUI: panel dynamic question visibleIf. Filter logic types by context initially", () => {
  const survey = new SurveyModel({
    elements: [
      {
        type: "paneldynamic", name: "q1",
        templateElements: [
          { type: "text", name: "q1_col1" },
          { type: "text", name: "q1_col2", visibleIf: "{panel.q1_col1} = 1" },
          { type: "text", name: "q1_col3" }]
      },
      { type: "text", name: "q2" }
    ]
  });
  const logic = new SurveyLogicUI(survey);
  logic.editItem(logic.items[0]);
  const itemEditor = logic.itemEditor;
  expect(itemEditor.context).toBeTruthy();
  let actionPanel = itemEditor.panels[0];
  let logicTypeName = <QuestionDropdownModel>actionPanel.getQuestionByName("logicTypeName");
  expect(logicTypeName.value).toEqual("question_visibility");
  expect(logicTypeName.choices.length).toEqual(3);
});
test("LogicUI: check runExpression question", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      {
        type: "panel", name: "panel1",
        elements: [
          { type: "text", name: "q2" }
        ]
      },
    ]
  });
  const logic = new SurveyLogicUI(survey);
  logic.addNew();
  const panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "trigger_runExpression";
  const runExpressionQuestion = (<QuestionCommentModel>panel.getQuestionByName("runExpression"));
  expect(runExpressionQuestion.titleLocation).toEqual("hidden");
  expect(runExpressionQuestion.placeHolder).toEqual("Type expression here...");
});
test("logic item editing: action panel content for different trigger logic types", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
    ]
  });
  const getTriggerQuestionsPanel = () => {
    return <PanelModel>panel.getElementByName("triggerQuestionsPanel");
  };
  const getTriggerEditorPanel = () => {
    return <PanelModel>panel.getElementByName("triggerEditorPanel");
  };

  const logic = new SurveyLogicUI(survey);
  logic.addNew();
  const panel = logic.itemEditor.panels[0];

  panel.getQuestionByName("logicTypeName").value = "trigger_complete";
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(0);
  expect(getTriggerEditorPanel().visible).toBeFalsy();
  expect(getTriggerEditorPanel().elements.length).toEqual(1);
  expect(getTriggerEditorPanel().elements[0].name).toEqual("expression");

  panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
  expect(getTriggerQuestionsPanel().visible).toBeTruthy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(1);
  expect(getTriggerQuestionsPanel().elements[0].name).toEqual("setToName");
  expect(getTriggerEditorPanel().visible).toBeFalsy();
  expect(getTriggerEditorPanel().elements.length).toEqual(2);
  expect(getTriggerEditorPanel().elements[0].name).toEqual("expression");
  expect(getTriggerEditorPanel().elements[1].name).toEqual("setValue");

  getTriggerQuestionsPanel().getQuestionByName("setToName").value = "q1";
  expect(getTriggerEditorPanel().visible).toBeTruthy();
  expect(getTriggerEditorPanel().elements.length).toEqual(2);
  expect(getTriggerEditorPanel().elements[0].name).toEqual("expression");
  expect(getTriggerEditorPanel().elements[1].name).toEqual("setValue");

  panel.getQuestionByName("logicTypeName").value = "trigger_copyvalue";
  expect(getTriggerQuestionsPanel().visible).toBeTruthy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(2);
  expect(getTriggerQuestionsPanel().elements[0].name).toEqual("fromName");
  expect(getTriggerQuestionsPanel().elements[1].name).toEqual("setToName");
  expect(getTriggerEditorPanel().visible).toBeFalsy();
  expect(getTriggerEditorPanel().elements.length).toEqual(1);
  expect(getTriggerEditorPanel().elements[0].name).toEqual("expression");

  panel.getQuestionByName("logicTypeName").value = "trigger_skip";
  expect(getTriggerQuestionsPanel().visible).toBeTruthy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(1);
  expect(getTriggerQuestionsPanel().elements[0].name).toEqual("gotoName");
  expect(getTriggerEditorPanel().visible).toBeFalsy();
  expect(getTriggerEditorPanel().elements.length).toEqual(1);
  expect(getTriggerEditorPanel().elements[0].name).toEqual("expression");

  panel.getQuestionByName("logicTypeName").value = "trigger_runExpression";
  expect(getTriggerQuestionsPanel().visible).toBeTruthy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(1);
  expect(getTriggerQuestionsPanel().elements[0].name).toEqual("setToName");
  expect(getTriggerEditorPanel().visible).toBeTruthy();
  expect(getTriggerEditorPanel().elements.length).toEqual(2);
  expect(getTriggerEditorPanel().elements[0].name).toEqual("expression");
  expect(getTriggerEditorPanel().elements[1].name).toEqual("runExpression");

  panel.getQuestionByName("logicTypeName").value = "completedHtmlOnCondition";
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(0);
  expect(getTriggerEditorPanel().visible).toBeTruthy();
  expect(getTriggerEditorPanel().elements.length).toEqual(2);
  expect(getTriggerEditorPanel().elements[0].name).toEqual("expression");
  expect(getTriggerEditorPanel().elements[1].name).toEqual("html");
});

test("logic item editing: restoring selected elements after changing the logical type", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  });
  const getTriggerQuestionsPanel = () => {
    return <PanelModel>panel.getElementByName("triggerQuestionsPanel");
  };
  const elementSelector = () => {
    return <QuestionDropdownModel>panel.getQuestionByName("elementSelector");
  };

  const logic = new SurveyLogicUI(survey);
  logic.addNew();
  const panel = logic.itemEditor.panels[0];

  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  expect(elementSelector().visible).toBeTruthy();
  expect(elementSelector().value).toEqual(undefined);
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();

  elementSelector().value = "q1";
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  expect(elementSelector().visible).toBeTruthy();
  expect(elementSelector().value).toEqual("q1");
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();

  panel.getQuestionByName("logicTypeName").value = "question_enable";
  expect(elementSelector().visible).toBeTruthy();
  expect(elementSelector().value).toEqual("q1");
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();

  panel.getQuestionByName("logicTypeName").value = "question_require";
  expect(elementSelector().visible).toBeTruthy();
  expect(elementSelector().value).toEqual("q1");
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();

  panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
  expect(getTriggerQuestionsPanel().visible).toBeTruthy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(1);
  expect(getTriggerQuestionsPanel().elements[0].name).toEqual("setToName");
  expect(getTriggerQuestionsPanel().elements[0].value).toEqual("q1");
  expect(elementSelector().visible).toBeFalsy();

  panel.getQuestionByName("logicTypeName").value = "trigger_copyvalue";
  expect(getTriggerQuestionsPanel().visible).toBeTruthy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(2);
  expect(getTriggerQuestionsPanel().elements[0].name).toEqual("fromName");
  expect(getTriggerQuestionsPanel().elements[0].value).toEqual("q1");
  expect(getTriggerQuestionsPanel().elements[1].name).toEqual("setToName");
  expect(getTriggerQuestionsPanel().elements[1].value).toEqual(undefined);
  expect(elementSelector().visible).toBeFalsy();

  panel.getQuestionByName("logicTypeName").value = "trigger_skip";
  expect(getTriggerQuestionsPanel().visible).toBeTruthy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(1);
  expect(getTriggerQuestionsPanel().elements[0].name).toEqual("gotoName");
  expect(getTriggerQuestionsPanel().elements[0].value).toEqual("q1");
  expect(elementSelector().visible).toBeFalsy();

  panel.getQuestionByName("logicTypeName").value = "trigger_runExpression";
  expect(getTriggerQuestionsPanel().visible).toBeTruthy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(1);
  expect(getTriggerQuestionsPanel().elements[0].name).toEqual("setToName");
  expect(getTriggerQuestionsPanel().elements[0].value).toEqual("q1");
  expect(elementSelector().visible).toBeFalsy();

  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  expect(elementSelector().visible).toBeTruthy();
  expect(elementSelector().value).toEqual("q1");
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();

  panel.getQuestionByName("logicTypeName").value = "completedHtmlOnCondition";
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(0);
  expect(elementSelector().visible).toBeFalsy();

  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  expect(elementSelector().visible).toBeTruthy();
  expect(elementSelector().value).toEqual(undefined);
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();

  elementSelector().value = "q1";

  panel.getQuestionByName("logicTypeName").value = "trigger_complete";
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();
  expect(getTriggerQuestionsPanel().elements.length).toEqual(0);
  expect(elementSelector().visible).toBeFalsy();

  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  expect(elementSelector().visible).toBeTruthy();
  expect(elementSelector().value).toEqual(undefined);
  expect(getTriggerQuestionsPanel().visible).toBeFalsy();
});
test("LogicItemUI readOnly", () => {
  const survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3" },
          { type: "text", name: "q4" },
        ],
      },
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q4",
      },
    ],
  });
  const logic = new SurveyLogicUI(survey);
  logic.readOnly = true;
  expect(logic.matrixItems.isReadOnly).toBeTruthy();
});
test("wrapTextByCurlyBraces", () => {
  expect(wrapTextByCurlyBraces("q1")).toEqual("{q1}");
  settings.logic.openBracket = "[";
  settings.logic.closeBracket = "]";
  expect(wrapTextByCurlyBraces("q1")).toEqual("[q1]");
  settings.logic.openBracket = "{";
  settings.logic.closeBracket = "}";
  expect(wrapTextByCurlyBraces("q1")).toEqual("{q1}");
});