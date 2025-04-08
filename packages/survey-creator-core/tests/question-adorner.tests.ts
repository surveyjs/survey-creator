import { QuestionAdornerViewModel } from "../src/components/question";
import { Action, ComponentCollection, PopupDropdownViewModel, QuestionPanelDynamicModel, QuestionRadiogroupModel, settings, SurveyElement, SurveyModel, settings as surveySettings } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { PageAdorner } from "../src/components/page";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";
import { QuestionToolboxItem } from "../src/toolbox";

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
  popup.show();
  const list = popup.contentComponentData.model;

  const booleanAction = list.getActionById("boolean");
  const booleanCheckAction = booleanAction.items[2];
  booleanCheckAction.action();
  const questionConverted = creator.survey.getQuestionByName("q1");
  expect(questionConverted.renderAs).toBe("checkbox");

  popup.show();
  const booleanCheckAction2 = booleanAction.items[0];
  booleanCheckAction2.action();
  const questionConverted2 = creator.survey.getQuestionByName("q1");
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