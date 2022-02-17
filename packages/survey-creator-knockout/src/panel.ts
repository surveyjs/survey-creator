import * as ko from "knockout";
import { SurveyTemplateRendererViewModel } from "survey-core";
import { createQuestionViewModel } from "./question";
const template = require("./question.html");

ko.components.register("svc-panel", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      return createQuestionViewModel(params, componentInfo);
    }
  },
  template: template
});
