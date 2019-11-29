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
    var newColumn = this.createEditorColumnItemCore(null);
    newColumn.name = getNextValue("", this.getColumnNames());
    var columns = [];
    for (var i = 0; i < this.koItems().length; i++) {
      columns.push(this.koItems()[i].obj);
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
  protected createEditorItem(item: any) {
    var newColumn = this.createEditorColumnItemCore(item);
    return new SurveyNestedPropertyEditorItem(
      newColumn,
      () => this.columns,
      this.options,
      this.getItemClassName(newColumn)
    );
  }
  protected createItemFromEditorItem(editorItem: any) {
    var newColumn = new Survey.MatrixDropdownColumn("");
    var json = new Survey.JsonObject().toJsonObject(editorItem.obj);
    new Survey.JsonObject().toObject(json, newColumn);
    return newColumn;
  }
  protected createEditorColumnItemCore(item: any): Survey.MatrixDropdownColumn {
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
      var name = items[i].obj.name;
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
