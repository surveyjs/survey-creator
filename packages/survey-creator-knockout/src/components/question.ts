import * as ko from "knockout";
import { SurveyElement, Question } from "survey-core";
import { SurveyCreator } from "../creator";
import {
  SurveyElementViewModel,
  SurveyElementTemplateData,
  QuestionMatrix,
} from "survey-knockout-ui";
//import "./question.scss";
const template = require("./question.html");
// import template from "./question.html";

export class QuestionAdornerViewModel {
  public creator: SurveyCreator;
  public question: Question;
  public actions = ko.observableArray();

  constructor(
    creator: SurveyCreator,
    question: Question,
    public templateData: SurveyElementTemplateData
  ) {
    this.creator = creator;
    this.question = question;
    this.actions(creator.getContextActions(question));
  }
  select(model: QuestionAdornerViewModel, event: Event) {
    event.stopPropagation();
    model.creator.selectElement(model.question);
  }
  css() {
    return this.creator.isElementSelected(this.question)
      ? "svc-question__content--selected"
      : "";
  }
  dispose() {}
  get isDraggable() {
    return true;
  }
  dragStart(model: QuestionAdornerViewModel, event: DragEvent) {
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
  dragOver(model: QuestionAdornerViewModel, event: DragEvent) {
    if (!model.isDraggable) return false;
    if (!event["markEvent"]) {
      event["markEvent"] = true;
      model.creator.dragDropHelper.doDragDropOver(event, model.question, true);
      return false;
    }

    // event.dataTransfer.dropEffect = "move";
    // event.preventDefault();
  }
  drop(model: QuestionAdornerViewModel, event: DragEvent) {
    var helper = model.creator.dragDropHelper;
    var preventDefault = !(
      !!helper.ddTarget &&
      !!helper.ddTarget.source &&
      <any>helper.ddTarget.source.parent == model.question
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
  dragEnd(model: QuestionAdornerViewModel, event: DragEvent) {
    delete model.question["isDragStarted"];
    model.creator.dragDropHelper.end();

    event.preventDefault();
  }
}

ko.components.register("svc-question", {
  viewModel: {
    createViewModel: (params: SurveyElementViewModel, componentInfo: any) => {
      const creator = params.componentData;
      const question = params.templateData.data;
      const scrollSubscription = ko.computed(() => {
        if (creator.isElementSelected(question)) {
          // componentInfo.element.scrollIntoView();
        }
      });
      const model = new QuestionAdornerViewModel(
        params.componentData,
        params.templateData.data as Question,
        params.templateData
      );
      ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
        scrollSubscription.dispose();
        model.dispose();
      });
      return model;
    },
  },
  template: template,
});
