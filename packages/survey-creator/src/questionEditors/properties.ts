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
  public hideCategory(categoryName: string) {
    var def = SurveyQuestionEditorDefinition.definition;
    for (var key in def) {
      var tab = this.getTabFromElementDef(def[key], categoryName);
      if (!!tab) {
        tab.visible = false;
      }
    }
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
  private getTabFromElementDef(elDef: any, tabName: string): any {
    if (!elDef.tabs) return null;
    for (var i = 0; i < elDef.tabs.length; i++) {
      if (elDef.tabs[i].name == tabName) return elDef.tabs[i];
    }
    return null;
  }
}
export var creatorProperties = SurveyCreatorProperties.instance;
