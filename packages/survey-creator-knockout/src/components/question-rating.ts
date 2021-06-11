import { QuestionRatingAdornerViewModel } from "@survey/creator";
import * as ko from "knockout";
import {
  SurveyTemplateRendererViewModel,
  QuestionRatingModel
} from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";

// import "./question-rating.scss";
const template = require("./question-rating.html");
// import template from "./question-rating.html";

ko.components.register("svc-rating-question", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      const creator = params.componentData;
      const question = params.templateData.data;

      const scrollSubscription = ko.computed(() => {
        if (creator.isElementSelected(question)) {
          // componentInfo.element.scrollIntoView();
        }
      });
      const model = new QuestionRatingAdornerViewModel(
        params.componentData,
        params.templateData.data as QuestionRatingModel,
        params.templateData
      );
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        scrollSubscription.dispose();
        model.dispose();
      });
      return model;
    }
  },
  template: template
});
