import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "./propertyEditorBase";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { editorLocalization } from "../editorLocalization";
import {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem,
  SurveyNestedPropertyEditorColumn
} from "./propertyNestedPropertyEditor";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { getNextValue } from "../utils/utils";

export class SurveyPropertyDropdownColumnsEditor extends SurveyNestedPropertyEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "matrixdropdowncolumns";
  }
  protected getEditorName(): string {
    if (!this.koEditItem()) return "";
    return editorLocalization
      .getString("pe.columnEdit")
      ["format"](this.koEditItem().column.name);
  }
  protected createNewEditorItem(): any {
    var newColumn = this.createEditorItemCore(null);
    newColumn.name = getNextValue("", this.getColumnNames());
    var columns = [];
    for (var i = 0; i < this.koItems().length; i++) {
      columns.push(this.koItems()[i].column);
    }
    columns.push(newColumn);
    if (this.options) {
      this.options.onMatrixDropdownColumnAddedCallback(
        this.object,
        newColumn,
        columns
      );
    }
    return new SurveyPropertyMatrixDropdownColumnsItem(
      newColumn,
      () => this.columns,
      this.options
    );
  }
  protected createEditorItem(item: any) {
    var newColumn = this.createEditorItemCore(item);
    return new SurveyPropertyMatrixDropdownColumnsItem(
      newColumn,
      () => this.columns,
      this.options
    );
  }
  protected createItemFromEditorItem(editorItem: any) {
    var newColumn = new Survey.MatrixDropdownColumn("");
    var json = new Survey.JsonObject().toJsonObject(editorItem.column);
    new Survey.JsonObject().toObject(json, newColumn);
    return newColumn;
  }
  protected createEditorItemCore(item: any): Survey.MatrixDropdownColumn {
    var newColumn = new Survey.MatrixDropdownColumn("");
    newColumn["object"] = this.object;
    newColumn.colOwner = this.object;
    if (item) {
      var json = new Survey.JsonObject().toJsonObject(item);
      new Survey.JsonObject().toObject(json, newColumn);
    }
    return newColumn;
  }
  protected getProperties(): Array<Survey.JsonObjectProperty> {
    var names = this.getPropertiesNames("matrixdropdowncolumn", [
      "isRequired",
      "cellType",
      "name",
      "title"
    ]);
    return this.getPropertiesByNames("matrixdropdowncolumn", names);
  }
  private getColumnNames(): Array<string> {
    var res = [];
    var items = this.koItems();
    for (var i = 0; i < items.length; i++) {
      var name = items[i].column.name;
      if (!!name) {
        res.push(name);
      }
    }
    return res;
  }
}

export class SurveyPropertyMatrixDropdownColumnsItem extends SurveyNestedPropertyEditorItem {
  constructor(
    public column: Survey.MatrixDropdownColumn,
    getColumns: () => Array<SurveyNestedPropertyEditorColumn>,
    options: ISurveyObjectEditorOptions = null
  ) {
    super(column, getColumns, options);
    var self = this;
    column.registerFunctionOnPropertyValueChanged(
      "cellType",
      function() {
        self.resetSurveyQuestionEditor();
      },
      "colEdit"
    );
  }
  protected createSurveyQuestionEditor() {
    return new SurveyQuestionEditor(
      this.column,
      null,
      "matrixdropdowncolumn@" + this.column.cellType,
      this.options
    );
  }
}

SurveyPropertyEditorFactory.registerEditor("matrixdropdowncolumns", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyDropdownColumnsEditor(property);
});
