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
  public static DefaultTheme = {
    themeName: "sc2020",
    cssVariables: {
      "--sjs-special-background": "#F3F3F3FF",
      "--sjs-primary-background-500": "#19B394FF",
      "--sjs-primary-background-10": "#19B3941A",
      "--sjs-primary-background-400": "#14A48BFF",
      "--sjs-secondary-background-500": "#FF9814FF",
      "--sjs-secondary-background-25": "#FF981440",
      "--sjs-secondary-background-10": "#FF98141A",
      "--sjs-base-unit": "8px"
    }
  };
  cssVariables?: { [index: string]: string } = {};

  @property() themeName: string;
  @property() scale: number;

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

  private setThemeCssVariablesChanges(name: string, value: any) {
    this.cssVariables[name] = value;
    this.onThemePropertyChanged.fire(this, { name, value });
  }
  private onThemePropertyValueChangedCallback(name: string, oldValue: any, newValue: any, sender: Base, arrayChanges: ArrayChanges) {
    if (this.blockThemeChangedNotifications > 0) return;

    if (name === "themeName") {
      this.loadTheme({ themeName: newValue });
      this.onThemeSelected.fire(this, { theme: this.toJSON() });
    } else if (name.indexOf("--") === 0) {
      this.setThemeCssVariablesChanges(name, newValue);
    } else if (name == "scale") {
      this.setThemeCssVariablesChanges("--sjs-base-unit", (newValue * 8 / 100) + "px");
    }
  }

  private blockThemeChangedNotifications = 0;
  public loadTheme(theme: ICreatorTheme = {}) {
    this.blockThemeChangedNotifications += 1;
    try {
      const baseTheme = CreatorThemes[theme.themeName] || CreatorThemeModel.DefaultTheme;
      this.themeName = baseTheme.themeName;

      const effectiveThemeCssVariables = {};
      assign(effectiveThemeCssVariables, CreatorThemeModel.DefaultTheme.cssVariables || {}, baseTheme.cssVariables || {});
      assign(effectiveThemeCssVariables, theme.cssVariables || {}, this.cssVariables);

      const effectiveTheme: ICreatorTheme = {};
      assign(effectiveTheme, theme, { cssVariables: effectiveThemeCssVariables, themeName: this.themeName });

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

      this.scale = !!this["--sjs-base-unit"] ? roundTo2Decimals(parseFloat(this["--sjs-base-unit"]) * 100 / 8) : undefined;
    }
  }

  toJSON(options?: ISaveToJSONOptions): ICreatorTheme {
    if (this.scale !== undefined) {
      this["--sjs-base-unit"] = (this.scale * 8 / 100) + "px";
    }

    const result = super.toJSON(options);
    const cssVariables = {};
    assign(cssVariables, CreatorThemes[this.themeName]?.cssVariables);
    Object.keys(result).forEach(key => {
      if (key.indexOf("--") == 0) {
        cssVariables[key] = result[key];
        delete result[key];
      }
    });
    result.cssVariables = cssVariables;
    return result;
  }
}

Serializer.addClass(
  "creatortheme",
  [
    {
      type: "dropdown",
      name: "themeName",
      choices: PredefinedCreatorThemes.map(theme => ({ value: theme, text: getLocString("theme.creatorNames." + theme) })),
    }
  ],
  (json) => { return new CreatorThemeModel(); }
);

Serializer.addProperties("creatortheme", [
  {
    type: "color",
    name: "--sjs-special-background",
    displayName: "Surface background"
  }, {
    type: "color",
    name: "--sjs-primary-background-500",
    displayName: "Accent colors"
  }, {
    type: "color",
    name: "--sjs-secondary-background-500",
    displayName: ""
  }, {
    type: "spinedit",
    name: "scale",
    displayName: "Scaling",
    isSerializable: false,
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.unit = "%";
        editor.min = 0;
        editor.step = 5;
      }
    }
  }, {
    type: "spinedit",
    name: "--sjs-base-unit",
    visible: false,
  },
]);