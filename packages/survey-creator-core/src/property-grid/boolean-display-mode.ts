import { Base, ItemValue, JsonObjectProperty, Question, QuestionDropdownModel, QuestionSelectBase } from "survey-core";
import { editorLocalization } from "../editorLocalization";
import { ISurveyCreatorOptions } from "../creator-settings";
import { PropertyGridEditor, PropertyGridEditorCollection } from "./index";

const booleanDisplayModeChoices = ["segmented", "radio", "checkbox", "switch"];

export class PropertyGridEditorBooleanDisplayMode extends PropertyGridEditor {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.name === "displayMode" && prop.classInfo?.name === "boolean";
  }
  public getJSON(obj: Base, prop: JsonObjectProperty, options: ISurveyCreatorOptions): any {
    return {
      type: "dropdown",
      choices: this.getChoicesForObj(obj),
      showOptionsCaption: false
    };
  }
  onCreated(obj: Base, question: Question, prop: JsonObjectProperty) {
    this.updateChoices(obj, question);
    question.displayValueCallback = (text: string): string => {
      return !text ? (<QuestionDropdownModel>question).placeholder : text;
    };
  }
  onMasterValueChanged(obj: Base, prop: JsonObjectProperty, question: Question): void {
    this.updateChoices(obj, question);
    if (!question.isEmpty()) {
      if (!ItemValue.getItemByValue((<QuestionSelectBase>question).choices, question.value)) {
        question.clearValue();
      }
    }
  }
  private updateChoices(obj: Base, question: Question): void {
    (<QuestionSelectBase>question).choices = this.getChoicesForObj(obj);
  }
  private getChoicesForObj(obj: Base): Array<any> {
    const values = booleanDisplayModeChoices.slice();
    if (obj.getPropertyValue("displayMode") === "custom") {
      values.push("custom");
    }
    return values.map(value => {
      const text = editorLocalization.getPropertyValueInEditor("displayMode", value);
      return text && text !== value ? { value, text } : { value };
    });
  }
}

PropertyGridEditorCollection.register(new PropertyGridEditorBooleanDisplayMode());
