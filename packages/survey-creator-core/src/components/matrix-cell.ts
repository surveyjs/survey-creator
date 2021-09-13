import {
  SurveyModel,
  Base,
  Question,
  settings,
  MatrixDropdownColumn,
  property,
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { surveyDesignerCss } from "../survey-designer-theme/survey-designer";
import { toggleHovered } from "../utils/utils";

import "./matrix-cell.scss";

export class MatrixCellWrapperViewModel extends Base {
  constructor(public creator: CreatorBase<SurveyModel>, public templateData: any, public question: Question, public row: any, public column: any) {
    super();
    // if(!question && !!this.templateData.data) {
    //   this.question = this.templateData.data;
    // }
    creator.onSelectedElementChanged.add(this.onSelectionChanged);
  }
  @property() isSelected: boolean;

  private onSelectionChanged = (sender, options) => {
    if(this.context && this.context.getPropertyValue) {
      this.isSelected = this.creator.isElementSelected(this.context);
    } else {
      this.isSelected = false;
    }
  }

  public editQuestion(model: MatrixCellWrapperViewModel) {
    const column: MatrixDropdownColumn = model.question.parentQuestion.getColumnByName(model.question.name);
    let questionJSON = model.question.toJSON();
    questionJSON.type = model.question.getType();
    const survey = model.creator.createSurvey({ questions: [questionJSON] }, "modal-question-editor");
    survey.css = surveyDesignerCss;
    survey.setDesignMode(true);
    survey.isPopupEditorContent = true;
    survey.showQuestionNumbers = "none";
    survey.questionTitleLocation = "hidden";
    survey.getAllQuestions()[0].setSurveyImpl(survey);
    settings.showModal(
      "svc-question-editor-content",
      {
        survey: survey,
        creator: this.creator
      },
      () => {
        questionJSON = survey.getAllQuestions()[0].toJSON();
        column.fromJSON(questionJSON);
        model.question.parentQuestion.onColumnCellTypeChanged(column);
        return true;
      },
      undefined, undefined, model.question.name
    );
  }
  get context() {
    return this.row || this.column || this.templateData;
  }
  public selectContext(model: MatrixCellWrapperViewModel, event: MouseEvent) {
    if(!!model.row) {
      model.creator.selectElement(model.row.data, "rows", false);
      event.stopPropagation();
      return;
    }
    if(typeof model.context.getType !== "function") {
      return;
    }
    const contextType = model.context.getType();
    if(contextType === "itemvalue") {
      model.creator.selectElement(model.context.locOwner, model.context.ownerPropertyName, false);
    } else {
      model.creator.selectElement(model.context);
    }
    event.stopPropagation();
  }
  public hover(event: MouseEvent, element: HTMLElement) {
    if(!this.row && this.context && this.context.getPropertyValue && this.context.getType && this.context.getType() !== "itemvalue") {
      toggleHovered(event, element);
    }
  }
  public dispose() {
    this.creator.onSelectedElementChanged.remove(this.onSelectionChanged);
  }
}
