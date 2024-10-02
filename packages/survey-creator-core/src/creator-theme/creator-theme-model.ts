import { Serializer, Base, property, ArrayChanges, EventBase, ILoadFromJSONOptions, ISaveToJSONOptions } from "survey-core";
import { getLocString } from "../editorLocalization";
import { assign, roundTo2Decimals } from "../utils/utils";
import { CreatorPalettes, CreatorThemes, ICreatorTheme } from "./creator-themes";

export * from "./themes/theme-20";
export * from "./themes/theme-24";
export * from "./themes/palette-base";
export * from "./themes/palette-light";
export * from "./themes/palette-dark";
export * from "./themes/palette-contrast";

export class CreatorThemeModel extends Base implements ICreatorTheme {
  cssVariables?: { [index: string]: string } = {};

  @property() themeName: string;
  @property() palette: string;
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
    if (name === "themeName" || name === "palette") {
      this.onThemeSelected.fire(this, { theme: this.toJSON() });
    } else if (name.indexOf("--") === 0) {
      this.setThemeCssVariablesChanges(name, newValue);
    } else if (name == "scale") {
      this.setThemeCssVariablesChanges("--sjs-base-unit", (newValue * 8 / 100) + "px");
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
    const currentPalette = this.themeName === "20" ? "base" : this.palette;
    assign(cssVariables, CreatorThemes[this.themeName].cssVariables, CreatorPalettes[currentPalette].cssVariables);
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
      choices: [
        { value: "20", text: getLocString("theme.names.20") },
        { value: "24", text: getLocString("theme.names.24") }
      ],
      default: "20"
    }, {
      type: "buttongroup",
      name: "palette",
      displayName: "",
      choices: [
        { value: "light" },
        { value: "dark" },
        { value: "contrast" },
      ],
      enableIf: (obj: CreatorThemeModel): boolean => {
        return !obj || obj.themeName === "24";
      },
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
    }
  ],
  (json) => { return new CreatorThemeModel(); }
);

Serializer.addProperties("creatortheme", [
  {
    type: "color",
    name: "--ctr-surface-background-color",
    displayName: "Surface background"
  }, {
    type: "color",
    name: "--sjs-primary-background-500",
    displayName: "Accent colors"
  }, {
    type: "color",
    name: "--sjs-secondary-background-500",
    displayName: ""
  },
]);