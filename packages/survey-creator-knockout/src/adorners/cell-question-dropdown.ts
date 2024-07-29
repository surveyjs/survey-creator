import * as ko from "knockout";
import { Question, SurveyTemplateRendererViewModel } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { createQuestionViewModel } from "./question";

const template = require("./cell-question-dropdown.html");

ko.components.register("svc-cell-dropdown-question", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      return createQuestionViewModel(params, componentInfo);
    }
  },
  template: template.default
});
