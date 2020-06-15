import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyElementEditorContentModel } from "../questionEditors/questionEditor";

export class SurveyPropertyOneSelectedEditor extends SurveyPropertyItemsEditor {
  public selectedObjectEditor = ko.observable<SurveyElementEditorContentModel>(
    null
  );
  public koSelected = ko.observable(null);
  public koChangeCounter = ko.observable(0);
  public koAvailableClasses: any;
  private currentObjClassName: string;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    this.koAvailableClasses = ko.observableArray(this.getAvailableClasses());
    this.koSelected.subscribe(function(newValue) {
      if (!newValue) {
        newValue = null;
      } else {
        if (
          Array.isArray(self.originalValue) &&
          self.originalValue.indexOf(newValue) < 0
        ) {
          newValue = null;
        }
      }
      if (
        newValue == null &&
        Array.isArray(self.originalValue) &&
        self.originalValue.length > 0
      ) {
        self.koSelected(self.originalValue[0]);
        return;
      }
      self.selectedObjectEditor(self.createSelectedObjEditor(newValue));
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
  public getItemText(item: any, counter: any = null): any {
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
    this.koAvailableClasses(this.getAvailableClasses());
    this.selectNewItem(false);
  }
  private createSelectedObjEditor(item: any): SurveyElementEditorContentModel {
    if (!item) return null;
    var editor = new SurveyElementEditorContentModel(item, null, this.options);
    editor.onPropertyChanged = (prop: any) => {
      this.koChangeCounter(this.koChangeCounter() + 1);
    };
    this.onCreateEditor(editor);
    return editor;
  }
  protected onCreateEditor(editor: SurveyElementEditorContentModel) {}
  protected onItemDeleted(obj: any, index: number) {
    if (index >= this.originalValue.length) {
      index = this.originalValue.length - 1;
    }
    this.koSelected(index > -1 ? this.originalValue[index] : null);
  }
  private selectNewItem(isNew: boolean) {
    if (!this.koSelected || !Array.isArray(this.originalValue)) return;
    var index = this.originalValue.length - 1;
    if (!isNew) {
      var index = this.originalValue.indexOf(this.koSelected());
      if (index < 0 && this.originalValue.length > 0) {
        index = 0;
      }
    }
    var val = index > -1 ? this.originalValue[index] : null;
    if (val != this.koSelected()) {
      this.koSelected(val);
    }
  }
  protected createNewItem(): any {
    return Survey.Serializer.createClass(this.getObjClassName());
  }
}
