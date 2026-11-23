import { Base, JsonObjectProperty, Question } from "survey-core";
import { PropertyGridEditor, PropertyGridEditorCollection } from "./index";
import { ISurveyCreatorOptions } from "../creator-settings";

const limitHandlerKey = "datetimepickerLimit";

// min and max are picked with a datetimepicker. The editor shows dates in the edited
// question's pattern. The min editor stops at the current max, the max editor starts at the current min.
export class PropertyGridEditorDateTimePickerLimit extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.classInfo?.name === "datetimepicker" && (prop.name === "min" || prop.name === "max");
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    const json: any = { type: "datetimepicker" };
    this.applyLimits(obj, json, prop.name);
    return json;
  }
  public onCreated(obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions): void {
    const key = limitHandlerKey + question.uniqueId;
    const update = (): void => {
      this.applyLimits(obj, question, prop.name);
    };
    update();
    ["pattern", "min", "max"].forEach(name => {
      obj.registerFunctionOnPropertyValueChanged(name, update, key);
    });
  }
  public onDisposing(obj: Base, question: Question, prop: JsonObjectProperty): void {
    const key = limitHandlerKey + question.uniqueId;
    ["pattern", "min", "max"].forEach(name => {
      obj.unRegisterFunctionOnPropertyValueChanged(name, key);
    });
  }
  private applyLimits(obj: Base, target: any, propName: string): void {
    target.pattern = obj["pattern"];
    if (propName === "min") {
      target.max = obj["max"];
    }
    if (propName === "max") {
      target.min = obj["min"];
    }
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorDateTimePickerLimit());
