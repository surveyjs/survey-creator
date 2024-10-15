import { Serializer, Base, property, ArrayChanges, EventBase, ILoadFromJSONOptions, ISaveToJSONOptions } from "survey-core";
import { getLocString } from "../editorLocalization";
import { assign, roundTo2Decimals } from "../utils/utils";
import { CreatorThemes, ICreatorTheme, PredefinedCreatorThemes } from "./creator-themes";
import * as Themes from "survey-creator-core/themes";

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

  @property() themeName: string = CreatorThemeModel.defautlThemeName;
  @property() scale: number;
  @property() fontSize: number;
  @property() surfaceBaseUnit: number;
  @property() isLight: boolean = true;

  public onThemeSelected = new EventBase<CreatorThemeModel, { theme: ICreatorTheme }>();
  public onThemePropertyChanged = new EventBase<CreatorThemeModel, { name: string, value: any }>();

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

  private setThemeCssVariablesChanges(name: string, value: any) {
    if (this.themeCssVariablesChanges[name] !== value) {
      this.themeCssVariablesChanges[name] = value;
      this.onThemePropertyChanged.fire(this, { name, value });
    }
  }
  private onThemePropertyValueChangedCallback(name: string, oldValue: any, newValue: any, sender: Base, arrayChanges: ArrayChanges) {
    if (this.blockThemeChangedNotifications > 0) return;

    if (name === "themeName") {
      this.loadTheme({ themeName: newValue });
      this.onThemeSelected.fire(this, { theme: this.toJSON() });
    } else if (name.indexOf("--") === 0) {
      this.setThemeCssVariablesChanges(name, newValue);
    } else if (name == "fontSize") {
      this.setThemeCssVariablesChanges("--sjs-font-unit", (newValue * 8 / 100) + "px");
    } else if (name == "scale") {
      this.setThemeCssVariablesChanges("--sjs-base-unit", (newValue * 8 / 100) + "px");
    } else if (name == "surfaceBaseUnit") {
      this.setThemeCssVariablesChanges("--sjs-surface-base-unit", (newValue * 8 / 100) + "px");
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

      // this.initializeColorCalculator(effectiveTheme.cssVariables);
      this.fromJSON(effectiveTheme);
    } finally {
      this.blockThemeChangedNotifications -= 1;
    }
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

      this.fontSize = !!this["--sjs-font-unit"] ? roundTo2Decimals(parseFloat(this["--sjs-font-unit"]) * 100 / 8) : undefined;
      this.scale = !!this["--sjs-base-unit"] ? roundTo2Decimals(parseFloat(this["--sjs-base-unit"]) * 100 / 8) : undefined;
      this.surfaceBaseUnit = !!this["--sjs-surface-base-unit"] ? roundTo2Decimals(parseFloat(this["--sjs-surface-base-unit"]) * 100 / 8) : undefined;
    }
  }

  toJSON(options?: ISaveToJSONOptions): ICreatorTheme {
    if (this.fontSize !== undefined) {
      this["--sjs-font-unit"] = (this.fontSize * 8 / 100) + "px";
    }
    if (this.scale !== undefined) {
      this["--sjs-base-unit"] = (this.scale * 8 / 100) + "px";
    }
    if (this.surfaceBaseUnit !== undefined) {
      this["--sjs-surface-base-unit"] = (this.surfaceBaseUnit * 8 / 100) + "px";
    }

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
        editor.title = getLocString("creatortheme.--sjs-primary-background-500");
      }
    },
  }, {
    type: "color",
    name: "--sjs-secondary-background-500",
    default: "#FF9814FF",
    displayName: ""
  }, {
    type: "spinedit",
    name: "--sjs-font-unit",
    default: "8px",
    visible: false,
  }, {
    type: "spinedit",
    name: "fontSize",
    isSerializable: false,
    default: 100,
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.unit = "%";
        editor.min = 0;
        editor.step = 5;
        editor.title = getLocString("creatortheme.fontSize");
        editor.titleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    type: "spinedit",
    name: "--sjs-base-unit",
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
        editor.min = 0;
        editor.step = 5;
        editor.title = getLocString("creatortheme.userInterfaceBaseUnit");
        editor.titleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    type: "spinedit",
    name: "--sjs-surface-base-unit",
    default: "8px",
    visible: false,
  }, {
    type: "spinedit",
    name: "surfaceBaseUnit",
    isSerializable: false,
    default: 100,
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.unit = "%";
        editor.min = 0;
        editor.step = 5;
        editor.title = getLocString("creatortheme.surfaceBaseUnit");
        editor.titleLocation = "left";
        editor.descriptionLocation = "hidden";
      }
    }
  }, {
    name: "isLight:boolean",
    visible: false,
    isSerializable: false,
  },
]);