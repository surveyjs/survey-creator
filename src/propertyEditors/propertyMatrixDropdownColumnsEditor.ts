import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyItemsEditor } from "./propertyItemsEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { SurveyPropertyItemValuesEditor } from "./propertyItemValuesEditor";
import { editorLocalization } from "../editorLocalization";
import {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorItem,
  SurveyNestedPropertyEditorColumn,
  SurveyNestedPropertyEditorEditorCell
} from "./propertyNestedPropertyEditor";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyDropdownColumnsEditor extends SurveyNestedPropertyEditor {
  private columnsValue: Array<SurveyNestedPropertyEditorColumn>;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.columnsValue = this.createColumns();
  }
  public get editorType(): string {
    return "matrixdropdowncolumns";
  }
  public get columns(): Array<SurveyNestedPropertyEditorColumn> {
    return this.columnsValue;
  }
  protected getEditorName(): string {
    if (!this.koEditItem()) return "";
    return editorLocalization
      .getString("pe.columnEdit")
      ["format"](this.koEditItem().column.name);
  }
  protected createNewEditorItem(): any {
    var newColumn = this.createEditorItemCore(null);
    if (this.options) {
      this.options.onMatrixDropdownColumnAddedCallback(newColumn);
    }
    return new SurveyPropertyMatrixDropdownColumnsItem(
      newColumn,
      this.columns,
      this.options
    );
  }
  protected createEditorItem(item: any) {
    var newColumn = this.createEditorItemCore(item);
    return new SurveyPropertyMatrixDropdownColumnsItem(
      newColumn,
      this.columns,
      this.options
    );
  }
  protected createItemFromEditorItem(editorItem: any) {
    return editorItem.column;
  }
  protected createEditorItemCore(item: any): Survey.MatrixDropdownColumn {
    var newColumn = new Survey.MatrixDropdownColumn("");
    if (item) {
      var json = new Survey.JsonObject().toJsonObject(item);
      new Survey.JsonObject().toObject(json, newColumn);
    }
    newColumn.colOwner = this.object;
    return newColumn;
  }
  protected createColumns(): Array<SurveyNestedPropertyEditorColumn> {
    var result = [];
    var names = ["isRequired", "cellType", "name", "title"];
    for (var i = 0; i < names.length; i++) {
      var prop = Survey.JsonObject.metaData.findProperty(
        "matrixdropdowncolumn",
        names[i]
      );
      if (prop) {
        result.push(new SurveyNestedPropertyEditorColumn(prop));
      }
    }
    return result;
  }
}

export class SurveyPropertyMatrixDropdownColumnsItem extends SurveyNestedPropertyEditorItem {
  constructor(
    public column: Survey.MatrixDropdownColumn,
    public columns: Array<SurveyNestedPropertyEditorColumn>,
    public options = null
  ) {
    super(column, columns);
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
