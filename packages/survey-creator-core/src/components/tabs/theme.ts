import { SurveySimulatorModel } from "../simulator";
import { surveyLocalization, Base, propertyArray, property, PageModel, SurveyModel, Action, IAction, ActionContainer, ComputedUpdater, defaultV2Css, createDropdownActionModel, ComponentCollection, ITheme, ItemValue, ImageFit, ImageAttachment, QuestionDropdownModel } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { setSurveyJSONForPropertyGrid } from "../../property-grid";
import { propertyGridCss } from "../../property-grid-theme/property-grid";
import { ColorCalculator, assign, ingectAlpha, notShortCircuitAnd, parseColor } from "../../utils/utils";
import { settings } from "../../creator-settings";
import { DefaultFonts, fontsettingsFromCssVariable, fontsettingsToCssVariable } from "./theme-custom-questions/font-settings";
import { elementSettingsFromCssVariable, elementSettingsToCssVariable } from "./theme-custom-questions/element-settings";

require("./theme.scss");
export const Themes = require("../../../imported-themes.json");

export const PredefinedThemes: string[] = ["default", "sharp", "borderless", "flat", "plain", "doubleborder", "layered", "solid", "threedimensional", "contrast"];

export const PredefinedColors = {
  light: {
    teal: "rgba(11, 128, 128, 1)",
    blue: "rgba(39, 114, 203, 1)",
    purple: "rgba(122, 70, 187, 1)",
    orchid: "rgba(178, 61, 153, 1)",
    tulip: "rgba(191, 76, 97, 1)",
    brown: "rgba(177, 94, 47, 1)",
    green: "rgba(11, 134, 75, 1)"
  },
  dark: {
    teal: "rgba(22, 198, 187, 1)",
    blue: "rgba(109, 183, 252, 1)",
    purple: "rgba(173, 144, 255, 1)",
    orchid: "rgba(232, 113, 220, 1)",
    tulip: "rgba(245, 131, 151, 1)",
    brown: "rgba(252, 187, 89, 1)",
    green: "rgba(140, 204, 90, 1)"
  }
};

export interface ICreatorTheme extends ITheme {
  themeName?: string;
  colorPalette?: string;
}

export class ThemeSurveyTabViewModel extends Base {
  private json: any;
  public exportToFileUI: any;
  public importFromFileUI: any;
  public pages: ActionContainer = new ActionContainer();
  public testAgainAction: Action;
  private themeEditorSurveyValue: SurveyModel;
  private themeChanges = {};
  private colorCalculator = new ColorCalculator();
  private blockChanges = false;
  private _availableThemes = PredefinedThemes;
  onSurveyCreatedCallback: (survey: SurveyModel) => any;

  public simulator: SurveySimulatorModel;
  @property({
    defaultValue: false,
    onSet: (val: boolean, target: ThemeSurveyTabViewModel) => {
      target.simulator.survey.showInvisibleElements = val;
    }
  })
  showInvisibleElements;
  @property({ defaultValue: true }) showPagesInTestSurveyTab;
  @property({
    defaultValue: true, onSet: (value: boolean, target: ThemeSurveyTabViewModel) => {
      if (!!target.simulator) target.simulator.isRunning = value;
    }
  }) isRunning: boolean;
  @propertyArray() pageListItems: Array<IAction>;
  @property({
    onSet: (val: PageModel, target: ThemeSurveyTabViewModel) => {
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
    onSet: (newValue: string, _target: ThemeSurveyTabViewModel) => {
      if (!!_target.survey) {
        _target.survey.backgroundImage = newValue;
      }
      _target.currentTheme["backgroundImage"] = newValue;
      _target.raiseThemeChanged();
    }
  }) backgroundImage;

  @property({
    defaultValue: "cover", onSet: (newValue: ImageFit, _target: ThemeSurveyTabViewModel) => {
      if (!!_target.survey) {
        _target.survey.backgroundImageFit = newValue;
      }
      _target.currentTheme["backgroundImageFit"] = newValue;
      _target.raiseThemeChanged();
    }
  }) backgroundImageFit;

  @property({
    defaultValue: "scroll", onSet: (newValue: ImageAttachment, _target: ThemeSurveyTabViewModel) => {
      if (!!_target.survey) {
        _target.survey.backgroundImageAttachment = newValue;
      }
      _target.currentTheme["backgroundImageAttachment"] = newValue;
      _target.raiseThemeChanged();
    }
  }) backgroundImageAttachment;
  @property({ defaultValue: "default" }) themeName;
  @property({ defaultValue: "light" }) themePalette;
  @property({ defaultValue: "panels" }) themeMode;

  getFullThemeName(_themeName?: string) {
    if (this.themePalette === "light") {
      return _themeName || this.themeName;
    }
    return (_themeName || this.themeName) + "-" + this.themePalette;
  }
  get themeVariables(): any {
    return Themes[this.getFullThemeName()];
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
  public get currentTheme(): ICreatorTheme {
    return this.surveyProvider.theme;
  }

  public applySelectedTheme() {
    const newTheme = {};
    assign(newTheme, Themes[this.getFullThemeName("default")], Themes[this.getFullThemeName()]);
    if (this.survey["isCompact"]) {
      assign(newTheme, Themes[this.getFullThemeName() + "-lw"]);
    }
    assign(newTheme, this.themeChanges);

    this.currentTheme.cssVariables = newTheme;
    this.loadThemeIntoPropertyGrid(this.themeEditorSurvey);
    this.setThemeToSurvey();
  }

  constructor(private surveyProvider: CreatorBase, private startTheme: any = defaultV2Css) {
    super();
    this.simulator = new SurveySimulatorModel();
    this.loadTheme(this.surveyProvider.theme);
    this.themeEditorSurveyValue = this.createThemeEditorSurvey();
    var self = this;
    this.exportToFileUI = function () {
      self.exportToFile(settings.theme.exportFileName);
    };
    this.importFromFileUI = function (el) {
      if (el.files.length < 1) return;
      self.importFromFile(el.files[0]);
      el.value = "";
    };
  }

  private loadTheme(theme: ICreatorTheme) {
    this.blockThemeChangedNotifications += 1;
    this.themeName = theme.themeName;
    this.themePalette = theme.colorPalette;
    this.themeMode = theme.isPanelless ? "lightweight" : undefined;
    this.backgroundImage = theme.backgroundImage;
    this.backgroundImageFit = theme.backgroundImageFit;
    this.backgroundImageAttachment = theme.backgroundImageAttachment;

    const fullThemeName = this.getFullThemeName();
    if (!Themes[fullThemeName]) {
      Themes[fullThemeName] = theme;
      const themeSelector = this.themeEditorSurvey.getQuestionByName("themeName");
      themeSelector.choices = themeSelector.choices.concat(new ItemValue(theme.themeName));
    }
    const themeVariables = {};
    assign(themeVariables, this.themeVariables, theme.cssVariables);
    theme.cssVariables = themeVariables;
    this.blockThemeChangedNotifications -= 1;
  }

  public updateSimulatorSurvey(json: any, theme: any) {
    const newSurvey = this.surveyProvider.createSurvey(json || {}, "theme");
    newSurvey.setCss(theme, false);
    newSurvey.fitToContainer = true;
    this.simulator.survey = newSurvey;
    this.setThemeToSurvey();
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    const self: ThemeSurveyTabViewModel = this;
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

  public exportToFile(fileName: string) {
    if (!window) return;
    const data = JSON.stringify(this.currentTheme, null, 4);
    const blob = new Blob([data], { type: "application/json" });
    if (window.navigator["msSaveOrOpenBlob"]) {
      window.navigator["msSaveBlob"](blob, fileName);
    } else {
      const elem = window.document.createElement("a");
      elem.href = window.URL.createObjectURL(blob);
      elem.download = fileName;
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
    }
  }
  public importFromFile(file: File) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const theme: ITheme | any = JSON.parse(fileReader.result as string);
      this.setThemeFromFile(theme);
    };
    fileReader.readAsText(file);
  }

  public setThemeFromFile(theme: ITheme) {
    this.surveyProvider.theme = theme;
    this.loadTheme(theme);
    this.loadThemeIntoPropertyGrid(this.themeEditorSurvey);
    this.initializeColorCalculator();
    this.setThemeToSurvey();
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
      this.setJSON(json, this.startTheme);
      this.updatePageList();

      if (options.showPagesInTestSurveyTab !== undefined) {
        this.showPagesInTestSurveyTab = options.showPagesInTestSurveyTab;
      }

      this.buildActions();
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

  public resetTheme() {
    this.themeChanges = {};
    this.applySelectedTheme();
    if (this.themeName === "default" && this.themeMode === "panels" && this.themePalette === "light") {
      this.surveyProvider.isThemePristine = true;
    }
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

  public addTheme(name: string, cssVariables: ICreatorTheme): void {
    Themes[name] = { cssVariables };
    if (this._availableThemes.indexOf(name) === -1) {
      this.availableThemes = this.availableThemes.concat([name]);
    }
  }
  public removeTheme(name: string): void {
    delete Themes[name];
    const themeIndex = this._availableThemes.indexOf(name);
    if (themeIndex !== -1) {
      const availableThemes = this.availableThemes;
      availableThemes.splice(themeIndex, 1);
      this.availableThemes = availableThemes;
    }
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
  private updateResultsTemplate(theme: any) {
    this.simulator.survey.setCss(theme, false);
    this.simulator.survey.render();
  }
  public setTheme(themeName: string, themeMapper: any): void {
    const availableThemes = themeMapper.filter(item => item.name === themeName);
    let theme = <any>defaultV2Css;
    if (availableThemes.length > 0) {
      theme = availableThemes[0].theme;
    }
    this.isRunning ? this.updateSimulatorSurvey(this.json, theme) : this.updateResultsTemplate(theme);
  }

  initializeColorCalculator() {
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
  protected createThemeEditorSurvey(): SurveyModel {
    const json = this.getThemeEditorSurveyJSON();
    setSurveyJSONForPropertyGrid(json, true, false);
    const themeEditorSurvey = this.surveyProvider.createSurvey(json, "theme_editor");
    themeEditorSurvey.getCss().list = {};
    const themeBuilderCss = { ...propertyGridCss };
    themeBuilderCss.root += " spg-theme-builder-root";
    themeEditorSurvey.css = themeBuilderCss;
    themeEditorSurvey.enterKeyAction = "loseFocus";
    this.loadThemeIntoPropertyGrid(themeEditorSurvey);
    this.initializeColorCalculator();

    themeEditorSurvey.onValueChanged.add((sender, options) => {
      if (this.blockChanges) return;

      if (options.name.indexOf("--") === 0) {
        this.themeChanges[options.name] = options.value;
      }

      if (["themeName", "themeMode", "themePalette"].indexOf(options.name) !== -1) {
        this[options.name] = options.value;
        this.initializeColorCalculator();
        if (options.name === "themeMode") {
          this.survey["isCompact"] = options.value === "lightweight";
          this.currentTheme.isPanelless = options.value === "lightweight";
          this.applySelectedTheme();
        } else {
          this.currentTheme.themeName = this.themeName;
          this.currentTheme.colorPalette = this.themePalette;
          this.resetTheme();
        }
        return;
      }
      if (["backgroundImage", "backgroundImageFit", "backgroundImageAttachment"].indexOf(options.name) !== -1) {
        this[options.name] = options.value;
        return;
      }
      if (options.name === "backgroundOpacity") {
        this.survey.backgroundOpacity = options.value / 100;
        this.currentTheme.backgroundOpacity = options.value / 100;
        return;
      }
      this.blockThemeChangedNotifications += 1;
      if (options.name == "commonScale") {
        this.survey.triggerResponsiveness(true);
      }
      if (options.name === "--sjs-primary-backcolor") {
        this.colorCalculator.calculateColors(options.value);
        this.themeChanges["--sjs-primary-backcolor"] = options.value;
        this.themeChanges["--sjs-primary-backcolor-light"] = this.colorCalculator.colorSettings.newColorLight;
        this.themeChanges["--sjs-primary-backcolor-dark"] = this.colorCalculator.colorSettings.newColorDark;
        this.themeEditorSurvey.setValue("--sjs-primary-backcolor-light", this.colorCalculator.colorSettings.newColorLight);
        this.themeEditorSurvey.setValue("--sjs-primary-backcolor-dark", this.colorCalculator.colorSettings.newColorDark);
      }
      if (options.name === "questionBackgroundTransparency" || options.name === "editorPanel") {
        let baseColor = parseColor(themeEditorSurvey.getValue("--sjs-general-backcolor-dim-light")).color;
        let questionBackgroundTransparencyValue = themeEditorSurvey.getValue("questionBackgroundTransparency");
        this.themeChanges["--sjs-editor-background"] = ingectAlpha(baseColor, questionBackgroundTransparencyValue / 100);
      }
      if (options.name === "panelBackgroundTransparency" || options.name === "questionPanel") {
        let baseColor = parseColor(themeEditorSurvey.getValue("--sjs-general-backcolor")).color;
        let panelBackgroundTransparencyValue = themeEditorSurvey.getValue("panelBackgroundTransparency");
        this.themeChanges["--sjs-question-background"] = ingectAlpha(baseColor, panelBackgroundTransparencyValue / 100);
      }
      if (options.question?.getType() === "fontsettings") {
        fontsettingsToCssVariable(options.question, this.themeChanges);
      }
      if (options.question?.getType() === "elementsettings") {
        elementSettingsToCssVariable(options.question, this.themeChanges);
      }
      const newTheme = {};
      assign(newTheme, this.currentTheme.cssVariables, this.themeChanges);
      this.currentTheme.cssVariables = newTheme;
      this.blockThemeChangedNotifications -= 1;
      this.setThemeToSurvey();
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

  private loadThemeIntoPropertyGrid(themeEditorSurvey: SurveyModel) {
    this.blockChanges = true;
    try {
      themeEditorSurvey.clear(true);
      themeEditorSurvey.mergeData(this.currentTheme.cssVariables);
      themeEditorSurvey.setValue("themeName", this.themeName);
      themeEditorSurvey.setValue("themeMode", this.themeMode);
      themeEditorSurvey.setValue("themePalette", this.themePalette);
      this.updatePGEditors(themeEditorSurvey);
    }
    finally {
      this.blockChanges = false;
    }
  }

  private updatePGEditors(themeEditorSurvey: SurveyModel) {
    const newCssVariables = {};
    assign(newCssVariables, this.currentTheme.cssVariables);
    themeEditorSurvey.getQuestionByName("backgroundImage").value = this.backgroundImage;
    themeEditorSurvey.getQuestionByName("backgroundImageFit").value = this.backgroundImageFit;
    themeEditorSurvey.getQuestionByName("backgroundImageAttachment").value = this.backgroundImageAttachment;

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

  private setThemeToSurvey(theme?: ITheme) {
    if (!!theme) {
      this.surveyProvider.theme = theme;
    }
    this.survey.applyTheme(this.surveyProvider.theme);
    this.raiseThemeChanged();
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
                name: "--sjs-primary-backcolor",
                title: getLocString("theme.primaryColor"),
                descriptionLocation: "hidden",
              },
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
              {
                type: "expression",
                name: "--sjs-font-size",
                expression: "{commonFontSize}*16/100+\"px\"",
                visible: false
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
                type: "expression",
                name: "--sjs-base-unit",
                expression: "{commonScale}*8/100+\"px\"",
                visible: false
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
              {
                type: "expression",
                name: "--sjs-corner-radius",
                expression: "{cornerRadius}+\"px\"",
                visible: false
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
  }
}
