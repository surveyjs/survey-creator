import { QuestionRatingAdornerViewModel } from "survey-creator-core";
import * as ko from "knockout";
import {
  SurveyTemplateRendererViewModel,
  QuestionRatingModel
} from "survey-core";
import { createQuestionViewModel } from "./question";
import { ImplementorBase } from "survey-knockout-ui";
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
      // createQuestionViewModel(params, componentInfo, model);
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        model.dispose();
      });
      //model["adornerComponent"] = "svc-rating-question-adorner";
      return model;
    }
  },
  template: questionTemplate.default
});
ko.components.register("svc-rating-question-content", {
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
      //createQuestionViewModel(params, componentInfo, model);
      //model["adornerComponent"] = "svc-rating-question-adorner";
      return model;
    }
  },
  template: template.default
});
