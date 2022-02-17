import * as ko from "knockout";
import { SurveyTemplateRendererViewModel } from "survey-core";
import { createQuestionViewModel } from "./question";
const template = require("./question-dropdown.html");
const questionTemplate = require("./question.html");

ko.components.register("svc-dropdown-question", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      var model = createQuestionViewModel(params, componentInfo);
      model["adornerComponent"] = "svc-dropdown-question-adorner";
      return model;
    }
  },
  template: questionTemplate
});
ko.components.register("svc-dropdown-question-adorner", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params.model;
    }
  },
  template: template
});
