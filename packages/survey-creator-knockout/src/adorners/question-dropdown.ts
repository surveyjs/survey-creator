import * as ko from "knockout";
import { QuestionDropdownModel, SurveyTemplateRendererViewModel } from "survey-core";
import { QuestionDropdownAdornerViewModel } from "survey-creator-core";
import { createQuestionViewModel } from "./question";
const template = require("./question-dropdown.html");
const questionTemplate = require("./question.html");

ko.components.register("svc-dropdown-question", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      const model = new QuestionDropdownAdornerViewModel(
        params.componentData,
        params.templateData.data as QuestionDropdownModel,
        params.templateData,
      );
      createQuestionViewModel(params, componentInfo, model);
      model["adornerComponent"] = "svc-dropdown-question-adorner";
      return model;
    }
  },
  template: questionTemplate.default
});
ko.components.register("svc-dropdown-question-adorner", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params.model;
    }
  },
  template: template.default
});