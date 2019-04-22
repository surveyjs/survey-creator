import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  SurveyPropertyOneSelectedEditor,
  SurveyPropertyOneSelectedItem
} from "./propertyOneSelectedEditor";

import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { editorLocalization } from "../entries";

export class SurveyPropertyHtmlConditionEditor extends SurveyPropertyOneSelectedEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "htmlconditions";
  }
  protected getObjClassName() {
    return "htmlconditionitem";
  }
  protected createOneSelectedItem(obj: any): SurveyPropertyOneSelectedItem {
    return new SurveyPropertyHtmlConditionItem(obj);
  }
}

export class SurveyPropertyHtmlConditionItem extends SurveyPropertyOneSelectedItem {
  constructor(public obj: Survey.Base) {
    super(obj);
    var self = this;
    obj.registerFunctionOnPropertyValueChanged("expression", function() {
      self.objectChanged();
    });
  }
  public getText() {
    var expression = this.obj["expression"];
    return (
      editorLocalization.getString("ed.completedHtmlOnConditionItemText") +
      " " +
      (!!expression ? expression : "?")
    );
  }
}

SurveyPropertyEditorFactory.registerEditor("htmlconditions", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyHtmlConditionEditor(property);
});
