import { SurveySimulatorModel } from "../simulator";

import "./test.scss";
import { surveyLocalization, PopupModel, ListModel, Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultV2Css } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { getLocString } from "../../editorLocalization";

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
  public nextPageAction: Action;
  private selectPageAction: Action;
  private pagePopupModel: PopupModel;
  onSurveyCreatedCallback: (survey: SurveyModel) => any;

  public simulator: SurveySimulatorModel;

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

  constructor(private surveyProvider: CreatorBase<SurveyModel>) {
    super();
    this.simulator = new SurveySimulatorModel();
  }

  public setJSON(json: any) {
    this.json = json;
    if (json != null) {
      if (json.cookieName) {
        delete json.cookieName;
      }
    }
    this.simulator.survey = this.surveyProvider.createSurvey(json || {}, "test");
    this.simulator.survey.css = defaultV2Css;
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

  public initialize(json: any, options: any) {
    this.setJSON(json);
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
  private updatePageList() {
    const pages: Array<IAction> = [];
    for (let i: number = 0; i < this.survey.pages.length; i++) {
      const page: PageModel = this.survey.pages[i];
      pages.push({
        id: page.name,
        data: page,
        title: this.surveyProvider.getObjectDisplayName(page, "survey-tester", page.title),
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
    this.setJSON(this.json);
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
      this.prevPageAction.enabled = this.survey && !this.survey.isFirstPage;
      this.prevPageAction.action = () => setNearPage(false);
      pageActions.push(this.prevPageAction);
    }

    this.selectPageAction = new Action({
      id: "pageSelector",
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
  private getSelectPageTitle(): string {
    return (this.activePage && this.surveyProvider.getObjectDisplayName(this.activePage, "survey-tester-selected", this.activePage.title)) || getLocString("ts.selectPage");
  }
}