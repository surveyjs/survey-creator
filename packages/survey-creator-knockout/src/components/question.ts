import * as ko from "knockout";
import { Question, SurveyTemplateRendererViewModel } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { CreatorBase, QuestionAdornerViewModel } from "@survey/creator";
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
  model["adornerComponent"] = undefined;
  new ImplementorBase(model);
  ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
    model.dispose();
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
  template: template
});
