import { SurveyModel, IAction } from "survey-core";
import { CreatorTester } from "../creator-tester";
import { TestSurveyTabViewModel } from "../../src/components/tabs/test";
import { TabTestPlugin } from "../../src/components/tabs/test-plugin";

import "survey-core/survey.i18n";

function getTestModel(creator: CreatorTester): TestSurveyTabViewModel {
  var testPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  return testPlugin.model;
}

test("Create test survey", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  var model = getTestModel(creator);
  expect(model.survey).toBeTruthy();
  expect(model.survey.getQuestionByName("q1")).toBeTruthy();
});

test("pages, active", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { name: "page1", questions: [{ type: "text", name: "q1" }] },
      { name: "page2", questions: [{ type: "text", name: "q2" }] },
      { name: "page3", questions: [{ type: "text", name: "q3" }] }
    ]
  };
  var model = getTestModel(creator);
  expect(model.pageListItems).toHaveLength(3);
  expect(model.activePage.name).toEqual("page1");
  model.survey.nextPage();
  expect(model.pageListItems[0].active).toBeFalsy();
  expect(model.activePage.name).toEqual("page2");
  model.activePage = model.survey.pages[2];
  expect(model.survey.currentPage.name).toEqual("page3");
});

test("pages, visibility", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { questions: [{ type: "text", name: "q1" }] },
      { questions: [{ type: "text", name: "q2", visible: false }] },
      { questions: [{ type: "text", name: "q3" }] }
    ]
  };
  var model = getTestModel(creator);
  var q = model.survey.getQuestionByName("q2");
  const pageList = model.pageActions.filter((item: IAction) => item.id === "pageSelector")[0].popupModel.contentComponentData.model;
  const pagesActions = pageList.actions;
  expect(pagesActions).toHaveLength(3);
  expect(pagesActions[1].enabled).toBeFalsy();
  q.visible = true;
  expect(pagesActions[1].enabled).toBeTruthy();
});

test("Reset options on show, Bug# https://surveyjs.answerdesk.io/ticket/details/T2147", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visible: false }
    ]
  };
  var model = getTestModel(creator);
  expect(model.survey.showInvisibleElements).toBeFalsy();
  model.showInvisibleElements = true;
  expect(model.survey.showInvisibleElements).toBeTruthy();
  model = getTestModel(creator);
  expect(model.survey.showInvisibleElements).toBeFalsy();
});

test("Use title for pages", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "p1",
        title: "First Page",
        elements: [{ type: "text", name: "q1" }]
      },
      {
        name: "p2",
        title: "Second Page",
        elements: [{ type: "text", name: "q2" }]
      }
    ]
  };
  expect(creator.survey.pages).toHaveLength(2);
  creator.showObjectTitles = true;
  creator.onGetObjectDisplayName.add(function (sender, options) {
    if (options.obj.name == "p2") options.displayName = "My Second Page";
  });
  var model = getTestModel(creator);
  expect(model.survey.pages).toHaveLength(2);
  expect(model.pageListItems).toHaveLength(2);
  expect(model.pageListItems[0].title).toEqual("First Page");
  expect(model.pageListItems[1].title).toEqual("My Second Page");
});

test("showDefaultLanguageInTestSurveyTab: auto, true, false, all", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  expect(creator.showDefaultLanguageInTestSurveyTab).toEqual("auto");
  const testPlugin = <TabTestPlugin>creator.getPlugin("test");
  const languageSelectorAction = testPlugin["languageSelectorAction"];
  const languageSelectorActionList = languageSelectorAction.data;

  testPlugin.activate();
  expect(languageSelectorAction.visible).toBeFalsy();

  creator.showDefaultLanguageInTestSurveyTab = true;
  testPlugin.update();
  expect(languageSelectorAction.visible).toBeTruthy();
  expect(languageSelectorActionList.actions.length > 10).toBeTruthy();

  creator.showDefaultLanguageInTestSurveyTab = "auto";
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2" }
      }
    ]
  };
  testPlugin.update();
  expect(languageSelectorAction.visible).toBeTruthy();
  expect(languageSelectorActionList.actions).toHaveLength(2);
  expect(languageSelectorActionList.actions[0].id).toEqual("en");
  expect(languageSelectorActionList.actions[1].id).toEqual("de");
  expect(languageSelectorActionList.actions[1].title).toEqual("Deutsch");

  creator.showDefaultLanguageInTestSurveyTab = true;
  testPlugin.update();
  expect(languageSelectorAction.visible).toBeTruthy();
  expect(languageSelectorActionList.actions).toHaveLength(2);

  creator.showDefaultLanguageInTestSurveyTab = false;
  testPlugin.update();
  expect(languageSelectorAction.visible).toBeFalsy();
  expect(languageSelectorActionList.actions).toHaveLength(0);

  creator.showDefaultLanguageInTestSurveyTab = "all";
  testPlugin.update();
  expect(languageSelectorAction.visible).toBeTruthy();
  expect(languageSelectorActionList.actions.length > 10).toBeTruthy();
});
