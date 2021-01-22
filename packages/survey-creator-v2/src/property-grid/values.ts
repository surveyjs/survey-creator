import {
  Base,
  Helpers,
  JsonObjectProperty,
  Question,
  QuestionMatrixModel,
} from "survey-knockout";
import {
  PropertyGridEditorCollection,
  IPropertyEditorSetup,
  PropertyGridEditor,
} from "./index";
import { CellsEditor } from "./cells-survey";
import { DefaultValueEditor } from "./values-survey";
import { ISurveyCreatorOptions } from "@survey/creator/settings";

export abstract class PropertyGridValueEditorBase extends PropertyGridEditor {
  public getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "empty",
    };
  }
  public onAfterRenderQuestion(
    obj: Base,
    prop: JsonObjectProperty,
    evtOptions: any
  ) {
    var htmlElement = evtOptions.htmlElement;
    var object = obj;
    var propName = prop.name;
    var a = <HTMLLinkElement>document.createElement("A");
    a.innerText = this.getInnerText(object[propName]);
    a.href = "javascript:void(0)";
    a.onclick = function () {
      //TODO make constant for classname
      var elements = htmlElement.getElementsByClassName(
        "sv-action-bar-item-modal"
      );
      if (elements.length == 0) return;
      elements[0].click();
    };
    evtOptions.htmlElement.appendChild(a);
    evtOptions.question.valueChangedCallback = () => {
      a.innerText = this.getInnerText(object[propName]);
    };
  }
  protected isValueEmpty(val: any): boolean {
    return Helpers.isValueEmpty(val);
  }
  private getInnerText(val: any): string {
    //TODO localize
    if (this.isValueEmpty(val)) return "Setup Value...";
    return "Modify Value...";
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
  public clearPropertyValue(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): void {
    obj[prop.name] = undefined;
  }
}

PropertyGridEditorCollection.register(new PropertyGridCellsEditor());
PropertyGridEditorCollection.register(new PropertyGridValueEditor());
