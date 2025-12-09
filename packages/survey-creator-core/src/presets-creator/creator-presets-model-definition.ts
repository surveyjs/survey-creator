import { ISurveyPropertiesDefinition, ISurveyPropertyGridDefinition } from "../question-editor/definition";

const creatorPresetsModelProperties: ISurveyPropertiesDefinition = {
  "creatorsettings": {
    properties: [
      { name: "presetName", index: 1 },
    ]
  },
};

export const creatorPresetsModelPropertyGridDefinition: ISurveyPropertyGridDefinition = {
  autoGenerateProperties: true,
  classes: creatorPresetsModelProperties
};

export class creatorPresetsModelEditorDefinition {
  public static definition: ISurveyPropertiesDefinition = creatorPresetsModelProperties;
}