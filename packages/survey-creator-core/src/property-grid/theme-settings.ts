import { Base, JsonObjectProperty, Question } from "survey-core";
import { PropertyGridEditor, PropertyGridEditorCollection } from ".";
import { ISurveyCreatorOptions } from "../creator-settings";

export class PropertyGridEditorFontSettings extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "font";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "font", descriptionLocation: "hidden" };
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

export class PropertyGridEditorBackgroundCornerRadius extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "backgroundcornerradius";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "backgroundcornerradius", descriptionLocation: "hidden" };
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
PropertyGridEditorCollection.register(new PropertyGridEditorBackgroundCornerRadius());

export class PropertyGridEditorShadowEffects extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "shadoweffects";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return { type: "shadoweffects", descriptionLocation: "hidden" };
  }
}
PropertyGridEditorCollection.register(new PropertyGridEditorShadowEffects());