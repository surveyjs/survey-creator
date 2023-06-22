import { CreatorTester } from "../creator-tester";
import { TestSurveyTabViewModel } from "../../src/components/tabs/test";
import { SurveyResultsItemModel, SurveyResultsModel } from "../../src/components/results";
import { IAction, ListModel, Question, QuestionDropdownModel, SurveyModel, StylesManager } from "survey-core";
import { TabTestPlugin } from "../../src/components/tabs/test-plugin";
import { SurveySimulatorModel } from "../../src/components/simulator";
import { editorLocalization } from "../../src/editorLocalization";

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
  model.simulator.device = "iPhone6";
  expect(model.simulator.getRootCss().includes("svd-simulator-main--frame")).toBeTruthy();
});
test("Simulator in iphone6", (): any => {
  let creator: CreatorTester = new CreatorTester();
  let model: TestSurveyTabViewModel = getTestModel(creator);
  model.simulator.device = "iPhone6";
  expect(model.simulator.simulatorFrame.deviceWidth).toEqual(667);
  expect(model.simulator.simulatorFrame.deviceHeight).toEqual(375);
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
    "firstPageIsStarted": true
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
test("Change theme action hidden", (): any => {
  TabTestPlugin.prototype["filterThemeMapper"] = (themeMapper: Array<any>): Array<any> => { return themeMapper; };
  var oldF = StylesManager.getIncludedThemeCss;
  StylesManager.getIncludedThemeCss = (): Array<any> => { return StylesManager.getAvailableThemes(); };
  let creator: CreatorTester = new CreatorTester();
  let testPlugin: TabTestPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  expect(testPlugin["changeThemeAction"]).toBeDefined();
  creator = new CreatorTester({ allowChangeThemeInPreview: false });
  testPlugin = <TabTestPlugin>creator.getPlugin("test");
  testPlugin.activate();
  expect(testPlugin["changeThemeAction"]).toBeUndefined();

  StylesManager.getIncludedThemeCss = oldF;
});

test("Themes switcher list actions", (): any => {
  TabTestPlugin.prototype["filterThemeMapper"] = (themeMapper: Array<any>): Array<any> => { return themeMapper; };
  var oldF = StylesManager.getIncludedThemeCss;
  StylesManager.getIncludedThemeCss = (): Array<any> => { return StylesManager.getAvailableThemes(); };

  const creator = new CreatorTester();
  const themeAction = creator.toolbar.getActionById("themeSwitcher");
  expect(themeAction).toBeTruthy();
  expect(themeAction.title).toEqual("Default");
  const listModel = <ListModel>themeAction.popupModel.contentComponentData.model;
  const actions = listModel.actions;
  expect(actions).toHaveLength(3);
  expect(actions[0].title).toEqual("Default");
  expect(actions[1].title).toEqual("Modern");
  expect(actions[2].title).toEqual("Default (legacy)");

  StylesManager.getIncludedThemeCss = oldF;
});

test("Change test themes list actions titles on changing locale", (): any => {
  TabTestPlugin.prototype["filterThemeMapper"] = (themeMapper: Array<any>): Array<any> => { return themeMapper; };
  var oldF = StylesManager.getIncludedThemeCss;
  StylesManager.getIncludedThemeCss = (): Array<any> => { return StylesManager.getAvailableThemes(); };
  const deutschStrings: any = {
    ed: {
      defaultV2Theme: "Default de",
      modernTheme: "Modern de"
    }
  };
  editorLocalization.locales["de"] = deutschStrings;
  const creator = new CreatorTester();
  const themeAction = creator.toolbar.getActionById("themeSwitcher");
  expect(themeAction).toBeTruthy();
  expect(themeAction.title).toEqual("Default");
  const listModel = <ListModel>themeAction.popupModel.contentComponentData.model;
  const actions = listModel.actions;
  expect(actions).toHaveLength(3);
  const modernAction = actions.filter(act => act.id === "modern_themeSwitcher")[0];
  expect(modernAction.title).toEqual("Modern");
  creator.locale = "de";
  expect(themeAction.title).toEqual("Default de");
  expect(modernAction.getLocale()).toEqual("de");
  expect(modernAction.title).toEqual("Modern de");
  creator.locale = "";
  expect(themeAction.title).toEqual("Default");
  expect(modernAction.title).toEqual("Modern");

  listModel.onItemClick(modernAction);
  expect(themeAction.title).toEqual("Modern");
  creator.locale = "de";
  expect(themeAction.title).toEqual("Modern de");
  creator.locale = "";
  expect(themeAction.title).toEqual("Modern");

  StylesManager.getIncludedThemeCss = oldF;
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