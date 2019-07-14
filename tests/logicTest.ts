import * as Survey from "survey-knockout";
import { SurveyLogic, SurveyLogicItem } from "../src/logic";
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
  logic.mode = "new";
  assert.equal(logic.mode, "new", "change to the select type mode");
  assert.ok(logic.editableItem, "Editable item is created");
  assert.ok(logic.expressionEditor, "expression editor is created");
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
  assert.equal(
    logic.editableItem.operations[0].koElements().length,
    1,
    "There is one element available for adding"
  );
  assert.equal(
    logic.editableItem.operations[0].koElements()[0].name,
    "q3",
    "The available element is q3"
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
  assert.equal(
    logic.editableItem.operations[0].koElements().length,
    3,
    "All questions are available, op0"
  );
  assert.equal(
    logic.editableItem.operations[1].koElements().length,
    3,
    "All questions are available, op1"
  );
  logic.editableItem.addOperation(logic.getTypeByName("question_visibility"));
  assert.equal(
    logic.editableItem.operations[2].koElements().length,
    3,
    "All questions are available, op2"
  );
});
QUnit.test("Update available elements", function(assert) {
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
  assert.equal(
    logic.editableItem.operations[0].koElements().length,
    3,
    "All questions are available, op0"
  );
  logic.editableItem.addOperation(logic.getTypeByName("question_visibility"), <
    Survey.Question
  >survey.getQuestionByName("q4"));
  logic.saveEditableItem();
  logic.mode = "view";
  logic.editItem(logic.items[1]);
  assert.equal(
    logic.editableItem.operations[0].koElements().length,
    1,
    "Just one question is available, op0"
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
