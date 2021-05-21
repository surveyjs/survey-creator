import * as ko from "knockout";
import {
  ImageItemValue,
  QuestionSelectBase,
  SurveyTemplateRendererViewModel,
  SurveyModel
} from "survey-core";
import { CreatorBase, ImageItemValueWrapperViewModel } from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
import { KnockoutDragEvent } from "../events";

const template = require("./image-item-value.html");

class KnockoutImageItemValueWrapperViewModel extends ImageItemValueWrapperViewModel {
  constructor(
    creator: CreatorBase<SurveyModel>,
    public question: QuestionSelectBase,
    public item: ImageItemValue,
    public templateData: any,
    itemsRoot: HTMLElement
  ) {
    super(creator, question, item, templateData, itemsRoot);
  }

  get showDragDropGhostOnTop(): boolean {
    return this.ghostPosition === "top";
  }
  get showDragDropGhostOnBottom(): boolean {
    return this.ghostPosition === "bottom";
  }
}

ko.components.register("svc-image-item-value", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      const creator = params.componentData.creator;
      const question = params.componentData.question;
      const item = params.templateData.data;
      const model = new KnockoutImageItemValueWrapperViewModel(
        creator,
        question,
        <ImageItemValue>item,
        params.templateData,
        componentInfo.element.parentElement
      );
      new ImplementorBase(model);
      return model;
    }
  },
  template: template
});
