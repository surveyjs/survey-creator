import { ISurveyPropertiesDefinition, ISurveyPropertyGridDefinition } from "../question-editor/definition";
import { CreatorThemeModel } from "./creator-theme-model";

const creatorThemeModelProperties: ISurveyPropertiesDefinition = {
  "creatortheme": {
    properties: [
      { name: "themeName", index: 1 },
      { name: CreatorThemeModel.varColorProjectBrand, index: 10, tab: "accentColors" },
      { name: CreatorThemeModel.varColorProjectAccent, index: 20, tab: "accentColors" },
      { name: CreatorThemeModel.varColorUtilitySurface, index: 30, tab: "surfaceBackground" },
      { name: "fontScale", index: 40, tab: "scaling" },
      { name: "scale", index: 50, tab: "scaling" },
    ],
    tabs: [
      { name: "accentColors", "parent": "general", index: 20 },
      { name: "surfaceBackground", "parent": "general", index: 30 },
      { name: "scaling", "parent": "general", index: 40 }
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