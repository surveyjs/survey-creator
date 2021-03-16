import {
  SurveyElement,
  Question,
  propertyArray,
  Base,
  SurveyModel,
  SurveyElementTemplateData,
} from "survey-core";
import { CreatorBase } from "../creator-base";
import "./question.scss";

export class QuestionAdornerViewModel extends Base {
  public creator: CreatorBase<SurveyModel>;
  public question: Question;

  @propertyArray() actions;

  constructor(
    creator: CreatorBase<SurveyModel>,
    question: Question,
    public templateData: SurveyElementTemplateData
  ) {
    super();
    this.creator = creator;
    this.question = question;
    this.actions = creator.getContextActions(question);
  }
  select(model: QuestionAdornerViewModel, event: Event) {
    event.stopPropagation();
    event.cancelBubble = true;
    model.creator.selectElement(model.question);
    return true;
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
