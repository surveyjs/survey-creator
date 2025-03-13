import {
  Base, ImageItemValue, ItemValue, QuestionCheckboxModel, JsonObjectProperty,
  QuestionImageModel, QuestionImagePickerModel, QuestionRatingModel, SurveyModel
} from "survey-core";
import { ImageItemValueWrapperViewModel } from "../src/components/image-item-value";
import { ItemValueWrapperViewModel } from "../src/components/item-value";
import { QuestionImageAdornerViewModel } from "../src/components/question-image";
import { QuestionRatingAdornerViewModel } from "../src/components/question-rating";
import { CreatorTester } from "./creator-tester";
import { LogoImageViewModel } from "../src/components/header/logo-image";
import { imageMimeTypes } from "../src/utils/utils";
import { calculateDragOverLocation, DropIndicatorPosition } from "../src/dragdrop-survey-elements";

beforeEach(() => { });

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
test("Allow remove for choices and generated choices", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "dropdown", name: "q1", choices: [1, 2, "item4"], choicesMin: 3, choicesMax: 10 }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];

  const choiceItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    question.choices[0]
  );
  const generatedItemAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    question.visibleChoices[4]
  );
  expect(choiceItemAdorner.item.value).toBe(1);
  expect(choiceItemAdorner.isNew).toBeFalsy();
  expect(choiceItemAdorner.allowAdd).toBeFalsy();
  expect(choiceItemAdorner.allowRemove).toBeTruthy();

  expect(generatedItemAdorner.item.value).toBe(4);
  expect(generatedItemAdorner.isNew).toBeFalsy();
  expect(generatedItemAdorner.allowAdd).toBeFalsy();
  expect(generatedItemAdorner.allowRemove).toBeFalsy();
});
test("Allow remove for choices with value equals to 0, Bug#5500", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "dropdown", name: "q1", choices: [0, 1, 2] }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];

  const choiceItem1Adorner = new ItemValueWrapperViewModel(creator, question, question.choices[0]);
  const choiceItem2Adorner = new ItemValueWrapperViewModel(creator, question, question.choices[1]);
  const choiceItem3Adorner = new ItemValueWrapperViewModel(creator, question, question.choices[2]);
  expect(choiceItem1Adorner.item.value).toBe(0);
  expect(choiceItem1Adorner.isNew).toBeFalsy();
  expect(choiceItem1Adorner.allowAdd).toBeFalsy();
  expect(choiceItem1Adorner.allowRemove).toBeTruthy();

  expect(choiceItem2Adorner.item.value).toBe(1);
  expect(choiceItem2Adorner.isNew).toBeFalsy();
  expect(choiceItem2Adorner.allowAdd).toBeFalsy();
  expect(choiceItem2Adorner.allowRemove).toBeTruthy();

  expect(choiceItem3Adorner.item.value).toBe(2);
  expect(choiceItem3Adorner.isNew).toBeFalsy();
  expect(choiceItem3Adorner.allowAdd).toBeFalsy();
  expect(choiceItem3Adorner.allowRemove).toBeTruthy();

});

test("item value allowRemove on events", () => {
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

test("item value allowAdd on events", () => {
  const creator = new CreatorTester();

  creator.onCollectionItemAllowOperations.add(function (sender, options) {
    const q = <QuestionCheckboxModel>options.obj;
    if (q && q.selectAllItem == options.item) {
      options.allowAdd = true;
    }
    if (q && q.noneItem == options.item) {
      options.allowAdd = true;
    }
    if (q && q.otherItem == options.item) {
      options.allowAdd = false;
    }
    if (q && q.newItem == options.item) {
      options.allowAdd = false;
    }
  });
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];

  const allChoices = question.visibleChoices;
  expect(allChoices.length).toEqual(7);

  const selectAllAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    question.selectAllItem
  );
  const noneAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    question.noneItem
  );
  const otherAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    question.otherItem
  );
  const newAdorner = new ItemValueWrapperViewModel(
    creator,
    question,
    question.newItem
  );

  expect(selectAllAdorner.allowAdd).toBeTruthy();
  expect(noneAdorner.allowAdd).toBeTruthy();
  expect(otherAdorner.allowAdd).toBeFalsy();
  expect(newAdorner.allowAdd).toBeFalsy();
  expect(newAdorner.item.isVisible).toBeFalsy();
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
test("item value no pointer down on None, Select All items", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const allChoices = question.visibleChoices;
  expect(allChoices).toHaveLength(3 + 3 + 1);
  const selectAllItemAdorner = new ItemValueWrapperViewModel(creator, question, allChoices[0]);
  const firstItemAdorner = new ItemValueWrapperViewModel(creator, question, allChoices[1]);
  const itemNoneAdorner = new ItemValueWrapperViewModel(creator, question, allChoices[6]);
  expect(selectAllItemAdorner.canBeDragged).toBeFalsy();
  expect(firstItemAdorner.canBeDragged).toBeTruthy();
  expect(itemNoneAdorner.canBeDragged).toBeFalsy();
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
  expect(question.newItem.value).toEqual("Item 1");
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

test("QuestionImageAdornerViewModel read only mode on events", () => {
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
  expect(imageAdorner.filePresentationModel.renderedInputReadOnly).toBeFalsy();

  creator.onElementAllowOperations.add((sender, options) => {
    if (options.obj.name == "q1") options.allowEdit = false;
  });

  const imageAdornerRO = new QuestionImageAdornerViewModel(
    creator,
    question,
    <any>{},
    null
  );
  expect(imageAdornerRO.allowEdit).toBeFalsy();
  expect(imageAdornerRO.filePresentationModel.isInputReadOnly).toBeTruthy();
});

test("QuestionImageAdornerViewModel acceptedTypes", () => {
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
  expect(imageAdorner.acceptedTypes).toBe(imageMimeTypes);
  question.contentMode = "video";
  expect(imageAdorner.acceptedTypes).toBe("video/*");
  question.contentMode = "image";
  expect(imageAdorner.acceptedTypes).toBe(imageMimeTypes);
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
    <any>{}
  );
  imageAdorner.rootElement = rootElement;

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
  expect(ratingAdorner.enableAdd).toBeTruthy();
  expect(ratingAdorner.enableRemove).toBeTruthy();
  expect(ratingAdorner.element.rateValues.length).toBe(0);

  ratingAdorner.addItem(ratingAdorner);
  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeFalsy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.element.rateMax).toBe(4);
  expect(ratingAdorner.element.rateValues.length).toBe(0);

  ratingAdorner.removeItem(ratingAdorner);
  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.element.rateMax).toBe(3);
  expect(ratingAdorner.element.rateValues.length).toBe(0);
});

test("QuestionRatingAdornerViewModel disabled add remove", () => {
  const creator = new CreatorTester();
  creator.maximumRateValues = 4;
  creator.JSON = {
    elements: [{ type: "rating", rateType: "smileys", name: "q1", rateMin: 1, rateMax: 10 }]
  };
  const question = <QuestionRatingModel>creator.survey.getAllQuestions()[0];

  const ratingAdorner = new QuestionRatingAdornerViewModel(
    creator,
    question,
    <any>{}
  );

  expect(ratingAdorner.enableRemove).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeFalsy();

  ratingAdorner.addItem(ratingAdorner);
  expect(ratingAdorner.element.rateMax).toBe(10);

  for (let i = 1; i <= 7; i++) ratingAdorner.removeItem(ratingAdorner);
  expect(ratingAdorner.element.rateMax).toBe(3);
  expect(ratingAdorner.enableRemove).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeTruthy();

  ratingAdorner.removeItem(ratingAdorner);
  expect(ratingAdorner.element.rateMax).toBe(2);
  expect(ratingAdorner.enableRemove).toBeFalsy();
  expect(ratingAdorner.enableAdd).toBeTruthy();

  ratingAdorner.removeItem(ratingAdorner);
  expect(ratingAdorner.element.rateMax).toBe(2);
  expect(ratingAdorner.enableRemove).toBeFalsy();
  expect(ratingAdorner.enableAdd).toBeTruthy();
});

test("QuestionRatingAdornerViewModel respect library limits", () => {
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
  creator.maximumRateValues = 0;
  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeTruthy();
  expect(ratingAdorner.enableRemove).toBeTruthy();
  question.rateMax = 20;
  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeFalsy();
  expect(ratingAdorner.enableRemove).toBeTruthy();
  question.rateMax = 2;
  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeTruthy();
  expect(ratingAdorner.enableRemove).toBeFalsy();

  question.rateMax = 15;
  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeTruthy();
  expect(ratingAdorner.enableRemove).toBeTruthy();

  question.rateDisplayMode = "smileys";
  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.allowRemove).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeFalsy();
  expect(ratingAdorner.enableRemove).toBeTruthy();

  creator.readOnly = true;
  expect(ratingAdorner.allowAdd).toBeFalsy();
  expect(ratingAdorner.allowRemove).toBeFalsy();
  expect(ratingAdorner.enableAdd).toBeFalsy();
  expect(ratingAdorner.enableRemove).toBeFalsy();

});

test("QuestionRatingAdornerViewModel button styles", () => {
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
  expect(ratingAdorner.addClassNames).toBe("svc-item-value-controls__button svc-item-value-controls__add");
  expect(ratingAdorner.removeClassNames).toBe("svc-item-value-controls__button svc-item-value-controls__remove");
  question.rateMax = 2;
  expect(ratingAdorner.addClassNames).toBe("svc-item-value-controls__button svc-item-value-controls__add");
  expect(ratingAdorner.removeClassNames).toBe("svc-item-value-controls__button svc-item-value-controls__button--disabled svc-item-value-controls__remove");
  question.rateMax = 4;
  expect(ratingAdorner.addClassNames).toBe("svc-item-value-controls__button svc-item-value-controls__button--disabled svc-item-value-controls__add");
  expect(ratingAdorner.removeClassNames).toBe("svc-item-value-controls__button svc-item-value-controls__remove");
});

test("QuestionRatingAdornerViewModel controlsClassNames", () => {
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
  expect(ratingAdorner.hasTopLabel).toBe(false);
  expect(ratingAdorner.controlsClassNames).toBe("svc-rating-question-controls svc-item-value-controls");
  question.minRateDescription = "min";
  question.rateDescriptionLocation = "leftRight";
  expect(ratingAdorner.hasTopLabel).toBe(false);
  expect(ratingAdorner.controlsClassNames).toBe("svc-rating-question-controls svc-item-value-controls");

  question.minRateDescription = "min";
  question.rateDescriptionLocation = "top";
  expect(ratingAdorner.hasTopLabel).toBe(true);
  expect(ratingAdorner.controlsClassNames).toBe("svc-rating-question-controls svc-item-value-controls svc-rating-question-controls--labels-top");

  question.minRateDescription = "min";
  question.rateDescriptionLocation = "topBottom";
  expect(ratingAdorner.hasTopLabel).toBe(true);
  expect(ratingAdorner.controlsClassNames).toBe("svc-rating-question-controls svc-item-value-controls svc-rating-question-controls--labels-top");

  question.minRateDescription = "";
  question.rateDescriptionLocation = "top";
  expect(ratingAdorner.hasTopLabel).toBe(false);
  expect(ratingAdorner.controlsClassNames).toBe("svc-rating-question-controls svc-item-value-controls");

  question.minRateDescription = "";
  question.rateDescriptionLocation = "topBottom";
  expect(ratingAdorner.hasTopLabel).toBe(false);
  expect(ratingAdorner.controlsClassNames).toBe("svc-rating-question-controls svc-item-value-controls");
});
test("QuestionRatingAdornerViewModel respect maximumRateValues with rate values", () => {
  const creator = new CreatorTester();
  creator.maximumRateValues = 4;
  creator.JSON = {
    elements: [{
      type: "rating", name: "q1", "rateValues": [
        "item1",
        "item2",
        "item3"
      ]
    }]
  };
  const question = <QuestionRatingModel>creator.survey.getAllQuestions()[0];

  const ratingAdorner = new QuestionRatingAdornerViewModel(
    creator,
    question,
    <any>{}
  );

  expect(ratingAdorner.enableAdd).toBeTruthy();
  expect(ratingAdorner.enableRemove).toBeTruthy();
  expect(ratingAdorner.element.rateValues.length).toBe(3);

  ratingAdorner.addItem(ratingAdorner);
  expect(ratingAdorner.enableAdd).toBeFalsy();
  expect(ratingAdorner.enableRemove).toBeTruthy();
  expect(ratingAdorner.element.rateMax).toBe(5);
  expect(ratingAdorner.element.rateValues.length).toBe(4);

  ratingAdorner.removeItem(ratingAdorner);
  expect(ratingAdorner.enableAdd).toBeTruthy();
  expect(ratingAdorner.enableRemove).toBeTruthy();
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

test("ImageItemValueWrapperViewModel acceptedTypes", () => {
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
  expect(imageItemAdorner.acceptedTypes).toBe(imageMimeTypes);
  question.contentMode = "video";
  expect(imageItemAdorner.acceptedTypes).toBe("video/*");
  question.contentMode = "image";
  expect(imageItemAdorner.acceptedTypes).toBe(imageMimeTypes);
});

test("remove() and ", () => {
  const creator = new CreatorTester();
  let allowRemove = false;
  creator.onCollectionItemDeletingCallback = (
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base
  ): boolean => {
    return allowRemove;
  };
  creator.JSON = {
    elements: [{ type: "checkbox", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const newItemAdorner = new ItemValueWrapperViewModel(creator, question, question.choices[1]);
  expect(question.choices).toHaveLength(3);
  newItemAdorner.remove(newItemAdorner);
  expect(question.choices).toHaveLength(3);
  allowRemove = true;
  newItemAdorner.remove(newItemAdorner);
  expect(question.choices).toHaveLength(2);
});
test("Do not select choices if a question in a matrix mode (popup in our case) ", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "checkbox", name: "q1", choices: [1, 2, 3] },
      { type: "checkbox", name: "q2", choices: [1, 2, 3] }
    ]
  };
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const q2 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[1];
  q2.inMatrixMode = true;
  const q1ItemAdorner = new ItemValueWrapperViewModel(creator, q1, q1.choices[1]);
  const q2ItemAdorner = new ItemValueWrapperViewModel(creator, q2, q2.choices[1]);
  q1ItemAdorner.select(q1ItemAdorner, undefined);
  expect(creator.selectedElementName).toBe("q1");
  q2ItemAdorner.select(q2ItemAdorner, undefined);
  expect(creator.selectedElementName).toBe("q1");
  q2.inMatrixMode = false;
  q2ItemAdorner.select(q2ItemAdorner, undefined);
  expect(creator.selectedElementName).toBe("q2");
});

test("Refuse and Don't know items", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "checkbox", name: "q1", choices: [1, 2, 3] }
    ]
  };
  const q1 = <QuestionCheckboxModel>creator.survey.getAllQuestions()[0];
  const refuseItemAdorner = new ItemValueWrapperViewModel(creator, q1, q1.refuseItem);
  const dontKnowItemAdorner = new ItemValueWrapperViewModel(creator, q1, q1.dontKnowItem);

  refuseItemAdorner.add(refuseItemAdorner);
  expect(q1.showRefuseItem).toBeTruthy();
  refuseItemAdorner.remove(refuseItemAdorner);
  expect(q1.showRefuseItem).toBeFalsy();

  dontKnowItemAdorner.add(dontKnowItemAdorner);
  expect(q1.showDontKnowItem).toBeTruthy();
  dontKnowItemAdorner.remove(dontKnowItemAdorner);
  expect(q1.showDontKnowItem).toBeFalsy();
});

test("ImageItemValueWrapperViewModel isUploading", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "imagepicker", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionImagePickerModel>creator.survey.getAllQuestions()[0];
  const imageItemAdorner = new ImageItemValueWrapperViewModel(creator, question, question.choices[0], undefined, {} as HTMLElement);
  let uploadCount = 0;
  creator.onUploadFile.add((s, o) => {
    expect(imageItemAdorner.isUploading).toBeTruthy();
    uploadCount++;
    o.callback({}, "success");
  });
  expect(imageItemAdorner.isUploading).toBeFalsy();
  expect(uploadCount).toBe(0);
  imageItemAdorner.uploadFiles([{}]);
  expect(imageItemAdorner.isUploading).toBeFalsy();
  expect(uploadCount).toBe(1);
});

test("QuestionImageAdornerViewModel isUploading", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "image", name: "q1" }]
  };
  const question = <QuestionImageModel>creator.survey.getAllQuestions()[0];
  const imageAdorner = new QuestionImageAdornerViewModel(creator, question, undefined as any);
  imageAdorner.rootElement = { getElementsByClassName: () => [{}] } as any;
  let uploadCount = 0;
  creator.onOpenFileChooser.add((s, o) => {
    o.callback([{}]);
  });
  creator.onUploadFile.add((s, o) => {
    expect(imageAdorner.isUploading).toBeTruthy();
    uploadCount++;
    o.callback({}, "success");
  });
  expect(imageAdorner.isUploading).toBeFalsy();
  expect(uploadCount).toBe(0);
  imageAdorner.chooseFile(imageAdorner);
  expect(imageAdorner.isUploading).toBeFalsy();
  expect(uploadCount).toBe(1);
});

test("QuestionImageAdornerViewModel filePresentationModel triggers creator.onUploadFile", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "image", name: "q1" }]
  };
  const question = <QuestionImageModel>creator.survey.getAllQuestions()[0];
  const imageAdorner = new QuestionImageAdornerViewModel(creator, question, undefined as any, { getElementsByClassName: () => [{}] } as any);

  let uploadCount = 0;
  creator.onUploadFile.add((s, o) => {
    uploadCount++;
    o.callback({}, "success");
  });
  expect(uploadCount).toBe(0);

  imageAdorner.filePresentationModel.loadFiles([<any>{}]);

  expect(uploadCount).toBe(1);
});

test("QuestionImageAdornerViewModel filePresentationModel creates own survey instance", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "image", name: "q1" }]
  };
  const question = <QuestionImageModel>creator.survey.getAllQuestions()[0];
  const imageAdorner = new QuestionImageAdornerViewModel(creator, question, undefined as any, { getElementsByClassName: () => [{}] } as any);
  const imageAdorner2 = new QuestionImageAdornerViewModel(creator, question, undefined as any, { getElementsByClassName: () => [{}] } as any);

  expect(imageAdorner.filePresentationModel.getSurvey() === question.getSurvey()).toBeFalsy();
  expect(imageAdorner2.filePresentationModel.getSurvey() === question.getSurvey()).toBeFalsy();
  expect(imageAdorner.filePresentationModel.getSurvey() === imageAdorner2.filePresentationModel.getSurvey()).toBeFalsy();
  expect((question.getSurvey() as SurveyModel).onUploadFiles.isEmpty).toBeTruthy();
});

test("LogoImageViewModel isUploading", () => {
  const creator = new CreatorTester();
  const logoImageAdorner = new LogoImageViewModel(creator, { getElementsByClassName: () => [{ files: [{}] }] } as any);
  let uploadCount = 0;
  creator.onOpenFileChooser.add((s, o) => {
    o.callback([{}]);
  });
  creator.onUploadFile.add((s, o) => {
    expect(logoImageAdorner.isUploading).toBeTruthy();
    uploadCount++;
    o.callback({}, "success");
  });
  expect(logoImageAdorner.isUploading).toBeFalsy();
  expect(uploadCount).toBe(0);
  logoImageAdorner.chooseFile(logoImageAdorner);
  expect(logoImageAdorner.isUploading).toBeFalsy();
  expect(uploadCount).toBe(1);
});

test("LogoImageViewModel isUploading", () => {
  const creator = new CreatorTester();
  const logoImageAdorner = new LogoImageViewModel(creator, { getElementsByClassName: () => [{ files: [{}] }] } as any);
  expect(logoImageAdorner.acceptedTypes).toBe(imageMimeTypes);
});

test("QuestionRatingAdornerViewModel allowAdd allowRemove on property readonly", () => {
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

  var eventFunction = (sender, options) => {
    if (options.property.name === "rateValues") {
      options.readOnly = true;
    }
  };

  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeTruthy();

  creator.onGetPropertyReadOnly.add((sender, options) => eventFunction(sender, options));

  expect(ratingAdorner.allowAdd).toBeFalsy();
  expect(ratingAdorner.allowRemove).toBeFalsy();

  eventFunction = (sender, options) => {
    if (options.property.name === "rateCount") {
      options.readOnly = true;
    }
  };

  expect(ratingAdorner.allowAdd).toBeFalsy();
  expect(ratingAdorner.allowRemove).toBeFalsy();

  eventFunction = (sender, options) => {
    if (options.property.name === "rateMax") {
      options.readOnly = true;
    }
  };

  expect(ratingAdorner.allowAdd).toBeFalsy();
  expect(ratingAdorner.allowRemove).toBeFalsy();

  question.autoGenerate = false;

  expect(ratingAdorner.allowAdd).toBeTruthy();
  expect(ratingAdorner.enableAdd).toBeTruthy();
});

test("calculateDragOverLocation", () => {
  let location = calculateDragOverLocation(150, 120, { x: 100, y: 100, width: 300, height: 100 });
  expect(location).toBe(DropIndicatorPosition.Left);
  // creatorSettings.dragDrop.allowDragToTheSameLine = false;
  location = calculateDragOverLocation(150, 120, { x: 100, y: 100, width: 300, height: 100 }, "top-bottom");
  expect(location).toBe(DropIndicatorPosition.Top);
  location = calculateDragOverLocation(350, 170, { x: 100, y: 100, width: 300, height: 100 }, "top-bottom");
  expect(location).toBe(DropIndicatorPosition.Bottom);
  // creatorSettings.dragDrop.allowDragToTheSameLine = true;
  location = calculateDragOverLocation(350, 170, { x: 100, y: 100, width: 300, height: 100 });
  expect(location).toBe(DropIndicatorPosition.Right);
});

test("ImageItemValueWrapperViewModel pass context to onOpenFileChooser event", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "imagepicker", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionImagePickerModel>creator.survey.getAllQuestions()[0];
  const rootElement = document.createElement("div");
  rootElement.innerHTML = "<input type='file' class='svc-choose-file-input' />";
  const imageItemAdorner = new ImageItemValueWrapperViewModel(creator, question, question.choices[0], undefined, rootElement);

  let context: any = undefined;
  creator.onOpenFileChooser.add((s, o) => {
    context = {
      element: o.element,
      item: o.item
    };
    o.callback([{}]);
  });
  creator.onUploadFile.add((s, o) => {
    o.callback({}, "success");
  });
  imageItemAdorner.chooseFile(imageItemAdorner);
  expect(context).toBeDefined();
  expect(context.element).toBe(question);
  expect(context.item).toBe(question.choices[0]);
});

test("ImageItemValueWrapperViewModel shouldn't override existing image if upload fails", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "imagepicker", name: "q1", choices: [1, 2, 3] }]
  };
  const question = <QuestionImagePickerModel>creator.survey.getAllQuestions()[0];
  const rootElement = document.createElement("div");
  rootElement.innerHTML = "<input type='file' class='svc-choose-file-input' />";
  const imageItemAdorner = new ImageItemValueWrapperViewModel(creator, question, question.choices[0], undefined, rootElement);

  const successFile = "image1.png";
  const errorFile = "image2.png";
  let isSuccess = true;
  creator.onOpenFileChooser.add((s, o) => {
    o.callback([{}]);
  });
  creator.onUploadFile.add((s, o) => {
    o.callback(isSuccess ? "success" : "error", isSuccess ? successFile : errorFile);
  });
  imageItemAdorner.chooseFile(imageItemAdorner);
  expect(question.choices[0].imageLink).toBe(successFile);
  isSuccess = false;
  imageItemAdorner.chooseFile(imageItemAdorner);
  expect(question.choices[0].imageLink).toBe(successFile);
});

test("QuestionImageAdornerViewModel onOpenFileChooser event is raised", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "image", name: "q1" }]
  };
  let log = "";
  let lastContext: any;
  creator.onOpenFileChooser.add((s, o) => {
    log += "->onOpenFileChooser";
    lastContext = o.context;
    o.callback([]);
  });
  const question = <QuestionImageModel>creator.survey.getAllQuestions()[0];
  const imageAdorner = new QuestionImageAdornerViewModel(creator, question, undefined as any, { getElementsByClassName: () => [{}] } as any);
  const filePresentationModel = imageAdorner.filePresentationModel;
  const fileQuestionAdornerSurvey = imageAdorner.filePresentationModel.getSurvey();

  expect(log).toBe("");
  fileQuestionAdornerSurvey.chooseFiles(document.createElement("input"), () => { }, { element: question, elementType: question.getType(), propertyName: "imageLink" });
  expect(log).toBe("->onOpenFileChooser");
  expect(lastContext.element).toEqual(question);
  expect(lastContext.elementType).toEqual("image");
  expect(lastContext.propertyName).toEqual("imageLink");
});

test("QuestionImageAdornerViewModel updated on locale changed", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    "locale": "default",
    "title": {
      "default": "Default Locale",
      "fr": "French"
    },
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "image",
            "name": "question1",
            "imageLink": {
              "fr": "im2fr"
            },
          }
        ]
      }
    ]
  };
  const question = <QuestionImageModel>creator.survey.getAllQuestions()[0];
  const imageAdorner = new QuestionImageAdornerViewModel(creator, question, undefined as any, { getElementsByClassName: () => [{}] } as any);

  expect(imageAdorner.isEmptyImageLink).toBeTruthy();

  creator.survey.locale = "fr";
  expect(imageAdorner.isEmptyImageLink).toBeFalsy();
});
