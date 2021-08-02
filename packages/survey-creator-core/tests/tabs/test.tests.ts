import { CreatorTester } from "../creator-tester";
import {
  TabTestPlugin,
  TestSurveyTabViewModel
} from "../../src/components/tabs/test";
import { IAction, ListModel } from "survey-core";

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
  const pageList: ListModel = model.actions.filter(
    (item: IAction) => item.id === "pageSelector"
  )[0].popupModel.contentComponentData.model;
  expect(pageList.selectedItem.data).toEqual(model.activePage);
  const nextPage: IAction = model.actions.filter(
    (item: IAction) => item.id === "nextPage"
  )[0];
  nextPage.action();
  expect(pageList.selectedItem.data).toEqual(model.activePage);
  const prevPage: IAction = model.actions.filter(
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
