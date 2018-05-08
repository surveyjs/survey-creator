import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyObjectProperty } from "../objectProperty";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { getNextValue } from "../utils/utils";
import { SurveyQuestionEditorDefinition } from "../questionEditors/questionEditorDefinition";
import {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem
} from "./propertyNestedPropertyEditor";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";

export class SurveyPropertyItemValuesEditor extends SurveyNestedPropertyEditor {
  private detailDefinition: any;
  private optionsShowTextView: boolean = true;
  koActiveView: any;
  koItemsText: any;
  koShowTextView: any;
  changeToTextViewClick: any;
  changeToFormViewClick: any;
  private columnsValue: Array<SurveyPropertyItemValuesEditorColumn>;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koShowTextView = ko.observable(true);
    var self = this;
    if (property) {
      this.detailDefinition =
        SurveyQuestionEditorDefinition.definition[this.getItemValueClassName()];
    }
    this.columnsValue = this.createColumns();
    this.koActiveView = ko.observable("form");
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
  public get hasDetailButton(): boolean {
    return !!this.detailDefinition;
  }
  public get columns(): Array<SurveyPropertyItemValuesEditorColumn> {
    return this.columnsValue;
  }
  protected getItemValueClassName() {
    return this.property ? this.editorType + "@" + this.property.name : "";
  }
  protected getEditorName(): string {
    if (!this.koEditItem() || !this.koEditItem().item) return "";
    return editorLocalization
      .getString("pe.itemEdit")
      ["format"](this.koEditItem().item.value);
  }
  protected checkForErrors(): boolean {
    var result = false;
    for (var i = 0; i < this.koItems().length; i++) {
      var item = this.koItems()[i];
      result = item.hasError() || result;
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
    var className = this.property ? this.property.type : "itemvalue";
    if (className == this.editorType) className = "itemvalue";
    var properties = Survey.JsonObject.metaData.getProperties(className);
    return properties;
  }
  protected createEditorOptions(): any {
    var options = super.createEditorOptions();
    options.showTextView = true;
    options.itemsEntryType =
      (this.options["options"] &&
        this.options["options"].itemValuesEditorEntryType) ||
      "form";
    return options;
  }
  protected onSetEditorOptions(editorOptions: any) {
    super.onSetEditorOptions(editorOptions);
    this.optionsShowTextView = editorOptions.showTextView;
    this.updateShowTextViewVisibility();
    this.koActiveView(editorOptions.itemsEntryType || "form");
  }
  protected createNewEditorItem(): any {
    var nextValue = null;
    var values = this.koItems().map(function(item) {
      return item.item.itemValue;
    });
    nextValue = getNextValue("item", values);

    var itemValue = new Survey.ItemValue(nextValue);
    itemValue.locOwner = this;
    if (this.options) {
      this.options.onItemValueAddedCallback(
        this.editablePropertyName,
        itemValue
      );
    }
    return new SurveyPropertyItemValuesEditorItem(
      itemValue,
      this.columns,
      this.getItemValueClassName()
    );
  }
  protected createEditorItem(item: any): any {
    var itemValue = new Survey.ItemValue(null);
    itemValue.locOwner = this;
    itemValue.setData(item);
    return new SurveyPropertyItemValuesEditorItem(
      itemValue,
      this.columns,
      this.getItemValueClassName()
    );
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
  protected onValueChanged() {
    super.onValueChanged();
    if (this.isShowingModal) {
      if (this.koActiveView() !== "form") {
        this.koItemsText(this.getItemsText());
      }
    }
    this.updateShowTextViewVisibility();
  }
  protected onBeforeApply() {
    if (this.koActiveView() !== "form") {
      this.updateItems(this.koItemsText());
    }
    super.onBeforeApply();
  }
  protected onListDetailViewChanged() {
    super.onListDetailViewChanged();
    this.updateShowTextViewVisibility();
  }
  protected updateItems(text: string) {
    var items = [];
    if (text) {
      var properties = this.getProperties();
      var texts = text.split("\n");
      for (var i = 0; i < texts.length; i++) {
        if (!texts[i]) continue;
        var elements = texts[i].split(Survey.ItemValue.Separator);
        var valueItem = new Survey.ItemValue("");
        var item: any = {};
        properties.forEach((p, i) => {
          valueItem[p.name] = elements[i];
          item[p.name] = elements[i];
        });
        item.text = valueItem.hasText ? valueItem.text : "";
        items.push(item);
      }
    }
    this.koItems(this.getItemsFromValue(items));
  }
  protected getItemsText(): string {
    return this.koItems()
      .filter(item => !item.cells[0].hasError)
      .map(item =>
        item.cells
          .map(cell => cell.value || "")
          .join(Survey.ItemValue.Separator)
          .replace(/\|$/, "")
      )
      .join("\n");
  }
  private updateShowTextViewVisibility() {
    if (!this.koShowTextView) return;
    if (!this.optionsShowTextView || this.columns.length == 0) {
      this.koShowTextView(false);
      return;
    }

    this.koShowTextView(!this.hasVisibleIf());
  }
  private hasVisibleIf(): boolean {
    var items = this.koItems();
    for (var i = 0; i < items.length; i++) {
      if (items[i].item.visibleIf) return true;
    }
    return false;
  }
}

export class SurveyPropertyItemValuesEditorColumn {
  constructor(public property: Survey.JsonObjectProperty) {}
  public get text(): string {
    var text = editorLocalization.getString("pe." + this.property.name);
    return text ? text : this.property.name;
  }
}

export class SurveyPropertyItemValuesEditorItem extends SurveyNestedPropertyEditorItem {
  private cellsValue: Array<SurveyPropertyItemValuesEditorCell> = [];
  constructor(
    public item: Survey.ItemValue,
    public columns: Array<SurveyPropertyItemValuesEditorColumn>,
    private className: string = ""
  ) {
    super();
    for (var i = 0; i < columns.length; i++) {
      this.cellsValue.push(
        new SurveyPropertyItemValuesEditorCell(item, columns[i])
      );
    }
  }
  protected createSurveyQuestionEditor() {
    return new SurveyQuestionEditor(this.item, null, this.className, null);
  }
  public get cells(): Array<SurveyPropertyItemValuesEditorCell> {
    return this.cellsValue;
  }
  public hasError(): boolean {
    if (super.hasError()) return true;
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
    this.objectPropertyValue.editor.isInplaceProperty = true;
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
