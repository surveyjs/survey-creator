import { QuestionCheckboxModel, QuestionImageModel, QuestionRatingModel, Serializer, settings } from "survey-core";
import { ItemValueWrapperViewModel } from "../src/components/item-value";
import { QuestionImageAdornerViewModel } from "../src/components/question-image";
import { QuestionRatingAdornerViewModel } from "../src/components/question-rating";
import { CreatorTester } from "./creator-tester";

beforeEach(() => { });

settings.supportCreatorV2 = true;

test("item value isNew isDraggable allowRemove", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];

  const allChoices = question.visibleChoices;
  expect(allChoices.length).toEqual(7);

  const firstItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    allChoices[1]
  );
  const itemNoneAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    allChoices[6]
  );

  expect(firstItemAdorner.isNew).toBeFalsy();
  expect(firstItemAdorner.allowAdd).toBeFalsy();
  expect(firstItemAdorner.isDraggable).toBeTruthy();
  expect(firstItemAdorner.allowRemove).toBeTruthy();

  expect(itemNoneAdorner.isNew).toBeTruthy();
  expect(itemNoneAdorner.allowAdd).toBeTruthy();
  expect(itemNoneAdorner.isDraggable).toBeFalsy();
  expect(itemNoneAdorner.allowRemove).toBeTruthy();

  creator.readOnly = true;
  expect(firstItemAdorner.allowAdd).toBeFalsy();
  expect(firstItemAdorner.isDraggable).toBeFalsy();
  expect(firstItemAdorner.allowRemove).toBeFalsy();

  expect(itemNoneAdorner.allowAdd).toBeFalsy();
  expect(itemNoneAdorner.isDraggable).toBeFalsy();
  expect(itemNoneAdorner.allowRemove).toBeFalsy();
});

test("item value allowAdd isDraggable allowRemove on events", () => {
  const creator = new CreatorTester();

  creator.onCollectionItemAllowOperations.add(function (sender, options) {
    //console.log(options.obj, options, sender);
    if(options.item && options.collection[1] == options.item) {
      options.allowDelete = false;
    }
  });
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];

  const allChoices = question.visibleChoices;
  expect(allChoices.length).toEqual(7);

  const firstItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    allChoices[1]
  );
  const secondItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    allChoices[2]
  );

  expect(firstItemAdorner.allowRemove).toBeFalsy();
  expect(secondItemAdorner.allowRemove).toBeTruthy();
});

test("item value isNew isDraggable allowRemove - complex test", (): any => {

  let creator = new CreatorTester();
  function checkItemAllowedActions(questionName, actionName) {
    let question = creator.survey.getQuestionByName(questionName);
    return question.visibleChoices.map(
      item => (new ItemValueWrapperViewModel(
        creator,
        <any>question,
        item
      ))[actionName]);
  }
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }]
  };

  expect(checkItemAllowedActions("q1", "allowAdd")).toEqual([true, false, false, false, true, true, true]);
  expect(checkItemAllowedActions("q1", "isDraggable")).toEqual([false, true, true, true, false, false, false]);
  expect(checkItemAllowedActions("q1", "allowRemove")).toEqual([true, true, true, true, true, true, true]);

  Serializer.getProperty("itemvalue", "text").readOnly = true;
  expect(checkItemAllowedActions("q1", "allowAdd")).toEqual([true, false, false, false, true, true, true]);
  expect(checkItemAllowedActions("q1", "isDraggable")).toEqual([false, true, true, true, false, false, false]);
  expect(checkItemAllowedActions("q1", "allowRemove")).toEqual([true, true, true, true, true, true, true]);
  Serializer.getProperty("itemvalue", "text").readOnly = false;

  Serializer.getProperty("checkbox", "choices").readOnly = true;
  expect(checkItemAllowedActions("q1", "allowAdd")).toEqual([false, false, false, false, false, false, false]);
  expect(checkItemAllowedActions("q1", "isDraggable")).toEqual([false, false, false, false, false, false, false]);
  expect(checkItemAllowedActions("q1", "allowRemove")).toEqual([false, false, false, false, false, false, false]);
  Serializer.getProperty("checkbox", "choices").readOnly = false;

  creator.onGetPropertyReadOnly.add(function(editor, options) {
    if (options.obj.getType() === "checkbox" && options.propertyName == "choices")
      options.readOnly = true;
  });
  expect(checkItemAllowedActions("q1", "allowAdd")).toEqual([false, false, false, false, false, false, false]);
  expect(checkItemAllowedActions("q1", "isDraggable")).toEqual([false, false, false, false, false, false, false]);
  expect(checkItemAllowedActions("q1", "allowRemove")).toEqual([false, false, false, false, false, false, false]);
  creator.onGetPropertyReadOnly.clear();

  creator.onElementAllowOperations.add(function(editor, options) {
    if (options.obj.name === "q1")
      options.allowEdit = false;
  });
  expect(checkItemAllowedActions("q1", "allowAdd")).toEqual([false, false, false, false, false, false, false]);
  expect(checkItemAllowedActions("q1", "isDraggable")).toEqual([false, false, false, false, false, false, false]);
  expect(checkItemAllowedActions("q1", "allowRemove")).toEqual([false, false, false, false, false, false, false]);
  creator.onElementAllowOperations.clear();

  creator.onCollectionItemAllowOperations.add(function(editor, options) {
    if (options.obj.name == "q1" && options.collection.indexOf(options.item) == 0)
      options.allowEdit = false;
    if (options.obj.name == "q1" && options.collection.indexOf(options.item) == 1)
      options.allowDelete = false;
  });
  expect(checkItemAllowedActions("q1", "allowAdd")).toEqual([true, false, false, false, true, true, true]);
  expect(checkItemAllowedActions("q1", "isDraggable")).toEqual([false, true, true, true, false, false, false]);
  expect(checkItemAllowedActions("q1", "allowRemove")).toEqual([true, false, true, true, true, true, true]);
});

test("QuestionRatingAdornerViewModel read only mode", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "rating", name: "q1" }]
  };
  const question = <QuestionRatingModel>creator.survey.getAllQuestions()[0];

  const ratingAdorner = new QuestionRatingAdornerViewModel(
    creator,
    question,
    <any>{}
  );

  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();

  creator.readOnly = true;

  expect(ratingAdorner.allowAdd).toBeFalsy();
  expect(ratingAdorner.allowRemove).toBeFalsy();
});

test("QuestionImageAdornerViewModel read only mode", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "image", name: "q1" }]
  };
  const question = <QuestionImageModel>creator.survey.getAllQuestions()[0];

  const imageAdorner = new QuestionImageAdornerViewModel(
    creator,
    question,
    <any>{},
    null
  );

  expect(imageAdorner.allowEdit).toBeTruthy();

  creator.readOnly = true;

  expect(imageAdorner.allowEdit).toBeFalsy();
});