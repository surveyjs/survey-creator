import { Base, JsonObjectProperty, Question } from "survey-core";
import { PropertyGridEditor, PropertyGridEditorCollection } from ".";
import { ISurveyCreatorOptions } from "../creator-settings";

export class PropertyGridEditorFontSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "fontsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "fontSettings", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorFontSettings());

export class PropertyGridEditorElementSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "elementsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "elementsettings", descriptionLocation: "hidden" };
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    question.valueFromDataCallback = function (val: any): any {
      return val;
    };
    question.valueToDataCallback = function (val: any): any {
      return val;
    };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorElementSettings());

export class PropertyGridEditorBoxShadowSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "boxshadowsettings";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "boxshadowsettings", descriptionLocation: "hidden" };
  }
  // public onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
  // }
}
PropertyGridEditorCollection.register(new PropertyGridEditorBoxShadowSettings());