import { ISurveyPropertiesDefinition, ISurveyPropertyGridDefinition } from "../question-editor/definition";

const creatorThemeModelProperties: ISurveyPropertiesDefinition = {
  "creatortheme": {
    properties: [
      { name: "themeName", index: 1 },
      { name: "--sjs-special-background", index: 10 },
      { name: "--sjs-primary-background-500", index: 10, tab: "accentColors" },
      { name: "--sjs-secondary-background-500", index: 20, tab: "accentColors" },
      { name: "fontScale", index: 40, tab: "scaling" },
      { name: "scale", index: 50, tab: "scaling" },
      { name: "surfaceScale", index: 60, tab: "scaling" },
    ],
    tabs: [
      { name: "accentColors", "parent": "general", index: 20 },
      { name: "scaling", "parent": "general", index: 30 }
    ]
  },
};

export const creatorThemeModelPropertyGridDefinition: ISurveyPropertyGridDefinition = {
  autoGenerateProperties: true,
  classes: creatorThemeModelProperties
};

export class creatorThemeModelEditorDefinition {
  public static definition: ISurveyPropertiesDefinition = creatorThemeModelProperties;
}