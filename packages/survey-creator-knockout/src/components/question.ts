import * as ko from "knockout";
import { Question } from "survey-knockout";
import { SurveyCreator } from "../creator";

import "./question.scss";
const template = require("./question.html");
// import template from "./question.html";

export class QuestionViewModel {
  public creator: SurveyCreator;
  public question: Question;
  public actions = ko.observableArray();

  constructor(creator: SurveyCreator, question: Question) {
    this.creator = creator;
    this.question = question;
    this.actions(creator.getContextActions(question));
  }
  select(model: QuestionViewModel, event: Event) {
    model.creator.selectElement(model.question);
  }
  css() {
    return this.creator.isElementSelected(this.question) ? "svc-question__content--selected" : "";
  }
  dispose() {
  }
  get isDraggable() {
    return true;
  }
  dragStart(model: QuestionViewModel, event: DragEvent) {
    var target: any = event.target || event.srcElement;
    if (
      !!target &&
      !!target.contains &&
      target !== document.activeElement &&
      target.contains(document.activeElement)
    ) {
      event.preventDefault();
      return false;
    }
    if (!model.isDraggable) return false;
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      model.creator.dragDropHelper.startDragQuestion(event, model.question);
    }
    event.cancelBubble = true;

    event.dataTransfer.setData("svc-item-json", JSON.stringify(""));
    return true;
  }
  dragOver(model: QuestionViewModel, event: DragEvent) {
    if (!model.isDraggable) return false;
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      model.creator.dragDropHelper.doDragDropOver(event, model.question, true);
      return false;
    }

    // event.dataTransfer.dropEffect = "move";
    // event.preventDefault();
  }
  drop(model: QuestionViewModel, event: DragEvent) {
    var helper = model.creator.dragDropHelper;
    var preventDefault = !(
      !!helper.ddTarget &&
      !!helper.ddTarget.source &&
      helper.ddTarget.source.parent == model.question
    );
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      helper.doDrop(event, preventDefault);
    }

    // var data = event.dataTransfer.getData("svc-item-json");
    // if(!!data) {
    // }
    // event.preventDefault();
  }
  dragEnd(model: QuestionViewModel, event: DragEvent) {
    delete model.question["isDragStarted"];
    model.creator.dragDropHelper.end();

    event.preventDefault();
  }
}

ko.components.register("svc-question", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const creator = params.creator;
      const scrollSubscription = ko.computed(() => {
        if(creator.isElementSelected(params.question)) {
          // componentInfo.element.scrollIntoView();
        }
      });
      const model = new QuestionViewModel(creator, params.question);
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        scrollSubscription.dispose();
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
