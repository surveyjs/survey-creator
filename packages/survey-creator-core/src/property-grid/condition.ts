import { Base, JsonObjectProperty, Question } from "survey-core";
import {
  PropertyGridEditorCollection,
  IPropertyEditorSetup,
  PropertyGridEditor
} from "./index";
import { ConditionEditor } from "./condition-survey";
import { ISurveyCreatorOptions } from "../creator-settings";

export class PropertyGridEditorExpression extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "expression";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "comment",
      showOptionsCaption: false,
      rows: 2
    };
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
      rows: 2,
    };
  }
  public canClearPropertyValue(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): boolean {
    return options.allowEditExpressionsInTextEditor !== false;
  }
  public onSetup(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions) {
    if(options.allowEditExpressionsInTextEditor === false) {
      question.onKeyDownPreprocess = (event: any) => {
        const allowed = ["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End"];
        if (!event.ctrlKey && allowed.indexOf(event.key) < 0) {
          event.preventDefault();
        }
      };
    }
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
