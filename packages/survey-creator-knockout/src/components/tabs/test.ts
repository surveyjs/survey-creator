import * as ko from "knockout";
import {
  Survey,
  Base,
  Page,
  surveyLocalization,
  PopupModel,
  ListModel,
} from "survey-knockout";
import { editorLocalization } from "@survey/creator";
import { simulatorDevices } from "@survey/creator";
import { SurveyCreator } from "../../creator";

import "./test.scss";
import { IActionBarItem } from "survey-knockout";
const template = require("./test.html");
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

export class TestSurveyTabViewModel {
  private json: any;
  koIsRunning = ko.observable(true);
  survey: Survey;
  koSurvey: any;
  koPages = ko.observableArray([]);
  koActivePage = ko.observable(null);
  koLanguages: any;
  koActiveLanguage: any;
  koShowInvisibleElements = ko.observable(false);
  koShowPagesInTestSurveyTab = ko.observable(true);
  showSimulator = ko.observable(true);
  koShowDefaultLanguageInTestSurveyTab = ko.observable(true);
  koShowInvisibleElementsInTestSurveyTab = ko.observable(true);

  /**
   * The list of action bar items.
   * @see IActionBarItem
   */
  public actions = ko.observableArray<IActionBarItem>();

  onSurveyCreatedCallback: (survey: Survey) => any;
  constructor(private surveyProvider: SurveyCreator) {
    var self = this;
    this.survey = <any>this.surveyProvider.createSurvey({}, "test");

    this.koActivePage.subscribe(function (newValue) {
      if (!!newValue) {
        if (self.survey.state == "starting") {
          self.survey.start();
        }
        self.survey.currentPage = newValue;
      }
    });
    this.koShowInvisibleElements.subscribe(function (newValue) {
      self.survey.showInvisibleElements = newValue;
    });

    this.koLanguages = ko.observable(this.getLanguages());
    this.koActiveLanguage = ko.observable("");
    this.koActiveLanguage.subscribe(function (newValue) {
      if (self.survey.locale == newValue) return;
      self.survey.locale = newValue;
      self.koSurvey(self.survey);
    });
    this.koSurvey = ko.observable(this.survey);

    this.simulator = {
      landscape: ko.observable(true),
      survey: this.koSurvey,
      device: ko.observable("desktop"),
    };

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
          this.simulator.device(item.value);
          devicePopupModel.toggleVisibility();
        },
        true /*,
        ko.computed({
          read: () =>
            deviceSelectorItems.filter(
              (item) => item.value === this.simulator.device()
            )[0],
          write: (val) => {},
        })*/
      ),
      "top",
      "right"
    );

    this.actions.push({
      id: "deviceSelector",
      css: "sv-action--first sv-action-bar-item--secondary",
      iconName: "icon-change_16x16",
      title: <any>(
        ko.computed(
          () =>
            simulatorDevices[this.simulator.device()].title ||
            this.getLocString("pe.simulator")
        )
      ),
      enabled: <any>this.showSimulator,
      component: "sv-action-bar-item-dropdown",
      action: () => {
        devicePopupModel.toggleVisibility();
      },
      popupModel: devicePopupModel,
    });
    this.actions.push({
      id: "prevPage",
      css: <any>(
        ko.computed(() =>
          this.koSurvey() && !this.koSurvey().isFirstPage
            ? "sv-action-bar-item--secondary"
            : ""
        )
      ),
      iconName: "icon-leftarrow_16x16",
      visible: <any>ko.computed(() => this.isRunning),
      enabled: <any>(
        ko.computed(() => this.koSurvey() && !this.koSurvey().isFirstPage)
      ),
      title: "",
      action: () => {
        this.koActivePage(this.survey.pages[self.survey.currentPageNo - 1]);
      },
    });
    var pageSelectorItems = ko.computed(() =>
      this.koPages().map((page) => {
        return {
          id: page.name,
          title: surveyProvider.getObjectDisplayName(
            page.page,
            "survey-tester"
          ),
          data: page.page,
        };
      })
    );

    const pagePopupModel = new PopupModel(
      "sv-list",
      new ListModel(
        pageSelectorItems(),
        (item: any) => {
          this.koActivePage(item.value);
          pagePopupModel.toggleVisibility();
        },
        true /*,
        ko.computed({
          read: () =>
            pageSelectorItems().filter(
              (item) => item.value === this.koActivePage()
            )[0],
          write: (val) => {},
        })*/
      ),
      "top",
      "center"
    );

    this.actions.push(<any>{
      id: "pageSelector",
      title: ko.computed(
        () =>
          (this.koActivePage() &&
            surveyProvider.getObjectDisplayName(
              this.koActivePage(),
              "survey-tester"
            )) ||
          this.getLocString("ts.selectPage")
      ),
      visible: ko.computed(
        () =>
          this.isRunning &&
          this.koPages().length > 1 &&
          this.koShowPagesInTestSurveyTab()
      ),
      component: "sv-action-bar-item-dropdown",
      popupModel: pagePopupModel,
      action: (newPage) => {
        pagePopupModel.toggleVisibility();
      },
    });
    this.actions.push(<any>{
      id: "nextPage",
      css: ko.computed(() =>
        this.koSurvey() && !this.koSurvey().isLastPage
          ? "sv-action-bar-item--secondary"
          : ""
      ),
      iconName: "icon-rightarrow_16x16",
      visible: ko.computed(() => this.isRunning),
      enabled: ko.computed(
        () => this.koSurvey() && !this.koSurvey().isLastPage
      ),
      title: "",
      action: () => {
        this.koActivePage(this.survey.pages[self.survey.currentPageNo + 1]);
      },
    });
    this.actions.push(<any>{
      id: "showInvisivle",
      css: ko.computed(() =>
        this.koShowInvisibleElements()
          ? "sv-action--last sv-action-bar-item--secondary"
          : "sv-action--last"
      ),
      visible: ko.computed(() => this.isRunning),
      title: this.getLocString("ts.showInvisibleElements"),
      iconName: ko.computed(() => {
        if (this.koShowInvisibleElements()) {
          return "icon-switchactive_16x16";
        }
        return "icon-switchinactive_16x16";
      }),
      action: () =>
        this.koShowInvisibleElements(!this.koShowInvisibleElements()),
    });
    this.actions.push(<any>{
      id: "testSurveyAgain",
      css: "sv-action--last",
      visible: ko.computed(() => !this.isRunning),
      title: this.testSurveyAgainText,
      action: () => {
        self.testAgain();
      },
    });
  }

  simulator: any;

  get isRunning() {
    return this.koIsRunning();
  }

  public setJSON(json: any) {
    this.json = json;
    if (json != null) {
      if (json.cookieName) {
        delete json.cookieName;
      }
    }
    this.survey = <any>(
      (json
        ? this.surveyProvider.createSurvey(json, "test")
        : this.surveyProvider.createSurvey({}, "test"))
    );
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    var self = this;
    this.survey.onComplete.add((sender: Survey) => {
      self.koIsRunning(false);
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
    this.survey.onStarted.add((sender: Survey) => {
      self.setActivePageItem(<Page>self.survey.currentPage, true);
    });
    this.survey.onCurrentPageChanged.add((sender: Survey, options) => {
      self.koActivePage(options.newCurrentPage);
      self.setActivePageItem(options.oldCurrentPage, false);
      self.setActivePageItem(options.newCurrentPage, true);
    });
    this.survey.onPageVisibleChanged.add((sender: Survey, options) => {
      self.updatePageItem(options.page);
    });
  }
  private updatePageItem(page: Page) {
    var item = this.getPageItemByPage(page);
    if (item) {
      item.koVisible(page.isVisible);
      item.koDisabled(!page.isVisible);
    }
  }
  public show(options: any = null) {
    var pages = [];
    for (var i = 0; i < this.survey.pages.length; i++) {
      var page = this.survey.pages[i];
      pages.push({
        page: page,
        title: this.surveyProvider.getObjectDisplayName(
          <any>page,
          "survey-tester"
        ),
        koVisible: ko.observable(page.isVisible),
        koDisabled: ko.observable(!page.isVisible),
        koActive: ko.observable(
          this.survey.state == "running" && page === this.survey.currentPage
        ),
      });
    }
    if (!!options && options.showSimulatorInTestSurveyTab != undefined) {
      this.showSimulator(options.showSimulatorInTestSurveyTab);
    }
    if (!!options && options.showPagesInTestSurveyTab != undefined) {
      this.koShowPagesInTestSurveyTab(options.showPagesInTestSurveyTab);
    }
    if (!!options && options.showDefaultLanguageInTestSurveyTab != undefined) {
      this.setDefaultLanguageOption(options.showDefaultLanguageInTestSurveyTab);
    }
    if (
      !!options &&
      options.showInvisibleElementsInTestSurveyTab != undefined
    ) {
      this.koShowInvisibleElementsInTestSurveyTab(
        options.showInvisibleElementsInTestSurveyTab
      );
    }
    this.koShowInvisibleElements(false);
    this.koPages(pages);
    this.koSurvey(this.survey);
    this.koActivePage(this.survey.currentPage);
    this.koActiveLanguage(
      this.survey.locale || surveyLocalization.defaultLocale
    );
    this.koIsRunning(true);
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
    this.koShowDefaultLanguageInTestSurveyTab(vis);
    if (vis) {
      this.koLanguages(
        this.getLanguages(opt !== "all" ? this.survey.getUsedLocales() : null)
      );
    }
  }
  private setActivePageItem(page: Page, val: boolean) {
    var item = this.getPageItemByPage(page);
    if (item) {
      item.koActive(val);
    }
  }
  private getPageItemByPage(page: Page): any {
    var items = this.koPages();
    for (var i = 0; i < items.length; i++) {
      if (items[i].page === page) return items[i];
    }
    return null;
  }
  private getLanguages(usedLanguages: Array<string> = null): Array<any> {
    var res = [];
    var locales =
      !!usedLanguages && usedLanguages.length > 1
        ? usedLanguages
        : surveyLocalization.getLocales();
    for (var i = 0; i < locales.length; i++) {
      var loc = locales[i];
      res.push({ value: loc, text: this.getLocString(loc) });
    }
    return res;
  }
  public koEventAfterRender(element: any, survey: any) {
    survey["afterRenderSurvey"](element);
  }

  dispose() {}
}

ko.components.register("svc-tab-test", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator = params.creator;
      const model = new TestSurveyTabViewModel(creator);

      model.onSurveyCreatedCallback = (survey) => {
        creator.onTestSurveyCreated &&
          creator.onTestSurveyCreated.fire(self, { survey: survey });
      };

      const subscr = (s, o) => {
        if (o.name === "viewType" && o.newValue == "test") {
          var options = {
            showPagesInTestSurveyTab: creator.showPagesInTestSurveyTab,
            showDefaultLanguageInTestSurveyTab:
              creator.showDefaultLanguageInTestSurveyTab,
            showInvisibleElementsInTestSurveyTab:
              creator.showInvisibleElementsInTestSurveyTab,
            showSimulatorInTestSurveyTab: creator.showSimulatorInTestSurveyTab,
          };
          model.setJSON(creator.JSON);
          model.show(options);
        }
      };
      creator.onPropertyChanged.add(subscr);

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        creator.onPropertyChanged.remove(subscr);
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
