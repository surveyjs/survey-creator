import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { QuestionToolbox } from "../src/questionToolbox";

export default QUnit.module("questionToolboxTests");

QUnit.test("toolbox support options", function(assert) {
  var allTypes = Survey.ElementFactory.Instance.getAllTypes();
  var toolbox = new QuestionToolbox();
  assert.equal(toolbox.items.length, allTypes.length, "All types are accepted");
  assert.equal(
    toolbox.items[0].name,
    toolbox.orderedQuestions[0],
    "The text type should be first"
  );
  assert.equal(
    toolbox.items[0].json["type"],
    toolbox.orderedQuestions[0],
    "the type is 'text'"
  );
  var toolbox = new QuestionToolbox(["text", "dropdown", "unknown"]);
  assert.equal(
    toolbox.items.length,
    2,
    "Only two types from three are accepted"
  );
});

QUnit.test("toolbox reorder items", function(assert) {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  assert.equal(toolbox.items[0].name, "text");
  assert.equal(toolbox.items[1].name, "dropdown");
  toolbox.orderedQuestions = ["dropdown", "text"];
  assert.equal(toolbox.items[0].name, "dropdown");
  assert.equal(toolbox.items[1].name, "text");
});

QUnit.test("toolbox copied questions", function(assert) {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  assert.equal(toolbox.copiedItems.length, 0, "There is no copied questions");
  toolbox.addCopiedItem(new Survey.QuestionCheckbox("q1"));
  assert.equal(toolbox.copiedItems.length, 1, "One question is added");
  assert.equal(toolbox.copiedItems[0].name, "q1", "name is 'q1'");
  assert.equal(toolbox.copiedItems[0].title, "q1", "title is 'q1'");
  toolbox.addCopiedItem(new Survey.QuestionCheckbox("q1"));
  assert.equal(toolbox.copiedItems.length, 1, "Do not add with the same name");
  toolbox.addCopiedItem(new Survey.QuestionCheckbox("q2"));
  toolbox.addCopiedItem(new Survey.QuestionCheckbox("q3"));
  assert.equal(toolbox.copiedItems.length, 3, "There are 3 copied questions");
  assert.equal(toolbox.items.length, 5, "There are 5 items total");
  //add the 4-th item
  toolbox.addCopiedItem(new Survey.QuestionCheckbox("q4"));
  assert.equal(
    toolbox.copiedItems.length,
    3,
    "remove the first copied item on adding"
  );
  assert.equal(toolbox.items.length, 5, "There are 5 items total");
  toolbox.clearCopiedItems();
  assert.equal(toolbox.copiedItems.length, 0, "clear all copied items");
  assert.equal(toolbox.items.length, 2, "There are 2 items total");
});
QUnit.test("Save/Load all toolbox items", function(assert) {
  var allTypes = Survey.ElementFactory.Instance.getAllTypes();
  var toolbox1 = new QuestionToolbox();
  assert.equal(toolbox1.items.length, allTypes.length, "All types are here");
  var toolbox2 = new QuestionToolbox(["text", "dropdown"]);
  toolbox1.jsonText = toolbox2.jsonText;
  assert.equal(toolbox1.items.length, 2, "Only two types are here");
});
QUnit.test("Save/Load copied toolbox items", function(assert) {
  var toolbox1 = new QuestionToolbox();
  toolbox1.addCopiedItem(new Survey.QuestionCheckbox("q1"));
  toolbox1.addCopiedItem(new Survey.QuestionText("q2"));
  var toolbox2 = new QuestionToolbox();
  toolbox2.addCopiedItem(new Survey.QuestionDropdown("q3"));
  assert.equal(toolbox1.copiedItems.length, 2, "There are two copied items");
  toolbox1.copiedJsonText = toolbox2.copiedJsonText;
  assert.equal(toolbox1.copiedItems.length, 1, "Only one item is now");
  assert.equal(toolbox1.copiedItems[0].name, "q3", "and it is q3");
});
