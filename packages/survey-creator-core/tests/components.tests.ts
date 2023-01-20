import { ImageItemValue, ItemValue, Model, QuestionCheckboxModel, QuestionImageModel, QuestionImagePickerModel, QuestionRatingModel, Serializer, settings } from "survey-core";
import { ImageItemValueWrapperViewModel } from "../src/components/image-item-value";
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
  const selectAllItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    allChoices[0]
  );

  expect(firstItemAdorner.isNew).toBeFalsy();
  expect(firstItemAdorner.allowAdd).toBeFalsy();
  expect(firstItemAdorner.isDraggable).toBeTruthy();
  expect(firstItemAdorner.allowRemove).toBeTruthy();

  expect(itemNoneAdorner.isNew).toBeTruthy();
  expect(itemNoneAdorner.allowAdd).toBeTruthy();
  expect(itemNoneAdorner.isDraggable).toBeFalsy();
  expect(itemNoneAdorner.allowRemove).toBeFalsy();

  expect(selectAllItemAdorner.isNew).toBeTruthy();
  expect(selectAllItemAdorner.allowAdd).toBeTruthy();
  expect(selectAllItemAdorner.isDraggable).toBeFalsy();
  expect(selectAllItemAdorner.allowRemove).toBeFalsy();

  question.hasSelectAll = true;
  expect(selectAllItemAdorner.isNew).toBeFalsy();
  expect(selectAllItemAdorner.allowAdd).toBeFalsy();
  expect(selectAllItemAdorner.isDraggable).toBeFalsy();
  expect(selectAllItemAdorner.allowRemove).toBeTruthy();

  creator.readOnly = true;
  expect(firstItemAdorner.allowAdd).toBeFalsy();
  expect(firstItemAdorner.isDraggable).toBeFalsy();
  expect(firstItemAdorner.allowRemove).toBeFalsy();

  expect(itemNoneAdorner.allowAdd).toBeFalsy();
  expect(itemNoneAdorner.isDraggable).toBeFalsy();
  expect(itemNoneAdorner.allowRemove).toBeFalsy();
});

test("item hasNone, hasOther, hasSelectAll change trigger updateIsNew and behave like on click add/remove", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];

  const noneItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    question.noneItem
  );
  const selectAllItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    question.selectAllItem
  );
  const otherItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    question.otherItem
  );

  expect(selectAllItemAdorner.isNew).toBeTruthy();
  expect(selectAllItemAdorner.allowAdd).toBeTruthy();
  expect(selectAllItemAdorner.allowRemove).toBeFalsy();

  question.hasSelectAll = true;
  expect(selectAllItemAdorner.isNew).toBeFalsy();
  expect(selectAllItemAdorner.allowAdd).toBeFalsy();
  expect(selectAllItemAdorner.allowRemove).toBeTruthy();

  expect(otherItemAdorner.isNew).toBeTruthy();
  expect(otherItemAdorner.allowAdd).toBeTruthy();
  expect(otherItemAdorner.allowRemove).toBeFalsy();

  question.hasOther = true;
  expect(otherItemAdorner.isNew).toBeFalsy();
  expect(otherItemAdorner.allowAdd).toBeFalsy();
  expect(otherItemAdorner.allowRemove).toBeTruthy();

  expect(noneItemAdorner.isNew).toBeTruthy();
  expect(noneItemAdorner.allowAdd).toBeTruthy();
  expect(noneItemAdorner.allowRemove).toBeFalsy();

  question.hasNone = true;
  expect(noneItemAdorner.isNew).toBeFalsy();
  expect(noneItemAdorner.allowAdd).toBeFalsy();
  expect(noneItemAdorner.allowRemove).toBeTruthy();
});

test("item value allowAdd isDraggable allowRemove on events", () => {
  const creator = new CreatorTester();

  creator.onCollectionItemAllowOperations.add(function (sender, options) {
    //console.log(options.obj, options, sender);
    if (options.item && options.collection[1] == options.item) {
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

test("item value no pointer down on new or editable", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const allChoices = question.visibleChoices;
  let log = "";

  const firstItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    allChoices[1]
  );
  firstItemAdorner["dragOrClickHelper"].onPointerDown = () => log += "->onPointerDown_1";

  const itemNoneAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    allChoices[6]
  );
  itemNoneAdorner["dragOrClickHelper"].onPointerDown = () => log += "->onPointerDown_None";

  const div = document.createElement("div");
  div.setAttribute("contenteditable", "true");
  let fakePointerDownEvent: any = { target: div };

  firstItemAdorner.onPointerDown(fakePointerDownEvent);
  expect(log).toEqual("");

  div.setAttribute("contenteditable", "false");
  firstItemAdorner.onPointerDown(fakePointerDownEvent);
  expect(log).toEqual("->onPointerDown_1");
  itemNoneAdorner.onPointerDown(fakePointerDownEvent);
  expect(log).toEqual("->onPointerDown_1");
});

test("item value allowAdd isDraggable allowRemove on events", () => {
  const creator = new CreatorTester();

  creator.onCollectionItemAllowOperations.add(function (sender, options) {
    //console.log(options.obj, options, sender);
    if (options.item && options.collection[1] == options.item) {
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

test("item value adorner and newItem value", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const newItemAdorner = new ItemValueWrapperViewModel(creator, question, question.newItem);
  expect(question.newItem.value).toEqual(4);
  question.choices.push(new ItemValue(4));
  expect(question.newItem.value).toEqual(5);
  question.choices.splice(2, 2);
  expect(question.newItem.value).toEqual(3);
  question.choices = [];
  expect(question.newItem.value).toEqual("item1");
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

test("QuestionImageAdornerViewModel pass question into onUploadFile event", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "image", name: "q1" }]
  };
  const rootElement = document.createElement("div");
  rootElement.innerHTML = "<input type='file' class='svc-choose-file-input' />";
  const question = <QuestionImageModel>creator.survey.getAllQuestions()[0];
  const imageAdorner = new QuestionImageAdornerViewModel(
    creator,
    question,
    <any>{},
    rootElement
  );

  let counter = 0;
  creator.onUploadFile.add((s, o) => {
    expect(o.question).toEqual(question);
    counter++;
  });
  creator.onOpenFileChooser.add((s, o) => {
    o.callback([{}]);
  });
  imageAdorner.chooseFile(imageAdorner);
  expect(counter).toEqual(1);
});

test("QuestionRatingAdornerViewModel respect maximumRateValues with no rate values", () => {
  const creator = new CreatorTester();
  creator.maximumRateValues = 4;
  creator.JSON = {
    elements: [{ type: "rating", name: "q1", rateMax: 3 }]
  };
  const question = <QuestionRatingModel>creator.survey.getAllQuestions()[0];

  const ratingAdorner = new QuestionRatingAdornerViewModel(
    creator,
    question,
    <any>{}
  );

  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.element.rateValues.length).toBe(0);

  ratingAdorner.addItem(ratingAdorner);
  expect(ratingAdorner.allowAdd).toBeFalsy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.element.rateMax).toBe(4);
  expect(ratingAdorner.element.rateValues.length).toBe(0);

  ratingAdorner.removeItem(ratingAdorner);
  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.element.rateMax).toBe(3);
  expect(ratingAdorner.element.rateValues.length).toBe(0);
});

test("QuestionRatingAdornerViewModel respect maximumRateValues with rate values", () => {
  const creator = new CreatorTester();
  creator.maximumRateValues = 4;
  creator.JSON = {
    elements: [{ type: "rating", name: "q1", "rateValues": [
      "item1",
      "item2",
      "item3"
    ] }]
  };
  const question = <QuestionRatingModel>creator.survey.getAllQuestions()[0];

  const ratingAdorner = new QuestionRatingAdornerViewModel(
    creator,
    question,
    <any>{}
  );

  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.element.rateValues.length).toBe(3);

  ratingAdorner.addItem(ratingAdorner);
  expect(ratingAdorner.allowAdd).toBeFalsy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.element.rateMax).toBe(5);
  expect(ratingAdorner.element.rateValues.length).toBe(4);

  ratingAdorner.removeItem(ratingAdorner);
  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.element.rateMax).toBe(5);
  expect(ratingAdorner.element.rateValues.length).toBe(3);
});

test("ImageItemValueWrapperViewModel raises onItemValueAdded", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "imagepicker", name: "q1" }]
  };
  const question = <QuestionImagePickerModel>creator.survey.getAllQuestions()[0];
  const imegItem = new ImageItemValue("item1");
  const imageItemAdorner = new ImageItemValueWrapperViewModel(
    creator,
    question,
    imegItem,
    undefined,
    undefined as any
  );

  let callCount = 0;
  creator.onItemValueAdded.add(() => {
    callCount++;
  });
  creator.onUploadFile.add((s, o) => {
    o.callback("success", {});
  });

  imageItemAdorner["isChoosingNewFile"] = true;
  imageItemAdorner.uploadFiles([{}]);

  expect(callCount).toBe(1);
  expect(imageItemAdorner["isChoosingNewFile"]).toBeFalsy();

  imageItemAdorner.uploadFiles([{}]);

  expect(callCount).toBe(1);
  expect(imageItemAdorner["isChoosingNewFile"]).toBeFalsy();
});
