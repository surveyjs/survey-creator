import * as ko from "knockout";
import {
  SurveyTemplateRendererViewModel,
  SurveyModel,
  Base,
  Question,
  settings,
  MatrixDropdownColumn,
} from "survey-core";
import {
  CreatorBase,
} from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";

import "./matrix-cell.scss";

const template = require("./matrix-cell.html");

class KnockoutMatrixCellWrapperViewModel extends Base { 
  constructor(public creator: CreatorBase<SurveyModel>, public templateData: any) {
    super();
  }
  get question() {
    return this.templateData.data as Question
  }
  public editQuestion(model: KnockoutMatrixCellWrapperViewModel) {
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
}

ko.components.register("svc-matrix-cell", {
  viewModel: {
    createViewModel: (params: SurveyTemplateRendererViewModel, componentInfo: any) => {
      const creator = params.componentData.creator;

      params.templateData["nodes"] = componentInfo.templateNodes;

      const model = new KnockoutMatrixCellWrapperViewModel(
        creator,
        params.templateData
      );
      new ImplementorBase(model);
      return model;
    },
  },
  template: template,
});
