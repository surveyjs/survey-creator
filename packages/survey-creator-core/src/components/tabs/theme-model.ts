import { Base, ITheme, JsonObjectProperty, Question, Serializer, property, ILoadFromJSONOptions, ISaveToJSONOptions, IHeader, EventBase, SurveyModel, ArrayChanges, patchLegacyCSSVariables } from "survey-core";
import { getLocString } from "../../editorLocalization";
import { defaultThemesOrder, PredefinedThemes, Themes } from "./themes";
import { settings } from "../../creator-settings";

import { DefaultFonts, fontsettingsFromCssVariable, fontsettingsToCssVariable } from "./theme-custom-questions/font-settings";
import { backgroundCornerRadiusFromCssVariable, backgroundCornerRadiusToCssVariable } from "./theme-custom-questions/background-corner-radius";
import { trimBoxShadowValue } from "survey-core";
import { HeaderModel } from "./header-model";
import { registerConfig, ConfigsHash, sortDefaultConfigs } from "../../utils/configs";
import { assign, roundTo2Decimals } from "../../utils/utils";
import { ColorCalculator, ingectAlpha, parseColor } from "../../utils/color-utils";
import { UndoRedoManager } from "../../plugins/undo-redo/undo-redo-manager";
import { updateCustomQuestionJSONs } from "./theme-custom-questions";
import { SurveyCreatorModel } from "../../creator-base";

export * from "./header-model";

export function registerSurveyTheme(...themes: Array<ConfigsHash<ITheme> | ITheme>) {
  const importedThemeNames = [];
  registerConfig((theme: ITheme) => {
    const creatorThemeVariables = {};
    const creatorTheme = {};
    assign(creatorThemeVariables, theme.cssVariables);
    assign(creatorTheme, theme, { cssVariables: creatorThemeVariables });
    const creatorThemeName = getThemeFullName(theme);
    Themes[creatorThemeName] = creatorTheme;
    importedThemeNames.push(theme.themeName);
  }, ...themes);
  sortDefaultConfigs(defaultThemesOrder, importedThemeNames, PredefinedThemes);
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
  private dependentColorNames = ["--sjs2-color-bg-brand-secondary", "--sjs2-color-bg-brand-primary-dim"];

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
    const baseColorName = "--sjs2-color-bg-brand-primary";
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
      this.setPropertyValue("--sjs2-color-bg-brand-primary", value);
      this.setThemeCssVariablesChanges("--sjs2-color-bg-brand-primary", value);
      this.updatePropertiesDependentOnPrimaryColor(value);
    } else if (name === "--sjs2-color-bg-brand-primary") {
      this["primaryColor"] = value;
      this.updatePropertiesDependentOnPrimaryColor(value);
    } else if (name == "scale") {
      this.setThemeCssVariablesChanges("--sjs2-base-unit-size", (value * 8 / 100) + "px");
    } else if (name == "fontSize") {
      this.setThemeCssVariablesChanges("--sjs2-base-unit-font-size", (value * 8 / 100) + "px");
    } else if (name == "cornerRadius") {
      this.setThemeCssVariablesChanges("--sjs2-base-unit-radius", value + "px");
    } else if (name === "questionBackgroundTransparency" || name === "editorPanel") {
      let baseColor = parseColor(this.getPropertyValue("--sjs2-color-component-formbox-default-bg")).color;
      let questionBackgroundTransparencyValue = this.getPropertyValue("questionBackgroundTransparency");
      this.setThemeCssVariablesChanges("--sjs2-color-component-formbox-default-bg", ingectAlpha(baseColor, questionBackgroundTransparencyValue / 100));
    } else if (name === "panelBackgroundTransparency" || name === "questionPanel") {
      let baseColor = parseColor(this.getPropertyValue("--sjs2-color-bg-basic-primary")).color;
      let panelBackgroundTransparencyValue = this.getPropertyValue("panelBackgroundTransparency");
      this.setThemeCssVariablesChanges("--sjs2-color-bg-basic-primary", ingectAlpha(baseColor, panelBackgroundTransparencyValue / 100));
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

  private calculateThemeVariables(cssVariables) {
    let themeCopyCssVariables = JSON.parse(JSON.stringify(cssVariables));

    // If cssVariables exist, apply them to a div, then replace cssVariables with computed styles
    if (themeCopyCssVariables && typeof window !== "undefined") {
      const div = document.createElement("div");
      for (const key of Object.keys(themeCopyCssVariables)) {
        div.style.setProperty(key, themeCopyCssVariables[key] as string);
      }
      document.body.appendChild(div);

      const computed = window.getComputedStyle(div);

      // Replace cssVariables with computed values
      const newCssVariables: { [key: string]: string } = {};
      for (const key of Object.keys(themeCopyCssVariables)) {
        newCssVariables[key] = computed.getPropertyValue(key);
      }
      themeCopyCssVariables = newCssVariables;

      document.body.removeChild(div);
    }
    return themeCopyCssVariables;
  }

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
      patchLegacyCSSVariables(effectiveThemeCssVariables);
      assign(effectiveThemeCssVariables, this.calculateThemeVariables(effectiveThemeCssVariables));
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
    const headerBackgroundColorValue = this.themeCssVariablesChanges["--sjs2-color-component-header-default-bg"];
    this.themeCssVariablesChanges = {};
    if (headerBackgroundColorValue !== undefined) {
      this.themeCssVariablesChanges["--sjs2-color-component-header-default-bg"] = headerBackgroundColorValue;
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
      this["primaryColor"] = json.cssVariables["--sjs2-color-bg-brand-primary"];
      super.fromJSON(json.cssVariables, options);
      this.header.setCssVariables(json.cssVariables);

      this.scale = !!this["--sjs2-base-unit-size"] ? roundTo2Decimals(parseFloat(this["--sjs2-base-unit-size"]) * 100 / 8) : undefined;
      this.fontSize = !!this["--sjs2-base-unit-font-size"] ? roundTo2Decimals(parseFloat(this["--sjs2-base-unit-font-size"]) * 100 / 8) : undefined;
      this.cornerRadius = this["--sjs2-base-unit-radius"] ? roundTo2Decimals(parseFloat(this["--sjs2-base-unit-radius"])) : undefined;
      if (!!json["backgroundOpacity"])this.backgroundOpacity = json["backgroundOpacity"] * 100;

      this["questionPanel"] = backgroundCornerRadiusFromCssVariable(this.getPropertyByName("questionPanel"), json.cssVariables, "--sjs2-color-bg-basic-primary", "--sjs2-color-bg-basic-primary-dim", this.cornerRadius);
      this["editorPanel"] = backgroundCornerRadiusFromCssVariable(this.getPropertyByName("editorPanel"), json.cssVariables, "--sjs2-color-component-formbox-default-bg", "--sjs2-color-bg-basic-secondary-dim", this.cornerRadius);

      Serializer.getProperties("theme").forEach(property => {
        if (property.type === "font") {
          this[property.name] = fontsettingsFromCssVariable(property, json.cssVariables);
        }
      });
      this["pageTitle"] = fontsettingsFromCssVariable(this.getPropertyByName("pageTitle"), json.cssVariables, "--sjs2-color-fg-basic-primary");
      this["pageDescription"] = fontsettingsFromCssVariable(this.getPropertyByName("pageDescription"), json.cssVariables, "--sjs2-color-fg-basic-secondary");
      this["questionTitle"] = fontsettingsFromCssVariable(this.getPropertyByName("questionTitle"), json.cssVariables, "--sjs2-color-fg-basic-primary");
      this["questionDescription"] = fontsettingsFromCssVariable(this.getPropertyByName("questionDescription"), json.cssVariables, "--sjs2-color-fg-basic-secondary");
      this["editorFont"] = fontsettingsFromCssVariable(this.getPropertyByName("editorFont"), json.cssVariables, "--sjs2-color-fg-basic-primary", "--sjs2-color-fg-basic-secondary");
    }
  }

  toJSON(options: ISaveToJSONOptions = { storeDefaults: true }): ITheme {
    if (this.scale !== undefined) {
      this["--sjs2-base-unit-size"] = (this.scale * 8 / 100) + "px";
    }
    if (this.fontSize !== undefined) {
      this["--sjs2-base-unit-font-size"] = (this.fontSize * 8 / 100) + "px";
    }
    if (this.cornerRadius !== undefined) {
      this["--sjs2-base-unit-radius"] = this.cornerRadius + "px";
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
    name: "--sjs2-typography-font-family-text",
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
    name: "--sjs2-base-unit-font-size", visible: false,
    default: "8px",
  },
  { name: "--sjs2-base-unit-radius", visible: false },
  { name: "--sjs2-base-unit-size", visible: false },
  { name: "--sjs2-base-unit-radius", visible: false },
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
    name: "--sjs2-border-effect-surface-default",
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs2-border-effect-surface-default", trimBoxShadowValue(value));
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
    name: "--sjs2-border-effect-component-formbox-default",
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs2-border-effect-component-formbox-default", trimBoxShadowValue(value));
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
    name: "--sjs2-color-component-input-default-line",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.borderDefault");
        editor.colorTitleLocation = "left";
      }
    }
  },
  {
    type: "coloralpha",
    name: "--sjs2-color-border-basic-secondary",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.borderLight");
        editor.colorTitleLocation = "left";
      }
    }
  },

  { name: "--sjs2-color-bg-basic-primary", visible: false },
  { name: "--sjs2-color-bg-basic-primary-dim", visible: false },

  { name: "--sjs2-color-component-formbox-default-bg", visible: false },
  { name: "--sjs2-color-bg-basic-secondary-dim", visible: false },
  { name: "--sjs2-color-fg-basic-primary", visible: false },
  { name: "--sjs2-color-fg-basic-secondary", visible: false },
  { name: "--sjs2-color-fg-basic-primary", visible: false },
  { name: "--sjs2-color-fg-basic-secondary", visible: false },

  { name: "--sjs2-color-bg-accent-primary", visible: false },
  { name: "--sjs2-color-bg-accent-secondary", visible: false },
  { name: "--sjs2-color-bg-accent-secondary-dim", visible: false },
  { name: "--sjs2-color-fg-accent-on-primary", visible: false },
  { name: "--sjs2-color-fg-accent-primary-disabled", visible: false },
  {
    name: "--sjs2-border-effect-surface-default-reset",
    visible: false,
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs2-border-effect-surface-default-reset", trimBoxShadowValue(value));
    },
  },
  {
    name: "--sjs2-border-effect-floating-default",
    visible: false,
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs2-border-effect-floating-default", trimBoxShadowValue(value));
    },
  },
  {
    name: "--sjs2-border-effect-floating-default",
    visible: false,
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs2-border-effect-floating-default", trimBoxShadowValue(value));
    },
  },
  {
    name: "--sjs2-border-effect-component-formbox-default-reset",
    visible: false,
    onSetValue: function (obj: any, value: any) {
      obj.setPropertyValue("--sjs2-border-effect-component-formbox-default-reset", trimBoxShadowValue(value));
    },
  },
  { name: "--sjs2-color-border-basic-secondary", visible: false },
  { name: "--sjs2-color-component-input-default-line", visible: false },
  { name: "--sjs2-color-border-basic-secondary-overlay", visible: false },
  { name: "--sjs2-color-fg-alert-on-primary", visible: false },
  { name: "--sjs2-color-bg-positive-primary", visible: false },
  { name: "--sjs2-color-bg-positive-secondary", visible: false },
  { name: "--sjs2-color-fg-positive-on-primary", visible: false },
  { name: "--sjs2-color-bg-note-primary", visible: false },
  { name: "--sjs2-color-bg-note-secondary", visible: false },
  { name: "--sjs2-color-fg-note-on-primary", visible: false },
  { name: "--sjs2-color-bg-warning-primary", visible: false },
  { name: "--sjs2-color-bg-warning-secondary", visible: false },
  { name: "--sjs2-color-fg-warning-on-primary", visible: false },
  {
    type: "color",
    name: "--sjs2-color-bg-neutral-tertiary-dim",
  },
  {
    type: "coloralpha",
    name: "--sjs2-color-bg-brand-primary",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.primaryDefaultColor");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs2-color-bg-brand-primary-dim",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.primaryDarkColor");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs2-color-bg-brand-secondary",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.primaryLightColor");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs2-color-fg-brand-on-primary",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.primaryForecolor");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs2-color-fg-brand-primary-disabled",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.primaryForecolorLight");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs2-color-bg-alert-primary",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.colorTitle = getLocString("theme.fontColor");
        editor.colorTitleLocation = "left";
      }
    }
  }, {
    type: "coloralpha",
    name: "--sjs2-color-bg-alert-secondary",
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
