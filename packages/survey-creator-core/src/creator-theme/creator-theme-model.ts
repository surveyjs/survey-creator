import { Serializer, Base, property, ArrayChanges, EventBase, ILoadFromJSONOptions, ISaveToJSONOptions } from "survey-core";
import { getLocString } from "../editorLocalization";
import { assign, roundTo2Decimals, ColorCalculator, colorsAreEqual } from "../utils/utils";
import { CreatorThemes, ICreatorTheme, PredefinedCreatorThemes } from "./creator-themes";
import * as Themes from "survey-creator-core/themes";
import { PredefinedBackgroundColors, PredefinedColors } from "../components/tabs/themes";

Object.keys(Themes || {}).forEach(themeName => {
  const theme: ICreatorTheme = Themes[themeName];
  if (PredefinedCreatorThemes.indexOf(theme.themeName) === -1) {
    PredefinedCreatorThemes.push(theme.themeName);
  }
  CreatorThemes[theme.themeName] = theme;
});

export class CreatorThemeModel extends Base implements ICreatorTheme {
  static defautlThemeName = "sc2020";

  initialCssVariables: { [index: string]: string } = {};
  themeCssVariablesChanges?: { [index: string]: string } = {};
  private primaryColorCalculator = new ColorCalculator();
  private secondaryColorCalculator = new ColorCalculator();
  private backgroundColorCalculator = new ColorCalculator();

  unitDictionary: { [index: string]: number } = {
    "--ctr-surface-base-unit": 8,
    "--ctr-font-unit": 8,
    "--ctr-line-height-unit": 8,
    "--ctr-size-unit": 8,
    "--ctr-spacing-unit": 8,
    "--ctr-corner-radius-unit": 8,
    "--ctr-stroke-unit": 1,
    "--lbr-font-unit": 8,
    "--lbr-line-height-unit": 8,
    "--lbr-size-unit": 8,
    "--lbr-spacing-unit": 8,
    "--lbr-corner-radius-unit": 8,
    "--lbr-stroke-unit": 1,
  }

  @property() themeName: string = CreatorThemeModel.defautlThemeName;
  @property() scale: number;
  @property() fontScale: number;
  @property() surfaceScale: number;
  @property() isLight: boolean = true;

  public onThemeSelected = new EventBase<CreatorThemeModel, { theme: ICreatorTheme }>();
  public onThemePropertyChanged = new EventBase<CreatorThemeModel, { name: string, value: any }>();

  private initializeColorCalculators(cssVariables: { [index: string]: string }) {
    this.initializeColorCalculator(this.primaryColorCalculator, cssVariables, "--sjs-primary-background-500", "--sjs-primary-background-10", "--sjs-primary-background-400");
    this.initializeColorCalculator(this.secondaryColorCalculator, cssVariables, "--sjs-secondary-background-500", "--sjs-secondary-background-10", "--sjs-secondary-background-25");
    this.initializeColorCalculator(this.backgroundColorCalculator, cssVariables, "--sjs-special-background", "--sjs-special-haze", "--sjs-special-glow");
  }
  private initializeColorCalculator(calculator: ColorCalculator, cssVariables: { [index: string]: string }, baseColorName: string, lightColorName: string, darkColorName: string) {
    if (!cssVariables[baseColorName] ||
      !cssVariables[lightColorName] ||
      !cssVariables[darkColorName]) {
      return;
    }

    calculator.initialize(
      cssVariables[baseColorName],
      cssVariables[lightColorName],
      cssVariables[darkColorName]
    );
  }

  private updateColorPropertiesDependentOnBaseColor(calculator: ColorCalculator, value: string, baseColorName: string, lightColorName: string, darkColorName: string) {
    this.setPropertyValue(baseColorName, value);
    this.setThemeCssVariablesChanges(baseColorName, value);
    calculator.calculateColors(value);
    this.setPropertyValue(lightColorName, calculator.colorSettings.newColorLight);
    this.setPropertyValue(darkColorName, calculator.colorSettings.newColorDark);
    this.setThemeCssVariablesChanges(lightColorName, calculator.colorSettings.newColorLight);
    this.setThemeCssVariablesChanges(darkColorName, calculator.colorSettings.newColorDark);
  }
  private isSpecialBackgroundFromCurrentTheme() {
    const currentTheme = CreatorThemes[this.themeName];
    return colorsAreEqual(currentTheme && currentTheme.cssVariables && currentTheme.cssVariables["--sjs-special-background"], this["--sjs-special-background"]);
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
    const canCalculateSpecialBackgroundColor = this.isSpecialBackgroundFromCurrentTheme() || colorsAreEqual(this.findAppropriateSpecialBackground(primaryColorOldValue), this["--sjs-special-background"]);
    if (canCalculateSpecialBackgroundColor) {
      const newSpecialBackgroundColor = this.findAppropriateSpecialBackground(primaryColorNewValue);
      this["--sjs-special-background"] = newSpecialBackgroundColor || PredefinedBackgroundColors["light"]["gray"];
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

  public getType(): string {
    return "creatortheme";
  }

  public get cssVariables(): { [index: string]: string } {
    return this.toJSON()["cssVariables"] || {};
  }

  private cssVariableChangedHandler() {
    if (this.themeName === CreatorThemeModel.defautlThemeName && Object.keys(this.cssVariables).length === 0) {
      this.loadTheme({ themeName: CreatorThemeModel.defautlThemeName });
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
      if (key.indexOf("--sjs-") === 0) {
        delete this.themeCssVariablesChanges[key];
      }
    });
  }
  private onThemePropertyValueChangedCallback(name: string, oldValue: any, newValue: any, sender: Base, arrayChanges: ArrayChanges) {
    if (this.blockThemeChangedNotifications > 0) return;

    if (name === "themeName") {
      this.resetColorThemeCssVariablesChanges();
      this.loadTheme({ themeName: newValue });
      this.onThemeSelected.fire(this, { theme: this.toJSON() });
    } else if (name === "--sjs-primary-background-500") {
      this.updateColorPropertiesDependentOnBaseColor(this.primaryColorCalculator, newValue, "--sjs-primary-background-500", "--sjs-primary-background-10", "--sjs-primary-background-400");
      this.updateBackgroundColor(newValue, oldValue);
    } else if (name === "--sjs-secondary-background-500") {
      this.updateColorPropertiesDependentOnBaseColor(this.secondaryColorCalculator, newValue, "--sjs-secondary-background-500", "--sjs-secondary-background-10", "--sjs-secondary-background-25");
    } else if (name === "--sjs-special-background") {
      this.updateColorPropertiesDependentOnBaseColor(this.backgroundColorCalculator, newValue, "--sjs-special-background", "--sjs-special-haze", "--sjs-special-glow");
    } else if (name.indexOf("--") === 0) {
      this.setThemeCssVariablesChanges(name, newValue);
    } else if (name == "fontScale" || name == "scale" || name == "surfaceScale") {
      this.scalePropertiesChanged(name, newValue);
    }
  }
  private scalePropertiesChanged(propertyName: string, newValue: number) {
    if (propertyName == "fontScale") {
      this.scalingProperties("--ctr-font-unit", newValue);
      this.scalingProperties("--ctr-line-height-unit", newValue);
    } else if (propertyName == "scale") {
      this.scalingProperties("--ctr-size-unit", newValue);
      this.scalingProperties("--ctr-spacing-unit", newValue);
      this.scalingProperties("--ctr-corner-radius-unit", newValue);

    } else if (propertyName == "surfaceScale") {
      this.scalingProperties("--ctr-surface-base-unit", newValue);
      this.scalingProperties("--lbr-font-unit", newValue);
      this.scalingProperties("--lbr-line-height-unit", newValue);
      this.scalingProperties("--lbr-size-unit", newValue);
      this.scalingProperties("--lbr-spacing-unit", newValue);
      this.scalingProperties("--lbr-corner-radius-unit", newValue);
      this.scalingProperties("--lbr-stroke-unit", newValue);
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
    if (this.fontScale !== undefined) {
      this.scaleValue("--ctr-font-unit", this.fontScale);
      this.scaleValue("--ctr-line-height-unit", this.fontScale);
    }
    if (this.scale !== undefined) {
      this.scaleValue("--ctr-size-unit", this.scale);
      this.scaleValue("--ctr-spacing-unit", this.scale);
      this.scaleValue("--ctr-corner-radius-unit", this.scale);
    }
    if (this.surfaceScale !== undefined) {
      this.scaleValue("--ctr-surface-base-unit", this.surfaceScale);
      this.scaleValue("--lbr-font-unit", this.surfaceScale);
      this.scaleValue("--lbr-line-height-unit", this.surfaceScale);
      this.scaleValue("--lbr-size-unit", this.surfaceScale);
      this.scaleValue("--lbr-spacing-unit", this.surfaceScale);
      this.scaleValue("--lbr-corner-radius-unit", this.surfaceScale);
      this.scaleValue("--lbr-stroke-unit", this.surfaceScale);
    }
  }
  private getScaleFactor(cssName: string): number {
    return !!this[cssName] ? roundTo2Decimals(parseFloat(this[cssName]) * 100 / this.unitDictionary[cssName]) : undefined;
  }
  private updateScaleProperties() {
    this.blockThemeChangedNotifications += 1;
    try {
      this.fontScale = this.getScaleFactor("--ctr-font-unit");
      this.scale = this.getScaleFactor("--ctr-size-unit");
      this.surfaceScale = this.getScaleFactor("--ctr-surface-base-unit");
    } finally {
      this.blockThemeChangedNotifications -= 1;
    }
  }

  private blockThemeChangedNotifications = 0;
  public loadTheme(theme: ICreatorTheme = {}) {
    this.blockThemeChangedNotifications += 1;
    try {
      const baseTheme = CreatorThemes[theme.themeName] || {};
      this.themeName = theme.themeName || baseTheme.themeName || CreatorThemeModel.defautlThemeName;

      const effectiveThemeCssVariables = {};
      assign(effectiveThemeCssVariables, baseTheme.cssVariables || {});
      assign(effectiveThemeCssVariables, theme.cssVariables || {}, this.themeCssVariablesChanges);

      const effectiveTheme: ICreatorTheme = {};
      assign(effectiveTheme, baseTheme, theme, { cssVariables: effectiveThemeCssVariables, themeName: this.themeName });

      this.initializeColorCalculators(effectiveTheme.cssVariables);
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

    const _json = {};
    assign(_json, json);
    delete _json["cssVariables"];
    super.fromJSON(_json, options);

    if (json.cssVariables) {
      super.fromJSON(json.cssVariables, options);
      this.initialCssVariables = {};
      assign(this.initialCssVariables, json.cssVariables);

      this.updateScaleProperties();
    }
  }

  toJSON(options?: ISaveToJSONOptions): ICreatorTheme {
    this.scaleCssVariables();

    const result = super.toJSON(options);
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
      choices: PredefinedCreatorThemes.map(theme => ({ value: theme, text: getLocString("creatortheme.names." + theme) })),
    },
    {
      type: "string",
      visible: false,
      name: "iconsSet",
      default: "v1"
    }
  ],
  (json) => { return new CreatorThemeModel(); }
);

Serializer.addProperties("creatortheme", [
  {
    type: "color",
    name: "--sjs-special-background",
    default: "#F3F3F3FF",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.title = getLocString("creatortheme.--sjs-special-background");
      }
    }
  }, {
    type: "color",
    name: "--sjs-primary-background-500",
    default: "#19B394FF",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.titleLocation = "left";
        editor.title = getLocString("creatortheme.--sjs-primary-background-500");
      }
    },
  }, {
    type: "color",
    name: "--sjs-secondary-background-500",
    default: "#FF9814FF",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.titleLocation = "left";
        editor.title = getLocString("creatortheme.--sjs-secondary-background-500");
      }
    },
  }, {
    name: "--ctr-font-unit",
    default: "8px",
    visible: false,
  }, {
    name: "--ctr-line-height-unit",
    default: "8px",
    visible: false,
  }, {
    type: "spinedit",
    name: "fontScale",
    isSerializable: false,
    default: 100,
    enableIf: (obj: CreatorThemeModel): boolean => {
      return !obj || obj.themeName !== CreatorThemeModel.defautlThemeName;
    },
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.unit = "%";
        editor.min = 0;
        editor.step = 5;
        editor.title = getLocString("creatortheme.fontScale");
        editor.titleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    name: "--ctr-spacing-unit",
    default: "8px",
    visible: false,
  }, {
    name: "--ctr-size-unit",
    default: "8px",
    visible: false,
  }, {
    name: "--ctr-corner-radius-unit",
    default: "8px",
    visible: false,
  }, {
    name: "--lbr-font-unit",
    default: "8px",
    visible: false,
  }, {
    name: "--lbr-line-height-unit",
    default: "8px",
    visible: false,
  }, {
    name: "--lbr-size-unit",
    default: "8px",
    visible: false,
  }, {
    name: "--lbr-spacing-unit",
    default: "8px",
    visible: false,
  }, {
    name: "--lbr-corner-radius-unit",
    default: "8px",
    visible: false,
  }, {
    name: "--lbr-size-unit",
    default: "8px",
    visible: false,
  }, {
    type: "spinedit",
    name: "scale",
    isSerializable: false,
    default: 100,
    enableIf: (obj: CreatorThemeModel): boolean => {
      return !obj || obj.themeName !== CreatorThemeModel.defautlThemeName;
    },
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.unit = "%";
        editor.min = 0;
        editor.step = 5;
        editor.title = getLocString("creatortheme.userInterfaceBaseUnit");
        editor.titleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    name: "--ctr-surface-base-unit",
    default: "8px",
    visible: false,
  }, {
    type: "spinedit",
    name: "surfaceScale",
    isSerializable: false,
    default: 100,
    enableIf: (obj: CreatorThemeModel): boolean => {
      return !obj || obj.themeName !== CreatorThemeModel.defautlThemeName;
    },
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.unit = "%";
        editor.min = 0;
        editor.step = 5;
        editor.title = getLocString("creatortheme.surfaceScale");
        editor.titleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    name: "isLight:boolean",
    visible: false,
    isSerializable: false,
  },
  { name: "--sjs-primary-background-400", visible: false },
  { name: "--sjs-primary-background-10", visible: false },
  { name: "--sjs-secondary-background-25", visible: false },
  { name: "--sjs-secondary-background-10", visible: false },
  { name: "--sjs-special-haze", visible: false },
  { name: "--sjs-special-glow", visible: false },
]);