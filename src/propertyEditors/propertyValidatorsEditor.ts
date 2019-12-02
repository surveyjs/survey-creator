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
  public getItemText(item: any): any {
    return editorLocalization.getValidatorName(item.getType());
  }
  protected getAvailableClasses(): Array<any> {
    var classes = Survey.Serializer.getChildrenClasses("surveyvalidator", true);
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

SurveyPropertyEditorFactory.registerEditor("validators", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyValidatorsEditor(property);
});
