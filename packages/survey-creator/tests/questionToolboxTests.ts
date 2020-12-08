import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { QuestionToolbox } from "../src/toolbox";

export default QUnit.module("questionToolboxTests");

QUnit.test("toolbox support options", function (assert) {
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

QUnit.test("toolbox reorder items", function (assert) {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  assert.equal(toolbox.items[0].name, "text");
  assert.equal(toolbox.items[1].name, "dropdown");
  toolbox.orderedQuestions = ["dropdown", "text"];
  assert.equal(toolbox.items[0].name, "dropdown");
  assert.equal(toolbox.items[1].name, "text");

  toolbox.addItem(<any>{ name: "countries" });
  assert.equal(toolbox.items[0].name, "dropdown");
  assert.equal(toolbox.items[1].name, "text");
  assert.equal(toolbox.items[2].name, "countries");
  assert.equal(toolbox.items[2].title, "countries", "title = name");
  assert.equal(toolbox.items[2].tooltip, "countries", "tooltip = title = name");
  toolbox.orderedQuestions = ["dropdown", "countries", "text"];
  assert.equal(toolbox.items[0].name, "dropdown");
  assert.equal(toolbox.items[1].name, "countries");
  assert.equal(toolbox.items[2].name, "text");
});

QUnit.test("toolbox addItem with index", function (assert) {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  assert.equal(toolbox.items[0].name, "text");
  assert.equal(toolbox.items[1].name, "dropdown");

  toolbox.addItem(<any>{ name: "countries" }, 0);
  assert.equal(toolbox.items[0].name, "countries");
});

QUnit.test("toolbox several categories", function (assert) {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  assert.equal(toolbox.koHasCategories(), false, "There is only one category");
  toolbox.addItem(<any>{ name: "countries", category: "additional" });
  assert.equal(toolbox.koHasCategories(), true, "There are two categories");
  assert.equal(
    toolbox.koActiveCategory(),
    (<any>toolbox.koCategories()[0]).name,
    "The first category is active"
  );
  assert.equal(
    (<any>toolbox.koCategories()[0]).items.length,
    2,
    "Two items in the first category"
  );
  assert.equal(
    (<any>toolbox.koCategories()[1]).items.length,
    1,
    "One item in the second category"
  );
  assert.equal(
    (<any>toolbox.koCategories()[1]).name,
    "additional",
    "The second category is named 'additional'"
  );
  assert.equal(
    (<any>toolbox.koCategories()[0]).koCollapsed(),
    false,
    "the first category is not collapsed by default"
  );
  assert.equal(
    (<any>toolbox.koCategories()[1]).koCollapsed(),
    true,
    "the second category is collapsed by default"
  );
  toolbox.koActiveCategory("additional");
  assert.equal(
    (<any>toolbox.koCategories()[0]).koCollapsed(),
    true,
    "the first category is not collapsed now"
  );
  assert.equal(
    (<any>toolbox.koCategories()[1]).koCollapsed(),
    false,
    "the second category is collapsed now"
  );
});

QUnit.test("toolbox change categories", function (assert) {
  var toolbox = new QuestionToolbox([
    "text",
    "dropdown",
    "checkbox",
    "radiogroup",
    "comment",
    "matrix",
  ]);
  assert.equal(
    toolbox.koCategories().length,
    1,
    "There is one category by default"
  );
  toolbox.changeCategories([
    { name: "comment", category: "comment" },
    { name: "matrix", category: "matrix" },
  ]);
  assert.equal(toolbox.koCategories().length, 3, "There are 3 categories now");
  toolbox.changeCategory("radiogroup", "radio");
  assert.equal(toolbox.koCategories().length, 4, "There are 4 categories now");
});

QUnit.test("toolbox load custom/composite questions", function (assert) {
  Survey.ComponentCollection.Instance.add({
    name: "newquestion",
    questionJSON: {
      type: "dropdown",
      choices: [1, 2, 3, 4, 5],
    },
  });
  Survey.ComponentCollection.Instance.add({
    name: "customerinfo",
    elementsJSON: [
      { type: "text", name: "firstName" },
      { type: "text", name: "lastName" },
    ],
  });

  var toolbox = new QuestionToolbox(["text", "dropdown", "checkbox"]);
  assert.equal(
    toolbox.koCategories().length,
    1,
    "There is one category by default"
  );
  assert.equal(
    toolbox.koItems().length,
    3 + 2,
    "There are 3 standard + one custom and one composite questions"
  );
  Survey.ComponentCollection.Instance.clear();
});

QUnit.test(
  "toolbox categories + allowExpandMultipleCategories property",
  function (assert) {
    var toolbox = new QuestionToolbox([
      "text",
      "dropdown",
      "checkbox",
      "radiogroup",
      "comment",
      "matrix",
    ]);
    toolbox.changeCategories([
      { name: "comment", category: "comment" },
      { name: "matrix", category: "matrix" },
    ]);
    assert.equal(
      toolbox.activeCategory,
      "General",
      "By default 'General' is active category"
    );
    toolbox.allowExpandMultipleCategories = true;
    assert.equal(toolbox.activeCategory, "", "There is no active category now");
    toolbox.changeCategory("dropdown", "comment");
    assert.equal(
      toolbox.activeCategory,
      "",
      "There is still no active category now"
    );
    assert.equal(
      (<any>toolbox.koCategories()[0]).koCollapsed(),
      false,
      "The first category is expanded"
    );
    assert.equal(
      (<any>toolbox.koCategories()[1]).name,
      "comment",
      "The second category is 'comment'"
    );
    toolbox.expandCategory("comment");
    assert.equal(
      (<any>toolbox.koCategories()[1]).koCollapsed(),
      false,
      "The second category is expanded"
    );
    toolbox.collapseCategory("comment");
    assert.equal(
      (<any>toolbox.koCategories()[1]).koCollapsed(),
      true,
      "The second category is collapsed"
    );
    toolbox.expandAllCategories();
    assert.equal(
      (<any>toolbox.koCategories()[2]).koCollapsed(),
      false,
      "All categories are expanded"
    );
    toolbox.collapseAllCategories();
    assert.equal(
      (<any>toolbox.koCategories()[0]).koCollapsed(),
      true,
      "All categories are collapsed"
    );
  }
);
QUnit.test("toolbox categories + keepAllCategoriesExpanded property", function (
  assert
) {
  var toolbox = new QuestionToolbox([
    "text",
    "dropdown",
    "checkbox",
    "radiogroup",
    "comment",
    "matrix",
  ]);
  toolbox.changeCategories([
    { name: "comment", category: "comment" },
    { name: "matrix", category: "matrix" },
  ]);
  assert.equal(
    toolbox.activeCategory,
    "General",
    "By default 'General' is active category"
  );
  assert.equal(
    toolbox.koCanCollapseCategories(),
    true,
    "Categories can be collapsed"
  );
  toolbox.keepAllCategoriesExpanded = true;
  assert.equal(toolbox.activeCategory, "", "There is no active category now");
  assert.equal(
    (<any>toolbox.koCategories()[0]).koCollapsed(),
    false,
    "the first category is expanded"
  );
  assert.equal(
    (<any>toolbox.koCategories()[2]).koCollapsed(),
    false,
    "the last category is expanded"
  );
  (<any>toolbox.koCategories()[0]).expand();
  assert.equal(
    (<any>toolbox.koCategories()[0]).koCollapsed(),
    false,
    "the first category is still expanded"
  );
  assert.equal(
    toolbox.activeCategory,
    "",
    "There is still no active category now"
  );
  assert.equal(
    toolbox.koCanCollapseCategories(),
    false,
    "Categories can not be collapsed"
  );
});

QUnit.test("toolbox copied questions", function (assert) {
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
QUnit.test("Save/Load all toolbox items", function (assert) {
  var allTypes = Survey.ElementFactory.Instance.getAllTypes();
  var toolbox1 = new QuestionToolbox();
  assert.equal(toolbox1.items.length, allTypes.length, "All types are here");
  var toolbox2 = new QuestionToolbox(["text", "dropdown"]);
  toolbox1.jsonText = toolbox2.jsonText;
  assert.equal(toolbox1.items.length, 2, "Only two types are here");
});
QUnit.test("Save/Load copied toolbox items", function (assert) {
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
