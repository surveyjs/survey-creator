import {
  Base,
  JsonObjectProperty,
  Serializer,
  Question,
  MatrixDropdownRowModelBase,
  QuestionMatrixDynamicModel,
  PanelModel,
  SurveyModel,
  Survey,
} from "survey-knockout";
import {
  PropertyGridEditorCollection,
  IPropertyEditorSetup,
  PropertyGridEditor,
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
    obj[prop.name] = "";
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
    return { type: "comment", showOptionsCaption: false };
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
