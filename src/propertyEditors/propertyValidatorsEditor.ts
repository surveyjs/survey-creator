import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyOneSelectedEditor } from "./propertyOneSelectedEditor";
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
  public getItemText(item: any, counter: any = null): any {
    return editorLocalization.getValidatorName(item.getType());
  }
  protected getAvailableClasses(): Array<any> {
    var names = this.getValidatorTypes();
    var res = [];
    for (var i = 0; i < names.length; i++) {
      res.push({
        value: names[i],
        text: editorLocalization.getValidatorName(names[i])
      });
    }
    return res;
  }
  private getValidatorTypes(): Array<string> {
    var res = [];
    if (!!this.object && !!this.object.getSupportedValidators) {
      res = this.object.getSupportedValidators();
      for (var i = 0; i < res.length; i++) {
        res[i] = res[i] + "validator";
      }
      return res;
    }
    var classes = Survey.Serializer.getChildrenClasses("surveyvalidator", true);
    for (var i = 0; i < classes.length; i++) {
      res.push(classes[i].name);
    }
    return res;
  }
}

SurveyPropertyEditorFactory.registerEditor("validators", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyValidatorsEditor(property);
});
