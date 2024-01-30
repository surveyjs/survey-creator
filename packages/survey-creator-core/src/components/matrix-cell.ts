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
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { defaultV2Css } from "survey-core";
import { toggleHovered } from "../utils/utils";
import { SurveyHelper } from "../survey-helper";

require("./matrix-cell.scss");

export class MatrixCellWrapperEditSurvey {
  private surveyValue: SurveyModel;
  private creator: SurveyCreatorModel;
  constructor(creator: SurveyCreatorModel, private cellQuestion: Question, private column: MatrixDropdownColumn, model?: Base) {
    this.creator = creator;
    let questionJSON = cellQuestion.toJSON();
    questionJSON.type = cellQuestion.getType();
    this.surveyValue = creator.createSurvey({ questions: [questionJSON] }, "modal-question-editor", model);
    this.survey.css = defaultV2Css;
    this.survey.setDesignMode(true);
    (<any>this.survey).isPopupEditorContent = true;
    this.survey.showQuestionNumbers = "none";
    this.survey.questionTitleLocation = "hidden";
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
    const questionJSON = this.survey.getAllQuestions()[0].toJSON();
    if(!!prevCellType) {
      questionJSON.cellType = prevCellType;
    }
    if(Helpers.isTwoValueEquals(questionJSON, columnJSON)) return;
    for(let key in columnJSON) {
      if(questionJSON[key] === undefined && (columnJSON[key] === true || columnJSON[key] === false)) {
        questionJSON[key] = !columnJSON[key];
      }
    }
    column.fromJSON(questionJSON);
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
    creator.onSelectedElementChanged.add(this.onSelectionChanged);
  }
  @property() isSelected: boolean;

  private onSelectionChanged = (sender, options) => {
    if (this.context && this.context.getPropertyValue) {
      this.isSelected = this.creator.isElementSelected(this.context);
    } else {
      this.isSelected = false;
    }
  }

  public editQuestion(model: MatrixCellWrapperViewModel, event: MouseEvent) {
    const editSurvey = new MatrixCellWrapperEditSurvey(model.creator, model.question, model.column, this);
    editSurvey.question.cellOwner = model;
    settings.showDialog(
      <IDialogOptions>{
        componentName: "svc-question-editor-content",
        data: {
          survey: editSurvey.survey,
          creator: this.creator
        },
        onApply: () => {
          editSurvey.apply();
          return true;
        },
        cssClass: "svc-matrix-cell__popup",
        title: model.question.name,
        displayMode: this.creator.isMobileView ? "overlay" : "popup"
      }, model.creator.rootElement
    );
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
    if (contextType === "itemvalue") {
      model.creator.selectElement(model.context.locOwner, model.context.ownerPropertyName, false);
    } else {
      model.creator.selectElement(model.context);
    }
    event.stopPropagation();
  }
  public get isSupportCellEditor(): boolean {
    if(!this.question || !this.question.getType) return false;
    return SurveyHelper.isSupportCellEditor(this.question.getType());
  }
  public hover(event: MouseEvent, element: HTMLElement | any) {
    if (!this.row && this.context && this.context.getPropertyValue && this.context.getType && this.context.getType() !== "itemvalue") {
      toggleHovered(event, element);
    }
  }
  public dispose(): void {
    this.creator.onSelectedElementChanged.remove(this.onSelectionChanged);
    super.dispose();
  }
}
