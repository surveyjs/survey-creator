import { simulatorDevices, SimulatorOptions } from "../simulator";

import "./test.scss";
import {
  surveyLocalization,
  IActionBarItem,
  PopupModel,
  ListModel,
  Base,
  propertyArray,
  property,
  PageModel,
  SurveyModel,
} from "survey-core";
import { CreatorBase, ICreatorPlugin } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";

// import template from "./test.html";

// export * from "@survey/creator/components/toolbar";
// export * from "@survey/creator/components/simulator";
// export * from "@survey/creator/components/results";
// export * from "@survey/creator/utils/dropdown";
// export * from "@survey/creator/utils/boolean";
// export * from "@survey/creator/utils/svg-icon";
// export * from "@survey/creator/utils/survey-widget";
// export { SurveySimulatorComponent as SurveySimulatorComponentV1 } from "@survey/creator/components/simulator";
// export { SurveyResultsModel as SurveyResultsModelV1 } from "@survey/creator/components/results";

export class TestSurveyTabViewModel extends Base {
  private json: any;
  @property({ defaultValue: true }) isRunning: boolean;
  @property({
    defaultValue: "desktop",
    onSet: (val: string, target: TestSurveyTabViewModel) => {
      if (!!val) {
        target.simulator.device = val;
      }
    },
  })
  device: string;
  @property({
    onSet: (val: SurveyModel, target: TestSurveyTabViewModel) => {
      if (!!val) {
        target.simulator.survey = val;
      }
    },
  })
  survey: SurveyModel;
  @propertyArray() pages: Array<IActionBarItem>;
  @property({
    onSet: (val: PageModel, target: TestSurveyTabViewModel) => {
      if (!!val) {
        if (target.survey.state == "starting") {
          target.survey.start();
        }
        target.survey.currentPage = val;
      }
    },
  })
  activePage: PageModel;
  @propertyArray() languages: Array<IActionBarItem>;
  @property({
    defaultValue: "",
    onSet: (val: string, target: TestSurveyTabViewModel) => {
      if (target.survey.locale == val) return;
      target.survey.locale = val;
    },
  })
  activeLanguage: string;

  @property({
    defaultValue: false,
    onSet: (val: boolean, target: TestSurveyTabViewModel) => {
      target.survey.showInvisibleElements = val;
    },
  })
  showInvisibleElements;
  @property({ defaultValue: true }) showPagesInTestSurveyTab;
  @property({ defaultValue: true }) showSimulator;
  @property({ defaultValue: true }) showDefaultLanguageInTestSurveyTab;
  @property({ defaultValue: true }) showInvisibleElementsInTestSurveyTab;
  public simulator: SimulatorOptions;
  private pagePopupModel: PopupModel;
  /**
   * The list of action bar items.
   * @see IActionBarItem
   */
  @propertyArray() actions: Array<IActionBarItem>;

  onSurveyCreatedCallback: (survey: SurveyModel) => any;
  constructor(private surveyProvider: CreatorBase<SurveyModel>) {
    super();
    this.simulator = new SimulatorOptions();
    this.languages = this.getLanguages();

    // this.toolbarItems.push({
    //   id: "svd-test-locale-selector",
    //   title: this.localeText,
    //   visible: this.koShowDefaultLanguageInTestSurveyTab,
    //   tooltip: this.localeText,
    //   component: "svd-dropdown",
    //   action: ko.computed({
    //     read: () => this.koActiveLanguage(),
    //     write: (val: any) => this.koActiveLanguage(val),
    //   }),
    //   items: <any>this.koLanguages,
    // });
    var deviceSelectorItems = Object.keys(simulatorDevices)
      .filter((key) => !!simulatorDevices[key].title)
      .map((key) => ({ id: key, title: simulatorDevices[key].title }));
    const devicePopupModel = new PopupModel(
      "sv-list",
      new ListModel(
        deviceSelectorItems,
        (item: any) => {
          this.device = item.id;
          devicePopupModel.toggleVisibility();
        },
        true
      ),
      "top",
      "right"
    );

    const actions: Array<IActionBarItem> = [];
    actions.push({
      id: "deviceSelector",
      css: "sv-action--first sv-action-bar-item--secondary",
      iconName: "icon-change_16x16",
      title: () =>
        simulatorDevices[this.simulator.device].title ||
        this.getLocString("pe.simulator"),
      enabled: this.showSimulator,
      component: "sv-action-bar-item-dropdown",
      action: () => {
        devicePopupModel.toggleVisibility();
      },
      popupModel: devicePopupModel,
    });
    actions.push({
      id: "prevPage",
      css: () =>
        this.survey && !this.survey.isFirstPage
          ? "sv-action-bar-item--secondary"
          : "",
      iconName: "icon-leftarrow_16x16",
      visible: () => this.isRunning,
      enabled: () => this.survey && !this.survey.isFirstPage,
      title: "",
      action: () => {
        this.activePage = this.survey.pages[this.survey.currentPageNo - 1];
      },
    });

    this.pagePopupModel = new PopupModel(
      "sv-list",
      new ListModel(
        this.pages,
        (item: IActionBarItem) => {
          this.activePage = item.data;
          this.pagePopupModel.toggleVisibility();
        },
        true /*,
        ko.computed({
          read: () =>
            pageSelectorItems().filter(
              (item) => item.value === this.activePage
            )[0],
          write: (val) => {},
        })*/
      ),
      "top",
      "center"
    );

    actions.push({
      id: "pageSelector",
      title: () =>
        (this.activePage &&
          surveyProvider.getObjectDisplayName(
            this.activePage,
            "survey-tester"
          )) ||
        this.getLocString("ts.selectPage"),
      visible: () =>
        this.isRunning &&
        this.pages.length > 1 &&
        this.showPagesInTestSurveyTab,
      component: "sv-action-bar-item-dropdown",
      popupModel: this.pagePopupModel,
      action: (newPage) => {
        this.pagePopupModel.toggleVisibility();
      },
    });
    actions.push({
      id: "nextPage",
      css: () =>
        this.survey && !this.survey.isLastPage
          ? "sv-action-bar-item--secondary"
          : "",
      iconName: "icon-rightarrow_16x16",
      visible: () => this.isRunning,
      enabled: () => this.survey && !this.survey.isLastPage,
      title: "",
      action: () => {
        this.activePage = this.survey.pages[this.survey.currentPageNo + 1];
      },
    });
    actions.push({
      id: "showInvisivle",
      css: () =>
        this.showInvisibleElements
          ? "sv-action--last sv-action-bar-item--secondary"
          : "sv-action--last",
      visible: () => this.isRunning,
      title: this.getLocString("ts.showInvisibleElements"),
      iconName: () => {
        if (this.showInvisibleElements) {
          return "icon-switchactive_16x16";
        }
        return "icon-switchinactive_16x16";
      },
      action: () => (this.showInvisibleElements = !this.showInvisibleElements),
    });
    actions.push({
      id: "testSurveyAgain",
      css: "sv-action--last",
      visible: () => !this.isRunning,
      title: this.testSurveyAgainText,
      action: () => {
        this.testAgain();
      },
    });

    this.actions = actions;
  }

  public setJSON(json: any) {
    this.json = json;
    if (json != null) {
      if (json.cookieName) {
        delete json.cookieName;
      }
    }
    this.survey = this.surveyProvider.createSurvey(json || {}, "test");
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    var self = this;
    this.survey.onComplete.add((sender: SurveyModel) => {
      self.isRunning = false;
    });
    if (!!this.survey["onNavigateToUrl"]) {
      this.survey["onNavigateToUrl"].add(function (sender, options) {
        var url = options.url;
        options.url = "";
        if (!!url) {
          var message =
            self.getLocString("ed.navigateToMsg") + " '" + url + "'.";
          if (!!this.surveyProvider) {
            this.surveyProvider.notify(message);
          } else {
            alert(message);
          }
        }
      });
    }
    this.survey.onStarted.add((sender: SurveyModel) => {
      self.setActivePageItem(self.survey.currentPage, true);
    });
    this.survey.onCurrentPageChanged.add((sender: SurveyModel, options) => {
      self.activePage = options.newCurrentPage;
      self.setActivePageItem(options.oldCurrentPage, false);
      self.setActivePageItem(options.newCurrentPage, true);
    });
    this.survey.onPageVisibleChanged.add((sender: SurveyModel, options) => {
      self.updatePageItem(options.page);
    });
  }
  private updatePageItem(page: PageModel) {
    const item = this.getPageItemByPage(page);
    if (item) {
      item.visible = page.isVisible;
      item.enabled = page.isVisible;
    }
  }
  public show(options: any = null) {
    const pages: Array<IActionBarItem> = [];
    for (var i = 0; i < this.survey.pages.length; i++) {
      var page = this.survey.pages[i];
      pages.push({
        id: page.name,
        data: page,
        title: this.surveyProvider.getObjectDisplayName(page, "survey-tester"),
        visible: page.isVisible,
        enabled: page.isVisible,
        active: () =>
          this.survey.state == "running" && page === this.survey.currentPage,
      });
    }
    if (!!options && options.showSimulatorInTestSurveyTab != undefined) {
      this.showSimulator = options.showSimulatorInTestSurveyTab;
    }
    if (!!options && options.showPagesInTestSurveyTab != undefined) {
      this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
    }
    if (!!options && options.showDefaultLanguageInTestSurveyTab != undefined) {
      this.setDefaultLanguageOption(options.showDefaultLanguageInTestSurveyTab);
    }
    if (
      !!options &&
      options.showInvisibleElementsInTestSurveyTab != undefined
    ) {
      this.showInvisibleElementsInTestSurveyTab =
        options.showInvisibleElementsInTestSurveyTab;
    }
    this.showInvisibleElements = false;
    this.pages = pages;
    (<ListModel>this.pagePopupModel.contentComponentData).items = pages;
    this.activePage = this.survey.currentPage;
    this.activeLanguage =
      this.survey.locale || surveyLocalization.defaultLocale;
    this.isRunning = true;
  }
  public getLocString(name: string) {
    return editorLocalization.getString(name);
  }
  public get testSurveyAgainText() {
    return this.getLocString("ed.testSurveyAgain");
  }
  public get localeText() {
    return this.getLocString("pe.locale");
  }
  private testAgain() {
    this.setJSON(this.json);
    this.show();
  }
  private setDefaultLanguageOption(opt: boolean | string) {
    var vis =
      opt === true ||
      opt === "all" ||
      (opt === "auto" && this.survey.getUsedLocales().length > 1);
    this.showDefaultLanguageInTestSurveyTab = vis;
    if (vis) {
      this.languages = this.getLanguages(
        opt !== "all" ? this.survey.getUsedLocales() : null
      );
    }
  }
  private setActivePageItem(page: PageModel, val: boolean) {
    var item = this.getPageItemByPage(page);
    if (item) {
      item.active = val;
    }
  }
  private getPageItemByPage(page: PageModel): IActionBarItem {
    var items = this.pages;
    for (var i = 0; i < items.length; i++) {
      if (items[i].data === page) return items[i];
    }
    return null;
  }
  private getLanguages(
    usedLanguages: Array<string> = null
  ): Array<IActionBarItem> {
    const res: Array<IActionBarItem> = [];
    const locales =
      !!usedLanguages && usedLanguages.length > 1
        ? usedLanguages
        : surveyLocalization.getLocales();
    for (let i = 0; i < locales.length; i++) {
      const loc: string = locales[i];
      res.push({ id: loc, title: this.getLocString(loc) });
    }
    return res;
  }
  // public koEventAfterRender(element: any, survey: any) {
  //   survey["afterRenderSurvey"](element);
  // }
}

export class TabTestPlugin implements ICreatorPlugin {
  public model: TestSurveyTabViewModel;
  constructor(private creator: CreatorBase<SurveyModel>) {
    this.model = new TestSurveyTabViewModel(creator);
    creator.tabs.push({
      id: "test",
      title: getLocString("ed.testSurvey"),
      component: "svc-tab-test",
      data: this,
      active: () => creator.viewType === "test",
      action: () => {
        creator.makeNewViewActive("test");
      },
    });
    creator.plugins["test"] = this;
  }
  public activate(): void {
    this.model.onSurveyCreatedCallback = (survey) => {
      this.creator["onTestSurveyCreated"] &&
        this.creator["onTestSurveyCreated"].fire(self, { survey: survey });
    };
    var options = {
      showPagesInTestSurveyTab: this.creator.showPagesInTestSurveyTab,
      showDefaultLanguageInTestSurveyTab: this.creator
        .showDefaultLanguageInTestSurveyTab,
      showInvisibleElementsInTestSurveyTab: this.creator
        .showInvisibleElementsInTestSurveyTab,
      showSimulatorInTestSurveyTab: this.creator.showSimulatorInTestSurveyTab,
    };
    this.model.setJSON(this.creator.JSON);
    this.model.show(options);
  }
  public deactivate(): boolean {
    this.model.onSurveyCreatedCallback = undefined;
    return true;
  }
}
