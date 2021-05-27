import {
  SurveyTemplateRendererViewModel,
  SurveyModel,
  Base,
  Question,
  settings,
  MatrixDropdownColumn,
} from "survey-core";
import { CreatorBase } from "../creator-base";

import "./matrix-cell.scss";

export class MatrixCellWrapperViewModel extends Base { 
  constructor(public creator: CreatorBase<SurveyModel>, public templateData: any) {
    super();
  }
  get question() {
    return this.templateData.data as Question
  }
  public editQuestion(model: MatrixCellWrapperViewModel) {
    const column: MatrixDropdownColumn = model.question.parentQuestion.getColumnByName(model.question.name);
    let questionJSON = model.question.toJSON();
    questionJSON.type = model.question.getType();
    const survey = model.creator.createSurvey({questions: [questionJSON]}, "modal-editor");
    survey.setDesignMode(true);
    survey.isPopupEditorContent = true;
    survey.showQuestionNumbers = "none";
    settings.showModal(
      "survey",
      {
        survey: survey,
        model: survey,
      },
      () => {
        questionJSON = survey.getAllQuestions()[0].toJSON();
        column.fromJSON(questionJSON);
        model.question.parentQuestion.onColumnCellTypeChanged(column);
      }
    );
  }
  get context() {
    return this.templateData;
  }
  public selectContext(model: MatrixCellWrapperViewModel, event: MouseEvent) {
    model.creator.selectElement(model.context);
    event.stopPropagation();
  }
}
