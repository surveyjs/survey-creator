import * as ko from "knockout";
import * as Survey from "survey-knockout";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "./propertyEditorBase";
import { SurveyQuestionEditor } from "../questionEditors/questionEditor";
import { editorLocalization } from "../editorLocalization";
import { SurveyNestedPropertyEditor } from "./propertyNestedPropertyEditor";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";
import { getNextValue } from "../utils/utils";

export class SurveyPropertyDropdownColumnsEditor extends SurveyNestedPropertyEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "matrixdropdowncolumns";
  }
  public get editorTypeTemplate(): string {
    return "nesteditems";
  }
  protected getEditorName(): string {
    if (!this.koEditItem()) return "";
    return editorLocalization
      .getString("pe.columnEdit")
      ["format"](this.koEditItem().obj.name);
  }
  protected getItemClassName(item: any): string {
    var base: string = "matrixdropdowncolumn@";
    if (!item["object"] || item.cellType !== "default") {
      return base + item.cellType;
    } else {
      return base + item["object"].cellType;
    }
  }
  protected createNewItem(): any {
    var newColumn = new Survey.MatrixDropdownColumn("");
    newColumn.name = getNextValue("", this.getColumnNames());
    var columns = [];
    var orgColumns = this.originalValue;
    if (Array.isArray(orgColumns)) {
      for (var i = 0; i < orgColumns.length; i++) {
        columns.push(orgColumns[i]);
      }
    }
    columns.push(newColumn);
    if (this.options) {
      this.options.onMatrixDropdownColumnAddedCallback(
        this.object,
        newColumn,
        columns
      );
    }
    return newColumn;
  }
  protected getColumnsProperties(): Array<Survey.JsonObjectProperty> {
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
    var items = this.originalValue;
    if (!Array.isArray(items)) return;
    for (var i = 0; i < items.length; i++) {
      var name = items[i].name;
      if (!!name) {
        res.push(name);
      }
    }
    return res;
  }
}

SurveyPropertyEditorFactory.registerEditor("matrixdropdowncolumns", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyDropdownColumnsEditor(property);
});
