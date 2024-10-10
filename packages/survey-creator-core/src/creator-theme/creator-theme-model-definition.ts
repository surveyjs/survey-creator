import { ISurveyPropertiesDefinition, ISurveyPropertyGridDefinition } from "../question-editor/definition";

const creatorThemeModelProperties: ISurveyPropertiesDefinition = {
  "creatorTheme": {
    properties: [
      { name: "themeName", index: 1 },
      { name: "--sjs-special-background", index: 10 },
      { name: "--sjs-primary-background-500", index: 20 },
      { name: "--sjs-secondary-background-500", index: 30 },
      { name: "scale", index: 40 },
    ],
  },
};

export const creatorThemeModelPropertyGridDefinition: ISurveyPropertyGridDefinition = {
  autoGenerateProperties: true,
  classes: creatorThemeModelProperties
};

export class creatorThemeModelEditorDefinition {
  public static definition: ISurveyPropertiesDefinition = creatorThemeModelProperties;
}