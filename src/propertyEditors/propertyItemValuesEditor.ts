import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyObjectProperty } from "../objectProperty";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyItemValuesEditor extends SurveyPropertyItemsEditor {
  koActiveView: any;
  koItemsText: any;
  koShowTextView: any;
  changeToTextViewClick: any;
  changeToFormViewClick: any;
  private columnsValue: Array<SurveyPropertyItemValuesEditorColumn>;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    this.columnsValue = this.createColumns();
    this.koActiveView = ko.observable("form");
    this.koShowTextView = ko.observable(this.canShowTextView);
    this.koItemsText = ko.observable("");
    this.koActiveView.subscribe(function(newValue) {
      if (newValue == "form") self.updateItems(self.koItemsText());
      else self.koItemsText(self.getItemsText());
    });
    this.changeToTextViewClick = function() {
      self.koActiveView("text");
    };
    this.changeToFormViewClick = function() {
      self.koActiveView("form");
    };
  }
  public get editorType(): string {
    return "itemvalues";
  }
  public get columns(): Array<SurveyPropertyItemValuesEditorColumn> {
    return this.columnsValue;
  }
  public setup() {
    this.showDisplayName = false;
    this.beforeShowModal();
  }
  protected checkForErrors(): boolean {
    var result = false;
    for (var i = 0; i < this.koItems().length; i++) {
      var item = this.koItems()[i];
      result = item.hasError || result;
    }
    return result;
  }
  protected createColumns(): Array<SurveyPropertyItemValuesEditorColumn> {
    var result = [];
    var properties = this.getProperties();
    for (var i = 0; i < properties.length; i++) {
      if (!properties[i].visible) continue;
      result.push(new SurveyPropertyItemValuesEditorColumn(properties[i]));
    }
    return result;
  }
  protected getProperties(): Array<Survey.JsonObjectProperty> {
    //TODO remove these class and property registration later.
    if (!Survey.JsonObject.metaData.findClass("itemvalue")) {
      Survey.JsonObject.metaData.addClass("itemvalue", []);
    }
    if (!Survey.JsonObject.metaData.findProperty("itemvalue", "value")) {
      Survey.JsonObject.metaData.addProperty("itemvalue", { name: "!value" });
    }
    if (!Survey.JsonObject.metaData.findProperty("itemvalue", "text")) {
      Survey.JsonObject.metaData.addProperty("itemvalue", {
        name: "text",
        onGetValue: function(obj: any) {
          return obj.locText.pureText;
        }
      });
    }
    var className = this.property ? this.property.type : "itemvalue";
    if (className == this.editorType) className = "itemvalue";
    var properties = Survey.JsonObject.metaData.getProperties(className);
    return properties;
  }
  protected createEditorOptions(): any {
    var options = super.createEditorOptions();
    options.showTextView = true;
    return options;
  }
  protected onSetEditorOptions(editorOptions: any) {
    super.onSetEditorOptions(editorOptions);
    this.koShowTextView(this.canShowTextView && editorOptions.showTextView);
  }
  protected createNewEditorItem(): any {
    var itemValue = new Survey.ItemValue(null);
    itemValue.locOwner = this;
    if (this.options) {
      this.options.onItemValueAddedCallback(
        this.editablePropertyName,
        itemValue
      );
    }
    return new SurveyPropertyItemValuesEditorItem(itemValue, this.columns);
  }
  protected createEditorItem(item: any): any {
    var itemValue = new Survey.ItemValue(null);
    itemValue.locOwner = this;
    itemValue.setData(item);
    return new SurveyPropertyItemValuesEditorItem(itemValue, this.columns);
  }
  protected createItemFromEditorItem(editorItem: any) {
    var item = editorItem.item;
    var alwaySaveTextInPropertyEditors =
      this.options && this.options.alwaySaveTextInPropertyEditors;
    if (!alwaySaveTextInPropertyEditors && item.text == item.value) {
      item.text = null;
    }
    var itemValue = new Survey.ItemValue(null);
    itemValue.setData(item);
    return itemValue;
  }
  protected onBeforeApply() {
    if (this.koActiveView() != "form") {
      this.updateItems(this.koItemsText());
    }
    super.onBeforeApply();
  }
  protected updateItems(text: string) {
    var items = [];
    if (text) {
      var texts = text.split("\n");
      for (var i = 0; i < texts.length; i++) {
        if (!texts[i]) continue;
        var valueItem = new Survey.ItemValue(texts[i]);
        var item = {
          value: valueItem.value,
          text: valueItem.hasText ? valueItem.text : ""
        };
        items.push(item);
      }
    }
    this.koItems(this.getItemsFromValue(items));
  }
  protected getItemsText(): string {
    var text = [];
    var items = this.koItems();
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.cells[0].hasError) continue;
      var itemText = item.cells[0].value;
      if (item.cells[1].value)
        itemText += Survey.ItemValue.Separator + item.cells[1].value;
      text.push(itemText);
    }
    return text.join("\n");
  }
  private get canShowTextView(): boolean {
    return this.columns.length == 2;
  }
}

export class SurveyPropertyItemValuesEditorColumn {
  constructor(public property: Survey.JsonObjectProperty) {}
  public get text(): string {
    var text = editorLocalization.getString("pe." + this.property.name);
    return text ? text : this.property.name;
  }
}

export class SurveyPropertyItemValuesEditorItem {
  private cellsValue: Array<SurveyPropertyItemValuesEditorCell> = [];
  constructor(
    public item: Survey.ItemValue,
    public columns: Array<SurveyPropertyItemValuesEditorColumn>
  ) {
    for (var i = 0; i < columns.length; i++) {
      this.cellsValue.push(
        new SurveyPropertyItemValuesEditorCell(item, columns[i])
      );
    }
  }
  public get cells(): Array<SurveyPropertyItemValuesEditorCell> {
    return this.cellsValue;
  }
  public get hasError(): boolean {
    var res = false;
    for (var i = 0; i < this.cells.length; i++) {
      res = this.cells[i].hasError || res;
    }
    return res;
  }
}
export class SurveyPropertyItemValuesEditorCell {
  private objectPropertyValue: SurveyObjectProperty;
  constructor(
    public item: Survey.ItemValue,
    public column: SurveyPropertyItemValuesEditorColumn
  ) {
    var self = this;
    var propEvent = (property: SurveyObjectProperty, newValue: any) => {
      self.value = newValue;
    };
    this.objectPropertyValue = new SurveyObjectProperty(
      this.property,
      propEvent
    );
    this.objectProperty.object = item;
  }
  public get property(): Survey.JsonObjectProperty {
    return this.column.property;
  }
  public get objectProperty(): SurveyObjectProperty {
    return this.objectPropertyValue;
  }
  public get editor(): SurveyPropertyEditorBase {
    return this.objectProperty.editor;
  }
  public get koValue(): any {
    return this.objectProperty.editor.koValue;
  }
  public get value() {
    return this.property.getValue(this.item);
  }
  public set value(val: any) {
    this.property.setValue(this.item, val, null);
  }
  public get hasError(): boolean {
    return this.editor.hasError();
  }
}

SurveyPropertyEditorFactory.registerEditor(
  "itemvalues",
  function(property: Survey.JsonObjectProperty): SurveyPropertyEditorBase {
    return new SurveyPropertyItemValuesEditor(property);
  },
  "itemvalue"
);
