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
import { SurveyQuestionEditorDefinition } from "../questionEditors/questionEditorDefinition";

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
  protected getProperties(): Array<Survey.JsonObjectProperty> {
    var names = this.getPropertiesNames("matrixdropdowncolumn", [
      "isRequired",
      "cellType",
      "name",
      "title"
    ]);
    return this.getPropertiesByNames("matrixdropdowncolumn", names);
  }
}

export class SurveyPropertyMatrixDropdownColumnsItem extends SurveyNestedPropertyEditorItem {
  constructor(
    public column: Survey.MatrixDropdownColumn,
    public columns: Array<SurveyNestedPropertyEditorColumn>,
    options: ISurveyObjectEditorOptions = null
  ) {
    super(column, columns, options);
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
