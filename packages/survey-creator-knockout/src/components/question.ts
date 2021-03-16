import * as ko from "knockout";
import { Question, SurveyElementViewModel } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { QuestionAdornerViewModel } from "@survey/creator";
//import "./question.scss";
const template = require("./question.html");
// import template from "./question.html";

ko.components.register("svc-question", {
  viewModel: {
    createViewModel: (params: SurveyElementViewModel, componentInfo: any) => {
      const creator = params.componentData;
      const question = params.templateData.data;
      const scrollSubscription = ko.computed(() => {
        if (creator.isElementSelected(question)) {
          // componentInfo.element.scrollIntoView();
        }
      });
      const model = new QuestionAdornerViewModel(
        params.componentData,
        params.templateData.data as Question,
        params.templateData
      );
      new ImplementorBase(model);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        scrollSubscription.dispose();
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
