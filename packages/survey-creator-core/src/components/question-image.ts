
import { QuestionImageModel, SurveyElement, SurveyTemplateRendererTemplateData, SurveyModel } from "survey-core";
import { CreatorBase } from "../creator-base";
import { QuestionAdornerViewModel } from "./question";

import "./question-image.scss";

export class QuestionImageAdornerViewModel extends QuestionAdornerViewModel {
  constructor(
    creator: CreatorBase,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData,
      public questionRoot: HTMLElement
  ) {
    super(creator, surveyElement, templateData);
  }

  chooseFile(model: QuestionImageAdornerViewModel) {
    const fileInput = <HTMLInputElement>model.questionRoot.getElementsByClassName("svc-choose-file-input")[0];
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      model.creator.uploadFiles(files, model.surveyElement as QuestionImageModel, (_, link) => {
        (<QuestionImageModel>model.surveyElement).imageLink = link;
      });
    });
  }
}