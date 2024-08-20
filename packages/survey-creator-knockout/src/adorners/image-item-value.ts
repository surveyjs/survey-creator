import * as ko from "knockout";
import {
  ImageItemValue,
  QuestionImagePickerModel,
  QuestionSelectBase,
  SurveyTemplateRendererViewModel,
} from "survey-core";
import { SurveyCreatorModel, ImageItemValueWrapperViewModel } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./image-item-value.html");

class KnockoutImageItemValueWrapperViewModel extends ImageItemValueWrapperViewModel {
  constructor(
    creator: SurveyCreatorModel,
    public question: QuestionImagePickerModel,
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
  get attributes() {
    return this.isDraggable
      ? { "data-sv-drop-target-item-value": this.item.value }
      : null;
  }
  public blockEvent(
    _: KnockoutImageItemValueWrapperViewModel,
    event: MouseEvent
  ) {
    event.stopPropagation();
  }

  dragleave = (_, event) => {
    this.onDragLeave(event);
  }
  drop = (_, event) => {
    this.onDrop(event);
  }
  dragover = (_, event) => {
    this.onDragOver(event);
  }
  getNewItemStyle() {
    const needStyle = !this.getIsNewItemSingle();
    return { width: needStyle ? this.question.renderedImageWidth : undefined, height: needStyle ? this.question.renderedImageHeight : undefined };
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
        componentInfo.element.nextSibling
      );
      new ImplementorBase(model);
      return model;
    }
  },
  template: template.default
});
