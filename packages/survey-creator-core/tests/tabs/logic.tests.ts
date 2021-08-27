import {
  SurveyModel,
  QuestionHtmlModel,
  QuestionDropdownModel,
  SurveyTriggerRunExpression,
  PanelModel,
  SurveyTriggerSkip,
  QuestionMatrixDynamicModel,
  QuestionCustomModel,
  AdaptiveActionContainer
} from "survey-core";
import { SurveyLogic } from "../../src/components/tabs/logic";
import { SurveyLogicUI } from "../../src/components/tabs/logic-ui";
import { LogicItemEditor } from "../../src/components/tabs/logic-item-editor";
import { getLogicString } from "../../src/components/tabs/logic-types";
import { PropertyGridEditorCollection } from "../../src/property-grid/index";
import { PropertyGridEditorExpression } from "../../src/property-grid/condition";
import { EmptySurveyCreatorOptions } from "../../src/settings";
import { PropertyGridTriggerValueEditor } from "../../src/property-grid/values";
import {QuestionEmbeddedSurveyModel} from "../../src/components/embedded-survey"

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
  var elSelectionQuestion =
    editor.panels[0].getQuestionByName("elementSelector");
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
  var elSelectionQuestion =
    editor.panels[0].getQuestionByName("elementSelector");
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
test("SurveyLogicUI: Test changing list data on saveEditableItemAndBack", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
      { type: "text", name: "q4" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.items).toHaveLength(1);
  var itemsQuestion = logic.itemsSurvey.getQuestionByName("items");
  var rows = itemsQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  expect(rows[0].cells).toHaveLength(2);
  expect(rows[0].cells[0].question.getType()).toEqual("linkvalue");
  expect(rows[0].cells[1].question.getType()).toEqual("linkvalue");
  expect(itemsQuestion.value).toHaveLength(1);
  expect(itemsQuestion.value[0].conditions).toEqual(
    "When expression: '{q1} == 1' returns true:"
  );
  expect(itemsQuestion.value[0].actions).toEqual("Make question {q3} visible");
  logic.editItem(logic.items[0]);
  logic.expressionEditor.text = "{q2}=1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("elementSelector").value = "q4";
  var res = logic.saveEditableItemAndBack();
  expect(res).toBeTruthy();
  itemsQuestion = logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.value).toHaveLength(1);
  expect(itemsQuestion.value[0].conditions).toEqual(
    "When expression: '{q2} == 1' returns true:"
  );
  expect(itemsQuestion.value[0].actions).toEqual("Make question {q4} visible");
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
      { type: "text", name: "q5" }
    ]
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
      { type: "text", name: "q4" }
    ]
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
  expect(actions).toHaveLength(2);
  expect(actions[0].id).toEqual("property-grid-clear");
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
  var itemsQuestion = logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.rowCount).toEqual(1);
  itemsQuestion.removeRow(0);
  expect(itemsQuestion.rowCount).toEqual(0);
  expect(survey.getQuestionByName("q2").visibleIf).toBeFalsy();
});
test("Create setValue trigger in logic", () => {
  PropertyGridEditorCollection.register(new PropertyGridTriggerValueEditor());
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", readOnly: true }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  logic.addNew();
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
  var elementPanel = <PanelModel>panel.getElementByName("elementPanel");
  var setValueQuestion = <QuestionCustomModel>(
    elementPanel.getQuestionByName("setValue")
  );
  expect(setValueQuestion).toBeTruthy();
  expect(setValueQuestion.isVisible).toBeFalsy();
  elementPanel.getQuestionByName("setToName").value = "q2";
  expect(setValueQuestion.isVisible).toBeTruthy();
  elementPanel.getQuestionByName("setToName").clearValue();
  expect(setValueQuestion.isVisible).toBeFalsy();
  elementPanel.getQuestionByName("setToName").value = "q2";
  expect(setValueQuestion.isVisible).toBeTruthy();
  var setValuePropEditor = PropertyGridEditorCollection.getEditor(
    setValueQuestion.property
  );
  expect(setValuePropEditor).toBeTruthy();
  var setupValueEditor = setValuePropEditor.createPropertyEditorSetup(
    survey,
    setValueQuestion.property,
    setValueQuestion,
    new EmptySurveyCreatorOptions()
  );
  expect(setupValueEditor).toBeTruthy();
  var editorSetValueQuestion = setupValueEditor.editSurvey.getAllQuestions()[0];
  expect(editorSetValueQuestion.isReadOnly).toBeFalsy();
  editorSetValueQuestion.value = 2;
  setupValueEditor.apply();
  expect(setValueQuestion.value).toEqual(2);

  panel.getQuestionByName("logicTypeName").value = "trigger_complete";
  panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
  elementPanel = <PanelModel>panel.getElementByName("elementPanel");
  expect(elementPanel.getQuestionByName("setToName").value).toBeFalsy();
  expect(elementPanel.getQuestionByName("setValue").value).toBeFalsy();
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
  var itemsQuestion = logic.itemsSurvey.getQuestionByName("items");
  expect(itemsQuestion.rowCount).toEqual(1);
  expect(logic.expressionEditor).toBeFalsy();
  logic.editItem(logic.items[0]);
  expect(logic.mode).toEqual("edit");
  expect(logic.expressionEditor).toBeTruthy();

  var editor = logic.expressionEditor;
  expect(editor.isModal).toBeFalsy();
  expect(editor.panel.titleLocation).toEqual("default");
  expect(editor.panel.visible).toBeTruthy();
  expect(editor.textEditor.visible).toBeFalsy();
  var actions = editor.panel.getTitleActions();
  expect(actions).toHaveLength(2);
  expect(actions[0].title).toEqual("Build");
  expect(actions[1].title).toEqual("Edit");
  expect(actions[0].active).toBeTruthy();
  expect(actions[1].active).toBeFalsy();
  actions[1].action();
  expect(editor.panel.visible).toBeFalsy();
  expect(editor.textEditor.visible).toBeTruthy();
  expect(editor.textEditor.value).toEqual("{q1} = 1");

  logic.mode = "view";
  expect(logic.expressionEditor).toBeFalsy();

  logic.editItem(logic.items[0]);
  expect(logic.expressionEditor).toBeTruthy();
  editor = logic.expressionEditor;
  expect(editor.textEditor.visible).toBeFalsy();
  var actions = editor.panel.getTitleActions();
  expect(actions[0].active).toBeTruthy();
  expect(actions[1].active).toBeFalsy();
  actions[1].action();
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
  expect(itemsQuestion.renderedTable.rows[0].cells).toHaveLength(4);
  const cell = itemsQuestion.renderedTable.rows[0].cells[3];
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
  expect(logic.items[0].expressionText).toEqual("New rule is not set");
  expect(itemsQuestion.rowCount).toEqual(1);
  const row = itemsQuestion.visibleRows[0];
  expect(row.cells[0].question.value).toEqual("New rule is not set");
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
  logic.expressionEditor.text = "{q1} = 1"

  const actionsQuestion = <QuestionEmbeddedSurveyModel>row.detailPanel.getQuestionByName("actions");
  expect(actionsQuestion).toBeTruthy();
  expect(actionsQuestion.embeddedSurvey).toBeTruthy();
  expect(logic.itemEditor.editSurvey).toBeTruthy();
  expect(logic.itemEditor.panels).toHaveLength(1);
  expect(actionsQuestion.embeddedSurvey).toEqual(logic.itemEditor.editSurvey);
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility"
  panel.getQuestionByName("elementSelector").value = "q2";
  
  row.detailPanel.footerActions[0].action();
  expect(logic.mode).toEqual("view");
  expect(row.detailPanel).toBeFalsy();
  expect(row.cells[0].question.value).toEqual("When expression: '{q1} == 1' returns true:");
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
  expect(logic.toolbar.actions[0].enabled).toBeTruthy();
  logic.addNewUI();
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeTruthy();
  expect(itemsQuestion.rowCount).toEqual(1);
  const row = itemsQuestion.visibleRows[0];
  expect(row.hasPanel).toBeTruthy();
  expect(logic.mode).toEqual("new");
  expect(row.detailPanel).toBeTruthy();
  expect(logic.toolbar.actions[0].enabled).toBeFalsy();
  row.hideDetailPanel();
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeTruthy();
  expect(logic.toolbar.actions[0].enabled).toBeTruthy();
  logic.addNewUI();
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeTruthy();
  expect(logic.toolbar.actions[0].enabled).toBeFalsy();
  itemsQuestion.removeRow(0);
  expect(itemsQuestion.rowCount).toEqual(0);
  expect(logic.items).toHaveLength(0);
  expect(logic.toolbar.actions[0].enabled).toBeTruthy();
});