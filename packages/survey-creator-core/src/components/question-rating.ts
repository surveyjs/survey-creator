import {
  SurveyElement,
  SurveyTemplateRendererTemplateData,
  SurveyTemplateRendererViewModel,
  SurveyModel,
  Base,
  QuestionRatingModel
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { toggleHovered } from "../utils/utils";
import { QuestionAdornerViewModel } from "./question";

import "./question-rating.scss";

export class QuestionRatingAdornerViewModel extends QuestionAdornerViewModel {
  constructor(
    creator: CreatorBase<SurveyModel>,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData
  ) {
    super(creator, surveyElement, templateData);
  }

  get question(): QuestionRatingModel {
    return this.surveyElement as QuestionRatingModel;
  }

  public hover(event: MouseEvent, element: HTMLElement) {
    toggleHovered(event, element);
  }
  public addItem(model: QuestionRatingAdornerViewModel) {
    model.question.rateMax += 1;
  }
  public removeItem(model: QuestionRatingAdornerViewModel) {
    if(model.question.rateMax > model.question.rateMin) {
      model.question.rateMax -= 1;
    }
  }
}

