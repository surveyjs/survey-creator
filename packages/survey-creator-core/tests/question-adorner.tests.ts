import { QuestionAdornerViewModel } from "../src/components/question";
import { Action, ComponentCollection, PopupDropdownViewModel, QuestionMatrixDropdownModel, QuestionPanelDynamicModel, QuestionRadiogroupModel, QuestionTextModel, settings, SurveyElement, SurveyModel, settings as surveySettings } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { PageAdorner } from "../src/components/page";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { QuestionToolboxItem } from "../src/toolbox";
import { DropIndicatorPosition } from "../src/drag-drop-enums";
import { vi } from "vitest";
export * from "../src/localization/german";

test("Collapse action updates when the adorner is re-attached after expandCollapseButtonVisibility changes", (): any => {
  const creator = new CreatorTester();
  creator.expandCollapseButtonVisibility = "never";
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const q1 = creator.survey.getQuestionByName("q1");
  const adorner = new QuestionAdornerViewModel(creator, q1, <any>undefined);
  // Force the (lazily built, cached) top action container to be created while the button is off.
  adorner.topActionContainer;
  expect(adorner.getActionById("collapse")?.visible).toBeFalsy();

  // The button becomes visible and the same adorner model is reused for another element - as a
  // React component now is, because element ids are deterministic across a JSON reload.
  creator.expandCollapseButtonVisibility = "onhover";
  creator.JSON = { elements: [{ type: "text", name: "q2" }] };
  const q2 = creator.survey.getQuestionByName("q2");
  adorner.attachToUI(q2);

  expect(adorner.getActionById("collapse").visible).toBe(true);
});
test("Check required action", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const requiredAction = questionAdorner.actionContainer.getActionById("isrequired");
  expect(requiredAction.active).toBe(false);
  question.isRequired = true;
  expect(requiredAction.active).toBe(true);
  question.isRequired = false;
  expect(requiredAction.active).toBe(false);
  expect(requiredAction.title).toBe("Required");

  const requiredActionInPopup = requiredAction.innerItem;
  expect(requiredActionInPopup instanceof Action).toBeTruthy();
  expect(requiredActionInPopup.title).toBe("Mark as required");
  question.isRequired = true;
  expect(requiredActionInPopup.title).toBe("Remove the required mark");
});

test("Check question adorners popups display mode", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  let questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  let convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  let convertInputTypeAction = questionAdorner.actionContainer.getActionById("convertInputType");
  expect(convertInputTypeAction.popupModel.displayMode).toBe("popup");
  expect(convertToAction.popupModel.displayMode).toBe("popup");
  creator.isTouch = true;
  questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  convertInputTypeAction = questionAdorner.actionContainer.getActionById("convertInputType");
  expect(convertInputTypeAction.popupModel.displayMode).toBe("overlay");
  expect(convertToAction.popupModel.displayMode).toBe("overlay");
});

test("Check rating question input type list", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "rating", name: "q1" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  let questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  let convertInputTypeAction = questionAdorner.actionContainer.getActionById("convertInputType");
  const popup = convertInputTypeAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;

  expect(list.actions.map(i => i.id)).toEqual(["labels", "stars", "smileys"]);
  surveySettings.animationEnabled = true;
});

test("Check question converter with removed subitems", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)

  const ratingItem = creator.toolbox.getItemByName("rating");

  // Remove Default Subitems
  ratingItem.removeSubitem("stars");

  ratingItem.title = "Rating Scale";

  creator.JSON = {
    elements: [
      { type: "rating", name: "q1", rateType: "stars" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  let questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  let convertInputTypeAction = questionAdorner.actionContainer.getActionById("convertInputType");
  expect(convertInputTypeAction.title).toBe("Stars");
  question.rateType = "smileys";
  expect(convertInputTypeAction.title).toBe("Smileys");
  question.rateType = "stars";
  expect(convertInputTypeAction.title).toBe("Stars");

  surveySettings.animationEnabled = true;
});
test("Check question converter with cleard subitems, Bug#7436", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)

  const textItem = creator.toolbox.getItemByName("text");

  // Remove Default Subitems
  textItem.clearSubitems();

  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertInputTypeAction = questionAdorner.actionContainer.getActionById("convertInputType");
  expect(convertInputTypeAction).toBeFalsy();

  surveySettings.animationEnabled = true;
});

test("Check question adorners icons", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  let questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  let convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  let convertInputTypeAction = questionAdorner.actionContainer.getActionById("convertInputType");
  expect(convertToAction.innerItem.iconName).toBe("icon-chevron_16x16");
  expect(convertInputTypeAction.innerItem.iconName).toBe("icon-chevron_16x16");
});

test("Check question adorners location", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
    ]
  };
  creator.onElementGetActions.add(function (editor, options) {
    if (options.element.isPage) return;
    const objToAdd = options.element;
    options.actions.unshift({
      id: "addtosharedrepo"
    });
  });

  const question = creator.survey.getQuestionByName("q1");
  let questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  expect(questionAdorner.actionContainer.getActionById("addtosharedrepo").innerItem.location).toBe("start");
  expect(questionAdorner.actionContainer.getActionById("convertTo").innerItem.location).toBe("start");
  expect(questionAdorner.actionContainer.getActionById("convertInputType").innerItem.location).toBe("start");
  expect(questionAdorner.actionContainer.getActionById("isrequired").innerItem.location).toBe("end");
  expect(questionAdorner.actionContainer.getActionById("delete").innerItem.location).toBe("end");
  expect(questionAdorner.actionContainer.getActionById("duplicate").innerItem.location).toBe("end");
});

test("Check question adorners expand-collapse - save state", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  let questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  let action = questionAdorner.topActionContainer.getActionById("collapse");
  expect(questionAdorner.collapsed).toBeFalsy();
  expect(action.iconName).toBe("icon-collapsepanel-16x16");
  action.action();
  expect(questionAdorner.collapsed).toBeTruthy();
  expect(action.iconName).toBe("icon-expandpanel-16x16");

  let questionAdorner2 = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  let action2 = questionAdorner2.topActionContainer.getActionById("collapse");
  expect(questionAdorner2.collapsed).toBeTruthy();
  action2.action();
  expect(questionAdorner2.collapsed).toBeFalsy();

  let questionAdorner3 = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  expect(questionAdorner3.collapsed).toBeFalsy();
});

test("Check question adorners expand-collapse - restore state after add", (): any => {
  const creator = new CreatorTester();
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  let pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.addNewQuestion(pageModel, null);

  let question2 = creator.survey.getQuestionByName("question1");
  let questionAdorner = new QuestionAdornerViewModel(
    creator,
    question2,
    <any>undefined
  );

  let action = questionAdorner.topActionContainer.getActionById("collapse");
  expect(questionAdorner.collapsed).toBeFalsy();
  action.action();
  expect(questionAdorner.collapsed).toBeTruthy();

  expect(creator.survey.getAllQuestions().length).toBe(1);
  question2.delete();
  expect(creator.survey.getAllQuestions().length).toBe(0);

  pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.addNewQuestion(pageModel, null);
  questionAdorner = new QuestionAdornerViewModel(
    creator,
    question2,
    <any>undefined
  );
  expect(questionAdorner.collapsed).toBeFalsy();

  creator.JSON = {
    elements: [
      { type: "text", name: "question1" },
    ]
  };
  question2 = creator.survey.getQuestionByName("question1");
  questionAdorner = new QuestionAdornerViewModel(
    creator,
    question2,
    <any>undefined
  );

  action = questionAdorner.topActionContainer.getActionById("collapse");
  expect(questionAdorner.collapsed).toBeFalsy();
  action.action();
  expect(questionAdorner.collapsed).toBeTruthy();

  expect(creator.survey.getAllQuestions().length).toBe(1);
  question2.delete();
  expect(creator.survey.getAllQuestions().length).toBe(0);

  pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.addNewQuestion(pageModel, null);
  questionAdorner = new QuestionAdornerViewModel(
    creator,
    question2,
    <any>undefined
  );
  expect(questionAdorner.collapsed).toBeFalsy();
});
test("Check question adorners expand-collapse - onInitElementStateCallback", (): any => {
  const creator = new CreatorTester();
  const designerPlugin = <TabDesignerPlugin>(
    creator.getPlugin("designer")
  );
  designerPlugin.designerStateManager.onInitElementStateCallback = (element: SurveyElement, state: any): void => {
    state.collapsed = element.name === "question1";
  };
  let pageModel = new PageAdorner(creator, designerPlugin.model.newPage);
  pageModel.addNewQuestion(pageModel, null);

  let question1 = creator.survey.getQuestionByName("question1");
  let questionAdorner = new QuestionAdornerViewModel(
    creator,
    question1,
    <any>undefined
  );

  expect(questionAdorner.collapsed).toBeTruthy();
});

function getQuestionConverterList(creator: CreatorTester, questionName: string) {
  const question = creator.survey.getQuestionByName(questionName);
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  const popup = convertToAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  return list;
}

test("Check question converter no subitems", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  creator.toolbox.showSubitems = false;
  creator.JSON = {
    elements: [
      { type: "text", inputType: "email", name: "q1" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  const popup = convertToAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  expect((list.getActionById("text").items || []).length).toBe(0);

  const convertInputType = questionAdorner.actionContainer.getActionById("convertInputType");
  const popupInputType = convertInputType.popupModel;
  const popupInputTypeViewModel = new PopupDropdownViewModel(popupInputType); // need for popupModel.onShow
  popupInputType.show();
  const listInputType = popupInputType.contentComponentData.model;
  expect(listInputType.actions.every(a => !(a instanceof QuestionToolboxItem))).toBeTruthy();

  surveySettings.animationEnabled = true;
});

test("Check question converter selected item for subitems", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", inputType: "email", name: "q1" }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  const popup = convertToAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("text");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.show();
  const listSubtype = popupSubtype.contentComponentData.model;
  expect(listSubtype.selectedItem.id).toBe("email");

  surveySettings.animationEnabled = true;
});

test("Check question converter selected item for customized subitems (types)", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  //customize matrix item
  const MatrixItem = creator.toolbox.getItemByName("matrix") as QuestionToolboxItem;
  const MatrixDropdownItem = creator.toolbox.getItemByName("matrixdropdown");
  const MatrixDynamicItem = creator.toolbox.getItemByName("matrixdynamic");
  MatrixItem.title = "Matrix";
  MatrixItem.addSubitem(<any>{ name: "matrixdefault", json: { type: "matrix" }, title: "Single-Select" });
  MatrixItem.addSubitem(MatrixDropdownItem);
  MatrixItem.addSubitem(MatrixDynamicItem);
  creator.toolbox.removeItem("matrixdropdown");
  creator.toolbox.removeItem("matrixdynamic");

  creator.JSON = {
    elements: [
      { type: "matrixdropdown", name: "q1" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  const popup = convertToAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("matrix");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.show();
  const listSubtype = popupSubtype.contentComponentData.model;
  expect(listSubtype.selectedItem.id).toBe("matrixdropdown");

  surveySettings.animationEnabled = true;
});

test("Check question converter selected item for customized subitems (json)", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const booleans = creator.toolbox.getItemByName("boolean") as QuestionToolboxItem;
  booleans.addSubitem(<any>{ name: "booleandefault", json: { type: "boolean" }, title: "Slider" });
  booleans.addSubitem(<any>{ name: "boolradio", json: { type: "boolean", displayMode: "radio" }, title: "Radio" });
  booleans.addSubitem(<any>{ name: "boolcheckbox", json: { type: "boolean", displayMode: "checkbox" }, title: "Checkbox" });

  creator.JSON = {
    elements: [
      { type: "boolean", name: "q1", displayMode: "radio" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  const popup = convertToAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("boolean");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.show();
  const listSubtype = popupSubtype.contentComponentData.model;
  expect(listSubtype.selectedItem.id).toBe("boolradio");

  surveySettings.animationEnabled = true;
});

test("Check question converter selected item for single subitems (json)", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  const longTextItem = creator.toolbox.getItemByName("comment");
  longTextItem.addSubitem({
    name: "limitedLongText",
    title: "Limited to 280 characters",
    json: {
      type: "comment",
      maxLength: 280
    }
  });

  creator.JSON = {
    elements: [
      { type: "comment", name: "q1", maxLength: 280 },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  const popup = convertToAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("comment");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.show();
  const listSubtype = popupSubtype.contentComponentData.model;
  expect(listSubtype.selectedItem.id).toBe("limitedLongText");

  question.maxLength = 100;
  const questionAdorner2 = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction2 = questionAdorner2.actionContainer.getActionById("convertTo");
  const popup2 = convertToAction2.popupModel;
  const popupViewModel2 = new PopupDropdownViewModel(popup2); // need for popupModel.onShow
  popup2.show();
  const list2 = popup2.contentComponentData.model;
  expect(list2.selectedItem.id).toBe("comment");

  const popupSubtype2 = list2.selectedItem.popupModel;
  const popupViewModelSubtype2 = new PopupDropdownViewModel(popupSubtype2); // need for popupModel.onShow
  popupSubtype2.show();
  const listSubtype2 = popupSubtype2.contentComponentData.model;
  expect(listSubtype2.actions.length).toBe(2);
  expect(listSubtype2.selectedItem.title).toBe("Long Text");
  expect(listSubtype2.selectedItem.id).toBe("comment-default");
  expect(listSubtype2.selectedItem.component).toBeFalsy();
  expect(listSubtype2.selectedItem.iconName).toBeFalsy();
  expect(listSubtype2.selectedItem.markerIconName).toBeFalsy();
  expect(listSubtype2.selectedItem.items?.length).toBeFalsy();

  surveySettings.animationEnabled = true;
});

test("Check question converter selected item for customized rating subitems (json)", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const item = creator.toolbox.getItemByName("rating") as QuestionToolboxItem;
  item.clearSubitems();
  item.addSubitem(<any>{
    name: "stars-3",
    title: "3 stars Scale",
    json: {
      type: "rating",
      rateType: "stars",
      rateCount: 3,
      rateMin: 0,
      rateMax: 2,
    },
  });
  item.addSubitem(<any>{
    name: "stars-5",
    title: "5 stars Scale",
    json: {
      type: "rating",
      rateType: "stars",
      title: "5-stars",
      rateMin: 0,
      rateMax: 4,
    },
  });

  creator.JSON = {
    elements: [
      {
        type: "rating", name: "q1", "rateType": "stars", title: "5-stars",
        "rateMin": 0,
        "rateMax": 4,
      },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  const popup = convertToAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("rating");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.show();
  const listSubtype = popupSubtype.contentComponentData.model;
  expect(listSubtype.selectedItem.id).toBe("stars-5");

  surveySettings.animationEnabled = true;
});

test("Check question converter - convert to 5 stars", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const item = creator.toolbox.getItemByName("rating") as QuestionToolboxItem;
  item.clearSubitems();
  item.addSubitem(<any>{
    name: "stars-3",
    title: "3 stars Scale",
    json: {
      type: "rating",
      rateType: "stars",
      rateCount: 3,
      rateMin: 0,
      rateMax: 2,
    },
  });
  item.addSubitem(<any>{
    name: "stars-5",
    title: "5 stars Scale",
    json: {
      type: "rating",
      rateType: "stars",
      rateMin: 0,
      rateMax: 4,
    },
  });

  creator.JSON = {
    elements: [
      {
        type: "rating", name: "q1", "rateType": "stars",
        "rateMin": 0,
        "rateMax": 2,
      },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  const popup = convertToAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("rating");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.show();
  const listSubtype = popupSubtype.contentComponentData.model;
  expect(listSubtype.selectedItem.id).toBe("stars-3");

  const toConvert = listSubtype.actions[2];
  toConvert.action();
  const questionConverted2 = creator.survey.getQuestionByName("q1");
  expect(questionConverted2.rateType).toBe("stars");
  expect(questionConverted2.rateCount).toBe(5);

  surveySettings.animationEnabled = true;
});

test("Check question converter - convert to 3 stars", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const item = creator.toolbox.getItemByName("rating") as QuestionToolboxItem;
  item.clearSubitems();
  item.addSubitem(<any>{
    name: "stars-3",
    title: "3 stars Scale",
    json: {
      type: "rating",
      rateType: "stars",
      rateCount: 3,
      rateMin: 0,
      rateMax: 2,
    },
  });
  item.addSubitem(<any>{
    name: "stars-5",
    title: "5 stars Scale",
    json: {
      type: "rating",
      rateType: "stars",
      rateMin: 0,
      rateMax: 4,
    },
  });

  creator.JSON = {
    elements: [
      {
        type: "rating", name: "q1", "rateType": "stars",
        "rateCount": 4,
        "rateMax": 4,
      },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  const popup = convertToAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("rating");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.show();
  const listSubtype = popupSubtype.contentComponentData.model;
  expect(listSubtype.selectedItem.id).toBe("rating-default");

  const toConvert = listSubtype.actions[1];
  toConvert.action();
  const questionConverted2 = creator.survey.getQuestionByName("q1");
  expect(questionConverted2.rateType).toBe("stars");
  expect(questionConverted2.rateCount).toBe(3);

  surveySettings.animationEnabled = true;
});

test("Check question converter with subitems (json)", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const booleans = creator.toolbox.getItemByName("boolean") as QuestionToolboxItem;
  booleans.addSubitem(<any>{ name: "booleansegmented", json: { type: "boolean" }, title: "Slider" });
  booleans.addSubitem(<any>{ name: "boolradio", json: { type: "boolean", displayMode: "radio" }, title: "Radio" });
  booleans.addSubitem(<any>{ name: "boolcheckbox", json: { type: "boolean", displayMode: "checkbox" }, title: "Checkbox" });

  creator.JSON = {
    elements: [
      { type: "boolean", name: "q1", displayMode: "radio" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const convertToAction = questionAdorner.actionContainer.getActionById("convertTo");
  const popup = convertToAction.popupModel;
  const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
  popup.show();
  const list = popup.contentComponentData.model;
  const q1 = creator.survey.getQuestionByName("q1");
  expect(q1.displayMode).toBe("radio");
  expect(q1.renderAs).toBe("default");

  const booleanAction = list.getActionById("boolean");
  const booleanCheckAction = booleanAction.items[2];
  booleanCheckAction.action();
  const questionConverted = creator.survey.getQuestionByName("q1");
  expect(questionConverted.displayMode).toBe("checkbox");
  expect(questionConverted.renderAs).toBe("default");

  popup.show();
  const booleanCheckAction2 = booleanAction.items[0];
  booleanCheckAction2.action();
  const questionConverted2 = creator.survey.getQuestionByName("q1");
  expect(questionConverted2.displayMode).toBe("segmented");
  expect(questionConverted2.renderAs).toBe("default");

  surveySettings.animationEnabled = true;
});

test("Check question converter with subitems for input type", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const texts = creator.toolbox.getItemByName("text") as QuestionToolboxItem;
  texts.addSubitem({
    name: "postalCode",
    title: "Postal Code",
    json: {
      type: "text",
      maxLength: 7,
    }
  });

  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
    ]
  };

  function inputTypeList(question: SurveyElement) {
    const questionAdorner = new QuestionAdornerViewModel(
      creator,
      question,
      <any>undefined
    );
    const convertToAction = questionAdorner.actionContainer.getActionById("convertInputType");
    const popup = convertToAction.popupModel;
    const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
    popup.show();
    return popup.contentComponentData.model;
  }

  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  let list = inputTypeList(question);

  const newSubTypeAction = list.getActionById("postalCode");
  newSubTypeAction.action(newSubTypeAction);
  const questionConverted = creator.survey.getQuestionByName("q1");
  expect(questionConverted.inputType).toBe("text");
  expect(questionConverted.maxLength).toBe(7);

  list = inputTypeList(questionConverted);
  expect(list.selectedItem.id).toBe("postalCode");

  surveySettings.animationEnabled = true;
});

test("Check question converter with subitems for input type, bug #5884", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  ComponentCollection.Instance.add({
    name: "numericentry",
    iconName: "icon-text",
    title: "Numeric Entry with Min/Max",
    defaultQuestionTitle: "Numeric Entry with Min/Max",
    questionJSON: {
      "type": "text",
      "maskType": "numeric",
      "maskSettings": {
        "precision": 3,
        "min": 0,
        "max": 5
      }
    }
  });

  const singleLineInputItem = creator.toolbox.getItemByName("text");

  singleLineInputItem.addSubitem({
    name: "numericEntry",
    title: "Numeric Entry with Min/Max",
    json: {
      "type": "numericentry",
      "maskType": "numeric",
      "maskSettings": {
        "precision": 3,
        "min": 0,
        "max": 5
      }
    }
  });

  creator.JSON = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "numericentry",
            "name": "question1"
          }
        ]
      }
    ]
  };

  function inputTypeList(question: SurveyElement) {
    const questionAdorner = new QuestionAdornerViewModel(
      creator,
      question,
      <any>undefined
    );
    const convertToAction = questionAdorner.actionContainer.getActionById("convertInputType");
    const popup = convertToAction.popupModel;
    const popupViewModel = new PopupDropdownViewModel(popup); // need for popupModel.onShow
    popup.show();
    return popup.contentComponentData.model;
  }

  const question = creator.survey.getQuestionByName("question1");
  creator.selectElement(question);
  let list = inputTypeList(question);

  const newSubTypeAction = list.getActionById("numericEntry");
  newSubTypeAction.action(newSubTypeAction);
  const questionConverted = creator.survey.getQuestionByName("question1");
  expect(questionConverted.getElement().maskType).toBe("numeric");
  expect(questionConverted.getElement().maskSettings).toBeTruthy();

  list = inputTypeList(questionConverted);
  expect(list.selectedItem.id).toBe("numericEntry");

  surveySettings.animationEnabled = true;
});

test("Check question converter with subitems (types)", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const booleans = creator.toolbox.getItemByName("boolean") as QuestionToolboxItem;
  booleans.addSubitem(<any>{ name: "booleandefault", json: { type: "boolean" }, title: "Slider" });
  booleans.addSubitem(<any>{ name: "boolradio", json: { type: "boolean", displayMode: "radio" }, title: "Radio" });
  booleans.addSubitem(<any>{ name: "radio", json: { type: "radiogroup" }, title: "Radiogroup" });

  creator.JSON = {
    elements: [
      { type: "boolean", name: "q1", displayMode: "radio" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  getQuestionConverterList(creator, "q1").getActionById("boolean").items[2].action();
  const questionConverted = creator.survey.getQuestionByName("q1") as QuestionRadiogroupModel;
  expect(questionConverted.getType()).toBe("radiogroup");
  expect(questionConverted.choices.length).toBe(3);

  questionConverted.choices[0].text = "abc";
  expect(creator.survey.getQuestionByName("q1").choices[0].text).toBe("abc");

  getQuestionConverterList(creator, "q1").getActionById("dropdown").action();
  expect(creator.survey.getQuestionByName("q1").choices[0].text).toBe("abc");
  expect(creator.survey.getQuestionByName("q1").getType()).toBe("dropdown");

  getQuestionConverterList(creator, "q1").getActionById("boolean").items[2].action();
  expect(creator.survey.getQuestionByName("q1").choices[0].text).toBe("abc");
  expect(creator.survey.getQuestionByName("q1").getType()).toBe("radiogroup");

  surveySettings.animationEnabled = true;
});

test("Check question converter on subitem search", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  const list = getQuestionConverterList(creator, "q1");
  list.filterString = "Email";
  const filteredActions = list.renderedActions.filter(item => list.isItemVisible(item));
  expect(filteredActions).toHaveLength(1);
  filteredActions[0].action();
  const questionConverted = creator.survey.getQuestionByName("q1") as QuestionTextModel;
  expect(questionConverted.inputType).toBe("email");

  surveySettings.animationEnabled = true;
});

test("Check question converter with single subitem (json)", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  const longTextItem = creator.toolbox.getItemByName("comment");
  longTextItem.addSubitem({
    name: "limitedLongText",
    title: "Limited to 280 characters",
    json: {
      type: "comment",
      maxLength: 280
    }
  });

  creator.JSON = {
    elements: [
      { type: "boolean", name: "q1", displayMode: "radio" },
    ]
  };

  getQuestionConverterList(creator, "q1").getActionById("comment").action();
  expect(creator.survey.getQuestionByName("q1").maxLength).toBe(-1);

  getQuestionConverterList(creator, "q1").getActionById("comment").items[1].action();
  expect(creator.survey.getQuestionByName("q1").maxLength).toBe(280);

  getQuestionConverterList(creator, "q1").getActionById("comment").action();
  expect(creator.survey.getQuestionByName("q1").maxLength).toBe(-1);

  getQuestionConverterList(creator, "q1").getActionById("radiogroup").action();
  expect(creator.survey.getQuestionByName("q1").maxLength).toBe(undefined);

  getQuestionConverterList(creator, "q1").getActionById("comment").items[1].action();
  expect(creator.survey.getQuestionByName("q1").maxLength).toBe(280);

  surveySettings.animationEnabled = true;
});

test("Check question converter with subitems (rating, json)", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)

  const ratingItem = creator.toolbox.getItemByName("rating");

  // Remove Default Subitems
  ratingItem.removeSubitem("labels");
  ratingItem.removeSubitem("stars");
  ratingItem.removeSubitem("smileys");

  ratingItem.title = "Rating Scale";

  ratingItem.addSubitem({
    name: "ratingstars",
    json: {
      type: "rating",
      rateType: "stars"
    },
    title: "Rating Stars"
  });

  ratingItem.addSubitem({
    name: "csat", json:
    {
      type: "rating",
      "rateType": "smileys",
      "rateCount": 5,
      "title": "How satisfied?",
      "minRateDescription": "Very unsatisfied",
      "maxRateDescription": "Very satisfied"
    },
    title: "Customer Satisfaction Score"
  });

  ratingItem.addSubitem({
    name: "nps", json:
    {
      type: "rating",
      "rateType": "labels",
      "title": "How likely?",
      "rateCount": 11,
      "rateMin": 0,
      "rateMax": 10
    },
    title: "Net Promoter Score"
  });

  creator.JSON = {
    elements: [
      { type: "rating", name: "q1" },
    ]
  };
  expect(creator.survey.getQuestionByName("q1").rateCount).toBe(5);
  getQuestionConverterList(creator, "q1").getActionById("rating").items[2].action();
  expect(creator.survey.getQuestionByName("q1").rateCount).toBe(5);
  expect(creator.survey.getQuestionByName("q1").minRateDescription).toBe("Very unsatisfied");
  expect(creator.survey.getQuestionByName("q1").maxRateDescription).toBe("Very satisfied");
  expect(creator.survey.getQuestionByName("q1").title).toBe("How satisfied?");
  getQuestionConverterList(creator, "q1").getActionById("rating").items[3].action();
  expect(creator.survey.getQuestionByName("q1").rateCount).toBe(11);
  expect(creator.survey.getQuestionByName("q1").minRateDescription).toBeFalsy();
  expect(creator.survey.getQuestionByName("q1").maxRateDescription).toBeFalsy();
  expect(creator.survey.getQuestionByName("q1").title).toBe("How likely?");
  getQuestionConverterList(creator, "q1").getActionById("rating").items[2].action();
  expect(creator.survey.getQuestionByName("q1").rateCount).toBe(5);
  expect(creator.survey.getQuestionByName("q1").minRateDescription).toBe("Very unsatisfied");
  expect(creator.survey.getQuestionByName("q1").maxRateDescription).toBe("Very satisfied");
  expect(creator.survey.getQuestionByName("q1").title).toBe("How satisfied?");
  surveySettings.animationEnabled = true;
});

test("Check question adorner expand/collapse animation options", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1", description: "description" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const animationOptions = questionAdorner["getExpandCollapseAnimationOptions"]();

  settings.animationEnabled = true;
  questionAdorner.enableOnElementRerenderedEvent();
  expect(animationOptions.isAnimationEnabled()).toBeTruthy();
  questionAdorner.blockAnimations();
  expect(animationOptions.isAnimationEnabled()).toBeFalsy();
  questionAdorner.releaseAnimations();
  expect(animationOptions.isAnimationEnabled()).toBeTruthy();
  settings.animationEnabled = false;
  expect(animationOptions.isAnimationEnabled()).toBeFalsy();

  const rootElement = document.createElement("div");
  const adornerContentElement = document.createElement("div");
  adornerContentElement.className = "svc-question__content";
  const questionRootElement = document.createElement("div");
  questionRootElement.className = question.getRootCss();
  const questionContentElement = document.createElement("div");
  questionContentElement.className = question.cssClasses.content;
  const dragAreaElement = document.createElement("div");
  dragAreaElement.className = "svc-question__drag-area";
  const descriptionElement = document.createElement("div");
  descriptionElement.className = question.cssDescription;
  const actionsElement = document.createElement("div");
  actionsElement.className = "svc-question__content-actions";

  questionRootElement.appendChild(questionContentElement);
  questionRootElement.appendChild(descriptionElement);
  adornerContentElement.appendChild(dragAreaElement);
  adornerContentElement.appendChild(questionRootElement);
  adornerContentElement.appendChild(actionsElement);
  rootElement.appendChild(adornerContentElement);

  questionAdorner.rootElement = rootElement;

  expect(animationOptions.getAnimatedElement()).toBe(questionContentElement);

  expect(questionAdorner["getInnerAnimatedElements"]()).toEqual([descriptionElement, actionsElement, rootElement]);

  const enterClass = "svc-question--enter";
  const enterOptions = animationOptions.getEnterOptions && animationOptions.getEnterOptions();
  expect(enterOptions?.cssClass).toBe(enterClass);
  enterOptions?.onBeforeRunAnimation && enterOptions?.onBeforeRunAnimation(questionContentElement);
  expect(rootElement.classList.contains(enterClass)).toBeTruthy();
  expect(actionsElement.classList.contains(enterClass)).toBeTruthy();
  expect(descriptionElement.classList.contains(enterClass)).toBeTruthy();
  expect(adornerContentElement.classList.contains(enterClass)).toBeFalsy();
  expect(dragAreaElement.classList.contains(enterClass)).toBeFalsy();
  expect(questionRootElement.classList.contains(enterClass)).toBeFalsy();
  expect(questionContentElement.classList.contains(enterClass)).toBeFalsy();

  expect(rootElement.style.getPropertyValue("--animation-height-to")).toBe("0px");
  expect(actionsElement.style.getPropertyValue("--animation-height-to")).toBe("0px");
  expect(descriptionElement.style.getPropertyValue("--animation-height-to")).toBe("0px");

  enterOptions?.onAfterRunAnimation && enterOptions?.onAfterRunAnimation(questionContentElement);
  expect(rootElement.classList.contains(enterClass)).toBeFalsy();
  expect(actionsElement.classList.contains(enterClass)).toBeFalsy();
  expect(descriptionElement.classList.contains(enterClass)).toBeFalsy();
  expect(rootElement.style.getPropertyValue("--animation-height-to")).toBe("");
  expect(actionsElement.style.getPropertyValue("--animation-height-to")).toBe("");
  expect(descriptionElement.style.getPropertyValue("--animation-height-to")).toBe("");

  const leaveClass = "svc-question--leave";
  const leaveOptions = animationOptions.getLeaveOptions && animationOptions.getLeaveOptions();
  expect(leaveOptions?.cssClass).toBe(leaveClass);
  leaveOptions?.onBeforeRunAnimation && leaveOptions?.onBeforeRunAnimation(questionContentElement);
  expect(rootElement.classList.contains(leaveClass)).toBeTruthy();
  expect(actionsElement.classList.contains(leaveClass)).toBeTruthy();
  expect(descriptionElement.classList.contains(leaveClass)).toBeTruthy();
  expect(adornerContentElement.classList.contains(leaveClass)).toBeFalsy();
  expect(dragAreaElement.classList.contains(leaveClass)).toBeFalsy();
  expect(questionRootElement.classList.contains(leaveClass)).toBeFalsy();
  expect(questionContentElement.classList.contains(leaveClass)).toBeFalsy();

  expect(rootElement.style.getPropertyValue("--animation-height-to")).toBe("0px");
  expect(actionsElement.style.getPropertyValue("--animation-height-to")).toBe("0px");
  expect(descriptionElement.style.getPropertyValue("--animation-height-to")).toBe("0px");

  leaveOptions?.onAfterRunAnimation && leaveOptions?.onAfterRunAnimation(questionContentElement);
  expect(rootElement.classList.contains(leaveClass)).toBeFalsy();
  expect(actionsElement.classList.contains(leaveClass)).toBeFalsy();
  expect(descriptionElement.classList.contains(leaveClass)).toBeFalsy();
  expect(rootElement.style.getPropertyValue("--animation-height-to")).toBe("");
  expect(actionsElement.style.getPropertyValue("--animation-height-to")).toBe("");
  expect(descriptionElement.style.getPropertyValue("--animation-height-to")).toBe("");
});

test("Check question getAnimatedElement methods - title location left", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1", description: "description", titleLocation: "left" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );
  const animationOptions = questionAdorner["getExpandCollapseAnimationOptions"]();
  const rootElement = document.createElement("div");
  const adornerContentElement = document.createElement("div");
  adornerContentElement.className = "svc-question__content";
  const questionRootElement = document.createElement("div");
  questionRootElement.className = question.getRootCss();
  const questionContentElement = document.createElement("div");
  questionContentElement.className = question.cssClasses.content;
  const dragAreaElement = document.createElement("div");
  dragAreaElement.className = "svc-question__drag-area";
  const descriptionElement = document.createElement("div");
  descriptionElement.className = question.cssDescription;
  const actionsElement = document.createElement("div");
  actionsElement.className = "svc-question__content-actions";
  questionRootElement.appendChild(questionContentElement);
  questionRootElement.appendChild(descriptionElement);
  adornerContentElement.appendChild(dragAreaElement);
  adornerContentElement.appendChild(questionRootElement);
  adornerContentElement.appendChild(actionsElement);
  rootElement.appendChild(adornerContentElement);
  questionAdorner.rootElement = rootElement;

  expect(questionAdorner["getInnerAnimatedElements"]()).toEqual([actionsElement, rootElement]);
  expect(animationOptions.getAnimatedElement()).toBe(questionRootElement);
});

test("Check panel getAnimatedElement methods", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "panel", name: "p1", description: "description" },
    ]
  };
  const panel = creator.survey.getPanelByName("p1");
  creator.selectElement(panel);
  const panelAdorner = new QuestionAdornerViewModel(
    creator,
    panel,
    <any>undefined
  );
  const animationOptions = panelAdorner["getExpandCollapseAnimationOptions"]();
  const rootElement = document.createElement("div");
  const adornerContentElement = document.createElement("div");
  adornerContentElement.className = "svc-question__content";
  const panelRootElement = document.createElement("div");
  panelRootElement.className = panel.getContainerCss();
  const panelContentElement = document.createElement("div");
  panelContentElement.className = panel.cssClasses.panel.content;
  const dragAreaElement = document.createElement("div");
  dragAreaElement.className = "svc-question__drag-area";
  const descriptionElement = document.createElement("div");
  descriptionElement.className = panel.cssDescription;
  const actionsElement = document.createElement("div");
  actionsElement.className = "svc-question__content-actions";
  panelRootElement.appendChild(panelContentElement);
  panelRootElement.appendChild(descriptionElement);
  adornerContentElement.appendChild(dragAreaElement);
  adornerContentElement.appendChild(panelRootElement);
  adornerContentElement.appendChild(actionsElement);
  rootElement.appendChild(adornerContentElement);
  panelAdorner.rootElement = rootElement;

  expect(panelAdorner["getInnerAnimatedElements"]()).toEqual([descriptionElement, actionsElement, rootElement]);
  expect(animationOptions.getAnimatedElement()).toBe(panelContentElement);
});

test("Don't reset collapased state for moved question", () => {
  const creator = new CreatorTester();
  creator.expandCollapseButtonVisibility = "onhover";
  creator.JSON = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [{ "type": "text", "name": "question1" }]
      },
      {
        "name": "page2",
        "elements": [{ "type": "text", "name": "question2" }]
      },
    ]
  };
  const page1 = creator.survey.pages[0];
  const page2 = creator.survey.pages[1];
  let pageAdorner = new PageAdorner(creator, page1);
  creator.collapseAllPagesOnDragStart(page1);
  expect(pageAdorner.collapsed).toBeTruthy();
  creator.designerStateManager.suspend();
  creator.survey.pages.splice(0, 1);
  creator.survey.pages.splice(1, 0, page1);
  pageAdorner = new PageAdorner(creator, page1);
  creator.designerStateManager.release();
  creator.restoreElementsState();
  expect(pageAdorner.collapsed).toBeTruthy();
});

test("Panel dynamic template panel shouldn't render collapsed", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();
  creator.JSON = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "paneldynamic",
            "name": "paneldynamic1",
            "state": "expanded",
            "visible": false,
            "templateElements": [
              {
                "type": "text",
                "name": "question1"
              }
            ],
            "panelCount": 1,
            "minPanelCount": 1,
            "panelsState": "firstExpanded"
          }
        ]
      }
    ]
  };
  const question = creator.survey.getQuestionByName("paneldynamic1") as QuestionPanelDynamicModel;
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question.template,
    <any>undefined
  );

  expect(questionAdorner.collapsed).toBeFalsy();
  expect(questionAdorner.needToRenderContent).toBeTruthy();

  questionAdorner.collapsed = true;
  expect(questionAdorner.collapsed).toBeTruthy();
  expect(questionAdorner.needToRenderContent).toBeTruthy();

  questionAdorner["restoreState"]();
  expect(questionAdorner.collapsed).toBeTruthy();
  expect(questionAdorner.needToRenderContent).toBeTruthy();

  surveySettings.animationEnabled = true;
});

test("Check question converter subitems", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const booleans = creator.toolbox.getItemByName("boolean") as QuestionToolboxItem;

  creator.JSON = {
    elements: [
      { type: "boolean", name: "q1" },
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  creator.selectElement(question);
  const questionAdorner = new QuestionAdornerViewModel(
    creator,
    question,
    <any>undefined
  );

  const subitems = getQuestionConverterList(creator, "q1").getActionById("rating").items;
  expect(subitems.length).toBe(3);

  surveySettings.animationEnabled = true;
});

test("Check question converter subitems", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const text = creator.toolbox.getItemByName("text") as QuestionToolboxItem;
  const number = text.getSubitem("number");

  expect(text.needDefaultSubitem).toBeUndefined();
  QuestionAdornerViewModel.checkForNeedDefaultSubitems(creator.toolbox.items);
  expect(text.needDefaultSubitem).toBeFalsy();

  text.needDefaultSubitem = true;
  QuestionAdornerViewModel.checkForNeedDefaultSubitems(creator.toolbox.items);
  expect(text.needDefaultSubitem).toBeTruthy(); // needDefaultSubitem is not recalculated

  text.removeSubitem(number);
  QuestionAdornerViewModel.checkForNeedDefaultSubitems(creator.toolbox.items);
  expect(text.needDefaultSubitem).toBeFalsy(); // needDefaultSubitem is recalculated after removeSubitem

  text.needDefaultSubitem = true;
  text.addSubitem(number);
  QuestionAdornerViewModel.checkForNeedDefaultSubitems(creator.toolbox.items);
  expect(text.needDefaultSubitem).toBeFalsy(); // needDefaultSubitem is recalculated after addSubitem

  text.needDefaultSubitem = true;
  text.clearSubitems();
  QuestionAdornerViewModel.checkForNeedDefaultSubitems(creator.toolbox.items);
  expect(text.needDefaultSubitem).toBeFalsy(); // needDefaultSubitem is recalculated after clearSubitems

  surveySettings.animationEnabled = true;
});
describe("convertInputType builds its list when the popup opens", () => {
  const textIds = "color,date,datetime-local,email,month,number,password,range,tel,text-default,time,url,week";
  const textIdsNoEmail = "color,date,datetime-local,month,number,password,range,tel,text-default,time,url,week";
  const ratingIds = "labels,stars,smileys";
  const withTel = (creator: CreatorTester, index?: number) => {
    creator.toolbox.addItem(<any>{ name: "phone", title: "Phone", json: { type: "text", inputType: "tel" }, category: "custom" }, index);
    return creator;
  };
  const withText2 = (creator: CreatorTester, index?: number) => {
    creator.toolbox.addItem(<any>{ name: "text2", title: "Text 2", json: { type: "text" }, category: "custom" }, index);
    creator.toolbox.getItemByName("text2").addSubitem(<any>{ name: "tel2", title: "Tel 2", json: { type: "text", inputType: "tel" } });
    return creator;
  };
  const noSubitems = (creator: CreatorTester) => {
    creator.toolbox.showSubitems = false;
    return creator;
  };
  const withRadiogroupSubitem = (creator: CreatorTester) => {
    creator.toolbox.getItemByName("radiogroup").addSubitem(<any>{ name: "rg2", title: "Two columns", json: { type: "radiogroup", colCount: 2 } });
    return creator;
  };
  const creators: { [name: string]: () => CreatorTester } = {
    default: () => new CreatorTester(),
    noSubitems: () => noSubitems(new CreatorTester()),
    customJson: () => {
      const creator = withTel(new CreatorTester());
      const booleans = creator.toolbox.getItemByName("boolean");
      booleans.addSubitem(<any>{ name: "boolradio", json: { type: "boolean", displayMode: "radio" }, title: "Radio" });
      booleans.addSubitem(<any>{ name: "boolcheckbox", json: { type: "boolean", displayMode: "checkbox" }, title: "Checkbox" });
      return creator;
    },
    telItemFirst: () => withTel(new CreatorTester(), 0),
    telItemFirstNoSubitems: () => noSubitems(withTel(new CreatorTester(), 0)),
    text2Last: () => withText2(new CreatorTester()),
    text2First: () => withText2(new CreatorTester(), 0),
    text2FirstNoSubitems: () => noSubitems(withText2(new CreatorTester(), 0)),
    restricted: () => new CreatorTester({ questionTypes: ["text", "rating", "checkbox"] }),
    typeNotAvailable: () => new CreatorTester({ questionTypes: ["rating", "checkbox"] }),
    removedSubitem: () => {
      const creator = new CreatorTester();
      creator.toolbox.getItemByName("text").removeSubitem("email");
      return creator;
    },
    removedSubitemNoSubitems: () => {
      const creator = noSubitems(new CreatorTester());
      creator.toolbox.getItemByName("text").removeSubitem("email");
      return creator;
    },
    clearedSubitems: () => {
      const creator = new CreatorTester();
      creator.toolbox.getItemByName("text").clearSubitems();
      return creator;
    },
    matrixSubitems: () => {
      const creator = new CreatorTester();
      const matrixItem = creator.toolbox.getItemByName("matrix");
      matrixItem.addSubitem(<any>{ name: "matrixdefault", json: { type: "matrix" }, title: "Single-Select" });
      matrixItem.addSubitem(creator.toolbox.getItemByName("matrixdropdown"));
      matrixItem.addSubitem(creator.toolbox.getItemByName("matrixdynamic"));
      creator.toolbox.removeItem("matrixdropdown");
      creator.toolbox.removeItem("matrixdynamic");
      return creator;
    },
    radiogroupSubitems: () => withRadiogroupSubitem(new CreatorTester()),
    radiogroupSubitemsNoSubitems: () => withRadiogroupSubitem(noSubitems(new CreatorTester())),
    german: () => {
      const creator = new CreatorTester();
      creator.locale = "de";
      return creator;
    },
  };
  // Generated once on master faa307505, before the list was built on demand, and pasted here.
  // [case, toolbox item path or question JSON, title (null: no action), list item ids after the popup opens, selected item id after it opens]
  const baseline: Array<[string, any, string, string?, string?]> = [
    ["default", "radiogroup", null],
    ["default", "rating", "Labels", ratingIds, "labels"],
    ["default", "rating/labels", "Labels", ratingIds, "labels"],
    ["default", "rating/stars", "Stars", ratingIds, "stars"],
    ["default", "rating/smileys", "Smileys", ratingIds, "smileys"],
    ["default", "slider", null],
    ["default", "checkbox", null],
    ["default", "dropdown", null],
    ["default", "tagbox", null],
    ["default", "boolean", null],
    ["default", "file", null],
    ["default", "imagepicker", null],
    ["default", "ranking", null],
    ["default", "text", "Text", textIds, "text-default"],
    ["default", "text/color", "Color", textIds, "color"],
    ["default", "text/date", "Date", textIds, "date"],
    ["default", "text/datetime-local", "Date and Time", textIds, "datetime-local"],
    ["default", "text/email", "Email", textIds, "email"],
    ["default", "text/month", "Month", textIds, "month"],
    ["default", "text/number", "Number", textIds, "number"],
    ["default", "text/password", "Password", textIds, "password"],
    ["default", "text/range", "Range", textIds, "range"],
    ["default", "text/tel", "Phone Number", textIds, "tel"],
    ["default", "text/text-default", "Text", textIds, "text-default"],
    ["default", "text/time", "Time", textIds, "time"],
    ["default", "text/url", "URL", textIds, "url"],
    ["default", "text/week", "Week", textIds, "week"],
    ["default", "comment", null],
    ["default", "multipletext", null],
    ["default", "paneldynamic", null],
    ["default", "matrix", null],
    ["default", "matrixdropdown", null],
    ["default", "matrixdynamic", null],
    ["default", "html", null],
    ["default", "expression", null],
    ["default", "image", null],
    ["default", "signaturepad", null],
    ["noSubitems", "radiogroup", null],
    ["noSubitems", "rating", "Labels", ratingIds, null],
    ["noSubitems", "rating/labels", "Labels", ratingIds, null],
    ["noSubitems", "rating/stars", "Stars", ratingIds, null],
    ["noSubitems", "rating/smileys", "Smileys", ratingIds, null],
    ["noSubitems", "slider", null],
    ["noSubitems", "checkbox", null],
    ["noSubitems", "dropdown", null],
    ["noSubitems", "tagbox", null],
    ["noSubitems", "boolean", null],
    ["noSubitems", "file", null],
    ["noSubitems", "imagepicker", null],
    ["noSubitems", "ranking", null],
    ["noSubitems", "text", "Text", textIds, null],
    ["noSubitems", "text/color", "Color", textIds, null],
    ["noSubitems", "text/date", "Date", textIds, null],
    ["noSubitems", "text/datetime-local", "Date and Time", textIds, null],
    ["noSubitems", "text/email", "Email", textIds, null],
    ["noSubitems", "text/month", "Month", textIds, null],
    ["noSubitems", "text/number", "Number", textIds, null],
    ["noSubitems", "text/password", "Password", textIds, null],
    ["noSubitems", "text/range", "Range", textIds, null],
    ["noSubitems", "text/tel", "Phone Number", textIds, null],
    ["noSubitems", "text/text-default", "Text", textIds, null],
    ["noSubitems", "text/time", "Time", textIds, null],
    ["noSubitems", "text/url", "URL", textIds, null],
    ["noSubitems", "text/week", "Week", textIds, null],
    ["noSubitems", "comment", null],
    ["noSubitems", "multipletext", null],
    ["noSubitems", "paneldynamic", null],
    ["noSubitems", "matrix", null],
    ["noSubitems", "matrixdropdown", null],
    ["noSubitems", "matrixdynamic", null],
    ["noSubitems", "html", null],
    ["noSubitems", "expression", null],
    ["noSubitems", "image", null],
    ["noSubitems", "signaturepad", null],
    ["customJson", "radiogroup", null],
    ["customJson", "rating", "Labels", ratingIds, "labels"],
    ["customJson", "rating/labels", "Labels", ratingIds, "labels"],
    ["customJson", "rating/stars", "Stars", ratingIds, "stars"],
    ["customJson", "rating/smileys", "Smileys", ratingIds, "smileys"],
    ["customJson", "slider", null],
    ["customJson", "checkbox", null],
    ["customJson", "dropdown", null],
    ["customJson", "tagbox", null],
    ["customJson", "boolean", "Yes/No (Boolean)", "boolean-default,boolradio,boolcheckbox", "boolean-default"],
    ["customJson", "boolean/boolradio", "Radio", "boolean-default,boolradio,boolcheckbox", "boolradio"],
    ["customJson", "boolean/boolcheckbox", "Checkbox", "boolean-default,boolradio,boolcheckbox", "boolcheckbox"],
    ["customJson", "file", null],
    ["customJson", "imagepicker", null],
    ["customJson", "ranking", null],
    ["customJson", "text", "Text", textIds, "text-default"],
    ["customJson", "text/color", "Color", textIds, "color"],
    ["customJson", "text/date", "Date", textIds, "date"],
    ["customJson", "text/datetime-local", "Date and Time", textIds, "datetime-local"],
    ["customJson", "text/email", "Email", textIds, "email"],
    ["customJson", "text/month", "Month", textIds, "month"],
    ["customJson", "text/number", "Number", textIds, "number"],
    ["customJson", "text/password", "Password", textIds, "password"],
    ["customJson", "text/range", "Range", textIds, "range"],
    ["customJson", "text/tel", "Phone Number", textIds, "tel"],
    ["customJson", "text/text-default", "Text", textIds, "text-default"],
    ["customJson", "text/time", "Time", textIds, "time"],
    ["customJson", "text/url", "URL", textIds, "url"],
    ["customJson", "text/week", "Week", textIds, "week"],
    ["customJson", "comment", null],
    ["customJson", "multipletext", null],
    ["customJson", "paneldynamic", null],
    ["customJson", "matrix", null],
    ["customJson", "matrixdropdown", null],
    ["customJson", "matrixdynamic", null],
    ["customJson", "html", null],
    ["customJson", "expression", null],
    ["customJson", "image", null],
    ["customJson", "signaturepad", null],
    ["customJson", "phone", "Phone Number", textIds, "tel"],
    ["telItemFirst", { type: "text", name: "q1" }, "Text", textIds, "text-default"],
    ["telItemFirst", { type: "text", name: "q1", inputType: "email" }, "Email", textIds, "email"],
    ["telItemFirst", { type: "text", name: "q1", inputType: "tel" }, "Phone Number", textIds, "tel"],
    ["telItemFirstNoSubitems", { type: "text", name: "q1" }, "Text", textIds, null],
    ["telItemFirstNoSubitems", { type: "text", name: "q1", inputType: "email" }, "Email", textIds, null],
    ["telItemFirstNoSubitems", { type: "text", name: "q1", inputType: "tel" }, "Phone Number", textIds, null],
    ["text2Last", { type: "text", name: "q1" }, "Text 2", "text2-default,tel2", "text2-default"],
    ["text2Last", { type: "text", name: "q1", inputType: "email" }, "Text 2", "text2-default,tel2", "text2-default"],
    ["text2Last", { type: "text", name: "q1", inputType: "tel" }, "Tel 2", "text2-default,tel2", "tel2"],
    ["text2First", { type: "text", name: "q1" }, "Text", textIds, "text-default"],
    ["text2First", { type: "text", name: "q1", inputType: "email" }, "Email", textIds, "email"],
    ["text2First", { type: "text", name: "q1", inputType: "tel" }, "Phone Number", textIds, "tel"],
    ["text2FirstNoSubitems", { type: "text", name: "q1" }, "Text", textIds, null],
    ["text2FirstNoSubitems", { type: "text", name: "q1", inputType: "email" }, "Email", textIds, null],
    ["text2FirstNoSubitems", { type: "text", name: "q1", inputType: "tel" }, "Phone Number", textIds, null],
    ["restricted", "text", "Text", textIds, "text-default"],
    ["restricted", "text/color", "Color", textIds, "color"],
    ["restricted", "text/date", "Date", textIds, "date"],
    ["restricted", "text/datetime-local", "Date and Time", textIds, "datetime-local"],
    ["restricted", "text/email", "Email", textIds, "email"],
    ["restricted", "text/month", "Month", textIds, "month"],
    ["restricted", "text/number", "Number", textIds, "number"],
    ["restricted", "text/password", "Password", textIds, "password"],
    ["restricted", "text/range", "Range", textIds, "range"],
    ["restricted", "text/tel", "Phone Number", textIds, "tel"],
    ["restricted", "text/text-default", "Text", textIds, "text-default"],
    ["restricted", "text/time", "Time", textIds, "time"],
    ["restricted", "text/url", "URL", textIds, "url"],
    ["restricted", "text/week", "Week", textIds, "week"],
    ["restricted", "rating", "Labels", ratingIds, "labels"],
    ["restricted", "rating/labels", "Labels", ratingIds, "labels"],
    ["restricted", "rating/stars", "Stars", ratingIds, "stars"],
    ["restricted", "rating/smileys", "Smileys", ratingIds, "smileys"],
    ["restricted", "checkbox", null],
    ["typeNotAvailable", { type: "text", name: "q1", inputType: "email" }, null],
    ["removedSubitem", { type: "text", name: "q1", inputType: "email" }, "Email", textIdsNoEmail, null],
    ["removedSubitemNoSubitems", { type: "text", name: "q1", inputType: "email" }, "Email", textIdsNoEmail, null],
    ["clearedSubitems", { type: "text", name: "q1", inputType: "email" }, null],
    ["matrixSubitems", { type: "matrix", name: "q1" }, "Single-Select", "matrixdefault,matrixdropdown,matrixdynamic", "matrixdefault"],
    ["matrixSubitems", { type: "matrixdropdown", name: "q1" }, "Multi-Select Matrix", "matrixdefault,matrixdropdown,matrixdynamic", "matrixdropdown"],
    ["matrixSubitems", { type: "matrixdynamic", name: "q1" }, "Dynamic Matrix", "matrixdefault,matrixdropdown,matrixdynamic", "matrixdynamic"],
    ["radiogroupSubitems", { type: "radiogroup", name: "q1" }, "Radio Button Group", "radiogroup-default,rg2", "radiogroup-default"],
    ["radiogroupSubitems", { type: "radiogroup", name: "q1", colCount: 2 }, "Two columns", "radiogroup-default,rg2", "rg2"],
    ["radiogroupSubitems", { type: "radiogroup", name: "q1", colCount: 3 }, "Radio Button Group", "radiogroup-default,rg2", "radiogroup-default"],
    ["radiogroupSubitemsNoSubitems", { type: "radiogroup", name: "q1" }, null],
    ["radiogroupSubitemsNoSubitems", { type: "radiogroup", name: "q1", colCount: 2 }, null],
    ["german", { type: "text", name: "q1" }, "Text", textIds, "text-default"],
    ["german", { type: "text", name: "q1", inputType: "email" }, "E-Mail", textIds, "email"],
    ["german", { type: "rating", name: "q1", rateType: "stars" }, "Sterne", ratingIds, "stars"],
  ];
  const caseNames = Object.keys(creators);
  // Every question toolbox item and subitem, named as the path rows of the table name them.
  // Components that other tests in this file register (and leave registered) are skipped.
  const getToolboxQuestionJsons = (creator: CreatorTester): Array<{ path: string, json: any }> => {
    const res = [];
    creator.toolbox.items.forEach(item => {
      if (ComponentCollection.Instance.getCustomQuestionByName(item.name)) return;
      [item].concat(item.items || []).forEach(i => {
        if (!i.json?.type || i.isPanel || i.json.type === "panel") return;
        res.push({ path: i === item ? item.name : item.name + "/" + i.name, json: { ...JSON.parse(JSON.stringify(i.json)), name: "q1" } });
      });
    });
    return res;
  };
  const getCaseRows = (caseName: string, creator: CreatorTester): Array<{ row: Array<any>, json: any }> => {
    const rows = baseline.filter(r => r[0] === caseName);
    if (typeof rows[0][1] !== "string") return rows.map(row => ({ row, json: row[1] }));
    const jsons = getToolboxQuestionJsons(creator);
    expect(rows.map(r => r[1])).toEqual(jsons.map(j => j.path));
    return rows.map((row, index) => ({ row, json: jsons[index].json }));
  };
  const createAdorner = (creator: CreatorTester, json: any): QuestionAdornerViewModel => {
    creator.JSON = { elements: [json] };
    return new QuestionAdornerViewModel(creator, creator.survey.getAllQuestions()[0], <any>undefined);
  };
  const openPopup = (action: Action) => {
    new PopupDropdownViewModel(action.popupModel); // need for popupModel.onShow
    action.popupModel.show();
    return action.popupModel.contentComponentData.model;
  };
  beforeEach(() => { surveySettings.animationEnabled = false; });
  afterEach(() => { surveySettings.animationEnabled = true; });

  test.each(caseNames)("the action and its title are the same as before: %s", (caseName: string) => {
    const creator = creators[caseName]();
    getCaseRows(caseName, creator).forEach(({ row, json }) => {
      const action = createAdorner(creator, json).actionContainer.getActionById("convertInputType");
      expect(action ? action.title : null, JSON.stringify(row[1])).toBe(row[2]);
      if (action) expect(action.visible, JSON.stringify(row[1])).toBe(true);
    });
  });
  test.each(caseNames)("no list before the popup opens, the same list after it opens: %s", (caseName: string) => {
    const creator = creators[caseName]();
    getCaseRows(caseName, creator).filter(({ row }) => row[2] !== null).forEach(({ row, json }) => {
      const createItemSpy = vi.spyOn(creator, "createIActionBarItemByClass");
      const action = createAdorner(creator, json).actionContainer.getActionById("convertInputType");
      expect(createItemSpy, JSON.stringify(row[1])).toHaveBeenCalledTimes(0);
      createItemSpy.mockRestore();
      expect(action.popupModel.contentComponentData.model.actions.length).toBe(0);
      const list = openPopup(action);
      expect(list.actions.map(a => a.id).join(","), JSON.stringify(row[1])).toBe(row[3]);
      expect(list.selectedItem?.id ?? null, JSON.stringify(row[1])).toBe(row[4]);
      action.popupModel.hide();
    });
  });
  test("the subtype changes while the popup is closed: the title follows, the list is built on the next open", () => {
    // [creator, question JSON, property, title at build, [value, title after the change], list item ids and selected item id on the next open]
    const sequences: Array<[() => CreatorTester, any, string, string, Array<[string, string]>, string, string]> = [
      [creators.default, { type: "rating", name: "q1" }, "rateType", "Labels", [["stars", "Stars"], ["smileys", "Smileys"]], ratingIds, "smileys"],
      [creators.default, { type: "text", name: "q1" }, "inputType", "Text", [["email", "Email"], ["tel", "Phone Number"], ["text", "Text"]], textIds, "text-default"],
      [creators.telItemFirst, { type: "text", name: "q1", inputType: "email" }, "inputType", "Email", [["tel", "Phone Number"], ["url", "URL"]], textIds, "url"],
      [creators.text2First, { type: "text", name: "q1", inputType: "email" }, "inputType", "Email", [["tel", "Phone Number"], ["url", "URL"]], textIds, "url"],
      [creators.noSubitems, { type: "text", name: "q1" }, "inputType", "Text", [["email", "Email"], ["tel", "Phone Number"]], textIds, null],
    ];
    sequences.forEach(([createCreator, json, propName, buildTitle, changes, ids, selectedId]) => {
      const adorner = createAdorner(createCreator(), json);
      const question = adorner.element as any;
      const action = adorner.actionContainer.getActionById("convertInputType");
      const list = action.popupModel.contentComponentData.model;
      expect(action.title).toBe(buildTitle);
      changes.forEach(([value, title]) => {
        question[propName] = value;
        expect(action.title, value).toBe(title);
        expect(list.actions.length, value).toBe(0);
      });
      openPopup(action);
      expect(list.actions.map(a => a.id).join(",")).toBe(ids);
      expect(list.selectedItem?.id ?? null).toBe(selectedId);
    });
  });
  test("the subtype changes while the popup is open: the title and the list follow", () => {
    // [creator, question JSON, property, [value, title and selected item id after the change], list item ids]
    const sequences: Array<[() => CreatorTester, any, string, Array<[string, string, string]>, string]> = [
      [creators.default, { type: "rating", name: "q1" }, "rateType", [["stars", "Stars", "stars"], ["smileys", "Smileys", "smileys"]], ratingIds],
      [creators.telItemFirst, { type: "text", name: "q1", inputType: "email" }, "inputType", [["tel", "Phone Number", "tel"], ["url", "URL", "url"]], textIds],
      [creators.text2First, { type: "text", name: "q1", inputType: "email" }, "inputType", [["tel", "Phone Number", "tel"], ["url", "URL", "url"]], textIds],
    ];
    sequences.forEach(([createCreator, json, propName, changes, ids]) => {
      const adorner = createAdorner(createCreator(), json);
      const question = adorner.element as any;
      const action = adorner.actionContainer.getActionById("convertInputType");
      const list = openPopup(action);
      changes.forEach(([value, title, selectedId]) => {
        question[propName] = value;
        expect(action.title, value).toBe(title);
        expect(list.selectedItem?.id ?? null, value).toBe(selectedId);
      });
      expect(list.actions.map(a => a.id).join(",")).toBe(ids);
    });
  });
});
test("Test showHiddenTitle functionality", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "paneldynamic",
        name: "question1",
        templateElements: [
          {
            type: "text",
            name: "question2"
          }
        ],
        templateQuestionTitleLocation: "left"
      },
      {
        type: "matrixdropdown",
        name: "question3",
        columns: [{ name: "col", cellType: "text" }],
        detailElements: [
          {
            type: "paneldynamic",
            name: "question4",
            templateElements: [
              {
                type: "text",
                name: "question5"
              }
            ],
            templateQuestionTitleLocation: "left"
          }
        ],
        detailPanelMode: "underRow",
        rows: ["row1", "row2"]
      },
      {
        type: "text",
        name: "question6",
        titleLocation: "left"
      }
    ]
  };
  const question6 = creator.survey.getQuestionByName("question6") as QuestionTextModel;
  expect(new QuestionAdornerViewModel(creator, question6, <any>undefined).showHiddenTitle).toBeTruthy();
  const question1 = creator.survey.getQuestionByName("question1") as QuestionPanelDynamicModel;
  const question2 = question1.panels[0].getQuestionByName("question2") as QuestionTextModel;
  expect(new QuestionAdornerViewModel(creator, question2, <any>undefined).showHiddenTitle).toBeTruthy();
  const question3 = creator.survey.getQuestionByName("question3") as QuestionMatrixDropdownModel;
  question3.visibleRows[0].showDetailPanel();
  const panel = question3.visibleRows[0].detailPanel;
  const dPanel = panel.getQuestionByName("question4") as QuestionPanelDynamicModel;
  const question5 = dPanel.panels[0].getQuestionByName("question5") as QuestionTextModel;
  expect(new QuestionAdornerViewModel(creator, question5, <any>undefined).showHiddenTitle).toBeTruthy();
});

test("Nested choice content panel shows the drop-over highlight while dragging over it", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "radiogroup", name: "q1", choices: ["item1", "item2"] },
    ]
  };
  const question = creator.survey.getQuestionByName("q1") as QuestionRadiogroupModel;
  const panel = (question.choices[0] as any).panel;
  // The choice content panel is a non-interactive nested element, but it still acts as a drop target.
  expect(panel.isInteractiveDesignElement).toBeFalsy();

  const panelAdorner = new QuestionAdornerViewModel(creator, panel, <any>undefined);
  expect(panelAdorner.css().indexOf("svc-question__content--drag-over-inside")).toBe(-1);

  panelAdorner.dropIndicatorPosition = DropIndicatorPosition.Inside;
  expect(panelAdorner.css().indexOf("svc-question__content--drag-over-inside")).not.toBe(-1);
});