import { SurveySimulatorModel } from "../simulator";
import { surveyLocalization, Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultV2Css, createDropdownActionModel, ComponentCollection, ITheme, ItemValue, ImageFit, ImageAttachment, QuestionDropdownModel, ValueChangingEvent, ValueChangedEvent, EventBase, Cover, Serializer, Question, IHeader, PanelModelBase } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { setSurveyJSONForPropertyGrid } from "../../property-grid";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { ColorCalculator, assign, ingectAlpha, notShortCircuitAnd, parseColor } from "../../utils/utils";
import { settings } from "../../creator-settings";
import { DefaultFonts, fontsettingsFromCssVariable, fontsettingsToCssVariable } from "./theme-custom-questions/font-settings";
import { elementSettingsFromCssVariable, elementSettingsToCssVariable } from "./theme-custom-questions/element-settings";
import { UndoRedoManager } from "../../plugins/undo-redo/undo-redo-manager";
import { PredefinedColors, PredefinedThemes, Themes } from "./themes";
import { QuestionFileEditorModel } from "../../custom-questions/question-file";
import { updateCustomQuestionJSONs } from "./theme-custom-questions";
import * as LibraryThemes from "survey-core/themes";
import { createBoxShadowReset } from "./theme-custom-questions/boxshadow-settings";
import { Switcher } from "../switcher/switcher";

require("./theme-builder.scss");

Object.keys(LibraryThemes).forEach(libraryThemeName => {
  const libraryTheme: ITheme = LibraryThemes[libraryThemeName];
  const creatorThemeVariables = {};
  const creatorTheme = {};
  assign(creatorThemeVariables, libraryTheme.cssVariables);
  assign(creatorTheme, libraryTheme, { cssVariables: creatorThemeVariables });
  const creatorThemeName = getThemeFullName(libraryTheme);
  Themes[creatorThemeName] = creatorTheme;
});

export function getThemeFullName(theme: ITheme) {
  const themeName = theme.themeName || ThemeBuilder.DefaultTheme.themeName || "default";
  let fullThemeName = themeName + "-" + (theme.colorPalette || "light");
  if (theme.isPanelless === true) {
    fullThemeName += "-panelless";
  }
  return fullThemeName;
}

export function getObjectDiffs(obj1: any, obj2: any = {}): any {
  const result: any = {};
  Object.keys(obj1).forEach(key => {
    if (typeof obj1[key] === "object") {
      result[key] = getObjectDiffs(obj1[key], obj2[key]);
    } else {
      if (obj1[key] !== undefined && obj1[key] != obj2[key]) {
        result[key] = obj1[key];
      }
    }
  });
  return result;
}

export function getThemeChanges(fullTheme: ITheme, baseTheme?: ITheme) {
  if (!baseTheme) {
    let probeThemeFullName = getThemeFullName(fullTheme);
    baseTheme = findSuitableTheme(fullTheme.themeName, fullTheme.colorPalette, fullTheme.isPanelless ? "lightweight" : "panels", probeThemeFullName);
  }
  const themeChanges: ITheme = getObjectDiffs(fullTheme, baseTheme);
  Object.keys(themeChanges).forEach(propertyName => {
    if (propertyName.toLowerCase().indexOf("background") !== -1) {
      if (themeChanges[propertyName] === "" || themeChanges[propertyName] === Serializer.findProperty("survey", propertyName).defaultValue) {
        delete themeChanges[propertyName];
      }
    }
  });
  themeChanges.themeName = baseTheme.themeName || ThemeBuilder.DefaultTheme.themeName || "default";
  themeChanges.colorPalette = baseTheme.colorPalette || "light";
  themeChanges.isPanelless = !!baseTheme.isPanelless;
  return themeChanges;
}

export function findSuitableTheme(themeName: string, themePalette: string, themeMode: string, probeThemeFullName: string) {
  let suitableTheme = Themes[probeThemeFullName];
  if (!!suitableTheme) {
    return suitableTheme;
  }
  const appropriateThemeNames = Object.keys(Themes).filter(fullName => fullName.indexOf(themeName + "-") === 0);
  for (let fullThemeName of appropriateThemeNames) {
    if (fullThemeName.indexOf(themeName + "-" + themePalette) === 0) {
      probeThemeFullName = themeName + "-" + themePalette;
    }
    if (fullThemeName.indexOf(themeName + "-" + themePalette + (themeMode === "lightweight" ? "-panelless" : "")) === 0) {
      probeThemeFullName = themeName + "-" + themePalette + (themeMode === "lightweight" ? "-panelless" : "");
    }
  }
  suitableTheme = Themes[appropriateThemeNames[0]];
  if (!!suitableTheme) {
    return suitableTheme;
  }
  const defaultNearestThemeFullName = getThemeFullName({ themeName: ThemeBuilder.DefaultTheme.themeName, colorPalette: themePalette || "light", isPanelless: themeMode === "lightweight" });
  return Themes[defaultNearestThemeFullName] || ThemeBuilder.DefaultTheme;
}

export class ThemeBuilder extends Base {
  public static DefaultTheme = Themes["default-light"];
  private json: any;
  public pages: ActionContainer = new ActionContainer();
  public prevPageAction: Action;
  public testAgainAction: Action;
  public nextPageAction: Action;
  public undoRedoManager: UndoRedoManager;
  private themeEditorSurveyValue: SurveyModel;
  private themeCssVariablesChanges: { [index: string]: string } = {};
  private colorCalculator = new ColorCalculator();
  private blockChanges = true;
  private _availableThemes = PredefinedThemes;
  private prevQuestionValues: { [index: string]: any } = {};

  onSurveyCreatedCallback: (survey: SurveyModel) => any;

  public get themeCssCustomizations() {
    const customizations: { [index: string]: string } = {};
    assign(customizations, this.themeCssVariablesChanges);
    return customizations;
  }

  public simulator: SurveySimulatorModel;
  @property({
    defaultValue: false,
    onSet: (val: boolean, target: ThemeBuilder) => {
      target.simulator.survey.showInvisibleElements = val;
    }
  })
  showInvisibleElements;
  @property({ defaultValue: true }) showPagesInTestSurveyTab;
  @property({
    defaultValue: true, onSet: (value: boolean, target: ThemeBuilder) => {
      if (!!target.simulator) target.simulator.isRunning = value;
    }
  }) isRunning: boolean;
  @propertyArray() pageListItems: Array<IAction>;
  @property({
    onSet: (val: PageModel, target: ThemeBuilder) => {
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
  @property({
    onSet: (newValue: string, _target: ThemeBuilder) => {
      _target.currentTheme.backgroundImage = newValue;
    }
  }) backgroundImage;
  @property({
    defaultValue: "cover", onSet: (newValue: ImageFit, _target: ThemeBuilder) => {
      _target.currentTheme.backgroundImageFit = newValue;
    }
  }) backgroundImageFit;
  @property({
    defaultValue: "scroll", onSet: (newValue: ImageAttachment, _target: ThemeBuilder) => {
      _target.currentTheme.backgroundImageAttachment = newValue;
    }
  }) backgroundImageAttachment;
  @property({
    onSet: (newValue: number, _target: ThemeBuilder) => {
      _target.currentTheme.backgroundOpacity = newValue / 100;
    }
  }) backgroundOpacity;
  @property({ defaultValue: "default" }) themeName;
  @property({ defaultValue: "light" }) themePalette;
  @property({ defaultValue: "panels" }) themeMode;
  @property() groupAppearanceAdvancedMode: boolean;

  getFullThemeName(_themeName?: string) {
    if (this.themePalette === "light") {
      return _themeName || this.themeName;
    }
    return (_themeName || this.themeName) + "-" + this.themePalette;
  }

  public get survey(): SurveyModel {
    return this.simulator.survey;
  }
  public get pageActions(): Array<Action> {
    return this.pages.actions;
  }
  public get isPageToolbarVisible(): boolean {
    // return this.pages.visibleActions.length > 0 && !this.surveyProvider.isMobileView;
    return false;
  }
  public get themeEditorSurvey(): SurveyModel {
    return this.themeEditorSurveyValue;
  }
  public get currentTheme(): ITheme {
    return this.surveyProvider.theme;
  }
  public get currentThemeCssVariables(): { [index: string]: string } {
    return this.currentTheme.cssVariables || {};
  }

  public onThemeSelected = new EventBase<ThemeBuilder, { theme: ITheme }>();
  public onThemePropertyChanged = new EventBase<ThemeBuilder, { name: string, value: any }>();
  public onAllowModifyTheme = new EventBase<ThemeBuilder, { theme: ITheme, allow: boolean }>();

  constructor(private surveyProvider: CreatorBase, private startThemeClasses: any = defaultV2Css) {
    super();
    this.simulator = new SurveySimulatorModel();
    this.themeName = ThemeBuilder.DefaultTheme.themeName || "default";
    updateCustomQuestionJSONs();
    this.themeEditorSurveyValue = this.createThemeEditorSurvey();
    const surveyTheme = this.surveyProvider.theme;
    this.backgroundImage = surveyTheme.backgroundImage !== undefined ? surveyTheme.backgroundImage : surveyProvider.survey.backgroundImage;
    this.backgroundImageFit = surveyTheme.backgroundImageFit !== undefined ? surveyTheme.backgroundImageFit : surveyProvider.survey.backgroundImageFit;
    this.backgroundImageAttachment = surveyTheme.backgroundImageAttachment !== undefined ? surveyTheme.backgroundImageAttachment : surveyProvider.survey.backgroundImageAttachment;
    this.backgroundOpacity = ((surveyTheme.backgroundOpacity !== undefined ? surveyTheme.backgroundOpacity : surveyProvider.survey.backgroundOpacity) || 1) * 100;
    this.loadTheme(surveyTheme);
    this.surveyProvider.hasPendingThemeChanges = false;
    this.undoRedoManager = new UndoRedoManager();
    this.surveyProvider.onPropertyChanged.add(this.creatorPropertyChanged);
  }

  public get isMobileView() {
    return this.surveyProvider.isMobileView;
  }
  public get showResults() {
    return !this.isRunning && !this.isMobileView;
  }

  public loadTheme(theme: ITheme) {
    this.blockThemeChangedNotifications += 1;
    try {
      let probeThemeFullName = getThemeFullName(theme);
      const baseTheme = findSuitableTheme(theme.themeName, theme.colorPalette, theme.isPanelless ? "lightweight" : "panels", probeThemeFullName);
      const themeChanges = getThemeChanges(theme, baseTheme);
      if (this.currentTheme === theme) {
        this.themeCssVariablesChanges = themeChanges.cssVariables || {};
      }
      this.themeName = themeChanges.themeName;
      this.themePalette = themeChanges.colorPalette;
      this.themeMode = themeChanges.isPanelless === true ? "lightweight" : "panels";

      this.backgroundImage = theme.backgroundImage || this.backgroundImage;
      this.backgroundImageFit = theme.backgroundImageFit || this.backgroundImageFit;
      this.backgroundImageAttachment = theme.backgroundImageAttachment || this.backgroundImageAttachment;

      const effectiveThemeCssVariables = {};
      assign(effectiveThemeCssVariables, ThemeBuilder.DefaultTheme.cssVariables || {}, baseTheme.cssVariables || {});
      assign(effectiveThemeCssVariables, theme.cssVariables || {}, this.themeCssVariablesChanges);
      this.trimCssVariables(effectiveThemeCssVariables);
      const effectiveTheme: ITheme = {
        backgroundImage: this.backgroundImage || baseTheme.backgroundImage || "",
        backgroundImageFit: this.backgroundImageFit || baseTheme.backgroundImageFit,
        backgroundImageAttachment: this.backgroundImageAttachment || baseTheme.backgroundImageAttachment,
        backgroundOpacity: (this.backgroundOpacity / 100) || baseTheme.backgroundOpacity,
      };
      const effectiveHeaderSettings: IHeader = {} as any;
      assign(effectiveHeaderSettings, baseTheme.header || {});
      if (Object.keys(effectiveHeaderSettings).length > 0) {
        effectiveTheme.header = effectiveHeaderSettings;
      }
      assign(effectiveTheme, theme, { cssVariables: effectiveThemeCssVariables, themeName: this.themeName, colorPalette: this.themePalette, isPanelless: this.themeMode === "lightweight" });
      this.surveyProvider.theme = effectiveTheme;

      this.initializeColorCalculator();
      this.loadThemeIntoPropertyGrid();
    }
    finally {
      this.blockThemeChangedNotifications -= 1;
    }
  }

  private _defaultSessionTheme = ThemeBuilder.DefaultTheme;
  public get defaultSessionTheme() {
    return this._defaultSessionTheme;
  }
  public set defaultSessionTheme(theme: ITheme) {
    this._defaultSessionTheme = theme;
  }

  public resetTheme() {
    this.setTheme({ themeName: this.defaultSessionTheme.themeName, isPanelless: this.defaultSessionTheme.isPanelless, colorPalette: this.defaultSessionTheme.colorPalette });
  }

  public setTheme(theme: ITheme) {
    this.themeCssVariablesChanges = {};
    this.backgroundImage = "";
    this.backgroundImageFit = "cover";
    this.backgroundImageAttachment = "scroll";
    this.backgroundOpacity = 100;
    this.loadTheme(theme);
    this.themeModified({ theme });
  }

  public selectTheme(themeName: string, themePalette: string = "light", themeMode: string = "panels") {
    this.themeName = themeName;
    this.themePalette = themePalette;
    this.themeMode = themeMode;
    const theme = this.findSuitableTheme(themeName);
    this.setTheme(theme);
  }

  public updateSimulatorSurvey(json: any, theme: any) {
    const newSurvey = this.surveyProvider.createSurvey(json || {}, "theme", this);
    newSurvey.setCss(theme, false);
    newSurvey.fitToContainer = true;
    newSurvey.addLayoutElement({
      id: "complete-customization",
      container: "completePage" as any,
      component: "svc-complete-page",
      data: this
    });
    newSurvey.locale = json.locale;
    this.simulator.survey = newSurvey;
    this.updateSimulatorTheme();
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    const self: ThemeBuilder = this;
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

  private creatorPropertyChanged = (sender, options) => {
    if (options.name === "isMobileView") {
      this.updateVisibilityOfPropertyGridGroups();
    }
  }
  private blockThemeChangedNotifications = 0;
  public initialize(json: any, options: any) {
    this.blockChanges = true;
    try {
      this.setJSON(json, this.startThemeClasses);
      this.updatePageList();
      this.updatePropertyGridEditors(this.themeEditorSurvey);
      this.updatePropertyGridEditorsAvailability();
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
    this.updatePropertyGridEditors(this.themeEditorSurvey);
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

  public get availableThemes() {
    return [].concat(this._availableThemes);
  }
  public set availableThemes(availebleThemes: string[]) {
    this._availableThemes = availebleThemes || [];
    if (this.themeEditorSurvey) {
      const themeChooser = this.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
      themeChooser.choices = availebleThemes.map(theme => ({ value: theme, text: getLocString("theme.names." + theme) }));
      if (availebleThemes.indexOf(themeChooser.value) === -1) {
        themeChooser.value = ThemeBuilder.DefaultTheme.themeName;
      }
      this.updatePropertyGridEditorsAvailability();
    }
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

  private getPredefinedColorsItemValues() {
    return Object.keys(PredefinedColors[this.themePalette]).map(colorName =>
      new ItemValue(PredefinedColors[this.themePalette][colorName], getLocString("theme.colors." + colorName))
    );
  }
  private initializeColorCalculator() {
    if (!this.currentTheme.cssVariables["--sjs-primary-backcolor"] ||
      !this.currentTheme.cssVariables["--sjs-primary-backcolor-light"] ||
      !this.currentTheme.cssVariables["--sjs-primary-backcolor-dark"]) {
      return;
    }

    this.colorCalculator.initialize(
      this.currentTheme.cssVariables["--sjs-primary-backcolor"],
      this.currentTheme.cssVariables["--sjs-primary-backcolor-light"],
      this.currentTheme.cssVariables["--sjs-primary-backcolor-dark"]
    );
  }

  private generalPropertiesChanged(options: ValueChangedEvent): boolean {
    if (["themeName", "themeMode", "themePalette"].indexOf(options.name) !== -1) {
      if (options.name === "themeName") {
        this.loadTheme(this.findSuitableTheme(options.value) || { [options.name]: options.value, isPanelless: this.themeMode === "lightweight", colorPalette: this.themePalette });
      }
      if (options.name === "themeMode") {
        this.loadTheme({ themeName: this.themeName, isPanelless: options.value === "lightweight", colorPalette: this.themePalette });
      }
      if (options.name === "themePalette") {
        this.loadTheme({ themeName: this.themeName, isPanelless: this.themeMode === "lightweight", colorPalette: options.value });
      }
      this.themeModified({ theme: this.currentTheme });
      return true;
    }
    if (["backgroundImage", "backgroundImageFit", "backgroundImageAttachment", "backgroundOpacity"].indexOf(options.name) !== -1) {
      this[options.name] = options.value;
      this.themeModified(options);
      return true;
    }
    return false;
  }
  private headerViewContainerPropertiesChanged(options: ValueChangedEvent) {
    const headerSettings = options.value[0];
    this.survey.headerView = headerSettings["headerView"];
    this.surveyProvider.survey.headerView = headerSettings["headerView"];
    if (headerSettings["headerView"] === "basic") {
      this.survey.logoPosition = headerSettings["logoPosition"];
      this.surveyProvider.survey.logoPosition = headerSettings["logoPosition"];
      fontsettingsToCssVariable(options.question.panels[0].getElementByName("surveyTitle"), this.themeCssVariablesChanges);
      fontsettingsToCssVariable(options.question.panels[0].getElementByName("surveyDescription"), this.themeCssVariablesChanges);
    } else {
      this.currentTheme.header = this.getCoverJson(headerSettings);
      this.setHeaderBackgroundColorCssVariable(headerSettings);
      fontsettingsToCssVariable(options.question.panels[0].getElementByName("headerTitle"), this.themeCssVariablesChanges);
      fontsettingsToCssVariable(options.question.panels[0].getElementByName("headerDescription"), this.themeCssVariablesChanges);
    }
    this.currentTheme.headerView = headerSettings["headerView"];
    this.themeModified(options);
  }
  private shadowInnerPropertiesChanged(options: ValueChangedEvent) {
    const name = options.name;
    const value = options.value;
    this.themeCssVariablesChanges[name + "-reset"] = createBoxShadowReset(value);
    this.themeModified(options);
  }
  private cssVariablePropertiesChanged(options: ValueChangedEvent) {
    if (options.name.indexOf("--") === 0) {
      this.setThemeCssVariablesChanges(options.name, options.value, options.question);
    }
    if (options.name == "commonScale") {
      this.survey.triggerResponsiveness(true);
      this.setThemeCssVariablesChanges("--sjs-base-unit", (options.value * 8 / 100) + "px", options.question);
    }
    if (options.name == "commonFontSize") {
      this.setThemeCssVariablesChanges("--sjs-font-size", (options.value * 16 / 100) + "px", options.question);
    }
    if (options.name == "cornerRadius") {
      this.setThemeCssVariablesChanges("--sjs-corner-radius", options.value + "px", options.question);
    }
    if (options.name === "questionBackgroundTransparency" || options.name === "editorPanel") {
      let baseColor = parseColor(this.themeEditorSurvey.getValue("--sjs-general-backcolor-dim-light")).color;
      let questionBackgroundTransparencyValue = this.themeEditorSurvey.getValue("questionBackgroundTransparency");
      this.setThemeCssVariablesChanges("--sjs-editor-background", ingectAlpha(baseColor, questionBackgroundTransparencyValue / 100), options.question);
    }
    if (options.name === "panelBackgroundTransparency" || options.name === "questionPanel") {
      let baseColor = parseColor(this.themeEditorSurvey.getValue("--sjs-general-backcolor")).color;
      let panelBackgroundTransparencyValue = this.themeEditorSurvey.getValue("panelBackgroundTransparency");
      this.setThemeCssVariablesChanges("--sjs-question-background", ingectAlpha(baseColor, panelBackgroundTransparencyValue / 100), options.question);
    }
    if (options.question?.getType() === "fontsettings") {
      fontsettingsToCssVariable(options.question, this.themeCssVariablesChanges);
      this.themeModified(options);
    }
    if (options.question?.getType() === "elementsettings") {
      elementSettingsToCssVariable(options.question, this.themeCssVariablesChanges);
      this.themeModified(options);
    }
  }
  private updateDependentQuestionValues(options: ValueChangedEvent) {
    if (options.name === "generalPrimaryColor") {
      this.themeEditorSurvey.setValue("--sjs-primary-backcolor", options.value);
      return true;
    }
    if (options.name === "--sjs-primary-backcolor") {
      this.colorCalculator.calculateColors(options.value);
      this.themeEditorSurvey.setValue("--sjs-primary-backcolor-light", this.colorCalculator.colorSettings.newColorLight);
      this.themeEditorSurvey.setValue("--sjs-primary-backcolor-dark", this.colorCalculator.colorSettings.newColorDark);
      this.themeEditorSurvey.getQuestionByName("generalPrimaryColor").value = options.value;
      return false;
    }
    return false;
  }
  private setThemeCssVariablesChanges(variableName: string, value: any, question: any) {
    this.themeCssVariablesChanges[variableName] = value;
    this.themeModified({ name: variableName, value: value, question: question } as any);
  }

  protected createThemeEditorSurvey(): SurveyModel {
    const json = this.getThemeEditorSurveyJSON();
    setSurveyJSONForPropertyGrid(json, true, false);
    const themeEditorSurvey = this.surveyProvider.createSurvey(json, "theme_editor", this);
    themeEditorSurvey.lazyRendering = true;
    themeEditorSurvey.lazyRenderingFirstBatchSize = 1;
    themeEditorSurvey.getCss().list = {};
    const themeBuilderCss = { ...propertyGridCss };
    themeBuilderCss.root += " spg-theme-builder-root";
    themeEditorSurvey.css = themeBuilderCss;
    themeEditorSurvey.enterKeyAction = "loseFocus";

    themeEditorSurvey.onValueChanging.add((sender, options: ValueChangingEvent) => {
      if (this.blockChanges) return;

      this.prevQuestionValues[options.name] = options.oldValue;
    });

    themeEditorSurvey.onValueChanged.add((sender, options: ValueChangedEvent) => {
      if (options.name === "advancedMode") return;
      if (this.blockChanges) return;

      if (this.blockThemeChangedNotifications == 0) {
        this.undoRedoManager.startTransaction(options.name + " changed");
      }
      this.undoRedoManager.onPropertyValueChanged("value", this.prevQuestionValues[options.name], options.value, options.question, undefined);

      if (this.generalPropertiesChanged(options)) {
        if (this.blockThemeChangedNotifications == 0) {
          this.undoRedoManager.stopTransaction();
        }
        return;
      }

      if (options.name === "headerViewContainer") {
        this.headerViewContainerPropertiesChanged(options);
      }

      if (options.name === "--sjs-shadow-inner") {
        this.shadowInnerPropertiesChanged(options);
      }

      this.cssVariablePropertiesChanged(options);

      this.blockThemeChangedNotifications += 1;
      const hasUpdatedDependentValues = this.updateDependentQuestionValues(options);

      const newCssVariables = {};
      assign(newCssVariables, this.currentTheme.cssVariables, this.themeCssVariablesChanges);
      this.trimCssVariables(newCssVariables);
      this.currentTheme.cssVariables = newCssVariables;

      this.blockThemeChangedNotifications -= 1;
      if (!!this.undoRedoManager && this.blockThemeChangedNotifications == 0) {
        this.undoRedoManager.stopTransaction();
      }

      if (hasUpdatedDependentValues) {
        this.themeModified(options);
      } else {
        this.updateSimulatorTheme();
      }
    });

    themeEditorSurvey.onUploadFiles.add((_, options) => {
      const callback = (status: string, data: any) => options.callback(status, [{ content: data, file: options.files[0] }]);
      this.surveyProvider.uploadFiles(options.files, undefined, callback);
    });
    this.patchFileEditors(themeEditorSurvey);
    themeEditorSurvey.getAllQuestions().forEach(q => q.allowRootStyle = false);
    themeEditorSurvey.onQuestionCreated.add((_, opt) => {
      opt.question.allowRootStyle = false;
    });
    themeEditorSurvey.onGetPanelFooterActions.add((sender, opt) => {
      if (opt.question && opt.question.name == "headerViewContainer") {
        opt.actions = [];
      }
    });
    themeEditorSurvey.onGetPanelTitleActions.add((sender, opt) => {
      if (this.surveyProvider.isMobileView) return;

      if (opt.panel && opt.panel.name == "groupAppearance") {
        opt.titleActions.push(this.createAppearanceAdvancedModeAction(opt.panel));
      }
    });
    themeEditorSurvey.onUpdatePanelCssClasses.add((sender, options) => {
      if (options.panel.hasParent) {
        const parent = (options.panel.parent ?? options.panel.parentQuestion);
        if (!parent || parent.hasParent && !(parent.name === "headerViewContainer" || parent.parentQuestion?.name === "headerViewContainer")) {
          options.cssClasses.panel.container = "spg-panel-group";
          options.cssClasses.panel.content = "spg-panel-group__content";
          options.cssClasses.panel.title = "spg-panel-group__title";
        }
        else {
          options.cssClasses.panel.container = "spg-nested-panel";
          options.cssClasses.panel.content = "spg-nested-panel__content";
          options.cssClasses.panel.title = "spg-nested-panel__title";
        }
      }
    });
    return themeEditorSurvey;
  }

  private createAppearanceAdvancedModeAction(panel: PanelModelBase) {
    const advancedMode = new Switcher({
      id: "advancedMode",
      component: "svc-switcher",
      ariaChecked: <any>new ComputedUpdater<boolean>(() => this.groupAppearanceAdvancedMode),
      ariaRole: "checkbox",
      css: "sv-theme-group_title-action",
      title: getLocString("theme.advancedMode"),
      action: () => {
        this.groupAppearanceAdvancedMode = !this.groupAppearanceAdvancedMode;
        panel.getQuestionByName("advancedMode").value = this.groupAppearanceAdvancedMode;
      }
    });
    this.registerFunctionOnPropertyValueChanged("groupAppearanceAdvancedMode",
      () => {
        advancedMode.checked = !advancedMode.checked;
      },
      "groupAppearanceAdvancedMode"
    );
    advancedMode.checked = false;
    return advancedMode;
  }

  findSuitableTheme(themeName: string): ITheme {
    let probeThemeFullName = getThemeFullName({ themeName: themeName, colorPalette: this.themePalette, isPanelless: this.themeMode === "lightweight" } as any);
    return findSuitableTheme(themeName, this.themePalette, this.themeMode, probeThemeFullName);
  }
  private patchFileEditors(survey: SurveyModel) {
    const questionsToPatch = survey.getAllQuestions(false, false, true).filter(q => q.getType() == "fileedit");
    questionsToPatch.forEach(q => { (<QuestionFileEditorModel>q).onChooseFilesCallback = (input, callback) => this.surveyProvider.chooseFiles(input, callback); });
  }

  private getCoverJson(headerSettings: any): any {
    const result = {};
    Serializer.getProperties("cover").map(pr => pr.name)
      .filter(key => headerSettings[key] !== undefined && headerSettings[key] !== null)
      .forEach(key => {
        result[key] = headerSettings[key];
      });

    result["backgroundImageOpacity"] = headerSettings["backgroundImageOpacity"] / 100;
    return result;
  }

  private setHeaderBackgroundColorCssVariable(headerSettings: any) {
    let headerBackgroundColorValue = undefined;
    if (headerSettings["backgroundColorSwitch"] === "none") {
      headerBackgroundColorValue = "transparent";
    } else if (headerSettings["backgroundColorSwitch"] === "custom") {
      headerBackgroundColorValue = headerSettings.backgroundColor ?? "transparent";
    }
    this.themeCssVariablesChanges["--sjs-header-backcolor"] = headerBackgroundColorValue;
  }

  private loadThemeIntoPropertyGrid() {
    this.blockChanges = true;
    try {
      this.themeEditorSurvey.clear(true);
      this.themeEditorSurvey.mergeData(this.currentTheme.cssVariables);
      this.themeEditorSurvey.setValue("themeName", this.themeName);
      this.themeEditorSurvey.setValue("themeMode", this.themeMode);
      this.themeEditorSurvey.setValue("themePalette", this.themePalette);
      this.updatePropertyGridEditors(this.themeEditorSurvey);
      this.updatePropertyGridEditorsAvailability();
    }
    finally {
      this.blockChanges = false;
    }
  }

  private getBackgroundColorSwitchByValue(backgroundColor: string) {
    if (!backgroundColor) return "accentColor";
    if (backgroundColor === "transparent") return "none";
    return "custom";
  }
  private updateVisibilityOfPropertyGridGroups() {
    const page = this.themeEditorSurvey.pages[0];
    let groupHeaderVisibility = true;
    if (!!this.survey) {
      groupHeaderVisibility = !!this.survey.logo || !!this.survey.title || !!this.survey.description;
    }
    page.getElementByName("groupHeader").visible = this.surveyProvider.isMobileView ? false : settings.theme.allowEditHeaderSettings && groupHeaderVisibility;
  }
  private setCoverPropertiesFromSurvey(panel, themeCssVariables: { [index: string]: string }) {
    panel.getQuestionByName("headerTitle").readOnly = !this.survey.hasTitle;
    fontsettingsFromCssVariable(panel.getQuestionByName("headerTitle"), themeCssVariables, themeCssVariables["--sjs-primary-forecolor"]);
    panel.getQuestionByName("headerDescription").readOnly = !this.survey.hasDescription;
    fontsettingsFromCssVariable(panel.getQuestionByName("headerDescription"), themeCssVariables, themeCssVariables["--sjs-primary-forecolor"]);

    panel.getQuestionByName("headerView").value = this.survey.headerView;
    panel.getQuestionByName("logoPosition").value = this.survey.logoPosition;

    panel.getQuestionByName("logoPositionX").readOnly = !this.survey.logo;
    panel.getQuestionByName("logoPositionY").readOnly = !this.survey.logo;
    panel.getQuestionByName("logoPosition").readOnly = !this.survey.logo;

    panel.getQuestionByName("titlePositionX").readOnly = !this.survey.title;
    panel.getQuestionByName("titlePositionY").readOnly = !this.survey.title;

    panel.getQuestionByName("descriptionPositionX").readOnly = !this.survey.description;
    panel.getQuestionByName("descriptionPositionY").readOnly = !this.survey.description;
  }
  private setCoverColorsFromThemeVariables(question: Question, cssVariable: string) {
    if (!!question && !!cssVariable && cssVariable !== "transparent") {
      question.value = cssVariable;
    }
  }
  private updateHeaderViewContainerEditors(themeCssVariables: { [index: string]: string }) {
    this.updateVisibilityOfPropertyGridGroups();

    const headerViewContainerQuestion = this.themeEditorSurvey.getQuestionByName("headerViewContainer");
    const panel = headerViewContainerQuestion.panels[0];
    panel.getQuestionByName("backgroundColor").choices = this.getPredefinedColorsItemValues();

    if (!!this.survey) {
      this.setCoverPropertiesFromSurvey(panel, themeCssVariables);
      panel.getQuestionByName("surveyTitle").readOnly = !this.survey.hasTitle;
      fontsettingsFromCssVariable(panel.getQuestionByName("surveyTitle"), themeCssVariables);
      panel.getQuestionByName("surveyDescription").readOnly = !this.survey.hasDescription;
      fontsettingsFromCssVariable(panel.getQuestionByName("surveyDescription"), themeCssVariables);

      fontsettingsFromCssVariable(panel.getElementByName("surveyTitle"), this.themeCssVariablesChanges);
      fontsettingsFromCssVariable(panel.getElementByName("surveyDescription"), this.themeCssVariablesChanges);
      fontsettingsFromCssVariable(panel.getElementByName("headerTitle"), this.themeCssVariablesChanges);
      fontsettingsFromCssVariable(panel.getElementByName("headerDescription"), this.themeCssVariablesChanges);
    }

    if (!!this.currentTheme.header) {
      Object.keys(this.currentTheme.header).forEach(key => {
        const question = panel.getQuestionByName(key);
        if (!!question && key === "backgroundImageOpacity") {
          question.value = this.currentTheme.header[key] * 100;
        } else if (question) {
          question.value = this.currentTheme.header[key];
        }
      });
      this.setCoverColorsFromThemeVariables(panel.getQuestionByName("backgroundColor"), themeCssVariables["--sjs-header-backcolor"]);

      const backgroundColorValue = themeCssVariables["--sjs-header-backcolor"];
      if (!!backgroundColorValue) {
        panel.getQuestionByName("backgroundColorSwitch").value = this.getBackgroundColorSwitchByValue(backgroundColorValue);
      }
    }
  }
  private updatePropertyGridEditorsAvailability() {
    const isCustomTheme = PredefinedThemes.indexOf(this.themeName) === -1;
    let customThemeHasModeVariations = false;
    let customThemeHasPaletteVariations = false;
    if (isCustomTheme) {
      const registeredThemes = Object.keys(Themes);
      let themeLight = this.themeName + "-light";
      let themeDark = this.themeName + "-dark";
      if (this.themeMode !== "panels") {
        themeLight += "-panelless";
        themeDark += "-panelless";
      }
      customThemeHasPaletteVariations = registeredThemes.indexOf(themeLight) !== -1 && registeredThemes.indexOf(themeDark) !== -1;

      let themePanels = this.themeName + "-" + this.themePalette;
      let themePanelless = themePanels + "-panelless";
      customThemeHasModeVariations = registeredThemes.indexOf(themePanels) !== -1 && registeredThemes.indexOf(themePanelless) !== -1;
    }
    this.themeEditorSurvey.getQuestionByName("themeMode").readOnly = isCustomTheme && !customThemeHasModeVariations;
    this.themeEditorSurvey.getQuestionByName("themePalette").readOnly = isCustomTheme && !customThemeHasPaletteVariations;

    let canModify = !this.surveyProvider.readOnly;
    const options = {
      theme: this.currentTheme,
      allow: canModify
    };
    this.onAllowModifyTheme.fire(this, options);
    this.themeEditorSurvey.getAllQuestions().forEach(q => {
      if (["themeName", "themePalette", "themeMode"].indexOf(q.name) === -1) {
        q.readOnly = !options.allow;
      }
    });

    if (!!this.survey) {
      let pageElements = this.survey.isSinglePage ? this.survey.pages[0].elements : this.survey.pages;
      this.themeEditorSurvey.getQuestionByName("pageTitle").readOnly = !pageElements.some(p => !!p.title);
      this.themeEditorSurvey.getQuestionByName("pageDescription").readOnly = !pageElements.some(p => !!p.description);
    }
  }

  private updatePropertyGridEditors(themeEditorSurvey: SurveyModel) {
    const newCssVariables = {};
    assign(newCssVariables, this.currentTheme.cssVariables);
    themeEditorSurvey.getQuestionByName("backgroundImage").value = this.currentTheme.backgroundImage;
    themeEditorSurvey.getQuestionByName("backgroundImageFit").value = this.currentTheme.backgroundImageFit;
    themeEditorSurvey.getQuestionByName("backgroundImageAttachment").value = this.currentTheme.backgroundImageAttachment;
    themeEditorSurvey.getQuestionByName("backgroundOpacity").value = this.currentTheme.backgroundOpacity * 100;
    themeEditorSurvey.getQuestionByName("generalPrimaryColor").value = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor").value;

    this.updateHeaderViewContainerEditors(newCssVariables);
    elementSettingsFromCssVariable(themeEditorSurvey.getQuestionByName("questionPanel"), newCssVariables, newCssVariables["--sjs-general-backcolor"], newCssVariables["--sjs-general-backcolor-dark"]);
    elementSettingsFromCssVariable(themeEditorSurvey.getQuestionByName("editorPanel"), newCssVariables, newCssVariables["--sjs-general-backcolor-dim-light"], newCssVariables["--sjs-general-backcolor-dim-dark"]);

    fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("pageTitle"), newCssVariables, newCssVariables["--sjs-general-dim-forecolor"]);
    fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("pageDescription"), newCssVariables, newCssVariables["--sjs-general-dim-forecolor-light"]);
    fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("questionTitle"), newCssVariables, newCssVariables["--sjs-general-forecolor"]);
    fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("questionDescription"), newCssVariables, newCssVariables["--sjs-general-forecolor-light"]);
    fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("editorFont"), newCssVariables, newCssVariables["--sjs-general-forecolor"], newCssVariables["--sjs-general-forecolor-light"]);

    if (!!newCssVariables["--sjs-corner-radius"]) {
      themeEditorSurvey.getQuestionByName("cornerRadius").value = parseFloat(newCssVariables["--sjs-corner-radius"]);
    }
    if (!!newCssVariables["--sjs-base-unit"]) {
      themeEditorSurvey.getQuestionByName("commonScale").value = parseFloat(newCssVariables["--sjs-base-unit"]) * 100 / 8;
    }
    if (!!newCssVariables["--sjs-font-size"]) {
      themeEditorSurvey.getQuestionByName("commonFontSize").value = parseFloat(newCssVariables["--sjs-font-size"]) * 100 / 16;
    }

    themeEditorSurvey.getAllQuestions().forEach(question => {
      if (["color", "colorsettings"].indexOf(question.getType()) !== -1) {
        (question as any).choices = this.getPredefinedColorsItemValues();
      }
    });
  }

  private trimCssVariables(newCssVariables: { [index: string]: string }): void {
    Object.keys(newCssVariables).forEach(key => {
      if (newCssVariables[key] === undefined || newCssVariables[key] === null) {
        delete newCssVariables[key];
      }
    });
  }

  private updateSimulatorTheme() {
    if (!!this.survey) {
      this.survey.applyTheme(this.currentTheme);
    }
  }

  private _saveThemeFuncValue: (
    no: number,
    onSaveCallback: (no: number, isSuccess: boolean) => void
  ) => void;
  /**
   * A function that is called [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#isAutoSave) is triggered to save a theme JSON object.
   * 
   * For more information, refer to the [Save and Load Custom Themes](https://surveyjs.io/survey-creator/documentation/theme-editor#save-and-load-custom-themes) help topic.
   */
  public get saveThemeFunc() {
    return this._saveThemeFuncValue;
  }
  public set saveThemeFunc(value: any) {
    this._saveThemeFuncValue = value;
  }

  private autoSaveTimerId = null;
  protected processAutoSave() {
    let saveThemeFunc = this.saveThemeFunc;
    if (!saveThemeFunc && this.surveyProvider.saveThemeFunc) {
      saveThemeFunc = () => this.surveyProvider.saveTheme();
    }
    if (!saveThemeFunc) {
      return;
    }
    if (this.surveyProvider.autoSaveDelay <= 0) {
      saveThemeFunc();
      return;
    }
    if (!!this.autoSaveTimerId) {
      clearTimeout(this.autoSaveTimerId);
    }
    this.autoSaveTimerId = setTimeout(() => {
      clearTimeout(this.autoSaveTimerId);
      this.autoSaveTimerId = null;
      saveThemeFunc && saveThemeFunc();
    }, this.surveyProvider.autoSaveDelay);
  }
  protected themeModified(options: { theme: ITheme } | { name: string, value: any }) {
    this.updateSimulatorTheme();
    if (this.blockThemeChangedNotifications == 0) {
      if (!!options["theme"]) {
        this.onThemeSelected.fire(this, options as { theme: ITheme });
      } else {
        this.surveyProvider.hasPendingThemeChanges = true;
        this.onThemePropertyChanged.fire(this, options as { name: string, value: any });
      }
      if (this.surveyProvider.isAutoSave) {
        this.processAutoSave();
      }
    }
  }

  private getDefaultTitleSetting() {
    const result = { family: settings.theme.fontFamily, weight: "700", size: 32 };
    return result;
  }
  private getDefaultDescriptionSetting(isAdvanced?: boolean) {
    const result = { family: settings.theme.fontFamily, weight: "400", size: 16 };
    if (isAdvanced) {
      result["weight"] = "600";
    }
    return result;
  }

  private getThemeEditorSurveyJSON() {
    const themeEditorSurveyJSON = {
      "clearInvisibleValues": "none",
      questionErrorLocation: "bottom",
      elements: [{
        type: "panel",
        name: "groupGeneral",
        state: "expanded",
        title: getLocString("theme.groupGeneral"),
        elements: [
          {
            type: "panel",
            elements: [
              {
                type: "panel",
                elements: [
                  {
                    type: "dropdown",
                    name: "themeName",
                    title: getLocString("theme.themeName"),
                    descriptionLocation: "hidden",
                    choices: this._availableThemes.map(theme => ({ value: theme, text: getLocString("theme.names." + theme) })),
                    defaultValue: ThemeBuilder.DefaultTheme.themeName || "default",
                    allowClear: false
                  },
                  {
                    type: "buttongroup",
                    name: "themePalette",
                    titleLocation: "hidden",
                    choices: [
                      { value: "light", text: getLocString("theme.themePaletteLight") },
                      { value: "dark", text: getLocString("theme.themePaletteDark") }
                    ],
                    defaultValue: "light"
                  },
                ]
              },
              {
                type: "buttongroup",
                name: "themeMode",
                title: getLocString("theme.themeMode"),
                choices: [
                  { value: "panels", text: getLocString("theme.themeModePanels") },
                  { value: "lightweight", text: getLocString("theme.themeModeLightweight") }],
                defaultValue: "panels"
              }
            ]
          }
        ]
      }, {
        type: "panel",
        name: "groupHeader",
        state: "collapsed",
        title: getLocString("theme.groupHeader"),
        elements: [
          {
            type: "panel",
            elements: [
              {
                "type": "paneldynamic",
                "name": "headerViewContainer",
                "titleLocation": "hidden",
                "allowAddPanel": false,
                "allowRemovePanel": false,
                "panelCount": 1,
                "defaultValue": [
                  {
                    "headerView": "basic",
                    "logoPosition": "right",
                    "inheritWidthFrom": "container",
                    "backgroundColorSwitch": "accentColor",
                    "backgroundImageFit": "cover",
                    "backgroundImageOpacity": 100,
                    "overlapEnabled": false,
                    "logoPositionX": "right",
                    "logoPositionY": "top",
                    "titlePositionX": "left",
                    "titlePositionY": "bottom",
                    "descriptionPositionX": "left",
                    "descriptionPositionY": "bottom",
                    "textAreaWidth": 512,
                    "height": 256,
                    surveyTitle: this.getDefaultTitleSetting(),
                    surveyDescription: this.getDefaultDescriptionSetting(),
                    headerTitle: this.getDefaultTitleSetting(),
                    headerDescription: this.getDefaultDescriptionSetting(true)
                  }
                ],
                "templateElements": [
                  {
                    type: "panel",
                    questionTitleLocation: "top",
                    elements: [
                      {
                        type: "buttongroup",
                        name: "headerView",
                        title: getLocString("theme.headerView"),
                        choices: [
                          { value: "basic", text: getLocString("theme.headerViewBasic") },
                          { value: "advanced", text: getLocString("theme.headerViewAdvanced") }
                        ]
                      },
                      {
                        type: "buttongroup",
                        name: "logoPosition",
                        title: getLocString("theme.logoPosition"),
                        visibleIf: "{panel.headerView} = 'basic'",
                        choices: [
                          { value: "left", text: getLocString("theme.horizontalAlignmentLeft") },
                          { value: "right", text: getLocString("theme.horizontalAlignmentRight") }
                        ],
                      },
                      {
                        type: "fontSettings",
                        name: "surveyTitle",
                        title: getLocString("theme.surveyTitle"),
                        visibleIf: "{panel.headerView} = 'basic'",
                        descriptionLocation: "hidden",
                        defaultValue: this.getDefaultTitleSetting(),
                      },
                      {
                        type: "fontSettings",
                        name: "surveyDescription",
                        title: getLocString("theme.surveyDescription"),
                        visibleIf: "{panel.headerView} = 'basic'",
                        descriptionLocation: "hidden",
                        defaultValue: this.getDefaultDescriptionSetting()
                      },
                      {
                        type: "spinedit",
                        name: "height",
                        title: getLocString("p.height"),
                        descriptionLocation: "hidden",
                        visibleIf: "{panel.headerView} = 'advanced'",
                        unit: "px",
                        min: 0
                      },
                      {
                        type: "buttongroup",
                        name: "inheritWidthFrom",
                        title: getLocString("theme.coverInheritWidthFrom"),
                        choices: [
                          { value: "survey", text: getLocString("theme.coverInheritWidthFromSurvey") },
                          { value: "container", text: getLocString("theme.coverInheritWidthFromContainer") }
                        ],
                        visibleIf: "{panel.headerView} = 'advanced'",
                      },
                      {
                        type: "spinedit",
                        name: "textAreaWidth",
                        title: getLocString("theme.coverTextAreaWidth"),
                        descriptionLocation: "hidden",
                        visibleIf: "{panel.headerView} = 'advanced'",
                        unit: "px",
                        min: 0
                      }
                    ]
                  }, {
                    type: "panel",
                    questionTitleLocation: "top",
                    visibleIf: "{panel.headerView} = 'advanced'",
                    elements: [
                      {
                        type: "panel",
                        elements: [
                          {
                            type: "buttongroup",
                            name: "backgroundColorSwitch",
                            title: getLocString("theme.coverBackgroundColorSwitch"),
                            choices: [
                              { value: "none", text: getLocString("theme.coverBackgroundColorNone") },
                              { value: "accentColor", text: getLocString("theme.coverBackgroundColorAccentColor") },
                              { value: "custom", text: getLocString("theme.coverBackgroundColorCustom") },
                            ],
                          },
                          {
                            type: "color",
                            name: "backgroundColor",
                            allowEmptyValue: true,
                            enableIf: "{panel.backgroundColorSwitch} = 'custom'",
                            titleLocation: "hidden",
                            descriptionLocation: "hidden",
                          },
                        ]
                      },
                      {
                        type: "panel",
                        title: getLocString("theme.backgroundImage"),
                        elements: [
                          {
                            type: "fileedit",
                            storeDataAsText: false,
                            name: "backgroundImage",
                            titleLocation: "hidden",
                            acceptedTypes: "image/*",
                            placeholder: "Browse..."
                          },
                          {
                            type: "buttongroup",
                            name: "backgroundImageFit",
                            enableIf: "{panel.backgroundImage} notempty",
                            titleLocation: "hidden",
                            choices: [
                              { value: "cover", text: getLocString("theme.backgroundImageFitCover") },
                              { value: "fill", text: getLocString("theme.backgroundImageFitFill") },
                              { value: "contain", text: getLocString("theme.backgroundImageFitContain") },
                              { value: "tile", text: getLocString("theme.backgroundImageFitTile") },
                            ],
                          },
                          {
                            type: "spinedit",
                            name: "backgroundImageOpacity",
                            enableIf: "{panel.backgroundImage} notempty",
                            titleLocation: "left",
                            title: getLocString("theme.backgroundOpacity"),
                            descriptionLocation: "hidden",
                            unit: "%",
                            min: 0,
                            max: 100,
                            step: 5
                          },
                        ]
                      }, {
                        type: "panel",
                        titleLocation: "hidden",
                        elements: [
                          {
                            type: "boolean",
                            name: "overlapEnabled",
                            renderAs: "checkbox",
                            title: getLocString("theme.coverOverlapEnabled"),
                            titleLocation: "hidden",
                            descriptionLocation: "hidden",
                          },
                        ]
                      }
                    ]
                  }, {
                    type: "panel",
                    questionTitleLocation: "top",
                    visibleIf: "{panel.headerView} = 'advanced'",
                    elements: [
                      {
                        type: "panel",
                        elements: [
                          {
                            type: "fontSettings",
                            name: "headerTitle",
                            title: getLocString("theme.surveyTitle"),
                            descriptionLocation: "hidden",
                            defaultValue: this.getDefaultTitleSetting()
                          },
                          {
                            type: "fontSettings",
                            name: "headerDescription",
                            title: getLocString("theme.surveyDescription"),
                            descriptionLocation: "hidden",
                            defaultValue: this.getDefaultDescriptionSetting(true)
                          },
                        ]
                      }
                    ]
                  }, {
                    type: "panel",
                    questionTitleLocation: "top",
                    visibleIf: "{panel.headerView} = 'advanced'",
                    elements: [
                      {
                        type: "panel",
                        elements: [
                          this.getHorizontalAlignment("logoPositionX", getLocString("theme.logoPosition"), "right"),
                          this.getVerticalAlignment("logoPositionY", "top"),
                        ]
                      },
                      {
                        type: "panel",
                        elements: [
                          this.getHorizontalAlignment("titlePositionX", getLocString("theme.coverTitlePosition"), "left"),
                          this.getVerticalAlignment("titlePositionY", "bottom"),
                        ]
                      },
                      {
                        type: "panel",
                        elements: [
                          this.getHorizontalAlignment("descriptionPositionX", getLocString("theme.coverDescriptionPosition"), "left"),
                          this.getVerticalAlignment("descriptionPositionY", "bottom"),
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }, {
        type: "panel",
        name: "groupBackground",
        state: "collapsed",
        title: getLocString("theme.groupBackground"),
        elements: [
          {
            type: "panel",
            elements: [
              {
                type: "color",
                name: "--sjs-general-backcolor-dim",
                title: getLocString("theme.backgroundDimColor"),
                descriptionLocation: "hidden",
              },
              {
                type: "panel",
                name: "background",
                title: getLocString("theme.backgroundImage"),
                elements: [
                  {
                    type: "fileedit",
                    storeDataAsText: false,
                    name: "backgroundImage",
                    titleLocation: "hidden",
                    acceptedTypes: "image/*",
                    placeholder: "Browse..."
                  },
                  {
                    type: "buttongroup",
                    name: "backgroundImageFit",
                    enableIf: "{backgroundImage} notempty",
                    titleLocation: "hidden",
                    choices: [
                      { value: "auto", text: getLocString("theme.backgroundImageFitAuto") },
                      { value: "contain", text: getLocString("theme.backgroundImageFitContain") },
                      { value: "cover", text: getLocString("theme.backgroundImageFitCover") }
                    ],
                    defaultValue: "cover"
                  },
                  {
                    type: "buttongroup",
                    name: "backgroundImageAttachment",
                    enableIf: "{backgroundImage} notempty",
                    titleLocation: "hidden",
                    choices: [
                      { value: "fixed", text: getLocString("theme.backgroundImageAttachmentFixed") },
                      { value: "scroll", text: getLocString("theme.backgroundImageAttachmentScroll") }
                    ],
                    defaultValue: "scroll"
                  },
                  {
                    type: "spinedit",
                    name: "backgroundOpacity",
                    enableIf: "{backgroundImage} notempty",
                    titleLocation: "left",
                    title: getLocString("theme.backgroundOpacity"),
                    descriptionLocation: "hidden",
                    unit: "%",
                    defaultValue: 100,
                    min: 0,
                    max: 100,
                    step: 5
                  },
                ]
              }
            ]
          }
        ]
      }, {
        type: "panel",
        name: "groupAppearance",
        state: "collapsed",
        title: getLocString("theme.groupAppearance"),
        elements: [
          {
            "type": "boolean",
            "name": "advancedMode",
            "visible": false,
            "defaultValue": "false"
          },
          {
            type: "panel",
            visibleIf: "{advancedMode} = false",
            elements: [
              {
                type: "color",
                name: "generalPrimaryColor",
                title: getLocString("theme.primaryColor"),
                descriptionLocation: "hidden",
              },
              {
                type: "spinedit",
                name: "panelBackgroundTransparency",
                title: getLocString("theme.panelBackgroundTransparency"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                max: 100,
                step: 5
              },
              {
                type: "spinedit",
                name: "questionBackgroundTransparency",
                title: getLocString("theme.questionBackgroundTransparency"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                max: 100,
                step: 5
              }
            ]
          }, {
            type: "panel",
            visibleIf: "{advancedMode} = false",
            elements: [
              {
                type: "dropdown",
                name: "--sjs-font-family",
                title: getLocString("theme.fontFamily"),
                descriptionLocation: "hidden",
                choices: [].concat(DefaultFonts),
                defaultValue: "Open Sans",
                allowClear: false
              },
              {
                type: "spinedit",
                name: "commonFontSize",
                title: getLocString("theme.fontSize"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                step: 5
              },
            ]
          }, {
            type: "panel",
            visibleIf: "{advancedMode} = false",
            elements: [
              {
                type: "spinedit",
                name: "commonScale",
                title: getLocString("theme.scale"),
                descriptionLocation: "hidden",
                unit: "%",
                defaultValue: 100,
                min: 0,
                step: 5
              },
              {
                type: "spinedit",
                name: "cornerRadius",
                title: getLocString("theme.cornerRadius"),
                descriptionLocation: "hidden",
                unit: "px",
                defaultValue: 4,
                min: 0
              },
            ]
          }, {
            type: "panel",
            visibleIf: "{advancedMode} = true",
            elements: [
              {
                type: "panel",
                title: getLocString("theme.accentBackground"),
                elements: [
                  {
                    type: "colorsettings",
                    name: "--sjs-primary-backcolor",
                    colorTitle: getLocString("theme.primaryDefaultColor"),
                    colorTitleLocation: "left",
                    titleLocation: "hidden",
                    descriptionLocation: "hidden",
                  },
                  {
                    type: "colorsettings",
                    name: "--sjs-primary-backcolor-dark",
                    colorTitle: getLocString("theme.primaryDarkColor"),
                    colorTitleLocation: "left",
                    titleLocation: "hidden",
                    descriptionLocation: "hidden",
                  },
                  {
                    type: "colorsettings",
                    name: "--sjs-primary-backcolor-light",
                    colorTitle: getLocString("theme.primaryLightColor"),
                    colorTitleLocation: "left",
                    titleLocation: "hidden",
                    descriptionLocation: "hidden",
                  }
                ]
              }, {
                type: "panel",
                title: getLocString("theme.accentForeground"),
                elements: [
                  {
                    type: "colorsettings",
                    name: "--sjs-primary-forecolor",
                    colorTitle: getLocString("theme.primaryForecolor"),
                    colorTitleLocation: "left",
                    titleLocation: "hidden",
                    descriptionLocation: "hidden",
                  },
                  {
                    type: "colorsettings",
                    name: "--sjs-primary-forecolor-light",
                    colorTitle: getLocString("theme.primaryForecolorLight"),
                    colorTitleLocation: "left",
                    titleLocation: "hidden",
                    descriptionLocation: "hidden",
                  }
                ]
              }, {
                type: "html",
                name: "theme",
                html: `<div class='spg-theme-group-caption'>${getLocString("theme.pageTitle")}</div>`,
              },
            ]
          }, {
            type: "panel",
            visibleIf: "{advancedMode} = true",
            elements: [
              {
                type: "fontSettings",
                name: "pageTitle",
                title: getLocString("theme.titleFont"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(0, 0, 0, 0.91)",
                  weight: "700",
                  size: 24
                }
              }, {
                type: "fontSettings",
                name: "pageDescription",
                title: getLocString("theme.descriptionFont"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(0, 0, 0, 0.45)",
                  weight: "400",
                  size: 16
                }
              }, {
                type: "html",
                name: "theme",
                html: `<div class='spg-theme-group-caption'>${getLocString("theme.questionTitle")}</div>`,
              },
            ]
          }, {
            type: "panel",
            visibleIf: "{advancedMode} = true",
            elements: [
              {
                type: "elementSettings",
                name: "questionPanel",
                title: getLocString("theme.backgroundCornerRadius"),
                descriptionLocation: "hidden",
                defaultValue: {
                  backcolor: "rgba(255, 255, 255, 1)",
                  hovercolor: "rgba(248, 248, 248, 1)",
                  cornerRadius: "4px",
                  corner: 4
                }
              },
              {
                type: "boxshadowsettings",
                name: "--sjs-shadow-small",
                descriptionLocation: "hidden",
                title: getLocString("theme.shadow"),
                defaultValue: [
                  {
                    x: 0,
                    y: 1,
                    blur: 2,
                    spread: 0,
                    isInset: false,
                    color: "rgba(0, 0, 0, 0.15)"
                  }
                ]
              },
              {
                type: "expression",
                name: "--sjs-general-backcolor",
                expression: "{questionPanel.backcolor}",
                visible: false
              }, {
                type: "fontSettings",
                name: "questionTitle",
                title: getLocString("theme.titleFont"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(0, 0, 0, 0.91)",
                  weight: "600",
                  size: 16,
                }
              }, {
                type: "fontSettings",
                name: "questionDescription",
                title: getLocString("theme.descriptionFont"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(0, 0, 0, 0.45)",
                  weight: "400",
                  size: 16
                }
              }, {
                type: "html",
                name: "theme",
                html: `<div class='spg-theme-group-caption'>${getLocString("theme.editorPanel")}</div>`,
              },
            ]
          }, {
            type: "panel",
            visibleIf: "{advancedMode} = true",
            elements: [
              {
                type: "elementSettings",
                name: "editorPanel",
                title: getLocString("theme.backgroundCornerRadius"),
                descriptionLocation: "hidden",
                defaultValue: {
                  backcolor: "rgba(255, 255, 255, 1)",
                  hovercolor: "rgba(248, 248, 248, 1)",
                  cornerRadius: "4px",
                  corner: 4
                }
              },
              {
                type: "boxshadowsettings",
                name: "--sjs-shadow-inner",
                descriptionLocation: "hidden",
                title: getLocString("theme.shadow"),
                defaultValue: [
                  {
                    x: 0,
                    y: 1,
                    blur: 2,
                    spread: 0,
                    isInset: true,
                    color: "rgba(0, 0, 0, 0.15)"
                  }
                ]
              },
              {
                type: "expression",
                name: "--sjs-general-backcolor-dim-light",
                expression: "{editorPanel.backcolor}",
                visible: false
              }, {
                type: "fontSettings",
                name: "editorFont",
                title: getLocString("theme.font"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(0, 0, 0, 0.91)",
                  weight: "400",
                  size: 16
                }
              }, {
                type: "html",
                name: "theme",
                html: `<div class='spg-theme-group-caption'>${getLocString("theme.lines")}</div>`,
              },
            ]
          }, {
            type: "panel",
            visibleIf: "{advancedMode} = true",
            elements: [{
              type: "panel",
              title: getLocString("theme.colorsTitle"),
              elements: [
                {
                  type: "colorsettings",
                  name: "--sjs-border-default",
                  colorTitle: getLocString("theme.borderDefault"),
                  colorTitleLocation: "left",
                  titleLocation: "hidden",
                  descriptionLocation: "hidden",
                },
                {
                  type: "colorsettings",
                  name: "--sjs-border-light",
                  colorTitle: getLocString("theme.borderLight"),
                  colorTitleLocation: "left",
                  titleLocation: "hidden",
                  descriptionLocation: "hidden",
                }
              ]
            }]
          }]
      }]
    };

    return themeEditorSurveyJSON;
  }

  getHorizontalAlignment(questionName: string, title: string, defaultValue: string) {
    return {
      type: "buttongroup",
      name: questionName,
      title: title,
      choices: [
        { value: "left", text: getLocString("theme.horizontalAlignmentLeft") },
        { value: "center", text: getLocString("theme.horizontalAlignmentCenter") },
        { value: "right", text: getLocString("theme.horizontalAlignmentRight") },
      ],
      defaultValue: defaultValue
    };
  }
  getVerticalAlignment(questionName: string, defaultValue: string) {
    return {
      type: "buttongroup",
      name: questionName,
      titleLocation: "hidden",
      choices: [
        { value: "top", text: getLocString("theme.verticalAlignmentTop") },
        { value: "middle", text: getLocString("theme.verticalAlignmentMiddle") },
        { value: "bottom", text: getLocString("theme.verticalAlignmentBottom") },
      ],
      defaultValue: defaultValue
    };
  }

  public dispose(): void {
    this.surveyProvider.onPropertyChanged.remove(this.creatorPropertyChanged);
    this.themeEditorSurveyValue?.dispose();
    this.simulator.dispose();
    super.dispose();
  }
}
