import { Base, IHeader, IJsonPropertyInfo, ILoadFromJSONOptions, ISaveToJSONOptions, ISurvey, ITheme, Serializer, HorizontalAlignment, VerticalAlignment } from "survey-core";
import { settings } from "../../creator-settings";
import { fontsettingsFromCssVariable, fontsettingsToCssVariable } from "./theme-custom-questions/font-settings";
import { assign } from "../../utils/utils";

export class HeaderModel extends Base implements IHeader {
  height: number;
  inheritWidthFrom: "survey" | "container";
  textAreaWidth: number;
  overlapEnabled: boolean;
  backgroundImage: string;
  backgroundImageOpacity: number;
  backgroundImageFit: "contain" | "cover" | "fill" | "tile";
  logoPositionX: HorizontalAlignment;
  logoPositionY: VerticalAlignment;
  titlePositionX: HorizontalAlignment;
  titlePositionY: VerticalAlignment;
  descriptionPositionX: HorizontalAlignment;
  descriptionPositionY: VerticalAlignment;
  public owner: ITheme;

  public getSurvey(live: boolean = false): ISurvey {
    return this.owner as any;
  }

  fromJSON(json: any, options?: ILoadFromJSONOptions): void {
    super.fromJSON(json, options);
    if (!!json["backgroundImageOpacity"]) this.backgroundImageOpacity = json["backgroundImageOpacity"] * 100;
  }

  public setCssVariables(cssVariables?: { [index: string]: string }) {
    if (cssVariables) {
      this["surveyTitle"] = fontsettingsFromCssVariable(this.getPropertyByName("surveyTitle"), cssVariables);
      this["surveyDescription"] = fontsettingsFromCssVariable(this.getPropertyByName("surveyDescription"), cssVariables);
      this["headerTitle"] = fontsettingsFromCssVariable(this.getPropertyByName("headerTitle"), cssVariables);
      this["headerDescription"] = fontsettingsFromCssVariable(this.getPropertyByName("headerDescription"), cssVariables);
    }

    const backgroundColorValue = cssVariables["--sjs-header-backcolor"];
    if (!!backgroundColorValue) {
      this["backgroundColorSwitch"] = this.getBackgroundColorSwitchByValue(backgroundColorValue);
      this["backgroundColor"] = this["backgroundColorSwitch"] === "custom" ? backgroundColorValue : undefined;
    }
  }

  toJSON(options?: ISaveToJSONOptions) {
    const result = super.toJSON(options);
    delete result.type;
    delete result.logoPosition;
    delete result.headerView;

    if (this.backgroundImageOpacity !== 100) {
      result.backgroundImageOpacity = this.backgroundImageOpacity / 100;
    }

    const cssVariables = {};
    Object.keys(result).forEach(key => {
      if (typeof result[key] === "object") {
        const property = this.getPropertyByName(key);
        if (property.type === "font") {
          fontsettingsToCssVariable(result[key], property, cssVariables);
          delete result[key];
        }

      }
    });
    this.setHeaderBackgroundColorCssVariable(cssVariables);
    result.cssVariables = cssVariables;

    delete result.backgroundColorSwitch;
    delete result.backgroundColor;
    return result;
  }

  public saveToThemeJSON(json: ITheme, options?: ISaveToJSONOptions) {
    const result = this.toJSON(options);
    assign(json.cssVariables, result.cssVariables);
    delete result.cssVariables;
    if (Object.keys(result).length > 0) {
      json.header = result;
    }
    json.headerView = this["headerView"];
  }

  private setHeaderBackgroundColorCssVariable(cssVariables: any) {
    if (this["backgroundColorSwitch"] === "none") {
      cssVariables["--sjs-header-backcolor"] = "transparent";
    } else if (this["backgroundColorSwitch"] === "custom") {
      cssVariables["--sjs-header-backcolor"] = this["backgroundColor"] ?? "transparent";
    }
  }

  private getBackgroundColorSwitchByValue(backgroundColor: string) {
    if (!backgroundColor) return "accentColor";
    if (backgroundColor === "transparent") return "none";
    return "custom";
  }

  public getType(): string {
    return "header";
  }
}

function getDefaultTitleSetting() {
  const result = { family: settings.themeEditor.defaultFontFamily, weight: "700", size: 32 };
  return result;
}

function getDefaultDescriptionSetting(isAdvanced?: boolean) {
  const result = { family: settings.themeEditor.defaultFontFamily, weight: "400", size: 16 };
  if (isAdvanced) {
    result["weight"] = "600";
  }
  return result;
}

function getHorizontalAlignment(questionName: string, defaultValue: string): IJsonPropertyInfo {
  return <IJsonPropertyInfo>{
    type: "buttongroup",
    name: questionName,
    visibleIf: (obj) => obj.headerView === "advanced",
    choices: [
      { value: "left" },
      { value: "center" },
      { value: "right", },
    ],
    default: defaultValue,
  };
}
function getVerticalAlignment(questionName: string, defaultValue: string): IJsonPropertyInfo {
  return <IJsonPropertyInfo>{
    type: "buttongroup",
    name: questionName,
    displayName: "",
    visibleIf: (obj) => obj.headerView === "advanced",
    choices: [
      { value: "top" },
      { value: "middle" },
      { value: "bottom" },
    ],
    default: defaultValue,
  };
}

Serializer.addClass(
  "header",
  [
    {
      type: "buttongroup",
      name: "headerView",
      default: "basic",
      choices: [
        { value: "basic" },
        { value: "advanced" }
      ]
    },
    {
      type: "buttongroup",
      name: "logoPosition",
      visibleIf: (obj) => obj.headerView === "basic",
      default: "left",
      choices: [
        { value: "left" },
        { value: "right" }
      ],
    },
    {
      type: "spinedit",
      name: "height",
      visibleIf: (obj) => obj.headerView === "advanced",
      default: 256,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "px";
          editor.min = 0;
        }
      }
    },
    {
      type: "buttongroup",
      name: "inheritWidthFrom",
      visibleIf: (obj) => obj.headerView === "advanced",
      default: "container",
      choices: [
        { value: "survey" },
        { value: "container" }
      ],
    },
    {
      type: "spinedit",
      name: "textAreaWidth",
      visibleIf: (obj) => obj.headerView === "advanced",
      default: 512,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "px";
          editor.min = 0;
        }
      }
    },
    {
      type: "buttongroup",
      name: "backgroundColorSwitch",
      visibleIf: (obj) => obj.headerView === "advanced",
      isSerializable: false,
      default: "accentColor",
      choices: [
        { value: "none" },
        { value: "accentColor" },
        { value: "custom" },
      ],
    },
    {
      type: "color",
      name: "backgroundColor",
      displayName: "",
      visibleIf: (obj) => obj.headerView === "advanced",
      isSerializable: false,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.allowEmptyValue = true;
          editor.enableIf = "{composite.backgroundColorSwitch} = 'custom'";
        }
      }
    },
    {
      name: "backgroundImage:file",
      visibleIf: (obj) => obj.headerView === "advanced",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.storeDataAsText = false;
          editor.acceptedTypes = "image/*";
        }
      }
    },
    {
      type: "buttongroup",
      name: "backgroundImageFit",
      displayName: "",
      choices: [
        { value: "cover" },
        { value: "fill" },
        { value: "contain" },
        { value: "tile" },
      ],
      default: "cover",
      visibleIf: (obj) => obj.headerView === "advanced",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.enableIf = "{composite.backgroundImage} notempty";
        }
      }
    },
    {
      type: "spinedit",
      name: "backgroundImageOpacity",
      visibleIf: (obj) => obj.headerView === "advanced",
      default: 100,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
          editor.titleLocation = "left";
          editor.enableIf = "{composite.backgroundImage} notempty";
        }
      }
    },
    {
      type: "boolean",
      name: "overlapEnabled",
      displayName: "",
      visibleIf: (obj) => obj.headerView === "advanced",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.renderAs = "checkbox";
        }
      }
    },

    getHorizontalAlignment("logoPositionX", "right"),
    getVerticalAlignment("logoPositionY", "top"),
    getHorizontalAlignment("titlePositionX", "left"),
    getVerticalAlignment("titlePositionY", "bottom"),
    getHorizontalAlignment("descriptionPositionX", "left"),
    getVerticalAlignment("descriptionPositionY", "bottom"),
  ]);

Serializer.addProperties("header", [
  {
    type: "font",
    name: "surveyTitle",
    visibleIf: (obj) => obj.headerView === "basic",
    default: getDefaultTitleSetting(),
  },
  {
    type: "font",
    name: "surveyDescription",
    visibleIf: (obj) => obj.headerView === "basic",
    default: getDefaultDescriptionSetting(),
  },
  {
    type: "font",
    name: "headerTitle",
    default: getDefaultTitleSetting(),
    visibleIf: (obj) => obj.headerView === "advanced",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.allowEmptyColorValue = true;
      }
    },
  },
  {
    type: "font",
    name: "headerDescription",
    default: getDefaultDescriptionSetting(true),
    visibleIf: (obj) => obj.headerView === "advanced",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.allowEmptyColorValue = true;
      }
    },
  },
]);