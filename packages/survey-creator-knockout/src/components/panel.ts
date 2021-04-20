import * as ko from "knockout";
import {
  PanelModel,
  PanelModelBase,
  Question,
  SurveyElementTemplateData,
  SurveyElementViewModel,
  SurveyModel,
} from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { CreatorBase } from "@survey/creator";
import { KnockoutQuestionAdornerViewModel } from "./question";

//import "./question.scss";
const template = require("./panel.html");
// import template from "./question.html";

class KnockoutPanelAdornerViewModel extends KnockoutQuestionAdornerViewModel {
  constructor(
    creator: CreatorBase<SurveyModel>,
    panel: PanelModel,
    templateData: SurveyElementTemplateData
  ) {
    super(creator, panel, templateData);
  }
}

ko.components.register("svc-panel", {
  viewModel: {
    createViewModel: (params: SurveyElementViewModel, componentInfo: any) => {
      const creator = params.componentData;
      const question = params.templateData.data;

      const markup = componentInfo.element.nextSibling.querySelector(
        ".svc-question__content"
      );
      if (markup) {
        markup.dataset.questionName = question.name;
      }

      const scrollSubscription = ko.computed(() => {
        if (creator.isElementSelected(question)) {
          // componentInfo.element.scrollIntoView();
        }
      });
      const model = new KnockoutPanelAdornerViewModel(
        params.componentData,
        params.templateData.data as PanelModel,
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
