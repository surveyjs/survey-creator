import {
  Base,
  JsonObjectProperty,
  Serializer,
  Question,
  MatrixDropdownRowModelBase,
  QuestionMatrixDynamicModel,
  PanelModel,
  SurveyModel,
  Survey,
} from "survey-knockout";
import { PropertyGridEditorCollection, IPropertyEditorSetup } from "./index";
import { ConditionEditor } from "./condition-survey";
import { ISurveyCreatorOptions } from "../settings";

PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "expression";
  },
  getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "comment",
      showOptionsCaption: false,
    };
  },
});

PropertyGridEditorCollection.register({
  fit(prop: JsonObjectProperty): boolean {
    return prop.type == "condition";
  },
  getJSON(
    obj: Base,
    prop: JsonObjectProperty,
    options: ISurveyCreatorOptions
  ): any {
    return {
      type: "comment",
      showOptionsCaption: false,
    };
  },
  createPropertyEditorSetup(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): IPropertyEditorSetup {
    return new ConditionEditor(
      (<any>obj).survey, //TODO
      obj,
      options,
      prop.name
    );
  },
  clearPropertyValue(
    obj: Base,
    prop: JsonObjectProperty,
    question: Question,
    options: ISurveyCreatorOptions
  ): void {
    obj[prop.name] = "";
  },
});
