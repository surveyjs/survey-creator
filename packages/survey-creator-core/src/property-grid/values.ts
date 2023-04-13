import { Base, Helpers, JsonObjectProperty, Question, QuestionMatrixModel, SurveyModel } from "survey-core";
import { PropertyGridEditorCollection, IPropertyEditorSetup, PropertyGridEditor } from "./index";
import { CellsEditor } from "./cells-survey";
import {
  DefaultValueEditor,
  DefaultMatrixRowValueEditor,
  DefaultPanelDynamicPanelValueEditor,
  TriggerValueEditor
} from "./values-survey";
import { ISurveyCreatorOptions } from "../creator-settings";
import { SurveyHelper } from "../survey-helper";
import { QuestionLinkValueModel } from "../components/link-value";

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
    const linkQuestion = <QuestionLinkValueModel>question;
    linkQuestion.isClickableCallback = () => {
      return !linkQuestion.isReadOnly || !this.isValueEmpty(linkQuestion.value);
    };
    linkQuestion.linkClickCallback = () => {
      this.showModalPropertyEditor(this, prop, question, options, () => linkQuestion.isSelected = false);
      linkQuestion.isSelected = true;
    };
    linkQuestion.clearClickCallback = () => {
      this.clearPropertyValue(
        (<any>question).obj,
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
  protected isValueEmpty(val: any): boolean {
    return Helpers.isValueEmpty(val);
  }

  public isSupportGrouping(): boolean {
    return true;
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
    const trigger = (<any>question).obj;
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
