import { Serializer, Base, property, ArrayChanges, EventBase, ILoadFromJSONOptions, ISaveToJSONOptions } from "survey-core";
import { getLocString } from "../editorLocalization";
import { assign, roundTo2Decimals } from "../utils/utils";
import { colorsAreEqual } from "../utils/color-utils";
import { CreatorThemes, ICreatorTheme, PredefinedCreatorThemes } from "./creator-themes";
import { PredefinedBackgroundColors, PredefinedColors } from "../components/tabs/themes";

export class CreatorThemeModel extends Base implements ICreatorTheme {
  static legacyThemeName = "sc2020";
  static defaultThemeName = "default-light";

  static varBaseUnitFontSize = "--sjs2-base-unit-font-size";
  static varBaseUnitLineHeight = "--sjs2-base-unit-line-height";
  static varBaseUnitSize = "--sjs2-base-unit-size";
  static varBaseUnitSpacing = "--sjs2-base-unit-spacing";
  static varBaseUnitRadius = "--sjs2-base-unit-radius";
  static varBaseUnitBorderWidth = "--sjs2-base-unit-border-width";

  static varColorProjectBrand = "--sjs2-color-project-brand-600";
  static varColorProjectAccent = "--sjs2-color-project-accent-600";
  static varColorUtilitySurface = "--sjs2-color-utility-surface";

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
  @property() scale: number;
  @property() fontScale: number;
  @property() isLight: boolean = true;

  public onThemeSelected = new EventBase<CreatorThemeModel, { theme: ICreatorTheme }>();
  public onThemePropertyChanged = new EventBase<CreatorThemeModel, { name: string, value: any }>();

  private isSpecialBackgroundFromCurrentTheme() {
    const currentTheme = CreatorThemes[this.themeName];
    return colorsAreEqual(currentTheme && currentTheme.cssVariables && currentTheme.cssVariables[CreatorThemeModel.varColorUtilitySurface], this[CreatorThemeModel.varColorUtilitySurface]);
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

  public getType(): string {
    return "creatortheme";
  }

  public get cssVariables(): { [index: string]: string } {
    return this.toJSON()["cssVariables"] || {};
  }

  private cssVariableChangedHandler() {
    if (this.themeName === CreatorThemeModel.defaultThemeName && Object.keys(this.cssVariables).length === 0) {
      this.loadTheme({ themeName: CreatorThemeModel.defaultThemeName });
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
  private onThemePropertyValueChangedCallback(name: string, oldValue: any, newValue: any, sender: Base, arrayChanges: ArrayChanges) {
    if (this.blockThemeChangedNotifications > 0) return;

    if (name === "themeName") {
      this.resetColorThemeCssVariablesChanges();
      this.loadTheme({ themeName: newValue });
      this.onThemeSelected.fire(this, { theme: this.toJSON() });
    } else if (name === CreatorThemeModel.varColorProjectBrand) {
      this.setThemeCssVariablesChanges(name, newValue);
      this.setPropertyValue(name, newValue);
      this.updateBackgroundColor(newValue, oldValue);
    } else if (name === CreatorThemeModel.varColorProjectAccent || name === CreatorThemeModel.varColorUtilitySurface) {
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
    if (this.fontScale !== undefined) {
      this.scaleValue(CreatorThemeModel.varBaseUnitFontSize, this.fontScale);
      this.scaleValue(CreatorThemeModel.varBaseUnitLineHeight, this.fontScale);
    }
    if (this.scale !== undefined) {
      this.scaleValue(CreatorThemeModel.varBaseUnitSize, this.scale);
      this.scaleValue(CreatorThemeModel.varBaseUnitSpacing, this.scale);
      this.scaleValue(CreatorThemeModel.varBaseUnitRadius, this.scale);
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
      const baseTheme = CreatorThemes[theme.themeName] || {};
      this.themeName = theme.themeName || baseTheme.themeName || CreatorThemeModel.defaultThemeName;

      const effectiveThemeCssVariables = {};
      assign(effectiveThemeCssVariables, baseTheme.cssVariables || {});
      assign(effectiveThemeCssVariables, theme.cssVariables || {}, this.themeCssVariablesChanges);

      const effectiveTheme: ICreatorTheme = {};
      assign(effectiveTheme, baseTheme, theme, { cssVariables: effectiveThemeCssVariables, themeName: this.themeName });

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
    this.isLight = json.isLight !== undefined ? json.isLight : true;

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
    if (!this.isLight) {
      result.isLight = false;
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
      choices: PredefinedCreatorThemes.map(theme => ({ value: theme, text: getLocString("creatortheme.names." + theme) })),
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
    enableIf: (obj: CreatorThemeModel): boolean => {
      return !obj || obj.themeName !== CreatorThemeModel.legacyThemeName;
    },
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
    type: "color",
    name: CreatorThemeModel.varColorProjectAccent,
    default: "#19B394",
    displayName: "",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.titleLocation = "left";
        editor.title = getLocString("creatortheme.--sjs-secondary-background-500");
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
    enableIf: (obj: CreatorThemeModel): boolean => {
      return !obj || obj.themeName !== CreatorThemeModel.legacyThemeName;
    },
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
      return !obj || obj.themeName !== CreatorThemeModel.legacyThemeName;
    },
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
