import * as ko from "knockout";
import { Question, QuestionHtmlModel, SurveyTemplateRendererViewModel } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";
import { SurveyCreatorModel, QuestionAdornerViewModel } from "survey-creator-core";
import { KnockoutMouseEvent } from "../events";
const template = require("./panel.html");

export function createPanelViewModel(
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
  new ImplementorBase(model);
  ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
    model.dispose();
  });
  return model;
}

ko.components.register("svc-panel", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      return createPanelViewModel(params, componentInfo);
    }
  },
  template: template.default
});
