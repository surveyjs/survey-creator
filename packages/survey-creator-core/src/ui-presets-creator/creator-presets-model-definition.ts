import { ISurveyPropertiesDefinition, ISurveyPropertyGridDefinition } from "../question-editor/definition";

const creatorPresetsModelProperties: ISurveyPropertiesDefinition = {
  "creatorpreset": {
    properties: [
      { name: "presetName", index: 1 }
    ]
  },
};

export const creatorPresetsModelPropertyGridDefinition: ISurveyPropertyGridDefinition = {
  generateOtherTab: true,
  classes: creatorPresetsModelProperties
};

export class creatorPresetsModelEditorDefinition {
  public static definition: ISurveyPropertiesDefinition = creatorPresetsModelProperties;
}