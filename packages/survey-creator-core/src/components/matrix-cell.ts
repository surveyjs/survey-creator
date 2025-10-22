import {
  SurveyModel,
  Base,
  Question,
  settings,
  MatrixDropdownColumn,
  property,
  QuestionMatrixDropdownModelBase,
  Helpers,
  IDialogOptions,
  PopupBaseViewModel,
  surveyLocalization,
  Serializer,
} from "survey-core";
import { defaultCss } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { toggleHovered } from "../utils/html-element-utils";
import { SurveyHelper } from "../survey-helper";
import { editorLocalization } from "../editorLocalization";
import designTabSurveyThemeJSON from "../designTabSurveyThemeJSON";

import "./matrix-cell.scss";

export class MatrixCellWrapperEditSurvey {
  private surveyValue: SurveyModel;
  private creator: SurveyCreatorModel;
  constructor(creator: SurveyCreatorModel, private cellQuestion: Question, private column: MatrixDropdownColumn, model?: Base) {
    this.creator = creator;
    let questionJSON = cellQuestion.toJSON();
    questionJSON.type = cellQuestion.getType();
    this.surveyValue = creator.createSurvey({ elements: [questionJSON] }, "modal-question-editor", model, (survey: SurveyModel): void => {
      survey.css = defaultCss;
      survey.setDesignMode(true);
      (<any>survey).isPopupEditorContent = true;
      survey.showQuestionNumbers = "none";
      survey.questionTitleLocation = "hidden";
      survey.locale = cellQuestion.getSurvey()?.getLocale();
    });
    this.question.setSurveyImpl(this.survey);
    this.question.inMatrixMode = true;
    this.question.ownerObj = this.column;
  }
  public get survey(): SurveyModel { return this.surveyValue; }
  public get question(): Question { return this.survey.getAllQuestions()[0]; }
  public apply(): void {
    const matrix = <QuestionMatrixDropdownModelBase>this.cellQuestion.parentQuestion;
    const column: MatrixDropdownColumn = matrix.getColumnByName(this.cellQuestion.name);
    const columnJSON = column.toJSON();
    const prevCellType = columnJSON["cellType"];
    const questionJSON = this.question.toJSON();
    const qType = this.question.getType();
    if (!!prevCellType) {
      questionJSON.cellType = prevCellType;
    }
    if (Helpers.isTwoValueEquals(questionJSON, columnJSON)) return;
    for (let key in columnJSON) {
      if (!!Serializer.findProperty(qType, key) && questionJSON[key] === undefined && (columnJSON[key] === true || columnJSON[key] === false)) {
        questionJSON[key] = !columnJSON[key];
      }
    }
    if (column.cellType === "default") {
      column.cellType = qType;
    }
    for (let key in questionJSON) {
      if (!Helpers.isTwoValueEquals(questionJSON[key], columnJSON[key])) {
        column[key] = questionJSON[key];
      }
    }
    matrix.onColumnCellTypeChanged(column);
    this.creator.setModified({ type: "MATRIX_CELL_EDITOR", column: column });
  }
}

export class MatrixCellWrapperViewModel extends Base {
  constructor(public creator: SurveyCreatorModel, public templateData: any, public question: Question, public row: any, public column: any) {
    super();
    // if(!question && !!this.templateData.data) {
    //   this.question = this.templateData.data;
    // }
    creator.onElementSelected.add(this.onSelectionChanged);
  }
  @property() isSelected: boolean;

  private onSelectionChanged = (sender, options) => {
    if (this.context && this.context.getPropertyValue) {
      this.isSelected = this.creator.isElementSelected(this.context);
    } else {
      this.isSelected = false;
    }
  };

  public editQuestion(model: MatrixCellWrapperViewModel, event: MouseEvent) {
    const editSurvey = new MatrixCellWrapperEditSurvey(model.creator, model.question, model.column, this);
    editSurvey.question.cellOwner = model;

    const prevCurrentLocale = surveyLocalization.currentLocale;
    const locale = editorLocalization.currentLocale;
    surveyLocalization.currentLocale = locale;
    const popupModel: PopupBaseViewModel = settings.showDialog(
      <IDialogOptions>{
        componentName: "svc-question-editor-content",
        data: {
          survey: editSurvey.survey,
          creator: this.creator,
          style: designTabSurveyThemeJSON.cssVariables
        },
        onApply: () => {
          editSurvey.apply();
          return true;
        },
        cssClass: "svc-matrix-cell__popup svc-creator-popup",
        title: model.question.name,
        displayMode: this.creator.isMobileView ? "overlay" : "popup"
      }, model.creator.rootElement
    );
    popupModel.locale = locale;
    surveyLocalization.currentLocale = prevCurrentLocale;

    event.stopPropagation();
    model.creator.selectElement(model.column);
  }
  get context() {
    return this.row || this.column || this.templateData;
  }
  public selectContext(model: MatrixCellWrapperViewModel, event: MouseEvent) {
    if (!!model.row) {
      model.creator.selectElement(model.row.data, "rows", false);
      event.stopPropagation();
      return;
    }
    if (typeof model.context.getType !== "function") {
      return;
    }
    const contextType = model.context.getType();
    if (Serializer.isDescendantOf(contextType, "itemvalue")) {
      model.creator.selectElement(model.context.locOwner, model.context.ownerPropertyName, false);
    } else {
      model.creator.selectElement(model.context);
    }
    event.stopPropagation();
  }
  public get isSupportCellEditor(): boolean {
    if (!this.question || !this.question.getType) return false;
    return SurveyHelper.isSupportCellEditor(this.question.getType());
  }
  public hover(event: MouseEvent, element: HTMLElement | any) {
    if (!this.row && this.context && this.context.getPropertyValue && this.context.getType && !this.context.isDescendantOf("itemvalue")) {
      toggleHovered(event, element);
    }
  }
  public dispose(): void {
    this.creator.onElementSelected.remove(this.onSelectionChanged);
    super.dispose();
  }
}
