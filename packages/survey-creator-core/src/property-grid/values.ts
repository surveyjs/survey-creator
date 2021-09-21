import {
  Base,
  Helpers,
  JsonObjectProperty,
  Question,
  QuestionMatrixModel,
  Serializer,
  QuestionFactory,
  property,
  SurveyModel
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
import { SurveyHelper } from "../survey-helper";

export class QuestionLinkValueModel extends Question {
  public linkClickCallback: () => void;
  @property() linkValueText: string;
  constructor(name: string) {
    super(name);
    this.linkValueText = editorLocalization.getString("pe.emptyValue");
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "value") {
      this.updateLinkValueText();
    }
  }
  public getType(): string {
    return "linkvalue";
  }
  public doLinkClick() {
    if (!!this.linkClickCallback) {
      this.linkClickCallback();
    }
  }
  private updateLinkValueText() {
    var displayValue = this.isEmpty()
      ? editorLocalization.getString("pe.emptyValue")
      : this.getObjDisplayValue();
    this.linkValueText = displayValue;
  }
  private stringifyValue(val: any): string {
    if (typeof val !== "string") return JSON.stringify(val);
    return val;
  }
  private getObjDisplayValue(): string {
    const obj = this.obj;
    if (!obj || !obj["getDisplayValue"]) return this.stringifyValue(this.value);
    var res = obj["getDisplayValue"](true, this.value);
    if (typeof res !== "string") return JSON.stringify(res);
    return res;
  }
}

Serializer.addClass(
  "linkvalue",
  [],
  function () {
    return new QuestionLinkValueModel("");
  },
  "nonvalue"
);

QuestionFactory.Instance.registerQuestion("linkvalue", (name) => {
  return new QuestionLinkValueModel(name);
});

export abstract class PropertyGridValueEditorBase extends PropertyGridEditor {
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "linkvalue"
    };
  }
  public onGetQuestionTitleActions(obj: Base, options: any): void {
    var action = undefined;
    for (var i = 0; i < options.titleActions.length; i++) {
      if (options.titleActions[i].id === "property-grid-setup") {
        action = options.titleActions[i];
        break;
      }
    }
    options.question.linkClickCallback = () => {
      action.action();
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
  protected isValueEmpty(val: any): boolean {
    return Helpers.isValueEmpty(val);
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
    const trigger = question.obj;
    const setQuestion = this.getSetToNameQuestion(trigger);
    return new TriggerValueEditor(setQuestion, trigger, prop.name, options);
  }
  protected getSetToNameQuestion(obj: Base): Question {
    let survey = <SurveyModel>obj.getSurvey();
    if(!survey) {
      survey = obj["owner"];
    }
    if (!obj["setToName"] || !survey) return null;
    return <Question>survey.getQuestionByValueName(
      obj["setToName"]
    );
  }
}
export class PropertyGridTriggerValueInLogicEditor extends PropertyGridTriggerValueEditor {
  public fit(prop: JsonObjectProperty, context?: string): boolean {
    return context === "logic" && prop.type == "triggervalue";
  }
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    const setQuestion = this.getSetToNameQuestion(obj);
    if(!setQuestion)
      return {
        type: "linkvalue"
      };
    const json: any = setQuestion.toJSON();
    json.type = setQuestion.getType();
    SurveyHelper.updateQuestionJson(json);
    return json;
  }
}

PropertyGridEditorCollection.register(new PropertyGridCellsEditor());
PropertyGridEditorCollection.register(new PropertyGridValueEditor());
PropertyGridEditorCollection.register(new PropertyGridRowValueEditor());
PropertyGridEditorCollection.register(new PropertyGridPanelValueEditor());
PropertyGridEditorCollection.register(new PropertyGridTriggerValueEditor());
PropertyGridEditorCollection.register(new PropertyGridTriggerValueInLogicEditor());
