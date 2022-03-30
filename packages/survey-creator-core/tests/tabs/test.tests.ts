import { CreatorTester } from "../creator-tester";
import { TestSurveyTabViewModel } from "../../src/components/tabs/test";
import { SurveyResultsItemModel, SurveyResultsModel } from "../../src/components/results";
import { IAction, ListModel } from "survey-core";
import { TabTestPlugin } from "../../src/components/tabs/test-plugin";

import "survey-core/survey.i18n";

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
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const model: TestSurveyTabViewModel = testPlugin.model;
  expect(testPlugin["languageListModel"].actions).toHaveLength(2);
  expect(testPlugin["languageListModel"].actions[0].id).toEqual("en");
  expect(testPlugin["languageListModel"].actions[1].id).toEqual("de");
  expect(testPlugin["languageListModel"].actions[1].title).toEqual("deutsch");
  expect(model.activeLanguage).toEqual("en");
  let langActions = creator.toolbar.actions.filter((action) => action.id === "languageSelector");
  expect(langActions).toHaveLength(1);
  let langAction = langActions[0];
  expect(langAction).toBeTruthy();
  expect(langAction.title).toEqual("english");
  testPlugin["languageListModel"].selectItem(testPlugin["languageListModel"].actions.filter(act => act.id === "de")[0]);
  expect(model.survey.locale).toEqual("de");
  expect(langAction.title).toEqual("deutsch");

  let testAgain = model.testAgainAction;
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
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const model: TestSurveyTabViewModel = testPlugin.model;
  expect(testPlugin["languageListModel"].actions).toHaveLength(3);
  expect(testPlugin["languageListModel"].actions[0].id).toEqual("en");
  expect(testPlugin["languageListModel"].actions[1].id).toEqual("de");
  expect(testPlugin["languageListModel"].actions[1].title).toEqual("deutsch");
  expect(testPlugin["languageListModel"].actions[2].id).toEqual("ff");
  expect(testPlugin["languageListModel"].actions[2].title).toEqual("ff");
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
  const pageList: ListModel = model.pageActions.filter((item: IAction) => item.id === "pageSelector")[0].popupModel.contentComponentData.model;
  expect(pageList.selectedItem.data).toEqual(model.activePage);
  const nextPage: IAction = model.pageActions.filter((item: IAction) => item.id === "nextPage")[0];
  nextPage.action();
  expect(pageList.selectedItem.data).toEqual(model.activePage);
  const prevPage: IAction = model.pageActions.filter((item: IAction) => item.id === "prevPage")[0];
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
  let testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.makeNewViewActive("test");
  let similatorAction = creator.toolbar.actions.filter((action) => action.id === "deviceSelector")[0];
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
  testPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  similatorAction = creator.toolbar.actions.filter((action) => action.id === "deviceSelector")[0];
  expect(similatorAction).toBeFalsy();
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
    if (options.reason === "survey-tester") {
      const survey = options.obj.survey;
      const index = survey.pages.indexOf(options.obj);
      options.displayName = (index + 1).toString() + ". " + options.displayName;
    }
    if (options.reason === "survey-tester-selected") {
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
test("pages, PageListItems, pageSelector: check page titles", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { name: "page1", questions: [{ type: "text", name: "q1" }] },
      { name: "page2", questions: [{ type: "text", name: "q2" }] },
      { name: "page3", questions: [{ type: "text", name: "q3" }] }
    ]
  };
  const model = getTestModel(creator);
  const selectedPage: () => IAction = () => model.pageActions.filter((item: IAction) => item.id === "pageSelector")[0];

  expect(model.pageListItems).toHaveLength(3);
  expect(model.pageListItems[0].title).toEqual("Page 1");
  expect(model.pageListItems[1].title).toEqual("Page 2");
  expect(model.pageListItems[2].title).toEqual("Page 3");
  expect(selectedPage().title).toEqual("Page 1");

  creator.JSON = {
    pages: [
      { name: "page1", title: "page title 1", questions: [{ type: "text", name: "q1" }] },
      { name: "page2", title: "page title 2", questions: [{ type: "text", name: "q2" }] },
      { name: "page3", questions: [{ type: "text", name: "q3" }] }
    ]
  };
  creator.getPlugin("test").update();
  expect(model.pageListItems[0].title).toEqual("page title 1");
  expect(model.pageListItems[1].title).toEqual("page title 2");
  expect(model.pageListItems[2].title).toEqual("Page 3");
  expect(selectedPage().title).toEqual("page title 1");

  model.survey.nextPage();
  expect(selectedPage().title).toEqual("page title 2");

  model.survey.nextPage();
  expect(selectedPage().title).toEqual("Page 3");
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
test("Simulator in iphone5", (): any => {
  let creator: CreatorTester = new CreatorTester();
  let model: TestSurveyTabViewModel = getTestModel(creator);
  model.simulator.device = "iPhone5";
  expect(model.simulator.simulatorFrame.deviceWidth).toEqual(568);
  expect(model.simulator.simulatorFrame.deviceHeight).toEqual(320);
});
test("Hide Test Again action on leaving Preview", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.makeNewViewActive("test");
  const model: TestSurveyTabViewModel = testPlugin.model;

  let testAgain = model.testAgainAction;
  expect(testAgain).toBeTruthy();
  expect(testAgain.visible).toBeFalsy();
  model.survey.doComplete();
  expect(testAgain.visible).toBeTruthy();
  creator.makeNewViewActive("designer");
  expect(testAgain.visible).toBeFalsy();
});
test("invisibleToggleAction doesn't created, there are no exceptions", (): any => {
  const creator: CreatorTester = new CreatorTester({ showInvisibleElementsInTestSurveyTab: false });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.makeNewViewActive("test");
  const model: TestSurveyTabViewModel = testPlugin.model;

  expect(model.invisibleToggleAction).toBeFalsy();
  model.survey.doComplete();
  expect(model.invisibleToggleAction).toBeFalsy();
});

test("Test correct survey results node levels", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "matrixdynamic",
            name: "Question1",
            defaultValue: [
              {
                "Column 1": [
                  1
                ]
              },
              {
                "Column 1": [
                  2
                ]
              }
            ],
            columns: [
              {
                "name": "Column 1"
              }
            ],
            choices: [
              1,
              2
            ],
            cellType: "checkbox"
          }
        ]
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.makeNewViewActive("test");
  const resultsModel: SurveyResultsModel = new SurveyResultsModel(testPlugin.model.simulator.survey);

  const zeroLvl: SurveyResultsItemModel[] = resultsModel.resultData;
  expect(zeroLvl.length).toEqual(1);
  expect(zeroLvl[0].lvl).toEqual(0);

  const firstLvl: SurveyResultsItemModel[] = zeroLvl[0].items;
  expect(firstLvl.length).toEqual(2);
  expect(firstLvl[0].lvl).toEqual(1);

  const secondLvl: SurveyResultsItemModel[] = firstLvl[0].items;
  expect(secondLvl.length).toEqual(1);
  expect(secondLvl[0].lvl).toEqual(2);
});
