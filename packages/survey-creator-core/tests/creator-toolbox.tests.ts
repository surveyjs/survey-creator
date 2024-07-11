import { SurveyModel, QuestionTextModel, QuestionRatingModel, CustomWidgetCollection, Serializer, SurveyElement } from "survey-core";
import { ToolboxToolViewModel } from "../src/components/toolbox/toolbox-tool";
import { CreatorTester } from "./creator-tester";
import { PageAdorner } from "../src/components/page";
import { QuestionAdornerViewModel } from "../src/components/question";

test("Reason of question Added from toolbox, onclicking add question button, on duplicated question, panel, page", (): any => {
  const creator = new CreatorTester();
  const reason: Array<string> = [];
  creator.onQuestionAdded.add(function (sender, options) {
    reason.push(options.reason);
  });

  creator.clickToolboxItem({ type: "text" });
  expect(reason).toHaveLength(1);
  expect(reason[0]).toEqual("ADDED_FROM_TOOLBOX");

  creator.fastCopyQuestion(creator.survey.getAllQuestions()[0]);
  expect(reason).toHaveLength(2);
  expect(reason[1]).toEqual("ELEMENT_COPIED");

  const pageAdorner = new PageAdorner(creator, creator.survey.pages[0]);
  pageAdorner.addNewQuestion(pageAdorner, undefined);
  expect(reason).toHaveLength(3);
  expect(reason[2]).toEqual("ADDED_FROM_PAGEBUTTON");

  creator.copyPage(creator.survey.pages[0]);
  expect(reason).toHaveLength(6);
  expect(reason[3]).toEqual("ELEMENT_COPIED");
  expect(reason[4]).toEqual("ELEMENT_COPIED");
  expect(reason[5]).toEqual("ELEMENT_COPIED");

  const toolboxViwer = new ToolboxToolViewModel(creator.toolbox.items[0], creator, creator.toolbox);
  toolboxViwer.click({});
  expect(reason).toHaveLength(7);
  expect(reason[6]).toEqual("ADDED_FROM_TOOLBOX");
  creator.onDragDropItemStart();
  creator.survey.pages[0].addNewQuestion("text", "qqq1");
  expect(reason).toHaveLength(8);
  expect(reason[7]).toEqual("DROPPED_FROM_TOOLBOX");
  expect(creator.selectedElementName).toBe("question7");
  creator.convertCurrentQuestion("comment");
  expect(reason).toHaveLength(9);
  expect(reason[8]).toEqual("ELEMENT_CONVERTED");
});
test("Click on toolbox and cancel survey.lazyRendering", (): any => {
  const creator = new CreatorTester();
  expect(creator.survey.isLazyRendering).toEqual(true);
  creator.clickToolboxItem({ type: "text" });
  expect(creator.survey.isLazyRendering).toEqual(false);
});
test("Click on toolbox and insert into correct index", (): any => {
  const creator = new CreatorTester();
  creator.addNewQuestionLast = false;
  creator.JSON = {
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2" }
    ]
  };
  creator.selectElement(creator.survey.getQuestionByName("question1"));
  creator.clickToolboxItem({ type: "text" });
  expect(creator.selectedElementName).toEqual("question3");
  expect(creator.survey.currentPage.elements[1].name).toEqual("question3");
});
test("Try to use name property from JSON", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "question1" },
      { type: "text", name: "question2" }
    ]
  };
  creator.selectElement(creator.survey.getQuestionByName("question1"));
  creator.clickToolboxItem({ type: "text", name: "text1" });
  expect(creator.selectedElementName).toEqual("text1");
  creator.clickToolboxItem({ type: "text", name: "text1" });
  expect(creator.selectedElementName).toEqual("question3");
});
test("Convert checkbox into rating", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "question1", choices: [1, 2, 3, 4] }]
  };
  let q = creator.survey.getQuestionByName("question1");
  creator.selectElement(q);
  creator.convertCurrentQuestion("rating");
  let el = <QuestionRatingModel>creator.selectedElement;
  expect(el.getType()).toEqual("rating");
  expect(el.rateValues).toHaveLength(4);
  expect(el.rateValues[0].value).toEqual(1);
  creator.clickToolboxItem(creator.toolbox.getItemByName("checkbox").json);
  expect(creator.selectedElement.getType()).toEqual("checkbox");
  creator.convertCurrentQuestion("rating");
  el = <QuestionRatingModel>creator.selectedElement;
  expect(el.getType()).toEqual("rating");
  expect(el.rateValues).toHaveLength(0);
});
test("Add question based on json in toolbox", (): any => {
  const creator = new CreatorTester();
  const toolboxItem = creator.toolbox.getItemByName("text");
  toolboxItem.json.placeholder = "Test holder";
  const survey: SurveyModel = creator.survey;
  creator.currentAddQuestionType = "text";
  creator.addNewQuestionInPage(() => { });
  const question = <QuestionTextModel>survey.getAllQuestions()[0];
  expect(question.getType()).toEqual("text");
  expect(question.placeholder).toEqual("Test holder");
  delete toolboxItem.json.placeholder;
});
test("Has one item type in convertTo", (): any => {
  CustomWidgetCollection.Instance.add({
    name: "text",
    title: "Single-Line Input",
    widgetIsLoaded: () => { return true; },
    isFit: () => (question) => { return question.getType() === "text"; }
  }, "customtype");
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1" }
    ]
  };
  let counter = 0;
  creator.toolbox.itemNames.forEach(item => { if (item === "text") counter++; });
  expect(counter).toEqual(1);
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);

  const questionModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined
  );
  const items = questionModel.getConvertToTypesActions();
  const popup = questionModel.getActionById("convertTo").popupModel;
  expect(popup).toBeTruthy();
  popup.toggleVisibility();
  const list = popup.contentComponentData.model;
  expect(list).toBeTruthy();
  counter = 0;
  list.actions.forEach(item => {
    if (item.id === "text") counter++;
  });
  expect(counter).toEqual(1);
  CustomWidgetCollection.Instance.clear();
});
test("ConvertTo, show custom widgets in ConvertTo action", (): any => {
  const widget = {
    name: "test_widget",
    title: "Test Widget",
    iconName: "icon-editor",
    widgetIsLoaded: function () {
      return true;
    },
    isFit: function (question) {
      return question.getType() === "test_widget";
    },
    init() {
      //Register a new type using the empty question as the base.
      Serializer.addClass("test_widget", [], null, "empty");
    },
    htmlTemplate:
      "<div>This is test widget</div>",
    afterRender: function (question, element) {
    }
  };

  CustomWidgetCollection.Instance.add(widget, "customtype");

  const creator = new CreatorTester({ questionTypes: ["text", "comment"] });
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" }
    ]
  };
  expect(creator.toolbox.items).toHaveLength(3);
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);

  const questionModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined
  );
  const items = questionModel.getConvertToTypesActions();
  expect(items).toHaveLength(3);
  expect(items[0].id).toEqual("text");
  expect(items[1].id).toEqual("comment");
  expect(items[2].id).toEqual("test_widget");
  expect(items[2].iconName).toEqual("icon-editor");
  CustomWidgetCollection.Instance.clear();
});
test("Add-remove toolbox items, #5271", (): any => {
  const creator = new CreatorTester();
  creator.toolbox.allowExpandMultipleCategories = true;
  creator.toolbox.showCategoryTitles = true;
  creator.onQuestionAdded.add((sender, options) => {
    if (options.question.getType() === "dropdown") {
      creator.toolbox.removeItem("dropdown");
    }
  });
  creator.currentAddQuestionType = "dropdown";
  creator.addNewQuestionInPage(() => { }, undefined, "dropdown");
  expect(creator.getAddNewQuestionText()).toEqual("Add Question");
});
test("Add-remove toolbox items, #5067", (): any => {
  const creator = new CreatorTester();
  const itemName = "custom-item";
  creator.toolbox.addItems([{
    name: itemName,
    isCopied: true,
    iconName: "icon-default",
    title: "Custom Type",
    category: "Custom",
    className: "svc-toolbox__custom-item",
    json: { type: "text" }
  }], true);
  creator.clickToolboxItem(creator.toolbox.getItemByName(itemName).json);
  expect(creator.selectedElement.getType()).toEqual("text");
  const adorner = new QuestionAdornerViewModel(creator, <SurveyElement>creator.selectedElement, undefined);
  expect(adorner.getConvertToTypesActions()).toHaveLength(0);
});
test("Doesn't duplicate custom toolbox items with built-in ones in convertTo", (): any => {
  const creator = new CreatorTester();
  creator.toolbox.addItem({
    name: "country",
    title: "Country",
    json: {
      type: "dropdown",
      placeholder: "Select a country...",
      choicesByUrl: {
        url: "https://surveyjs.io/api/CountriesExample",
      },
    },
  } as any);
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionModel = new QuestionAdornerViewModel(
    creator,
    question,
    undefined as any
  );

  const items = questionModel.getConvertToTypesActions();
  let counter = 0;
  items.forEach(item => {
    if (item.id === "dropdown") counter++;
  });
  expect(counter).toEqual(1);

  const popup = questionModel.getActionById("convertTo").popupModel;
  expect(popup).toBeTruthy();
  popup.toggleVisibility();
  const list = popup.contentComponentData.model;
  expect(list).toBeTruthy();
  counter = 0;
  list.actions.forEach(item => {
    if (item.id === "dropdown") counter++;
  });
  expect(counter).toEqual(1);
});
