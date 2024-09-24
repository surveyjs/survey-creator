import { ISurveyPropertiesDefinition, ISurveyPropertyGridDefinition } from "../../question-editor/definition";

const themeModelProperties: ISurveyPropertiesDefinition = {
  "theme": {
    properties: [
      { name: "header", tab: "header" },

      { name: "--sjs-general-backcolor-dim", tab: "background" },
      { name: "backgroundImage", tab: "background" },
      { name: "backgroundImageFit", tab: "background" },
      { name: "backgroundImageAttachment", tab: "background" },
      { name: "backgroundOpacity", tab: "background" },

      { name: "primaryColor", tab: "appearancecolor" },
      { name: "panelBackgroundTransparency", tab: "appearancecolor" },
      { name: "questionBackgroundTransparency", tab: "appearancecolor" },

      { name: "--sjs-primary-backcolor", tab: "appearanceprimarycolor" },
      { name: "--sjs-primary-backcolor-dark", tab: "appearanceprimarycolor" },
      { name: "--sjs-primary-backcolor-light", tab: "appearanceprimarycolor" },
      { name: "--sjs-primary-forecolor", tab: "appearanceprimarycolor" },
      { name: "--sjs-primary-forecolor-light", tab: "appearanceprimarycolor" },
      { name: "--sjs-special-red", tab: "appearanceprimarycolor" },
      { name: "--sjs-special-red-light", tab: "appearanceprimarycolor" },

      { name: "--sjs-font-family", tab: "appearancefont" },
      { name: "fontSize", tab: "appearancefont" },

      { name: "scale", tab: "appearanceother" },
      { name: "cornerRadius", tab: "appearanceother" },
      { name: "advancedMode", tab: "appearanceadvancedmode" },

      { name: "pageTitle", tab: "appearancepage" },
      { name: "pageDescription", tab: "appearancepage" },

      { name: "questionPanel", tab: "appearancequestion" },
      { name: "--sjs-shadow-small", tab: "appearancequestion" },
      { name: "questionTitle", tab: "appearancequestion" },
      { name: "questionDescription", tab: "appearancequestion" },

      { name: "editorPanel", tab: "appearanceinput" },
      { name: "--sjs-shadow-inner", tab: "appearanceinput" },
      { name: "editorFont", tab: "appearanceinput" },

      { name: "--sjs-border-default", tab: "appearancelines" },
      { name: "--sjs-border-light", tab: "appearancelines" },

    ],
    tabs: [
      { name: "header", index: 100 },
      { name: "background", index: 200 },
      { name: "appearance", index: 300 },
      { name: "appearancecolor", parent: "appearance", index: 100 },
      { name: "appearancefont", parent: "appearance", index: 200 },
      { name: "appearanceother", parent: "appearance", index: 300 },
      { name: "appearanceadvancedmode", parent: "appearance", index: 350 },
      { name: "appearanceprimarycolor", parent: "appearance", index: 400 },
      { name: "appearancepage", parent: "appearance", index: 500 },
      { name: "appearancequestion", parent: "appearance", index: 600 },
      { name: "appearanceinput", parent: "appearance", index: 700 },
      { name: "appearancelines", parent: "appearance", index: 800 },
    ]
  },
  "header@header": {
    properties: [
      { name: "headerView" },
      { name: "logoPosition" },
      { name: "surveyTitle" },
      { name: "surveyDescription" },
      { name: "height", tab: "layout" },
      { name: "mobileHeight", tab: "layout" },
      { name: "inheritWidthFrom", tab: "layout" },
      { name: "textAreaWidth", tab: "layout" },

      { name: "backgroundColorSwitch", tab: "background" },
      { name: "backgroundColor", tab: "background" },
      { name: "backgroundImage", tab: "background" },
      { name: "backgroundImageFit", tab: "background" },
      { name: "backgroundImageOpacity", tab: "background" },
      { name: "overlapEnabled", tab: "background" },

      { name: "headerTitle", tab: "header" },
      { name: "headerDescription", tab: "header" },

      { name: "logoPositionX", tab: "positions" },
      { name: "logoPositionY", tab: "positions" },
      { name: "titlePositionX", tab: "positions" },
      { name: "titlePositionY", tab: "positions" },
      { name: "descriptionPositionX", tab: "positions" },
      { name: "descriptionPositionY", tab: "positions" },
    ],
    tabs: [
      { name: "settings" },
      { name: "layout", parent: "settings", index: 100 },
      { name: "background", parent: "settings", index: 200 },
      { name: "header", parent: "settings", index: 300 },
      { name: "positions", parent: "settings", index: 400 },
    ]
  },
};

export const themeModelPropertyGridDefinition: ISurveyPropertyGridDefinition = {
  autoGenerateProperties: true,
  classes: themeModelProperties
};

export class ThemeModelEditorDefinition {
  public static definition: ISurveyPropertiesDefinition = themeModelProperties;
}