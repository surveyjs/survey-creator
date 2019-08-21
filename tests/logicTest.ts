import * as Survey from "survey-knockout";
import { SurveyLogic, SurveyLogicItem } from "../src/logic";
import { EditorOptionsTests } from "./editorOptionsTests";
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
      { type: "text", name: "q2", visibleIf: "{q1}=1" }
    ]
  });
  var logic = new SurveyLogic(survey);
  assert.equal(logic.items.length, 2, "There are two items");
});
QUnit.test("Add new operation immediately", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }]
  });
  var logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "new", "Add new item");
  logic.editableItem.addOperation(logic.getTypeByName("question_visibility"));
  logic.editableItem.operations[0].itemSelector.koValue("q1");
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
      { type: "expression", name: "q2", expression: "{q1}+1" }
    ]
  });
  var logic = new SurveyLogic(survey);
  assert.equal(logic.items.length, 0, "There is not visible items");
  assert.equal(logic.invisibleItems.length, 1, "There is one invisible item");
});
QUnit.test("Add new item", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q2}=1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3" }
    ]
  });
  logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "view", "There are items");
  logic.editItem(logic.items[0]);
  logic.addNew();
  assert.equal(logic.mode, "new", "change to the select type mode");
  assert.ok(logic.editableItem, "Editable item is created");
  assert.ok(logic.expressionEditor, "expression editor is created");
  assert.equal(
    logic.expressionEditor.editingValue,
    "",
    "the expression is empty"
  );
  assert.equal(
    logic.expressionEditor.koAddConditionQuestions().length,
    3,
    "We have 3 questions here"
  );
  logic.addNewOperation(logic.getTypeByName("question_visibility"));
  assert.equal(
    logic.editableItem.operations.length,
    1,
    "There is one operation in new item"
  );
  var itemSelector = logic.editableItem.operations[0].itemSelector;
  assert.equal(itemSelector.koElements().length, 3, "There are two questions");
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
  logic.removeOperation(logic.editableItem.operations[0]);
  assert.equal(
    logic.editableItem.operations.length,
    0,
    "There is no operations"
  );
  logic.addNewOperation(logic.getTypeByName("question_visibility"));
  var q3 = <Survey.Question>survey.getQuestionByName("q3");
  logic.editableItem.operations[0].element = q3;
  logic.expressionEditor.editingValue = "{q1} = 2";
  logic.saveEditableItem();
  assert.equal(q3.visibleIf, "{q1} = 2");
  assert.equal(logic.items.length, 3, "There are 3 items now");
});
QUnit.test("Edit existing item", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3} =1" },
      { type: "text", name: "q3" }
    ]
  });
  logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "view", "There are items");
  assert.equal(logic.items.length, 1, "There is one item");
  assert.equal(
    logic.items[0].operations.length,
    2,
    "The item has two operations"
  );
  assert.equal(
    logic.items[0].operations[0].element["name"],
    "q1",
    "Element in the first operation set correctly"
  );
  logic.editItem(logic.items[0]);
  assert.ok(logic.editableItem, "Editable item is set");
  assert.equal(
    logic.expressionEditor.editingValue,
    "{q3}=1",
    "Expression is set for editing"
  );
});
QUnit.test("Use SurveyItemSelector for editing", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" },
      { type: "text", name: "q3", visibleIf: "{q2}=1" },
      { type: "text", name: "q4" }
    ]
  });
  logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "view", "There are items");
  assert.equal(logic.items.length, 2, "There are two items");
  logic.editItem(logic.items[0]);
  var itemSelector = logic.editableItem.operations[0].itemSelector;
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

  var op = logic.editableItem.addOperation(
    logic.getTypeByName("question_visibility")
  );
  op.itemSelector.koValue("q4");
  assert.equal(op.element["name"], "q4", "Eleement set correctly");
  logic.saveEditableItem();
  logic.mode = "view";
  logic.editItem(logic.items[1]);
  itemSelector = logic.editableItem.operations[0].itemSelector;
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
QUnit.test("Remove same operations on save", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2" }
    ]
  });
  logic = new SurveyLogic(survey);
  logic.editItem(logic.items[0]);
  var lt = logic.getTypeByName("question_visibility");
  logic.editableItem.addOperation(lt, <Survey.Question>(
    survey.getQuestionByName("q1")
  ));
  logic.editableItem.addOperation(lt, <Survey.Question>(
    survey.getQuestionByName("q2")
  ));
  logic.editableItem.addOperation(lt, <Survey.Question>(
    survey.getQuestionByName("q2")
  ));
  assert.equal(
    logic.editableItem.operations.length,
    4,
    "There are 4 operations"
  );
  logic.saveEditableItem();
  assert.equal(
    logic.editableItem.operations.length,
    2,
    "There are 2 operations left"
  );
});
QUnit.test("Remove existing operation", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" }
    ]
  });
  logic = new SurveyLogic(survey);
  logic.editItem(logic.items[0]);
  logic.editableItem.removeOperation(logic.items[0].operations[1]);
  logic.saveEditableItem();
  assert.equal(
    (<Survey.Question>survey.getQuestionByName("q2")).visibleIf,
    "",
    "Remove the visibleIf"
  );
});
QUnit.test("Remove existing item", function(assert) {
  var survey = new Survey.SurveyModel();
  var logic = new SurveyLogic(survey);
  assert.equal(logic.mode, "new", "There is no items");
  survey = new Survey.SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" }
    ]
  });
  logic = new SurveyLogic(survey);
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
        elements: [{ type: "text", name: "q1", enableIf: "{q2} > 2" }]
      },
      {
        name: "page2",
        visibleIf: "{Q1} != 1 and {q1} < 1",
        elements: [{ type: "text", name: "q2", requiredIf: "{q1} < 1" }]
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
                  { type: "expressionvalidator", expression: "{q1} > 1" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "page4",
        elements: [
          { type: "expression", name: "q4", expression: "{q1} + {q2}" }
        ]
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
                totalExpression: "{q1} + {q2}"
              }
            ]
          }
        ]
      },
      {
        name: "page6",
        elements: [
          {
            type: "matrixdropdown",
            name: "q6",
            rowsVisibleIf: "{item} = {q1}"
          },
          {
            type: "matrix",
            name: "q7",
            rowsVisibleIf: "{item} = {q1}",
            columnsVisibleIf: "{item} = {q2}"
          }
        ]
      },
      {
        name: "page7",
        elements: [
          {
            type: "radiogroup",
            name: "q8",
            choicesVisibleIf: "{item} = {q1}",
            choicesEnableIf: "{item} = {q2}",
            choices: [{ value: 1, visibleIf: "{q1} = 1", enableIf: "{q2} = 2" }]
          }
        ]
      }
    ],
    triggers: [
      {
        type: "runexpression",
        expression: "{q1} = 1",
        runExpression: "{q2} + 1"
      },
      {
        type: "complete",
        expression: "{q1} = 1"
      },
      {
        type: "copyvalue",
        expression: "{q1} = 1",
        setToName: "q1",
        fromName: "q2"
      }
    ],
    completedHtmlOnCondition: [
      {
        expression: "{q1} = 1",
        html: "text"
      }
    ]
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
});

QUnit.test("Add new item with two triggers", function(assert) {
  var survey = new Survey.SurveyModel({
    elements: [{ type: "text", name: "q1" }]
  });
  var logic = new SurveyLogic(survey);
  logic.addNew();
  assert.equal(logic.mode, "new", "There is no items");
  assert.ok(logic.editableItem, "Editable item is created");
  assert.ok(logic.expressionEditor, "expression editor is created");
  assert.equal(
    logic.expressionEditor.editingValue,
    "",
    "the expression is empty"
  );
  var lt = logic.getTypeByName("trigger_complete");
  var op = logic.addNewOperation(lt);
  assert.equal(lt.visible, false, "Trigger logic type is not visible");
  assert.equal(
    logic.editableItem.operations.length,
    1,
    "There is one operation in new item"
  );
  logic.removeOperation(op);
  assert.equal(
    logic.editableItem.operations.length,
    0,
    "There no operations in new item"
  );
  assert.equal(lt.visible, true, "Trigger logic type is visible again");
  op = logic.addNewOperation(lt);
  logic.expressionEditor.editingValue = "{q1} = 2";
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
  assert.equal(logic.items.length, 1, "There is one item");
  logic.editItem(logic.items[0]);
  assert.ok(logic.editableItem, "Editable item is created");
  assert.equal(
    logic.expressionEditor.editingValue,
    "{q1} = 1",
    "the expression set correctly"
  );
  assert.equal(
    logic.editableItem.operations.length,
    1,
    "There is one operation"
  );
  var op = logic.editableItem.operations[0];
  assert.ok(op.templateObject, "Template object is created");
  logic.expressionEditor.editingValue = "{q1} = 10";
  op.templateObject.kosetToName("q3");
  logic.saveEditableItem();
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
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogic(survey);
  logic.addNewOperation(logic.getTypeByName("survey_completedHtmlOnCondition"));
  var op = logic.editableItem.operations[0];
  logic.expressionEditor.editingValue = "{q1} = 10";
  op.templateObject.koValue("Some text");
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
  assert.equal(
    logic.items[0].operations.length,
    1,
    "There is one operation here"
  );
  logic.expressionEditor.editingValue =
    logic.expressionEditor.editingValue + "0";
  op.templateObject.koValue(op.templateObject.koValue() + " 2");
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
      { type: "text", name: "q2", title: "Question 2" }
    ]
  });
  var logic = new SurveyLogic(survey, options);
  logic.editableItem.addOperation(logic.getTypeByName("question_visibility"));
  assert.equal(
    logic.expressionEditor.options.showTitlesInExpressions,
    true,
    "Use correct options in expression editor"
  );
  assert.equal(
    logic.editableItem.operations[0].itemSelector.koElements()[0].text,
    "Question 1",
    "Use showTitlesInExpression"
  );
});
