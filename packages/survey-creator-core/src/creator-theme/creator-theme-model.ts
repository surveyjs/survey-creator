import { Serializer, Base, property, ArrayChanges, EventBase, ILoadFromJSONOptions, ISaveToJSONOptions } from "survey-core";
import { getLocString } from "../editorLocalization";
import { assign, roundTo2Decimals } from "../utils/utils";
import { colorsAreEqual } from "../utils/color-utils";
import { calculateThemeVariables } from "../utils/utils";
import { CreatorThemes, ICreatorTheme, getPredefinedCreatorThemeChoices } from "./creator-themes";
import { getThemeFullName } from "../components/tabs/theme-model";
import { PredefinedBackgroundColors, PredefinedColors } from "../components/tabs/themes";
import { DefaultLight } from "survey-core/themes";

export class CreatorThemeModel extends Base implements ICreatorTheme {
  static defaultThemeName = "default";
  static defaultColorPalette = "light";

  static varBaseUnitFontSize = "--sjs2-base-unit-font-size";
  static varBaseUnitLineHeight = "--sjs2-base-unit-line-height";
  static varBaseUnitSize = "--sjs2-base-unit-size";
  static varBaseUnitSpacing = "--sjs2-base-unit-spacing";
  static varBaseUnitRadius = "--sjs2-base-unit-radius";
  static varBaseUnitBorderWidth = "--sjs2-base-unit-border-width";

  static varColorProjectBrand = "--sjs2-color-project-brand-600";
  static varColorUtilitySurface = "--sjs2-color-utility-surface-designer";

  private baseThemeVariables: { [index: string]: string } = {};
  initialCssVariables: { [index: string]: string } = {};
  themeCssVariablesChanges?: { [index: string]: string } = {};

  unitDictionary: { [index: string]: number } = {
    [CreatorThemeModel.varBaseUnitFontSize]: 8,
    [CreatorThemeModel.varBaseUnitLineHeight]: 8,
    [CreatorThemeModel.varBaseUnitSize]: 8,
    [CreatorThemeModel.varBaseUnitSpacing]: 8,
    [CreatorThemeModel.varBaseUnitRadius]: 8,
    [CreatorThemeModel.varBaseUnitBorderWidth]: 1,
  };

  @property() themeName: string = CreatorThemeModel.defaultThemeName;
  @property() colorPalette: "light" | "dark" | string = CreatorThemeModel.defaultColorPalette;
  @property() scale: number;
  @property() fontScale: number;

  public get isLight(): boolean {
    return this.colorPalette !== "dark";
  }
  public set isLight(val: boolean) {
    this.colorPalette = val ? "light" : "dark";
  }

  public onThemeSelected = new EventBase<CreatorThemeModel, { theme: ICreatorTheme }>();
  public onThemePropertyChanged = new EventBase<CreatorThemeModel, { name: string, value: any }>();

  public getRootElement = (): HTMLElement => undefined;

  public hasVariations(palette: boolean): boolean {
    if (!palette) return false;
    const registeredThemes = Object.keys(CreatorThemes);
    const themeLight = this.themeName + "-light";
    const themeDark = this.themeName + "-dark";
    return registeredThemes.indexOf(themeLight) !== -1 && registeredThemes.indexOf(themeDark) !== -1;
  }

  private getThemeFromCreatorThemes(themeName: string, colorPalette?: string): ICreatorTheme {
    const fullKey = getThemeFullName({ themeName, colorPalette });
    const theme = CreatorThemes[fullKey];
    if (!theme) return;

    if (themeName === CreatorThemeModel.defaultThemeName && (colorPalette || CreatorThemeModel.defaultColorPalette) === CreatorThemeModel.defaultColorPalette && (!theme.cssVariables || Object.keys(theme.cssVariables).length === 0)) {
      theme.cssVariables = { ...this.baseThemeVariables, ...DefaultLight.cssVariables };
    }
    return theme;
  }
  private isSpecialBackgroundFromCurrentTheme() {
    const currentTheme = this.getThemeFromCreatorThemes(this.themeName, this.colorPalette);
    const currentThemeCssVariables = currentTheme?.cssVariables;
    return colorsAreEqual(currentThemeCssVariables?.[CreatorThemeModel.varColorUtilitySurface], this[CreatorThemeModel.varColorUtilitySurface]);
  }
  private findAppropriateSpecialBackground(primaryColorValue: string) {
    let primaryColorName: string;
    const colorsDict = PredefinedColors["light"];
    Object.keys(colorsDict).forEach(colorName => {
      if (colorsAreEqual(colorsDict[colorName], primaryColorValue)) {
        primaryColorName = colorName;
      }
    });
    return PredefinedBackgroundColors["light"][primaryColorName];
  }
  private updateBackgroundColor(primaryColorNewValue: any, primaryColorOldValue: any) {
    if (!this.isLight) {
      return;
    }
    const canCalculateSpecialBackgroundColor = this.isSpecialBackgroundFromCurrentTheme() || colorsAreEqual(this.findAppropriateSpecialBackground(primaryColorOldValue), this[CreatorThemeModel.varColorUtilitySurface]);
    if (canCalculateSpecialBackgroundColor) {
      const newSpecialBackgroundColor = this.findAppropriateSpecialBackground(primaryColorNewValue);
      this[CreatorThemeModel.varColorUtilitySurface] = newSpecialBackgroundColor || PredefinedBackgroundColors["light"]["gray"];
    }
  }

  constructor() {
    super();
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

  private initializeBaseThemeVariables() {
    const vars = Serializer.getProperties("creatortheme").map(p => p.name).filter(name => name.indexOf("--sjs2-") == 0);
    const computed = calculateThemeVariables(DefaultLight.cssVariables, vars, this.getRootElement()) || {};
    const filtered: { [index: string]: string } = {};
    Object.keys(computed).forEach(key => {
      const value = computed[key];
      if (typeof value === "string" && value.trim() === "") return;
      filtered[key] = value;
    });
    this.baseThemeVariables = filtered;
  }

  public getType(): string {
    return "creatortheme";
  }

  public get cssVariables(): { [index: string]: string } {
    return this.toJSON()["cssVariables"] || {};
  }

  private cssVariableChangedHandler() {
    if (this.themeName === CreatorThemeModel.defaultThemeName && this.colorPalette === CreatorThemeModel.defaultColorPalette && Object.keys(this.cssVariables).length === 0) {
      this.loadTheme({ themeName: CreatorThemeModel.defaultThemeName, colorPalette: CreatorThemeModel.defaultColorPalette });
    }
  }
  private setThemeCssVariablesChanges(name: string, value: any) {
    if (this.themeCssVariablesChanges[name] !== value) {
      this.cssVariableChangedHandler();
      this.themeCssVariablesChanges[name] = value;
      this.onThemePropertyChanged.fire(this, { name, value });
    }
  }
  private resetColorThemeCssVariablesChanges(): void {
    Object.keys(this.themeCssVariablesChanges).forEach(key => {
      if (key.indexOf("--sjs2-") === 0) {
        delete this.themeCssVariablesChanges[key];
      }
    });
  }
  // the default themes define no explicit variables (values come from the CSS
  // fallbacks), so loading one does not overwrite variable values set by the
  // previously selected theme - reset them to the property defaults instead
  private resetColorThemeCssVariables(): void {
    this.blockThemeChangedNotifications += 1;
    try {
      this.iteratePropertiesHash((hash, key) => {
        if (key.indexOf("--sjs2-") === 0) {
          this.setPropertyValue(key, undefined);
        }
      });
    } finally {
      this.blockThemeChangedNotifications -= 1;
    }
  }
  private onThemePropertyValueChangedCallback(name: string, oldValue: any, newValue: any, sender: Base, arrayChanges: ArrayChanges) {
    if (this.blockThemeChangedNotifications > 0) return;

    if (name === "themeName") {
      this.resetColorThemeCssVariablesChanges();
      this.resetColorThemeCssVariables();
      this.loadTheme({ themeName: newValue, colorPalette: this.colorPalette });
      this.onThemeSelected.fire(this, { theme: this.toJSON() });
    } else if (name === "colorPalette") {
      this.resetColorThemeCssVariablesChanges();
      this.resetColorThemeCssVariables();
      this.loadTheme({ themeName: this.themeName, colorPalette: newValue });
      this.onThemeSelected.fire(this, { theme: this.toJSON() });
    } else if (name === CreatorThemeModel.varColorProjectBrand) {
      this.setThemeCssVariablesChanges(name, newValue);
      this.setPropertyValue(name, newValue);
      this.updateBackgroundColor(newValue, oldValue);
    } else if (name === CreatorThemeModel.varColorUtilitySurface) {
      this.setThemeCssVariablesChanges(name, newValue);
      this.setPropertyValue(name, newValue);
    } else if (name.indexOf("--") === 0) {
      this.setThemeCssVariablesChanges(name, newValue);
    } else if (name == "fontScale" || name == "scale") {
      this.scalePropertiesChanged(name, newValue);
    }
  }
  private scalePropertiesChanged(propertyName: string, newValue: number) {
    if (propertyName == "fontScale") {
      this.scalingProperties(CreatorThemeModel.varBaseUnitFontSize, newValue);
      this.scalingProperties(CreatorThemeModel.varBaseUnitLineHeight, newValue);
    } else if (propertyName == "scale") {
      this.scalingProperties(CreatorThemeModel.varBaseUnitSize, newValue);
      this.scalingProperties(CreatorThemeModel.varBaseUnitSpacing, newValue);
      this.scalingProperties(CreatorThemeModel.varBaseUnitRadius, newValue);
    }
  }
  private scalingProperties(cssName: string, newValue: number) {
    const baseUnit = this.unitDictionary[cssName];
    this.setThemeCssVariablesChanges(cssName, (newValue * baseUnit / 100) + "px");
  }
  private scaleValue(cssName: string, scale: number) {
    const baseUnit = this.unitDictionary[cssName];
    this[cssName] = (scale * baseUnit / 100) + "px";
  }
  private scaleCssVariables() {
    this.blockThemeChangedNotifications += 1;
    try {
      if (this.fontScale !== undefined) {
        this.scaleValue(CreatorThemeModel.varBaseUnitFontSize, this.fontScale);
        this.scaleValue(CreatorThemeModel.varBaseUnitLineHeight, this.fontScale);
      }
      if (this.scale !== undefined) {
        this.scaleValue(CreatorThemeModel.varBaseUnitSize, this.scale);
        this.scaleValue(CreatorThemeModel.varBaseUnitSpacing, this.scale);
        this.scaleValue(CreatorThemeModel.varBaseUnitRadius, this.scale);
      }
    } finally {
      this.blockThemeChangedNotifications -= 1;
    }
  }
  private getScaleFactor(cssName: string): number {
    return !!this[cssName] ? roundTo2Decimals(parseFloat(this[cssName]) * 100 / this.unitDictionary[cssName]) : undefined;
  }
  private updateScaleProperties() {
    this.blockThemeChangedNotifications += 1;
    try {
      this.fontScale = this.getScaleFactor(CreatorThemeModel.varBaseUnitFontSize);
      this.scale = this.getScaleFactor(CreatorThemeModel.varBaseUnitSize);
    } finally {
      this.blockThemeChangedNotifications -= 1;
    }
  }

  private blockThemeChangedNotifications = 0;
  public loadTheme(theme: ICreatorTheme = {}) {
    this.blockThemeChangedNotifications += 1;
    try {
      this.initializeBaseThemeVariables();
      const requestedColorPalette = theme.colorPalette || (theme.isLight === false ? "dark" : undefined);
      const baseTheme = (theme.themeName ? this.getThemeFromCreatorThemes(theme.themeName, requestedColorPalette || this.colorPalette || CreatorThemeModel.defaultColorPalette) : undefined) || {};
      const resolvedColorPalette = requestedColorPalette || baseTheme.colorPalette || this.colorPalette || CreatorThemeModel.defaultColorPalette;
      const resolvedThemeName = theme.themeName || baseTheme.themeName || CreatorThemeModel.defaultThemeName;

      this.themeName = resolvedThemeName;
      this.colorPalette = resolvedColorPalette;

      const effectiveThemeCssVariables = {};
      assign(effectiveThemeCssVariables, baseTheme.cssVariables || {});
      assign(effectiveThemeCssVariables, theme.cssVariables || {}, this.themeCssVariablesChanges);

      const effectiveTheme: ICreatorTheme = {};
      assign(effectiveTheme, baseTheme, theme, { cssVariables: effectiveThemeCssVariables, themeName: this.themeName, colorPalette: this.colorPalette });

      this.fromJSON(effectiveTheme);
    } finally {
      this.blockThemeChangedNotifications -= 1;
    }
  }

  public setTheme(theme: ICreatorTheme) {
    this.themeCssVariablesChanges = {};

    try {
      this.blockThemeChangedNotifications += 1;
      this.iteratePropertiesHash((hash, key) => {
        this.setPropertyValue(key, undefined);
      });
    } finally {
      this.blockThemeChangedNotifications -= 1;
    }

    this.loadTheme(theme);
    this.onThemeSelected.fire(this, { theme: this.toJSON() });
  }

  fromJSON(json: ICreatorTheme, options?: ILoadFromJSONOptions): void {
    if (!json) return;

    this.blockThemeChangedNotifications += 1;
    try {
      const _json = {};
      assign(_json, json);
      delete _json["cssVariables"];
      super.fromJSON(_json, options);
      if (json.colorPalette !== undefined) {
        this.colorPalette = json.colorPalette;
      } else if (json.isLight !== undefined) {
        this.colorPalette = json.isLight ? "light" : "dark";
      }

      if (json.cssVariables) {
        const rawCssVariables = { ...json.cssVariables };
        const resolvedCssVariables = { ...this.baseThemeVariables, ...rawCssVariables };
        super.fromJSON(resolvedCssVariables, options);
        this.initialCssVariables = rawCssVariables;

        this.updateScaleProperties();
      }
    } finally {
      this.blockThemeChangedNotifications -= 1;
    }
  }

  toJSON(options?: ISaveToJSONOptions): ICreatorTheme {
    this.scaleCssVariables();

    const result = super.toJSON(options);
    if (result.colorPalette === CreatorThemeModel.defaultColorPalette) {
      delete result.colorPalette;
    }
    const cssVariables = {};
    assign(cssVariables, this.initialCssVariables, this.themeCssVariablesChanges);
    result.cssVariables = cssVariables;
    Object.keys(result).forEach(key => {
      if (key.indexOf("--") == 0) {
        delete result[key];
      }
    });
    if (Object.keys(result.cssVariables).length === 0) {
      delete result.cssVariables;
    }
    return result;
  }
}

Serializer.addClass(
  "creatortheme",
  [
    {
      type: "dropdown",
      name: "themeName",
      choices: getPredefinedCreatorThemeChoices(),
    },
    {
      type: "buttongroup",
      name: "colorPalette",
      displayName: "",
      choices: [
        { value: "light" },
        { value: "dark" }
      ],
      enableIf: (obj: CreatorThemeModel): boolean => {
        return !obj || obj.hasVariations(true);
      },
    },
    {
      type: "string",
      visible: false,
      name: "iconSet",
      default: "v2"
    }
  ],
  (json) => { return new CreatorThemeModel(); }
);

Serializer.addProperties("creatortheme", [
  {
    type: "color",
    name: CreatorThemeModel.varColorUtilitySurface,
    default: "#EDF9F7",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.titleLocation = "hidden";
        // editor.title = getLocString("creatortheme.--sjs-special-background");
      }
    }
  }, {
    type: "color",
    name: CreatorThemeModel.varColorProjectBrand,
    default: "#19B394",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.titleLocation = "left";
        editor.title = getLocString("creatortheme.--sjs-primary-background-500");
      }
    },
  }, {
    name: CreatorThemeModel.varBaseUnitFontSize,
    default: "8px",
    visible: false,
  }, {
    name: CreatorThemeModel.varBaseUnitLineHeight,
    default: "8px",
    visible: false,
  }, {
    type: "spinedit",
    name: "fontScale",
    isSerializable: false,
    default: 100,
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.unit = "%";
        editor.min = 50;
        editor.max = 200;
        editor.step = 5;
        editor.title = getLocString("creatortheme.fontScale");
        editor.titleLocation = "left";
        editor.descriptionLocation = "hidden";
        editor.changeValueOnPressing = false;
      }
    }
  }, {
    name: CreatorThemeModel.varBaseUnitSpacing,
    default: "8px",
    visible: false,
  }, {
    name: CreatorThemeModel.varBaseUnitSize,
    default: "8px",
    visible: false,
  }, {
    name: CreatorThemeModel.varBaseUnitRadius,
    default: "8px",
    visible: false,
  }, {
    type: "spinedit",
    name: "scale",
    isSerializable: false,
    default: 100,
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.unit = "%";
        editor.min = 25;
        editor.max = 200;
        editor.step = 5;
        editor.title = getLocString("creatortheme.userInterfaceBaseUnit");
        editor.titleLocation = "left";
        editor.descriptionLocation = "hidden";
        editor.changeValueOnPressing = false;
      }
    }
  },
  { name: "--sjs-primary-background-400", visible: false },
  { name: "--sjs-primary-background-10", visible: false },
  { name: "--sjs-secondary-background-25", visible: false },
  { name: "--sjs-secondary-background-10", visible: false },
  { name: "--sjs-special-haze", visible: false },
  { name: "--sjs-special-glow", visible: false },
]);
