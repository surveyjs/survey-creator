import * as ko from 'knockout'
import * as Survey from 'survey-knockout'
import { SurveyPropertyModalEditor } from './propertyModalEditor'
import { editorLocalization } from '../editorLocalization'

export class SurveyPropertyItemsEditor extends SurveyPropertyModalEditor {
  public koItems: any
  public onDeleteClick: any
  public onMoveUpClick: any
  public onMoveDownClick: any
  public onAddClick: any
  public onClearClick: any
  koAllowAddRemoveItems: any

  constructor(property: Survey.JsonObjectProperty) {
    super(property)
    this.koItems = ko.observableArray()
    this.editingValue = []
    this.koAllowAddRemoveItems = ko.observable(true)
    var self = this
    self.onDeleteClick = function(item) {
      self.koItems.remove(item)
    }
    self.onClearClick = function(item) {
      self.koItems.removeAll()
    }
    self.onAddClick = function() {
      self.AddItem()
    }
    self.onMoveUpClick = function(item) {
      self.moveUp(item)
    }
    self.onMoveDownClick = function(item) {
      self.moveDown(item)
    }
  }
  public getValueText(value: any): string {
    var len = value ? value.length : 0
    return editorLocalization.getString('pe.items')['format'](len)
  }
  protected getCorrectedValue(value: any): any {
    if (value == null || !Array.isArray(value)) value = []
    return value
  }
  protected createEditorOptions(): any {
    return { allowAddRemoveItems: true }
  }
  protected onSetEditorOptions(editorOptions: any) {
    this.koAllowAddRemoveItems(editorOptions.allowAddRemoveItems)
  }

  protected AddItem() {
    this.koItems.push(this.createNewEditorItem())
  }
  protected moveUp(item: any) {
    var arr = this.koItems()
    var index = arr.indexOf(item)
    if (index < 1) return
    arr[index] = arr[index - 1]
    arr[index - 1] = item
    this.koItems(arr)
  }
  protected moveDown(item: any) {
    var arr = this.koItems()
    var index = arr.indexOf(item)
    if (index < 0 || index >= arr.length - 1) return
    arr[index] = arr[index + 1]
    arr[index + 1] = item
    this.koItems(arr)
  }
  protected setupItems() {
    this.koItems(this.getItemsFromValue())
  }
  protected onValueChanged() {
    if (this.isShowingModal) {
      this.setupItems()
    }
  }
  public beforeShowModal() {
    super.beforeShowModal()
    this.setupItems()
  }
  protected getItemsFromValue(value: any = null): Array<any> {
    var items = []
    if (!value) value = this.editingValue
    for (var i = 0; i < value.length; i++) {
      items.push(this.createEditorItem(value[i]))
    }
    return items
  }
  protected onBeforeApply() {
    var items = []
    var internalItems = this.koItems()
    for (var i = 0; i < internalItems.length; i++) {
      items.push(this.createItemFromEditorItem(internalItems[i]))
    }
    this.setValueCore(items)
  }
  protected createNewEditorItem(): any {
    throw "Override 'createNewEditorItem' method"
  }
  protected createEditorItem(item: any) {
    return item
  }
  protected createItemFromEditorItem(editorItem: any) {
    return editorItem
  }
}
