import {
  Base,
  Helpers,
  JsonObjectProperty,
  Question,
  QuestionMatrixModel,
  ComponentCollection
} from "survey-core";
import {
  PropertyGridEditorCollection,
  IPropertyEditorSetup,
  PropertyGridEditor
} from "./index";
import { CellsEditor } from "./cells-survey";
import {
  DefaultValueEditor,
  DefaultMatrixRowValueEditor,
  DefaultPanelDynamicPanelValueEditor,
  TriggerValueEditor
} from "./values-survey";
import { ISurveyCreatorOptions } from "../settings";
import { editorLocalization } from "../editorLocalization";

var propertyGridValueJSON = {
  name: "propertygrid_value",
  showInToolbox: false,
  questionJSON: {
    type: "html",
    html: editorLocalization.getString("pe.emptyValue")
  }
};

ComponentCollection.Instance.add(propertyGridValueJSON);

export abstract class PropertyGridValueEditorBase extends PropertyGridEditor {
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "propertygrid_value"
    };
  }
  public clearPropertyValue(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): void {
    obj[prop.name] = undefined;
  }
  onValueChanged(obj: Base, prop: JsonObjectProperty, question: Question) {
    var displayValue = question.isEmpty()
      ? editorLocalization.getString("pe.emptyValue")
      : this.getObjDisplayValue(obj, question);
    question.contentQuestion.html = this.correctHtml(displayValue);
  }
  protected isValueEmpty(val: any): boolean {
    return Helpers.isValueEmpty(val);
  }
  private correctHtml(html: string): string {
    if (!html) return html;
    let regex = /[&|<|>|"|']/g;
    return html.replace(regex, function (match) {
      if (match === "&") {
        return "&amp;";
      } else if (match === "<") {
        return "&lt;";
      } else if (match === ">") {
        return "&gt;";
      } else if (match === '"') {
        return "&quot;";
      } else {
        return "&apos;";
      }
    });
  }
  private getObjDisplayValue(obj: Base, question: Question): string {
    if (!obj["getDisplayValue"]) return this.stringifyValue(question.value);
    var res = !!obj["getDisplayValue"]
      ? obj["getDisplayValue"](true, question.value)
      : question.value;
    if (typeof res !== "string") return JSON.stringify(res);
    return res;
  }
  private stringifyValue(val: any): string {
    if (typeof val !== "string") return JSON.stringify(val);
    return val;
  }
}

export class PropertyGridCellsEditor extends PropertyGridValueEditorBase {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "cells";
  }
  public createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    return new CellsEditor(<QuestionMatrixModel>obj, options);
  }
  public clearPropertyValue(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): void {
    (<QuestionMatrixModel>obj).cells.setJson(null);
  }
  protected isValueEmpty(val: any): boolean {
    if (!val) return true;
    return Helpers.isValueEmpty(val.values);
  }
}

export class PropertyGridValueEditor extends PropertyGridValueEditorBase {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "value";
  }
  public createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    return new DefaultValueEditor(<Question>obj, prop.name, options);
  }
}

export class PropertyGridRowValueEditor extends PropertyGridValueEditorBase {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "rowvalue";
  }
  public createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    return new DefaultMatrixRowValueEditor(<Question>obj, prop.name, options);
  }
}
export class PropertyGridPanelValueEditor extends PropertyGridValueEditorBase {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "panelvalue";
  }
  public createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    return new DefaultPanelDynamicPanelValueEditor(
      <Question>obj,
      prop.name,
      options
    );
  }
}

export class PropertyGridTriggerValueEditor extends PropertyGridValueEditorBase {
  public fit(prop: JsonObjectProperty): boolean {
    return prop.type == "triggervalue";
  }
  public createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    if (!obj["setToName"] || !obj["owner"]) return;
    var setQuestion = obj["owner"].getQuestionByValueName(obj["setToName"]);
    if (!setQuestion) return;
    return new TriggerValueEditor(setQuestion, obj, prop.name, options);
  }
}

PropertyGridEditorCollection.register(new PropertyGridCellsEditor());
PropertyGridEditorCollection.register(new PropertyGridValueEditor());
PropertyGridEditorCollection.register(new PropertyGridRowValueEditor());
PropertyGridEditorCollection.register(new PropertyGridPanelValueEditor());
PropertyGridEditorCollection.register(new PropertyGridTriggerValueEditor());
