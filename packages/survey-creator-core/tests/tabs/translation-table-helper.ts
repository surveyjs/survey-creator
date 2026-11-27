import { MatrixDropdownColumn, PanelModel, Question, QuestionMatrixDropdownModel, SurveyModel } from "survey-core";
import { TranslationBase, TranslationItem } from "../../src/components/tabs/translation";
import { translationTableQuestionColumnName, translationTableStringColumnName } from "../../src/components/tabs/translation-table";

// Lookups of the strings table (TranslationTable), shared by the tests of both modes and of the
// dialogs: a string is a one-row matrix, found by its localizable string (or its matrix name), and a
// cell is read by its locale column, whatever the html columns before it (Question, String).

function getSurvey(owner: TranslationBase | SurveyModel): SurveyModel {
  return owner instanceof SurveyModel ? owner : owner.stringsSurvey;
}
export function getRowItem(matrix: QuestionMatrixDropdownModel): TranslationItem {
  return !!matrix && !!matrix.rows && !!matrix.rows[0] ? matrix.rows[0]["translationData"] : undefined;
}
// The string matrices, in the table order.
export function getStringMatrices(owner: TranslationBase | SurveyModel): Array<QuestionMatrixDropdownModel> {
  return <Array<QuestionMatrixDropdownModel>>getSurvey(owner).getAllQuestions().filter((q: any) => !!getRowItem(q));
}
export function findStringMatrix(owner: TranslationBase | SurveyModel, locStr: any): QuestionMatrixDropdownModel {
  return getStringMatrices(owner).filter(matrix => getRowItem(matrix).locString === locStr)[0];
}
// By the matrix name: the full name of the string's group in the translation tree plus its index.
export function getStringMatrix(owner: TranslationBase | SurveyModel, name: string): QuestionMatrixDropdownModel {
  return <QuestionMatrixDropdownModel>getSurvey(owner).getQuestionByName(name);
}
export function getStringMatrixNames(owner: TranslationBase | SurveyModel): Array<string> {
  return getStringMatrices(owner).map(matrix => matrix.name);
}
export function isLocaleColumn(column: MatrixDropdownColumn): boolean {
  return column.name !== translationTableQuestionColumnName && column.name !== translationTableStringColumnName;
}
export function getLocaleColumns(matrix: QuestionMatrixDropdownModel): Array<MatrixDropdownColumn> {
  return matrix.columns.filter(isLocaleColumn);
}
export function getLocaleColumnNames(matrix: QuestionMatrixDropdownModel): Array<string> {
  return getLocaleColumns(matrix).map(column => column.name);
}
export function getLocaleColumnTitles(matrix: QuestionMatrixDropdownModel): Array<string> {
  return getLocaleColumns(matrix).map(column => column.title);
}
// The cell question of a column: a locale column ("default" for the default locale), or Question / String.
export function getLocaleCell(matrix: QuestionMatrixDropdownModel, columnName: string): any {
  const cell = matrix.visibleRows[0].cells.filter(c => c.column.name === columnName)[0];
  return !!cell ? <Question>cell.question : undefined;
}
export function getLocaleCells(matrix: QuestionMatrixDropdownModel): Array<any> {
  return matrix.visibleRows[0].cells.filter(c => isLocaleColumn(<MatrixDropdownColumn>c.column)).map(c => c.question);
}
// The html of the Question cell (the element name, in the element's first row) and of the String cell.
export function getQuestionCellHtml(matrix: QuestionMatrixDropdownModel): string {
  return getLocaleCell(matrix, translationTableQuestionColumnName).html;
}
export function getStringCellHtml(matrix: QuestionMatrixDropdownModel): string {
  return getLocaleCell(matrix, translationTableStringColumnName).html;
}
// The page group of the table: a collapsible panel per page.
export function getGroupPanel(model: TranslationBase, pageName: string): PanelModel {
  return model.stringsTable.getGroupPanel(pageName);
}
