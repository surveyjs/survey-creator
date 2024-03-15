import { Base, ComponentCollection, IJsonPropertyInfo, JsonObjectProperty, PanelModel, Question, Serializer } from "survey-core";
import { ISurveyCreatorOptions, settings } from "../../creator-settings";
import { PropertyGridEditor, PropertyGridEditorCollection, PropertyJSONGenerator } from "../../property-grid";
import { ISurveyPropertyGridDefinition } from "../../question-editor/definition";
import { editorLocalization, getLocString } from "../../editorLocalization";

export class HeaderModel extends Base {
  // @property() themePalette: string;

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
      // enableIf: "{panel.backgroundColorSwitch} = 'custom'",
      visibleIf: (obj) => obj.headerView === "advanced",
      // enableIf: (obj) => { debugger; return obj.backgroundColorSwitch === "custom"; },
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.allowEmptyValue = true;
          // editor.enableIf = "{backgroundColorSwitch} = 'custom'";
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
      choices: [
        { value: "cover", text: getLocString("theme.backgroundImageFitCover") },
        { value: "fill", text: getLocString("theme.backgroundImageFitFill") },
        { value: "contain", text: getLocString("theme.backgroundImageFitContain") },
        { value: "tile", text: getLocString("theme.backgroundImageFitTile") },
      ],
      visibleIf: (obj) => obj.headerView === "advanced",
      enableIf: (obj) => !!obj.backgroundImage,
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.titleLocation = "hidden";
          // editor.enableIf = "{backgroundImage} notempty";
        }
      }
    },
    {
      type: "spinedit",
      name: "backgroundImageOpacity",
      // enableIf: "{panel.backgroundImage} notempty",
      // enableIf: (obj) => { debugger; return !!obj.backgroundImage; },
      visibleIf: (obj) => obj.headerView === "advanced",
      displayName: getLocString("theme.backgroundOpacity"),
      onPropertyEditorUpdate: function (obj: any, editor: any) {
        if (!!editor) {
          editor.unit = "%";
          editor.min = 0;
          editor.max = 100;
          editor.step = 5;
          editor.titleLocation = "left";
          // editor.enableIf = "{backgroundImage} notempty";
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
    new PropertyJSONGenerator(headersettings, options, obj, prop, propGridDefinition).setupObjPanel(panel, true);
  }
  onValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void {

  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorQuestionHeaderSettings());

