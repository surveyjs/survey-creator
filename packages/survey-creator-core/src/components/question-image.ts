
import { QuestionImageModel, SurveyElement, SurveyTemplateRendererTemplateData, SurveyModel, property } from "survey-core";
import { CreatorBase } from "../creator-base";
import { QuestionAdornerViewModel } from "./question";
import { getAcceptedTypesByContentMode } from "../utils/utils";

require("./question-image.scss");

export class QuestionImageAdornerViewModel extends QuestionAdornerViewModel {
  constructor(
    creator: CreatorBase,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData,
      public questionRoot: HTMLElement
  ) {
    super(creator, surveyElement, templateData);
  }

  @property({ defaultValue: false }) isUploading;

  chooseFile(model: QuestionImageAdornerViewModel) {
    const fileInput = <HTMLInputElement>model.questionRoot.getElementsByClassName("svc-choose-file-input")[0];
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      model.isUploading = true;
      model.creator.uploadFiles(files, model.surveyElement as QuestionImageModel, (_, link) => {
        (<QuestionImageModel>model.surveyElement).imageLink = link;
        model.isUploading = false;
      });
    });
  }
  public get acceptedTypes() : string {
    return getAcceptedTypesByContentMode((this.surveyElement as QuestionImageModel).contentMode);
  }
}