import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyOneSelectedEditor } from "./propertyOneSelectedEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { ExpressionToDisplayText } from "../expressionToDisplayText";

export class SurveyPropertyTriggersEditor extends SurveyPropertyOneSelectedEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "triggers";
  }
  public getItemText(item: any): any {
    if (!item.expression)
      return editorLocalization.getString("pe.triggerNotSet");
    var res = item.expression;
    if (!!this.options && this.options.showTitlesInExpressions) {
      res = new ExpressionToDisplayText(this.getSurvey()).toDisplayText(res);
    }
    return editorLocalization.getString("pe.triggerRunIf") + ": " + res;
  }
  protected getAvailableClasses(): Array<any> {
    var classes = Survey.Serializer.getChildrenClasses("surveytrigger", true);
    var res = [];
    for (var i = 0; i < classes.length; i++) {
      var name = classes[i].name;
      if (name == "visibletrigger") continue;
      res.push({
        value: name,
        text: editorLocalization.getTriggerName(name)
      });
    }
    return res;
  }
  private getSurvey(): Survey.SurveyModel {
    return !!this.object ? this.object : this.editingObject;
  }
}

SurveyPropertyEditorFactory.registerEditor("triggers", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyTriggersEditor(property);
});
