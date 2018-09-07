import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "./propertyEditorBase";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { editorLocalization } from "../editorLocalization";
import { SurveyObjectProperty } from "../objectProperty";
import { SurveyQuestionEditorDefinition } from "../questionEditors/questionEditorDefinition";

export class SurveyNestedPropertyEditor extends SurveyPropertyItemsEditor {
  koEditItem: any;
  koIsList: any;
  koActiveView: any;
  onEditItemClick: any;
  onCancelEditItemClick: any;
  koEditorName: any;
  private columnsValue: Array<SurveyNestedPropertyEditorColumn>;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.createColumns();
    var self = this;
    this.koEditItem = ko.observable(null);
    this.koIsList = ko.observable(true);
    this.koActiveView = ko.observable("form");
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
  public get canShowDisplayNameOnTop(): boolean {
    return false;
  }
  public get columns(): Array<SurveyNestedPropertyEditorColumn> {
    return this.columnsValue;
  }
  public beforeShow() {
    super.beforeShow();
    this.koEditItem(null);
  }
  protected createColumns() {
    var result = [];
    var properties = this.getProperties();
    for (var i = 0; i < properties.length; i++) {
      result.push(new SurveyNestedPropertyEditorColumn(properties[i]));
    }
    this.columnsValue = result;
  }
  protected getProperties(): Array<Survey.JsonObjectProperty> {
    return [];
  }
  protected getPropertiesNames(
    definitionName: string,
    defaultNames: Array<string>
  ): Array<string> {
    var res = [];
    var properties = SurveyQuestionEditorDefinition.getProperties(
      definitionName
    );
    if (properties) {
      for (var i = 0; i < properties.length; i++) {
        var prop = properties[i];
        res.push(prop.name ? prop.name : prop);
      }
    }
    if (res.length == 0) {
      res = defaultNames;
    }
    return res;
  }
  protected getPropertiesByNames(
    className: string,
    names: Array<any>
  ): Array<Survey.JsonObjectProperty> {
    var res = [];
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      name.name ? name.name : name;
      var prop = Survey.JsonObject.metaData.findProperty(className, name);
      if (prop && prop.visible) {
        res.push(prop);
      }
    }
    return res;
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
    return super.checkForErrors() || result;
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
  protected options: ISurveyObjectEditorOptions;
  private cellsValue: Array<SurveyNestedPropertyEditorEditorCell> = [];
  private itemEditorValue: SurveyQuestionEditor;
  constructor(
    public obj: any,
    public columns: Array<SurveyNestedPropertyEditorColumn>,
    options: ISurveyObjectEditorOptions
  ) {
    this.options = options;
    for (var i = 0; i < columns.length; i++) {
      this.cellsValue.push(
        new SurveyNestedPropertyEditorEditorCell(
          obj,
          columns[i].property,
          this.options
        )
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
  private options: ISurveyObjectEditorOptions;
  constructor(
    public obj: any,
    public property: Survey.JsonObjectProperty,
    options: ISurveyObjectEditorOptions = null
  ) {
    this.options = options;
    var self = this;
    var propEvent = (property: SurveyObjectProperty, newValue: any) => {
      self.value = newValue;
    };
    this.objectPropertyValue = new SurveyObjectProperty(
      this.property,
      propEvent,
      this.options
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
    this.obj[this.property.name] = val;
  }
  public get hasError(): boolean {
    return this.editor.hasError();
  }
}
