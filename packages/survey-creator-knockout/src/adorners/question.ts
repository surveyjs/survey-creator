import * as ko from "knockout";
import { Question, QuestionHtmlModel, SurveyTemplateRendererViewModel } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { SurveyCreatorModel, QuestionAdornerViewModel } from "survey-creator-core";
import { KnockoutMouseEvent } from "../events";
const template = require("./question.html");

export function createQuestionViewModel(
  params: SurveyTemplateRendererViewModel,
  componentInfo: any,
  model?: QuestionAdornerViewModel
): QuestionAdornerViewModel {
  if (!model) {
    model = new QuestionAdornerViewModel(
      params.componentData,
      params.templateData.data as Question,
      params.templateData
    );
  }
  model["koSelect"] = (model: QuestionAdornerViewModel, event: MouseEvent) => {
    return model.select(model, new KnockoutMouseEvent(event));
  };
  model["koIsEmptyElement"] = ko.computed(() => {
    if (model.element instanceof QuestionHtmlModel) {
      return !model.element.locHtml["koRenderedHtml"]();
    }
    return model.isEmptyElement;
  });
  model["adornerComponent"] = undefined;
  const implementor = new ImplementorBase(model);
  ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
    implementor.dispose();
  });
  return model;
}

ko.components.register("svc-question", {
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
