import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem,
  SurveyNestedPropertyEditorColumn
} from "./propertyNestedPropertyEditor";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "./propertyEditorBase";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { SurveyHelper } from "../surveyHelper";

export class SurveyPropertyCalculatedValueEditor extends SurveyNestedPropertyEditor {
  public static ValueBaseName = "var";
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "calculatedvalues";
  }
  public get editorTypeTemplate(): string {
    return "nesteditems";
  }
  protected getEditorName(): string {
    if (!this.koEditItem()) return "";
    return this.koEditItem().name;
  }
  protected createNewEditorItem(): any {
    var newItem = new Survey.CalculatedValue(this.getNewName());
    newItem["object"] = this.object;
    return new SurveyPropertyCalculatedValueItem(
      newItem,
      () => this.columns,
      this.options
    );
  }
  protected createEditorItem(item: any) {
    return new SurveyPropertyCalculatedValueItem(
      item,
      () => this.columns,
      this.options
    );
  }
  protected createItemFromEditorItem(editorItem: any) {
    var newItem = new Survey.MultipleTextItem();
    var json = new Survey.JsonObject().toJsonObject(editorItem.item);
    new Survey.JsonObject().toObject(json, newItem);
    return newItem;
  }
  protected getProperties(): Array<Survey.JsonObjectProperty> {
    var names = this.getPropertiesNames("calculatedvalue@items", []);
    return this.getPropertiesByNames("calculatedvalue", names);
  }
  private getNewName(): string {
    var objs = [];
    var items = this.koItems();
    for (var i = 0; i < items.length; i++) {
      var item = items[i].item;
      if (!!item) {
        objs.push({ name: item.name });
      }
    }
    return SurveyHelper.getNewName(
      objs,
      SurveyPropertyCalculatedValueEditor.ValueBaseName
    );
  }
}

export class SurveyPropertyCalculatedValueItem extends SurveyNestedPropertyEditorItem {
  constructor(
    public item: Survey.CalculatedValue,
    getColumns: () => Array<SurveyNestedPropertyEditorColumn>,
    options: ISurveyObjectEditorOptions
  ) {
    super(item, getColumns, options);
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
