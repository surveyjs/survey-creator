import * as ko from "knockout";
import {
  ItemValue,
  QuestionSelectBase,
  SurveyItemValueViewModel, SurveyModel,
} from "survey-core";
import {
  CreatorBase,
  DragDropHelper,
  ItemValueWrapperViewModel,
} from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
import { KnockoutDragEvent } from "../events";

const template = require("./item-value.html");

class KnockoutItemValueWrapperViewModel extends ItemValueWrapperViewModel {
  constructor( public creator: CreatorBase<SurveyModel>, public question: QuestionSelectBase, public item: ItemValue, public templateData:any) {
    super(creator, question, item);
  }

  koDragStart(model: ItemValueWrapperViewModel, event: DragEvent) {
    return super.dragStart(model, this.wrapDragEvent(event));
  }
  koDragOver(model: ItemValueWrapperViewModel, event: DragEvent) {
    return super.dragOver(model, this.wrapDragEvent(event));
  }
  koDragEnd(model: ItemValueWrapperViewModel, event: DragEvent) {
    return super.dragEnd(model, this.wrapDragEvent(event));
  }
  koDrop(model: ItemValueWrapperViewModel, event: DragEvent) {
    return super.drop(model, this.wrapDragEvent(event))
  }

  private wrapDragEvent(event: DragEvent): KnockoutDragEvent {
    return new KnockoutDragEvent(event);
  }
}

ko.components.register("svc-item-value", {
  viewModel: {
    createViewModel: (params: SurveyItemValueViewModel, componentInfo: any) => {
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
    },
  },
  template: template,
});
