import { Base, ComponentCollection, IJsonPropertyInfo, JsonObjectProperty, PanelModel, Question, Serializer } from "survey-core";
import { ISurveyCreatorOptions, settings } from "../../creator-settings";
import { PropertyGridEditor, PropertyGridEditorCollection, PropertyJSONGenerator } from "../../property-grid";
import { ISurveyPropertyGridDefinition } from "../../question-editor/definition";
import { editorLocalization, getLocString } from "../../editorLocalization";
import { themeModelPropertyGridDefinition } from "./theme-model-definition";

export class HeaderModel extends Base {
  // @property() themePalette: string;

  // private setCoverPropertiesFromSurvey(panel, themeCssVariables: { [index: string]: string }) {
  //   this._setPGEditorPropertyValue(panel.getQuestionByName("headerTitle"), "readOnly", !this.survey.hasTitle);
  //   this._setPGEditorPropertyValue(panel.getQuestionByName("headerDescription"), "readOnly", !this.survey.hasDescription);

  //   this._setPGEditorPropertyValue(panel.getQuestionByName("headerView"), "value", this.survey.headerView);
  //   this._setPGEditorPropertyValue(panel.getQuestionByName("logoPosition"), "value", this.survey.logoPosition);

  //   this._setPGEditorPropertyValue(panel.getQuestionByName("logoPositionX"), "readOnly", !this.survey.logo);
  //   this._setPGEditorPropertyValue(panel.getQuestionByName("logoPositionY"), "readOnly", !this.survey.logo);
  //   this._setPGEditorPropertyValue(panel.getQuestionByName("logoPosition"), "readOnly", !this.survey.logo);

  //   this._setPGEditorPropertyValue(panel.getQuestionByName("titlePositionX"), "readOnly", !this.survey.title);
  //   this._setPGEditorPropertyValue(panel.getQuestionByName("titlePositionY"), "readOnly", !this.survey.title);

  //   this._setPGEditorPropertyValue(panel.getQuestionByName("descriptionPositionX"), "readOnly", !this.survey.description);
  //   this._setPGEditorPropertyValue(panel.getQuestionByName("descriptionPositionY"), "readOnly", !this.survey.description);
  // }
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

  // private setHeaderBackgroundColorCssVariable(headerSettings: any) {
  //   let headerBackgroundColorValue = undefined;
  //   if (headerSettings["backgroundColorSwitch"] === "none") {
  //     headerBackgroundColorValue = "transparent";
  //   } else if (headerSettings["backgroundColorSwitch"] === "custom") {
  //     headerBackgroundColorValue = headerSettings.backgroundColor ?? "transparent";
  //   }
  //   this.themeCssVariablesChanges["--sjs-header-backcolor"] = headerBackgroundColorValue;
  // }

  public getType(): string {
    return "headersettings";
  }

}

function getDefaultTitleSetting() {
  const result = { family: settings.theme.fontFamily, weight: "700", size: 32 };
  return result;
}

function getDefaultDescriptionSetting(isAdvanced?: boolean) {
  const result = { family: settings.theme.fontFamily, weight: "400", size: 16 };
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
    visibleIf: (obj) => obj.headerView === "advanced",
    choices: [
      { value: "top", text: getLocString("theme.verticalAlignmentTop") },
      { value: "middle", text: getLocString("theme.verticalAlignmentMiddle") },
      { value: "bottom", text: getLocString("theme.verticalAlignmentBottom") },
    ],
    default: defaultValue,
    onPropertyEditorUpdate: function (obj: any, editor: any) {
      if (!!editor) {
        editor.titleLocation = "hidden";
      }
    }
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
      choices: [
        { value: "left", text: getLocString("theme.horizontalAlignmentLeft") },
        { value: "right", text: getLocString("theme.horizontalAlignmentRight") }
      ],
    },
    {
      type: "fontsettings",
      name: "surveyTitle",
      displayName: getLocString("theme.surveyTitle"),
      visibleIf: (obj) => obj.headerView === "basic",
      default: getDefaultTitleSetting(),
    },
    {
      type: "fontsettings",
      name: "surveyDescription",
      displayName: getLocString("theme.surveyDescription"),
      visibleIf: (obj) => obj.headerView === "basic",
      default: getDefaultDescriptionSetting()
    },
    {
      type: "spinedit",
      name: "height",
      displayName: getLocString("p.height"),
      visibleIf: (obj) => obj.headerView === "advanced",
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
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.allowEmptyValue = true;
          editor.enableIf = "{composite.backgroundColorSwitch} = 'custom'";
          editor.titleLocation = "hidden";
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
          editor.placeholder = "Browse...";
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
      visibleIf: (obj) => obj.headerView === "advanced",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.titleLocation = "hidden";
          editor.enableIf = "{composite.backgroundImage} notempty";
        }
      }
    },
    {
      type: "spinedit",
      name: "backgroundImageOpacity",
      visibleIf: (obj) => obj.headerView === "advanced",
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
      displayName: getLocString("theme.coverOverlapEnabled"),
      visibleIf: (obj) => obj.headerView === "advanced",
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.renderAs = "checkbox";
          editor.titleLocation = "hidden";
          editor.descriptionLocation = "hidden";
        }
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
      }
    },
    getHorizontalAlignment("logoPositionX", getLocString("theme.logoPosition"), "right"),
    getVerticalAlignment("logoPositionY", "top"),
    getHorizontalAlignment("titlePositionX", getLocString("theme.coverTitlePosition"), "left"),
    getVerticalAlignment("titlePositionY", "bottom"),
    getHorizontalAlignment("descriptionPositionX", getLocString("theme.coverDescriptionPosition"), "left"),
    getVerticalAlignment("descriptionPositionY", "bottom"),
  ]);

var json = {
  name: "propertygrid_headersettings",
  showInToolbox: false,
  internal: true,
  createElements: function (panel) {
    //tell ComponentCollection that it is composite question
  }
};

if (!ComponentCollection.Instance.getCustomQuestionByName(json.name)) {
  ComponentCollection.Instance.add(json as any);
}

export class PropertyGridEditorQuestionHeaderSettings extends PropertyGridEditor {

  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "headersettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return {
      type: "propertygrid_headersettings",
      titleLocation: "hidden"
    };
  }
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty,
    options: ISurveyCreatorOptions, propGridDefinition?: ISurveyPropertyGridDefinition): void {
    const panel = <PanelModel>question["contentPanel"];
    const headersettings = obj[prop.name];
    const propertyGenerator = new PropertyJSONGenerator(headersettings, options, obj, prop, themeModelPropertyGridDefinition);
    propertyGenerator.setupObjPanel(panel, true);

    let settingsPanel;
    var questions = panel.elements;

    for (var i = 0; i < questions.length; i++) {
      if (questions[i].name == "settings") {
        settingsPanel = questions[i];
      }
    }
    settingsPanel.state = undefined;
    settingsPanel.title = "";

    settingsPanel.elements.forEach(el => {
      el.title = "";
      el.state = undefined;
    });
  }
  onValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void {

  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionHeaderSettings());

