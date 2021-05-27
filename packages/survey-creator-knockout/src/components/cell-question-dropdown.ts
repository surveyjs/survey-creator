import * as ko from "knockout";
import {
  Question,
  SurveyTemplateRendererViewModel,
} from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { KnockoutDropdownQuestionAdornerViewModel } from "./question-dropdown";

const template = require("./cell-question-dropdown.html");

ko.components.register("svc-cell-dropdown-question", {
  viewModel: {
    createViewModel: (params: SurveyTemplateRendererViewModel, componentInfo: any) => {
      const creator = params.componentData;
      const question = params.templateData.data;

      const model = new KnockoutDropdownQuestionAdornerViewModel(
        params.componentData,
        params.templateData.data as Question,
        params.templateData
      );
      new ImplementorBase(model);
      return model;
    },
  },
  template: template,
});
