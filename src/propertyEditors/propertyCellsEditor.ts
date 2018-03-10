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
  public beforeShow() {
    super.beforeShow();
    this.setupCells();
  }
  protected onBeforeApply() {
    if (!this.canEdit) return;
    var matrix = new Survey.QuestionMatrix("");
    matrix.setSurveyImpl(this.object.survey);
    matrix.rows = this.rows;
    matrix.columns = this.columns;
    (<any>matrix).cells = this.object.cells;
    for (var i = 0; i < matrix.rows.length; i++) {
      var cells = this.koRows()[i].koCells();
      for (var j = 0; j < matrix.columns.length; j++) {
        (<any>matrix).setCellText(i, j, cells[j].text());
      }
    }
    this.koValue((<any>matrix).cells);
  }
  public get editorType(): string {
    return "cells";
  }
  protected onValueChanged() {
    if (this.isShowingModal) {
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
    for (var i = 0; i < this.rows.length; i++) {
      rows.push(this.createRow(i));
    }
    this.koColumns(cols);
    this.koRows(rows);
  }
  protected createRow(rowIndex: number): any {
    var row = {
      row: this.rows[rowIndex],
      koCells: ko.observableArray()
    };
    var cells = [];
    for (var i = 0; i < this.columns.length; i++) {
      cells.push({ text: ko.observable(this.getCellText(rowIndex, i)) });
    }
    row.koCells(cells);
    return row;
  }
}
SurveyPropertyEditorFactory.registerEditor("cells", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyCellsEditor(property);
});
