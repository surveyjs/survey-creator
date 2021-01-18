import {
  ItemValue,
  QuestionMatrixDropdownModel,
  QuestionMatrixModel,
  SurveyModel,
} from "survey-knockout";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions,
} from "@survey/creator/settings";
import { editorLocalization } from "@survey/creator/editorLocalization";
import { IPropertyEditorSetup } from "./index";

export class CellsEditor implements IPropertyEditorSetup {
  private editSurveyValue: SurveyModel;
  private editMatrixValue: QuestionMatrixDropdownModel;
  constructor(
    public matrix: QuestionMatrixModel,
    private options: ISurveyCreatorOptions = null
  ) {
    if (!this.options) {
      this.options = new EmptySurveyCreatorOptions();
    }
    this.editSurveyValue = this.createSurvey({
      showNavigationButtons: false,
      showPageTitles: false,
      showQuestionNumbers: "off",
      elements: [
        {
          type: "matrixdropdown",
          name: "cells",
          cellType: "comment",
        },
      ],
    });
    this.editMatrixValue = <QuestionMatrixDropdownModel>(
      this.editSurvey.getQuestionByName("cells")
    );
    this.buildColumns();
    this.buildRows();
    this.editMatrix.value = this.matrix.cells.getJson();
  }
  public get editSurvey(): SurveyModel {
    return this.editSurveyValue;
  }
  public get editMatrix(): QuestionMatrixDropdownModel {
    return this.editMatrixValue;
  }
  public apply() {
    this.matrix.cells.setJson(this.editMatrix.value);
  }
  protected createSurvey(json: any): SurveyModel {
    return this.options.createSurvey(json, "cells-editor"); //TODO reason name
  }
  private buildColumns() {
    var columns = this.matrix.columns;
    for (var i = 0; i < columns.length; i++) {
      this.editMatrix.addColumn(columns[i].value, columns[i].text);
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
