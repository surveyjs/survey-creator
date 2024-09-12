import { QuestionAdornerViewModel } from "../src/components/question";
import { Action, PopupDropdownViewModel, QuestionRadiogroupModel, settings, SurveyElement, settings as surveySettings } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { PageAdorner } from "../src/components/page";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { QuestionToolboxItem } from "../src/toolbox";

settings.supportCreatorV2 = true;

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
  expect(requiredAction.innerCss).toBe("svc-required-action");
  question.isRequired = true;
  expect(requiredAction.innerCss).toBe("svc-required-action svc-required-action--active");
  question.isRequired = false;
  expect(requiredAction.innerCss).toBe("svc-required-action");
  expect(requiredAction.title).toBe("Required");

  const requiredActionInPopup = new Action(requiredAction.innerItem);
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
  creator.onDefineElementMenuItems.add(function (editor, options) {
    if (options.obj.isPage) return;
    const objToAdd = options.obj;
    options.items.unshift({
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
  expect(action.iconName).toBe("icon-collapse-detail-light_16x16");
  action.action();
  expect(questionAdorner.collapsed).toBeTruthy();
  expect(action.iconName).toBe("icon-restore_16x16");

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
  popup.toggleVisibility();
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
  popup.toggleVisibility();
  const list = popup.contentComponentData.model;
  expect((list.getActionById("text").items || []).length).toBe(0);

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
  popup.toggleVisibility();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("text");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.toggleVisibility();
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
  popup.toggleVisibility();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("matrix");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.toggleVisibility();
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
  booleans.addSubitem(<any>{ name: "boolradio", json: { type: "boolean", renderAs: "radio" }, title: "Radio" });
  booleans.addSubitem(<any>{ name: "boolcheckbox", json: { type: "boolean", renderAs: "checkbox" }, title: "Checkbox" });

  creator.JSON = {
    elements: [
      { type: "boolean", name: "q1", renderAs: "radio" },
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
  popup.toggleVisibility();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("boolean");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.toggleVisibility();
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
  popup.toggleVisibility();
  const list = popup.contentComponentData.model;
  expect(list.selectedItem.id).toBe("comment");

  const popupSubtype = list.selectedItem.popupModel;
  const popupViewModelSubtype = new PopupDropdownViewModel(popupSubtype); // need for popupModel.onShow
  popupSubtype.toggleVisibility();
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
  popup2.toggleVisibility();
  const list2 = popup2.contentComponentData.model;
  expect(list2.selectedItem.id).toBe("comment");

  const popupSubtype2 = list2.selectedItem.popupModel;
  const popupViewModelSubtype2 = new PopupDropdownViewModel(popupSubtype2); // need for popupModel.onShow
  popupSubtype2.toggleVisibility();
  const listSubtype2 = popupSubtype2.contentComponentData.model;
  expect(listSubtype2.selectedItem?.id).toBe(undefined);

  surveySettings.animationEnabled = true;
});

test("Check question converter with subitems (json)", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const booleans = creator.toolbox.getItemByName("boolean") as QuestionToolboxItem;
  booleans.addSubitem(<any>{ name: "booleandefault", json: { type: "boolean" }, title: "Slider" });
  booleans.addSubitem(<any>{ name: "boolradio", json: { type: "boolean", renderAs: "radio" }, title: "Radio" });
  booleans.addSubitem(<any>{ name: "boolcheckbox", json: { type: "boolean", renderAs: "checkbox" }, title: "Checkbox" });

  creator.JSON = {
    elements: [
      { type: "boolean", name: "q1", renderAs: "radio" },
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
  popup.toggleVisibility();
  const list = popup.contentComponentData.model;

  const booleanAction = list.getActionById("boolean");
  const booleanCheckAction = booleanAction.items[2];
  booleanCheckAction.action();
  const questionConverted = creator.survey.getQuestionByName("q1");
  expect(questionConverted.renderAs).toBe("checkbox");

  popup.toggleVisibility();
  const booleanCheckAction2 = booleanAction.items[0];
  booleanCheckAction2.action();
  const questionConverted2 = creator.survey.getQuestionByName("q1");
  expect(questionConverted2.renderAs).toBe("default");

  surveySettings.animationEnabled = true;
});

test("Check question converter with subitems (types)", (): any => {
  surveySettings.animationEnabled = false;
  const creator = new CreatorTester();

  // create subitems from new items (the same type, different json)
  const booleans = creator.toolbox.getItemByName("boolean") as QuestionToolboxItem;
  booleans.addSubitem(<any>{ name: "booleandefault", json: { type: "boolean" }, title: "Slider" });
  booleans.addSubitem(<any>{ name: "boolradio", json: { type: "boolean", renderAs: "radio" }, title: "Radio" });
  booleans.addSubitem(<any>{ name: "radio", json: { type: "radiogroup" }, title: "Radiogroup" });

  creator.JSON = {
    elements: [
      { type: "boolean", name: "q1", renderAs: "radio" },
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
      { type: "boolean", name: "q1", renderAs: "radio" },
    ]
  };

  getQuestionConverterList(creator, "q1").getActionById("comment").action();
  expect(creator.survey.getQuestionByName("q1").maxLength).toBe(-1);

  getQuestionConverterList(creator, "q1").getActionById("comment").items[0].action();
  expect(creator.survey.getQuestionByName("q1").maxLength).toBe(280);

  getQuestionConverterList(creator, "q1").getActionById("comment").action();
  expect(creator.survey.getQuestionByName("q1").maxLength).toBe(-1);

  getQuestionConverterList(creator, "q1").getActionById("radiogroup").action();
  expect(creator.survey.getQuestionByName("q1").maxLength).toBe(undefined);

  getQuestionConverterList(creator, "q1").getActionById("comment").items[0].action();
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
  getQuestionConverterList(creator, "q1").getActionById("rating").items[1].action();
  expect(creator.survey.getQuestionByName("q1").rateCount).toBe(5);
  expect(creator.survey.getQuestionByName("q1").minRateDescription).toBe("Very unsatisfied");
  expect(creator.survey.getQuestionByName("q1").maxRateDescription).toBe("Very satisfied");
  expect(creator.survey.getQuestionByName("q1").title).toBe("How satisfied?");
  getQuestionConverterList(creator, "q1").getActionById("rating").items[2].action();
  expect(creator.survey.getQuestionByName("q1").rateCount).toBe(11);
  expect(creator.survey.getQuestionByName("q1").minRateDescription).toBeFalsy();
  expect(creator.survey.getQuestionByName("q1").maxRateDescription).toBeFalsy();
  expect(creator.survey.getQuestionByName("q1").title).toBe("How likely?");
  getQuestionConverterList(creator, "q1").getActionById("rating").items[1].action();
  expect(creator.survey.getQuestionByName("q1").rateCount).toBe(5);
  expect(creator.survey.getQuestionByName("q1").minRateDescription).toBe("Very unsatisfied");
  expect(creator.survey.getQuestionByName("q1").maxRateDescription).toBe("Very satisfied");
  expect(creator.survey.getQuestionByName("q1").title).toBe("How satisfied?");
  surveySettings.animationEnabled = true;
});
