import * as ko from "knockout";
import * as Survey from "survey-knockout";
import Sortable from "sortablejs";
import { SurveyPropertyModalEditor } from "./propertyModalEditor";
import { editorLocalization } from "../editorLocalization";

export class SurveyPropertyItemsEditor extends SurveyPropertyModalEditor {
  public koItems: any;
  public onDeleteClick: any;
  public onAddClick: any;
  public onClearClick: any;
  koAllowAddRemoveItems: any;

  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koItems = ko.observableArray();
    this.editingValue = [];
    this.koAllowAddRemoveItems = ko.observable(true);
    var self = this;
    self.onDeleteClick = function(item) {
      self.koItems.remove(item);
    };
    self.onClearClick = function(item) {
      self.koItems.removeAll();
    };
    self.onAddClick = function() {
      self.AddItem();
    };
  }
  public getValueText(value: any): string {
    var len = value ? value.length : 0;
    return editorLocalization.getString("pe.items")["format"](len);
  }
  protected getCorrectedValue(value: any): any {
    if (value == null || !Array.isArray(value)) value = [];
    return super.getCorrectedValue(value);
  }
  protected createEditorOptions(): any {
    return { allowAddRemoveItems: true };
  }
  protected onSetEditorOptions(editorOptions: any) {
    this.koAllowAddRemoveItems(editorOptions.allowAddRemoveItems);
  }
  public sortableOptions = {
    handle: ".svd-drag-handle",
    animation: 150
  };
  protected AddItem() {
    this.koItems.push(this.createEditorItemCore());
  }

  protected setupItems() {
    this.koItems(this.getItemsFromValue(this.editingValue));
  }
  protected onValueChanged() {
    if (this.isBeforeShowCalled) {
      this.setupItems();
    }
  }
  public setup() {
    super.setup();
    this.updateValue();
  }
  protected getItemsFromValue(value: any = null): Array<any> {
    var items = [];
    if (!value) value = this.editingValue;
    for (var i = 0; i < value.length; i++) {
      items.push(this.createEditorItemCore(value[i]));
    }
    return items;
  }
  protected get isCurrentValueEmpty() {
    return this.koItems().length == 0;
  }
  protected onBeforeApply() {
    var items = [];
    var internalItems = this.koItems();
    for (var i = 0; i < internalItems.length; i++) {
      items.push(this.createItemFromEditorItem(internalItems[i]));
    }
    this.setValueCore(items);
  }
  protected createEditorItemCore(item: any = null) {
    if (!item) {
      item = this.createNewItem();
    }
    var editorItem = this.createEditorItem(item);
    if (!!editorItem.onCreated) {
      editorItem.onCreated();
    }
    return editorItem;
  }
  protected createNewItem(): any {
    throw "Override 'createNewItem' method";
  }
  protected createEditorItem(item: any) {
    return item;
  }
  protected createItemFromEditorItem(editorItem: any) {
    return editorItem;
  }
}
