import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions,
} from "./propertyEditorBase";
import {
  SurveyQuestionEditor,
  SurveyElementEditorContentModel,
  SurveyQuestionProperties,
} from "../questionEditors/questionEditor";
import { editorLocalization } from "../editorLocalization";
import { SurveyObjectProperty } from "../objectProperty";

export class SurveyNestedPropertyEditor extends SurveyPropertyItemsEditor {
  koEditItem: any;
  koIsList: any;
  koActiveView: any;
  onEditItemClick: any;
  onReturnToListClick: any;
  koEditorName: any;
  koShowHeader: any;
  private koColumnsValue = ko.observable<
    Array<SurveyNestedPropertyEditorColumn>
  >([]);
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    var self = this;
    this.koShowHeader = ko.observable(true);
    this.koEditItem = ko.observable(null);
    this.koIsList = ko.observable(true);
    this.koActiveView = ko.observable("form");
    this.koEditItem.subscribe(function (newValue) {
      self.koIsList(self.koEditItem() == null);
      self.onListDetailViewChanged();
    });
    this.onEditItemClick = function (item) {
      self.koEditItem(item);
    };
    this.onReturnToListClick = function () {
      var editItem = self.koEditItem();
      if (editItem.itemEditor && editItem.itemEditor.hasError()) return;
      editItem.hideItemEditor();
      self.koEditItem(null);
    };
    this.koEditorName = ko.computed(function () {
      return self.getEditorName();
    });
  }

  public get columns(): Array<SurveyNestedPropertyEditorColumn> {
    return this.koColumnsValue();
  }
  public beforeShowCore() {
    super.beforeShowCore();
    this.createColumns();
    this.koShowHeader(this.canShowHeader());
    this.koEditItem(null);
  }
  public createColumns() {
    var result = [];
    var properties = this.getColumnsProperties();
    for (var i = 0; i < properties.length; i++) {
      result.push(new SurveyNestedPropertyEditorColumn(properties[i]));
    }
    this.koColumnsValue(result);
  }
  private canShowHeader(): boolean {
    return this.koColumnsValue().length > 1;
  }
  protected getColumnsProperties(): Array<Survey.JsonObjectProperty> {
    return [];
  }
  protected getPropertiesNames(
    className: string,
    defaultNames: Array<string>
  ): Array<string> {
    var res = [];
    var properties = this.getDefinedListProperties(className);
    for (var i = 0; i < properties.length; i++) {
      res.push(properties[i].name);
    }
    if (res.length == 0) {
      res = defaultNames;
    }
    return res;
  }
  protected getDefinedListProperties(className: string = null): Array<any> {
    if (!this.property) return [];
    var obj = Survey.Serializer.createClass(this.property.className);
    if (!obj) return [];
    var props = new SurveyQuestionProperties(
      obj,
      this.options,
      className,
      "list",
      this.object,
      this.property
    );
    if (props.getTabs().length == 0) return [];
    return props.getTabs()[0].properties;
  }
  protected getDefaultListProperties(): Array<Survey.JsonObjectProperty> {
    var properties = Survey.Serializer.getProperties(this.property.className);
    var res = [];
    for (var i = 0; i < properties.length; i++) {
      if (!this.isPropertyShownInList(properties[i])) continue;
      res.push(properties[i]);
    }
    return res;
  }
  protected isPropertyShownInList(
    property: Survey.JsonObjectProperty
  ): boolean {
    return property.visible && property.showMode !== "form";
  }
  protected getPropertiesByNames(
    className: string,
    names: Array<any>
  ): Array<Survey.JsonObjectProperty> {
    var res = [];
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      name.name ? name.name : name;
      var prop = Survey.Serializer.findProperty(className, name);
      if (prop && prop.visible) {
        res.push(prop);
      }
    }
    return res;
  }
  protected getEditorName(): string {
    return "";
  }
  protected getItemClassName(item: any): string {
    return "";
  }
  protected canDeleteItem(item: any): boolean {
    return (
      !this.options ||
      this.options.onCanDeleteItemCallback(this.object, item, true)
    );
  }
  protected createEditorItem(item: any): SurveyNestedPropertyEditorItem {
    return new SurveyNestedPropertyEditorItem(
      item,
      () => this.columns,
      this.options,
      (item) => this.getItemClassName(item),
      this.canDeleteItem(item),
      this.originalValue,
      this.readOnly(),
      this.object,
      this.property
    );
  }
  protected onListDetailViewChanged() {}
}

export class SurveyNestedPropertyEditorItem {
  public static dragIconName = "icon-drag-item";
  public static deleteIconName = "icon-delete-cross";
  get dragIcon() {
    return SurveyNestedPropertyEditorItem.dragIconName;
  }
  get deleteIcon() {
    return SurveyNestedPropertyEditorItem.deleteIconName;
  }
  public koHasDetails: any;
  koCanDeleteItem: any;
  protected options: ISurveyObjectEditorOptions;
  private koCellsValue = ko.observableArray<SurveyNestedPropertyEditorEditorCell>();
  private itemEditorValue: SurveyElementEditorContentModel;
  constructor(
    public obj: any,
    private getColumns: () => Array<SurveyNestedPropertyEditorColumn>,
    options: ISurveyObjectEditorOptions,
    private getItemClassName: (item: any) => string = null,
    canDeleteItem: boolean = true,
    private parentList: Array<Survey.Base> = null,
    private isReadOnly: boolean = false,
    private parentObj: Survey.Base = undefined,
    private parentProperty: Survey.JsonObjectProperty = undefined
  ) {
    this.koCanDeleteItem = ko.observable(canDeleteItem);
    this.options = options;
    this.koHasDetails = ko.observable(this.hasDetailsProperties());
    ko.computed(() => {
      var columns = this.getColumns();
      this.koCellsValue([]);
      for (var i = 0; i < columns.length; i++) {
        this.koCellsValue.push(
          new SurveyNestedPropertyEditorEditorCell(
            obj,
            columns[i].property,
            this.options,
            this.parentList,
            this.isReadOnly,
            this.parentObj,
            this.parentProperty
          )
        );
      }
    });
  }
  protected getClassName(): string {
    if (!this.getItemClassName) return "";
    return this.getItemClassName(this.obj);
  }
  public get columns(): Array<SurveyNestedPropertyEditorColumn> {
    return this.getColumns();
  }
  protected hasDetailsProperties(): boolean {
    var properties = new SurveyQuestionProperties(
      this.obj,
      this.options,
      this.getClassName()
    );
    return !properties.isEmpty;
  }
  public hideItemEditor() {
    this.itemEditorValue = null;
    this.updateValues();
  }
  public get itemEditor(): SurveyElementEditorContentModel {
    if (!this.itemEditorValue)
      this.itemEditorValue = this.createSurveyQuestionEditor();
    return this.itemEditorValue;
  }
  public get cells(): Array<SurveyNestedPropertyEditorEditorCell> {
    return this.koCellsValue();
  }
  public hasError(): boolean {
    if (this.itemEditorValue && this.itemEditorValue.hasError()) return true;
    var res = false;
    for (var i = 0; i < this.cells.length; i++) {
      res = this.cells[i].hasError || res;
    }
    return res;
  }
  protected updateValues() {
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].updateValue();
    }
  }
  protected createSurveyQuestionEditor() {
    var res = new SurveyElementEditorContentModel(
      this.obj,
      this.getClassName(),
      this.options,
      true,
      this.isReadOnly
    );
    res.setParentList(this.parentList);
    return res;
  }
  focus() {
    setTimeout(() => {
      var firstCell = this.cells[0];
      firstCell && firstCell.editor.focus();
    }, 10);
  }
}

export class SurveyNestedPropertyEditorColumn {
  constructor(public property: Survey.JsonObjectProperty) {}
  public get text(): string {
    var text = editorLocalization.hasString("pel." + this.property.name)
      ? editorLocalization.getString("pel." + this.property.name)
      : editorLocalization.getPropertyNameInEditor(
        this.property.name,
        this.property.displayName
      );
    return text ? text : this.property.name;
  }
}

export class SurveyNestedPropertyEditorEditorCell {
  private objectPropertyValue: SurveyObjectProperty;
  private options: ISurveyObjectEditorOptions;
  constructor(
    public obj: any,
    public property: Survey.JsonObjectProperty,
    options: ISurveyObjectEditorOptions = null,
    listObj: Array<Survey.Base> = null,
    parentReadOnly: boolean = false,
    private parentObj: Survey.Base = undefined,
    private parentProperty: Survey.JsonObjectProperty = undefined
  ) {
    this.options = options;
    this.objectPropertyValue = new SurveyObjectProperty(
      this.property,
      this.options,
      true
    );
    let editor = this.objectPropertyValue.editor;
    editor.isInplaceProperty = true;
    editor.parentList = listObj;
    editor.parentReadOnly = parentReadOnly;
    editor.parentObj = this.parentObj;
    editor.parentProperty = this.parentProperty;
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
    return this.koValue();
  }
  public set value(val: any) {
    this.koValue(val);
  }
  public get hasError(): boolean {
    return this.editor.hasError();
  }
  public updateValue() {
    this.editor.updateValue();
  }
}
