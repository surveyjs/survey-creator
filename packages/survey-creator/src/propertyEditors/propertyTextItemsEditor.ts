import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "./propertyEditorBase";
import { SurveyHelper } from "../surveyHelper";
import { editorLocalization } from "../editorLocalization";
import { SurveyNestedPropertyEditor } from "./propertyNestedPropertyEditor";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyTextItemsEditor extends SurveyNestedPropertyEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "textitem[]";
  }
  public get editorTypeTemplate(): string {
    return "nested-items";
  }
  protected getEditorName(): string {
    if (!this.koEditItem()) return "";
    return this.koEditItem().text;
  }
  protected createNewItem(): any {
    return new Survey.MultipleTextItem(this.getNewName());
  }
  protected getItemClassName(item: any): string {
    return "multipletextitem";
  }
  protected getColumnsProperties(): Array<Survey.JsonObjectProperty> {
    var names = this.getPropertiesNames("multipletext@items", []);
    return this.getPropertiesByNames("multipletextitem", names);
  }
  private getNewName(): string {
    var objs = [];
    var items = this.originalValue;
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (!!item) {
        objs.push({ name: item.name });
      }
    }
    return SurveyHelper.getNewName(
      objs,
      editorLocalization.getString("ed.newTextItemName")
    );
  }
}

SurveyPropertyEditorFactory.registerEditor("textitem[]", function (
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyTextItemsEditor(property);
});
