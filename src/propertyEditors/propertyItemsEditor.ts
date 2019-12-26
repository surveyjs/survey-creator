import * as ko from "knockout";
import * as Survey from "survey-knockout";
import Sortable from "sortablejs";
import { SurveyPropertyModalEditor } from "./propertyModalEditor";
import { editorLocalization } from "../editorLocalization";

export class SurveyPropertyItemsEditor extends SurveyPropertyModalEditor {
  public onDeleteClick: any;
  public onAddClick: any;
  public onClearClick: any;
  koAllowAddRemoveItems: any;
  private viewItems: Array<any> = [];

  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koAllowAddRemoveItems = ko.observable(true);
    var self = this;
    self.onDeleteClick = function(item) {
      self.deleteItem(item.obj);
    };
    self.onClearClick = function(item) {
      self.origionalValue.splice(0, self.origionalValue.length);
    };
    self.onAddClick = function() {
      self.addItem();
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
  protected addItem() {
    this.createEditorItemCore();
  }
  protected deleteItem(obj: any) {
    if (this.readOnly()) return;
    var index = this.origionalValue.indexOf(obj);
    if (index > -1) {
      this.origionalValue.splice(index, 1);
      this.onItemDeleted(obj, index);
    }
    this.deleteViewItemIndex(obj);
  }
  protected onItemDeleted(obj: any, index: number) {}
  public hasError(): boolean {
    for (var i = 0; i < this.viewItems.length; i++) {
      var item = this.viewItems[i];
      if (!!item.hasError && !!item.hasError()) return true;
    }
    return super.hasError();
  }
  public setup() {
    super.setup();
    this.updateValue();
    this.viewItems = [];
  }
  public createItemViewModel(obj: any): any {
    this.deleteViewItemIndex(obj);
    var res = this.createEditorItem(obj);
    this.viewItems.push(res);
    return res;
  }
  private deleteViewItemIndex(obj: any) {
    for (var i = 0; i < this.viewItems.length; i++) {
      if (this.viewItems[i].obj == obj) {
        this.viewItems.splice(i, 1);
        return;
      }
    }
  }
  protected get isCurrentValueEmpty() {
    return this.origionalValue.length == 0;
  }
  protected createEditorItemCore(item: any = null) {
    if (!item) {
      item = this.createNewItem();
      this.origionalValue.push(item);
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
}
