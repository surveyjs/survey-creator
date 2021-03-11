import {
  SurveyModel,
  QuestionHtmlModel,
  QuestionDropdownModel,
  SurveyTriggerRunExpression,
  PanelModel,
  SurveyTriggerSkip,
  QuestionMatrixDynamicModel,
} from "survey-core";
import { SurveyLogic } from "../../src/tabs/logic";
import { SurveyLogicUI } from "../../src/tabs/logic-ui";
import { LogicItemEditor } from "../../src/tabs/logic-item-editor";
import { SurveyLogicAction, SurveyLogicItem } from "../../src/tabs/logic-items";
import { getLogicString } from "../../src/tabs/logic-types";
import { settings } from "../../src/settings";
import { getLocString } from "../../src/editorLocalization";
import { PropertyGridEditorCollection } from "../../src/property-grid/index";
import { PropertyGridEditorExpression } from "../../src/property-grid/condition";

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
  qSelector.value = "q4";
  editor.apply();
  expect(logic.items[0].actions[0].element).toEqual(
    survey.getQuestionByName("q4")
  );
  logic.items[0].apply("{q1} = 1");
  expect(survey.getQuestionByName("q2").visibleIf).toBeFalsy();
  expect(survey.getQuestionByName("q3").visibleIf).toEqual("{q1} = 1");
  expect(survey.getQuestionByName("q4").visibleIf).toEqual("{q1} = 1");
});
test("LogicItemEditor: update a trigger", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
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
      { type: "text", name: "q3" },
    ],
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
  var elSelectionQuestion = editor.panels[0].getQuestionByName(
    "elementSelector"
  );
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
      { type: "text", name: "q3", visibleIf: "{q1} = 1" },
    ],
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
  var elSelectionQuestion = editor.panels[0].getQuestionByName(
    "elementSelector"
  );
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
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
    ],
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
      { type: "text", name: "q5" },
    ],
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(2);
  var itemsQuestion = logic.itemsSurvey.getQuestionByName("items");
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
test("SurveyLogicUI: Test logicItemsSurvey, data content on editing", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4", visibleIf: "{q1}=2" },
      { type: "text", name: "q5" },
    ],
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(2);
  var itemsQuestion = <QuestionMatrixDynamicModel>(
    logic.itemsSurvey.getQuestionByName("items")
  );
  var rows = itemsQuestion.visibleRows;
  expect(rows[0].cells[0].value).toEqual(logic.items[0].expressionText);
  logic.editItem(logic.items[0]);
  logic.expressionEditor.text = "{q1}=3";
  logic.saveEditableItem();
  rows = itemsQuestion.visibleRows;
  expect(rows[0].cells[0].value).toEqual(logic.items[0].expressionText);
});

test("SurveyLogicUI: Test logicItemEditor", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4", visibleIf: "{q1}=2" },
      { type: "text", name: "q5" },
    ],
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(2);
  expect(logic.itemEditor).toBeTruthy();
  expect(logic.itemEditor.editableItem).toBeFalsy();
  expect(logic.itemEditor.panel.title).toEqual(
    getLogicString("actionsEditorTitle")
  );
  logic.editItem(logic.items[0]);
  expect(logic.itemEditor.editableItem).toBeTruthy();
  expect(logic.itemEditor.panels).toHaveLength(2);
  expect(logic.mode).toEqual("edit");
  logic.mode = "view";
  expect(logic.itemEditor.editableItem).toBeFalsy();
});
test("SurveyLogicUI: Add new item and action", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
    ],
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
test("SurveyLogicUI: Do not duplicate new items", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
    ],
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
      { type: "text", name: "q3" },
    ],
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

  expect(logic.items).toHaveLength(0);
  logic.expressionEditor.text = "{q1} = 1";

  res = logic.saveEditableItem();
  expect(res).toBeFalsy();
  expect(logic.items).toHaveLength(0);

  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q2";

  res = logic.saveEditableItem();
  expect(res).toBeTruthy();
  expect(logic.items).toHaveLength(1);
});
test("SurveyLogicUI: create skipTo trigger", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
      { type: "text", name: "q4" },
    ],
  });
  var logic = new SurveyLogicUI(survey);
  logic.addNew();
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "trigger_skip";
  var elementPanel = <PanelModel>panel.getElementByName("elementPanel");
  expect(elementPanel.visible).toBeTruthy();
  var gotoNameQuestion = elementPanel.getQuestionByName("gotoName");
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
test("SurveyLogicUI: create trigger_runExpression trigger", () => {
  PropertyGridEditorCollection.register(new PropertyGridEditorExpression());
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
      { type: "text", name: "q4" },
    ],
  });
  var logic = new SurveyLogicUI(survey);
  logic.addNew();
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "trigger_runExpression";
  var elementPanel = <PanelModel>panel.getElementByName("elementPanel");
  var runExpressionQuestion = elementPanel.getQuestionByName("runExpression");
  expect(runExpressionQuestion).toBeTruthy();
  var actions = runExpressionQuestion.getTitleActions();
  expect(actions).toHaveLength(1);
  expect(actions[0].id).toEqual("property-grid-clear");
});
test("LogicItemEditorUI: remove item", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", visibleIf: "{q1} = 1" },
    ],
  });
  expect(survey.getQuestionByName("q2").visibleIf).toBeTruthy();
  var logic = new SurveyLogicUI(survey);
  var itemsQuestion = logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.rowCount).toEqual(1);
  itemsQuestion.removeRow(0);
  expect(itemsQuestion.rowCount).toEqual(0);
  expect(survey.getQuestionByName("q2").visibleIf).toBeFalsy();
});
