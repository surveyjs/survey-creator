import * as ko from "knockout";
import {
  Question,
  SurveyTemplateRendererViewModel,
} from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { KnockoutQuestionAdornerViewModel } from "./question";

const template = require("./cell-question.html");

ko.components.register("svc-cell-question", {
  viewModel: {
    createViewModel: (params: SurveyTemplateRendererViewModel, componentInfo: any) => {
      const creator = params.componentData;
      const question = params.templateData.data;

      const model = new KnockoutQuestionAdornerViewModel(
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
