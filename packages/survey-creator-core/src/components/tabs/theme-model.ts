import { Base, ITheme, JsonObjectProperty, Question, Serializer, property, ILoadFromJSONOptions, ISaveToJSONOptions, IHeader, EventBase, SurveyModel, ArrayChanges } from "survey-core";
import { getLocString } from "../../editorLocalization";
import { defaultThemesOrder, PredefinedThemes, Themes } from "./themes";
import { settings } from "../../creator-settings";

import { DefaultFonts, fontsettingsFromCssVariable, fontsettingsToCssVariable } from "./theme-custom-questions/font-settings";
import { backgroundCornerRadiusFromCssVariable, backgroundCornerRadiusToCssVariable } from "./theme-custom-questions/background-corner-radius";
import { createBoxShadowReset, trimBoxShadowValue } from "./theme-custom-questions/shadow-effects";
import { HeaderModel } from "./header-model";
import { registerTheme, ThemesHash, sortDefaultThemes } from "../../utils/themes";
import { assign, roundTo2Decimals } from "../../utils/utils";
import { ColorCalculator, ingectAlpha, parseColor } from "../../utils/color-utils";
import { UndoRedoManager } from "../../plugins/undo-redo/undo-redo-manager";
import { updateCustomQuestionJSONs } from "./theme-custom-questions";
import { SurveyCreatorModel } from "../../creator-base";

export * from "./header-model";

export function registerSurveyTheme(...themes: Array<ThemesHash<ITheme> | ITheme>) {
  const importedThemeNames = [];
  registerTheme((theme: ITheme) => {
    const creatorThemeVariables = {};
    const creatorTheme = {};
    assign(creatorThemeVariables, theme.cssVariables);
    assign(creatorTheme, theme, { cssVariables: creatorThemeVariables });
    const creatorThemeName = getThemeFullName(theme);
    Themes[creatorThemeName] = creatorTheme;
    importedThemeNames.push(theme.themeName);
  }, ...themes);
  sortDefaultThemes(defaultThemesOrder, importedThemeNames, PredefinedThemes);
}

export function getThemeFullName(theme: ITheme) {
  const themeName = theme.themeName || ThemeModel.DefaultTheme.themeName || "default";
  let fullThemeName = themeName + "-" + (theme.colorPalette || "light");
  if (theme.isPanelless === true) {
    fullThemeName += "-panelless";
  }
  return fullThemeName;
}

export function isThemeEmpty(theme: ITheme) {
  if (!theme) {
    return true;
  }
  const themeProperties = Object.keys(theme);
  return themeProperties.length == 0 || themeProperties.length == 1 && themeProperties[0] == "cssVariables" && Object.keys(theme.cssVariables).length == 0;
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
  private static defaultThemeValue: ITheme;
  public static get DefaultTheme() {
    if (!this.defaultThemeValue) {
      return Themes["default-light"] || {};
    } else {
      return this.defaultThemeValue;
    }
  }
  public static set DefaultTheme(val: ITheme) {
    this.defaultThemeValue = val;
  }
  public undoRedoManager: UndoRedoManager;
  private themeCssVariablesChanges: { [index: string]: string } = {};
  private colorCalculator = new ColorCalculator();
  private dependentColorNames = ["--sjs-primary-backcolor-light", "--sjs-primary-backcolor-dark"];

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

  @property() scale: number;
  @property() cornerRadius: number;
  @property() fontSize: number;

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

  private initializeColorCalculator(cssVariables: { [index: string]: string }) {
    const baseColorName = "--sjs-primary-backcolor";
    const cssValuesExists = this.dependentColorNames.every(name => !!cssVariables[name]);
    if (!cssVariables[baseColorName] || !cssValuesExists) {
      return;
    }

    const dependentColorValues = this.dependentColorNames.map(name => { return cssVariables[name]; });
    this.colorCalculator.initializeColorSettings(cssVariables[baseColorName], dependentColorValues);
  }

  private updatePropertiesDependentOnPrimaryColor(value: string) {
    if (!this.colorCalculator.isInitialized) return;

    const newDependentColors = this.colorCalculator.calculateDependentColorValues(value);
    this.dependentColorNames.forEach((name, index) => {
      this.setPropertyValue(name, newDependentColors[index]);
      this.setThemeCssVariablesChanges(name, newDependentColors[index]);
    });
  }
  private cssVariablePropertiesChanged(name: string, value: any, property: JsonObjectProperty) {
    let nameProcessed = true;
    if (name === "primaryColor") {
      this.setPropertyValue("--sjs-primary-backcolor", value);
      this.setThemeCssVariablesChanges("--sjs-primary-backcolor", value);
      this.updatePropertiesDependentOnPrimaryColor(value);
    } else if (name === "--sjs-primary-backcolor") {
      this["primaryColor"] = value;
      this.updatePropertiesDependentOnPrimaryColor(value);
    } else if (name === "--sjs-shadow-inner" || name === "--sjs-shadow-small") {
      const newBoxShadowReset = createBoxShadowReset(value);
      this.setPropertyValue(name + "-reset", newBoxShadowReset);
      this.setThemeCssVariablesChanges(name + "-reset", newBoxShadowReset);
    } else if (name == "scale") {
      this.setThemeCssVariablesChanges("--sjs-base-unit", (value * 8 / 100) + "px");
    } else if (name == "fontSize") {
      this.setThemeCssVariablesChanges("--sjs-font-size", (value * 16 / 100) + "px");
    } else if (name == "cornerRadius") {
      this.setThemeCssVariablesChanges("--sjs-corner-radius", value + "px");
    } else if (name === "questionBackgroundTransparency" || name === "editorPanel") {
      let baseColor = parseColor(this.getPropertyValue("--sjs-general-backcolor-dim-light")).color;
      let questionBackgroundTransparencyValue = this.getPropertyValue("questionBackgroundTransparency");
      this.setThemeCssVariablesChanges("--sjs-editor-background", ingectAlpha(baseColor, questionBackgroundTransparencyValue / 100));
    } else if (name === "panelBackgroundTransparency" || name === "questionPanel") {
      let baseColor = parseColor(this.getPropertyValue("--sjs-general-backcolor")).color;
      let panelBackgroundTransparencyValue = this.getPropertyValue("panelBackgroundTransparency");
      this.setThemeCssVariablesChanges("--sjs-question-background", ingectAlpha(baseColor, panelBackgroundTransparencyValue / 100));
    } else {
      nameProcessed = false;
    }

    let typeProcessed = true;
    if (property.type === "font") {
      fontsettingsToCssVariable(value, property, this.themeCssVariablesChanges);
      this.onThemePropertyChanged.fire(this, { name, value });
    } else if (property.type === "backgroundcornerradius") {
      backgroundCornerRadiusToCssVariable(value, property, this.themeCssVariablesChanges);
      this.onThemePropertyChanged.fire(this, { name, value });
    } else {
      typeProcessed = false;
    }

    return nameProcessed || typeProcessed;
  }

  private setThemeCssVariablesChanges(name: string, value: any) {
    if (this.themeCssVariablesChanges[name] !== value) {
      this.themeCssVariablesChanges[name] = value;
      this.onThemePropertyChanged.fire(this, { name, value });
    }
  }

  constructor() {
    super();
    updateCustomQuestionJSONs();
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

  initialize(surveyTheme: ITheme = {}, survey?: SurveyModel, creator?: SurveyCreatorModel) {
    this._defaultSessionTheme = ThemeModel.DefaultTheme;
    this.backgroundImage = "backgroundImage" in surveyTheme ? surveyTheme.backgroundImage : survey?.backgroundImage;
    this.backgroundImageFit = surveyTheme.backgroundImageFit !== undefined ? surveyTheme.backgroundImageFit : survey?.backgroundImageFit;
    this.backgroundImageAttachment = surveyTheme.backgroundImageAttachment !== undefined ? surveyTheme.backgroundImageAttachment : survey?.backgroundImageAttachment;
    this.backgroundOpacity = ((surveyTheme.backgroundOpacity !== undefined ? surveyTheme.backgroundOpacity : survey?.backgroundOpacity) || 1) * 100;
    this.loadTheme(surveyTheme, creator && creator.preferredColorPalette);
    this.header["logoPosition"] = survey?.logoPosition;
    this.undoRedoManager = new UndoRedoManager();
  }

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
  public loadTheme(theme: ITheme, preferredColorPalette?: string) {
    this.blockThemeChangedNotifications += 1;
    try {
      let probeThemeFullName = getThemeFullName({ themeName: theme.themeName, colorPalette: theme.colorPalette || preferredColorPalette, isPanelless: theme.isPanelless });
      const baseTheme = findSuitableTheme(theme.themeName, theme.colorPalette || preferredColorPalette, theme.isPanelless, probeThemeFullName);
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
      const effectiveHeader: IHeader = {} as any;
      if (Object.keys(effectiveHeader).length > 0) {
        effectiveTheme.header = effectiveHeader;
      }
      assign(effectiveTheme, theme, { cssVariables: effectiveThemeCssVariables, themeName: this.themeName, colorPalette: this.colorPalette, isPanelless: this.isPanelless });

      this.initializeColorCalculator(effectiveTheme.cssVariables);
      this.fromJSON(effectiveTheme);
    } finally {
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
    const headerBackgroundColorValue = this.themeCssVariablesChanges["--sjs-header-backcolor"];
    this.themeCssVariablesChanges = {};
    if (headerBackgroundColorValue !== undefined) {
      this.themeCssVariablesChanges["--sjs-header-backcolor"] = headerBackgroundColorValue;
    }

    try {
      this.blockThemeChangedNotifications += 1;
      this.iteratePropertiesHash((hash, key) => {
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

    if (this.blockThemeChangedNotifications > 0) return;
    let processedInternally = false;
    if (this !== sender) {
      const senderJSON = sender.toJSON();
      if (!!senderJSON.cssVariables) {
        Object.keys(senderJSON.cssVariables).forEach(key => this.setThemeCssVariablesChanges(key, senderJSON.cssVariables[key]));
      }
      this.onThemePropertyChanged.fire(this, { name, value: newValue });
      processedInternally = true;
    }
    if (name.indexOf("--") === 0) {
      this.setThemeCssVariablesChanges(name, newValue);
      processedInternally = true;
    }

    if (this.generalPropertiesChanged(name, newValue)) {
      if (!!this.undoRedoManager && this.blockThemeChangedNotifications == 0) {
        this.undoRedoManager.stopTransaction();
      }
      return;
    }

    this.blockThemeChangedNotifications += 1;

    if (this === sender && ["backgroundImage", "backgroundImageFit", "backgroundImageAttachment", "backgroundOpacity"].indexOf(name) !== -1) {
      this[name] = newValue;
      this.onThemePropertyChanged.fire(this, { name, value: newValue });
      this.blockThemeChangedNotifications -= 1;
      if (!!this.undoRedoManager && this.blockThemeChangedNotifications == 0) {
        this.undoRedoManager.stopTransaction();
      }
      return;
    }

    if (this.cssVariablePropertiesChanged(name, newValue, sender.getPropertyByName(name))) {
      processedInternally = true;
    }

    if (!processedInternally) {
      this.onThemePropertyChanged.fire(this, { name, value: newValue });
    }

    this.blockThemeChangedNotifications -= 1;
    if (!!this.undoRedoManager && this.blockThemeChangedNotifications == 0) {
      this.undoRedoManager.stopTransaction();
    }
  }

  findSuitableTheme(themeName: string): ITheme {
    let probeThemeFullName = getThemeFullName({ themeName: themeName, colorPalette: this.colorPalette, isPanelless: this.isPanelless } as any);
    return findSuitableTheme(themeName, this.colorPalette, this.isPanelless, probeThemeFullName);
  }

  fromJSON(json: ITheme, options?: ILoadFromJSONOptions): void {
    if (!json) return;

    const _json = {};
    assign(_json, json);
    delete _json["header"];
    delete _json["cssVariables"];

    super.fromJSON(_json, options);

    const _headerJson = {};
    assign(_headerJson, json.header);
    if (!!json["headerView"]) _headerJson["headerView"] = json["headerView"];
    this.header.fromJSON(_headerJson || {});

    if (json.cssVariables) {
      this["primaryColor"] = json.cssVariables["--sjs-primary-backcolor"];
      super.fromJSON(json.cssVariables, options);
      this.header.setCssVariables(json.cssVariables);

      this.scale = !!this["--sjs-base-unit"] ? roundTo2Decimals(parseFloat(this["--sjs-base-unit"]) * 100 / 8) : undefined;
      this.fontSize = !!this["--sjs-font-size"] ? roundTo2Decimals(parseFloat(this["--sjs-font-size"]) * 100 / 16) : undefined;
      this.cornerRadius = this["--sjs-corner-radius"] ? roundTo2Decimals(parseFloat(this["--sjs-corner-radius"])) : undefined;
      if (!!json["backgroundOpacity"])this.backgroundOpacity = json["backgroundOpacity"] * 100;

      this["questionPanel"] = backgroundCornerRadiusFromCssVariable(this.getPropertyByName("questionPanel"), json.cssVariables, "--sjs-general-backcolor", "--sjs-general-backcolor-dark", this.cornerRadius);
      this["editorPanel"] = backgroundCornerRadiusFromCssVariable(this.getPropertyByName("editorPanel"), json.cssVariables, "--sjs-general-backcolor-dim-light", "--sjs-general-backcolor-dim-dark", this.cornerRadius);

      Serializer.getProperties("theme").forEach(property => {
        if (property.type === "font") {
          this[property.name] = fontsettingsFromCssVariable(property, json.cssVariables);
        }
      });
      this["pageTitle"] = fontsettingsFromCssVariable(this.getPropertyByName("pageTitle"), json.cssVariables, "--sjs-general-dim-forecolor");
      this["pageDescription"] = fontsettingsFromCssVariable(this.getPropertyByName("pageDescription"), json.cssVariables, "--sjs-general-dim-forecolor-light");
      this["questionTitle"] = fontsettingsFromCssVariable(this.getPropertyByName("questionTitle"), json.cssVariables, "--sjs-general-forecolor");
      this["questionDescription"] = fontsettingsFromCssVariable(this.getPropertyByName("questionDescription"), json.cssVariables, "--sjs-general-forecolor-light");
      this["editorFont"] = fontsettingsFromCssVariable(this.getPropertyByName("editorFont"), json.cssVariables, "--sjs-general-forecolor", "--sjs-general-forecolor-light");
    }
  }

  toJSON(options: ISaveToJSONOptions = { storeDefaults: true }): ITheme {
    if (this.scale !== undefined) {
      this["--sjs-base-unit"] = (this.scale * 8 / 100) + "px";
    }
    if (this.fontSize !== undefined) {
      this["--sjs-font-size"] = (this.fontSize * 16 / 100) + "px";
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
        if (property.type === "font") {
          fontsettingsToCssVariable(result[key], property, cssVariables);
          delete result[key];
        }
        if (property.type === "backgroundcornerradius") {
          backgroundCornerRadiusToCssVariable(result[key], property, cssVariables);
          delete result[key];
        }
      }
    });
    result.cssVariables = cssVariables;
    (this.header as HeaderModel).saveToThemeJSON(result, options);
    return result;
  }

}

const themeNameValues = PredefinedThemes.map(theme => ({ value: theme, text: getLocString("theme.names." + theme) }));

Serializer.addClass(
  "theme",
  [
    {
      type: "dropdown",
      name: "themeName",
      choices: themeNameValues,
      category: "general",
    }, {
      type: "buttongroup",
      name: "colorPalette",
      displayName: "",
      choices: [
        { value: "light" },
        { value: "dark" }
      ],
      category: "general",
      enableIf: (obj: ThemeModel): boolean => {
        return !obj || obj.hasVariations(true);
      },
    }, {
      type: "buttongroup",
      name: "isPanelless",
      choices: [
        { value: false },
        { value: true }
      ],
      category: "general",
      enableIf: (obj: ThemeModel): boolean => {
        return !obj || obj.hasVariations(false);
      },
    },
    {
      type: "spinedit",
      isSerializable: false,
      name: "scale",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.step = 5;
        }
      }
    }, {
      type: "spinedit",
      isSerializable: false,
      name: "cornerRadius",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "px";
          editor.min = 0;
        }
      }
    }, {
      name: "advancedMode",
      type: "switchToggle",
      isSerializable: false,
      default: false,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.titleLocation = "hidden";
          editor.renderAs = "switch";
        }
      }
    }, {
      type: "spinedit",
      isSerializable: false,
      name: "fontSize",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.step = 5;
        }
      }
    },
    {
      type: "spinedit",
      isSerializable: false,
      name: "panelBackgroundTransparency",
      default: 100,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
        }
      }
    }, {
      type: "spinedit",
      isSerializable: false,
      name: "questionBackgroundTransparency",
      default: 100,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
        }
      }
    },
    {
      type: "backgroundcornerradius",
      name: "editorPanel",
    }, {
      type: "backgroundcornerradius",
      name: "questionPanel",
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
      { value: "auto" },
      { value: "contain" },
      { value: "cover" }
    ],
    default: "cover",
  }, {
    name: "backgroundImageAttachment",
    displayName: "",
    enableIf: function (obj) {
      return !!obj.backgroundImage;
    },
    choices: [
      { value: "fixed" },
      { value: "scroll" }
    ],
    default: "scroll",
  }, {
    type: "spinedit",
    isSerializable: false,
    name: "backgroundOpacity",
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
    type: "header",
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
    name: "primaryColor",
  }, {
    type: "dropdown",
    name: "--sjs-font-family",
    default: settings.themeEditor.defaultFontFamily,
    choices: [].concat(DefaultFonts),
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.allowClear = false;
        editor.choices = [].concat(DefaultFonts);
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
    type: "font",
    name: "pageTitle",
    default: {
      family: settings.themeEditor.defaultFontFamily,
      weight: "700",
      size: 24
    },
  }, {
    type: "font",
    name: "pageDescription",
    default: {
      family: settings.themeEditor.defaultFontFamily,
      weight: "700",
      size: 24
    },
  }, {
    type: "shadoweffects",
    name: "--sjs-shadow-small",
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs-shadow-small", trimBoxShadowValue(value));
    },
  }, {
    type: "font",
    name: "questionTitle",
    default: {
      family: settings.themeEditor.defaultFontFamily,
      weight: "600",
      size: 16,
    },
  }, {
    type: "font",
    name: "questionDescription",
    default: {
      family: settings.themeEditor.defaultFontFamily,
      weight: "400",
      size: 16
    },
  },
  {
    type: "shadoweffects",
    name: "--sjs-shadow-inner",
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs-shadow-inner", trimBoxShadowValue(value));
    },
  }, {
    type: "font",
    name: "editorFont",
    default: {
      family: settings.themeEditor.defaultFontFamily,
      weight: "400",
      size: 16
    },
  }, {
    type: "coloralpha",
    name: "--sjs-border-default",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.borderDefault");
        editor.colorTitleLocation = "left";
      }
    }
  },
  {
    type: "coloralpha",
    name: "--sjs-border-light",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.borderLight");
        editor.colorTitleLocation = "left";
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
  {
    name: "--sjs-shadow-small-reset",
    visible: false,
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs-shadow-small-reset", trimBoxShadowValue(value));
    },
  },
  {
    name: "--sjs-shadow-medium",
    visible: false,
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs-shadow-medium", trimBoxShadowValue(value));
    },
  },
  {
    name: "--sjs-shadow-large",
    visible: false,
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs-shadow-large", trimBoxShadowValue(value));
    },
  },
  {
    name: "--sjs-shadow-inner-reset",
    visible: false,
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs-shadow-inner-reset", trimBoxShadowValue(value));
    },
  },
  { name: "--sjs-border-light", visible: false },
  { name: "--sjs-border-default", visible: false },
  { name: "--sjs-border-inside", visible: false },
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
  },
  {
    type: "coloralpha",
    name: "--sjs-primary-backcolor",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.primaryDefaultColor");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs-primary-backcolor-dark",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.primaryDarkColor");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs-primary-backcolor-light",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.primaryLightColor");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs-primary-forecolor",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.primaryForecolor");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs-primary-forecolor-light",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.primaryForecolorLight");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs-special-red",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.fontColor");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs-special-red-light",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.backgroundColor");
        editor.colorTitleLocation = "left";
      }
    }
  },
  ]
);
