import * as ko from "knockout";
import {
  ImageItemValue,
  QuestionSelectBase,
  SurveyTemplateRendererViewModel,
  SurveyModel
} from "survey-core";
import {
  CreatorBase,
  ImageItemValueWrapperViewModel
} from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
import { KnockoutDragEvent } from "../events";

const template = require("./image-item-value.html");

class KnockoutImageItemValueWrapperViewModel extends ImageItemValueWrapperViewModel { 
  constructor(creator: CreatorBase<SurveyModel>, public question: QuestionSelectBase, public item: ImageItemValue, public templateData: any, itemsRoot: HTMLElement) {
    super(creator, question, item, templateData, itemsRoot);
  }

  get showDragDropGhostOnTop():boolean {return super.getItemValueGhostPosition() === "top"};
  get showDragDropGhostOnBottom():boolean {return super.getItemValueGhostPosition() === "bottom"}

  koDragStart(model: ImageItemValueWrapperViewModel, event: DragEvent) {
    return super.dragStart(model, this.wrapDragEvent(event));
  }
  koDragEnd(model: ImageItemValueWrapperViewModel, event: DragEvent) {
    return super.dragEnd(model, this.wrapDragEvent(event));
  }
  koDragOver(model: ImageItemValueWrapperViewModel, event: DragEvent) {
    return super.dragOver(model, this.wrapDragEvent(event));
  }
  koDrop(model: ImageItemValueWrapperViewModel, event: DragEvent) {
    return super.drop(model, this.wrapDragEvent(event))
  }

  private wrapDragEvent(event: DragEvent): KnockoutDragEvent {
    return new KnockoutDragEvent(event);
  }
}

ko.components.register("svc-image-item-value", {
  viewModel: {
    createViewModel: (params: SurveyTemplateRendererViewModel, componentInfo: any) => {
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
