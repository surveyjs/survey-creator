import * as ko from "knockout";
import {
  ItemValue,
  QuestionSelectBase,
  SurveyTemplateRendererViewModel,
  SurveyModel
} from "survey-core";
import { CreatorBase, ItemValueWrapperViewModel } from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
import { KnockoutDragEvent } from "../events";

const template = require("./item-value.html");

class KnockoutItemValueWrapperViewModel extends ItemValueWrapperViewModel {
  constructor(
    public creator: CreatorBase<SurveyModel>,
    public question: QuestionSelectBase,
    public item: ItemValue,
    public templateData: any
  ) {
    super(creator, question, item);
  }

  get showDragDropGhostOnTop(): boolean {
    return this.ghostPosition === "top";
  }
  get showDragDropGhostOnBottom(): boolean {
    return this.ghostPosition === "bottom";
  }
  get attributes() {
    return this.isDraggable
      ? { "data-svc-drop-target-element-name": this.item.value }
      : null;
  }
}

ko.components.register("svc-item-value", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      const creator = params.componentData.creator;
      const question = params.componentData.question;
      const item = params.templateData.data;

      const model = new KnockoutItemValueWrapperViewModel(
        creator,
        question,
        item,
        params.templateData
      );
      new ImplementorBase(model);
      return model;
    }
  },
  template: template
});
