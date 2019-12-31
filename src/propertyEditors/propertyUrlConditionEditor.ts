import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyNestedPropertyEditor } from "./propertyNestedPropertyEditor";

import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyUrlConditionEditor extends SurveyNestedPropertyEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "urlconditions";
  }
  public get editorTypeTemplate(): string {
    return "nesteditems";
  }
  protected createNewItem(): any {
    return Survey.Serializer.createClass("urlconditionitem");
  }
  protected getProperties(): Array<Survey.JsonObjectProperty> {
    return this.getPropertiesByNames("urlconditionitem", ["expression", "url"]);
  }
}

SurveyPropertyEditorFactory.registerEditor("urlconditions", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyUrlConditionEditor(property);
});
