import * as Survey from "survey-knockout";
import { SurveyLogic, SurveyLogicAction } from "../src/logic";
import { EditorOptionsTests } from "./editorOptionsTests";
import { SurveyCreator } from "../src/editor";
import { SurveyElementEditorContent } from "../src/questionEditors/questionEditor";

export default QUnit.module("LogicTabTests");

QUnit.test("Page visibility logic", function(assert) {
  var survey = new Survey.SurveyModel({});
  var logic = new SurveyLogic(survey);
  var pageVis = logic.getTypeByName("page_visibility");
  assert.ok(pageVis);
  assert.equal(pageVis.visible, false, "There is no pages");
  survey.addNewPage("p1");
  logic.update();
  pageVis = logic.getTypeByName("page_visibility");
  assert.equal(pageVis.visible, false, "There is one page only");
  survey.addNewPage("p2");
  logic.update();
  pageVis = logic.getTypeByName("page_visibility");
  assert.equal(pageVis.visible, true, "There are two pages");
});
QUnit.test("Question visibility logic", function(assert) {
  var survey = new Survey.SurveyModel({});
  survey.addNewPage("p1");
  var logic = new SurveyLogic(survey);
  var questionVis = logic.getTypeByName("question_visibility");
  assert.ok(questionVis);
  assert.equal(questionVis.visible, false, "There is no questions");
  survey.pages[0].addNewQuestion("text", "q1");
  assert.equal(survey.getAllQuestions().length, 1, "There is one question now");
  logic.update();
  questionVis = logic.getTypeByName("question_visibility");
  assert.equal(questionVis.visible, true, "There is a question");
});
QUnit.test("Panel visibility logic", function(assert) {
  var survey = new Survey.SurveyModel({});
  survey.addNewPage("p1");
  var logic = new SurveyLogic(survey);
  var panelVis = logic.getTypeByName("panel_visibility");
  assert.ok(panelVis);
  assert.equal(panelVis.visible, false, "There is no panels");
  survey.pages[0].addNewPanel("panel1");
  assert.equal(survey.getAllPanels().length, 1, "There is one panel now");
  logic.update();
  panelVis = logic.getTypeByName("panel_visibility");
  assert.equal(panelVis.visible, true, "There is a panel");
});
QUnit.test("Do not show ShowInUI=false visibility logic", function(assert) {
  var survey = new Survey.SurveyModel({});
  var logic = new SurveyLogic(survey);
  var validatorLogic = logic.getTypeByName("question_expressionValidator");
  assert.ok(validatorLogic);
  assert.equal(validatorLogic.visible, false, "showInUI returns false");
});
QUnit.test("Add existing visible Items", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q2}=1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
    ],
  });
  var logic = new SurveyLogic(survey);
  assert.equal(logic.items.length, 2, "There are two items");
});
QUnit.test("Add new action immediately", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }],
  });
  var logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "view", "Default is mode is view");
  logic.addNew();
  assert.equal(logic.mode, "new", "Add new item");
  var action = logic.editableItem.actions[0];
  action.logicType = logic.getTypeByName("question_visibility");
  action.itemSelector.koValue("q1");
  logic.expressionEditor.koValue("{q2} = 1");
  logic.saveEditableItem();
  assert.equal(
    (<Survey.Question>survey.getQuestionByName("q1")).visibleIf,
    "{q2} = 1",
    "Set q1.visibleIf correctly"
  );
});
QUnit.test("Do not add expression question into visible Items", function(
  assert
) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "expression", name: "q2", expression: "{q1}+1" },
    ],
  });
  var logic = new SurveyLogic(survey);
  assert.equal(logic.items.length, 0, "There is not visible items");
  assert.equal(logic.invisibleItems.length, 1, "There is one invisible item");
});
QUnit.test("Add new item", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  logic.addNew();
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q2}=1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3" },
    ],
  });
  logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "view", "There are items");
  logic.editItem(logic.items[0]);
  logic.addNew();
  assert.equal(logic.mode, "new", "change to the select type mode");
  assert.ok(logic.editableItem, "Editable item is created");
  assert.ok(logic.expressionEditor, "expression editor is created");
  assert.equal(logic.expressionEditor.koValue(), "", "the expression is empty");
  assert.equal(
    logic.expressionEditor.allConditionQuestions.length,
    3,
    "We have 3 questions here"
  );
  assert.equal(logic.editableItem.actions.length, 1, "There is one action");
  var action = logic.editableItem.actions[0];
  action.logicType = logic.getTypeByName("question_visibility");
  var itemSelector = action.itemSelector;
  assert.equal(
    itemSelector.koElements().length,
    3,
    "There are three questions"
  );
  itemSelector.updateItems();
  assert.equal(
    itemSelector.koElements()[0].koDisabled(),
    true,
    "q1 is disabled"
  );
  assert.equal(
    itemSelector.koElements()[1].koDisabled(),
    true,
    "q2 is disabled"
  );
  assert.equal(
    itemSelector.koElements()[2].koDisabled(),
    false,
    "q3 is enabled"
  );
  itemSelector.koValue("q3");
  logic.expressionEditor.koValue("{q1} = 2");
  assert.equal(action.element["name"], "q3", "Question set correctly");
  assert.equal(logic.saveEditableItem(), true, "Save correctly");
  var q3 = <Survey.Question>survey.getQuestionByName("q3");
  assert.equal(q3.visibleIf, "{q1} = 2");
  assert.equal(logic.items.length, 3, "There are 3 items now");
});
QUnit.test("Edit existing item", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  logic.addNew();
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3} =1" },
      { type: "text", name: "q3" },
    ],
  });
  logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "view", "There are items");
  assert.equal(logic.items.length, 1, "There is one item");
  assert.equal(logic.items[0].actions.length, 2, "The item has two actions");
  assert.equal(
    logic.items[0].actions[0].element["name"],
    "q1",
    "Element in the first action set correctly"
  );
  logic.editItem(logic.items[0]);
  assert.ok(logic.editableItem, "Editable item is set");
  assert.equal(
    logic.expressionEditor.koValue(),
    "{q3}=1",
    "Expression is set for editing"
  );
});
QUnit.test("Use SurveyItemSelector for editing", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  logic.addNew();
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" },
      { type: "text", name: "q3", visibleIf: "{q2}=1" },
      { type: "text", name: "q4" },
    ],
  });
  logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "view", "There are items");
  assert.equal(logic.items.length, 2, "There are two items");
  logic.editItem(logic.items[0]);
  var itemSelector = logic.editableItem.actions[0].itemSelector;
  itemSelector.updateItems();
  assert.ok(itemSelector, "itemSelector has been created");
  assert.equal(
    itemSelector.koElements().length,
    4,
    "All questions are available, op0"
  );
  assert.equal(
    itemSelector.koElements()[1].koDisabled(),
    true,
    "The q2 is disabled, op0"
  );
  assert.equal(
    itemSelector.koElements()[2].koDisabled(),
    true,
    "The q3 is disabled, op0"
  );
  logic.addNewAction;
  var action = logic.addAction(logic.getTypeByName("question_visibility"));
  action.itemSelector.koValue("q4");
  assert.equal(action.element["name"], "q4", "Eleement set correctly");
  logic.saveEditableItem();
  logic.mode = "view";
  logic.editItem(logic.items[1]);
  itemSelector = logic.editableItem.actions[0].itemSelector;
  itemSelector.updateItems();
  assert.equal(
    itemSelector.koElements().length,
    4,
    "Just one question is available, op0"
  );
  assert.equal(
    itemSelector.koElements()[0].koDisabled(),
    true,
    "The q1 is disabled"
  );
});
QUnit.test("Remove same actions on save", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  logic.addNew();
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2" },
    ],
  });
  logic = new SurveyLogic(survey);
  logic.editItem(logic.items[0]);
  var lt = logic.getTypeByName("question_visibility");
  logic.addAction(lt, <Survey.Question>survey.getQuestionByName("q1"));
  logic.addAction(lt, <Survey.Question>survey.getQuestionByName("q2"));
  logic.addAction(lt, <Survey.Question>survey.getQuestionByName("q2"));
  assert.equal(logic.editableItem.actions.length, 4, "There are 4 actions");
  logic.saveEditableItem();
  assert.equal(
    logic.editableItem.actions.length,
    2,
    "There are 2 actions left"
  );
});
QUnit.test("Remove existing action", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  logic.addNew();
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" },
    ],
  });
  logic = new SurveyLogic(survey);
  logic.editItem(logic.items[0]);
  logic.editableItem.removeAction(logic.items[0].actions[1]);
  logic.saveEditableItem();
  assert.equal(
    (<Survey.Question>survey.getQuestionByName("q2")).visibleIf,
    "",
    "Remove the visibleIf"
  );
});
QUnit.test("Remove existing item", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" },
    ],
  });
  var logic = new SurveyLogic(survey);
  logic.removeItem(logic.items[0]);
  assert.equal(logic.items.length, 0, "There is no more items");
  assert.equal(
    (<Survey.Question>survey.getQuestionByName("q1")).visibleIf,
    "",
    "Remove the visibleIf from q1"
  );
  assert.equal(
    (<Survey.Question>survey.getQuestionByName("q2")).visibleIf,
    "",
    "Remove the visibleIf from q2"
  );
});

QUnit.test("Rename the name", function(assert) {
  var survey = new Survey.SurveyModel({
    pages: [
      {
        name: "page1",
        visibleIf: "{q2} != 2",
        elements: [{ type: "text", name: "q1", enableIf: "{q2} > 2" }],
      },
      {
        name: "page2",
        visibleIf: "{Q1} != 1 and {q1} < 1",
        elements: [{ type: "text", name: "q2", requiredIf: "{q1} < 1" }],
      },
      {
        name: "page3",
        elements: [
          {
            type: "panel",
            name: "panel1",
            visibleIf: "{q1} = 1",
            enableIf: "{q2} = 2",
            elements: [
              {
                type: "text",
                name: "q3",
                validators: [
                  { type: "expressionvalidator", expression: "{q1} > 1" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "page4",
        elements: [
          { type: "expression", name: "q4", expression: "{q1} + {q2}" },
        ],
      },
      {
        name: "page5",
        elements: [
          {
            type: "matrixdropdown",
            name: "q5",
            columns: [
              {
                name: "col1",
                visibleIf: "{q1} = 1",
                enableIf: "{q2} = 2",
                requiredIf: "{q1} = 1",
                totalExpression: "{q1} + {q2}",
              },
            ],
          },
        ],
      },
      {
        name: "page6",
        elements: [
          {
            type: "matrixdropdown",
            name: "q6",
            rowsVisibleIf: "{item} = {q1}",
          },
          {
            type: "matrix",
            name: "q7",
            rowsVisibleIf: "{item} = {q1}",
            columnsVisibleIf: "{item} = {q2}",
          },
        ],
      },
      {
        name: "page7",
        elements: [
          {
            type: "radiogroup",
            name: "q8",
            choicesVisibleIf: "{item} = {q1}",
            choicesEnableIf: "{item} = {q2}",
            choices: [
              { value: 1, visibleIf: "{q1} = 1", enableIf: "{q2} = 2" },
            ],
          },
        ],
      },
    ],
    triggers: [
      {
        type: "runexpression",
        expression: "{q1} = 1",
        runExpression: "{q2} + 1",
      },
      {
        type: "complete",
        expression: "{q1} = 1",
      },
      {
        type: "copyvalue",
        expression: "{q1} = 1",
        setToName: "q1",
        fromName: "q2",
      },
    ],
    completedHtmlOnCondition: [
      {
        expression: "{q1} = 1",
        html: "text",
      },
    ],
    calculatedValues: [
      {
        name: "var1",
        expression: "{q1} = 1",
      },
    ],
  });
  var logic = new SurveyLogic(survey);
  var q1 = <Survey.Question>survey.getQuestionByName("q1");
  var q2 = <Survey.Question>survey.getQuestionByName("q2");
  var q3 = <Survey.Question>survey.getQuestionByName("q3");
  var validator = <Survey.ExpressionValidator>q3.validators[0];
  var panel1 = <Survey.Panel>survey.getPanelByName("panel1");
  var q4 = <Survey.QuestionExpression>survey.getQuestionByName("q4");
  var q5 = <Survey.QuestionMatrixDropdown>survey.getQuestionByName("q5");
  var q6 = <Survey.QuestionMatrixDropdown>survey.getQuestionByName("q6");
  var q7 = <Survey.QuestionMatrix>survey.getQuestionByName("q7");
  var q8 = <Survey.QuestionRadiogroup>survey.getQuestionByName("q8");
  var trigger1 = <Survey.SurveyTriggerRunExpression>survey.triggers[0];
  var trigger2 = <Survey.SurveyTriggerComplete>survey.triggers[1];
  var trigger3 = <Survey.SurveyTriggerCopyValue>survey.triggers[2];
  var q5col1 = q5.columns[0];
  logic.renameQuestion("Q1", "question1");
  logic.renameQuestion("q2", "question2");
  assert.equal(
    survey.pages[0].visibleIf,
    "{question2} != 2",
    "Rename q1: page1.visibleIf"
  );
  assert.equal(
    survey.pages[1].visibleIf,
    "{question1} != 1 and {question1} < 1",
    "Rename q2: page1.visibleIf"
  );
  assert.equal(q1.enableIf, "{question2} > 2", "Rename q2: q1.enableIf");
  assert.equal(q2.requiredIf, "{question1} < 1", "Rename q1: q2.requiredIf");

  assert.equal(
    panel1.visibleIf,
    "{question1} = 1",
    "Rename panel1: panel1.visibleIf"
  );
  assert.equal(
    panel1.enableIf,
    "{question2} = 2",
    "Rename panel1: panel1.enableIf"
  );
  assert.equal(
    q4.expression,
    "{question1} + {question2}",
    "Rename q4(expression): q4.expression"
  );
  assert.equal(
    q5col1.visibleIf,
    "{question1} = 1",
    "Rename q1: q5_column1.visibleIf"
  );
  assert.equal(
    q5col1.enableIf,
    "{question2} = 2",
    "Rename q2: q5_column1.enableIf"
  );
  assert.equal(
    q5col1.requiredIf,
    "{question1} = 1",
    "Rename q1: q5_column1.requiredIf"
  );
  assert.equal(
    q5col1.totalExpression,
    "{question1} + {question2}",
    "Rename q1 and q2: q5_column1.totalExpression"
  );
  assert.equal(
    trigger1.expression,
    "{question1} = 1",
    "Rename q1: trigger.expression"
  );
  assert.equal(
    trigger1.runExpression,
    "{question2} + 1",
    "Rename q2: trigger.runExpression"
  );
  assert.equal(
    trigger2.expression,
    "{question1} = 1",
    "Rename q1: trigger2.expression"
  );
  assert.equal(
    trigger3.expression,
    "{question1} = 1",
    "Rename q1: trigger3.expression"
  );
  assert.equal(
    trigger3.setToName,
    "question1",
    "Rename q1: trigger3.setToName"
  );
  assert.equal(trigger3.fromName, "question2", "Rename q2: trigger3.fromName");
  assert.equal(
    validator.expression,
    "{question1} > 1",
    "Rename q1: validator.expression"
  );
  assert.equal(
    q6.rowsVisibleIf,
    "{item} = {question1}",
    "Rename q1: matrixdropdown.rowsVisibleIf"
  );
  assert.equal(
    q7.rowsVisibleIf,
    "{item} = {question1}",
    "Rename q1: matrix.rowsVisibleIf"
  );
  assert.equal(
    q7.columnsVisibleIf,
    "{item} = {question2}",
    "Rename q2: matrix.columnsVisibleIf"
  );
  assert.equal(
    q8.choicesVisibleIf,
    "{item} = {question1}",
    "Rename q1: radiogroup.choicesVisibleIf"
  );
  assert.equal(
    q8.choicesEnableIf,
    "{item} = {question2}",
    "Rename q2: radiogroup.choicesVisibleIf"
  );
  assert.equal(
    q8.choices[0].visibleIf,
    "{question1} = 1",
    "Rename q1: radiogroup.choices[0].visibleIf"
  );
  assert.equal(
    q8.choices[0].enableIf,
    "{question2} = 2",
    "Rename q2: radiogroup.choices[0].enableIf"
  );
  assert.equal(
    survey.completedHtmlOnCondition[0].expression,
    "{question1} = 1",
    "Rename q1: survey.completedHtmlOnCondition[0].expression"
  );
  assert.equal(
    survey.calculatedValues.length,
    1,
    "There is one calculated value"
  );
  assert.equal(
    survey.calculatedValues[0].expression,
    "{question1} = 1",
    "Rename q1: survey.calculatedValues[0].expression"
  );
});

QUnit.test("Add new item with two triggers", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [{ type: "text", name: "q1" }],
  });
  var logic = new SurveyLogic(survey);
  logic.addNew();
  assert.equal(logic.mode, "new", "There is no items");
  assert.ok(logic.editableItem, "Editable item is created");
  assert.ok(logic.expressionEditor, "expression editor is created");
  assert.equal(logic.expressionEditor.koValue(), "", "the expression is empty");
  var lt = logic.getTypeByName("trigger_complete");
  var action = logic.editableItem.actions[0];
  action.logicType = lt;
  assert.equal(lt.visible, false, "Trigger logic type is not visible");
  assert.equal(
    logic.editableItem.actions.length,
    1,
    "There is one action in new item"
  );
  logic.removeAction(action);
  assert.equal(
    logic.editableItem.actions.length,
    1,
    "We are removing action and creatin a new one"
  );
  action = logic.editableItem.actions[0];
  assert.notOk(action.logicType, "There is no logic type");
  assert.equal(lt.visible, true, "Trigger logic type is visible again");
  action.logicType = lt;
  logic.expressionEditor.koValue("{q1} = 2");
  assert.equal(survey.triggers.length, 0, "There is no triggers yet");
  logic.saveEditableItem();
  assert.equal(survey.triggers.length, 1, "There is one trigger now");
  assert.equal(
    survey.triggers[0].getType(),
    "completetrigger",
    "It is a complete trigger"
  );
  assert.equal(
    survey.triggers[0].expression,
    "{q1} = 2",
    "Complete trigger has the correct expression property"
  );
});

QUnit.test("Edit triggers via trigger editor", function(assert) {
  var survey = new Survey.SurveyModel({
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
  var options = new EditorOptionsTests();
  options.showTitlesInExpressions = true;
  var logic = new SurveyLogic(survey, options);
  assert.equal(logic.items.length, 1, "There is one item");
  logic.editItem(logic.items[0]);
  assert.ok(logic.editableItem, "Editable item is created");
  assert.equal(
    logic.expressionEditor.koValue(),
    "{q1} = 1",
    "the expression set correctly"
  );
  assert.equal(logic.editableItem.actions.length, 1, "There is one action");
  var action = logic.editableItem.actions[0];
  assert.ok(action.templateObject, "Template object is created");
  logic.expressionEditor.koValue("{q1} = 10");
  var triggerEditor = <SurveyElementEditorContent>action.templateObject;
  assert.equal(
    triggerEditor.getPropertyEditorByName("expression").koVisible(),
    false,
    "Do not show expression editor here"
  );
  triggerEditor.getPropertyEditorByName("setToName").editor.koValue("q3");
  logic.saveEditableItem();
  assert.equal(
    logic.items[0].actions[0].text,
    "Run expression: '({Question 2} + 1)' and set it's result into question: {Question 3}",
    "use showTitlesInExpressions option"
  );
  assert.equal(
    survey.triggers[0]["setToName"],
    "q3",
    "Trigger property editor works correctly, setToName"
  );
  assert.equal(
    survey.triggers[0].expression,
    "{q1} = 10",
    "Trigger property editor works correctly, expression"
  );
});

QUnit.test("Edit condition complete via its editor", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "Question 1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
    ],
  });
  var logic = new SurveyLogic(survey);
  logic.addNew();
  var action = logic.editableItem.actions[0];
  action.logicType = logic.getTypeByName("completedHtmlOnCondition");
  action.templateObject.koValue("Some text");
  logic.expressionEditor.koValue("{q1} = 10");
  logic.saveEditableItem();
  assert.equal(survey.completedHtmlOnCondition.length, 1, "There is one item");
  assert.equal(
    survey.completedHtmlOnCondition[0].expression,
    "{q1} = 10",
    "Expression set correctly"
  );
  assert.equal(
    survey.completedHtmlOnCondition[0].html,
    "Some text",
    "html set correctly"
  );
  logic.editItem(logic.items[0]);
  assert.equal(logic.items[0].actions.length, 1, "There is one action here");
  logic.expressionEditor.koValue(logic.expressionEditor.koValue() + "0");
  action.templateObject.koValue(action.templateObject.koValue() + " 2");
  logic.saveEditableItem();
  assert.equal(
    survey.completedHtmlOnCondition.length,
    1,
    "There is still one item"
  );
  assert.equal(
    survey.completedHtmlOnCondition[0].expression,
    "{q1} = 100",
    "Expression is changed correctly"
  );
  assert.equal(
    survey.completedHtmlOnCondition[0].html,
    "Some text 2",
    "html is changed correctly"
  );
});
QUnit.test("Use survey creator options", function(assert) {
  var options = new EditorOptionsTests();
  options.showTitlesInExpressions = true;
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "Question 1" },
      { type: "text", name: "q2", title: "Question 2" },
    ],
  });
  var logic = new SurveyLogic(survey, options);
  logic.addNew();
  var action = logic.editableItem.actions[0];
  action.logicType = logic.getTypeByName("question_visibility");
  assert.equal(
    logic.expressionEditor.options.showTitlesInExpressions,
    true,
    "Use correct options in expression editor"
  );
  assert.equal(
    action.itemSelector.koElements()[0].text,
    "Question 1",
    "Use showTitlesInExpression"
  );
});
QUnit.test("Disable editing for readOnly", function(assert) {
  var options = new EditorOptionsTests();
  options.readOnly = true;
  var survey = new Survey.SurveyModel({
    elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }],
  });
  var logic = new SurveyLogic(survey, options);
  assert.equal(logic.mode, "view", "Can't insert, it is readOnly");
  assert.equal(logic.koReadOnly(), true, "It is readOnly");
});
QUnit.test("Displaying correct text for logic action", function(assert) {
  var survey = new Survey.SurveyModel({
    pages: [
      {
        name: "page1",
        visibleIf: "{q1} = 1",
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3", enableIf: "{q1} = 1" },
          { type: "text", name: "q4", requiredIf: "{q1} = 1" },
          {
            type: "panel",
            name: "panel1",
            visibleIf: "{q1} = 1",
            enableIf: "{q1} = 1",
            elements: [
              {
                type: "text",
                name: "q5",
              },
            ],
          },
        ],
      },
    ],
    triggers: [
      {
        type: "complete",
        expression: "{q1} = 1",
      },
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q2",
      },
      {
        type: "runexpression",
        expression: "{q1} = 1",
        runExpression: "{q2} + 1",
        setToName: "q3",
      },
      {
        type: "copyvalue",
        expression: "{q1} = 1",
        setToName: "q1",
        fromName: "q2",
      },
      {
        type: "setvalue",
        expression: "{q1} = 1",
        setToName: "q2",
        setValue: "q2Value",
      },
    ],
    completedHtmlOnCondition: [
      {
        expression: "{q1} = 1",
        html: "text",
      },
    ],
  });
  var logic = new SurveyLogic(survey);
  assert.equal(logic.items.length, 1, "We have one item");
  var ops = logic.items[0].actions;
  var logicTypes = [
    "page_visibility",
    "panel_visibility",
    "panel_enable",
    "question_visibility",
    "question_enable",
    "question_require",
    "trigger_complete",
    "trigger_setvalue",
    "trigger_copyvalue",
    "trigger_skip",
    "trigger_runExpression",
    "completedHtmlOnCondition",
  ];
  assert.equal(
    ops.length,
    logicTypes.length,
    "There are 11 actions: 1 page + 2 panels + 3 questions + 5 triggers + 1 html condition"
  );
  var findOp = function(name: string): SurveyLogicAction {
    for (var i = 0; i < ops.length; i++) {
      if (ops[i].logicType.name == name) return ops[i];
    }
    return ops[i];
  };
  for (var i = 0; i < logicTypes.length; i++) {
    assert.ok(findOp(logicTypes[i]), logicTypes[i] + " is here.");
  }
  assert.equal(
    logic.items[0].expressionText,
    "When expression: '{q1} = 1' returns true:",
    "Item expressionText"
  );
  assert.equal(findOp("page_visibility").text, "Make page {page1} visible");
  assert.equal(findOp("panel_visibility").text, "Make panel {panel1} visible");
  assert.equal(findOp("panel_enable").text, "Make panel {panel1} enable");
  assert.equal(
    findOp("question_visibility").text,
    "Make question {q2} visible"
  );
  assert.equal(findOp("question_enable").text, "Make question {q3} enable");
  assert.equal(findOp("question_require").text, "Make question {q4} required");
  assert.equal(findOp("trigger_complete").text, "Survey becomes completed");
  assert.equal(
    findOp("trigger_setvalue").text,
    "Set into question: {q2} value q2Value"
  );
  assert.equal(
    findOp("trigger_copyvalue").text,
    "Copy into question: {q1} value from question {q2}"
  );
  assert.equal(findOp("trigger_skip").text, "Survey skip to the question {q2}");
  assert.equal(
    findOp("trigger_runExpression").text,
    "Run expression: '{q2} + 1' and set it's result into question: {q3}"
  );
  assert.equal(
    findOp("completedHtmlOnCondition").text,
    "Show custom text for the 'Thank you page'."
  );

  assert.equal(findOp("page_visibility").name, "Page visibility");
});

QUnit.test("Logic editing errors", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }],
  });
  var logic = new SurveyLogic(survey);
  logic.addNew();
  assert.equal(logic.saveEditableItem(), false, "Expression is empty");
  assert.equal(
    logic.koErrorText(),
    "The logic expression is empty or invalid. Please correct it.",
    "Check 1"
  );
  logic.expressionEditor.koValue("ww++++2");
  assert.equal(logic.saveEditableItem(), false, "Expression is invalid");
  assert.equal(
    logic.koErrorText(),
    "The logic expression is empty or invalid. Please correct it.",
    "Check 2"
  );
  logic.expressionEditor.koValue("{q1} = 1");
  assert.equal(logic.saveEditableItem(), false, "There is no actions");
  assert.ok(logic.koErrorText());
  var action = logic.editableItem.actions[0];
  action.logicType = logic.getTypeByName("question_visibility");
  action.itemSelector.koValue("q1");
  action.itemSelector.koValue("");
  assert.equal(logic.saveEditableItem(), false, "Action is incorret");
  assert.equal(logic.koErrorText(), "Please, fix problems in your action(s).");
  action.itemSelector.koValue("q2");
  assert.equal(logic.saveEditableItem(), true, "Action is corret now");
  action = logic.addNewAction();
  action.logicType = logic.getTypeByName("trigger_setvalue");
  assert.equal(logic.editableItem.actions.length, 2, "There two actions");
  assert.equal(action.hasError(), true, "setToName is empty");
  var triggerEditor = <SurveyElementEditorContent>action.templateObject;
  triggerEditor.getPropertyEditorByName("setToName").editor.koValue("q2");
  triggerEditor.getPropertyEditorByName("setValue").editor.koValue("newValue");
  assert.equal(action.hasError(), false, "setToName  is correct");
  assert.equal(
    logic.editableItem.actions.length,
    2,
    "trigger set correctly now"
  );
  assert.equal(logic.saveEditableItem(), true, "setToName is correct");
});

QUnit.test("Return without saving", function(assert) {
  var survey = new Survey.SurveyModel({
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
        gotoName: "q2",
      },
    ],
  });
  var logic = new SurveyLogic(survey);
  var item = logic.items[0];
  item.edit();
  logic.expressionEditor.koTextValue("{q1} = 2");
  var triggerEditor = <SurveyElementEditorContent>(
    item.actions[1].templateObject
  );
  triggerEditor.getPropertyEditorByName("gotoName").editor.koValue("q3");
  logic.addAction(logic.getTypeByName("question_visibility"));
  assert.equal(item.actions.length, 3, "There three actions");
  assert.equal(logic.saveEditableItem(), false, "Can't save");
  assert.ok(logic.koErrorText(), "There is an error in the text");
  logic.koShowView();
  item = logic.items[0];
  assert.equal(item.actions.length, 2, "The last action was not saved");
  assert.equal(item.expression, "{q1} = 1", "Item expression is not changed");
  assert.equal(
    item.actions[1].element["gotoName"],
    "q2",
    "action gotoName is not changed"
  );
  assert.notOk(logic.koErrorText(), "The error is cleared");
});

QUnit.test("Make Survey Creator modified on changes", function(assert) {
  var creator = new SurveyCreator();
  creator.JSON = {
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
        gotoName: "q2",
      },
    ],
  };
  creator.showLogicEditor();
  var modifiedCounter = 0;
  creator.onModified.add(function() {
    modifiedCounter++;
  });
  var logic = creator.logic;
  var item = logic.items[0];
  item.edit();
  logic.expressionEditor.koTextValue("{q1} = 2");
  logic.addAction(logic.getTypeByName("question_visibility"));
  item.actions[2].itemSelector.koValue("q3");
  assert.equal(modifiedCounter, 0, "Has not changed yet");
  logic.saveEditableItem();
  assert.equal(modifiedCounter, 1, "It was changed one time");
  logic.removeItem(logic.items[0]);
  assert.equal(modifiedCounter, 2, "It was changed two times");
});

QUnit.test(
  "Hide Expression Header in Condition Property Editor in Logic tab",
  function(assert) {
    var creator = new SurveyCreator(null, {
      hideExpressionHeaderInLogicTab: true,
    });
    creator.JSON = {
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
          gotoName: "q2",
        },
      ],
    };
    creator.showLogicEditor();
    var logic = creator.logic;
    var item = logic.items[0];
    item.edit();
    assert.equal(
      logic.expressionEditor.koShowExpressionHeader(),
      false,
      "Do not show expression header"
    );
  }
);

QUnit.test("Add existing visible Items", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "My Question 1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" },
    ],
  });
  var options = new EditorOptionsTests();
  options.showTitlesInExpressions = true;
  var logic = new SurveyLogic(survey, options);
  assert.equal(logic.items.length, 1, "There one item");
  assert.equal(
    logic.items[0].expressionText,
    "When expression: '({My Question 1} == 1)' returns true:"
  );
});

QUnit.test("Allow logic type to be null and change it", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3" },
    ],
  });
  var options = new EditorOptionsTests();
  var logic = new SurveyLogic(survey, options);
  var item = logic.items[0];
  item.edit();
  assert.ok(logic.editableItem, "Editable item is created");
  var action = logic.editableItem.actions[0];
  assert.equal(action.logicType.name, "question_visibility");
  action.logicType = null;
  assert.notOk(action.logicType, "Logic type is empty");
  assert.notOk(logic.saveEditableItem(), "Can't save there is no logic type");
  assert.ok(action.koErrorText(), "There is an error text");
  action.logicType = logic.getTypeByName("page_visibility");
  assert.notOk(action.koErrorText(), "There is no error text");
  assert.notOk(logic.saveEditableItem(), "Action is not set");
  action.itemSelector.element = survey.currentPage;
  assert.ok(logic.saveEditableItem(), "Action is good");
});
QUnit.test("One action exists in new item", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
    ],
  });
  var options = new EditorOptionsTests();
  var logic = new SurveyLogic(survey, options);
  logic.addNew();
  var item = logic.editableItem;
  logic.expressionEditor.koValue("{q1} = 1");
  assert.ok(item, "Editable item is created");
  assert.equal(item.actions.length, 1, "There is one action in it");
  var action = item.actions[0];
  assert.notOk(action.logicType, "logic type is emtpy");
  assert.notOk(logic.saveEditableItem(), "Can't save there is no logic type");
  assert.ok(action.koErrorText(), "There is an error text");
  action.logicType = logic.getTypeByName("page_visibility");
  assert.notOk(action.koErrorText(), "There is no error text");
  assert.notOk(logic.saveEditableItem(), "Action is not set");
  action.itemSelector.element = survey.currentPage;
  assert.ok(logic.saveEditableItem(), "Action is good");
});
QUnit.test("Limit the number of action types.", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" },
    ],
  });
  var options = new EditorOptionsTests();
  SurveyLogic.visibleActions = [
    "question_visibility",
    "question_require",
    "trigger_skip",
    "trigger_complete",
  ];
  var logic = new SurveyLogic(survey, options);
  assert.equal(
    logic.koLogicTypes().length,
    4,
    "There are four visible action types"
  );
  SurveyLogic.visibleActions = [];
  logic = new SurveyLogic(survey, options);
  assert.notEqual(
    logic.koLogicTypes().length,
    4,
    "There are more than four visible action types"
  );
});
