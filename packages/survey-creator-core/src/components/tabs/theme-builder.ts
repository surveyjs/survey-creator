import { SurveySimulatorModel } from "../simulator";
import { Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultV2Css, ITheme } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { notShortCircuitAnd } from "../../utils/utils";

require("./theme-builder.scss");

export class ThemeTabViewModel extends Base {
  private json: any;
  public pages: ActionContainer = new ActionContainer();
  public prevPageAction: Action;
  public testAgainAction: Action;
  public nextPageAction: Action;
  private blockChanges = true;

  onSurveyCreatedCallback: (survey: SurveyModel) => any;

  public simulator: SurveySimulatorModel;
  @property({
    defaultValue: false,
    onSet: (val: boolean, target: ThemeTabViewModel) => {
      target.simulator.survey.showInvisibleElements = val;
    }
  })
  showInvisibleElements;
  @property({ defaultValue: true }) showPagesInTestSurveyTab;
  @property({
    defaultValue: true, onSet: (value: boolean, target: ThemeTabViewModel) => {
      if (!!target.simulator) target.simulator.isRunning = value;
    }
  }) isRunning: boolean;
  @propertyArray() pageListItems: Array<IAction>;
  @property({
    onSet: (val: PageModel, target: ThemeTabViewModel) => {
      if (!!val) {
        const survey = target.simulator.survey;
        if (survey.firstPageIsStarted) {
          if (val === survey.pages[0]) {
            survey.clear(false, true);
          } else {
            if (survey.state == "starting") {
              survey.setPropertyValue("isStartedState", false);
            }
          }
        }
        if (survey.state !== "starting") {
          survey.currentPage = val;
        }
      }
      target.updatePrevNextPageActionState();
    }
  })
  activePage: PageModel;

  public get survey(): SurveyModel {
    return this.simulator.survey;
  }
  public get pageActions(): Array<Action> {
    return this.pages.actions;
  }
  public get isPageToolbarVisible(): boolean {
    return false;
  }
  public get currentTheme(): ITheme {
    return this.surveyProvider.theme;
  }
  public get currentThemeCssVariables(): { [index: string]: string } {
    return this.currentTheme.cssVariables || {};
  }

  constructor(private surveyProvider: SurveyCreatorModel, private startThemeClasses: any = defaultV2Css) {
    super();
    this.simulator = new SurveySimulatorModel();
  }

  public get isMobileView() {
    return this.surveyProvider.isMobileView;
  }
  public get showResults() {
    return !this.isRunning && !this.isMobileView;
  }

  public updateSimulatorSurvey(json: any, theme: any) {
    const newSurvey = this.surveyProvider.createSurvey(json || {}, "theme", this, (survey: SurveyModel): void => {
      survey.setCss(theme, false);
      survey.fitToContainer = true;
      survey.addLayoutElement({
        id: "complete-customization",
        container: "completePage" as any,
        component: "svc-complete-page",
        data: this
      });
      if (!!json && !!json.locale) {
        survey.locale = json.locale;
      }
      survey.applyTheme(this.currentTheme);
    });
    this.simulator.survey = newSurvey;
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    const self: ThemeTabViewModel = this;
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
      self.setActivePageItem(self.simulator.survey.activePage, true);
    });
    this.survey.onCurrentPageChanged.add((sender: SurveyModel, options) => {
      self.activePage = options.newCurrentPage;
      self.setActivePageItem(options.oldCurrentPage, false);
      self.setActivePageItem(options.newCurrentPage, true);
    });
    this.survey.onPageVisibleChanged.add((sender: SurveyModel, options) => {
      self.updatePageItem(options.page);
      this.updatePrevNextPageActionState();
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
    this.blockChanges = true;
    try {
      this.setJSON(json, this.startThemeClasses);
      this.updatePageList();
      this.buildActions();

      if (options.showPagesInTestSurveyTab !== undefined) {
        this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
      }
    }
    finally {
      this.blockChanges = false;
    }
  }
  private updatePageItem(page: PageModel) {
    const item = this.getPageItemByPage(page);
    if (item) {
      item.enabled = page.isVisible;
    }
  }
  private getCurrentPageItem(): IAction {
    return this.pageListItems[this.survey.pages.indexOf(this.survey.activePage)];
  }
  private getSelectPageTitle(): string {
    return (this.activePage && this.getPageTitle(this.activePage, "preview-tab:selected-page", "survey-tester-selected")) || getLocString("ts.selectPage");
  }
  private getPageTitle(page: PageModel, area = "preview-tab:page-list", reason = "survey-tester") {
    let title = this.surveyProvider.getObjectDisplayName(page, area, reason, page.title);
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
    this.activePage = this.survey.activePage;
    this.isRunning = true;
  }

  public testAgain() {
    this.setJSON(this.json, this.simulator.survey.css);
    this.updatePageList();
    this.show();
  }

  public buildActions() {
    const pageActions: Array<Action> = [];
    const setNearPage: (isNext: boolean) => void = (isNext: boolean) => {
      const currentIndex: number = this.survey.currentPageNo;
      const shift: number = isNext ? 1 : -1;
      let newIndex = currentIndex + shift;
      if (this.survey.state === "starting" && isNext) {
        newIndex = 0;
      }
      let nearPage: PageModel = this.survey.visiblePages[newIndex];
      if (!isNext && currentIndex === 0 && this.survey.firstPageIsStarted
        && this.survey.pages.length > 0) {
        nearPage = this.survey.pages[0];
      }
      const pageIndex: number = this.survey.pages.indexOf(nearPage);
      this.activePage = this.survey.pages[pageIndex];
    };

    if (this.prevPageAction) {
      this.prevPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        const isRunning = this.survey.state === "running";
        const isActiveTab = this.surveyProvider.activeTab === "theme";
        return this.surveyProvider.isMobileView && notShortCircuitAnd(this.isRunning, isActiveTab, this.pageListItems.length > 1) && isRunning;
      });
      this.prevPageAction.iconName = <any>new ComputedUpdater<string>(() => {
        return this.surveyProvider.isMobileView ? "icon-arrow-left" : "icon-arrow-left_16x16";
      });
      this.prevPageAction.iconSize = <any>new ComputedUpdater<number>(() => {
        return this.surveyProvider.isMobileView ? 24 : 16;
      });
      this.prevPageAction.action = () => setNearPage(false);
      pageActions.push(this.prevPageAction);
    }

    if (this.nextPageAction) {
      this.nextPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        const isRunning = this.survey.state === "running";
        const isActiveTab = this.surveyProvider.activeTab === "theme";
        return this.surveyProvider.isMobileView && notShortCircuitAnd(this.isRunning, isActiveTab, this.pageListItems.length > 1) && isRunning;
      });
      this.nextPageAction.iconName = <any>new ComputedUpdater<string>(() => {
        return this.surveyProvider.isMobileView ? "icon-arrow-right" : "icon-arrow-right_16x16";
      });
      this.nextPageAction.iconSize = <any>new ComputedUpdater<number>(() => {
        return this.surveyProvider.isMobileView ? 24 : 16;
      });
      this.nextPageAction.action = () => setNearPage(true);
      pageActions.push(this.nextPageAction);
    }
    this.pages.actions = pageActions;
    this.pages.containerCss = "sv-action-bar--pages";
    this.updatePrevNextPageActionState();
  }
  private updatePrevNextPageActionState() {
    if (!this.prevPageAction || !this.survey) return;
    const isPrevEnabled = this.survey.firstPageIsStarted && this.survey.state !== "starting" || (!this.survey.firstPageIsStarted && !this.survey.isFirstPage);
    this.prevPageAction.enabled = isPrevEnabled;
    const isNextEnabled = this.survey && this.survey.visiblePages.indexOf(this.activePage) !== this.survey.visiblePages.length - 1;
    this.nextPageAction.enabled = isNextEnabled;
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

  public dispose(): void {
    this.simulator.dispose();
    super.dispose();
  }
}