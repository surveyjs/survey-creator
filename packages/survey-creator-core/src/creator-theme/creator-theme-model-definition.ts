import { ISurveyPropertiesDefinition, ISurveyPropertyGridDefinition } from "../question-editor/definition";

const creatorThemeModelProperties: ISurveyPropertiesDefinition = {
  "creatorTheme": {
    properties: [
      { name: "themeName" },
      { name: "palette" },
      { name: "--ctr-surface-background-color" },
      { name: "--sjs-primary-background-500" },
      { name: "--sjs-secondary-background-500" },
      { name: "scale" },
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