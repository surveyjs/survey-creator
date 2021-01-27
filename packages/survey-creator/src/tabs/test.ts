import * as ko from "knockout";
import { editorLocalization, getLocString } from "../editorLocalization";
import * as Survey from "survey-knockout";
import { SurveyCreator } from "../editor";
import { IToolbarItem } from "../components/toolbar";

import "./test.scss";
var templateHtml = require("./test.html");

export { SurveySimulatorComponent } from "../components/simulator";
export { SurveyResultsModel } from "../components/results";

export class SurveyLiveTester {
  private json: any;
  koIsRunning = ko.observable(true);
  selectTestClick: any;
  selectPageClick: any;
  survey: Survey.Survey;
  koSurvey: any;
  koPages = ko.observableArray([]);
  koActivePage = ko.observable(null);
  setPageDisable: any;
  koLanguages: any;
  koActiveLanguage: any;
  koShowInvisibleElements = ko.observable(false);
  public onGetObjectDisplayName: (obj: Survey.Base) => string = null;
  koShowPagesInTestSurveyTab = ko.observable(true);
  showSimulator = ko.observable(true);
  koShowDefaultLanguageInTestSurveyTab = ko.observable(true);
  koShowInvisibleElementsInTestSurveyTab = ko.observable(true);

  /**
   * The list of toolbar items. You may add/remove/replace them.
   * @see IToolbarItem
   */
  public toolbarItems = ko.observableArray<IToolbarItem>();

  onSurveyCreatedCallback: (survey: Survey.Survey) => any;
  constructor(private surveyProvider: any) {
    var self = this;
    this.survey = this.surveyProvider.createSurvey({}, "test");
    this.selectTestClick = function () {
      self.testAgain();
    };
    this.selectPageClick = function (pageItem) {
      if (self.survey) {
        if (self.survey.state == "starting") {
          self.survey.start();
        }
        self.survey.currentPage = pageItem.page;
      }
    };
    this.koActivePage.subscribe(function (newValue) {
      if (!!newValue) {
        self.survey.currentPage = newValue;
      }
    });
    this.koShowInvisibleElements.subscribe(function (newValue) {
      self.survey.showInvisibleElements = newValue;
    });
    this.setPageDisable = function (option, item) {
      ko.applyBindingsToNode(option, { disable: item.koDisabled }, item);
    };
    this.koLanguages = ko.observable(this.getLanguages());
    this.koActiveLanguage = ko.observable("");
    this.koActiveLanguage.subscribe(function (newValue) {
      if (self.survey.locale == newValue) return;
      self.survey.locale = newValue;
      self.koSurvey(self.survey);
    });
    this.koSurvey = ko.observable(this.survey);

    this.toolbarItems.push(<any>{
      id: "svd-test-page-selector",
      title: getLocString("ts.selectPage"),
      visible: ko.computed(
        () => this.koPages().length > 1 && this.koShowPagesInTestSurveyTab()
      ),
      tooltip: getLocString("ts.selectPage"),
      component: "svd-dropdown",
      action: ko.computed({
        read: () => this.koActivePage(),
        write: (val: any) => this.koActivePage(val),
      }),
      afterRender: this.setPageDisable,
      items: <any>ko.computed(() =>
        this.koPages().map((page) => {
          return { text: page.title, value: page.page };
        })
      ),
    });
    this.toolbarItems.push({
      id: "svd-test-locale-selector",
      title: this.localeText,
      visible: this.koShowDefaultLanguageInTestSurveyTab,
      tooltip: this.localeText,
      component: "svd-dropdown",
      action: ko.computed({
        read: () => this.koActiveLanguage(),
        write: (val: any) => this.koActiveLanguage(val),
      }),
      items: <any>this.koLanguages,
    });
    this.toolbarItems.push({
      id: "svd-test-show-invisible",
      title: getLocString("ts.showInvisibleElements"),
      visible: this.koShowInvisibleElementsInTestSurveyTab,
      tooltip: getLocString("ts.showInvisibleElements"),
      component: "svd-boolean",
      action: ko.computed({
        read: () => this.koShowInvisibleElements(),
        write: (val: any) => this.koShowInvisibleElements(val),
      }),
    });
  }

  public setJSON(json: any) {
    this.json = json;
    if (json != null) {
      if (json.cookieName) {
        delete json.cookieName;
      }
    }
    this.survey = json
      ? this.surveyProvider.createSurvey(json, "test")
      : this.surveyProvider.createSurvey({}, "test");
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    var self = this;
    this.survey.onComplete.add((sender: Survey.Survey) => {
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
    this.survey.onStarted.add((sender: Survey.Survey) => {
      self.setActivePageItem(<Survey.Page>self.survey.currentPage, true);
    });
    this.survey.onCurrentPageChanged.add((sender: Survey.Survey, options) => {
      self.koActivePage(options.newCurrentPage);
      self.setActivePageItem(options.oldCurrentPage, false);
      self.setActivePageItem(options.newCurrentPage, true);
    });
    this.survey.onPageVisibleChanged.add((sender: Survey.Survey, options) => {
      self.updatePageItem(options.page);
    });
  }
  private updatePageItem(page: Survey.Page) {
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
        title: this.onGetObjectDisplayName
          ? this.onGetObjectDisplayName(page)
          : page.name,
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
      this.survey.locale || Survey.surveyLocalization.defaultLocale
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
  private setActivePageItem(page: Survey.Page, val: boolean) {
    var item = this.getPageItemByPage(page);
    if (item) {
      item.koActive(val);
    }
  }
  private getPageItemByPage(page: Survey.Page): any {
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
        : Survey.surveyLocalization.getLocales();
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

ko.components.register("survey-tester", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var creator: SurveyCreator = params.creator;
      var model = creator.surveyLiveTester || new SurveyLiveTester(creator);

      model.onSurveyCreatedCallback = (survey) => {
        creator.onTestSurveyCreated &&
          creator.onTestSurveyCreated.fire(self, { survey: survey });
      };
      model.onGetObjectDisplayName = (obj) => {
        return creator.getObjectDisplayName(obj, "survey-tester");
      };

      // Test tab updater implicitly depending on observable survey and view type
      var subscr = ko.computed(() => {
        if (!!creator.survey && creator.koViewType() === "test") {
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
      });

      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        subscr.dispose();
        model.dispose();
      });

      return model;
    },
  },
  template: templateHtml,
});
