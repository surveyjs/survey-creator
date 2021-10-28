import { simulatorDevices, SurveySimulatorModel } from "../simulator";

import "./test.scss";
import {
  surveyLocalization,
  PopupModel,
  ListModel,
  Base,
  propertyArray,
  property,
  PageModel,
  SurveyModel,
  Action,
  AdaptiveActionContainer,
  IAction
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
// export { SurveySimulatorModel as SurveySimulatorComponentV1 } from "@survey/creator/components/simulator";
// export { SurveyResultsModel as SurveyResultsModelV1 } from "@survey/creator/components/results";

export class TestSurveyTabViewModel extends Base {
  private json: any;
  public toolbar: AdaptiveActionContainer = new AdaptiveActionContainer();
  public pages: AdaptiveActionContainer = new AdaptiveActionContainer();
  private deviceSelectorAction: Action;
  private orientationSelectorAction: Action;
  private prevPageAction: Action;
  private nextPageAction: Action;
  private selectPageAction: Action;
  private languageSelectorAction: Action;
  private testAgainAction: Action;
  private invisibleToggleAction: Action;

  @property({ defaultValue: true }) isRunning: boolean;
  @propertyArray() pageListItems: Array<IAction>;
  @property({
    onSet: (val: PageModel, target: TestSurveyTabViewModel) => {
      if (!!val) {
        if (target.simulator.survey.state == "starting") {
          target.simulator.survey.start();
        }
        target.simulator.survey.currentPage = val;
      }
    }
  })
  activePage: PageModel;
  @propertyArray() languages: Array<IAction>;
  @property({
    defaultValue: "",
    onSet: (val: string, target: TestSurveyTabViewModel) => {
      if (target.simulator.survey.locale == val) return;
      target.simulator.survey.locale = val;
    }
  })
  public get activeLanguage(): string {
    return this.getPropertyValue(
      "activeLanguage",
      this.survey.locale || surveyLocalization.defaultLocale
    );
  }
  public set activeLanguage(val: string) {
    if (val === this.activeLanguage) return;
    this.setPropertyValue("activeLanguage", val);
    this.survey.locale = val;
  }

  public get survey(): SurveyModel {
    return this.simulator.survey;
  }

  @property({
    defaultValue: false,
    onSet: (val: boolean, target: TestSurveyTabViewModel) => {
      target.simulator.survey.showInvisibleElements = val;
    }
  })
  showInvisibleElements;
  @property({ defaultValue: true }) showPagesInTestSurveyTab;
  @property({ defaultValue: true }) showSimulator;
  @property({ defaultValue: true }) showDefaultLanguageInTestSurveyTab;
  @property({ defaultValue: true }) showInvisibleElementsInTestSurveyTab;
  public simulator: SurveySimulatorModel;
  private pagePopupModel: PopupModel;
  /**
   * The list of action bar items.
   * @see IAction
   */
  public get actions(): Array<Action> {
    return this.toolbar.actions;
  }
  public get pageActions(): Array<Action> {
    return this.pages.actions;
  }

  onSurveyCreatedCallback: (survey: SurveyModel) => any;
  constructor(private surveyProvider: CreatorBase<SurveyModel>) {
    super();
    this.simulator = new SurveySimulatorModel();

    this.simulator.registerFunctionOnPropertyValueChanged(
      "device",
      () => {
        this.deviceSelectorAction.title =
          simulatorDevices[this.simulator.device].title ||
          this.getLocString("pe.simulator");
      },
      "testTabActions"
    );
  }

  public setJSON(json: any) {
    this.json = json;
    if (json != null) {
      if (json.cookieName) {
        delete json.cookieName;
      }
    }
    this.simulator.survey = this.surveyProvider.createSurvey(json || {}, "test");
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    const self: TestSurveyTabViewModel = this;
    this.survey.onComplete.add((sender: SurveyModel) => {
      self.isRunning = false;
    });
    if (!!this.survey["onNavigateToUrl"]) {
      this.survey["onNavigateToUrl"].add(function (sender, options) {
        const url: string = options.url;
        options.url = "";
        if (!!url) {
          const message: string =
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
      self.setActivePageItem(self.simulator.survey.currentPage, true);
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

  public initialize(json: any, options: any) {
    this.setJSON(json);
    this.updatePageList();

    if (!!options && options.showSimulatorInTestSurveyTab !== undefined) {
      this.showSimulator = options.showSimulatorInTestSurveyTab;
    }
    if (!!options && options.showPagesInTestSurveyTab !== undefined) {
      this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
    }
    if (!!options && options.showDefaultLanguageInTestSurveyTab != undefined) {
      this.setDefaultLanguageOption(options.showDefaultLanguageInTestSurveyTab);
    }
    if (
      !!options &&
      options.showInvisibleElementsInTestSurveyTab !== undefined
    ) {
      this.showInvisibleElementsInTestSurveyTab =
        options.showInvisibleElementsInTestSurveyTab;
    }
    this.buildActions();
  }
  private updatePageItem(page: PageModel) {
    const item = this.getPageItemByPage(page);
    if (item) {
      item.enabled = page.isVisible;
    }
  }
  private getCurrentPageItem(): IAction {
    return this.pageListItems[
      this.survey.pages.indexOf(this.survey.currentPage)
    ];
  }
  private updatePageList() {
    const pages: Array<IAction> = [];
    for (let i: number = 0; i < this.survey.pages.length; i++) {
      const page: PageModel = this.survey.pages[i];
      pages.push({
        id: page.name,
        data: page,
        title: this.surveyProvider.getObjectDisplayName(page, "survey-tester"),
        enabled: page.isVisible,
        visible: true
      });
    }
    this.pageListItems = pages;
  }

  public show() {
    this.showInvisibleElements = false;
    this.activePage = this.survey.currentPage;
    this.survey.locale = this.activeLanguage;
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
    this.updatePageList();
    this.show();
  }
  private setDefaultLanguageOption(opt: boolean | string) {
    const vis: boolean =
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
  public buildActions() {
    const languagePopupModel: PopupModel = new PopupModel(
      "sv-list",
      {
        model: new ListModel(
          this.languages,
          (item: any) => {
            this.activeLanguage = item.id;
            languagePopupModel.toggleVisibility();
          },
          true
        )
      },
      "top",
      "right"
    );

    const deviceSelectorItems = Object.keys(simulatorDevices)
      .filter((key) => !!simulatorDevices[key].title)
      .map((key) => ({ id: key, title: simulatorDevices[key].title }));
    const devicePopupModel: PopupModel = new PopupModel(
      "sv-list",
      {
        model: new ListModel(
          deviceSelectorItems,
          (item: any) => {
            this.simulator.device = item.id;
            this.orientationSelectorAction.visible = simulatorDevices[this.simulator.device].deviceType != "desktop";
            devicePopupModel.toggleVisibility();
          },
          true
        )
      },
      "top",
      "right"
    );
    const actions: Array<Action> = [];
    const pageActions: Array<Action> = [];
    this.deviceSelectorAction = new Action({
      id: "deviceSelector",
      css: "sv-action-bar-item--secondary",
      iconName: "icon-change_16x16",
      title:
        simulatorDevices[this.simulator.device].title ||
        this.getLocString("pe.simulator"),
      visible: this.showSimulator,
      component: "sv-action-bar-item-dropdown",
      action: () => {
        devicePopupModel.toggleVisibility();
      },
      popupModel: devicePopupModel
    });
    actions.push(this.deviceSelectorAction);

    this.orientationSelectorAction = new Action({
      id: "orientationSelector",
      css: "sv-action--first sv-action-bar-item--secondary",
      title:
        this.getLocString("pe.landscapeOrientation"),
      //simulatorDevices[this.simulator.device].title ||
      //this.getLocString("pe.simulator"),
      visible: false,
      action: () => {
        this.simulator.landscape = !this.simulator.landscape;
        this.orientationSelectorAction.title = this.getLocString(this.simulator.landscape ? "pe.landscapeOrientation" : "pe.portraitOrientation");
      }
    });
    actions.push(this.orientationSelectorAction);

    const pageList: ListModel = new ListModel(
      this.pageListItems,
      (item: IAction) => {
        this.activePage = item.data;
        this.pagePopupModel.toggleVisibility();
      },
      true,
      this.getCurrentPageItem()
    );
    const setNearPage: (isNext: boolean) => void = (isNext: boolean) => {
      const currentIndex: number = this.survey.currentPageNo;
      const shift: number = isNext ? 1 : -1;
      const nearPage: PageModel =
        this.survey.visiblePages[currentIndex + shift];
      const pageIndex: number = this.survey.pages.indexOf(nearPage);
      this.activePage = this.survey.pages[pageIndex];
      pageList.selectedItem = this.pageListItems[pageIndex];
    };
    this.pagePopupModel = new PopupModel(
      "sv-list",
      { model: pageList },
      "top",
      "center"
    );

    this.prevPageAction = new Action({
      id: "prevPage",
      css:
        this.survey && !this.survey.isFirstPage
          ? "sv-action-bar-item--secondary"
          : "",
      iconName: "icon-leftarrow_16x16",
      visible: this.isRunning && this.pageListItems.length > 1,
      enabled: this.survey && !this.survey.isFirstPage,
      title: "",
      action: () => setNearPage(false)
    });
    pageActions.push(this.prevPageAction);

    this.selectPageAction = new Action({
      id: "pageSelector",
      title: this.getSelectPageTitle(),
      visible:
        this.isRunning &&
        this.pageListItems.length > 1 &&
        this.showPagesInTestSurveyTab,
      component: "sv-action-bar-item-dropdown",
      popupModel: this.pagePopupModel,
      action: (newPage) => {
        this.pagePopupModel.toggleVisibility();
      }
    });
    pageActions.push(this.selectPageAction);

    this.nextPageAction = new Action({
      id: "nextPage",
      css:
        this.survey && !this.survey.isLastPage
          ? "sv-action-bar-item--secondary"
          : "",
      iconName: "icon-rightarrow_16x16",
      visible: this.isRunning && this.pageListItems.length > 1,
      enabled: this.survey && !this.survey.isLastPage,
      title: "",
      action: () => setNearPage(true)
    });
    pageActions.push(this.nextPageAction);

    this.languageSelectorAction = new Action({
      id: "languageSelector",
      css: "sv-action--last sv-action-bar-item--secondary",
      title: editorLocalization.getLocaleName(this.activeLanguage),
      visible: this.showDefaultLanguageInTestSurveyTab,
      component: "sv-action-bar-item-dropdown",
      action: () => {
        languagePopupModel.toggleVisibility();
      },
      popupModel: languagePopupModel
    });
    actions.push(this.languageSelectorAction);

    this.invisibleToggleAction = new Action({
      id: "showInvisible",
      css: this.showInvisibleElements
        ? "sv-action-bar-item--secondary"
        : "",
      visible: this.isRunning,
      title: this.getLocString("ts.showInvisibleElements"),
      iconName: this.showInvisibleElements
        ? "icon-switchactive_16x16"
        : "icon-switchinactive_16x16",
      action: () => {
        this.showInvisibleElements = !this.showInvisibleElements;
        this.invisibleToggleAction.css = this.showInvisibleElements
          ? "sv-action-bar-item--secondary"
          : "";
        this.invisibleToggleAction.iconName = this.showInvisibleElements
          ? "icon-switchactive_16x16"
          : "icon-switchinactive_16x16";
      }
    });
    actions.push(this.invisibleToggleAction);

    this.testAgainAction = new Action({
      id: "testSurveyAgain",
      css: "",
      visible: !this.isRunning,
      title: this.testSurveyAgainText,
      action: () => {
        this.testAgain();
      }
    });
    actions.push(this.testAgainAction);

    this.toolbar.actions = actions;
    this.pages.actions = pageActions;
    this.pages.containerCss = "sv-action-bar--pages";
  }
  private setActivePageItem(page: PageModel, val: boolean) {
    const item: IAction = this.getPageItemByPage(page);
    if (item) {
      item.active = val;
    }
  }
  private getPageItemByPage(page: PageModel): IAction {
    const items: IAction[] = this.pageListItems;
    for (let i = 0; i < items.length; i++) {
      if (items[i].data === page) return items[i];
    }
    return null;
  }
  private getLanguages(usedLanguages: Array<string> = null): Array<IAction> {
    const res: Array<IAction> = [];
    const locales =
      !!usedLanguages && usedLanguages.length > 1
        ? usedLanguages
        : surveyLocalization.getLocales();
    for (let i = 0; i < locales.length; i++) {
      const loc: string = locales[i];
      res.push({ id: loc, title: editorLocalization.getLocaleName(loc) });
    }
    return res;
  }

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (!this.actions || this.actions.length <= 0) return;

    if (name === "activePage") {
      this.prevPageAction.css =
        this.survey && this.survey.visiblePages.indexOf(this.activePage) !== 0
          ? "sv-action-bar-item--secondary"
          : "";
      this.prevPageAction.enabled =
        this.survey && this.survey.visiblePages.indexOf(this.activePage) !== 0;

      this.nextPageAction.css =
        this.survey &&
          this.survey.visiblePages.indexOf(this.activePage) !==
          this.survey.visiblePages.length - 1
          ? "sv-action-bar-item--secondary"
          : "";
      this.nextPageAction.enabled =
        this.survey &&
        this.survey.visiblePages.indexOf(this.activePage) !==
        this.survey.visiblePages.length - 1;

      this.selectPageAction.title = this.getSelectPageTitle();
    }
    if (
      name === "isRunning" ||
      name === "pageListItems" ||
      name === "showPagesInTestSurveyTab"
    ) {
      this.prevPageAction.visible =
        this.isRunning && this.pageListItems.length > 1;
      this.nextPageAction.visible =
        this.isRunning && this.pageListItems.length > 1;
      this.invisibleToggleAction.visible = this.isRunning;
      this.testAgainAction.visible = !this.isRunning;
      this.selectPageAction.popupModel.contentComponentData.model.items =
        this.pageListItems;
      this.selectPageAction.popupModel.contentComponentData.model.selectedItem =
        this.getCurrentPageItem();
      this.selectPageAction.visible =
        this.isRunning &&
        this.pageListItems.length > 1 &&
        this.showPagesInTestSurveyTab;
    }
    if (name === "activeLanguage") {
      this.languageSelectorAction.title = editorLocalization.getLocaleName(
        this.activeLanguage
      );
    }
  }
  private getSelectPageTitle(): string {
    return (this.activePage &&
      this.surveyProvider.getObjectDisplayName(
        this.activePage,
        "survey-tester-selected"
      )) ||
    this.getLocString("ts.selectPage");
  }
  public dispose() {
    this.simulator.unRegisterFunctionOnPropertyValueChanged(
      "device",
      "testTabActions"
    );
  }
}

export class TabTestPlugin implements ICreatorPlugin {
  public model: TestSurveyTabViewModel;
  constructor(private creator: CreatorBase<SurveyModel>) {
    creator.addPluginTab("test", this, getLocString("ed.testSurvey"));
  }
  public activate(): void {
    this.model = new TestSurveyTabViewModel(this.creator);
    this.model.onSurveyCreatedCallback = (survey) => {
      this.creator["onTestSurveyCreated"] &&
        this.creator["onTestSurveyCreated"].fire(self, { survey: survey });
    };
    this.update();
  }
  public update(): void {
    if (!this.model) return;
    const options = {
      showPagesInTestSurveyTab: this.creator.showPagesInTestSurveyTab,
      showDefaultLanguageInTestSurveyTab:
        this.creator.showDefaultLanguageInTestSurveyTab,
      showInvisibleElementsInTestSurveyTab:
        this.creator.showInvisibleElementsInTestSurveyTab,
      showSimulatorInTestSurveyTab: this.creator.showSimulatorInTestSurveyTab
    };
    this.model.initialize(this.creator.JSON, options);
    this.model.show();
  }
  public deactivate(): boolean {
    this.model.onSurveyCreatedCallback = undefined;
    this.model = undefined;
    return true;
  }
}
