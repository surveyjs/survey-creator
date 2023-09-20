import { SurveySimulatorModel } from "../simulator";
import { surveyLocalization, Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultV2Css, createDropdownActionModel, ComponentCollection, ITheme, ItemValue, ImageFit, ImageAttachment, QuestionDropdownModel, ValueChangingEvent, ValueChangedEvent, EventBase } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { setSurveyJSONForPropertyGrid } from "../../property-grid";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { ColorCalculator, assign, ingectAlpha, notShortCircuitAnd, parseColor } from "../../utils/utils";
import { settings } from "../../creator-settings";
import { DefaultFonts, fontsettingsFromCssVariable, fontsettingsToCssVariable } from "./theme-custom-questions/font-settings";
import { elementSettingsFromCssVariable, elementSettingsToCssVariable } from "./theme-custom-questions/element-settings";
import { UndoRedoManager } from "../../plugins/undo-redo/undo-redo-manager";
import { PredefinedColors, PredefinedThemes, Themes, getThemeFullName } from "./themes";

require("./theme-builder.scss");

export class ThemeBuilder extends Base {
  private json: any;
  public pages: ActionContainer = new ActionContainer();
  public testAgainAction: Action;
  public nextPageAction: Action;
  public undoRedoManager: UndoRedoManager;
  private themeEditorSurveyValue: SurveyModel;
  private themeCssVariablesChanges: { [index: string]: string } = {};
  private colorCalculator = new ColorCalculator();
  private blockChanges = false;
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
    }
  })
  activePage: PageModel;
  @property({
    onSet: (newValue: string, _target: ThemeBuilder) => {
      if (!!_target.survey) {
        _target.survey.backgroundImage = newValue;
      }
      _target.currentTheme["backgroundImage"] = newValue;
    }
  }) backgroundImage;

  @property({
    defaultValue: "cover", onSet: (newValue: ImageFit, _target: ThemeBuilder) => {
      if (!!_target.survey) {
        _target.survey.backgroundImageFit = newValue;
      }
      _target.currentTheme["backgroundImageFit"] = newValue;
    }
  }) backgroundImageFit;

  @property({
    defaultValue: "scroll", onSet: (newValue: ImageAttachment, _target: ThemeBuilder) => {
      if (!!_target.survey) {
        _target.survey.backgroundImageAttachment = newValue;
      }
      _target.currentTheme["backgroundImageAttachment"] = newValue;
    }
  }) backgroundImageAttachment;
  @property({
    onSet: (newValue: number, _target: ThemeBuilder) => {
      if (!!_target.survey) {
        _target.survey.backgroundOpacity = newValue / 100;
      }
      _target.currentTheme["backgroundOpacity"] = newValue / 100;
    }
  }) backgroundOpacity;
  @property({ defaultValue: "default" }) themeName;
  @property({ defaultValue: "light" }) themePalette;
  @property({ defaultValue: "panels" }) themeMode;

  getFullThemeName(_themeName?: string) {
    if (this.themePalette === "light") {
      return _themeName || this.themeName;
    }
    return (_themeName || this.themeName) + "-" + this.themePalette;
  }

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
  public onThemeModified = new EventBase<ThemeBuilder, { name: string, value: any }>();
  public onCanModifyTheme = new EventBase<ThemeBuilder, { theme: ITheme, canModify: boolean }>();

  constructor(private surveyProvider: CreatorBase, private startThemeClasses: any = defaultV2Css) {
    super();
    this.simulator = new SurveySimulatorModel();
    this.themeEditorSurveyValue = this.createThemeEditorSurvey();
    this.loadTheme(this.surveyProvider.theme);
    this.undoRedoManager = new UndoRedoManager();
  }

  public loadTheme(theme: ITheme) {
    this.blockThemeChangedNotifications += 1;
    try {
      this.themeName = theme.themeName || this.themeName;
      this.themePalette = theme.colorPalette || this.themePalette;
      if (theme.isPanelless !== undefined) {
        this.themeMode = theme.isPanelless === true ? "lightweight" : "panels";
      }
      this.backgroundImage = theme.backgroundImage || this.backgroundImage;
      this.backgroundImageFit = theme.backgroundImageFit || this.backgroundImageFit;
      this.backgroundImageAttachment = theme.backgroundImageAttachment || this.backgroundImageAttachment;

      const effectiveThemeCssVariables = {};
      assign(effectiveThemeCssVariables, Themes["default-light"].cssVariables || {}, this.findSuitableTheme(this.themeName).cssVariables || {});
      assign(effectiveThemeCssVariables, theme.cssVariables || {}, this.themeCssVariablesChanges);
      const effectiveTheme: ITheme = {};
      assign(effectiveTheme, theme, { cssVariables: effectiveThemeCssVariables });
      this.surveyProvider.theme = effectiveTheme;

      this.initializeColorCalculator();
      this.loadThemeIntoPropertyGrid();
    }
    finally {
      this.blockThemeChangedNotifications -= 1;
    }
  }

  public resetTheme() {
    this.setTheme({});
  }

  public setTheme(theme: ITheme) {
    this.themeCssVariablesChanges = {};
    this.loadTheme(theme);
    this.updateSimulatorTheme();
    this.surveyProvider.isThemePristine = true;
  }

  public selectTheme(themeName: string, themePalette: string = "light", themeMode: string = "panelless") {
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

  private blockThemeChangedNotifications = 0;
  public initialize(json: any, options: any) {
    this.blockThemeChangedNotifications += 1;
    try {
      this.setJSON(json, this.startThemeClasses);
      this.updatePageList();

      if (options.showPagesInTestSurveyTab !== undefined) {
        this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
      }
    }
    finally {
      this.blockThemeChangedNotifications -= 1;
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
    this.survey.locale = this.activeLanguage;
    this.isRunning = true;
  }

  public testAgain() {
    this.setJSON(this.json, this.simulator.survey.css);
    this.updatePageList();
    this.show();
  }

  public get availableThemes() {
    return [].concat(this._availableThemes);
  }
  public set availableThemes(availebleThemes: string[]) {
    this._availableThemes = availebleThemes || [];
    if (this.themeEditorSurvey) {
      const themeChooser = this.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
      themeChooser.choices = availebleThemes.map(theme => ({ value: theme, text: getLocString("theme.names." + theme) }));
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
        this.loadTheme(this.findSuitableTheme(options.value) || { [options.name]: options.value });
      }
      if (options.name === "themeMode") {
        this.loadTheme({ isPanelless: options.value === "lightweight" });
      }
      if (options.name === "themePalette") {
        this.loadTheme({ colorPalette: options.value });
      }
      this.updateSimulatorTheme();
      this.raiseThemeChanged();
      this.onThemeSelected.fire(this, { theme: this.currentTheme });
      this.surveyProvider.isThemePristine = Object.keys(this.themeCssVariablesChanges).length === 0;
      return true;
    }
    if (["backgroundImage", "backgroundImageFit", "backgroundImageAttachment", "backgroundOpacity"].indexOf(options.name) !== -1) {
      this[options.name] = options.value;
      this.raiseThemeChanged();
      this.raiseThemeModified(options);
      return true;
    }
    return false;
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
      this.raiseThemeChanged();
      this.raiseThemeModified(options);
    }
    if (options.question?.getType() === "elementsettings") {
      elementSettingsToCssVariable(options.question, this.themeCssVariablesChanges);
      this.raiseThemeChanged();
      this.raiseThemeModified(options);
    }
  }
  private updateDependentQuestionValues(options: ValueChangedEvent) {
    if (options.name === "generalBackcolorDimColor") {
      this.themeEditorSurvey.setValue("--sjs-general-backcolor-dim", options.value);
    }
    if (options.name === "--sjs-general-backcolor-dim") {
      this.themeEditorSurvey.getQuestionByName("generalBackcolorDimColor").value = options.value;
    }
    if (options.name === "generalPrimaryColor") {
      this.themeEditorSurvey.setValue("--sjs-primary-backcolor", options.value);
    }
    if (options.name === "--sjs-primary-backcolor") {
      this.colorCalculator.calculateColors(options.value);
      this.themeEditorSurvey.setValue("--sjs-primary-backcolor-light", this.colorCalculator.colorSettings.newColorLight);
      this.themeEditorSurvey.setValue("--sjs-primary-backcolor-dark", this.colorCalculator.colorSettings.newColorDark);
      this.themeEditorSurvey.getQuestionByName("generalPrimaryColor").value = options.value;
    }
  }
  private setThemeCssVariablesChanges(variableName: string, value: any, question: any) {
    this.themeCssVariablesChanges[variableName] = value;
    this.raiseThemeChanged();
    this.raiseThemeModified({ name: variableName, value: value, question: question });
  }

  protected createThemeEditorSurvey(): SurveyModel {
    const json = this.getThemeEditorSurveyJSON();
    setSurveyJSONForPropertyGrid(json, true, false);
    const themeEditorSurvey = this.surveyProvider.createSurvey(json, "theme_editor", this);
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
      this.cssVariablePropertiesChanged(options);

      this.blockThemeChangedNotifications += 1;
      this.updateDependentQuestionValues(options);

      const newCssVariables = {};
      assign(newCssVariables, this.currentTheme.cssVariables, this.themeCssVariablesChanges);
      this.currentTheme.cssVariables = newCssVariables;
      this.updateSimulatorTheme();

      this.blockThemeChangedNotifications -= 1;
      if (!!this.undoRedoManager && this.blockThemeChangedNotifications == 0) {
        this.undoRedoManager.stopTransaction();
      }
    });

    themeEditorSurvey.onUploadFiles.add((_, options) => {
      const callback = (status: string, data: any) => options.callback(status, [{ content: data, file: options.files[0] }]);
      this.surveyProvider.uploadFiles(options.files, undefined, callback);
    });
    themeEditorSurvey.getAllQuestions().forEach(q => q.allowRootStyle = false);
    themeEditorSurvey.onQuestionCreated.add((_, opt) => {
      opt.question.allowRootStyle = false;
    });
    return themeEditorSurvey;
  }
  findSuitableTheme(themeName: string): ITheme {
    let probeThemeFullName = getThemeFullName({ themeName: themeName, colorPalette: this.themePalette, isPanelless: this.themeMode === "lightweight" } as any);
    let suitableTheme = Themes[probeThemeFullName];
    if (!!suitableTheme) {
      return suitableTheme;
    }
    const appropriateThemeNames = Object.keys(Themes).filter(fullName => fullName.indexOf(themeName) === 0);
    for (let fullThemeName of appropriateThemeNames) {
      if (fullThemeName.indexOf(themeName + "-" + this.themePalette) === 0) {
        probeThemeFullName = themeName + "-" + this.themePalette;
      }
      if (fullThemeName.indexOf(themeName + "-" + this.themePalette + (this.themeMode === "lightweight" ? "-panelless" : "")) === 0) {
        probeThemeFullName = themeName + "-" + this.themePalette + (this.themeMode === "lightweight" ? "-panelless" : "");
      }
    }
    return Themes[probeThemeFullName] || Themes[appropriateThemeNames[0]];
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
      this.updatePropertyGridEditorsAvailability(this.themeEditorSurvey);
    }
    finally {
      this.blockChanges = false;
    }
  }

  private updatePropertyGridEditorsAvailability(themeEditorSurvey: SurveyModel) {
    const isCustomTheme = PredefinedThemes.indexOf(this.themeName) === -1;
    themeEditorSurvey.getQuestionByName("themeMode").readOnly = isCustomTheme;
    themeEditorSurvey.getQuestionByName("themePalette").readOnly = isCustomTheme;

    let canModify = !this.surveyProvider.readOnly;
    const options = {
      theme: this.currentTheme,
      canModify
    };
    this.onCanModifyTheme.fire(this, options);
    themeEditorSurvey.getAllQuestions().forEach(q => {
      if (["themeName", "themePalette", "themeMode"].indexOf(q.name) === -1) {
        q.readOnly = !options.canModify;
      }
    });
  }

  private updatePropertyGridEditors(themeEditorSurvey: SurveyModel) {
    const newCssVariables = {};
    assign(newCssVariables, this.currentTheme.cssVariables);
    themeEditorSurvey.getQuestionByName("backgroundImage").value = this.backgroundImage;
    themeEditorSurvey.getQuestionByName("backgroundImageFit").value = this.backgroundImageFit;
    themeEditorSurvey.getQuestionByName("backgroundImageAttachment").value = this.backgroundImageAttachment;
    themeEditorSurvey.getQuestionByName("generalPrimaryColor").value = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor").value;
    themeEditorSurvey.getQuestionByName("generalBackcolorDimColor").value = themeEditorSurvey.getQuestionByName("--sjs-general-backcolor-dim").value;

    elementSettingsFromCssVariable(themeEditorSurvey.getQuestionByName("questionPanel"), newCssVariables, newCssVariables["--sjs-general-backcolor"], newCssVariables["--sjs-general-backcolor-dark"]);
    elementSettingsFromCssVariable(themeEditorSurvey.getQuestionByName("editorPanel"), newCssVariables, newCssVariables["--sjs-general-backcolor-dim-light"], newCssVariables["--sjs-general-backcolor-dim-dark"]);

    fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("surveyTitle"), newCssVariables);
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
        (question as any).choices = Object.keys(PredefinedColors[this.themePalette]).map(colorName => new ItemValue(PredefinedColors[this.themePalette][colorName], getLocString("theme.colors." + colorName)));
      }
    });
  }

  private raiseThemeChanged() {
    if (this.blockThemeChangedNotifications == 0) {
      this.surveyProvider.raiseThemeChanged();
    }
  }
  private raiseThemeModified(options: any) {
    this.surveyProvider.isThemePristine = false;
    if (this.blockThemeChangedNotifications == 0) {
      this.onThemeModified.fire(this, options);
    }
  }

  private updateSimulatorTheme() {
    this.survey.applyTheme(this.currentTheme);
  }

  private getThemeEditorSurveyJSON() {
    const themeEditorSurveyJSON = {
      "clearInvisibleValues": "none",
      questionErrorLocation: "bottom",
      elements: [{
        type: "panel",
        state: "expanded",
        title: getLocString("theme.groupGeneral"),
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
                defaultValue: "default",
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
          }, {
            type: "panel",
            elements: [
              {
                type: "color",
                name: "generalPrimaryColor",
                title: getLocString("theme.primaryColor"),
                descriptionLocation: "hidden",
              },
              {
                type: "color",
                name: "generalBackcolorDimColor",
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
                    maxSize: this.surveyProvider.onUploadFile.isEmpty ? 65536 : undefined,
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
            elements: [
              {
                type: "dropdown",
                name: "--font-family",
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
          }
        ]
      }, {
        type: "panel",
        title: getLocString("theme.groupAdvanced"),
        state: "collapsed",
        elements: [
          {
            type: "panel",
            elements: [
              {
                type: "color",
                name: "--sjs-general-backcolor-dim",
                title: getLocString("theme.backgroundDimColor"),
                descriptionLocation: "hidden",
              }, {
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
              }]
          }, {
            type: "panel",
            elements: [
              {
                type: "fontSettings",
                name: "surveyTitle",
                title: getLocString("theme.surveyTitle"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(22, 22, 22, 1)",
                  weight: "700",
                  size: 32
                }
              }, {
                type: "fontSettings",
                name: "pageTitle",
                title: getLocString("theme.pageTitle"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(22, 22, 22, 1)",
                  weight: "700",
                  size: 24
                }
              }, {
                type: "fontSettings",
                name: "pageDescription",
                title: getLocString("theme.pageDescription"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(22, 22, 22, 1)",
                  weight: "400",
                  size: 16
                }
              }
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "elementSettings",
                name: "questionPanel",
                title: getLocString("theme.questionPanel"),
                descriptionLocation: "hidden",
                defaultValue: {
                  backcolor: "rgba(255, 255, 255, 1)",
                  hovercolor: "rgba(248, 248, 248, 1)",
                  corner: 4
                }
              },
              {
                type: "boxshadowsettings",
                name: "--sjs-shadow-small",
                descriptionLocation: "hidden",
                title: getLocString("theme.questionShadow"),
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
                title: getLocString("theme.questionTitle"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(22, 22, 22, 1)",
                  weight: "600",
                  size: 16,
                }
              }, {
                type: "fontSettings",
                name: "questionDescription",
                title: getLocString("theme.questionDescription"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(22, 22, 22, 1)",
                  weight: "400",
                  size: 16
                }
              }
            ]
          }, {
            type: "panel",
            elements: [
              {
                type: "elementSettings",
                name: "editorPanel",
                title: getLocString("theme.editorPanel"),
                descriptionLocation: "hidden",
                defaultValue: {
                  backcolor: "rgba(255, 255, 255, 1)",
                  hovercolor: "rgba(248, 248, 248, 1)",
                  corner: 4
                }
              },
              {
                type: "boxshadowsettings",
                name: "--sjs-shadow-inner",
                descriptionLocation: "hidden",
                title: getLocString("theme.editorShadow"),
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
              }, {
                type: "expression",
                name: "--sjs-general-backcolor-dim-light",
                expression: "{editorPanel.backcolor}",
                visible: false
              }, {
                type: "fontSettings",
                name: "editorFont",
                title: getLocString("theme.editorFont"),
                descriptionLocation: "hidden",
                defaultValue: {
                  family: settings.theme.fontFamily,
                  color: "rgba(22, 22, 22, 1)",
                  weight: "400",
                  size: 16
                }
              }
            ]
          }, {
            type: "panel",
            elements: [{
              type: "panel",
              title: getLocString("theme.linesColors"),
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

  public dispose(): void {
    this.themeEditorSurveyValue?.dispose();
    this.simulator.dispose();
    super.dispose();
  }
}
