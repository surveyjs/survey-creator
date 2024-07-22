import * as ko from "knockout";
import {
  ItemValue,
  QuestionSelectBase,
  SurveyTemplateRendererViewModel,
  SurveyModel
} from "survey-core";
import { SurveyCreatorModel, ItemValueWrapperViewModel } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";
import { KnockoutDragEvent } from "../events";

const template = require("./item-value.html");

class KnockoutItemValueWrapperViewModel extends ItemValueWrapperViewModel {
  constructor(
    creator: SurveyCreatorModel,
    public question: QuestionSelectBase,
    public item: ItemValue,
    public templateData: any
  ) {
    super(creator, question, item);
  }
  public koOnFocusOut(sender: KnockoutItemValueWrapperViewModel, event: any): void {
    this.onFocusOut(event);
  }
  get attributes() {
    return this.isDraggable
      ? { "data-sv-drop-target-item-value": this.item.value }
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
  template: template.default
});
