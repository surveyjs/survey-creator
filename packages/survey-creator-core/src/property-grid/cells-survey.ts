import {
  ItemValue,
  QuestionMatrixDropdownModel,
  QuestionMatrixModel,
  SurveyModel,
} from "survey-core";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../creator-settings";
import { editorLocalization } from "../editorLocalization";
import { PropertyEditorSetupValue } from "./index";

export class CellsEditor extends PropertyEditorSetupValue {
  private editMatrixValue: QuestionMatrixDropdownModel;
  constructor(
    public matrix: QuestionMatrixModel,
    options: ISurveyCreatorOptions = null
  ) {
    super(options);
    this.editMatrixValue = <QuestionMatrixDropdownModel>(
      this.editSurvey.getQuestionByName("question")
    );
    this.buildColumns();
    this.buildRows();
    this.editMatrix.value = this.matrix.cells.getJson();
  }
  protected getSurveyJSON(): any {
    return {
      elements: [
        {
          type: "matrixdropdown",
          name: "question",
          cellType: "comment",
        },
      ],
    };
  }
  protected getSurveyCreationReason(): string {
    return "cells-editor";
  }

  public get editMatrix(): QuestionMatrixDropdownModel {
    return this.editMatrixValue;
  }
  public apply(): boolean {
    this.matrix.cells.setJson(this.editMatrix.value);
    return true;
  }
  private buildColumns() {
    var columns = this.matrix.columns;
    for (var i = 0; i < columns.length; i++) {
      this.editMatrix.addColumn("" + columns[i].value, columns[i].text);
    }
  }
  private buildRows() {
    this.editMatrix.rows.push(
      new ItemValue(
        "default",
        editorLocalization.getString("pe.cellsDefaultRow")
      )
    );
    var rows = this.matrix.rows;
    for (var i = 0; i < rows.length; i++) {
      this.editMatrix.rows.push(new ItemValue(rows[i].value, rows[i].text));
    }
  }
}
