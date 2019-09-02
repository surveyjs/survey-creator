import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  SurveyPropertyOneSelectedEditor,
  SurveyPropertyOneSelectedItem
} from "./propertyOneSelectedEditor";

import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { SurveyHelper } from "../surveyHelper";

export class SurveyPropertyCalculatedValueEditor extends SurveyPropertyOneSelectedEditor {
  public static ValueBaseName = "var";
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "calculatedvalues";
  }
  protected getObjClassName() {
    return "calculatedvalue";
  }
  protected createNewEditorItem(): any {
    var res = super.createNewEditorItem();
    res.obj.name = SurveyHelper.getNewName(this.getObjs(), this.itemBaseName);
    return res;
  }
  protected createOneSelectedItem(obj: any): SurveyPropertyOneSelectedItem {
    return new SurveyPropertyCalculatedValueItem(
      obj,
      (name: string, obj: Survey.Base, oldName: string) => {
        return this.correctName(name, obj, oldName);
      }
    );
  }
  private correctName(
    name: string,
    obj: Survey.Base,
    oldName: string
  ): boolean {
    var res = this.isNameCorrect(name, obj);
    if (!res && !!oldName) {
      this.changeProperty("name", oldName);
    }
    return res;
  }
  private changeProperty(propertyName: string, value: any) {
    if (!this.selectedObjectEditor()) return;
    var propEditor = this.selectedObjectEditor().getPropertyEditorByName(
      propertyName
    );
    if (!propEditor || !propEditor.editor) return;
    propEditor.editor.koValue(value);
  }
  private isNameCorrect(name: string, obj: Survey.Base): boolean {
    if (!name || !name.replace(" ", "")) return false;

    var items = this.getObjs();
    for (var i = 0; i < items.length; i++) {
      if (items[i] == obj) continue;
      if (items[i].name == name) return false;
    }
    return true;
  }
  private get itemBaseName(): string {
    return SurveyPropertyCalculatedValueEditor.ValueBaseName;
  }
  private getObjs(): Array<any> {
    var res = [];
    var items = this.koItems();
    for (var i = 0; i < items.length; i++) {
      if (!items[i] || !items[i].obj) continue;
      res.push(items[i].obj);
    }
    return res;
  }
}

export class SurveyPropertyCalculatedValueItem extends SurveyPropertyOneSelectedItem {
  constructor(
    public obj: Survey.Base,
    protected correctName: (
      name: string,
      obj: Survey.Base,
      oldName: string
    ) => boolean
  ) {
    super(obj);
    obj["oldName"] = obj["name"];
    var self = this;
    obj.registerFunctionOnPropertyValueChanged("expression", function() {
      self.objectChanged();
    });
    obj.registerFunctionOnPropertyValueChanged("name", function() {
      self.nameChanged();
    });
  }
  protected nameChanged() {
    var name = this.obj["name"];
    if (this.obj["oldName"] == name) return;
    if (
      this.correctName &&
      !this.correctName(name, this.obj, this.obj["oldName"])
    ) {
      this.obj["name"] = this.obj["oldName"];
      return;
    }
    this.obj["oldName"] = name;
    this.objectChanged();
  }
  public getText() {
    var expression = this.obj["expression"];
    var name = this.obj["name"];
    return name + " = " + (!!expression ? expression : "?");
  }
}

SurveyPropertyEditorFactory.registerEditor("calculatedvalues", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyCalculatedValueEditor(property);
});
