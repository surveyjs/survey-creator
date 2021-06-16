import { Base, JsonObjectProperty, Question } from "survey-core";
import {
  PropertyGridEditorCollection,
  IPropertyEditorSetup,
  PropertyGridEditor
} from "./index";
import { ConditionEditor } from "./condition-survey";
import { ISurveyCreatorOptions } from "../settings";

export class PropertyGridEditorExpression extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "expression";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return { type: "comment", showOptionsCaption: false };
  }
  public clearPropertyValue(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): void {
    question.clearValue();
  }
}
export class PropertyGridEditorCondition extends PropertyGridEditorExpression {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "condition";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "comment",
      showOptionsCaption: false,
      readOnly: options.allowEditExpressionsInTextEditor === false
    };
  }
  public createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    return new ConditionEditor((<any>obj).getSurvey(), obj, options, prop.name);
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorExpression());
PropertyGridEditorCollection.register(new PropertyGridEditorCondition());
