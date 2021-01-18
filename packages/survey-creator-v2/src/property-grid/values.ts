import {
  Base,
  JsonObjectProperty,
  Question,
  QuestionMatrixModel,
} from "survey-knockout";
import { PropertyGridEditorCollection, IPropertyEditorSetup } from "./index";
import { CellsEditor } from "./cells-survey";
import { ISurveyCreatorOptions } from "@survey/creator/settings";

PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "cells";
  },
  getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "empty",
    };
  },
  createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    return new CellsEditor(<QuestionMatrixModel>obj, options);
  },
  clearPropertyValue(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): void {
    (<QuestionMatrixModel>obj).cells.setJson(null);
  },
  onAfterRenderQuestion(obj: Base, prop: JsonObjectProperty, evtOptions: any) {
    //evtOptions.htmlElement.innerHTML = "Some text";
  },
});
