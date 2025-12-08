import { SurveySimulatorModel } from "../simulator";
import { Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultCss, createDropdownActionModel, surveyLocalization, ITheme, LocalizableString } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { notShortCircuitAnd } from "../../utils/utils";
import { findSuitableTheme, isThemeEmpty } from "./theme-model";
import { listComponentCss } from "../list-theme";

export class PreviewViewModel extends Base {
  public enableInvisiblePages: boolean = true;
  private json: any;
  public pages: ActionContainer = new ActionContainer();
  public prevPageAction: Action;
  public nextPageAction: Action;
  public selectPageAction: Action;
  public testAgainAction: Action;
  public simulator: SurveySimulatorModel;
  onSurveyCreatedCallback: (survey: SurveyModel) => any;

  @property({
    defaultValue: false,
    onSet: (val: boolean, target: PreviewViewModel) => {
      target.simulator.survey.showInvisibleElements = val;
    }
  })
    showInvisibleElements;
  @property({ defaultValue: true }) showPagesInTestSurveyTab;
  @property({
    defaultValue: true, onSet: (value: boolean, target: PreviewViewModel) => {
      if (!!target.simulator) target.simulator.isRunning = value;
    }
  }) isRunning: boolean;
  @propertyArray() pageListItems: Array<IAction>;
  @property({
    onSet: (val: PageModel, target: PreviewViewModel) => {
      if (!!val) {
        const survey = target.simulator.survey;
        if (survey.firstPageIsStartPage) {
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
  @property({}) isPageToolbarVisible = new ComputedUpdater(() => notShortCircuitAnd(!this.pages.isEmpty, !this.surveyProvider.isMobileView));

  constructor(protected surveyProvider: SurveyCreatorModel, private startThemeClasses: any = defaultCss) {
    super();
    this.simulator = new SurveySimulatorModel(surveyProvider);
    this.pages.cssClasses = {
      root: "sv-action-bar svc-pages-toolbar",
      item: "svc-preview-pager__item",
      itemActive: "svc-preview-pager__item--active",
      itemPressed: "svc-preview-pager__item--pressed",
      itemAsIcon: "svc-preview-pager__item--icon",
      itemIcon: "svc-preview-pager-item__icon",
      itemTitle: "svc-preview-pager-item__title",
    };
  }

  public get isMobileView() {
    return this.surveyProvider.isMobileView;
  }
  public get showResults() {
    return this.getShowResults();
  }

  public updateSimulatorSurvey(json: any, theme: any) {
    const newSurvey = this.surveyProvider.createSurvey(json || {}, this.getTabName(), this, (survey: SurveyModel): void => {
      let preferredTheme: ITheme = undefined;
      if (isThemeEmpty(this.surveyProvider.theme)) {
        preferredTheme = findSuitableTheme(undefined, this.surveyProvider.preferredColorPalette, undefined, undefined);
      }
      survey.applyTheme(preferredTheme || this.surveyProvider.theme);
      survey.setCss(theme, false);
      survey.fitToContainer = true;
      survey.addLayoutElement({
        id: "complete-customization",
        container: "completePage" as any,
        component: "svc-complete-page",
        data: this
      });
    });
    const hasSurveyBefore = !!this.simulator.survey;
    this.simulator.survey = newSurvey;
    if (this.onSurveyCreatedCallback)this.onSurveyCreatedCallback(this.survey);
    this.survey.onComplete.add((sender: SurveyModel) => {
      this.isRunning = false;
    });

    if (!!this.survey["onNavigateToUrl"]) {
      this.survey["onNavigateToUrl"].add((sender, options) => {
        const url: string = options.url;
        options.url = "";
        if (!!url && options.allow) {
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
      this.setActivePageItem(this.simulator.survey.activePage, true);
    });
    this.survey.onCurrentPageChanged.add((sender: SurveyModel, options) => {
      this.activePage = options.newCurrentPage;
      this.setActivePageItem(options.oldCurrentPage, false);
      this.setActivePageItem(options.newCurrentPage, true);
    });
    this.survey.onPageVisibleChanged.add((sender: SurveyModel, options) => {
      this.updatePageItem(options.page);
      this.updatePrevNextPageActionState();
    });
    if (hasSurveyBefore) {
      this.show();
    }
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
    this.setJSON(json, this.startThemeClasses);
    this.updatePageList();

    if (options.showPagesInTestSurveyTab !== undefined) {
      this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
    }

    this.buildActions();
  }
  private updatePageItem(page: PageModel) {
    const item = this.getPageItemByPage(page);
    if (item) {
      item.enabled = (this.enableInvisiblePages && this.showInvisibleElements) || page.isVisible;
    }
  }
  private getCurrentPageItem(): IAction {
    return this.pageListItems[this.survey.pages.indexOf(this.survey.activePage)];
  }
  private updateSelectedPageTitle(): void {
    const action = this.selectPageAction;
    if (action && this.activePage) {
      action.locTitle.setJson(this.activePage.locTitle.getJson());
      action.locTitle.strChanged();
    }
  }
  private getSelectPageTitle(text: string): string {
    return (this.activePage && this.getPageTitle(text, this.activePage, "preview-tab:selected-page", "survey-tester-selected")) || getLocString("ts.selectPage");
  }
  private getPageTitle(text: string, page: PageModel, area = "preview-tab:page-list", reason = "survey-tester") {
    let title = this.surveyProvider.getObjectDisplayName(page, area, reason, text);
    if (title === page.name && title.indexOf("page") === 0) {
      const index: number = this.survey.pages.indexOf(page);
      return editorLocalization.getString("ed.pageTypeName") + " " + (index + 1);
    }
    return title;
  }
  protected updatePageList() {
    const pages: Array<IAction> = [];
    for (let i: number = 0; i < this.survey.pages.length; i++) {
      const page: PageModel = this.survey.pages[i];
      const locTitle = new LocalizableString(page, true);
      locTitle.setJson(page.locTitle.getJson());
      locTitle.onGetTextCallback = (text: string): string => {
        return this.getPageTitle(text, page);
      };
      const pageItem: IAction = {
        id: page.name,
        data: page,
        locTitle: locTitle,
        enabled: (this.enableInvisiblePages && this.showInvisibleElements) || page.isVisible,
        visible: true
      };
      if (!page.isVisible) {
        pageItem.css = "svc-page-invisible";
        pageItem.markerIconName = "icon-invisible-items";
      }
      pages.push(pageItem);
    }
    this.pageListItems = pages;
  }

  protected getTabName(): string { return ""; }

  protected getShowResults(): boolean { return false; }

  public show() {
    this.showInvisibleElements = false;
    this.activePage = this.survey.activePage;
    this.survey.locale = this.activeLanguage;
    this.isRunning = true;
  }

  public testAgain() {
    this.setJSON(this.json, this.simulator.survey.css);
    this.updatePageList();
    this.show();
  }
  private isSurveyRunning(): boolean {
    const state = this.survey?.state;
    return state === "running" || state === "starting";
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
      let nearPage: PageModel = this.showInvisibleElements ? this.survey.pages[newIndex] : this.survey.visiblePages[newIndex];
      if (!isNext && currentIndex === 0 && this.survey.firstPageIsStartPage
        && this.survey.pages.length > 0) {
        nearPage = this.survey.pages[0];
      }
      const pageIndex: number = this.survey.pages.indexOf(nearPage);
      this.activePage = this.survey.pages[pageIndex];
      this.selectPageAction.data.selectedItem = this.pageListItems[pageIndex];
    };

    if (this.prevPageAction) {
      this.prevPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        const isRunning = this.isSurveyRunning();
        const isActiveTab = this.getTabName() === this.surveyProvider.activeTab;
        return notShortCircuitAnd(this.isRunning, isActiveTab, this.pageListItems.length > 1) && isRunning;
      });
      this.prevPageAction.iconName = <any>new ComputedUpdater<string>(() => {
        return this.surveyProvider.isMobileView ? "icon-arrow-left" : "icon-arrow-left_16x16";
      });
      this.prevPageAction.action = () => setNearPage(false);
      pageActions.push(this.prevPageAction);
    }
    const activePageLocTitle = new LocalizableString(this.survey, true);
    activePageLocTitle.onGetTextCallback = (text: string): string => {
      return this.getSelectPageTitle(text);
    };
    this.selectPageAction = createDropdownActionModel({
      id: "pageSelector",
      css: "svc-page-selector",
      locTitle: activePageLocTitle,
      visible: this.isRunning && this.pageListItems.length > 1 && this.showPagesInTestSurveyTab
    }, {
      items: this.pageListItems,
      allowSelection: true,
      selectedItem: this.getCurrentPageItem(),
      onSelectionChanged: (item: IAction) => {
        this.activePage = item.data;
        for (let i = 0; i < this.survey.pages.length && this.survey.pages[i] !== this.activePage; i++) {
          this.survey.pages[i].passed = true;
        }
      },
      onShow: () => {
        const listModel = this.selectPageAction.popupModel.contentComponentData.model;
        listModel.selectedItem = this.getCurrentPageItem();
      },
      cssClass: "svc-creator-popup",
      cssClasses: listComponentCss,
      verticalPosition: "top",
      horizontalPosition: "center"
    }, this.surveyProvider);
    this.updateSelectedPageTitle();
    pageActions.push(this.selectPageAction);
    this.selectPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
      return this.isSurveyRunning();
    });
    if (this.nextPageAction) {
      this.nextPageAction.visible = <any>new ComputedUpdater<boolean>(() => {
        const isRunning = this.isSurveyRunning();
        const isActiveTab = this.getTabName() === this.surveyProvider.activeTab;
        return notShortCircuitAnd(this.isRunning, isActiveTab, this.pageListItems.length > 1) && isRunning;
      });
      this.nextPageAction.iconName = <any>new ComputedUpdater<string>(() => {
        return this.surveyProvider.isMobileView ? "icon-arrow-right" : "icon-arrow-right_16x16";
      });
      this.nextPageAction.action = () => setNearPage(true);
      pageActions.push(this.nextPageAction);
    }
    this.pages.actions = pageActions;
    this.pages.containerCss = "sv-action-bar--pages";
    this.updatePrevNextPageActionState();
  }
  private setActivePageItem(page: PageModel, val: boolean) {
    const item: IAction = this.getPageItemByPage(page);
    if (item) {
      item.active = val;
    }
  }
  private getPageItemByPage(page: PageModel): IAction {
    const model = this.selectPageAction.popupModel.contentComponentData.model;
    if (!model || !Array.isArray(model.actions)) return undefined;
    const items: IAction[] = model.actions;
    for (let i = 0; i < items.length; i++) {
      if (items[i].data === page) return items[i];
    }
    return null;
  }
  private updateResultsTemplate(theme: any) {
    this.simulator.survey.setCss(theme, false);
    this.simulator.survey.render();
  }
  public setTheme(themeName: string, themeMapper: any): void {
    const availableThemes = themeMapper.filter(item => item.name === themeName);
    let theme = <any>defaultCss;
    if (availableThemes.length > 0) {
      theme = availableThemes[0].theme;
    }
    this.isRunning ? this.updateSimulatorSurvey(this.json, theme) : this.updateResultsTemplate(theme);
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (!this.pages.hasActions) return;

    if (name === "activePage") {
      this.updatePrevNextPageActionState();
      this.updateSelectedPageTitle();
    }
    if (name === "isRunning" || name === "pageListItems" || name === "showPagesInTestSurveyTab") {
      this.selectPageAction.popupModel.contentComponentData.model.items = this.pageListItems;
      this.selectPageAction.popupModel.contentComponentData.model.selectedItem = this.getCurrentPageItem();
      this.selectPageAction.visible = this.isRunning && this.pageListItems.length > 1 && this.showPagesInTestSurveyTab;
    }
  }
  private updatePrevNextPageActionState() {
    if (!this.prevPageAction || !this.survey) return;
    const isPrevEnabled = this.survey.firstPageIsStartPage && this.survey.state !== "starting"
      || (!this.survey.firstPageIsStartPage && !this.survey.isFirstPage);
    this.prevPageAction.enabled = isPrevEnabled;
    const isNextEnabled = this.survey && this.survey.visiblePages.indexOf(this.activePage) !== this.survey.visiblePages.length - 1;
    this.nextPageAction.enabled = isNextEnabled;
  }
  public get placeholderTitleText(): string {
    if (this.isMobileView)
      return getLocString("ed.previewPlaceholderTitleMobile");
    return getLocString("ed.previewPlaceholderTitle");
  }
  public get placeholderDescriptionText(): string {
    if (this.isMobileView)
      return getLocString("ed.previewPlaceholderDescriptionMobile");
    return getLocString("ed.previewPlaceholderDescription");
  }
  public onScroll() {
    this.survey.onScroll();
    return true;
  }
  public dispose(): void {
    if (this.selectPageAction) {
      this.selectPageAction.dispose();
    }
    this.simulator.dispose();
    super.dispose();
  }
}
