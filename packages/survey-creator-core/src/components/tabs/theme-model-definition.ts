import { ISurveyPropertiesDefinition, ISurveyPropertyGridDefinition } from "../../question-editor/definition";

const themeModelProperties: ISurveyPropertiesDefinition = {
  "themebuilder": {
    properties: [
      { name: "header", tab: "header" },
      { name: "generalPrimaryColor", tab: "appearancecolor" },
      { name: "panelBackgroundTransparency", tab: "appearancecolor" },
      { name: "questionBackgroundTransparency", tab: "appearancecolor" },
      { name: "--sjs-primary-backcolor", tab: "appearanceprimarycolor" },
      { name: "--sjs-primary-backcolor-dark", tab: "appearanceprimarycolor" },
      { name: "--sjs-primary-backcolor-light", tab: "appearanceprimarycolor" },
      { name: "--sjs-primary-forecolor", tab: "appearanceprimarycolor" },
      { name: "--sjs-primary-forecolor-light", tab: "appearanceprimarycolor" },

      { name: "--sjs-font-family", tab: "appearancefont" },
      { name: "commonFontSize", tab: "appearancefont" },

      { name: "commonScale", tab: "appearanceother" },
      { name: "cornerRadius", tab: "appearanceother" },

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
      { name: "appearancelines", parent: "appearance" },
      { name: "appearanceinput", parent: "appearance" },
      { name: "appearancequestion", parent: "appearance" },
      { name: "appearancepage", parent: "appearance" },
      { name: "appearanceother", parent: "appearance" },
      { name: "appearancefont", parent: "appearance" },
      { name: "appearancecolor", parent: "appearance" },
      { name: "appearanceprimarycolor", parent: "appearance" },
    ]
  },
  "headersettings@header": {
    properties: [
      { name: "headerView" },
      { name: "logoPosition" },
      { name: "surveyTitle" },
      { name: "surveyDescription" },
      { name: "height", tab: "layout" },
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
      { name: "positions", parent: "settings" },
      { name: "header", parent: "settings" },
      { name: "background", parent: "settings" },
      { name: "layout", parent: "settings" },
    ]
  },
};

export const themeModelPropertyGridDefinition: ISurveyPropertyGridDefinition = {
  autoGenerateProperties: true,
  classes: themeModelProperties
};