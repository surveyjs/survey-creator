import { Base, IHeader, IJsonPropertyInfo, ILoadFromJSONOptions, ISaveToJSONOptions, ISurvey, ITheme, Serializer, HorizontalAlignment, VerticalAlignment } from "survey-core";
import { settings } from "../../creator-settings";
import { getLocString } from "../../editorLocalization";
import { fontsettingsFromCssVariable, fontsettingsToCssVariable, onSerializeFontSettingsValue } from "./theme-custom-questions/font-settings";
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

    // this["surveyTitle"] = fontsettingsFromCssVariable(this.getPropertyByName("surveyTitle"), this.themeCssVariablesChanges);
    // this["surveyDescription"] = fontsettingsFromCssVariable(this.getPropertyByName("surveyDescription"), this.themeCssVariablesChanges);
    // this["headerTitle"] = fontsettingsFromCssVariable(this.getPropertyByName("headerTitle"), this.themeCssVariablesChanges);
    // this["headerDescription"] = fontsettingsFromCssVariable(this.getPropertyByName("headerDescription"), this.themeCssVariablesChanges);

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
      // this._setPGEditorPropertyValue(panel.getQuestionByName("backgroundColorSwitch"), "value", this.getBackgroundColorSwitchByValue(backgroundColorValue));
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
        if (property.type === "fontsettings") {
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

  // private setCoverColorsFromThemeVariables(question: Question, cssVariable: string) {
  //   if (!!question && !!cssVariable && cssVariable !== "transparent") {
  //     question.value = cssVariable;
  //   }
  // }

  // private updateHeaderViewContainerEditors(themeCssVariables: { [index: string]: string }) {
  //   this.updateVisibilityOfPropertyGridGroups();

  //   const headerViewContainerQuestion = this.themeEditorSurvey.getQuestionByName("headerViewContainer");
  //   if (!headerViewContainerQuestion) return;

  //   const panel = headerViewContainerQuestion.panels[0];
  //   panel.getQuestionByName("backgroundColor").choices = this.getPredefinedColorsItemValues();

  //   if (!!this.survey) {
  //     this.setCoverPropertiesFromSurvey(panel, themeCssVariables);
  //     this._setPGEditorPropertyValue(panel.getQuestionByName("surveyTitle"), "readOnly", !this.survey.hasTitle);
  //     fontsettingsFromCssVariable(panel.getQuestionByName("surveyTitle"), themeCssVariables);
  //     this._setPGEditorPropertyValue(panel.getQuestionByName("surveyDescription"), "readOnly", !this.survey.hasDescription);
  //     fontsettingsFromCssVariable(panel.getQuestionByName("surveyDescription"), themeCssVariables);

  //     fontsettingsFromCssVariable(panel.getElementByName("surveyTitle"), this.themeCssVariablesChanges);
  //     fontsettingsFromCssVariable(panel.getElementByName("surveyDescription"), this.themeCssVariablesChanges);
  //     fontsettingsFromCssVariable(panel.getElementByName("headerTitle"), this.themeCssVariablesChanges);
  //     fontsettingsFromCssVariable(panel.getElementByName("headerDescription"), this.themeCssVariablesChanges);
  //   }

  //   if (!!this.currentTheme.header) {
  //     Object.keys(this.currentTheme.header).forEach(key => {
  //       const question = panel.getQuestionByName(key);
  //       if (key === "backgroundImageOpacity") {
  //         this._setPGEditorPropertyValue(question, "value", this.currentTheme.header[key] * 100);
  //       } else {
  //         this._setPGEditorPropertyValue(question, "value", this.currentTheme.header[key]);
  //       }
  //     });
  //     this.setCoverColorsFromThemeVariables(panel.getQuestionByName("backgroundColor"), themeCssVariables["--sjs-header-backcolor"]);

  //     const backgroundColorValue = themeCssVariables["--sjs-header-backcolor"];
  //     if (!!backgroundColorValue) {
  //       this._setPGEditorPropertyValue(panel.getQuestionByName("backgroundColorSwitch"), "value", this.getBackgroundColorSwitchByValue(backgroundColorValue));
  //     }
  //   }
  // }

  // private headerViewContainerPropertiesChanged(options: ValueChangedEvent) {
  //   const headerSettings = options.value[0];
  //   this.survey.headerView = headerSettings["headerView"];
  //   this.surveyProvider.survey.headerView = headerSettings["headerView"];
  //   if (headerSettings["headerView"] === "basic") {
  //     this.survey.logoPosition = headerSettings["logoPosition"];
  //     this.surveyProvider.survey.logoPosition = headerSettings["logoPosition"];
  //     fontsettingsToCssVariable(options.question.panels[0].getElementByName("surveyTitle"), this.themeCssVariablesChanges);
  //     fontsettingsToCssVariable(options.question.panels[0].getElementByName("surveyDescription"), this.themeCssVariablesChanges);
  //   } else {
  //     this.currentTheme.header = this.getCoverJson(headerSettings);
  //     this.setHeaderBackgroundColorCssVariable(headerSettings);
  //     fontsettingsToCssVariable(options.question.panels[0].getElementByName("headerTitle"), this.themeCssVariablesChanges);
  //     fontsettingsToCssVariable(options.question.panels[0].getElementByName("headerDescription"), this.themeCssVariablesChanges);
  //   }
  //   this.currentTheme.headerView = headerSettings["headerView"];
  //   this.themeModified(options); // => this.onThemePropertyChanged.fire(this, { name, value });
  // }

  // private getCoverJson(headerSettings: any): any {
  //   const result = {};
  //   Serializer.getProperties("cover").map(pr => pr.name)
  //     .filter(key => headerSettings[key] !== undefined && headerSettings[key] !== null)
  //     .forEach(key => {
  //       result[key] = headerSettings[key];
  //     });

  //   result["backgroundImageOpacity"] = headerSettings["backgroundImageOpacity"] / 100;
  //   return result;
  // }

  public getType(): string {
    return "headersettings";
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

function getHorizontalAlignment(questionName: string, title: string, defaultValue: string): IJsonPropertyInfo {
  return <IJsonPropertyInfo>{
    type: "buttongroup",
    name: questionName,
    displayName: title,
    visibleIf: (obj) => obj.headerView === "advanced",
    choices: [
      { value: "left", text: getLocString("theme.horizontalAlignmentLeft") },
      { value: "center", text: getLocString("theme.horizontalAlignmentCenter") },
      { value: "right", text: getLocString("theme.horizontalAlignmentRight") },
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
      { value: "top", text: getLocString("theme.verticalAlignmentTop") },
      { value: "middle", text: getLocString("theme.verticalAlignmentMiddle") },
      { value: "bottom", text: getLocString("theme.verticalAlignmentBottom") },
    ],
    default: defaultValue,
  };
}

Serializer.addClass(
  "headersettings",
  [
    {
      type: "buttongroup",
      name: "headerView",
      displayName: getLocString("theme.headerView"),
      default: "basic",
      choices: [
        { value: "basic", text: getLocString("theme.headerViewBasic") },
        { value: "advanced", text: getLocString("theme.headerViewAdvanced") }
      ]
    },
    {
      type: "buttongroup",
      name: "logoPosition",
      displayName: getLocString("theme.logoPosition"),
      visibleIf: (obj) => obj.headerView === "basic",
      default: "left",
      choices: [
        { value: "left", text: getLocString("theme.horizontalAlignmentLeft") },
        { value: "right", text: getLocString("theme.horizontalAlignmentRight") }
      ],
    },
    {
      type: "spinedit",
      name: "height",
      displayName: getLocString("p.height"),
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
      displayName: getLocString("theme.coverInheritWidthFrom"),
      visibleIf: (obj) => obj.headerView === "advanced",
      default: "container",
      choices: [
        { value: "survey", text: getLocString("theme.coverInheritWidthFromSurvey") },
        { value: "container", text: getLocString("theme.coverInheritWidthFromContainer") }
      ],
    },
    {
      type: "spinedit",
      name: "textAreaWidth",
      displayName: getLocString("theme.coverTextAreaWidth"),
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
      displayName: getLocString("theme.coverBackgroundColorSwitch"),
      visibleIf: (obj) => obj.headerView === "advanced",
      isSerializable: false,
      default: "accentColor",
      choices: [
        { value: "none", text: getLocString("theme.coverBackgroundColorNone") },
        { value: "accentColor", text: getLocString("theme.coverBackgroundColorAccentColor") },
        { value: "custom", text: getLocString("theme.coverBackgroundColorCustom") },
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
          editor.descriptionLocation = "hidden";
        }
      }
    },
    {
      name: "backgroundImage:file",
      displayName: getLocString("theme.backgroundImage"),
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
        { value: "cover", text: getLocString("theme.backgroundImageFitCover") },
        { value: "fill", text: getLocString("theme.backgroundImageFitFill") },
        { value: "contain", text: getLocString("theme.backgroundImageFitContain") },
        { value: "tile", text: getLocString("theme.backgroundImageFitTile") },
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
      displayName: getLocString("theme.backgroundOpacity"),
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
          editor.descriptionLocation = "hidden";
        }
      }
    },

    getHorizontalAlignment("logoPositionX", getLocString("theme.logoPosition"), "right"),
    getVerticalAlignment("logoPositionY", "top"),
    getHorizontalAlignment("titlePositionX", getLocString("theme.coverTitlePosition"), "left"),
    getVerticalAlignment("titlePositionY", "bottom"),
    getHorizontalAlignment("descriptionPositionX", getLocString("theme.coverDescriptionPosition"), "left"),
    getVerticalAlignment("descriptionPositionY", "bottom"),
  ]);

Serializer.addProperties("headersettings", [
  {
    type: "fontsettings",
    name: "surveyTitle",
    displayName: getLocString("theme.surveyTitle"),
    visibleIf: (obj) => obj.headerView === "basic",
    default: getDefaultTitleSetting(),
    onSerializeValue: (obj: HeaderModel) => {
      return onSerializeFontSettingsValue(obj, "surveyTitle");
    }
  },
  {
    type: "fontsettings",
    name: "surveyDescription",
    displayName: getLocString("theme.surveyDescription"),
    visibleIf: (obj) => obj.headerView === "basic",
    default: getDefaultDescriptionSetting(),
    onSerializeValue: (obj: HeaderModel) => {
      return onSerializeFontSettingsValue(obj, "surveyDescription");
    }
  },
  {
    type: "fontsettings",
    name: "headerTitle",
    displayName: getLocString("theme.surveyTitle"),
    default: getDefaultTitleSetting(),
    visibleIf: (obj) => obj.headerView === "advanced",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.descriptionLocation = "hidden";
        editor.allowEmptyColorValue = true;
      }
    },
    onSerializeValue: (obj: HeaderModel) => {
      return onSerializeFontSettingsValue(obj, "headerTitle");
    }
  },
  {
    type: "fontsettings",
    name: "headerDescription",
    displayName: getLocString("theme.surveyDescription"),
    default: getDefaultDescriptionSetting(true),
    visibleIf: (obj) => obj.headerView === "advanced",
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.descriptionLocation = "hidden";
        editor.allowEmptyColorValue = true;
      }
    },
    onSerializeValue: (obj: HeaderModel) => {
      return onSerializeFontSettingsValue(obj, "headerDescription");
    }
  },
]);