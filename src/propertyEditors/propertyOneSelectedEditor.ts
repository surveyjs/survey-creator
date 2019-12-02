import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyElementEditorContent } from "../questionEditors/questionEditor";

export class SurveyPropertyOneSelectedEditor extends SurveyPropertyItemsEditor {
  public selectedObjectEditor = ko.observable<SurveyElementEditorContent>(null);
  public koSelected = ko.observable(null);
  public koAvailableClasses: any;
  private currentObjClassName: string;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    this.koAvailableClasses = ko.observableArray(this.getAvailableClasses());
    this.koSelected.subscribe(function(newValue) {
      var editor = !!newValue
        ? new SurveyElementEditorContent(newValue, null, self.options)
        : null;
      self.selectedObjectEditor(editor);
    });
    this.onDeleteClick = function() {
      self.deleteItem(self.koSelected());
    };
    this.onAddClick = function(item: any) {
      self.addNewItem(!!item ? item.value : null);
    };
  }
  public get editorTypeTemplate(): string {
    return "oneselected";
  }
  public get editorType(): string {
    return "oneselected";
  }
  public getItemText(item: any): any {
    return item.getType();
  }
  protected getObjClassName() {
    return this.currentObjClassName;
  }
  protected getAvailableClasses(): Array<any> {
    return [];
  }
  protected addNewItem(className: string) {
    this.currentObjClassName = className;
    this.addItem();
    this.selectNewItem(true);
  }
  protected onValueChanged() {
    super.onValueChanged();
    this.selectNewItem(false);
  }
  private selectNewItem(isNew: boolean) {
    if (!this.koSelected || !Array.isArray(this.origionalValue)) return;
    var index = this.origionalValue.length - 1;
    if (!isNew) {
      var index = this.origionalValue.indexOf(this.koSelected());
      if (index < 0) {
        index = this.origionalValue.length - 1;
      }
    }
    var val = index > -1 ? this.origionalValue[index] : null;
    if (val != this.koSelected()) {
      this.koSelected(val);
    }
  }
  protected createEditorItem(item: Survey.Base) {
    return item;
  }
  protected createNewItem(): any {
    return Survey.Serializer.createClass(this.getObjClassName());
  }
}
