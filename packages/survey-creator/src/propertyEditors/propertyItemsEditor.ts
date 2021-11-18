import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyModalEditor } from "./propertyModalEditor";
import { editorLocalization } from "../editorLocalization";
import { SurveyHelper } from "../surveyHelper";

export class SurveyPropertyItemsEditor extends SurveyPropertyModalEditor {
  public onDeleteClick: any;
  public onAddClick: any;
  public onClearClick: any;
  koAllowAddRemoveItems = ko.observable(true);
  koAllowRemoveAllItems = ko.observable(true);
  koCanAddItem = ko.observable(true);
  private viewItems: Array<any> = [];

  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    self.onDeleteClick = function (item) {
      if (!self.onDeletingItem(item.obj)) return;
      self.deleteItem(item.obj);
      self.doOnChanged(self.originalValue);
    };
    self.onClearClick = function (item) {
      self.originalValue.splice(0, self.originalValue.length);
      self.doOnChanged(self.originalValue);
    };
    self.onAddClick = function () {
      self.addItem();
      self.doOnChanged(self.originalValue);
    };
  }
  private _notifyPropertyValueChanged() {
    this.options &&
      this.options.onPropertyValueChanged(
        this.property,
        this.object,
        this.originalValue
      );
  }
  public getValueText(value: any): string {
    var len = value ? value.length : 0;
    return editorLocalization.getString("pe.items")["format"](len);
  }
  public get addItemText(): string {
    var customLocStrName = "pe.addNew@" + this.property.name;
    if (editorLocalization.hasString(customLocStrName))
      return this.getLocString(customLocStrName);
    return this.getLocString("pe.addNew");
  }
  protected getCorrectedValue(value: any): any {
    if (value == null || !Array.isArray(value)) value = [];
    return super.getCorrectedValue(value);
  }
  protected createEditorOptions(): any {
    return { allowAddRemoveItems: true, allowRemoveAllItems: true };
  }
  protected onSetEditorOptions(editorOptions: any) {
    this.koAllowAddRemoveItems(editorOptions.allowAddRemoveItems);
    this.koAllowRemoveAllItems(editorOptions.allowRemoveAllItems);
  }
  protected startDragItem() {}
  protected endDragItem() {}
  public sortableOptions = {
    handle: ".svd-drag-handle",
    animation: 150,
    onStart: () => {
      this.options["undoRedoManager"].startTransaction(
        "property items editor drag drop transaction"
      );
      this.startDragItem();
    },
    onEnd: () => {
      this.options["undoRedoManager"].stopTransaction();
      this.endDragItem();
    },
    onUpdate: (evt, itemV) => {
      if (
        SurveyHelper.moveItemInArray(
          this.originalValue,
          itemV.obj,
          evt.newIndex
        )
      ) {
        // Remove sortables "unbound" element
        evt.item.parentNode.removeChild(evt.item);
      }
      return true;
    },
  };
  protected addItem() {
    this.createEditorItemCore();
  }
  protected onDeletingItem(obj: any): boolean {
    if (!this.options) return true;
    return this.options.onCollectionItemDeletingCallback(
      this.object,
      this.property,
      this.originalValue,
      obj
    );
  }
  protected deleteItem(obj: any) {
    if (this.readOnly()) return;
    var index = this.originalValue.indexOf(obj);
    if (index > -1) {
      this.originalValue.splice(index, 1);
      this.onItemDeleted(obj, index);
    }
    this.deleteViewItemIndex(obj);
    this._notifyPropertyValueChanged();
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
    let index = -1;
    for (var i = 0; i < this.viewItems.length; i++) {
      if (this.viewItems[i].obj == obj) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      this.viewItems.splice(index, 1);
      if (this.viewItems.length > 0) {
        if (index === this.viewItems.length) {
          index--;
        }
        this.viewItems[i] &&
          this.viewItems[i].focus &&
          this.viewItems[i].focus();
      }
    }
  }
  protected get isCurrentValueEmpty() {
    return this.originalValue.length == 0;
  }
  protected createEditorItemCore(item: any = null) {
    if (!item) {
      item = this.createNewItem();
      SurveyHelper.disableSelectingObj(item);
      this.originalValue.push(item);
      SurveyHelper.enableSelectingObj(item);
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
