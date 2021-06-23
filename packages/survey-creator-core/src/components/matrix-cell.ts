import {
  SurveyModel,
  Base,
  Question,
  settings,
  MatrixDropdownColumn,
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { surveyDesignerCss } from "../survey-designer-theme/survey-designer";

import "./matrix-cell.scss";

export class MatrixCellWrapperViewModel extends Base { 
  constructor(public creator: CreatorBase<SurveyModel>, public templateData: any, public question: Question, public row: any, public column: any) {
    super();
    // if(!question && !!this.templateData.data) {
    //   this.question = this.templateData.data;
    // }
  }
  public editQuestion(model: MatrixCellWrapperViewModel) {
    const column: MatrixDropdownColumn = model.question.parentQuestion.getColumnByName(model.question.name);
    let questionJSON = model.question.toJSON();
    questionJSON.type = model.question.getType();
    const survey = model.creator.createSurvey({questions: [questionJSON]}, "modal-question-editor");
    survey.css = surveyDesignerCss;
    survey.setDesignMode(true);
    survey.isPopupEditorContent = true;
    survey.showQuestionNumbers = "none";
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
      }
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
}
