import * as Survey from "survey-knockout";
import {
  SurveyQuestionEditorDefinition,
  ISurveyQuestionEditorDefinition,
} from "./questionEditorDefinition";

export class SurveyCreatorProperties {
  private static instanceValue = new SurveyCreatorProperties();
  public static get instance() {
    return SurveyCreatorProperties.instanceValue;
  }
  public hideProperty(propertyName: string, objType: string = undefined) {
    //Survey.Serializer.fin
  }
  public showProperty(
    propertyName: string,
    objType: string = undefined,
    options: any = undefined
  ) {}
  public moveProperty(propertyName: string, objType: string, options: any) {}
  private changeProperty(propertyName: string, objType: string, options: any) {}
}
export var creatorProperties = SurveyCreatorProperties.instance;
