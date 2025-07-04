import { CreatorTester } from "../creator-tester";
import { TestSurveyTabViewModel } from "../../src/components/tabs/test";
import { SurveyResultsItemModel, SurveyResultsModel } from "../../src/components/results";
import { IAction, ListModel, Question, QuestionDropdownModel, SurveyModel, _setIsTouch, Action, PopupDropdownViewModel, settings as surveySettings } from "survey-core";
import { TabTestPlugin } from "../../src/components/tabs/test-plugin";
import { SurveySimulatorModel, simulatorDevices } from "../../src/components/simulator";
import { editorLocalization, getLocString } from "../../src/editorLocalization";
export * from "../../src/localization/german";
import { registerSurveyTheme } from "../../src/components/tabs/theme-model";
import SurveyThemes from "survey-core/themes";
registerSurveyTheme(SurveyThemes);
import "survey-core/survey.i18n";

function getTestModel(creator: CreatorTester): TestSurveyTabViewModel {
  if (creator.activeTab !== "test") {
    creator.activeTab = "test";
  }
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
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
  const languageSelectorAction = testPlugin["languageSelectorAction"];
  const languageSelectorActionList = languageSelectorAction.data;

  expect(languageSelectorActionList.actions).toHaveLength(2);
  expect(languageSelectorActionList.actions[0].id).toEqual("en");
  expect(languageSelectorActionList.actions[1].id).toEqual("de");
  expect(languageSelectorActionList.actions[1].title).toEqual("Deutsch");
  expect(model.activeLanguage).toEqual("en");
  let langActions = creator.toolbar.actions.filter((action) => action.id === "languageSelector");
  expect(langActions).toHaveLength(1);
  let langAction = langActions[0];
  expect(langAction).toBeTruthy();
  expect(langAction.title).toEqual("English");
  languageSelectorActionList.onItemClick(languageSelectorActionList.actions.filter(act => act.id === "de")[0]);
  expect(model.survey.locale).toEqual("de");
  expect(langAction.title).toEqual("Deutsch");

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
  const languageSelectorAction = testPlugin["languageSelectorAction"];
  const languageSelectorActionList = languageSelectorAction.data;

  expect(languageSelectorActionList.actions).toHaveLength(3);
  expect(languageSelectorActionList.actions[0].id).toEqual("en");
  expect(languageSelectorActionList.actions[1].id).toEqual("de");
  expect(languageSelectorActionList.actions[1].title).toEqual("Deutsch");
  expect(languageSelectorActionList.actions[2].id).toEqual("ff");
  expect(languageSelectorActionList.actions[2].title).toEqual("ff");
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
test("Enable/disable nextPage action on page visibility change and page actions, Bug#4536", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "text",
            name: "q2",
            visibleIf: "{q1} = 2"
          }
        ]
      }
    ]
  };
  const model: TestSurveyTabViewModel = getTestModel(creator);
  const pageList: ListModel = model.pageActions.filter((item: IAction) => item.id === "pageSelector")[0].popupModel.contentComponentData.model;
  expect(pageList.actions).toHaveLength(2);
  expect(pageList.actions[0].title).toBe("Page 1");
  expect(pageList.actions[1].title).toBe("Page 2");
  expect(pageList.actions[1].enabled).toBeFalsy();
  const nextPage: IAction = model.pageActions.filter((item: IAction) => item.id === "nextPage")[0];
  expect(nextPage.enabled).toBeFalsy();
  model.survey.setValue("q1", 2);
  expect(pageList.actions[1].enabled).toBeTruthy();
  expect(nextPage.enabled).toBeTruthy();
  model.survey.setValue("q1", 3);
  expect(pageList.actions[1].enabled).toBeFalsy();
  expect(nextPage.enabled).toBeFalsy();
});
test("Page action title when the preview shows only, Bug#5277", (): any => {
  const creator: CreatorTester = new CreatorTester({
    showJSONEditorTab: false,
    showDesignerTab: false
  });
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "q1"
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "text",
            name: "q2",
          }
        ]
      }
    ]
  };
  expect(creator.activeTab).toEqual("preview");
  const model: TestSurveyTabViewModel = getTestModel(creator);
  const pageSelectorAction = model.pageActions.filter((item: IAction) => item.id === "pageSelector")[0];
  expect(pageSelectorAction.title).toEqual("Page 1");
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
test("Hide similatorAction on mobile devices", (): any => {
  let creator: CreatorTester = new CreatorTester();
  creator.isTouch = true;
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  creator.makeNewViewActive("test");
  let similatorAction = creator.toolbar.actions.filter((action) => action.id === "deviceSelector")[0];
  expect(similatorAction).toBeTruthy();
  expect(similatorAction.visible).toBeFalsy();

  let orientationSelectorAction = creator.toolbar.actions.filter((action) => action.id === "orientationSelector")[0];
  expect(orientationSelectorAction).toBeTruthy();
  expect(orientationSelectorAction.visible).toBeFalsy();
});
test("Check popup viewType", (): any => {
  _setIsTouch(true);
  const creator: CreatorTester = new CreatorTester();
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.JSON = { elements: [{ type: "dropdown", name: "q1", choices: ["Item1", "Item2", "Item3"] }] };
  creator.makeNewViewActive("test");
  const model: TestSurveyTabViewModel = testPlugin.model;
  const question = <QuestionDropdownModel>model.survey.getAllQuestions()[0];
  model.survey.onOpenDropdownMenu.add((_, options) => {
    expect(options.menuType).toEqual("popup");
  });

  question.dropdownListModel.popupModel.show();
  expect(question.dropdownListModel.popupModel.isVisible).toBeTruthy();
  _setIsTouch(false);
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
  const pageList: ListModel = model.pageActions.filter((item: IAction) => item.id === "pageSelector")[0].popupModel.contentComponentData.model;
  const pagesActions = pageList.actions;
  expect(pagesActions).toHaveLength(3);
  expect(pagesActions[0].enabled).toBeTruthy();
  expect(pagesActions[1].enabled).toBeTruthy();
  expect(pagesActions[2].enabled).toBeFalsy();
  expect(pagesActions[2].visible).toEqual(true);
  model.survey.pages[1].visible = false;
  expect(pagesActions[1].enabled).toBeFalsy();
  expect(pagesActions[1].visible).toEqual(true);
  model.survey.pages[1].visible = true;
  expect(pagesActions[1].enabled).toBeTruthy();
  expect(pagesActions[2].visible).toEqual(true);
});
test("Hide page actions if survey is not in running state", (): any => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { name: "page1", questions: [{ type: "text", name: "q1" }] },
      { name: "page2", questions: [{ type: "text", name: "q2" }] },
      { name: "page3" }
    ]
  };
  const model = getTestModel(creator);
  expect(model.pageActions[1].visible).toBeTruthy();
  expect(model.pageActions[2].visible).toBeTruthy();
  model.survey.showPreview();
  expect(model.pageActions[1].visible).toBeFalsy();
  expect(model.pageActions[2].visible).toBeFalsy();
  model.survey.cancelPreview();
  expect(model.pageActions[1].visible).toBeTruthy();
  expect(model.pageActions[2].visible).toBeTruthy();
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
    if (options.reason === "survey-tester" && options.area === "preview-tab:page-list") {
      const survey = options.obj.survey;
      const index = survey.pages.indexOf(options.obj);
      options.displayName = (index + 1).toString() + ". " + options.displayName;
    }
    if (options.reason === "survey-tester-selected" && options.area === "preview-tab:selected-page") {
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

test("pageSelector if page title with markup", (): any => {
  var creator = new CreatorTester();
  creator.JSON = {
    pages: [
      { name: "page1", title: "<i>Page 1</i>", questions: [{ type: "text", name: "q1" }] },
      { name: "page2", title: "<i>Page 2</i>", questions: [{ type: "text", name: "q2" }] },
    ]
  };
  var model = getTestModel(creator);
  expect(model.pageListItems).toHaveLength(2);
  expect(model.pageListItems[0].title).toEqual("Page 1");
  expect(model.pageListItems[1].title).toEqual("Page 2");
  const selectedPage: IAction = model.pageActions.filter((item: IAction) => item.id === "pageSelector")[0];
  expect(selectedPage.title).toEqual("Page 1");
  model.survey.nextPage();
  expect(selectedPage.title).toEqual("Page 2");
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
  expect(model.simulator.getRootCss().includes("svd-simulator-main--frame")).toBeFalsy();
  model.simulator.device = "iPhone15";
  expect(model.simulator.getRootCss().includes("svd-simulator-main--frame")).toBeTruthy();
});
test("Simulator in iphone15", (): any => {
  let creator: CreatorTester = new CreatorTester();
  let model: TestSurveyTabViewModel = getTestModel(creator);
  model.simulator.device = "iPhone15";
  expect(model.simulator.simulatorFrame.deviceWidth).toEqual(852);
  expect(model.simulator.simulatorFrame.deviceHeight).toEqual(393);
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
  const action = creator.getActionBarItem("showInvisible");
  expect(action).toBeFalsy();
});
test("invisibleToggleAction title", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  creator.makeNewViewActive("test");
  const action = creator.getActionBarItem("showInvisible");
  expect(action.title).toEqual("Show invisible elements");
});
test("invisibleToggleAction state change", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1"
      }
    ]
  };
  creator.makeNewViewActive("test");
  const action = creator.getActionBarItem("showInvisible") as Action;
  expect(action.active).toBeFalsy();
  action.action();
  expect(action.active).toBeTruthy();
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
test("Check zoom in mobile preview", (): any => {
  const creator: CreatorTester = new CreatorTester();
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.makeNewViewActive("test");
  const simulator: SurveySimulatorModel = testPlugin.model.simulator;
  simulator.resetZoomParameters();

  expect(simulator.zoomScale).toEqual(1);
  simulator.changeZoomScale("up");
  expect(simulator.zoomScale).toEqual(1.01);
  simulator.changeZoomScale("up");
  expect(simulator.zoomScale).toEqual(1.0201);
  simulator.changeZoomScale("down");
  expect(simulator.zoomScale).toEqual(1.01);
  simulator.changeZoomScale("up");
  expect(simulator.zoomScale).toEqual(1.0201);
  simulator.changeZoomScale("zero");
  expect(simulator.zoomScale).toEqual(1);

  simulator.changeZoomScale("up");
  simulator.changeZoomScale("up");
  expect(simulator.zoomScale).toEqual(1.0201);
  simulator.resetZoomParameters();
  expect(simulator.zoomScale).toEqual(1);
});
test("Show the start page and apply navigation for it", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "question1",
            isRequired: true
          }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "text",
            "name": "question2"
          }
        ]
      },
      {
        "name": "page3",
        "elements": [
          {
            "type": "text",
            "name": "question3"
          }
        ]
      }
    ],
    "firstPageIsStartPage": true
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const model: TestSurveyTabViewModel = testPlugin.model;
  expect(model.pageListItems).toHaveLength(3);
  expect(model.activePage.name).toEqual("page1");
  expect(model.simulator.survey.state).toEqual("starting");
  expect(model.simulator.survey.activePage.name).toEqual("page1");
  expect(model.prevPageAction.enabled).toBeFalsy();
  model.nextPageAction.action();
  expect(model.simulator.survey.state).toEqual("running");
  expect(model.simulator.survey.activePage.name).toEqual("page2");
  model.nextPageAction.action();
  expect(model.simulator.survey.state).toEqual("running");
  expect(model.simulator.survey.activePage.name).toEqual("page3");
  model.prevPageAction.action();
  expect(model.simulator.survey.state).toEqual("running");
  expect(model.simulator.survey.activePage.name).toEqual("page2");
  expect(model.prevPageAction.enabled).toBeTruthy();
  model.prevPageAction.action();
  expect(model.simulator.survey.state).toEqual("starting");
  expect(model.simulator.survey.activePage.name).toEqual("page1");
  expect(model.prevPageAction.enabled).toBeFalsy();
});
test("Prev/Next actions enabled/disabled", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    title: {
      default: "My Survey",
      de: "Meine Umfrage"
    },
    pages: [{
      name: "page1",
      elements: [{
        type: "checkbox",
        name: "string_editor",
        choices: ["item1", "item2", "item3"]
      },
      {
        type: "text",
        name: "hidden_question",
        visible: false
      }],
      title: {
        default: "First page",
        de: "Erste Seite"
      }
    },
    {
      name: "page2",
      elements: [{
        type: "text",
        name: "question1"
      }],
      title: {
        default: "Second page",
        de: "Zweite Seite"
      }
    },
    {
      name: "page3",
      elements: [{
        type: "text",
        name: "question2"
      }]
    }]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const model: TestSurveyTabViewModel = testPlugin.model;
  expect(model.pageListItems).toHaveLength(3);
  expect(model.activePage.name).toEqual("page1");
  expect(model.simulator.survey.state).toEqual("running");
  expect(model.simulator.survey.activePage.name).toEqual("page1");
  expect(model.prevPageAction.enabled).toBeFalsy();
  expect(model.nextPageAction.enabled).toBeTruthy();
  model.nextPageAction.action();
  expect(model.simulator.survey.activePage.name).toEqual("page2");
  expect(model.prevPageAction.enabled).toBeTruthy();
  expect(model.nextPageAction.enabled).toBeTruthy();
  model.nextPageAction.action();
  expect(model.simulator.survey.activePage.name).toEqual("page3");
  expect(model.prevPageAction.enabled).toBeTruthy();
  expect(model.nextPageAction.enabled).toBeFalsy();
  model.activePage = model.survey.pages[1];
  expect(model.simulator.survey.activePage.name).toEqual("page2");
  expect(model.prevPageAction.enabled).toBeTruthy();
  expect(model.nextPageAction.enabled).toBeTruthy();
  model.activePage = model.survey.pages[0];
  expect(model.simulator.survey.activePage.name).toEqual("page1");
  expect(model.prevPageAction.enabled).toBeFalsy();
  expect(model.nextPageAction.enabled).toBeTruthy();
  model.activePage = model.survey.pages[2];
  expect(model.simulator.survey.activePage.name).toEqual("page3");
  expect(model.prevPageAction.enabled).toBeTruthy();
  expect(model.nextPageAction.enabled).toBeFalsy();
});
test("isPageToolbarVisible & firstPage is started, #6624", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "q1" }] },
      { elements: [{ type: "text", name: "q2" }] },
      { elements: [{ type: "text", name: "q3" }] }
    ],
    firstPageIsStartPage: true
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const model: TestSurveyTabViewModel = testPlugin.model;
  model.pages.flushUpdates();
  expect(model.pageListItems).toHaveLength(3);
  expect(model.survey.state).toBe("starting");
  expect(model.isPageToolbarVisible).toBeTruthy();
  expect(model.nextPageAction.enabled).toBeTruthy();
  expect(model.prevPageAction.enabled).toBeFalsy();
  (<any>model.selectPageAction.popupModel).onSelectionChanged(model.pageListItems[1]);
  model.pages.flushUpdates();
  expect(model.survey.state).toBe("running");
  expect(model.isPageToolbarVisible).toBeTruthy();
  expect(model.nextPageAction.enabled).toBeTruthy();
  expect(model.prevPageAction.enabled).toBeTruthy();
});

test("Default mobile orientation", (): any => {
  const creator: CreatorTester = new CreatorTester();
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.makeNewViewActive("test");
  const model: TestSurveyTabViewModel = testPlugin.model;
  expect(creator.previewOrientation).toBe("landscape");
  expect(model.simulator.landscape).toBeTruthy();

  const creator2: CreatorTester = new CreatorTester({ previewOrientation: "portrait" });
  const testPlugin2: TabTestPlugin = <TabTestPlugin>creator2.getPlugin("test");
  creator2.makeNewViewActive("test");
  const model2: TestSurveyTabViewModel = testPlugin2.model;
  expect(creator2.previewOrientation).toBe("portrait");
  expect(model2.simulator.landscape).toBeFalsy();

  creator2.previewOrientation = "landscape";
  creator2.makeNewViewActive("test");
  expect(model2.simulator.landscape).toBeFalsy();

  const creator3: CreatorTester = new CreatorTester({ previewOrientation: "landscape" });
  const testPlugin3: TabTestPlugin = <TabTestPlugin>creator3.getPlugin("test");
  creator3.makeNewViewActive("test");
  const model3: TestSurveyTabViewModel = testPlugin3.model;
  expect(model3.simulator.landscape).toBeTruthy();
});

test("Apply theme from theme builder", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.theme = <any>{
    "cssVariables": {
      "--sjs-general-backcolor": "#252525",
      "--sjs-general-backcolor-dark": "#606060"
    },
    "themeName": "playful",
    "themePalette": "dark",
    "isCompact": true
  };
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };

  creator.makeNewViewActive("test");
  expect(testPlugin["changeThemeAction"]).toBeUndefined();

  const model: TestSurveyTabViewModel = testPlugin.model;
  expect(model.survey.themeVariables["--sjs-general-backcolor"]).toBe("#252525");
  expect(model.survey["isCompact"]).toBeTruthy();
});

test("Check that popups inside survey are closed when scrolling container", (): any => {
  const creator: CreatorTester = new CreatorTester();
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.JSON = { elements: [{ type: "dropdown", name: "q1", choices: ["Item1", "Item2", "Item3"] }] };

  creator.makeNewViewActive("test");

  const model: TestSurveyTabViewModel = testPlugin.model;
  const question = <QuestionDropdownModel>model.survey.getAllQuestions()[0];
  question.dropdownListModel.popupModel.show();
  expect(model.survey["onScrollCallback"]).toBeDefined();
  expect(question.dropdownListModel.popupModel.isVisible).toBeTruthy();
  model.onScroll();
  expect(question.dropdownListModel.popupModel.isVisible).toBeFalsy();
  expect(model.survey["onScrollCallback"]).toBeUndefined();
  model.onScroll();
});

test("Creator footer action bar: only preview tab", (): any => {
  const buttonOrder = ["svd-designer", "svd-preview", "prevPage", "nextPage", "showInvisible"].join("|");
  const creator = new CreatorTester({ showDesignerTab: false, showPreviewTab: true, showThemeTab: false, showLogicTab: true });
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  expect(creator.activeTab).toEqual("preview");

  creator.isMobileView = true;
  creator.footerToolbar.flushUpdates();
  expect(creator.footerToolbar.actions.length).toEqual(7);
  expect(creator.footerToolbar.visibleActions.length).toEqual(5);
  const receivedOrder = creator.footerToolbar.visibleActions.map(a => a.id).join("|");
  expect(receivedOrder).toEqual(buttonOrder);
  expect(creator.footerToolbar.visibleActions[0].active).toBeFalsy();
  expect(creator.footerToolbar.visibleActions[1].active).toBeTruthy();

  creator.activeTab = "logic";
  creator.footerToolbar.flushUpdates();
  expect(creator.footerToolbar.actions.length).toEqual(7);
  expect(creator.footerToolbar.visibleActions.length).toEqual(0);
});

test("Update theme in active test/preview tab 1", (): any => {
  const creator = new CreatorTester({ showDesignerTab: false, showPreviewTab: true, showJSONEditorTab: false, showThemeTab: false, showLogicTab: false });
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.JSON = {
    pages: [
      { elements: [{ type: "text", name: "question1" }] },
      { elements: [{ type: "text", name: "question2" }] }
    ]
  };
  creator.theme = {
    cssVariables: {
      test: "testVarValue"
    },
  };
  expect(creator.activeTab).toEqual("preview");
  expect(testPlugin.model.survey.themeVariables["test"]).toBe("testVarValue");
});
test("Update theme in active test/preview tab 2", (): any => {
  const creator = new CreatorTester();
  let testBodyCss = "";
  let previewBodyCss = "";
  let instanceBodyCss = "";
  let instanceArea = "";
  creator.onTestSurveyCreated.add((sender, options) => {
    testBodyCss = options.survey.css.body;
  });
  creator.onPreviewSurveyCreated.add((sender, options) => {
    previewBodyCss = options.survey.css.body;
  });
  creator.onSurveyInstanceCreated.add((sender, options) => {
    if (options.reason === "preview" || options.reason === "test") {
      instanceBodyCss = options.survey.css.body;
      instanceArea = options.area;
    }
  });
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  creator.activeTab = "test";
  expect(testBodyCss).toEqual("sd-body");
  expect(previewBodyCss).toEqual("sd-body");
  expect(instanceBodyCss).toEqual("sd-body");
  expect(instanceArea).toEqual("preview-tab");
});

test("showResults default behavior", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
      }
    ]
  };
  expect(creator.previewShowResults).toBeTruthy();
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();

  const model: TestSurveyTabViewModel = testPlugin.model;
  expect(model.showResults).toBeFalsy();

  model.survey.doComplete();
  expect(model.showResults).toBeTruthy();
});

test("showResults with previewShowResults false", (): any => {
  const creator: CreatorTester = new CreatorTester({ previewShowResults: false });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
      }
    ]
  };
  expect(creator.previewShowResults).toBeFalsy();
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();

  const model: TestSurveyTabViewModel = testPlugin.model;
  expect(model.showResults).toBeFalsy();

  model.survey.doComplete();
  expect(model.showResults).toBeFalsy();
});

test("devices selector dropdown items default order", (): any => {
  const creator: CreatorTester = new CreatorTester({ previewShowResults: false });
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
      }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();

  const deviceSelectorAction = testPlugin["deviceSelectorAction"];
  const dropdownDeviceActions = deviceSelectorAction.data.actions as IAction[];
  expect(dropdownDeviceActions.length).toBe(9);
  expect(dropdownDeviceActions[0].id).toBe("desktop");
  expect(dropdownDeviceActions[0].visibleIndex).toBe(Number.MAX_VALUE);
  expect(dropdownDeviceActions[7].id).toBe("androidTablet");
  expect(dropdownDeviceActions[7].visibleIndex).toBe(Number.MAX_VALUE);
  expect(dropdownDeviceActions[8].id).toBe("microsoftSurface");
  expect(dropdownDeviceActions[8].visibleIndex).toBe(Number.MAX_VALUE);
});
test("change devices selector dropdown items order", (): any => {
  try {
    simulatorDevices.microsoftSurface.visibleIndex = 0;
    simulatorDevices.androidTablet.visibleIndex = 1;

    const creator: CreatorTester = new CreatorTester({ previewShowResults: false });
    creator.JSON = {
      questions: [
        {
          type: "text",
          name: "q1",
        }
      ]
    };
    const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
    testPlugin.activate();

    const deviceSelectorAction = testPlugin["deviceSelectorAction"];
    const dropdownDeviceActions = deviceSelectorAction.data.actions as IAction[];
    expect(dropdownDeviceActions.length).toBe(9);
    expect(dropdownDeviceActions[0].id).toBe("microsoftSurface");
    expect(dropdownDeviceActions[0].visibleIndex).toBe(0);
    expect(dropdownDeviceActions[1].id).toBe("androidTablet");
    expect(dropdownDeviceActions[1].visibleIndex).toBe(1);
    expect(dropdownDeviceActions[2].id).toBe("desktop");
    expect(dropdownDeviceActions[2].visibleIndex).toBe(Number.MAX_VALUE);
    expect(dropdownDeviceActions[8].id).toBe("androidPhone");
    expect(dropdownDeviceActions[8].visibleIndex).toBe(Number.MAX_VALUE);
  } finally {
    simulatorDevices.microsoftSurface.visibleIndex = undefined;
    simulatorDevices.androidTablet.visibleIndex = undefined;
  }
});
test("Mark previous pages as passed if selectPageAction selects non-subsequent page", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "text",
            name: "question1"
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
            name: "question3"
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
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.makeNewViewActive("test");
  const model: TestSurveyTabViewModel = testPlugin.model;

  const selectPageAction = model.selectPageAction;
  const listModel = selectPageAction.data as ListModel;

  expect(selectPageAction).toBeTruthy();
  expect(selectPageAction.visible).toBeTruthy();
  expect(selectPageAction.data.actions.length).toBe(4);

  expect(model.survey.pages[0].passed).toBeFalsy();
  expect(model.survey.pages[1].passed).toBeFalsy();
  expect(model.survey.pages[2].passed).toBeFalsy();
  expect(model.survey.pages[3].passed).toBeFalsy();

  listModel.onItemClick(listModel.actions[3]);

  expect(model.survey.pages[0].passed).toBeTruthy();
  expect(model.survey.pages[1].passed).toBeTruthy();
  expect(model.survey.pages[2].passed).toBeTruthy();
  expect(model.survey.pages[3].passed).toBeFalsy();
});

test("Suppress NavigateToUrl notification using allow option", (): any => {
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    questions: [
      {
        type: "text",
        name: "q1",
      }
    ],
    "navigateToUrl": "javascript:alert(2)",
  };

  let allowNavigate = true;
  let onNavigateToUrlLog = "";
  creator.onSurveyInstanceCreated.add((sender, options) => {
    if (options.area === "theme-tab" || options.area === "preview-tab" || options.area === "design-tab") {
      options.survey.onNavigateToUrl.add((sender, options) => {
        onNavigateToUrlLog += "->" + options.url;
        options.allow = allowNavigate;
      });
    }
  });

  let notificationsLog = "";
  creator.onNotify.add((sender, options) => {
    notificationsLog += "->" + options.message;
  });

  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  const model: TestSurveyTabViewModel = testPlugin.model;

  expect(onNavigateToUrlLog).toBe("");
  expect(notificationsLog).toBe("");

  model.survey.doComplete();
  expect(onNavigateToUrlLog).toBe("->javascript:alert(2)");
  expect(notificationsLog).toBe("->You had to navigate to 'javascript:alert(2)'.");

  let testAgain = model.testAgainAction;
  expect(testAgain).toBeTruthy();
  testAgain.action();

  allowNavigate = false;

  model.survey.doComplete();
  expect(onNavigateToUrlLog).toBe("->javascript:alert(2)->javascript:alert(2)");
  expect(notificationsLog).toBe("->You had to navigate to 'javascript:alert(2)'.");
});
test("The Preview Survey button text is not translated Bug#6016", (): any => {
  const deText = "Testumfrage wiederholen";
  const loc: any = editorLocalization.getLocale("de");
  expect(loc).toBeTruthy();
  if (!loc.ed) loc.ed = {};
  loc.ed.testSurveyAgain = deText;
  const creator: CreatorTester = new CreatorTester();
  editorLocalization.currentLocale = "en";
  expect(creator.locale).toBe("en");
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  expect(testPlugin.model).toBeFalsy();
  creator.locale = "de";
  creator.activeTab = "test";
  expect(creator.locale).toBe("de");
  expect(editorLocalization.currentLocale).toBe("de");
  expect(getLocString("ed.testSurveyAgain")).toBe(deText);
  expect(testPlugin.model.testAgainAction.title).toBe(deText);
  creator.locale = "";
});
test("Preview tab: default device and save current device", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");

  expect(creator.previewDevice).toBe("desktop");
  expect(testPlugin.previewDevice).toBe("");

  testPlugin.activate();
  expect(testPlugin.previewDevice).toBe("desktop");
  expect(testPlugin.model.simulator.device).toBe("desktop");

  testPlugin.model.simulator.device = "iPhone15";
  expect(testPlugin.previewDevice).toBe("iPhone15");

  testPlugin.deactivate();
  expect(testPlugin.previewDevice).toBe("iPhone15");

  testPlugin.activate();
  expect(testPlugin.model.simulator.device).toBe("iPhone15");
  expect(testPlugin.previewDevice).toBe("iPhone15");

  testPlugin.deactivate();
  testPlugin.previewDevice = "iPhone15Plus";

  testPlugin.activate();
  expect(testPlugin.model.simulator.device).toBe("iPhone15Plus");
});

test("Preview tab: use theme palatte corresponding cretor theme palette if theme is not selected", (): any => {
  const creator: CreatorTester = new CreatorTester({ showThemeTab: true });
  creator.JSON = { questions: [{ type: "text", name: "q1" }] };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");

  expect(creator.preferredColorPalette).toBe("light");

  testPlugin.activate();
  expect(testPlugin.model.simulator.survey["themeName"]).toBe("default");
  expect(testPlugin.model.simulator.survey["colorPalette"]).toBe("light");

  testPlugin.deactivate();
  creator.syncTheme({ cssVariables: {} }, false);
  expect(creator.preferredColorPalette).toBe("dark");

  testPlugin.activate();
  expect(testPlugin.model.simulator.survey["themeName"]).toBe("default");
  expect(testPlugin.model.simulator.survey["colorPalette"]).toBe("dark");

  testPlugin.deactivate();
  creator.theme = {
    themeName: "my",
    colorPalette: "dark",
    cssVariables: {}
  };
  creator.syncTheme({ cssVariables: {} }, true);
  expect(creator.preferredColorPalette).toBe("light");

  testPlugin.activate();
  expect(testPlugin.model.simulator.survey["themeName"]).toBe("my");
  expect(testPlugin.model.simulator.survey["colorPalette"]).toBe("dark");
});
test("Page Selector - The selected element is not updated when navigating between survey pages", (): any => {
  surveySettings.animationEnabled = false;
  const creator: CreatorTester = new CreatorTester();
  creator.JSON = {
    pages: [
      { name: "page1", elements: [{ type: "text", name: "question1" }] },
      { name: "page2", elements: [{ type: "text", name: "question2" }] },
      { name: "page3", elements: [{ type: "text", name: "question3" }] },
      { name: "page4", elements: [{ type: "text", name: "question4" }] }
    ]
  };
  const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  creator.switchTab("test");
  const model: TestSurveyTabViewModel = testPlugin.model;
  const selectPageAction = model.selectPageAction;
  const popupViewModel = new PopupDropdownViewModel(selectPageAction.popupModel); // need for popupModel.onShow
  const listModel = selectPageAction.popupModel.contentComponentData.model as ListModel;
  expect(model.survey.currentPage.name).toBe("page1");

  model.survey.nextPage();
  model.survey.nextPage();
  expect(model.survey.currentPage.name).toBe("page3");

  selectPageAction.action();
  expect(listModel.selectedItem.id).toBe("page3");
  expect(listModel.isItemSelected(listModel.actions[2])).toBeTruthy();

  surveySettings.animationEnabled = true;
});

test("Check css variable sv-popup-overlay-height", (): any => {
  const rootElement = document.createElement("div");
  try {
    rootElement.style.setProperty("width", "1200px");
    rootElement.style.setProperty("height", "800px");
    const simulatorElement = document.createElement("div");
    simulatorElement.className = "svd-simulator-content";
    rootElement.appendChild(simulatorElement);

    const creator: CreatorTester = new CreatorTester();
    creator.setRootElement(rootElement);
    const testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
    creator.JSON = { elements: [{ type: "dropdown", name: "q1", choices: ["Item1", "Item2", "Item3"] }] };
    creator.switchTab("test");
    const simulator: SurveySimulatorModel = testPlugin.model.simulator;
    expect(simulatorElement.style.getPropertyValue("--sv-popup-overlay-height")).toBeFalsy();

    simulator.device = "iPhone15";
    expect(simulatorElement.style.getPropertyValue("--sv-popup-overlay-height")).toBe("100%");

    simulator.landscape = true;
    expect(simulatorElement.style.getPropertyValue("--sv-popup-overlay-height")).toBe("100%");

    simulator.device = "iPadMini";
    expect(simulatorElement.style.getPropertyValue("--sv-popup-overlay-height")).toBe("614.4px");

    simulator.landscape = false;
    expect(simulatorElement.style.getPropertyValue("--sv-popup-overlay-height")).toBe("819.2px");

    simulator.device = "desktop";
    expect(simulatorElement.style.getPropertyValue("--sv-popup-overlay-height")).toBeFalsy();

  } finally {
    rootElement.remove();
  }
});