import { QuestionAdornerViewModel } from "../src/components/question";
import { Action, settings, SurveyElement } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { PageAdorner } from "../src/components/page";
import { TabDesignerPlugin } from "../src/components/tabs/designer-plugin";

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
