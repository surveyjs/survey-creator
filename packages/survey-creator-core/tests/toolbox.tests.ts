import {
  ElementFactory,
  ComponentCollection,
  QuestionCheckboxModel,
  QuestionTextModel,
  QuestionDropdownModel,
  CustomWidgetCollection,
  Question
} from "survey-core";
import { QuestionToolbox } from "../src/toolbox";

test("dummy test", () => {
  expect(true).toEqual(true);
});

test("toolbox support options", (): any => {
  var allTypes = ElementFactory.Instance.getAllTypes();
  var toolbox = new QuestionToolbox();
  expect(toolbox.items).toHaveLength(allTypes.length);
  expect(toolbox.items[0].name).toEqual(toolbox.orderedQuestions[0]);
  expect(toolbox.items[0].json["type"]).toEqual(toolbox.orderedQuestions[0]);
  var toolbox = new QuestionToolbox(["text", "dropdown", "unknown"]);
  expect(toolbox.items).toHaveLength(2);
});

test("toolbox reorder items", (): any => {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  expect(toolbox.items[0].name).toEqual("text");
  expect(toolbox.items[1].name).toEqual("dropdown");
  toolbox.orderedQuestions = ["dropdown", "text"];
  expect(toolbox.items[0].name).toEqual("dropdown");
  expect(toolbox.items[1].name).toEqual("text");

  toolbox.addItem(<any>{ name: "countries" });
  expect(toolbox.items[0].name).toEqual("dropdown");
  expect(toolbox.items[1].name).toEqual("text");
  expect(toolbox.items[2].name).toEqual("countries");
  expect(toolbox.items[2].title).toEqual("countries");
  expect(toolbox.items[2].tooltip).toEqual("countries");
  toolbox.orderedQuestions = ["dropdown", "countries", "text"];
  expect(toolbox.items[0].name).toEqual("dropdown");
  expect(toolbox.items[1].name).toEqual("countries");
  expect(toolbox.items[2].name).toEqual("text");
});

test("toolbox addItem with index", (): any => {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  expect(toolbox.items[0].name).toEqual("text");
  expect(toolbox.items[1].name).toEqual("dropdown");

  toolbox.addItem(<any>{ name: "countries" }, 0);
  expect(toolbox.items[0].name).toEqual("countries");
});

test("toolbox several categories", (): any => {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  expect(toolbox.hasCategories).toBeFalsy();
  toolbox.addItem(<any>{ name: "countries", category: "additional" });
  expect(toolbox.hasCategories).toBeTruthy();
  expect(toolbox.activeCategory).toEqual(toolbox.categories[0].name);
  expect(toolbox.categories[0].items).toHaveLength(2);
  expect(toolbox.categories[1].items).toHaveLength(1);
  expect(toolbox.categories[1].name).toEqual("additional");
  expect(toolbox.categories[0].collapsed).toBeFalsy();
  expect(toolbox.categories[1].collapsed).toBeTruthy();
  toolbox.activeCategory = "additional";
  expect(toolbox.categories[0].collapsed).toBeTruthy();
  expect(toolbox.categories[1].collapsed).toBeFalsy();
});

test("toolbox change categories", (): any => {
  var toolbox = new QuestionToolbox([
    "text",
    "dropdown",
    "checkbox",
    "radiogroup",
    "comment",
    "matrix"
  ]);
  expect(toolbox.categories).toHaveLength(1);
  toolbox.changeCategories([
    { name: "comment", category: "comment" },
    { name: "matrix", category: "matrix" }
  ]);
  expect(toolbox.categories).toHaveLength(3);
  toolbox.changeCategory("radiogroup", "radio");
  expect(toolbox.categories).toHaveLength(4);
});

test("toolbox load custom/composite questions", (): any => {
  ComponentCollection.Instance.add({
    name: "newquestion",
    questionJSON: {
      type: "dropdown",
      choices: [1, 2, 3, 4, 5]
    }
  });
  ComponentCollection.Instance.add({
    name: "customerinfo",
    elementsJSON: [
      { type: "text", name: "firstName" },
      { type: "text", name: "lastName" }
    ]
  });

  var toolbox = new QuestionToolbox(["text", "dropdown", "checkbox"]);
  expect(toolbox.categories).toHaveLength(1);
  expect(toolbox.items).toHaveLength(3 + 2);
  ComponentCollection.Instance.clear();
});

test("toolbox categories + allowExpandMultipleCategories property", (): any => {
  var toolbox = new QuestionToolbox([
    "text",
    "dropdown",
    "checkbox",
    "radiogroup",
    "comment",
    "matrix"
  ]);
  toolbox.changeCategories([
    { name: "comment", category: "comment" },
    { name: "matrix", category: "matrix" }
  ]);
  expect(toolbox.activeCategory).toEqual("General");
  toolbox.allowExpandMultipleCategories = true;
  expect(toolbox.activeCategory).toEqual("");
  toolbox.changeCategory("dropdown", "comment");
  expect(toolbox.activeCategory).toEqual("");
  expect(toolbox.categories[0].collapsed).toBeFalsy();
  expect(toolbox.categories[1].name).toEqual("comment");
  toolbox.expandCategory("comment");
  expect(toolbox.categories[1].collapsed).toBeFalsy();
  toolbox.collapseCategory("comment");
  expect(toolbox.categories[1].collapsed).toBeTruthy();
  toolbox.expandAllCategories();
  expect(toolbox.categories[2].collapsed).toBeFalsy();
  toolbox.collapseAllCategories();
  expect(toolbox.categories[0].collapsed).toBeTruthy();
});
test("toolbox categories + keepAllCategoriesExpanded property", (): any => {
  var toolbox = new QuestionToolbox([
    "text",
    "dropdown",
    "checkbox",
    "radiogroup",
    "comment",
    "matrix"
  ]);
  toolbox.changeCategories([
    { name: "comment", category: "comment" },
    { name: "matrix", category: "matrix" }
  ]);
  expect(toolbox.activeCategory).toEqual("General");
  expect(toolbox.canCollapseCategories).toBeTruthy();
  toolbox.keepAllCategoriesExpanded = true;
  expect(toolbox.activeCategory).toBeFalsy();
  expect(toolbox.categories[0].collapsed).toBeFalsy();
  expect(toolbox.categories[2].collapsed).toBeFalsy();
  toolbox.expandCategory(toolbox.categories[0].name);
  expect(toolbox.categories[0].collapsed).toBeFalsy();
  expect(toolbox.activeCategory).toBeFalsy();
  expect(toolbox.canCollapseCategories).toBeFalsy();
});

test("toolbox categories + keepAllCategoriesExpanded property + remove item, Bug#1165", (): any => {
  var toolbox = new QuestionToolbox([
    "text",
    "dropdown",
    "checkbox",
    "radiogroup",
    "comment",
    "matrix"
  ]);
  toolbox.changeCategories([
    { name: "comment", category: "second" },
    { name: "matrix", category: "second" }
  ]);
  toolbox.keepAllCategoriesExpanded = true;
  expect(toolbox.activeCategory).toBeFalsy();
  expect(toolbox.categories[1].items).toHaveLength(2);
  expect(toolbox.categories[0].collapsed).toBeFalsy();
  expect(toolbox.categories[1].collapsed).toBeFalsy();
  toolbox.removeItem("comment");
  expect(toolbox.categories[1].items).toHaveLength(1);
  expect(toolbox.categories[0].collapsed).toBeFalsy();
  expect(toolbox.categories[1].collapsed).toBeFalsy();
});

test("toolbox copied questions", (): any => {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  expect(toolbox.copiedItems).toHaveLength(0);
  toolbox.addCopiedItem(new QuestionCheckboxModel("q1"));
  expect(toolbox.copiedItems).toHaveLength(1);
  expect(toolbox.copiedItems[0].name).toEqual("q1");
  expect(toolbox.copiedItems[0].title).toEqual("q1");
  toolbox.addCopiedItem(new QuestionCheckboxModel("q1"));
  expect(toolbox.copiedItems).toHaveLength(1);
  toolbox.addCopiedItem(new QuestionCheckboxModel("q2"));
  toolbox.addCopiedItem(new QuestionCheckboxModel("q3"));
  expect(toolbox.copiedItems).toHaveLength(3);
  expect(toolbox.items).toHaveLength(5);
  //add the 4-th item
  toolbox.addCopiedItem(new QuestionCheckboxModel("q4"));
  expect(toolbox.copiedItems).toHaveLength(3);
  expect(toolbox.items).toHaveLength(5);
  toolbox.clearCopiedItems();
  expect(toolbox.copiedItems).toHaveLength(0);
  expect(toolbox.items).toHaveLength(2);
});
test("Save/Load all toolbox items", (): any => {
  var allTypes = ElementFactory.Instance.getAllTypes();
  var toolbox1 = new QuestionToolbox();
  expect(toolbox1.items).toHaveLength(allTypes.length);
  var toolbox2 = new QuestionToolbox(["text", "dropdown"]);
  toolbox1.jsonText = toolbox2.jsonText;
  expect(toolbox1.items).toHaveLength(2);
});
test("Save/Load copied toolbox items", (): any => {
  var toolbox1 = new QuestionToolbox();
  toolbox1.addCopiedItem(new QuestionCheckboxModel("q1"));
  toolbox1.addCopiedItem(new QuestionTextModel("q2"));
  var toolbox2 = new QuestionToolbox();
  toolbox2.addCopiedItem(new QuestionDropdownModel("q3"));
  expect(toolbox1.copiedItems).toHaveLength(2);
  toolbox1.copiedJsonText = toolbox2.copiedJsonText;
  expect(toolbox1.copiedItems).toHaveLength(1);
  expect(toolbox1.copiedItems[0].name).toEqual("q3");
});
test("Add customWidgets into toolbox", (): any => {
  CustomWidgetCollection.Instance.clear();
  CustomWidgetCollection.Instance.addCustomWidget(
    {
      name: "first",
      isFit: (question: Question) => {
        return question.name == "question2";
      }
    },
    "customtype"
  );
  CustomWidgetCollection.Instance.addCustomWidget(
    {
      name: "second",
      isFit: (question: Question) => {
        return (<Question>question).getType() == "checkbox";
      }
    },
    "customtype"
  );
  CustomWidgetCollection.Instance.addCustomWidget(
    {
      name: "third",
      isFit: (question: Question) => {
        return (<Question>question).getType() == "checkbox";
      },
      showInToolbox: false
    },
    "customtype"
  );
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  expect(toolbox.items).toHaveLength(4);
  expect(toolbox.items[0].name).toEqual("text");
  expect(toolbox.items[1].name).toEqual("dropdown");
  expect(toolbox.items[2].name).toEqual("first");
  expect(toolbox.items[3].name).toEqual("second");
  CustomWidgetCollection.Instance.clear();
});
