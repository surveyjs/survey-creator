import { CreatorTester } from "../creator-tester";
import {
  TabTestPlugin,
  TestSurveyTabViewModel
} from "../../src/components/tabs/test";
import { IAction, ListModel } from "survey-core";
import { assert } from "console";

function getTestModel(creator: CreatorTester): TestSurveyTabViewModel {
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  return testPlugin.model;
}

test("Test language Bar Item", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2" }
      }
    ]
  };
  const model: TestSurveyTabViewModel = getTestModel(creator);
  expect(model.showDefaultLanguageInTestSurveyTab).toBeTruthy();
  expect(model.languages).toHaveLength(2);
  expect(model.languages[0].id).toEqual("en");
  expect(model.languages[1].id).toEqual("de");
  expect(model.languages[1].title).toEqual("deutsch");
  expect(model.activeLanguage).toEqual("en");
  let langAction = model.actions.filter(
    (action) => action.id === "languageSelector"
  )[0];
  expect(langAction).toBeTruthy();
  expect(langAction.title).toEqual("english");
  model.activeLanguage = "de";
  expect(model.survey.locale).toEqual("de");
  expect(langAction.title).toEqual("deutsch");

  let testAgain = model.actions.filter(
    (action) => action.id === "testSurveyAgain"
  )[0];
  expect(testAgain).toBeTruthy();
  testAgain.action();
  expect(model.survey.locale).toEqual("de");
});
test("Test languages dropdown with unknown language", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
        title: { default: "1", de: "2", ff: "3" }
      }
    ]
  };
  const model: TestSurveyTabViewModel = getTestModel(creator);
  expect(model.showDefaultLanguageInTestSurveyTab).toBeTruthy();
  expect(model.languages).toHaveLength(3);
  expect(model.languages[0].id).toEqual("en");
  expect(model.languages[1].id).toEqual("de");
  expect(model.languages[1].title).toEqual("deutsch");
  expect(model.languages[2].id).toEqual("ff");
  expect(model.languages[2].title).toEqual("ff");
  expect(model.activeLanguage).toEqual("en");
});
test("Check page list state after change page arrows click", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1",
            visibleIf: "{question2} notempty"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "text",
            name: "question2"
          }
        ]
      },
      {
        name: "page3",
        elements: [
          {
            type: "text",
            name: "question3",
            visibleIf: "{question2} notempty"
          }
        ]
      },
      {
        name: "page4",
        elements: [
          {
            type: "text",
            name: "question4"
          }
        ]
      }
    ]
  };
  const model: TestSurveyTabViewModel = getTestModel(creator);
  const pageList: ListModel = model.pageActions.filter(
    (item: IAction) => item.id === "pageSelector"
  )[0].popupModel.contentComponentData.model;
  expect(pageList.selectedItem.data).toEqual(model.activePage);
  const nextPage: IAction = model.pageActions.filter(
    (item: IAction) => item.id === "nextPage"
  )[0];
  nextPage.action();
  expect(pageList.selectedItem.data).toEqual(model.activePage);
  const prevPage: IAction = model.pageActions.filter(
    (item: IAction) => item.id === "prevPage"
  )[0];
  prevPage.action();
  expect(pageList.selectedItem.data).toEqual(model.activePage);
});
test("Show/hide device similator", (): any => {
  let creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  let model: TestSurveyTabViewModel = getTestModel(creator);
  expect(model.showSimulator).toBeTruthy();
  let similatorAction = model.actions.filter(
    (action) => action.id === "deviceSelector"
  )[0];
  expect(similatorAction).toBeTruthy();
  expect(similatorAction.visible).toBeTruthy();

  creator = new CreatorTester({ showSimulatorInTestSurveyTab: false });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  model = getTestModel(creator);
  expect(model.showSimulator).toBeFalsy();
  similatorAction = model.actions.filter(
    (action) => action.id === "deviceSelector"
  )[0];
  expect(similatorAction).toBeTruthy();
  expect(similatorAction.visible).toBeFalsy();
});
test("pages, PageListItems, makes items enable/disable and do not touch visibility", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { name: "page1", questions: [{ type: "text", name: "q1" }] },
      { name: "page2", questions: [{ type: "text", name: "q2" }] },
      { name: "page3" }
    ]
  };
  var model = getTestModel(creator);
  expect(model.pageListItems).toHaveLength(3);
  expect(model.pageListItems[0].enabled).toBeTruthy();
  expect(model.pageListItems[1].enabled).toBeTruthy();
  expect(model.pageListItems[2].enabled).toBeFalsy();
  expect(model.pageListItems[2].visible).toEqual(true);
  model.survey.pages[1].visible = false;
  expect(model.pageListItems[1].enabled).toBeFalsy();
  expect(model.pageListItems[1].visible).toEqual(true);
  model.survey.pages[1].visible = true;
  expect(model.pageListItems[1].enabled).toBeTruthy();
  expect(model.pageListItems[2].visible).toEqual(true);
});
test("pages, PageListItems, pageSelector and settings.getObjectDisplayName", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { name: "page1", questions: [{ type: "text", name: "q1" }] },
      { name: "page2", questions: [{ type: "text", name: "q2" }] },
      { name: "page3" }
    ]
  };
  creator.onGetObjectDisplayName.add((sender, options) => {
    if(options.reason === "survey-tester") {
      const survey = options.obj.survey;
      const index = survey.pages.indexOf(options.obj);
      options.displayName = (index + 1).toString() + ". " + options.displayName;
    }
    if(options.reason === "survey-tester-selected") {
      const survey = options.obj.survey;
      const index = survey.pages.indexOf(options.obj);
      options.displayName = "Page " + (index + 1).toString() + " from " + survey.pages.length;
    }
  });
  var model = getTestModel(creator);
  expect(model.pageListItems).toHaveLength(3);
  expect(model.pageListItems[0].title).toEqual("1. page1");
  expect(model.pageListItems[1].title).toEqual("2. page2");
  expect(model.pageListItems[2].title).toEqual("3. page3");
  const selectedPage: IAction = model.pageActions.filter(
    (item: IAction) => item.id === "pageSelector")[0];
  expect(selectedPage.title).toEqual("Page 1 from 3");
  model.survey.nextPage();
  expect(selectedPage.title).toEqual("Page 2 from 3");
});

test("Simulator view switch", (): any => {
  let creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  let model: TestSurveyTabViewModel = getTestModel(creator);
  expect(model.simulator.simulatorMainCssClass).toEqual("");
  model.simulator.device = "iPhone5";
  expect(model.simulator.simulatorMainCssClass).toEqual("svd-simulator-main--frame");
});