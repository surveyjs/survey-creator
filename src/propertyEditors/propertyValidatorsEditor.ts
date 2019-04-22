import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  SurveyPropertyOneSelectedEditor,
  SurveyPropertyOneSelectedItem
} from "./propertyOneSelectedEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyValidatorsEditor extends SurveyPropertyOneSelectedEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "validators";
  }
  protected createOneSelectedItem(obj: any): SurveyPropertyOneSelectedItem {
    return new SurveyPropertyValidatorItem(obj);
  }
  protected getAvailableClasses(): Array<any> {
    var classes = Survey.JsonObject.metaData.getChildrenClasses(
      "surveyvalidator",
      true
    );
    var res = [];
    for (var i = 0; i < classes.length; i++) {
      var name = classes[i].name;
      res.push({
        value: name,
        text: editorLocalization.getValidatorName(name)
      });
    }
    return res;
  }
}

export class SurveyPropertyValidatorItem extends SurveyPropertyOneSelectedItem {
  constructor(public obj: Survey.Base) {
    super(obj);
  }
  public getText() {
    return editorLocalization.getValidatorName(this.obj.getType());
  }
}

SurveyPropertyEditorFactory.registerEditor("validators", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyValidatorsEditor(property);
});
