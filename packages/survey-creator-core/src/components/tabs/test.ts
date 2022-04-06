import { SurveySimulatorModel } from "../simulator";

import "./test.scss";
import { surveyLocalization, PopupModel, ListModel, Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultV2Css, modernCss, defaultStandardCss } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { setSurveyJSONForPropertyGrid } from "../../property-grid";
import { propertyGridCss } from "../../property-grid-theme/property-grid";

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
  public pages: ActionContainer = new ActionContainer();
  public prevPageAction: Action;
  public testAgainAction: Action;
  public nextPageAction: Action;
  private selectPageAction: Action;
  private pagePopupModel: PopupModel;
  onSurveyCreatedCallback: (survey: SurveyModel) => any;

  public simulator: SurveySimulatorModel;
  private settingsSurveyValue: SurveyModel;

  @property({
    defaultValue: false,
    onSet: (val: boolean, target: TestSurveyTabViewModel) => {
      target.simulator.survey.showInvisibleElements = val;
    }
  })
  showInvisibleElements;
  @property({ defaultValue: true }) showPagesInTestSurveyTab;
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
  public get activeLanguage(): string {
    return this.getPropertyValue("activeLanguage", this.survey.locale || surveyLocalization.defaultLocale);
  }
  public set activeLanguage(val: string) {
    if (val === this.activeLanguage) return;
    this.setPropertyValue("activeLanguage", val);
    this.survey.locale = val;
  }
  public get survey(): SurveyModel {
    return this.simulator.survey;
  }
  public get pageActions(): Array<Action> {
    return this.pages.actions;
  }
  public get isPageToolbarVisible(): boolean {
    return this.pages.visibleActions.length > 0 && !this.surveyProvider.isMobileView;
  }

  constructor(private surveyProvider: CreatorBase, private startTheme: any = defaultV2Css) {
    super();
    this.settingsSurveyValue = this.createSettingsSurvey();
    this.simulator = new SurveySimulatorModel();
  }

  private updateSimulatorSurvey(json: any, theme: any) {
    this.simulator.survey = this.surveyProvider.createSurvey(json || {}, "test");
    this.simulator.survey.css = theme;
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
          const message: string = getLocString("ed.navigateToMsg") + " '" + url + "'.";
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

  public setJSON(json: any, currTheme: any) {
    this.json = json;
    if (json != null) {
      if (json.cookieName) {
        delete json.cookieName;
      }
    }
    this.updateSimulatorSurvey(json, currTheme);
  }

  public initialize(json: any, options: any) {
    this.setJSON(json, this.startTheme);
    this.updatePageList();

    if (options.showPagesInTestSurveyTab !== undefined) {
      this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
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
    return this.pageListItems[this.survey.pages.indexOf(this.survey.currentPage)];
  }
  private getSelectPageTitle(): string {
    return (this.activePage && this.getPageTitle(this.activePage, "survey-tester-selected")) || getLocString("ts.selectPage");
  }
  private getPageTitle(page: PageModel, reason = "survey-tester") {
    let title = this.surveyProvider.getObjectDisplayName(page, reason, page.title);
    if (title === page.name && title.indexOf("page") === 0) {
      const index: number = this.survey.pages.indexOf(page);
      return editorLocalization.getString("ed.pageTypeName") + " " + (index + 1);
    }
    return title;
  }
  private updatePageList() {
    const pages: Array<IAction> = [];
    for (let i: number = 0; i < this.survey.pages.length; i++) {
      const page: PageModel = this.survey.pages[i];
      pages.push({
        id: page.name,
        data: page,
        title: this.getPageTitle(page),
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

  public testAgain() {
    this.setJSON(this.json, this.simulator.survey.css);
    this.updatePageList();
    this.show();
  }

  public buildActions() {
    const pageActions: Array<Action> = [];

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
      const nearPage: PageModel = this.survey.visiblePages[currentIndex + shift];
      const pageIndex: number = this.survey.pages.indexOf(nearPage);
      this.activePage = this.survey.pages[pageIndex];
      pageList.selectedItem = this.pageListItems[pageIndex];
    };
    this.pagePopupModel = new PopupModel("sv-list", { model: pageList }, "top", "center");

    if (this.prevPageAction) {
      this.prevPageAction.css = this.survey && !this.survey.isFirstPage ? "sv-action-bar-item--secondary" : "";
      this.prevPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        const pageListItems = this.pageListItems;
        const isTestTabActive = this.surveyProvider.activeTab === "test";
        return this.isRunning && isTestTabActive && pageListItems.length > 1;
      });
      this.prevPageAction.iconName = <any>new ComputedUpdater<string>(() => {
        return this.surveyProvider.isMobileView ? "icon-arrow-left" : "icon-arrow-left_16x16";
      });
      this.prevPageAction.iconSize = <any>new ComputedUpdater<boolean>(() => {
        return this.surveyProvider.isMobileView ? 24 : 16;
      });
      this.prevPageAction.enabled = this.survey && !this.survey.isFirstPage;
      this.prevPageAction.action = () => setNearPage(false);
      pageActions.push(this.prevPageAction);
    }

    this.selectPageAction = new Action({
      id: "pageSelector",
      css: "svc-page-selector",
      title: this.getSelectPageTitle(),
      visible: this.isRunning && this.pageListItems.length > 1 && this.showPagesInTestSurveyTab,
      component: "sv-action-bar-item-dropdown",
      popupModel: this.pagePopupModel,
      action: (newPage) => {
        this.pagePopupModel.toggleVisibility();
      }
    });
    pageActions.push(this.selectPageAction);

    if (this.nextPageAction) {
      this.nextPageAction.css = this.survey && !this.survey.isLastPage ? "sv-action-bar-item--secondary" : "";
      this.nextPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        const pageListItems = this.pageListItems;
        const isTestTabActive = this.surveyProvider.activeTab === "test";
        return this.isRunning && isTestTabActive && pageListItems.length > 1;
      });
      this.nextPageAction.iconName = <any>new ComputedUpdater<string>(() => {
        return this.surveyProvider.isMobileView ? "icon-arrow-right" : "icon-arrow-right_16x16";
      });
      this.nextPageAction.iconSize = <any>new ComputedUpdater<boolean>(() => {
        return this.surveyProvider.isMobileView ? 24 : 16;
      });
      this.nextPageAction.enabled = this.survey && !this.survey.isLastPage;
      this.nextPageAction.action = () => setNearPage(true);
      pageActions.push(this.nextPageAction);
    }
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
  public get settingsSurvey(): SurveyModel {
    return this.settingsSurveyValue;
  }
  private get themeMapper() {
    return [
      { name: "Default", theme: defaultV2Css },
      { name: "Modern", theme: modernCss },
      { name: "Default (legacy)", theme: defaultStandardCss }
    ];
  }
  private getAvailableThemes(): string[] {
    const styles = getComputedStyle(document.body);
    return this.themeMapper
      .filter(item => styles.getPropertyValue(item.theme.variables.themeMark))
      .map(item => item.name);
  }
  private getStartThemeName(): string {
    const availableThemes = this.themeMapper.filter(item => item.theme.root === this.startTheme.root);
    if (availableThemes.length > 0) return availableThemes[0].name;
    return "Default";
  }
  private getSettingsSurveyJSON(): any {
    const availableThemes = this.getAvailableThemes();
    return {
      elements: [
        {
          type: "panel",
          name: "themes",
          elements: [
            {
              type: "dropdown",
              name: "appliedTheme",
              title: "Applied theme",
              titleLocation: "top",
              descriptionLocation: "hidden",
              choices: availableThemes,
              defaultValue: this.getStartThemeName(),
              showOptionsCaption: false
            },
          ],
          title: "Themes"
        }
      ]
    };
  }
  private updateResultsTemplate(theme) {
    this.simulator.survey.css = theme;
    this.simulator.survey.render();
  }
  private setTheme(themeName: string): void {
    const availableThemes = this.themeMapper.filter(item => item.name === themeName);
    let theme = <any>defaultV2Css;
    if (availableThemes.length > 0) {
      theme = availableThemes[0].theme;
    }
    this.isRunning ? this.updateSimulatorSurvey(this.json, theme) : this.updateResultsTemplate(theme);
  }
  protected createSettingsSurvey(): SurveyModel {
    var json = this.getSettingsSurveyJSON();
    setSurveyJSONForPropertyGrid(json);
    var res = this.surveyProvider.createSurvey(json, "test_settings");
    res.css = propertyGridCss;
    res.onValueChanged.add((sender, options) => {
      if (options.name === "appliedTheme") {
        this.setTheme(options.value);
      }
    });
    return res;
  }

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (!this.pages.hasActions) return;

    if (name === "activePage") {
      this.prevPageAction.css = this.survey && this.survey.visiblePages.indexOf(this.activePage) !== 0 ? "sv-action-bar-item--secondary" : "";
      this.prevPageAction.enabled = this.survey && this.survey.visiblePages.indexOf(this.activePage) !== 0;

      this.nextPageAction.css = this.survey && this.survey.visiblePages.indexOf(this.activePage) !== this.survey.visiblePages.length - 1 ? "sv-action-bar-item--secondary" : "";
      this.nextPageAction.enabled = this.survey && this.survey.visiblePages.indexOf(this.activePage) !== this.survey.visiblePages.length - 1;
      this.selectPageAction.title = this.getSelectPageTitle();
    }
    if (name === "isRunning" || name === "pageListItems" || name === "showPagesInTestSurveyTab") {
      this.selectPageAction.popupModel.contentComponentData.model.items = this.pageListItems;
      this.selectPageAction.popupModel.contentComponentData.model.selectedItem = this.getCurrentPageItem();
      this.selectPageAction.visible = this.isRunning && this.pageListItems.length > 1 && this.showPagesInTestSurveyTab;
    }
  }
}