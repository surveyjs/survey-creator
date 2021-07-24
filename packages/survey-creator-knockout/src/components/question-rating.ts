import { QuestionRatingAdornerViewModel } from "@survey/creator";
import * as ko from "knockout";
import {
  SurveyTemplateRendererViewModel,
  QuestionRatingModel
} from "survey-core";
import { createQuestionViewModel } from "./question";
const template = require("./question-rating.html");
const questionTemplate = require("./question.html");

ko.components.register("svc-rating-question", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      const model = new QuestionRatingAdornerViewModel(
        params.componentData,
        params.templateData.data as QuestionRatingModel,
        params.templateData
      );
      createQuestionViewModel(params, componentInfo, model);
      model["adornerComponent"] = "svc-rating-question-adorner";
      return model;
    }
  },
  template: questionTemplate
});
ko.components.register("svc-rating-question-adorner", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params.model;
    }
  },
  template: template
});
