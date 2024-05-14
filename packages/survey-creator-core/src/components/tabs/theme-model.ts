import { Base, ITheme, JsonObjectProperty, Question, Serializer, property, ILoadFromJSONOptions, ISaveToJSONOptions, IHeader, EventBase, SurveyModel, ArrayChanges } from "survey-core";
import { getLocString } from "../../editorLocalization";
import { PredefinedThemes, Themes } from "./themes";
import { settings } from "../../creator-settings";

import { DefaultFonts, fontsettingsFromCssVariable, fontsettingsToCssVariable, onSerializeFontSettingsValue } from "./theme-custom-questions/font-settings";
import { elementSettingsFromCssVariable, elementSettingsToCssVariable } from "./theme-custom-questions/element-settings";
import { createBoxShadowReset } from "./theme-custom-questions/boxshadow-settings";
import { HeaderModel } from "./header-model";
import * as LibraryThemes from "survey-core/themes";
import { ColorCalculator, assign, ingectAlpha, parseColor, roundTo2Decimals } from "../../utils/utils";
import { UndoRedoManager } from "../../plugins/undo-redo/undo-redo-manager";

export * from "./header-model";

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
  const themeName = theme.themeName || ThemeModel.DefaultTheme.themeName || "default";
  let fullThemeName = themeName + "-" + (theme.colorPalette || "light");
  if (theme.isPanelless === true) {
    fullThemeName += "-panelless";
  }
  return fullThemeName;
}

export function findSuitableTheme(themeName: string, colorPalette: string, isPanelless: boolean, probeThemeFullName: string) {
  let suitableTheme = Themes[probeThemeFullName];
  if (!!suitableTheme) {
    return suitableTheme;
  }
  const appropriateThemeNames = Object.keys(Themes).filter(fullName => fullName.indexOf(themeName + "-") === 0);
  for (let fullThemeName of appropriateThemeNames) {
    if (fullThemeName.indexOf(themeName + "-" + colorPalette) === 0) {
      probeThemeFullName = themeName + "-" + colorPalette;
    }
    if (fullThemeName.indexOf(themeName + "-" + colorPalette + (isPanelless ? "-panelless" : "")) === 0) {
      probeThemeFullName = themeName + "-" + colorPalette + (isPanelless ? "-panelless" : "");
    }
  }
  suitableTheme = Themes[appropriateThemeNames[0]];
  if (!!suitableTheme) {
    return suitableTheme;
  }
  const defaultNearestThemeFullName = getThemeFullName({ themeName: ThemeModel.DefaultTheme.themeName, colorPalette: colorPalette || "light", isPanelless: isPanelless });
  return Themes[defaultNearestThemeFullName] || ThemeModel.DefaultTheme;
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
    baseTheme = findSuitableTheme(fullTheme.themeName, fullTheme.colorPalette, fullTheme.isPanelless, probeThemeFullName);
  }
  const themeChanges: ITheme = getObjectDiffs(fullTheme, baseTheme);
  Object.keys(themeChanges).forEach(propertyName => {
    if (propertyName.toLowerCase().indexOf("background") !== -1) {
      if (themeChanges[propertyName] === "" || themeChanges[propertyName] === Serializer.findProperty("survey", propertyName).defaultValue) {
        delete themeChanges[propertyName];
      }
    }
  });
  themeChanges.themeName = baseTheme.themeName || ThemeModel.DefaultTheme.themeName || "default";
  themeChanges.colorPalette = baseTheme.colorPalette || "light";
  themeChanges.isPanelless = !!baseTheme.isPanelless;
  return themeChanges;
}

export class ThemeModel extends Base implements ITheme {
  public static DefaultTheme = Themes["default-light"];
  public undoRedoManager: UndoRedoManager;
  private themeCssVariablesChanges: { [index: string]: string } = {};
  private colorCalculator = new ColorCalculator();

  @property() backgroundImage: string;
  @property() backgroundImageFit: "auto" | "contain" | "cover";
  @property() backgroundImageAttachment: "fixed" | "scroll";
  @property() backgroundOpacity: number;
  @property() themeName: string;
  @property() colorPalette: "light" | "dark" | string;
  @property() isPanelless: boolean;
  @property() groupAppearanceAdvancedMode: boolean;
  @property({
    onSet: (newValue: any, target: ThemeModel) => {
      let basecolor = parseColor(target.questionPanel.backcolor).color;
      const newColor = ingectAlpha(basecolor, newValue / 100);
      if (target.questionPanel.backcolor !== newColor) {
        const newQuestionPanel = { ...target.questionPanel };
        newQuestionPanel.backcolor = newColor;
        target.questionPanel = newQuestionPanel;
      }
    }
  }) panelBackgroundTransparency: number;

  @property({
    onSet: (newValue: any, target: ThemeModel) => {
      let basecolor = parseColor(target.editorPanel.backcolor).color;
      const newColor = ingectAlpha(basecolor, newValue / 100);
      if (target.editorPanel.backcolor !== newColor) {
        const newEditorPanel = { ...target.editorPanel };
        newEditorPanel.backcolor = newColor;
        target.editorPanel = newEditorPanel;
      }
    }
  }) questionBackgroundTransparency: number;

  @property() commonScale: number;
  @property() cornerRadius: number;
  @property() commonFontSize: number;

  getFullThemeName(_themeName?: string) {
    if (this.colorPalette === "light") {
      return _themeName || this.themeName;
    }
    return (_themeName || this.themeName) + "-" + this.colorPalette;
  }

  private _defaultSessionTheme = ThemeModel.DefaultTheme;
  public get defaultSessionTheme() {
    return this._defaultSessionTheme;
  }
  public set defaultSessionTheme(theme: ITheme) {
    this._defaultSessionTheme = theme;
  }

  public get cssVariables(): { [index: string]: string } {
    return this.toJSON()["cssVariables"] || {};
  }

  public get themeCssCustomizations() {
    const customizations: { [index: string]: string } = {};
    assign(customizations, this.themeCssVariablesChanges);
    return customizations;
  }

  public getType(): string {
    return "theme";
  }

  private setNewHeaderProperty() {
    const header = new HeaderModel();
    header.owner = this;
    this.setPropertyValue("header", header);
  }

  // private updatePropertyGridEditors(themeEditorSurvey: SurveyModel) {
  //   const newCssVariables = {};
  //   assign(newCssVariables, this.currentTheme.cssVariables);
  //   this._setPGEditorPropertyValue(themeEditorSurvey.getQuestionByName("backgroundImage"), "value", this.currentTheme.backgroundImage);
  //   this._setPGEditorPropertyValue(themeEditorSurvey.getQuestionByName("backgroundImageFit"), "value", this.currentTheme.backgroundImageFit);
  //   this._setPGEditorPropertyValue(themeEditorSurvey.getQuestionByName("backgroundImageAttachment"), "value", this.currentTheme.backgroundImageAttachment);
  //   this._setPGEditorPropertyValue(themeEditorSurvey.getQuestionByName("backgroundOpacity"), "value", this.currentTheme.backgroundOpacity * 100);

  //   const primaryBackcolor = themeEditorSurvey.getQuestionByName("--sjs-primary-backcolor");
  //   if (!!primaryBackcolor) {
  //     this._setPGEditorPropertyValue(themeEditorSurvey.getQuestionByName("generalPrimaryColor"), "value", primaryBackcolor.value);
  //   }

  //   this.updateHeaderViewContainerEditors(newCssVariables);
  //   elementSettingsFromCssVariable(themeEditorSurvey.getQuestionByName("questionPanel"), newCssVariables, newCssVariables["--sjs-general-backcolor"], newCssVariables["--sjs-general-backcolor-dark"]);
  //   elementSettingsFromCssVariable(themeEditorSurvey.getQuestionByName("editorPanel"), newCssVariables, newCssVariables["--sjs-general-backcolor-dim-light"], newCssVariables["--sjs-general-backcolor-dim-dark"]);

  //   fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("pageTitle"), newCssVariables, newCssVariables["--sjs-general-dim-forecolor"]);
  //   fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("pageDescription"), newCssVariables, newCssVariables["--sjs-general-dim-forecolor-light"]);
  //   fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("questionTitle"), newCssVariables, newCssVariables["--sjs-general-forecolor"]);
  //   fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("questionDescription"), newCssVariables, newCssVariables["--sjs-general-forecolor-light"]);
  //   fontsettingsFromCssVariable(themeEditorSurvey.getQuestionByName("editorFont"), newCssVariables, newCssVariables["--sjs-general-forecolor"], newCssVariables["--sjs-general-forecolor-light"]);

  //   if (!!newCssVariables["--sjs-corner-radius"]) {
  //     this._setPGEditorPropertyValue(themeEditorSurvey.getQuestionByName("cornerRadius"), "value", parseFloat(newCssVariables["--sjs-corner-radius"]));
  //   }
  //   if (!!newCssVariables["--sjs-base-unit"]) {
  //     this._setPGEditorPropertyValue(themeEditorSurvey.getQuestionByName("commonScale"), "value", parseFloat(newCssVariables["--sjs-base-unit"]) * 100 / 8);
  //   }
  //   if (!!newCssVariables["--sjs-font-size"]) {
  //     this._setPGEditorPropertyValue(themeEditorSurvey.getQuestionByName("commonFontSize"), "value", parseFloat(newCssVariables["--sjs-font-size"]) * 100 / 16);
  //   }

  //   themeEditorSurvey.getAllQuestions().forEach(question => {
  //     if (["color", "colorsettings"].indexOf(question.getType()) !== -1) {
  //       (question as any).choices = this.getPredefinedColorsItemValues();
  //     }
  //   });
  // }
  public hasVariations(palette: boolean): boolean {
    let themeHasModeVariations = false;
    let themeHasPaletteVariations = false;
    const registeredThemes = Object.keys(Themes);
    let themeLight = this.themeName + "-light";
    let themeDark = this.themeName + "-dark";
    if (this.isPanelless) {
      themeLight += "-panelless";
      themeDark += "-panelless";
    }
    themeHasPaletteVariations = registeredThemes.indexOf(themeLight) !== -1 && registeredThemes.indexOf(themeDark) !== -1;

    let themePanels = this.themeName + "-" + this.colorPalette;
    let themePanelless = themePanels + "-panelless";
    themeHasModeVariations = registeredThemes.indexOf(themePanels) !== -1 && registeredThemes.indexOf(themePanelless) !== -1;
    if (palette) {
      return themeHasPaletteVariations;
    } else {
      return themeHasModeVariations;
    }
  }

  // private updatePropertyGridEditorsAvailability() {
  //   const isCustomTheme = PredefinedThemes.indexOf(this.themeName) === -1;
  //   let customThemeHasModeVariations = false;
  //   let customThemeHasPaletteVariations = false;
  //   if (isCustomTheme) {
  //     const registeredThemes = Object.keys(Themes);
  //     let themeLight = this.themeName + "-light";
  //     let themeDark = this.themeName + "-dark";
  //     if (this.themeMode !== "panels") {
  //       themeLight += "-panelless";
  //       themeDark += "-panelless";
  //     }
  //     customThemeHasPaletteVariations = registeredThemes.indexOf(themeLight) !== -1 && registeredThemes.indexOf(themeDark) !== -1;

  //     let themePanels = this.themeName + "-" + this.colorPalette;
  //     let themePanelless = themePanels + "-panelless";
  //     customThemeHasModeVariations = registeredThemes.indexOf(themePanels) !== -1 && registeredThemes.indexOf(themePanelless) !== -1;
  //   }
  //   this._setPGEditorPropertyValue(this.themeEditorSurvey.getQuestionByName("themeMode"), "readOnly", isCustomTheme && !customThemeHasModeVariations);
  //   this._setPGEditorPropertyValue(this.themeEditorSurvey.getQuestionByName("colorPalette"), "readOnly", isCustomTheme && !customThemeHasPaletteVariations);

  //   let canModify = !this.surveyProvider.readOnly;
  //   const options = {
  //     theme: this.currentTheme,
  //     allow: canModify
  //   };
  //   this.onAllowModifyTheme.fire(this, options);
  //   this.themeEditorSurvey.getAllQuestions().forEach(q => {
  //     if (["themeName", "colorPalette", "themeMode"].indexOf(q.name) === -1) {
  //       this._setPGEditorPropertyValue(q, "readOnly", !options.allow);
  //     }
  //   });

  //   if (!!this.survey) {
  //     let pageElements = this.survey.isSinglePage ? this.survey.pages[0].elements : this.survey.pages;
  //     this._setPGEditorPropertyValue(this.themeEditorSurvey.getQuestionByName("pageTitle"), "readOnly", !pageElements.some(p => !!p.title));
  //     this._setPGEditorPropertyValue(this.themeEditorSurvey.getQuestionByName("pageDescription"), "readOnly", !pageElements.some(p => !!p.description));
  //   }
  // }

  private initializeColorCalculator(cssVariables: { [index: string]: string }) {
    if (!cssVariables["--sjs-primary-backcolor"] ||
      !cssVariables["--sjs-primary-backcolor-light"] ||
      !cssVariables["--sjs-primary-backcolor-dark"]) {
      return;
    }

    this.colorCalculator.initialize(
      cssVariables["--sjs-primary-backcolor"],
      cssVariables["--sjs-primary-backcolor-light"],
      cssVariables["--sjs-primary-backcolor-dark"]
    );
  }

  private cssVariablePropertiesChanged(name: string, value: any, property: JsonObjectProperty) {
    if (name === "generalPrimaryColor") {
      this.setPropertyValue("--sjs-primary-backcolor", value);
      this.setThemeCssVariablesChanges("--sjs-primary-backcolor", value);
    }
    if (name === "--sjs-primary-backcolor") {
      this["generalPrimaryColor"] = value;
      this.colorCalculator.calculateColors(value);
      this.setPropertyValue("--sjs-primary-backcolor-light", this.colorCalculator.colorSettings.newColorLight);
      this.setPropertyValue("--sjs-primary-backcolor-dark", this.colorCalculator.colorSettings.newColorDark);
      this.setThemeCssVariablesChanges("--sjs-primary-backcolor-light", this.colorCalculator.colorSettings.newColorLight);
      this.setThemeCssVariablesChanges("--sjs-primary-backcolor-dark", this.colorCalculator.colorSettings.newColorDark);
    }
    if (name === "--sjs-shadow-inner" || name === "--sjs-shadow-small") {
      const newBoxShadowReset = createBoxShadowReset(value);
      this.setPropertyValue(name + "-reset", newBoxShadowReset);
      this.setThemeCssVariablesChanges(name + "-reset", newBoxShadowReset);
    }

    if (name == "commonScale") {
      this.setThemeCssVariablesChanges("--sjs-base-unit", (value * 8 / 100) + "px");
    }
    if (name == "commonFontSize") {
      this.setThemeCssVariablesChanges("--sjs-font-size", (value * 16 / 100) + "px");
    }
    if (name == "cornerRadius") {
      this.setThemeCssVariablesChanges("--sjs-corner-radius", value + "px");
    }
    if (name === "questionBackgroundTransparency" || name === "editorPanel") {
      let baseColor = parseColor(this.getPropertyValue("--sjs-general-backcolor-dim-light")).color;
      let questionBackgroundTransparencyValue = this.getPropertyValue("questionBackgroundTransparency");
      this.setThemeCssVariablesChanges("--sjs-editor-background", ingectAlpha(baseColor, questionBackgroundTransparencyValue / 100));
    }
    if (name === "panelBackgroundTransparency" || name === "questionPanel") {
      let baseColor = parseColor(this.getPropertyValue("--sjs-general-backcolor")).color;
      let panelBackgroundTransparencyValue = this.getPropertyValue("panelBackgroundTransparency");
      this.setThemeCssVariablesChanges("--sjs-question-background", ingectAlpha(baseColor, panelBackgroundTransparencyValue / 100));
    }
    if (property.type === "fontsettings") {
      fontsettingsToCssVariable(value, property, this.themeCssVariablesChanges);
      this.onThemePropertyChanged.fire(this, { name, value });
    }
    if (property.type === "elementsettings") {
      elementSettingsToCssVariable(value, property, this.themeCssVariablesChanges);
      this.onThemePropertyChanged.fire(this, { name, value });
    }
  }

  private setThemeCssVariablesChanges(name: string, value: any) {
    this.themeCssVariablesChanges[name] = value;
    this.onThemePropertyChanged.fire(this, { name, value });
  }

  // private loadThemeIntoPropertyGrid() {
  //   this.blockChanges = true;
  //   try {
  //     this.themeEditorSurvey.clear(true);
  //     this.themeEditorSurvey.mergeData(this.currentTheme.cssVariables);
  //     this.themeEditorSurvey.setValue("themeName", this.themeName);
  //     this.themeEditorSurvey.setValue("themeMode", this.themeMode);
  //     this.themeEditorSurvey.setValue("colorPalette", this.colorPalette);
  //     this.updatePropertyGridEditors(this.themeEditorSurvey);
  //     this.updatePropertyGridEditorsAvailability();
  //   }
  //   finally {
  //     this.blockChanges = false;
  //   }
  // }

  constructor() {
    super();
    this.setNewHeaderProperty();
    this.onPropertyValueChangedCallback = (
      name: string,
      oldValue: any,
      newValue: any,
      sender: Base,
      arrayChanges: ArrayChanges
    ) => {
      this.onThemePropertyValueChangedCallback(
        name,
        oldValue,
        newValue,
        sender,
        arrayChanges
      );
    };
  }

  initialize(surveyTheme: ITheme = {}, survey?: SurveyModel) {
    this._defaultSessionTheme = ThemeModel.DefaultTheme;
    this.backgroundImage = "backgroundImage" in surveyTheme ? surveyTheme.backgroundImage : survey?.backgroundImage;
    this.backgroundImageFit = surveyTheme.backgroundImageFit !== undefined ? surveyTheme.backgroundImageFit : survey?.backgroundImageFit;
    this.backgroundImageAttachment = surveyTheme.backgroundImageAttachment !== undefined ? surveyTheme.backgroundImageAttachment : survey?.backgroundImageAttachment;
    this.backgroundOpacity = ((surveyTheme.backgroundOpacity !== undefined ? surveyTheme.backgroundOpacity : survey?.backgroundOpacity) || 1) * 100;
    this.loadTheme(surveyTheme);
    this.header["logoPosition"] = survey?.logoPosition;
    this.undoRedoManager = new UndoRedoManager();
  }

  public get header(): IHeader {
    return this.getPropertyValue("header");
  }
  public set header(val: IHeader) {
    if (!val) return;

    this.setNewHeaderProperty();
    (this.header as HeaderModel).fromJSON((val as HeaderModel).toJSON());
  }

  @property({
    onSet: (newValue: any, target: ThemeModel) => {
      let opacity = parseColor(newValue.backcolor).opacity;
      if (target.panelBackgroundTransparency !== opacity) {
        target.panelBackgroundTransparency = opacity;
      }
    }
  }) public questionPanel;

  @property({
    onSet: (newValue: any, target: ThemeModel) => {
      let opacity = parseColor(newValue.backcolor).opacity;
      if (target.questionBackgroundTransparency !== opacity) {
        target.questionBackgroundTransparency = opacity;
      }
    }
  }) public editorPanel;

  public onThemeSelected = new EventBase<ThemeModel, { theme: ITheme }>();
  public onThemePropertyChanged = new EventBase<ThemeModel, { name: string, value: any }>();
  public onAllowModifyTheme = new EventBase<ThemeModel, { theme: ITheme, allow: boolean }>();

  private blockThemeChangedNotifications = 0;
  public loadTheme(theme: ITheme) {
    this.blockThemeChangedNotifications += 1;
    try {
      let probeThemeFullName = getThemeFullName(theme);
      const baseTheme = findSuitableTheme(theme.themeName, theme.colorPalette, theme.isPanelless, probeThemeFullName);
      const themeChanges = getThemeChanges(theme, baseTheme);
      this.themeName = themeChanges.themeName;
      this.colorPalette = themeChanges.colorPalette as any;
      this.isPanelless = themeChanges.isPanelless;

      this.backgroundImage = theme.backgroundImage || this.backgroundImage;
      this.backgroundImageFit = theme.backgroundImageFit || this.backgroundImageFit;
      this.backgroundImageAttachment = theme.backgroundImageAttachment || this.backgroundImageAttachment;

      const effectiveThemeCssVariables = {};
      assign(effectiveThemeCssVariables, ThemeModel.DefaultTheme.cssVariables || {}, baseTheme.cssVariables || {});
      assign(effectiveThemeCssVariables, theme.cssVariables || {}, this.themeCssVariablesChanges);
      const effectiveTheme: ITheme = {
        backgroundImage: this.backgroundImage || baseTheme.backgroundImage || "",
        backgroundImageFit: this.backgroundImageFit || baseTheme.backgroundImageFit,
        backgroundImageAttachment: this.backgroundImageAttachment || baseTheme.backgroundImageAttachment,
        backgroundOpacity: (this.backgroundOpacity / 100) || baseTheme.backgroundOpacity,
      };
      const effectiveHeaderSettings: IHeader = {} as any;
      // assign(effectiveHeaderSettings, baseTheme.header || {}, this.currentTheme.header || {});
      if (Object.keys(effectiveHeaderSettings).length > 0) {
        effectiveTheme.header = effectiveHeaderSettings;
      }
      assign(effectiveTheme, theme, { cssVariables: effectiveThemeCssVariables, themeName: this.themeName, colorPalette: this.colorPalette, isPanelless: this.isPanelless });
      // this.surveyProvider.theme = effectiveTheme;

      this.initializeColorCalculator(effectiveTheme.cssVariables);
      // this.loadThemeIntoPropertyGrid();
      this.fromJSON(effectiveTheme);
    }
    finally {
      this.blockThemeChangedNotifications -= 1;
    }
  }

  public resetTheme() {
    this.setTheme({
      themeName: this.defaultSessionTheme.themeName,
      isPanelless: this.defaultSessionTheme.isPanelless,
      colorPalette: this.defaultSessionTheme.colorPalette
    });
  }

  public setTheme(theme: ITheme) {
    // let probeThemeFullName = getThemeFullName(theme);
    // const baseTheme = findSuitableTheme(theme.themeName, theme.colorPalette, theme.isPanelless, probeThemeFullName);
    // const themeChanges = getThemeChanges(theme, baseTheme);
    // if (themeChanges.themeName === theme.themeName && themeChanges.colorPalette === theme.colorPalette && themeChanges.isPanelless === theme.isPanelless) {
    //   this.themeCssVariablesChanges = themeChanges.cssVariables || {};
    // }
    const headerBackgroundColorValue = this.themeCssVariablesChanges["--sjs-header-backcolor"];
    this.themeCssVariablesChanges = {};
    if (headerBackgroundColorValue !== undefined) {
      this.themeCssVariablesChanges["--sjs-header-backcolor"] = headerBackgroundColorValue;
    }

    try {
      this.blockThemeChangedNotifications += 1;
      let skipKeyCount = 0;
      this.iteratePropertiesHash((hash, key) => {
        if (key.indexOf("shadow") !== -1) {
          skipKeyCount++;
          return;
        }
        this.setPropertyValue(key, undefined);
      });
      this.setNewHeaderProperty();
    } finally {
      this.blockThemeChangedNotifications -= 1;
    }

    this.loadTheme(theme);
    this.onThemeSelected.fire(this, { theme: this.toJSON() });
  }

  public selectTheme(themeName: string, colorPalette: string = "light", themeMode: string = "panels") {
    this.themeName = themeName;
    this.colorPalette = colorPalette;
    this.isPanelless = themeMode === "lightweight";
    const theme = this.findSuitableTheme(themeName);
    this.setTheme(theme);
  }

  private generalPropertiesChanged(name: string, value: any): boolean {
    if (["themeName", "isPanelless", "colorPalette"].indexOf(name) !== -1) {
      if (name === "themeName") {
        this.loadTheme(this.findSuitableTheme(value) || { [name]: value, isPanelless: this.isPanelless, colorPalette: this.colorPalette });
      }
      if (name === "isPanelless") {
        this.loadTheme({ themeName: this.themeName, isPanelless: value, colorPalette: this.colorPalette });
      }
      if (name === "colorPalette") {
        this.loadTheme({ themeName: this.themeName, isPanelless: this.isPanelless, colorPalette: value });
      }
      this.onThemeSelected.fire(this, { theme: this.toJSON() });
      return true;
    }
    return false;
  }
  private onThemePropertyValueChangedCallback(name: string, oldValue: any, newValue: any, sender: Base, arrayChanges: ArrayChanges) {
    if (!!this.undoRedoManager) {
      if (this.blockThemeChangedNotifications == 0) {
        this.undoRedoManager.startTransaction(name + " changed");
      }
      this.undoRedoManager.onPropertyValueChanged(name, oldValue, newValue, sender, arrayChanges);
    }

    // if (this.blockChanges) return;
    if (this.blockThemeChangedNotifications > 0) return;
    if (this !== sender) {
      const senderJSON = sender.toJSON();
      if (!!senderJSON.cssVariables) {
        Object.keys(senderJSON.cssVariables).forEach(key => this.setThemeCssVariablesChanges(key, senderJSON.cssVariables[key]));
      }
      this.onThemePropertyChanged.fire(this, { name, value: newValue });
    }
    if (name.indexOf("--") === 0) {
      this.setThemeCssVariablesChanges(name, newValue);
    }

    if (this.generalPropertiesChanged(name, newValue)) {
      if (!!this.undoRedoManager && this.blockThemeChangedNotifications == 0) {
        this.undoRedoManager.stopTransaction();
      }
      return;
    }

    this.blockThemeChangedNotifications += 1;

    if (["backgroundImage", "backgroundImageFit", "backgroundImageAttachment", "backgroundOpacity"].indexOf(name) !== -1) {
      this[name] = newValue;
      this.onThemePropertyChanged.fire(this, { name, value: newValue });
      this.blockThemeChangedNotifications -= 1;
      if (!!this.undoRedoManager && this.blockThemeChangedNotifications == 0) {
        this.undoRedoManager.stopTransaction();
      }
      return;
    }

    this.cssVariablePropertiesChanged(name, newValue, sender.getPropertyByName(name));

    // const newCssVariables = {};
    // assign(newCssVariables, this.currentTheme.cssVariables, this.themeCssVariablesChanges);
    // this.currentTheme.cssVariables = newCssVariables;

    this.blockThemeChangedNotifications -= 1;
    if (!!this.undoRedoManager && this.blockThemeChangedNotifications == 0) {
      this.undoRedoManager.stopTransaction();
    }
  }

  findSuitableTheme(themeName: string): ITheme {
    let probeThemeFullName = getThemeFullName({ themeName: themeName, colorPalette: this.colorPalette, isPanelless: this.isPanelless } as any);
    return findSuitableTheme(themeName, this.colorPalette, this.isPanelless, probeThemeFullName);
  }

  onSerializeElementSettingsValue(propertyName: string) {
    const result = { ...this[propertyName] };
    if (result.cornerRadius != this.getPropertyByName(propertyName).defaultValue?.cornerRadius) {
      result.cornerRadius = result.cornerRadius + "px";
    }
    return result;
  }

  fromJSON(json: ITheme, options?: ILoadFromJSONOptions): void {
    if (!json) return;
    super.fromJSON(json, options);
    const headerModel = new HeaderModel();
    headerModel.fromJSON(json.header || {});
    headerModel.owner = this;
    this.header = headerModel;

    if (json.cssVariables) {
      this["generalPrimaryColor"] = json.cssVariables["--sjs-primary-backcolor"];
      super.fromJSON(json.cssVariables, options);
      headerModel.setCssVariables(json.cssVariables);

      this.commonScale = !!this["--sjs-base-unit"] ? roundTo2Decimals(parseFloat(this["--sjs-base-unit"]) * 100 / 8) : undefined;
      this.commonFontSize = !!this["--sjs-font-size"] ? roundTo2Decimals(parseFloat(this["--sjs-font-size"]) * 100 / 16) : undefined;
      this.cornerRadius = this["--sjs-corner-radius"] ? roundTo2Decimals(parseFloat(this["--sjs-corner-radius"])) : undefined;
      if (!!json["backgroundOpacity"]) this.backgroundOpacity = json["backgroundOpacity"] * 100;

      this["questionPanel"] = elementSettingsFromCssVariable(this.getPropertyByName("questionPanel"), json.cssVariables, "--sjs-general-backcolor", "--sjs-general-backcolor-dark", this.cornerRadius);
      this["editorPanel"] = elementSettingsFromCssVariable(this.getPropertyByName("editorPanel"), json.cssVariables, "--sjs-general-backcolor-dim-light", "--sjs-general-backcolor-dim-dark", this.cornerRadius);

      this["pageTitle"] = fontsettingsFromCssVariable(this.getPropertyByName("pageTitle"), json.cssVariables, "--sjs-general-dim-forecolor");
      this["pageDescription"] = fontsettingsFromCssVariable(this.getPropertyByName("pageDescription"), json.cssVariables, "--sjs-general-dim-forecolor-light");
      this["questionTitle"] = fontsettingsFromCssVariable(this.getPropertyByName("questionTitle"), json.cssVariables, "--sjs-general-forecolor");
      this["questionDescription"] = fontsettingsFromCssVariable(this.getPropertyByName("questionDescription"), json.cssVariables, "--sjs-general-forecolor-light");
      this["editorFont"] = fontsettingsFromCssVariable(this.getPropertyByName("editorFont"), json.cssVariables, "--sjs-general-forecolor", "--sjs-general-forecolor-light");
    }
  }

  toJSON(options?: ISaveToJSONOptions): ITheme {
    if (this.commonScale !== undefined) {
      this["--sjs-base-unit"] = (this.commonScale * 8 / 100) + "px";
    }
    if (this.commonFontSize !== undefined) {
      this["--sjs-font-size"] = (this.commonFontSize * 16 / 100) + "px";
    }
    if (this.cornerRadius !== undefined) {
      this["--sjs-corner-radius"] = this.cornerRadius + "px";
    }

    const result = super.toJSON(options);
    result["backgroundImage"] = this.backgroundImage || "";
    result["backgroundOpacity"] = this.backgroundOpacity / 100;
    result["backgroundImageAttachment"] = this.backgroundImageAttachment;
    result["backgroundImageFit"] = this.backgroundImageFit;

    const cssVariables = {};
    Object.keys(result).forEach(key => {
      if (key.indexOf("--") == 0) {
        cssVariables[key] = result[key];
        delete result[key];
      } else if (typeof result[key] === "object") {

        const property = this.getPropertyByName(key);
        if (property.type === "fontsettings") {
          fontsettingsToCssVariable(result[key], property, cssVariables);
          delete result[key];
        }
        if (property.type === "elementsettings") {
          elementSettingsToCssVariable(result[key], property, cssVariables);
          delete result[key];
        }
      }
    });
    result.cssVariables = cssVariables;
    (this.header as HeaderModel).saveToThemeJSON(result, options);
    return result;
  }

}

Serializer.addClass(
  "theme",
  [
    {
      type: "dropdown",
      name: "themeName",
      displayName: getLocString("theme.themeName"),
      choices: PredefinedThemes.map(theme => ({ value: theme, text: getLocString("theme.names." + theme) })),
      category: "general",
    }, {
      type: "buttongroup",
      name: "colorPalette",
      displayName: "",
      choices: [
        { value: "light", text: getLocString("theme.themePaletteLight") },
        { value: "dark", text: getLocString("theme.themePaletteDark") }
      ],
      category: "general",
      enableIf: (obj: ThemeModel): boolean => {
        return !obj || obj.hasVariations(true);
      },
    }, {
      type: "buttongroup",
      name: "isPanelless",
      displayName: getLocString("theme.themeMode"),
      choices: [
        { value: false, text: getLocString("theme.themeModePanels") },
        { value: true, text: getLocString("theme.themeModeLightweight") }],
      category: "general",
      enableIf: (obj: ThemeModel): boolean => {
        return !obj || obj.hasVariations(false);
      },
    },
    {
      type: "spinedit",
      isSerializable: false,
      name: "commonScale",
      displayName: getLocString("theme.scale"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.step = 5;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "spinedit",
      isSerializable: false,
      name: "cornerRadius",
      displayName: getLocString("theme.cornerRadius"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "px";
          editor.min = 0;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    },
    {
      type: "spinedit",
      isSerializable: false,
      name: "commonFontSize",
      displayName: getLocString("theme.fontSize"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.step = 5;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    },
    {
      type: "spinedit",
      isSerializable: false,
      name: "panelBackgroundTransparency",
      displayName: getLocString("theme.panelBackgroundTransparency"),
      default: 100,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "spinedit",
      isSerializable: false,
      name: "questionBackgroundTransparency",
      displayName: getLocString("theme.questionBackgroundTransparency"),
      default: 100,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    },
    {
      type: "elementsettings",
      name: "editorPanel",
      displayName: getLocString("theme.backgroundCornerRadius"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      },
      onSerializeValue: (obj: ThemeModel) => {
        return obj.onSerializeElementSettingsValue("editorPanel");
      }
    }, {
      type: "elementsettings",
      name: "questionPanel",
      displayName: getLocString("theme.backgroundCornerRadius"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      },
      onSerializeValue: (obj: ThemeModel) => {
        return obj.onSerializeElementSettingsValue("questionPanel");
      }
    },
  ], (json) => { return new ThemeModel(); }
);

Serializer.addProperties("theme",
  [{
    name: "backgroundImage:file",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.storeDataAsText = false;
        editor.acceptedTypes = "image/*";
      }
    }
  }, {
    name: "backgroundImageFit",
    displayName: "",
    enableIf: function (obj) {
      return !!obj.backgroundImage;
    },
    choices: [
      { value: "auto", text: getLocString("theme.backgroundImageFitAuto") },
      { value: "contain", text: getLocString("theme.backgroundImageFitContain") },
      { value: "cover", text: getLocString("theme.backgroundImageFitCover") }
    ],
    default: "cover",
  }, {
    name: "backgroundImageAttachment",
    displayName: "",
    enableIf: function (obj) {
      return !!obj.backgroundImage;
    },
    choices: [
      { value: "fixed", text: getLocString("theme.backgroundImageAttachmentFixed") },
      { value: "scroll", text: getLocString("theme.backgroundImageAttachmentScroll") }
    ],
    default: "scroll",
  }, {
    type: "spinedit",
    isSerializable: false,
    name: "backgroundOpacity",
    displayName: getLocString("theme.backgroundOpacity"),
    enableIf: function (obj) {
      return !!obj.backgroundImage;
    },
    default: 100,
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.unit = "%";
        editor.min = 0;
        editor.max = 100;
        editor.step = 5;
        editor.titleLocation = "left";
      }
    }
  }, {
    type: "headersettings",
    name: "header",
    isSerializable: false,
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        const questions = editor.contentPanel.elements;
        const callback = (editor: Question) => {
          if (editor.getType() === "panel") {
            editor["elements"].forEach(el => {
              callback(el);
            });
          }

          const obj: Base = (<any>editor).obj;
          if (!obj) return;
          const property: JsonObjectProperty = (<any>editor).property;
          if (!!property && property.onPropertyEditorUpdate) {
            property.onPropertyEditorUpdate(obj, editor);
          }
        };
        questions.forEach(question => {
          callback(question);
        });
      }
    }
  }, {
    type: "color",
    isSerializable: false,
    name: "generalPrimaryColor",
    displayName: getLocString("theme.primaryColor"),
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.descriptionLocation = "hidden";
        editor.visibleIf = "{advancedmode} = false";
      }
    }
  }, {
    type: "dropdown",
    name: "--sjs-font-family",
    displayName: getLocString("theme.fontFamily"),
    default: settings.theme.fontFamily,
    choices: [].concat(DefaultFonts),
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.descriptionLocation = "hidden";
        editor.allowClear = false;
        editor.visibleIf = "{advancedmode} = false";
      }
    }
  },
  {
    name: "--sjs-font-size", visible: false,
    default: "16px",
  },
  { name: "--sjs-corner-radius", visible: false },
  { name: "--sjs-base-unit", visible: false },
  { name: "--sjs-corner-radius", visible: false },
  {
    type: "fontsettings",
    name: "pageTitle",
    displayName: getLocString("theme.titleFont"),
    default: {
      family: settings.theme.fontFamily,
      weight: "700",
      size: 24
    },
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.descriptionLocation = "hidden";
      }
    },
    onSerializeValue: (obj: ThemeModel) => {
      return onSerializeFontSettingsValue(obj, "pageTitle");
    }
  }, {
    type: "fontsettings",
    name: "pageDescription",
    displayName: getLocString("theme.descriptionFont"),
    default: {
      family: settings.theme.fontFamily,
      weight: "700",
      size: 24
    },
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.descriptionLocation = "hidden";
      }
    },
    onSerializeValue: (obj: ThemeModel) => {
      return onSerializeFontSettingsValue(obj, "pageDescription");
    }
  }, {
    type: "boxshadowsettings",
    name: "--sjs-shadow-small",
    displayName: getLocString("theme.shadow"),
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    type: "fontsettings",
    name: "questionTitle",
    displayName: getLocString("theme.titleFont"),
    default: {
      family: settings.theme.fontFamily,
      weight: "600",
      size: 16,
    },
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.descriptionLocation = "hidden";
      }
    },
    onSerializeValue: (obj: ThemeModel) => {
      return onSerializeFontSettingsValue(obj, "questionTitle");
    }
  }, {
    type: "fontsettings",
    name: "questionDescription",
    displayName: getLocString("theme.descriptionFont"),
    default: {
      family: settings.theme.fontFamily,
      weight: "400",
      size: 16
    },
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.descriptionLocation = "hidden";
      }
    },
    onSerializeValue: (obj: ThemeModel) => {
      return onSerializeFontSettingsValue(obj, "questionDescription");
    }
  },
  {
    type: "boxshadowsettings",
    name: "--sjs-shadow-inner",
    displayName: getLocString("theme.shadow"),
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    type: "fontsettings",
    name: "editorFont",
    displayName: getLocString("theme.font"),
    default: {
      family: settings.theme.fontFamily,
      weight: "400",
      size: 16
    },
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.descriptionLocation = "hidden";
      }
    },
    onSerializeValue: (obj: ThemeModel) => {
      return onSerializeFontSettingsValue(obj, "editorFont");
    }
  }, {
    type: "colorsettings",
    name: "--sjs-border-default",
    displayName: getLocString("theme.colorsTitle"),
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.colorTitle = getLocString("theme.borderDefault");
        editor.colorTitleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  },
  {
    type: "colorsettings",
    name: "--sjs-border-light",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.colorTitle = getLocString("theme.borderLight");
        editor.colorTitleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  },

  { name: "--sjs-general-backcolor", visible: false },
  { name: "--sjs-general-backcolor-dark", visible: false },

  { name: "--sjs-general-backcolor-dim-light", visible: false },
  { name: "--sjs-general-backcolor-dim-dark", visible: false },
  { name: "--sjs-general-forecolor", visible: false },
  { name: "--sjs-general-forecolor-light", visible: false },
  { name: "--sjs-general-dim-forecolor", visible: false },
  { name: "--sjs-general-dim-forecolor-light", visible: false },

  { name: "--sjs-secondary-backcolor", visible: false },
  { name: "--sjs-secondary-backcolor-light", visible: false },
  { name: "--sjs-secondary-backcolor-semi-light", visible: false },
  { name: "--sjs-secondary-forecolor", visible: false },
  { name: "--sjs-secondary-forecolor-light", visible: false },
  { name: "--sjs-shadow-small-reset", visible: false },
  { name: "--sjs-shadow-medium", visible: false },
  { name: "--sjs-shadow-large", visible: false },
  { name: "--sjs-shadow-inner-reset", visible: false },
  { name: "--sjs-border-light", visible: false },
  { name: "--sjs-border-default", visible: false },
  { name: "--sjs-border-inside", visible: false },
  { name: "--sjs-special-red", visible: false },
  { name: "--sjs-special-red-light", visible: false },
  { name: "--sjs-special-red-forecolor", visible: false },
  { name: "--sjs-special-green", visible: false },
  { name: "--sjs-special-green-light", visible: false },
  { name: "--sjs-special-green-forecolor", visible: false },
  { name: "--sjs-special-blue", visible: false },
  { name: "--sjs-special-blue-light", visible: false },
  { name: "--sjs-special-blue-forecolor", visible: false },
  { name: "--sjs-special-yellow", visible: false },
  { name: "--sjs-special-yellow-light", visible: false },
  { name: "--sjs-special-yellow-forecolor", visible: false },
  { name: "--sjs-article-font-xx-large-textDecoration", visible: false },
  { name: "--sjs-article-font-xx-large-fontWeight", visible: false },
  { name: "--sjs-article-font-xx-large-fontStyle", visible: false },
  { name: "--sjs-article-font-xx-large-fontStretch", visible: false },
  { name: "--sjs-article-font-xx-large-letterSpacing", visible: false },
  { name: "--sjs-article-font-xx-large-lineHeight", visible: false },
  { name: "--sjs-article-font-xx-large-paragraphIndent", visible: false },
  { name: "--sjs-article-font-xx-large-textCase", visible: false },
  { name: "--sjs-article-font-x-large-textDecoration", visible: false },
  { name: "--sjs-article-font-x-large-fontWeight", visible: false },
  { name: "--sjs-article-font-x-large-fontStyle", visible: false },
  { name: "--sjs-article-font-x-large-fontStretch", visible: false },
  { name: "--sjs-article-font-x-large-letterSpacing", visible: false },
  { name: "--sjs-article-font-x-large-lineHeight", visible: false },
  { name: "--sjs-article-font-x-large-paragraphIndent", visible: false },
  { name: "--sjs-article-font-x-large-textCase", visible: false },
  { name: "--sjs-article-font-large-textDecoration", visible: false },
  { name: "--sjs-article-font-large-fontWeight", visible: false },
  { name: "--sjs-article-font-large-fontStyle", visible: false },
  { name: "--sjs-article-font-large-fontStretch", visible: false },
  { name: "--sjs-article-font-large-letterSpacing", visible: false },
  { name: "--sjs-article-font-large-lineHeight", visible: false },
  { name: "--sjs-article-font-large-paragraphIndent", visible: false },
  { name: "--sjs-article-font-large-textCase", visible: false },
  { name: "--sjs-article-font-medium-textDecoration", visible: false },
  { name: "--sjs-article-font-medium-fontWeight", visible: false },
  { name: "--sjs-article-font-medium-fontStyle", visible: false },
  { name: "--sjs-article-font-medium-fontStretch", visible: false },
  { name: "--sjs-article-font-medium-letterSpacing", visible: false },
  { name: "--sjs-article-font-medium-lineHeight", visible: false },
  { name: "--sjs-article-font-medium-paragraphIndent", visible: false },
  { name: "--sjs-article-font-medium-textCase", visible: false },
  { name: "--sjs-article-font-default-textDecoration", visible: false },
  { name: "--sjs-article-font-default-fontWeight", visible: false },
  { name: "--sjs-article-font-default-fontStyle", visible: false },
  { name: "--sjs-article-font-default-fontStretch", visible: false },
  { name: "--sjs-article-font-default-letterSpacing", visible: false },
  { name: "--sjs-article-font-default-lineHeight", visible: false },
  { name: "--sjs-article-font-default-paragraphIndent", visible: false },
  { name: "--sjs-article-font-default-textCase", visible: false },
  {
    type: "color",
    name: "--sjs-general-backcolor-dim",
    displayName: getLocString("theme.backgroundDimColor"),
  },
  {
    type: "colorsettings",
    name: "--sjs-primary-backcolor",
    displayName: getLocString("theme.accentBackground"),
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.colorTitle = getLocString("theme.primaryDefaultColor");
        editor.colorTitleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    type: "colorsettings",
    name: "--sjs-primary-backcolor-dark",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.colorTitle = getLocString("theme.primaryDarkColor");
        editor.colorTitleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    type: "colorsettings",
    name: "--sjs-primary-backcolor-light",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.colorTitle = getLocString("theme.primaryLightColor");
        editor.colorTitleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    type: "colorsettings",
    name: "--sjs-primary-forecolor",
    displayName: getLocString("theme.accentForeground"),
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.colorTitle = getLocString("theme.primaryForecolor");
        editor.colorTitleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    type: "colorsettings",
    name: "--sjs-primary-forecolor-light",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.visibleIf = "{advancedmode} = true";
        editor.colorTitle = getLocString("theme.primaryForecolorLight");
        editor.colorTitleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  },
  ]
);
