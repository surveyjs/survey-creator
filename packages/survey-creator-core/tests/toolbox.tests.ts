import {
  ElementFactory,
  Serializer,
  ComponentCollection,
  QuestionCheckboxModel,
  QuestionTextModel,
  QuestionDropdownModel,
  CustomWidgetCollection,
  Question,
  QuestionButtonGroupModel,
  DragOrClickHelper
} from "survey-core";
import { QuestionLinkValueModel } from "../src/components/link-value";
import { settings } from "../src/creator-settings";
import { QuestionToolbox } from "../src/toolbox";
import { CreatorTester } from "./creator-tester";

test("toolbox support options", (): any => {
  var allTypes = ElementFactory.Instance.getAllTypes();
  var toolbox = new QuestionToolbox();
  var unregistredCount = allTypes.indexOf("buttongroup") > -1 ? 1 : 0;
  if (allTypes.indexOf("linkvalue") > -1) {
    unregistredCount++;
  }
  expect(toolbox.items).toHaveLength(allTypes.length - unregistredCount);
  expect(toolbox.items[0].name).toEqual(toolbox.orderedQuestions[0]);
  expect(toolbox.items[0].json["type"]).toEqual(toolbox.orderedQuestions[0]);
  expect(toolbox.getItemByName("buttongroup")).toBeFalsy();
  var toolbox = new QuestionToolbox(["text", "dropdown", "unknown"]);
  expect(toolbox.items).toHaveLength(2);
});

test("toolbox reorder items", (): any => {
  var toolbox = new QuestionToolbox(["radiogroup", "dropdown"]);
  expect(toolbox.items[0].name).toEqual("radiogroup");
  expect(toolbox.items[1].name).toEqual("dropdown");
  toolbox.orderedQuestions = ["dropdown", "radiogroup"];
  expect(toolbox.items[0].name).toEqual("dropdown");
  expect(toolbox.items[1].name).toEqual("radiogroup");

  toolbox.addItem(<any>{ name: "countries" });
  expect(toolbox.items[0].name).toEqual("dropdown");
  expect(toolbox.items[1].name).toEqual("radiogroup");
  expect(toolbox.items[2].name).toEqual("countries");
  expect(toolbox.items[2].title).toEqual("countries");
  expect(toolbox.items[2].tooltip).toEqual("countries");
  toolbox.orderedQuestions = ["dropdown", "countries", "radiogroup"];
  expect(toolbox.items[0].name).toEqual("dropdown");
  expect(toolbox.items[1].name).toEqual("countries");
  expect(toolbox.items[2].name).toEqual("radiogroup");
});

test("toolbox addItem with index", (): any => {
  var toolbox = new QuestionToolbox(["radiogroup", "dropdown"]);
  expect(toolbox.items[0].name).toEqual("radiogroup");
  expect(toolbox.items[1].name).toEqual("dropdown");

  toolbox.addItem(<any>{ name: "countries" }, 0);
  expect(toolbox.items[0].name).toEqual("countries");
});

test("toolbox several categories", (): any => {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  toolbox.showCategoryTitles = true;
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

test("toolbox clear categories", (): any => {
  var toolbox = new QuestionToolbox(["text", "dropdown"]);
  expect(toolbox.hasCategories).toBeFalsy();
  toolbox.changeCategories([{ name: "text", category: "test" }]);
  expect(toolbox.hasCategories).toBeTruthy();
  toolbox.removeCategories();
  expect(toolbox.hasCategories).toBeFalsy();
});

test("toolbox keepAllCategoriesExpanded", (): any => {
  var toolbox = new QuestionToolbox(["text", "dropdown"], undefined, true);
  expect(toolbox.keepAllCategoriesExpanded).toBeTruthy();
  toolbox.showCategoryTitles = true;
  expect(toolbox.keepAllCategoriesExpanded).toBeFalsy();
  toolbox.keepAllCategoriesExpanded = true;
  expect(toolbox.keepAllCategoriesExpanded).toBeTruthy();
  toolbox.showCategoryTitles = false;
  expect(toolbox.keepAllCategoriesExpanded).toBeTruthy();
});

test("toolbox check categories separators", (): any => {
  var toolbox = new QuestionToolbox(["text", "dropdown", "radiogroup"]);
  expect(toolbox.hasCategories).toBeFalsy();
  toolbox.changeCategories([{ name: "text", category: "one" }, { name: "dropdown", category: "two" }]);
  expect(toolbox.hasCategories).toBeTruthy();
  expect(toolbox.actions.filter(a => a.needSeparator).length).toEqual(2);
  toolbox.removeCategories();
  expect(toolbox.hasCategories).toBeFalsy();
  expect(toolbox.actions.filter(a => a.needSeparator).length).toEqual(0);
});

test("toolbox default categories calculator", (): any => {
  var toolbox = new QuestionToolbox([
    "radiogroup",
    "dropdown",
    "matrix"
  ]);
  expect(toolbox["getDefaultQuestionCategories"]()).toEqual({
    "radiogroup": "Choice Questions",
    "dropdown": "Choice Questions",
    "matrix": "Matrix Questions" });
});

test("toolbox default categories actions separator", (): any => {
  var toolbox = new QuestionToolbox([
    "radiogroup",
    "dropdown",
    "matrix",
    "matrixdropdown"
  ]);
  toolbox.changeCategories([
    { name: "radiogroup", category: "simple" },
    { name: "dropdown", category: "simple" },
    { name: "matrix", category: "matrix" },
    { name: "matrixdropdown", category: "matrix" }
  ]);
  var needSeparator = toolbox.actions.map(a => [a.name, !!a.needSeparator]);
  expect(needSeparator).toEqual([["radiogroup", false], ["dropdown", false], ["matrix", true], ["matrixdropdown", false]]);
});

test("toolbox default categories", (): any => {
  var toolbox = new QuestionToolbox(undefined, undefined, true);
  expect(toolbox.categories.length).toBe(5);
  expect(toolbox.categories[0].items.length).toBe(9);
  expect(toolbox.categories[1].items.length).toBe(3);
  expect(toolbox.categories[2].items.length).toBe(2);
  expect(toolbox.categories[3].items.length).toBe(3);
  expect(toolbox.categories[4].items.length).toBe(4);
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

test("toolbox showCategoryTitles should not be set on first category change", (): any => {
  var toolbox = new QuestionToolbox([], undefined, true);
  expect(toolbox.showCategoryTitles).toBeFalsy();

  toolbox.changeCategories([]);
  expect(toolbox.showCategoryTitles).toBeFalsy();
});

test("toolbox showCategoryTitles not change if add item", (): any => {
  var toolbox = new QuestionToolbox([], undefined, true);
  expect(toolbox.showCategoryTitles).toBeFalsy();

  toolbox.addItem(<any>{ name: "countries" });
  expect(toolbox.showCategoryTitles).toBeFalsy();
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
    "radiogroup",
    "checkbox",
    "dropdown",
    "text",
    "comment",
    "matrix"
  ]);
  toolbox.showCategoryTitles = true;
  toolbox.changeCategories([
    { name: "comment", category: "comment" },
    { name: "matrix", category: "matrix" }
  ]);
  expect(toolbox.activeCategory).toEqual("General");
  expect(toolbox.categories[0].collapsed).toBeFalsy();
  toolbox.allowExpandMultipleCategories = true;
  expect(toolbox.categories[0].collapsed).toBeTruthy();
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

test("toolbox allowExpandMultipleCategories + categories property", (): any => {
  var toolbox = new QuestionToolbox([
    "radiogroup",
    "checkbox",
    "dropdown",
    "text",
    "comment",
    "matrix"
  ]);
  toolbox.changeCategories([
    { name: "comment", category: "comment" },
    { name: "matrix", category: "matrix" }
  ]);
  toolbox.allowExpandMultipleCategories = true;
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
  toolbox.showCategoryTitles = true;
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
  var unregistredCount = allTypes.indexOf("buttongroup") > -1 ? 1 : 0;
  if (allTypes.indexOf("linkvalue") > -1) {
    unregistredCount++;
  }
  var toolbox1 = new QuestionToolbox();
  expect(toolbox1.items).toHaveLength(allTypes.length - unregistredCount);
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
test("Do not register linkvalue and buttongroup", (): any => {
  new QuestionLinkValueModel("q1");
  new QuestionButtonGroupModel("q2");
  var toolbox = new QuestionToolbox();
  expect(toolbox.getItemByName("text")).toBeTruthy();
  expect(toolbox.getItemByName("buttongroup")).toBeFalsy();
  expect(toolbox.getItemByName("linkvalue")).toBeFalsy();
});

test("Add customWidgets into toolbox", (): any => {
  CustomWidgetCollection.Instance.clear();
  CustomWidgetCollection.Instance.addCustomWidget(
    {
      name: "first",
      widgetIsLoaded: () => {
        return true;
      },
      isFit: (question: Question) => {
        return question.name == "question2";
      }
    },
    "customtype"
  );
  CustomWidgetCollection.Instance.addCustomWidget(
    {
      name: "second",
      widgetIsLoaded: () => {
        return true;
      },
      isFit: (question: Question) => {
        return (<Question>question).getType() == "checkbox";
      }
    },
    "customtype"
  );
  CustomWidgetCollection.Instance.addCustomWidget(
    {
      name: "third",
      widgetIsLoaded: () => {
        return true;
      },
      isFit: (question: Question) => {
        return (<Question>question).getType() == "checkbox";
      },
      showInToolbox: false
    },
    "customtype"
  );
  CustomWidgetCollection.Instance.addCustomWidget(
    {
      name: "third",
      widgetIsLoaded: () => {
        return false;
      },
      isFit: (question: Question) => {
        return (<Question>question).getType() == "checkbox";
      }
    },
    "customtype"
  );
  ComponentCollection.Instance.add({
    name: "comp1",
    questionJSON: { type: "dropdown", choices: [1, 2, 3, 4, 5] }
  });
  ComponentCollection.Instance.add({
    name: "comp2",
    showInToolbox: false,
    questionJSON: { type: "dropdown", choices: [1, 2, 3, 4, 5] }
  });
  var toolbox = new QuestionToolbox(["radiogroup", "dropdown"]);
  expect(toolbox.items).toHaveLength(5);
  expect(toolbox.items[0].name).toEqual("radiogroup");
  expect(toolbox.items[1].name).toEqual("dropdown");
  expect(toolbox.items[2].name).toEqual("first");
  expect(toolbox.items[3].name).toEqual("second");
  expect(toolbox.items[4].name).toEqual("comp1");
  CustomWidgetCollection.Instance.clear();
  ComponentCollection.Instance.clear();
});

test("Add customWidgets into toolbox that registered in ElementFactor.registerCustomQuestion", (): any => {
  var toolbox = new QuestionToolbox();
  const origionalItemCount = toolbox.items.length;
  const cType = "xnewcustomwidget";
  CustomWidgetCollection.Instance.clear();
  CustomWidgetCollection.Instance.addCustomWidget({
    name: cType,
    isFit: (question) => {
      return question.getType() == cType;
    },
  });
  if (!Serializer.findClass(cType)) {
    Serializer.addClass(cType, [], undefined, "text");
    ElementFactory.Instance.registerCustomQuestion(cType);
  }
  toolbox = new QuestionToolbox();
  expect(toolbox.items).toHaveLength(origionalItemCount + 1);
  expect(toolbox.items[origionalItemCount].name).toBe(cType);
  Serializer.removeClass(cType);
  ElementFactory.Instance.unregisterElement(cType);
  CustomWidgetCollection.Instance.clear();
});
test("Do not add customWidgets into toolbox that registered in ElementFactor.registerCustomQuestion, showInToolbox=false", (): any => {
  var toolbox = new QuestionToolbox();
  const origionalItemCount = toolbox.items.length;
  const cType = "xnewcustomwidget";
  CustomWidgetCollection.Instance.clear();
  CustomWidgetCollection.Instance.addCustomWidget({
    name: cType,
    isFit: (question) => {
      return question.getType() == cType;
    },
    showInToolbox: false
  });
  if (!Serializer.findClass(cType)) {
    Serializer.addClass(cType, [], undefined, "text");
    ElementFactory.Instance.registerCustomQuestion(cType);
  }
  toolbox = new QuestionToolbox();
  expect(toolbox.items).toHaveLength(origionalItemCount);
  Serializer.removeClass(cType);
  ElementFactory.Instance.unregisterElement(cType);
  CustomWidgetCollection.Instance.clear();
});

test("Creator layout: toolbox location", (): any => {
  const creator = new CreatorTester();
  expect(creator.toolboxLocation).toEqual("left");
  expect(creator.toolbox.isCompact).toEqual(false);
  expect(creator.showSidebar).toEqual(true);
  expect((<any>creator.toolbox).dotsItem.popupModel.horizontalPosition).toEqual("right");

  creator.toolboxLocation = "right";
  expect(creator.toolbox.isCompact).toEqual(true);
  expect((<any>creator.toolbox).dotsItem.popupModel.horizontalPosition).toEqual("left");

  creator.showSidebar = false;
  expect(creator.toolbox.isCompact).toEqual(false);
});

test("Toolbox forceCompact property", (): any => {
  const creator = new CreatorTester();
  expect(creator.toolbox.forceCompact).toEqual(undefined);
  expect(creator.toolbox.isCompact).toEqual(false);

  creator.toolbox.forceCompact = true;
  creator.updateToolboxIsCompact(false);
  expect(creator.toolbox.isCompact).toEqual(true);

  creator.toolbox.forceCompact = false;
  creator.updateToolboxIsCompact(true);
  expect(creator.toolbox.isCompact).toEqual(false);
});

test("the toolbox gets compact after the sidebar was collapsed/expanded ", (): any => {
  const creator = new CreatorTester();
  expect(creator.toolbox.isCompact).toEqual(false);
  expect(creator.showSidebar).toEqual(true);

  creator.showSidebar = false;
  expect(creator.toolbox.isCompact).toEqual(false);

  creator.showSidebar = true;
  expect(creator.toolbox.isCompact).toEqual(false);
});
test("Set default toolbox JSON by question", (): any => {
  settings.toolbox.defaultJSON["radiogroup"] = { choices: [1, 2, 3, 4, 5] };
  const oldImageLink = settings.toolbox.defaultJSON.image.imageLink;
  settings.toolbox.defaultJSON.image.imageLink = "testLink";
  const creator = new CreatorTester();
  expect(creator.toolbox.getItemByName("radiogroup").json["choices"]).toHaveLength(5);
  expect(creator.toolbox.getItemByName("image").json["imageLink"]).toEqual("testLink");
  settings.toolbox.defaultJSON.image.imageLink = oldImageLink;
  delete settings.toolbox.defaultJSON["radiogroup"];
});
test("default toolbox JSON by question and converter", (): any => {
  settings.toolbox.defaultJSON["radiogroup"] = { choices: [1, 2, 3, 4, 5] };
  const creator = new CreatorTester();
  const json: any = creator.toolbox.getItemByName("radiogroup").json;
  creator.clickToolboxItem(json);
  expect(creator.selectedElementName).toEqual("question1");
  let question = <Question>creator.selectedElement;
  expect(question.getType()).toEqual("radiogroup");
  expect(question.toJSON()["choices"]).toHaveLength(5);
  creator.convertCurrentQuestion("text");
  question = <Question>creator.selectedElement;
  expect(question.getType()).toEqual("text");
  creator.selectElement(question);
  creator.convertCurrentQuestion("radiogroup");
  question = <Question>creator.selectedElement;
  expect(question.getType()).toEqual("radiogroup");
  expect(question.toJSON()["choices"]).toHaveLength(5);
  delete settings.toolbox.defaultJSON["radiogroup"];
});
test("Check that d&d not working for toobox invisible items in readOnly mode", (): any => {
  const creator = new CreatorTester();
  const oldOnPointerDown = DragOrClickHelper.prototype.onPointerDown;
  let trace = "";
  DragOrClickHelper.prototype.onPointerDown = () => {
    trace += "processed->";
  };
  creator.toolbox["hiddenItemsListModel"].onPointerDown(undefined, undefined);
  expect(trace).toBe("processed->");
  creator.readOnly = true;
  creator.toolbox["hiddenItemsListModel"].onPointerDown(undefined, undefined);
  expect(trace).toBe("processed->"); //pointer down should not be processed in readOnlyMode;
  DragOrClickHelper.prototype.onPointerDown = oldOnPointerDown;
});
test("Use custom widgets in questionTypes array to keep them in correct order in the toolbox", (): any => {
  CustomWidgetCollection.Instance.clear();
  CustomWidgetCollection.Instance.addCustomWidget(
    {
      name: "first",
      widgetIsLoaded: () => {
        return true;
      },
      isFit: (question: Question) => {
        return question.name == "question2";
      }
    },
    "customtype"
  );
  CustomWidgetCollection.Instance.addCustomWidget(
    {
      name: "second",
      widgetIsLoaded: () => {
        return true;
      },
      isFit: (question: Question) => {
        return (<Question>question).getType() == "checkbox";
      }
    },
    "customtype"
  );
  CustomWidgetCollection.Instance.addCustomWidget(
    {
      name: "third",
      widgetIsLoaded: () => {
        return true;
      },
      isFit: (question: Question) => {
        return (<Question>question).getType() == "checkbox";
      },
      showInToolbox: false
    },
    "customtype"
  );
  ComponentCollection.Instance.add(<any>{ name: "comp1", questionJSON: { type: "dropdown", choices: [1, 2, 3, 4, 5] } });
  var toolbox = new QuestionToolbox(["radiogroup", "first", "second", "comp1", "third", "dropdown"]);
  expect(toolbox.items).toHaveLength(5);
  expect(toolbox.items[0].name).toEqual("radiogroup");
  expect(toolbox.items[1].name).toEqual("first");
  expect(toolbox.items[2].name).toEqual("second");
  expect(toolbox.items[3].name).toEqual("comp1");
  expect(toolbox.items[4].name).toEqual("dropdown");
  CustomWidgetCollection.Instance.clear();
  ComponentCollection.Instance.clear();
});
