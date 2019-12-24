import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyElementEditorContent } from "../questionEditors/questionEditor";

export class SurveyPropertyOneSelectedEditor extends SurveyPropertyItemsEditor {
  public selectedObjectEditor = ko.observable<SurveyElementEditorContent>(null);
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
          Array.isArray(self.origionalValue) &&
          self.origionalValue.indexOf(newValue) < 0
        ) {
          newValue = null;
        }
      }
      if (
        newValue == null &&
        Array.isArray(self.origionalValue) &&
        self.origionalValue.length > 0
      ) {
        self.koSelected(self.origionalValue[0]);
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
  private createSelectedObjEditor(item: any): SurveyElementEditorContent {
    if (!item) return null;
    var editor = new SurveyElementEditorContent(item, null, this.options);
    editor.onPropertyChanged = (prop: any) => {
      this.koChangeCounter(this.koChangeCounter() + 1);
    };
    this.onCreateEditor(editor);
    return editor;
  }
  protected onCreateEditor(editor: SurveyElementEditorContent) {}
  private selectNewItem(isNew: boolean) {
    if (!this.koSelected || !Array.isArray(this.origionalValue)) return;
    var index = this.origionalValue.length - 1;
    if (!isNew) {
      var index = this.origionalValue.indexOf(this.koSelected());
      if (index < 0 && this.origionalValue.length > 0) {
        index = 0;
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
