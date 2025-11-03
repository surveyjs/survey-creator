import { Base, ConditionsParser, JsonObjectProperty, Operand, Question } from "survey-core";
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
      allowClear: false,
      rows: 2
    };
  }
  public clearPropertyValue(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): void {
    question.clearValue();
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void {
    question.valueToDataCallback = (val: any): any => {
      return this.processExpression(val, true);
    };
    question.valueFromDataCallback = (val: any): any => {
      return this.processExpression(val, false);
    };
  }
  private processExpression(val: string, valueToData: boolean): string {
    if (!val) return val;
    const operand = new ConditionsParser().parseExpression(val);
    if (!operand) return val;
    const list = new Array<Operand>();
    operand.addOperandsToList(list);
    const replacedText = new Array<any>();
    for (let i = 0; i < list.length; i++) {
      const op = list[i];
      if (op.getType() === "const") {
        const constVal = (<any>op).correctValue;
        if (typeof constVal === "string") {
          const newVal = valueToData ? this.valueToData(constVal) : this.valueFromData(constVal);
          if (newVal !== constVal) {
            replacedText.push({ oldText: constVal, newText: newVal });
          }
        }
      }
    }
    replacedText.forEach((item) => {
      val = val.replace(item.oldText, item.newText);
    });
    return val;
  }
  private valueToData(val: string): string {
    if (!val) return val;
    return val.replace(/\\n/g, "\n")
      .replace(/\\r/g, "\r")
      .replace(/\\t/g, "\t");
  }
  private valueFromData(val: string): string {
    if (!val) return val;
    return val.replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/\t/g, "\\t");
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
      allowClear: false,
      rows: 2,
    };
  }
  public canClearPropertyValue(obj: Base, prop: JsonObjectProperty, question: Question, options: ISurveyCreatorOptions): boolean {
    return options.logicAllowTextEditExpressions !== false;
  }
  public onSetup(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions) {
    if (options.logicAllowTextEditExpressions === false) {
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
