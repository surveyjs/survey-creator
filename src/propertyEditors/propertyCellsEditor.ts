import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyModalEditor } from "./propertyModalEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyCellsEditor extends SurveyPropertyModalEditor {
  koRows: any;
  koColumns: any;
  koCanEdit: any;
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koRows = ko.observableArray();
    this.koColumns = ko.observableArray();
    this.koCanEdit = ko.observable(false);
  }
  public getValueText(value: any): string {
    var strName = !value ? "empty" : "notEmpty";
    return editorLocalization.getPropertyNameInEditor(strName);
  }
  public beforeShowCore() {
    super.beforeShowCore();
    this.setupCells();
  }
  public get editorType(): string {
    return "cells";
  }
  protected onValueChanged() {
    if (this.isBeforeShowCalled) {
      this.setupCells();
    }
  }
  public get canEdit(): boolean {
    return this.rows.length > 0 && this.columns.length > 0;
  }
  public get rows(): Array<any> {
    return this.object && this.object.rows ? this.object.rows : [];
  }
  public get columns(): Array<any> {
    return this.object && this.object.columns ? this.object.columns : [];
  }
  protected getCellText(rowIndex: number, columnIndex: number): string {
    if (rowIndex < 0) return this.object.getDefaultCellText(columnIndex);
    return this.object.getCellText(rowIndex, columnIndex);
  }
  protected setupCells() {
    this.koRows([]);
    this.koColumns([]);
    this.koCanEdit(this.canEdit);
    if (!this.canEdit) return;
    var cols = [];
    for (var i = 0; i < this.columns.length; i++) {
      cols.push(this.columns[i].text);
    }
    var rows = [];
    rows.push(
      this.createRow(-1, editorLocalization.getString("pe.cellsDefaultRow"))
    );
    for (var i = 0; i < this.rows.length; i++) {
      rows.push(this.createRow(i, this.rows[i].text));
    }
    this.koColumns(cols);
    this.koRows(rows);
  }
  protected createRow(rowIndex: number, rowText: string): any {
    var row = {
      rowIndex: rowIndex,
      rowText: rowText,
      koCells: ko.observableArray()
    };
    var cells = [];
    for (var i = 0; i < this.columns.length; i++) {
      cells.push({ text: this.createCellText(rowIndex, i) });
    }
    row.koCells(cells);
    return row;
  }
  private createCellText(rowIndex: number, colIndex: number): any {
    var self = this;
    var text = ko.observable(this.getCellText(rowIndex, colIndex));
    var colValue = this.columns[colIndex].value;
    text.subscribe(function(val) {
      if (rowIndex < 0) self.originalValue.setDefaultCellText(colValue, val);
      else self.originalValue.setCellText(rowIndex, colValue, val);
    });
    return text;
  }
}
SurveyPropertyEditorFactory.registerEditor("cells", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyCellsEditor(property);
});
