import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { SurveyPropertyItemValuesEditor } from "./propertyItemValuesEditor";
import { editorLocalization } from "../editorLocalization";
import {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem
} from "./propertyNestedPropertyEditor";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyDropdownColumnsEditor extends SurveyNestedPropertyEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "matrixdropdowncolumns";
  }
  protected createNewEditorItem(): any {
    var newColumn = new Survey.MatrixDropdownColumn("");
    if (this.options) {
      this.options.onMatrixDropdownColumnAddedCallback(newColumn);
    }
    //newColumn.colOwner = TODO set colOwner.
    return new SurveyPropertyMatrixDropdownColumnsItem(newColumn, this.options);
  }
  protected createEditorItem(item: any) {
    return new SurveyPropertyMatrixDropdownColumnsItem(item, this.options);
  }
  protected createItemFromEditorItem(editorItem: any) {
    return editorItem.column;
  }
}

export class SurveyPropertyMatrixDropdownColumnsItem extends SurveyNestedPropertyEditorItem {
  koName: any;
  koTitle: any;
  koCellType: any;
  koIsRequired: any;
  koEditorName: any;
  koHasError: any;
  koCanEdit: any;
  public onShowChoicesClick: any;
  public cellTypeChoices: Array<any>;
  constructor(
    public column: Survey.MatrixDropdownColumn,
    public options = null
  ) {
    super();
    this.cellTypeChoices = this.getPropertyChoices();
    this.koName = ko.observable(column.name);
    this.koCellType = ko.observable(column.cellType);
    this.koTitle = ko.observable(
      column.name === column.title ? "" : column.title
    );
    this.koIsRequired = ko.observable(this.column.isRequired);
    this.koHasError = ko.observable(false);

    var self = this;
    this.koCanEdit = ko.computed(function() {
      return self.koCellType() != "default";
    });
    this.koEditorName = ko.computed(function() {
      return editorLocalization
        .getString("pe.columnEdit")
        ["format"](self.koName());
    });
    this.koCellType.subscribe(function(newValue) {
      self.resetSurveyQuestionEditor();
    });
  }
  protected createSurveyQuestionEditor() {
    this.column.cellType = this.koCellType();
    return new SurveyQuestionEditor(
      this.column,
      null,
      "matrixdropdowncolumn@" + this.koCellType(),
      this.options
    );
  }
  public hasError(): boolean {
    if (super.hasError()) return true;
    this.koHasError(!this.koName());
    return this.koHasError();
  }
  public apply() {
    super.apply();
    this.column.name = this.koName();
    this.column.title = this.koTitle();
    this.column.cellType = this.koCellType();
    this.column.isRequired = this.koIsRequired();
  }
  private getPropertyChoices(): Array<any> {
    var property = Survey.JsonObject.metaData.findProperty(
      "matrixdropdowncolumn",
      "cellType"
    );
    return property ? property.choices : [];
  }
}

SurveyPropertyEditorFactory.registerEditor("matrixdropdowncolumns", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyDropdownColumnsEditor(property);
});
