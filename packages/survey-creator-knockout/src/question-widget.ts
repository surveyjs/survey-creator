import { QuestionAdornerViewModel } from "survey-creator-core";
import * as ko from "knockout";
import {
  SurveyTemplateRendererViewModel,
  Question
} from "survey-core";
import { createQuestionViewModel } from "./adorners/question";
const template = require("./question-widget.html");

ko.components.register("svc-widget-question", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      const model = new QuestionAdornerViewModel(
        params.componentData,
        params.templateData.data as Question,
        params.templateData
      );
      createQuestionViewModel(params, componentInfo, model);
      return model;
    }
  },
  template: template.default
});
