import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { SurveyPropertyItemValuesEditor } from "./propertyItemValuesEditor";
import { editorLocalization } from "../editorLocalization";
import { SurveyObjectProperty } from "../objectProperty";

export class SurveyNestedPropertyEditor extends SurveyPropertyItemsEditor {
  koEditItem: any;
  koIsList: any;
  onEditItemClick: any;
  onCancelEditItemClick: any;
  koEditorName: any;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    this.koEditItem = ko.observable(null);
    this.koIsList = ko.observable(true);
    this.koEditItem.subscribe(function(newValue) {
      self.koIsList(self.koEditItem() == null);
      self.onListDetailViewChanged();
    });
    this.onEditItemClick = function(item) {
      self.koEditItem(item);
    };
    this.onCancelEditItemClick = function() {
      var editItem = self.koEditItem();
      if (editItem.itemEditor && editItem.itemEditor.hasError()) return;
      self.koEditItem(null);
    };
    this.koEditorName = ko.computed(function() {
      return self.getEditorName();
    });
  }
  public beforeShow() {
    super.beforeShow();
    this.koEditItem(null);
  }
  protected getEditorName(): string {
    return "";
  }
  protected onListDetailViewChanged() {}
  protected checkForErrors(): boolean {
    var result = false;
    for (var i = 0; i < this.koItems().length; i++) {
      result = result || this.koItems()[i].hasError();
    }
    return result;
  }
  protected onBeforeApply() {
    var internalItems = this.koItems();
    for (var i = 0; i < internalItems.length; i++) {
      internalItems[i].apply();
    }
    super.onBeforeApply();
  }
}

export class SurveyNestedPropertyEditorItem {
  private cellsValue: Array<SurveyNestedPropertyEditorEditorCell> = [];
  private itemEditorValue: SurveyQuestionEditor;
  constructor(
    public obj: any,
    public columns: Array<SurveyNestedPropertyEditorColumn>
  ) {
    for (var i = 0; i < columns.length; i++) {
      this.cellsValue.push(
        new SurveyNestedPropertyEditorEditorCell(obj, columns[i].property)
      );
    }
  }
  public get itemEditor(): SurveyQuestionEditor {
    if (!this.itemEditorValue)
      this.itemEditorValue = this.createSurveyQuestionEditor();
    return this.itemEditorValue;
  }
  public get cells(): Array<SurveyNestedPropertyEditorEditorCell> {
    return this.cellsValue;
  }
  public hasError(): boolean {
    if (this.itemEditorValue && this.itemEditorValue.hasError()) return true;
    var res = false;
    for (var i = 0; i < this.cells.length; i++) {
      res = this.cells[i].hasError || res;
    }
    return res;
  }
  protected resetSurveyQuestionEditor() {
    this.itemEditorValue = null;
  }
  protected createSurveyQuestionEditor() {
    return null;
  }
  public apply() {
    if (this.itemEditorValue) this.itemEditorValue.apply();
  }
}

export class SurveyNestedPropertyEditorColumn {
  constructor(public property: Survey.JsonObjectProperty) {}
  public get text(): string {
    var text = editorLocalization.hasString("pel." + this.property.name)
      ? this.getLocText("pel.")
      : this.getLocText("pe.");
    return text ? text : this.property.name;
  }
  private getLocText(prefix: string) {
    return editorLocalization.getString(prefix + this.property.name);
  }
}

export class SurveyNestedPropertyEditorEditorCell {
  private objectPropertyValue: SurveyObjectProperty;
  constructor(public obj: any, public property: Survey.JsonObjectProperty) {
    var self = this;
    var propEvent = (property: SurveyObjectProperty, newValue: any) => {
      self.value = newValue;
    };
    this.objectPropertyValue = new SurveyObjectProperty(
      this.property,
      propEvent
    );
    this.objectPropertyValue.editor.isInplaceProperty = true;
    this.objectProperty.object = obj;
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
    return this.property.getValue(this.obj);
  }
  public set value(val: any) {
    this.property.setValue(this.obj, val, null);
  }
  public get hasError(): boolean {
    return this.editor.hasError();
  }
}
