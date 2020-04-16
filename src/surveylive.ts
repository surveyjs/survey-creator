import * as ko from "knockout";
import { SurveyHelper, ObjType } from "./surveyHelper";
import { editorLocalization } from "./editorLocalization";
import * as Survey from "survey-knockout";

import "./simulator.scss";

export class SurveyLiveTester {
  private json: any;
  koIsRunning = ko.observable(true);
  selectTestClick: any;
  selectPageClick: any;
  koResultText = ko.observable("");
  koResultData = ko.observableArray();
  koResultViewType = ko.observable("table");
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
  koShowDefaultLanguageInTestSurveyTab = ko.observable(true);
  koShowInvisibleElementsInTestSurveyTab = ko.observable(true);

  private _simulatorEnabled = ko.observable<boolean>(true);
  public get simulatorEnabled() {
    return this._simulatorEnabled();
  }
  public set simulatorEnabled(value: boolean) {
    this._simulatorEnabled(value);
  }
  private _simulatorScaleEnabled = ko.observable<boolean>(true);
  public get simulatorScaleEnabled() {
    return this._simulatorScaleEnabled();
  }
  public set simulatorScaleEnabled(value: boolean) {
    this._simulatorScaleEnabled(value);
  }
  private simulator;
  public simulatorOptions = {
    device: "desktop",
    orientation: "l",
    // scale: 1,
    considerDPI: true,
  };
  koActiveDevice = ko.observable("desktop");
  koDevices = ko.observableArray(
    Object.keys(simulatorDevices)
      .filter((key) => !!simulatorDevices[key].title)
      .map((key) => {
        return {
          text: simulatorDevices[key].title,
          value: key,
        };
      })
  );
  koLandscapeOrientation = ko.observable(true);

  onSurveyCreatedCallback: (survey: Survey.Survey) => any;
  constructor(private surveyProvider: any) {
    var self = this;
    this.survey = this.surveyProvider.createSurvey({}, "test");
    this.selectTestClick = function() {
      self.testAgain();
    };
    this.selectPageClick = function(pageItem) {
      if (self.survey) {
        if (self.survey.state == "starting") {
          self.survey.start();
        }
        self.survey.currentPage = pageItem.page;
      }
    };
    this.koActivePage.subscribe(function(newValue) {
      if (!!newValue) {
        self.survey.currentPage = newValue;
      }
    });
    this.koShowInvisibleElements.subscribe(function(newValue) {
      self.survey.showInvisibleElements = newValue;
    });
    this.setPageDisable = function(option, item) {
      ko.applyBindingsToNode(option, { disable: item.koDisabled }, item);
    };
    this.koLanguages = ko.observable(this.getLanguages());
    this.koActiveLanguage = ko.observable("");
    this.koActiveLanguage.subscribe(function(newValue) {
      if (self.survey.locale == newValue) return;
      self.survey.locale = newValue;
      self.koSurvey(self.survey);
    });
    this.koSurvey = ko.observable(this.survey);
    this.koActiveDevice.subscribe((newValue) => {
      if (!!this.simulator) {
        this.simulatorOptions.device = newValue || "desktop";
        this.simulator.options(this.simulatorOptions);
      }
    });
    this.koLandscapeOrientation.subscribe((newValue) => {
      if (!!this.simulator) {
        this.simulatorOptions.orientation = newValue ? "l" : "p";
        this.simulator.options(this.simulatorOptions);
      }
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
      self.koResultText(JSON.stringify(self.survey.data, null, 4));
      var addCollapsed = (items: any[]) => {
        items.forEach((item: any) => {
          if (!!item && item.isNode) {
            item.collapsed = ko.observable(true);
            item.data = addCollapsed(item.data || []);
          }
        });
        return items.filter((item) => !!item);
      };
      var plainData = self.survey.getPlainData({ includeEmpty: false });
      plainData = addCollapsed(plainData);
      self.koResultData(plainData);
    });
    if (!!this.survey["onNavigateToUrl"]) {
      this.survey["onNavigateToUrl"].add(function(sender, options) {
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
  public get surveyResultsText() {
    return this.getLocString("ed.surveyResults");
  }
  public get resultsTitle() {
    return this.getLocString("ed.resultsTitle");
  }
  public get resultsName() {
    return this.getLocString("ed.resultsName");
  }
  public get resultsValue() {
    return this.getLocString("ed.resultsValue");
  }
  public get resultsDisplayValue() {
    return this.getLocString("ed.resultsDisplayValue");
  }
  public get selectPageText() {
    return this.getLocString("ts.selectPage");
  }
  public get showInvisibleElementsText() {
    return this.getLocString("ts.showInvisibleElements");
  }
  public selectTableClick(model: SurveyLiveTester) {
    model.koResultViewType("table");
  }
  public selectJsonClick(model: SurveyLiveTester) {
    model.koResultViewType("text");
  }
  public get localeText() {
    return this.getLocString("pe.locale");
  }
  public get simulatorText() {
    return this.getLocString("pe.simulator");
  }
  public get landscapeOrientationText() {
    return this.getLocString("pe.landscapeOrientation");
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

  public koHasFrame = ko.computed(() => {
    var device = simulatorDevices[this.koActiveDevice()];
    return this.simulatorEnabled && device.deviceType !== "desktop";
  });

  public koSimulatorFrame = ko.computed(() => {
    if (!this.koHasFrame) {
      return undefined;
    }
    var device = simulatorDevices[this.koActiveDevice()];
    var scale = DEFAULT_MONITOR_DPI / (device.ppi / device.cssPixelRatio);
    var width =
      ((this.koLandscapeOrientation() ? device.height : device.width) /
        device.cssPixelRatio) *
      scale;
    var height =
      ((this.koLandscapeOrientation() ? device.width : device.height) /
        device.cssPixelRatio) *
      scale;
    var offsetRatioX = this.koLandscapeOrientation() ? 0.15 : 0.165;
    var offsetRatioY = this.koLandscapeOrientation() ? 0.17 : 0.155;
    return {
      scale: this.simulatorScaleEnabled ? scale * 2 : 1,
      width: width,
      height: height,
      frameWidth: width * 1.33,
      frameHeight: height * 1.34,
      frameX: width * offsetRatioX,
      frameY: height * offsetRatioY,
    };
  });
}

export var DEFAULT_MONITOR_DPI = 102.69;
export var simulatorDevices = {
  desktop: {
    deviceType: "desktop",
    title: "Desktop",
  },
  // desktop_1280x720: {
  //   cssPixelRatio: 1,
  //   ppi: DEFAULT_MONITOR_DPI,
  //   width: 720,
  //   height: 1280,
  //   deviceType: "desktop",
  //   title: "Desktop 1280x720"
  // },
  // desktop_1440x900: {
  //   cssPixelRatio: 1,
  //   ppi: DEFAULT_MONITOR_DPI,
  //   width: 900,
  //   height: 1440,
  //   deviceType: "desktop",
  //   title: "Desktop 1440x900"
  // },
  // desktop_1920x1080: {
  //   cssPixelRatio: 1,
  //   ppi: DEFAULT_MONITOR_DPI,
  //   width: 1080,
  //   height: 1920,
  //   deviceType: "desktop",
  //   title: "Desktop 1920x1080"
  // },
  iPhone: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 640,
    height: 960,
    deviceType: "phone",
    title: "iPhone",
  },
  iPhone5: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 640,
    height: 1136,
    deviceType: "phone",
    title: "iPhone 5",
  },
  iPhone6: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 750,
    height: 1334,
    deviceType: "phone",
    title: "iPhone 6",
  },
  iPhone6plus: {
    cssPixelRatio: 2,
    ppi: 401,
    width: 1080,
    height: 1920,
    deviceType: "phone",
    title: "iPhone 6 Plus",
  },
  iPhone8: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 750,
    height: 1334,
    deviceType: "phone",
    title: "iPhone 8",
  },
  iPhone8plus: {
    cssPixelRatio: 2,
    ppi: 401,
    width: 1080,
    height: 1920,
    deviceType: "phone",
    title: "iPhone 8 Plus",
  },
  iPhoneX: {
    cssPixelRatio: 2,
    ppi: 458,
    width: 1125,
    height: 2436,
    deviceType: "phone",
    title: "iPhone X",
  },
  iPhoneXmax: {
    cssPixelRatio: 2,
    ppi: 458,
    width: 1242,
    height: 2688,
    deviceType: "phone",
    title: "iPhone X Max",
  },
  iPad: {
    cssPixelRatio: 2,
    ppi: 264,
    width: 1536,
    height: 2048,
    deviceType: "tablet",
    title: "iPad",
  },
  iPadMini: {
    cssPixelRatio: 1,
    ppi: 163,
    width: 768,
    height: 1024,
    deviceType: "tablet",
    title: "iPad Mini",
  },
  iPadPro: {
    cssPixelRatio: 1,
    ppi: 264,
    width: 1688,
    height: 2388,
    deviceType: "tablet",
    title: 'iPad Pro 11"',
  },
  iPadPro13: {
    cssPixelRatio: 1,
    ppi: 264,
    width: 2048,
    height: 2732,
    deviceType: "tablet",
    title: 'iPad Pro 12,9"',
  },
  androidPhone: {
    cssPixelRatio: 2,
    ppi: 316,
    width: 720,
    height: 1280,
    deviceType: "phone",
    title: "Android Phone",
  },
  androidTablet: {
    cssPixelRatio: 1.5,
    ppi: 149,
    width: 800,
    height: 1280,
    deviceType: "tablet",
    title: "Android Tablet",
  },
  win10Phone: {
    cssPixelRatio: 1,
    ppi: 152,
    width: 330,
    height: 568,
    deviceType: "phone",
    title: "Windows 10 Phone",
  },
  msSurface: {
    cssPixelRatio: 1,
    ppi: 148,
    width: 768,
    height: 1366,
    deviceType: "tablet",
    title: "MS Surface",
  },
  genericPhone: {
    cssPixelRatio: 1,
    deviceType: "phone",
    title: "",
  },
};
