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
  public resetClickCallback: () => void;
  public linkSetButtonCssClasses = "spg-link-value-button spg-question-link__set-button";
  public linkClearButtonCssClasses = "spg-question-link__clear-button";

  @property({ defaultValue: false }) isSelected: boolean;
  @property() linkValueText: string;
  @property({ defaultValue: false }) showClear: boolean;
  @property({ defaultValue: true }) allowClear: boolean;
  @property({ defaultValue: true }) showValueInLink: boolean;
  constructor(name: string, json: any = null) {
    super(name);
    const linkValueText = json && !json.showValueInLink && (editorLocalization.getString("pe.set")) + " " + json.title || null;
    this.linkValueText = linkValueText || editorLocalization.getString("pe.emptyValue");
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "value") {
      this.updateLinkValueText();
      if (this.allowClear) {
        this.showClear = !!newValue;
      }
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
  public doClearClick() {
    if (!!this.clearClickCallback) {
      this.clearClickCallback();
    }
  }
  private updateLinkValueText() {
    var displayValue;
    if (this.showValueInLink) {
      displayValue = this.isEmpty()
        ? editorLocalization.getString("pe.emptyValue")
        : this.getObjDisplayValue();
    }
    else {
      displayValue = this.isEmpty()
        ? editorLocalization.getString("pe.set") + " " + this.title
        : editorLocalization.getString("pe.change") + " " + this.title;
    }

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
  ["showValueInLink"],
  function (json) {
    const viewModel = new QuestionLinkValueModel("", json);
    return viewModel;
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
      type: "linkvalue",
      showValueInLink: false,
      titleLocation: "hidden"
    };
  }
  public onCreated = (obj: Base, question: Question, prop: JsonObjectProperty, options: ISurveyCreatorOptions) => {
    question.linkClickCallback = () => {
      this.showModalPropertyEditor(this, prop, question, options, () => question.isSelected = false);
      question.isSelected = true;
    };
    question.clearClickCallback = () => {
      this.clearPropertyValue(
        question.obj,
        prop,
        question,
        null /*this.options*/
      );
    };
  };

  public clearPropertyValue(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): void {
    obj[prop.name] = undefined;
  }
  onUpdateQuestionCssClasses(obj: Base, options: any) {
    const question = options.question;
    if(!question || !question.parent) return;
    const index = question.parent.elements.indexOf(question);
    if(index < 1) return;
    if(question.parent.elements[index - 1].getType() !== question.getType()) return;
    options.cssClasses.mainRoot += " spg-row-narrow__question";
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
    if (!survey) {
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
    if (!setQuestion)
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
