import * as ko from "knockout";
import {
  Question,
  SurveyElement,
  SurveyElementTemplateData,
  SurveyElementViewModel,
  SurveyModel,
} from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { CreatorBase, QuestionAdornerViewModel } from "@survey/creator";
import { KnockoutMouseEvent, KnockoutDragEvent } from "../events";
import { QuestionHtmlModel } from "survey-core";
import { PanelModelBase } from "../../../../../survey-library/build/survey-core/survey.core";
//import "./question.scss";
const template = require("./question.html");
// import template from "./question.html";

class KnockoutQuestionAdornerViewModel extends QuestionAdornerViewModel {
  constructor(
    creator: CreatorBase<SurveyModel>,
    surveyElement: SurveyElement,
    templateData: SurveyElementTemplateData
  ) {
    super(creator, surveyElement, templateData);
  }

  koSelect(model: QuestionAdornerViewModel, event: MouseEvent) {
    return super.select(model, this.wrapMouseEvent(event));
  }
  koDragStart(model: QuestionAdornerViewModel, event: DragEvent) {
    return super.dragStart(model, this.wrapDragEvent(event));
  }
  koDragOver(model: QuestionAdornerViewModel, event: DragEvent) {
    return super.dragOver(model, this.wrapDragEvent(event));
  }
  koDrop(model: QuestionAdornerViewModel, event: DragEvent) {
    return super.drop(model, this.wrapDragEvent(event));
  }
  koDragEnd(model: QuestionAdornerViewModel, event: DragEvent) {
    return super.dragEnd(model, this.wrapDragEvent(event));
  }
  private wrapMouseEvent(event: MouseEvent): KnockoutMouseEvent {
    return new KnockoutMouseEvent(event);
  }
  private wrapDragEvent(event: DragEvent): KnockoutDragEvent {
    return new KnockoutDragEvent(event);
  }
}

class KnockoutPanelAdornerViewModel extends KnockoutQuestionAdornerViewModel {
  constructor(
    creator: CreatorBase<SurveyModel>,
    question: Question,
    templateData: SurveyElementTemplateData
  ) {
    super(creator, question, templateData);
  }

  get isEmptyElement(): boolean {
    const panel = (this.surveyElement as any) as PanelModelBase;
    return !panel.elements || panel.elements.length <= 0;
  }
}

ko.components.register("svc-question", {
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
      const model = new KnockoutQuestionAdornerViewModel(
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
