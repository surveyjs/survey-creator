import { SurveySimulatorModel } from "../simulator";
import { Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultCss, createDropdownActionModel, surveyLocalization, ITheme, LocalizableString, CssClassBuilder, IDialogOptions, settings as surveySettings, Helpers } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { notShortCircuitAnd } from "../../utils/utils";
import { createPageSelectorLocTitle } from "../../utils/actions";
import { findSuitableTheme, isThemeEmpty } from "./theme-model";
import { VariablePresetsManager } from "../../variable-presets";

export class PreviewViewModel extends Base {
  public enableInvisiblePages: boolean = true;
  private json: any;
  public pages: ActionContainer = new ActionContainer();
  public prevPageAction: Action;
  public nextPageAction: Action;
  public selectPageAction: Action;
  public selectVariablePresetAction: Action;
  public viewVariablesAction: Action;
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

  @property() isPageToolbarVisible: boolean;
  @property() tabContentAdditionalCss: string;

  // variablePresets is the Preview plugin's manager of the active preset (issue #7982); it outlives
  // this view model, which is rebuilt on every activation, so it is handed in rather than created.
  constructor(protected surveyProvider: SurveyCreatorModel, private startThemeClasses: any = defaultCss,
    protected variablePresets?: VariablePresetsManager) {
    super();
    this.simulator = new SurveySimulatorModel(surveyProvider);
    this.pages.setActionsAppearance({ style: "neutral", mode: "tertiary", size: "x-small" });
    this.pages.containerCss = "svc-pages-toolbar";

    this.isPageToolbarVisible = new ComputedUpdater<boolean>(() => notShortCircuitAnd(!this.pages.isEmpty, !this.surveyProvider.isMobileView)) as any as boolean;
    this.tabContentAdditionalCss = new ComputedUpdater<string>(() => {
      const self = this;
      const hasSimulatorFrame = self.simulator.hasFrame;
      const surveyIsEmpty = !!self.survey?.isEmpty;
      return new CssClassBuilder()
        .append("svc-test-tab--empty", surveyIsEmpty)
        .append("svc-test-tab--with-simulator-frame", hasSimulatorFrame)
        .append("svc-creator-tab__content--with-toolbar", !!self.isPageToolbarVisible)
        .toString();
    }) as any as string;
    // The active preset can change from outside - a host assigning it, or the preset editor - and
    // a host can replace the container; neither is reactive on its own, so the actions and the
    // running survey follow the creator's event and the creator's property change.
    this.variablePresetsChangedCallback = () => this.onVariablePresetsChanged();
    surveyProvider.onVariablePresetsChanged.add(this.variablePresetsChangedCallback);
    this.creatorPropertyChangedCallback = (sender: Base, options: any) => {
      if (options.name === "variablePresets") {
        this.onVariablePresetsChanged();
      }
    };
    surveyProvider.onPropertyChanged.add(this.creatorPropertyChangedCallback);
  }
  private variablePresetsChangedCallback: () => void;
  private creatorPropertyChangedCallback: (sender: Base, options: any) => void;
  // The variables the running survey was built with; {} when none were applied.
  private appliedVariables: { [name: string]: any } = {};
  // One path for every change, wherever it came from: the switcher, a host assigning the active
  // preset or the container, the preset editor. The survey restarts only when the values it would
  // run with differ from the ones it runs with, so choosing a preset with the same values, or a
  // change to an inactive preset, does not throw the answers away.
  private onVariablePresetsChanged(): void {
    this.updateVariablePresetActions();
    if (!this.simulator?.survey || !this.json) return;
    if (Helpers.isTwoValueEquals(this.appliedVariables, this.activeVariables)) return;
    // a survey mid-run whose variables change underneath is not a state production has, and the
    // answers already given belong to the branch the previous preset chose
    this.testAgain();
  }

  public get isMobileView() {
    return this.surveyProvider.isMobileView;
  }
  public get showResults() {
    return this.getShowResults();
  }

  protected createContentActions(): Array<Action> {
    return [this.testAgainAction];
  }

  protected createContentActionsContainer(): ActionContainer {
    const container = new ActionContainer();
    container.containerCss = "svc-preview__content-actions";
    container.setActionsAppearance({ mode: "tertiary-surface", size: "large", style: "brand", showBorder: true });
    container.setItems(this.createContentActions());
    return container;
  }

  private contentActionsContainerValue: ActionContainer;
  public get contentActionsContainer(): ActionContainer {
    if (!this.contentActionsContainerValue) {
      this.contentActionsContainerValue = this.createContentActionsContainer();
    }
    return this.contentActionsContainerValue;
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
        component: "sv-action-bar",
        data: this.contentActionsContainer
      });
      // Only when a host configured variable presets and this tab runs them: a creator without the
      // feature, and the Theme tab, must leave alone what a host set in
      // onSurveyInstanceSetupHandlers, which has already run by now.
      // Inside the callback, so that defaultValueExpression, a visibleIf on the first page and
      // calculated values see the variables while the model is still being built - set after
      // simulator.survey was assigned, the first page would render once without them.
      // clearPrevious: a preset is a complete world and not a patch, so what it does not name is
      // unset, a variable a setup handler set included.
      // The shallow copy keeps a survey that writes to a variable out of the host's container.
      // Nested object values stay shared by reference, exactly as they would be in a host that
      // passed them to setVariable itself.
      this.appliedVariables = {};
      if (!!this.variablePresets && !!this.surveyProvider.variablePresets) {
        this.appliedVariables = { ...this.activeVariables };
        survey.setVariables({ ...this.activeVariables }, true);
      }
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
      const locTitle = createPageSelectorLocTitle(page, (text: string) => this.getPageTitle(text, page));
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
    this.selectVariablePresetAction = createDropdownActionModel({
      id: "variablePresetSelector",
      css: "svc-variable-preset-selector",
      title: getLocString("vp.noPreset"),
      visible: false
    }, {
      items: [],
      allowSelection: true,
      onSelectionChanged: (item: IAction) => {
        // the restart, when the values differ, follows through onVariablePresetsChanged
        if (!!this.variablePresets) {
          this.variablePresets.active = item.id;
        }
      },
      cssClass: "svc-creator-popup",
      verticalPosition: "top",
      horizontalPosition: "center"
    }, this.surveyProvider);
    // The list header of the mock-up. PopupModel.title is not drawn in every display mode; nothing
    // else depends on it, so it stays a one-liner rather than a component that draws a header.
    this.selectVariablePresetAction.popupModel.title = getLocString("vp.selectorTitle");
    pageActions.push(this.selectVariablePresetAction);
    // No icon: nothing in the creator's icon set reads as "variable", and drawing one is a design
    // decision rather than an implementation one (issue #7982).
    this.viewVariablesAction = new Action({
      id: "variablePresetsView",
      css: "svc-variable-presets-view",
      title: getLocString("vp.view"),
      action: () => this.showVariablesDialog()
    });
    pageActions.push(this.viewVariablesAction);
    this.pages.actions = pageActions;
    this.updateVariablePresetActions();
    this.updatePrevNextPageActionState();
  }
  // A view model built without the plugin - older tests do that - has no manager and no variables.
  private get activeVariables(): { [name: string]: any } {
    return this.variablePresets?.activeVariables || {};
  }
  private get activeVariablePreset(): string {
    return this.variablePresets?.active || "";
  }
  // The container is a plain host object and is not reactive, so the actions are recomputed on
  // demand: when they are built, and whenever the creator says the presets or the selection changed.
  private updateVariablePresetActions(): void {
    if (!this.selectVariablePresetAction) return;
    const presets = this.surveyProvider.variablePresetsModel;
    const names = presets.getPresetNames();
    const activeName = this.activeVariablePreset;
    // Preset names are host data and not creator strings: they are shown as they were written, and
    // the list holds nothing but them - no synthetic "no preset" entry.
    const items: Array<IAction> = names.map(name => <IAction>{ id: name, title: name });
    const listModel = this.selectVariablePresetAction.popupModel.contentComponentData.model;
    listModel.items = items;
    listModel.selectedItem = items.filter(item => item.id === activeName)[0];
    this.selectVariablePresetAction.title = !!activeName
      ? getLocString("vp.selectorTitle") + ": " + activeName
      : getLocString("vp.noPreset");
    // No manager - the Theme tab inherits this toolbar and does not run presets - means no
    // controls, whatever the creator holds.
    const hasVariables = !!this.variablePresets && (names.length > 0 || presets.hasDefinition);
    this.selectVariablePresetAction.visible = <any>new ComputedUpdater<boolean>(() => {
      // deliberately not pageListItems.length: a one-page survey has no page selector and still
      // has variables. There is nothing to switch between with a single preset.
      return notShortCircuitAnd(hasVariables, names.length > 1) && this.isSurveyRunning();
    });
    this.viewVariablesAction.visible = <any>new ComputedUpdater<boolean>(() => {
      return notShortCircuitAnd(hasVariables, this.isSurveyRunning());
    });
    // One button, one id: with a definition it opens the preset editor and says Edit, or says View
    // when nothing may be changed - even then the editor is the structured view, with the
    // definition's titles and choices, and not raw JSON. Only canEdit picks the title; what the
    // button opens is decided by the definition alone.
    const canEditPresets = !!this.variablePresets && this.variablePresets.canEdit;
    this.viewVariablesAction.title = getLocString(canEditPresets ? "vp.edit" : "vp.view");
    // disabled rather than hidden, so that the bar does not reflow when a preset is chosen. With a
    // definition the list is worth opening with nothing active - an empty list is exactly where Add
    // is the next step - so that rule belongs to the JSON dialog alone.
    this.viewVariablesAction.enabled = presets.hasDefinition || !!activeName;
  }
  // With a definition the button opens the preset editor; without one there is nothing to build a
  // form from - no variable name, no type, no allowed values - and the read-only JSON below is the
  // honest answer.
  private showVariablesDialog(): void {
    if (!!this.variablePresets && this.surveyProvider.variablePresetsModel.hasDefinition) {
      this.variablePresets.showEditor();
    } else {
      this.showVariablesViewDialog();
    }
  }
  // A read-only comment question, not the Ace JSON editor: these values are not edited, not
  // validated and never written back, so the editor's completion, worker and bundle size buy
  // nothing here.
  public showVariablesViewDialog(): void {
    const creator = this.surveyProvider;
    const survey = creator.createSurvey({
      elements: [{
        type: "comment", name: "variables", titleLocation: "hidden",
        readOnly: true, autoGrow: true, rows: 12
      }]
    }, "variable-presets-view", this);
    survey.setValue("variables", JSON.stringify(this.activeVariables, null, 2));
    const popupModel = surveySettings.showDialog(<IDialogOptions>{
      componentName: "survey",
      data: { survey: survey, model: survey },
      onApply: (): boolean => { return true; },
      cssClass: "svc-property-editor svc-creator-popup",
      title: getLocString("vp.viewTitle") + " - " + this.activeVariablePreset,
      displayMode: "popup"
    }, creator.rootElement);
    if (!!popupModel) {
      const actions = popupModel.footerToolbar.actions;
      actions.splice(1, actions.length - 1);
      actions[0].title = "OK";
    }
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
    if (this.selectVariablePresetAction) {
      this.selectVariablePresetAction.dispose();
    }
    if (this.viewVariablesAction) {
      this.viewVariablesAction.dispose();
    }
    this.surveyProvider.onVariablePresetsChanged.remove(this.variablePresetsChangedCallback);
    this.surveyProvider.onPropertyChanged.remove(this.creatorPropertyChangedCallback);
    this.simulator.dispose();
    super.dispose();
  }
}
