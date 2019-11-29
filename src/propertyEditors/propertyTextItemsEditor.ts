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
    return "textitems";
  }
  public get editorTypeTemplate(): string {
    return "nesteditems";
  }
  protected getEditorName(): string {
    if (!this.koEditItem()) return "";
    return this.koEditItem().text;
  }
  protected createNewItem(): any {
    var newItem = new Survey.MultipleTextItem(this.getNewName());
    newItem["object"] = this.object;
    return newItem;
  }
  protected getItemClassName(item: any): string {
    return "multipletextitem";
  }
  protected createItemFromEditorItem(editorItem: any) {
    var newItem = new Survey.MultipleTextItem();
    var json = new Survey.JsonObject().toJsonObject(editorItem.obj);
    new Survey.JsonObject().toObject(json, newItem);
    return newItem;
  }
  protected getProperties(): Array<Survey.JsonObjectProperty> {
    var names = this.getPropertiesNames("multipletext@items", []);
    return this.getPropertiesByNames("multipletextitem", names);
  }
  private getNewName(): string {
    var objs = [];
    var items = this.koItems();
    for (var i = 0; i < items.length; i++) {
      var item = items[i].obj;
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

SurveyPropertyEditorFactory.registerEditor("textitems", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyTextItemsEditor(property);
});
