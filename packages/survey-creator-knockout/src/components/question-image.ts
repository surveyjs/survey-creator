import * as ko from "knockout";
import {
  SurveyElement,
  SurveyTemplateRendererTemplateData,
  SurveyTemplateRendererViewModel,
  SurveyModel,
  QuestionImageModel
} from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { CreatorBase, QuestionAdornerViewModel, QuestionImageAdornerViewModel, toggleHovered } from "@survey/creator";
import { KnockoutMouseEvent } from "../events";

// import "./question-image.scss";
const template = require("./question-image.html");
// import template from "./question.html";

export class KnockoutQuestionImageAdornerViewModel extends QuestionImageAdornerViewModel {
  constructor(
    creator: CreatorBase<SurveyModel>,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData,
    questionRoot: HTMLElement
  ) {
    super(creator, surveyElement, templateData, questionRoot);
  }

  koSelect(model: QuestionAdornerViewModel, event: MouseEvent) {
    return super.select(model, this.wrapMouseEvent(event));
  }
  private wrapMouseEvent(event: MouseEvent): KnockoutMouseEvent {
    return new KnockoutMouseEvent(event);
  }
  public hover(event: MouseEvent, element: HTMLElement) {
    toggleHovered(event, element);
  }
}

ko.components.register("svc-image-question", {
  viewModel: {
    createViewModel: (params: SurveyTemplateRendererViewModel, componentInfo: any) => {
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
      const model = new KnockoutQuestionImageAdornerViewModel(
        params.componentData,
        params.templateData.data as QuestionImageModel,
        params.templateData,
        componentInfo.element.parentElement
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
