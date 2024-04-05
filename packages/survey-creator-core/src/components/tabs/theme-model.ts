import { Base, ITheme, ImageAttachment, ImageFit, ItemValue, JsonObjectProperty, Question, Serializer, property, ILoadFromJSONOptions, JsonObject, IHeader, QuestionCompositeModel, EventBase } from "survey-core";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { PredefinedColors, PredefinedThemes, Themes } from "./themes";
import { ISurveyCreatorOptions, settings } from "../../creator-settings";
import { PropertyGridEditor, PropertyGridEditorCollection } from "../../property-grid";
import { DefaultFonts } from "./theme-custom-questions/font-settings";
import { HeaderModel } from "./header-model";
import * as LibraryThemes from "survey-core/themes";
import { assign, ingectAlpha, parseColor, roundTo2Decimals } from "../../utils/utils";
import { ISaveToJSONOptions } from "survey-core/typings/base-interfaces";
import { SurveyCreatorModel } from "src/creator-base";
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
  const defaultNearestThemeFullName = getThemeFullName({ themeName: ThemeModel.DefaultTheme.themeName, colorPalette: themePalette || "light", isPanelless: themeMode === "lightweight" });
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
  themeChanges.themeName = baseTheme.themeName || ThemeModel.DefaultTheme.themeName || "default";
  themeChanges.colorPalette = baseTheme.colorPalette || "light";
  themeChanges.isPanelless = !!baseTheme.isPanelless;
  return themeChanges;
}

function trimCssVariables(newCssVariables: { [index: string]: string }): void {
  Object.keys(newCssVariables).forEach(key => {
    if (newCssVariables[key] === undefined || newCssVariables[key] === null) {
      delete newCssVariables[key];
    }
  });
}

export class ThemeModel extends Base {
  public static DefaultTheme = Themes["default-light"];
  private themeCssVariablesChanges: { [index: string]: string } = {};

  @property({
    onSet: (newValue: string, _target: ThemeModel) => {
      // _target.currentTheme.backgroundImage = newValue;
    }
  }) backgroundImage;
  @property({
    onSet: (newValue: ImageFit, _target: ThemeModel) => {
      // _target.currentTheme.backgroundImageFit = newValue;
    }
  }) backgroundImageFit;
  @property({
    onSet: (newValue: ImageAttachment, _target: ThemeModel) => {
      // _target.currentTheme.backgroundImageAttachment = newValue;
    }
  }) backgroundImageAttachment;
  @property({
    onSet: (newValue: number, _target: ThemeModel) => {
      // _target.currentTheme.backgroundOpacity = newValue / 100;
    }
  }) backgroundOpacity;
  @property() themeName;
  @property() themePalette;
  @property() themeMode;
  @property() groupAppearanceAdvancedMode: boolean;
  @property({
    onSet: (newValue: any, target: ThemeModel) => {
      let basecolor = parseColor(target.questionPanel.backcolor).color;
      const newColor = ingectAlpha(basecolor, newValue / 100);
      if(target.questionPanel.backcolor !== newColor) {
        const newQuestionPanel = { ...target.questionPanel };
        newQuestionPanel.backcolor = newColor;
        target.questionPanel = newQuestionPanel;
      }
    }
  }) panelBackgroundTransparency: number;

  @property() questionPanelBackground: string;

  @property({
    onSet: (newValue: any, target: ThemeModel) => {
      let basecolor = parseColor(target.editorPanel.backcolor).color;
      const newColor = ingectAlpha(basecolor, newValue / 100);
      if(target.editorPanel.backcolor !== newColor) {
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
    if (this.themePalette === "light") {
      return _themeName || this.themeName;
    }
    return (_themeName || this.themeName) + "-" + this.themePalette;
  }

  private _defaultSessionTheme = ThemeModel.DefaultTheme;
  public get defaultSessionTheme() {
    return this._defaultSessionTheme;
  }
  public set defaultSessionTheme(theme: ITheme) {
    this._defaultSessionTheme = theme;
  }

  public get cssVariables(): { [index: string]: string} {
    return this.toJSON()["cssVariables"] || {};
  }

  public get themeCssCustomizations() {
    const customizations: { [index: string]: string } = {};
    assign(customizations, this.themeCssVariablesChanges);
    return customizations;
  }

  public getType(): string {
    return "themebuilder";
  }

  private setNewHeaderProperty() {
    this.setPropertyValue("header", new HeaderModel());
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

  //     let themePanels = this.themeName + "-" + this.themePalette;
  //     let themePanelless = themePanels + "-panelless";
  //     customThemeHasModeVariations = registeredThemes.indexOf(themePanels) !== -1 && registeredThemes.indexOf(themePanelless) !== -1;
  //   }
  //   this._setPGEditorPropertyValue(this.themeEditorSurvey.getQuestionByName("themeMode"), "readOnly", isCustomTheme && !customThemeHasModeVariations);
  //   this._setPGEditorPropertyValue(this.themeEditorSurvey.getQuestionByName("themePalette"), "readOnly", isCustomTheme && !customThemeHasPaletteVariations);

  //   let canModify = !this.surveyProvider.readOnly;
  //   const options = {
  //     theme: this.currentTheme,
  //     allow: canModify
  //   };
  //   this.onAllowModifyTheme.fire(this, options);
  //   this.themeEditorSurvey.getAllQuestions().forEach(q => {
  //     if (["themeName", "themePalette", "themeMode"].indexOf(q.name) === -1) {
  //       this._setPGEditorPropertyValue(q, "readOnly", !options.allow);
  //     }
  //   });

  //   if (!!this.survey) {
  //     let pageElements = this.survey.isSinglePage ? this.survey.pages[0].elements : this.survey.pages;
  //     this._setPGEditorPropertyValue(this.themeEditorSurvey.getQuestionByName("pageTitle"), "readOnly", !pageElements.some(p => !!p.title));
  //     this._setPGEditorPropertyValue(this.themeEditorSurvey.getQuestionByName("pageDescription"), "readOnly", !pageElements.some(p => !!p.description));
  //   }
  // }

  // private initializeColorCalculator() {
  //   if (!this.currentTheme.cssVariables["--sjs-primary-backcolor"] ||
  //     !this.currentTheme.cssVariables["--sjs-primary-backcolor-light"] ||
  //     !this.currentTheme.cssVariables["--sjs-primary-backcolor-dark"]) {
  //     return;
  //   }

  //   this.colorCalculator.initialize(
  //     this.currentTheme.cssVariables["--sjs-primary-backcolor"],
  //     this.currentTheme.cssVariables["--sjs-primary-backcolor-light"],
  //     this.currentTheme.cssVariables["--sjs-primary-backcolor-dark"]
  //   );
  // }

  // private shadowInnerPropertiesChanged(options: ValueChangedEvent) {
  //   const name = options.name;
  //   const value = options.value;
  //   this.themeCssVariablesChanges[name + "-reset"] = createBoxShadowReset(value);
  //   this.themeModified(options);
  // }
  // private cssVariablePropertiesChanged(options: ValueChangedEvent) {
  //   if (options.name.indexOf("--") === 0) {
  //     this.setThemeCssVariablesChanges(options.name, options.value, options.question);
  //   }
  //   if (options.name == "commonScale") {
  //     this.survey.triggerResponsiveness(true);
  //     this.setThemeCssVariablesChanges("--sjs-base-unit", (options.value * 8 / 100) + "px", options.question);
  //   }
  //   if (options.name == "commonFontSize") {
  //     this.setThemeCssVariablesChanges("--sjs-font-size", (options.value * 16 / 100) + "px", options.question);
  //   }
  //   if (options.name == "cornerRadius") {
  //     this.setThemeCssVariablesChanges("--sjs-corner-radius", options.value + "px", options.question);
  //   }
  //   if (options.name === "questionBackgroundTransparency" || options.name === "editorPanel") {
  //     let baseColor = parseColor(this.themeEditorSurvey.getValue("--sjs-general-backcolor-dim-light")).color;
  //     let questionBackgroundTransparencyValue = this.themeEditorSurvey.getValue("questionBackgroundTransparency");
  //     this.setThemeCssVariablesChanges("--sjs-editor-background", ingectAlpha(baseColor, questionBackgroundTransparencyValue / 100), options.question);
  //   }
  //   if (options.name === "panelBackgroundTransparency" || options.name === "questionPanel") {
  //     let baseColor = parseColor(this.themeEditorSurvey.getValue("--sjs-general-backcolor")).color;
  //     let panelBackgroundTransparencyValue = this.themeEditorSurvey.getValue("panelBackgroundTransparency");
  //     this.setThemeCssVariablesChanges("--sjs-question-background", ingectAlpha(baseColor, panelBackgroundTransparencyValue / 100), options.question);
  //   }
  //   if (options.question?.getType() === "fontsettings") {
  //     fontsettingsToCssVariable(options.question, this.themeCssVariablesChanges);
  //     this.themeModified(options);
  //   }
  //   if (options.question?.getType() === "elementsettings") {
  //     elementSettingsToCssVariable(options.question, this.themeCssVariablesChanges);
  //     this.themeModified(options);
  //   }
  // }
  // private updateDependentQuestionValues(options: ValueChangedEvent) {
  //   if (options.name === "generalPrimaryColor") {
  //     this.themeEditorSurvey.setValue("--sjs-primary-backcolor", options.value);
  //     return true;
  //   }
  //   if (options.name === "--sjs-primary-backcolor") {
  //     this.colorCalculator.calculateColors(options.value);
  //     this.themeEditorSurvey.setValue("--sjs-primary-backcolor-light", this.colorCalculator.colorSettings.newColorLight);
  //     this.themeEditorSurvey.setValue("--sjs-primary-backcolor-dark", this.colorCalculator.colorSettings.newColorDark);
  //     this._setPGEditorPropertyValue(this.themeEditorSurvey.getQuestionByName("generalPrimaryColor"), "value", options.value);
  //     return false;
  //   }
  //   return false;
  // }

  // private setThemeCssVariablesChanges(variableName: string, value: any, question: any) {
  //   this.themeCssVariablesChanges[variableName] = value;
  //   this.themeModified({ name: variableName, value: value, question: question } as any);
  // }

  // private patchFileEditors(survey: SurveyModel) {
  //   const questionsToPatch = survey.getAllQuestions(false, false, true).filter(q => q.getType() == "fileedit");
  //   questionsToPatch.forEach(q => {
  //     (<QuestionFileEditorModel>q).onChooseFilesCallback = (input, callback) => {
  //       const themePropertyName = q.name;
  //       let elementType = "theme";
  //       if (q.parentQuestion) {
  //         elementType = q.parentQuestion.name === "headerViewContainer" ? "header" : q.parentQuestion.name;
  //       }
  //       (q.parentQuestion ? q.parentQuestion.name + "." : "") + q.name;
  //       this.surveyProvider.chooseFiles(input, callback, { element: this.currentTheme as any, elementType: elementType, propertyName: themePropertyName });
  //     };
  //   });
  // }

  // private loadThemeIntoPropertyGrid() {
  //   this.blockChanges = true;
  //   try {
  //     this.themeEditorSurvey.clear(true);
  //     this.themeEditorSurvey.mergeData(this.currentTheme.cssVariables);
  //     this.themeEditorSurvey.setValue("themeName", this.themeName);
  //     this.themeEditorSurvey.setValue("themeMode", this.themeMode);
  //     this.themeEditorSurvey.setValue("themePalette", this.themePalette);
  //     this.updatePropertyGridEditors(this.themeEditorSurvey);
  //     this.updatePropertyGridEditorsAvailability();
  //   }
  //   finally {
  //     this.blockChanges = false;
  //   }
  // }

  private getBackgroundColorSwitchByValue(backgroundColor: string) {
    if (!backgroundColor) return "accentColor";
    if (backgroundColor === "transparent") return "none";
    return "custom";
  }

  private getPredefinedColorsItemValues() {
    return Object.keys(PredefinedColors[this.themePalette]).map(colorName =>
      new ItemValue(PredefinedColors[this.themePalette][colorName], getLocString("theme.colors." + colorName))
    );
  }

  constructor() {
    super();
    this.setNewHeaderProperty();
    this.themeName = ThemeModel.DefaultTheme.themeName || "default";
    this.loadTheme({ themeName: this.themeName });
  }

  init(surveyProvider: SurveyCreatorModel) {
    const surveyTheme = surveyProvider.theme;
    this.backgroundImage = surveyTheme.backgroundImage !== undefined ? surveyTheme.backgroundImage : surveyProvider.survey.backgroundImage;
    this.backgroundImageFit = surveyTheme.backgroundImageFit !== undefined ? surveyTheme.backgroundImageFit : surveyProvider.survey.backgroundImageFit;
    this.backgroundImageAttachment = surveyTheme.backgroundImageAttachment !== undefined ? surveyTheme.backgroundImageAttachment : surveyProvider.survey.backgroundImageAttachment;
    this.backgroundOpacity = ((surveyTheme.backgroundOpacity !== undefined ? surveyTheme.backgroundOpacity : surveyProvider.survey.backgroundOpacity) || 1) * 100;
    this.loadTheme(surveyTheme);
    surveyProvider.hasPendingThemeChanges = false;
  }

  // public get availableThemes() {
  //   return [].concat(this._availableThemes);
  // }
  // public set availableThemes(availebleThemes: string[]) {
  //   this._availableThemes = availebleThemes || [];
  //   if (this.themeEditorSurvey) {
  //     const themeChooser = this.themeEditorSurvey.getQuestionByName("themeName") as QuestionDropdownModel;
  //     if (!!themeChooser) {
  //       themeChooser.choices = availebleThemes.map(theme => ({ value: theme, text: getLocString("theme.names." + theme) }));
  //       if (availebleThemes.indexOf(themeChooser.value) === -1) {
  //         themeChooser.value = ThemeModel.DefaultTheme.themeName;
  //       }
  //     }
  //     // this.updatePropertyGridEditorsAvailability();
  //   }
  // }

  public get header(): HeaderModel {
    return this.getPropertyValue("header");
  }
  public set header(val: HeaderModel) {
    if (!val) return;

    this.setNewHeaderProperty();
    this.header.fromJSON(val.toJSON());
  }

  @property({
    onSet: (newValue: any, target: ThemeModel) => {
      let opacity = parseColor(newValue.backcolor).opacity;
      if(target.panelBackgroundTransparency !== opacity) {
        target.panelBackgroundTransparency = opacity;
      }
    }
  }) public questionPanel;

  @property({
    onSet: (newValue: any, target: ThemeModel) => {
      let opacity = parseColor(newValue.backcolor).opacity;
      if(target.questionBackgroundTransparency !== opacity) {
        target.questionBackgroundTransparency = opacity;
      }
    }
  }) public editorPanel;

  @property() public pageTitle;
  @property() public pageDescription;
  @property() public questionTitle;
  @property() public questionDescription;
  @property() public editorFont;

  // public onThemeSelected = new EventBase<ThemeModel, { theme: ITheme }>();
  // public onThemePropertyChanged = new EventBase<ThemeModel, { name: string, value: any }>();
  // public onAllowModifyTheme = new EventBase<ThemeModel, { theme: ITheme, allow: boolean }>();
  public onThemeModified = new EventBase<ThemeModel, { theme: ITheme }>();

  private blockThemeChangedNotifications = 0;
  public loadTheme(theme: ITheme) {
    // this.blockThemeChangedNotifications += 1;
    try {
      let probeThemeFullName = getThemeFullName(theme);
      const baseTheme = findSuitableTheme(theme.themeName, theme.colorPalette, theme.isPanelless ? "lightweight" : "panels", probeThemeFullName);
      const themeChanges = getThemeChanges(theme, baseTheme);
      // if (this.currentTheme === theme) {
      //   this.themeCssVariablesChanges = themeChanges.cssVariables || {};
      // }
      this.themeName = themeChanges.themeName;
      this.themePalette = themeChanges.colorPalette;
      this.themeMode = themeChanges.isPanelless === true ? "lightweight" : "panels";

      this.backgroundImage = theme.backgroundImage || this.backgroundImage;
      this.backgroundImageFit = theme.backgroundImageFit || this.backgroundImageFit;
      this.backgroundImageAttachment = theme.backgroundImageAttachment || this.backgroundImageAttachment;

      const effectiveThemeCssVariables = {};
      assign(effectiveThemeCssVariables, ThemeModel.DefaultTheme.cssVariables || {}, baseTheme.cssVariables || {});
      assign(effectiveThemeCssVariables, theme.cssVariables || {}, this.themeCssVariablesChanges);
      trimCssVariables(effectiveThemeCssVariables);
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
      assign(effectiveTheme, theme, { cssVariables: effectiveThemeCssVariables, themeName: this.themeName, colorPalette: this.themePalette, isPanelless: this.themeMode === "lightweight" });
      // this.surveyProvider.theme = effectiveTheme;

      // this.initializeColorCalculator();
      // this.loadThemeIntoPropertyGrid();
      this.fromJSON(effectiveTheme);
    }
    finally {
      // this.blockThemeChangedNotifications -= 1;
    }
  }

  public resetTheme() {
    this.setTheme({ themeName: this.defaultSessionTheme.themeName, isPanelless: this.defaultSessionTheme.isPanelless, colorPalette: this.defaultSessionTheme.colorPalette });
  }

  public setTheme(theme: ITheme) {
    this.iteratePropertiesHash((hash, key) => {
      hash[key] = undefined;
    });

    // const headerBackgroundColorValue = this.currentTheme.cssVariables["--sjs-header-backcolor"];
    this.themeCssVariablesChanges = {};
    // if (headerBackgroundColorValue !== undefined) {
    //   this.themeCssVariablesChanges["--sjs-header-backcolor"] = headerBackgroundColorValue;
    // }
    this.backgroundImage = "";
    this.backgroundImageFit = "cover";
    this.backgroundImageAttachment = "scroll";
    this.backgroundOpacity = 100;
    this.loadTheme(theme);
    // this.themeModified({ theme });
  }

  public selectTheme(themeName: string, themePalette: string = "light", themeMode: string = "panels") {
    this.themeName = themeName;
    this.themePalette = themePalette;
    this.themeMode = themeMode;
    const theme = this.findSuitableTheme(themeName);
    this.setTheme(theme);
  }

  // private generalPropertiesChanged(options: ValueChangedEvent): boolean {
  //   if (["themeName", "themeMode", "themePalette"].indexOf(options.name) !== -1) {
  //     if (options.name === "themeName") {
  //       this.loadTheme(this.findSuitableTheme(options.value) || { [options.name]: options.value, isPanelless: this.themeMode === "lightweight", colorPalette: this.themePalette });
  //     }
  //     if (options.name === "themeMode") {
  //       this.loadTheme({ themeName: this.themeName, isPanelless: options.value === "lightweight", colorPalette: this.themePalette });
  //     }
  //     if (options.name === "themePalette") {
  //       this.loadTheme({ themeName: this.themeName, isPanelless: this.themeMode === "lightweight", colorPalette: options.value });
  //     }
  //     this.themeModified({ theme: this.currentTheme });
  //     return true;
  //   }
  //   if (["backgroundImage", "backgroundImageFit", "backgroundImageAttachment", "backgroundOpacity"].indexOf(options.name) !== -1) {
  //     this[options.name] = options.value;
  //     this.themeModified(options);
  //     return true;
  //   }
  //   return false;
  // }

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void {
    if (["themeName", "themeMode", "themePalette"].indexOf(name) !== -1) {
      if (name === "themeName") {
        this.loadTheme(this.findSuitableTheme(newValue) || { [name]: newValue, isPanelless: this.themeMode === "lightweight", colorPalette: this.themePalette });
      }
      if (name === "themeMode") {
        this.loadTheme({ themeName: this.themeName, isPanelless: newValue === "lightweight", colorPalette: this.themePalette });
      }
      if (name === "themePalette") {
        this.loadTheme({ themeName: this.themeName, isPanelless: this.themeMode === "lightweight", colorPalette: newValue });
      }
      // this.themeModified({ theme: this.currentTheme });
      this.onThemeModified.fire(this, { theme: this.toJSON() });
    }
    if (["backgroundImage", "backgroundImageFit", "backgroundImageAttachment", "backgroundOpacity"].indexOf(name) !== -1) {
      this[name] = newValue;
      //     this.themeModified(options);
      //     return true;
      this.onThemeModified.fire(this, { theme: this.toJSON() });
    }
  }

  findSuitableTheme(themeName: string): ITheme {
    let probeThemeFullName = getThemeFullName({ themeName: themeName, colorPalette: this.themePalette, isPanelless: this.themeMode === "lightweight" } as any);
    return findSuitableTheme(themeName, this.themePalette, this.themeMode, probeThemeFullName);
  }

  getPredefinedChoices(propertyName: string): Array<ItemValue> {
    if (propertyName === "--sjs-general-backcolor-dim" || propertyName === "generalPrimaryColor")
      return Object.keys(PredefinedColors[this.themePalette]).map(colorName =>
        new ItemValue(PredefinedColors[this.themePalette][colorName], getLocString("theme.colors." + colorName))
      );
  }

  onSerializeFontSettingsValue(propertyName: string) {
    const result = { ...this[propertyName] };
    if(result.size != this.getPropertyByName(propertyName).defaultValue.size) {
      result.size = result.size + "px";
    }
    return result;
  }

  onSerializeElementSettingsValue(propertyName: string) {
    const result = { ...this[propertyName] };
    if(result.cornerRadius != this.getPropertyByName(propertyName).defaultValue.cornerRadius) {
      result.cornerRadius = result.cornerRadius + "px";
    }
    return result;
  }

  fromJSON(json: ITheme, options?: ILoadFromJSONOptions): void {
    if(json && json.cssVariables) {
      super.fromJSON(json.cssVariables, options);

      this.commonScale = roundTo2Decimals(parseFloat(this["--sjs-base-unit"]) * 100 / 8);
      this.commonFontSize = roundTo2Decimals(parseFloat(this["--sjs-font-size"]) * 100 / 16);
      this.cornerRadius = roundTo2Decimals(parseFloat(this["--sjs-corner-radius"]));
    }
  }

  toJSON(options?: ISaveToJSONOptions): ITheme {
    this["--sjs-base-unit"] = (this.commonScale * 8 / 100) + "px";
    this["--sjs-font-size"] = (this.commonFontSize * 16 / 100) + "px";
    this["--sjs-corner-radius"] = this.cornerRadius + "px";

    const result = super.toJSON(options);
    const cssVariables = {};
    Object.keys(result).forEach(key => {
      if(key.indexOf("--sjs") == 0) {
        cssVariables[key] = result[key];
        delete result[key];
      } else if(key !== "header" && typeof result[key] === "object") {
        Object.keys(result[key]).forEach(property => {
          cssVariables["--sjs-" + key.toLowerCase() + "-" + property] = result[key][property];
        });
        // --sjs-font-questiontitle-family
        // --sjs-questionpanel-backcolor
      }
    });
    result.cssVariables = cssVariables;
    return result;
  }

}

Serializer.addClass(
  "themebuilder",
  [
    {
      type: "dropdown",
      name: "themeName",
      displayName: getLocString("theme.themeName"),
      choices: PredefinedThemes.map(theme => ({ value: theme, text: getLocString("theme.names." + theme) })),
      default: ThemeModel.DefaultTheme.themeName || "default",
      category: "general",
    }, {
      type: "buttongroup",
      name: "themePalette",
      displayName: "",
      choices: [
        { value: "light", text: getLocString("theme.themePaletteLight") },
        { value: "dark", text: getLocString("theme.themePaletteDark") }
      ],
      default: "light",
      category: "general",
    }, {
      type: "buttongroup",
      name: "themeMode",
      displayName: getLocString("theme.themeMode"),
      choices: [
        { value: "panels", text: getLocString("theme.themeModePanels") },
        { value: "lightweight", text: getLocString("theme.themeModeLightweight") }],
      default: "panels",
      category: "general",
    }, {
      type: "color",
      name: "--sjs-general-backcolor-dim",
      displayName: getLocString("theme.backgroundDimColor"),
      category: "background",
    }, {
      name: "backgroundImage:file",
      category: "background",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.storeDataAsText = false;
          editor.acceptedTypes = "image/*";
          editor.placeholder = "Browse...";
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
      category: "background",
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
      category: "background",
    }, {
      type: "spinedit",
      name: "backgroundOpacity",
      displayName: getLocString("theme.backgroundOpacity"),
      enableIf: function (obj) {
        return !!obj.backgroundImage;
      },
      default: 100,
      category: "background",
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
      name: "generalPrimaryColor",
      displayName: getLocString("theme.primaryColor"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.descriptionLocation = "hidden";
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "spinedit",
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
    }, {
      type: "dropdown",
      name: "--sjs-font-family",
      displayName: getLocString("theme.fontFamily"),
      choices: [].concat(DefaultFonts),
      default: "Open Sans",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.descriptionLocation = "hidden";
          editor.allowClear = false;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
      type: "spinedit",
      name: "commonFontSize",
      displayName: getLocString("theme.fontSize"),
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
      name: "--sjs-font-size", visible: false,
      default: "16px",
    }, {
      name: "--sjs-corner-radius", visible: false,
      default: "4px",
    }, {
      name: "--sjs-base-unit", visible: false,
      default: "8px",
    }, {
      name: "--sjs-corner-radius",
      default: "4px",
      visible: false
    },
    { name: "--sjs-general-backcolor", visible: false },
    { name: "--sjs-general-backcolor-dark", visible: false },
    { name: "--sjs-general-backcolor-dim", visible: false },
    { name: "--sjs-general-backcolor-dim-light", visible: false },
    { name: "--sjs-general-backcolor-dim-dark", visible: false },
    { name: "--sjs-general-forecolor", visible: false },
    { name: "--sjs-general-forecolor-light", visible: false },
    { name: "--sjs-general-dim-forecolor", visible: false },
    { name: "--sjs-general-dim-forecolor-light", visible: false },
    // { name: "--sjs-primary-backcolor", visible: false },
    // { name: "--sjs-primary-backcolor-light", visible: false },
    // { name: "--sjs-primary-backcolor-dark", visible: false },
    // { name: "--sjs-primary-forecolor", visible: false },
    // { name: "--sjs-primary-forecolor-light", visible: false },

    {
      type: "spinedit",
      name: "commonScale",
      displayName: getLocString("theme.scale"),
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
      name: "cornerRadius",
      displayName: getLocString("theme.cornerRadius"),
      default: 4,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "px";
          editor.min = 0;
          editor.visibleIf = "{advancedmode} = false";
        }
      }
    }, {
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
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.primaryDarkColor");
          editor.colorTitleLocation = "left";
          editor.titleLocation = "hidden";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "colorsettings",
      name: "--sjs-primary-backcolor-light",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.primaryLightColor");
          editor.colorTitleLocation = "left";
          editor.titleLocation = "hidden";
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
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.primaryForecolorLight");
          editor.colorTitleLocation = "left";
          editor.titleLocation = "hidden";
          editor.descriptionLocation = "hidden";
        }
      }
    }, {
      type: "fontsettings",
      name: "pageTitle",
      displayName: getLocString("theme.titleFont"),
      default: {
        family: settings.theme.fontFamily,
        color: "rgba(0, 0, 0, 0.91)",
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
        return obj.onSerializeFontSettingsValue("pageTitle");
      }
    }, {
      type: "fontsettings",
      name: "pageDescription",
      displayName: getLocString("theme.descriptionFont"),
      default: {
        family: settings.theme.fontFamily,
        color: "rgba(0, 0, 0, 0.91)",
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
        return obj.onSerializeFontSettingsValue("pageDescription");
      }
    }, {
      type: "elementsettings",
      name: "questionPanel",
      displayName: getLocString("theme.backgroundCornerRadius"),
      default: {
        backcolor: "rgba(255, 255, 255, 1)",
        hovercolor: "rgba(248, 248, 248, 1)",
        cornerRadius: 4,
      },
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      },
      onSerializeValue: (obj: ThemeModel) => {
        return obj.onSerializeElementSettingsValue("questionPanel");
      }
    }, {
      type: "boxshadowsettings",
      name: "--sjs-shadow-small",
      displayName: getLocString("theme.shadow"),
      default: [
        {
          x: 0,
          y: 1,
          blur: 2,
          spread: 0,
          isInset: false,
          color: "rgba(0, 0, 0, 0.15)"
        }
      ],
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
        color: "rgba(0, 0, 0, 0.91)",
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
        return obj.onSerializeFontSettingsValue("questionTitle");
      }
    }, {
      type: "fontsettings",
      name: "questionDescription",
      displayName: getLocString("theme.descriptionFont"),
      default: {
        family: settings.theme.fontFamily,
        color: "rgba(0, 0, 0, 0.45)",
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
        return obj.onSerializeFontSettingsValue("questionDescription");
      }
    }, {
      type: "elementsettings",
      name: "editorPanel",
      displayName: getLocString("theme.backgroundCornerRadius"),
      default: {
        backcolor: "rgba(255, 255, 255, 1)",
        hovercolor: "rgba(248, 248, 248, 1)",
        cornerRadius: "4px",
      },
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.descriptionLocation = "hidden";
        }
      },
      onSerializeValue: (obj: ThemeModel) => {
        return obj.onSerializeElementSettingsValue("editorPanel");
      }
    },
    {
      type: "boxshadowsettings",
      name: "--sjs-shadow-inner",
      displayName: getLocString("theme.shadow"),
      default: [
        {
          x: 0,
          y: 1,
          blur: 2,
          spread: 0,
          isInset: true,
          color: "rgba(0, 0, 0, 0.15)"
        }
      ],
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
        color: "rgba(0, 0, 0, 0.91)",
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
        return obj.onSerializeFontSettingsValue("editorFont");
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
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.visibleIf = "{advancedmode} = true";
          editor.colorTitle = getLocString("theme.borderLight");
          editor.colorTitleLocation = "left";
          editor.titleLocation = "hidden";
          editor.descriptionLocation = "hidden";
        }
      }
    }
  ], (json) => { return new ThemeModel(); }
);

export class PropertyGridEditorSpinEdit extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "spinedit";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const res: any = { type: "spinedit", descriptionLocation: "hidden" };
    return res;
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorSpinEdit());

export class PropertyGridEditorColorSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "colorsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "colorsettings", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorColorSettings());

export class PropertyGridEditorFontSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "fontsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "fontSettings", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorFontSettings());

export class PropertyGridEditorElementSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "elementsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "elementsettings", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorElementSettings());

export class PropertyGridEditorBoxShadowSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "boxshadowsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "boxshadowsettings", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorBoxShadowSettings());