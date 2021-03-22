import {
  SurveyElement,
  Question,
  propertyArray,
  Base,
  SurveyModel,
  SurveyElementTemplateData,
  property,
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { DragDropHelper } from "../dragdrophelper";
import { IPortableDragEvent, IPortableMouseEvent } from "../utils/events";
import "./question.scss";

export class QuestionAdornerViewModel extends Base {
  public creator: CreatorBase<SurveyModel>;
  public question: Question;

  @propertyArray() actions;
  @property() isDragged: boolean;

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
  select(model: QuestionAdornerViewModel, event: IPortableMouseEvent) {
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

  private get dragDropHelper(): DragDropHelper<SurveyModel> {
    return this.creator.dragDropHelper;
  }

  public get showDragOverFeedbackAbove(): boolean {
    return this.dragDropHelper.showDragOverFeedbackAbove(this.question);
  }
  public get showDragOverFeedbackBelow(): boolean {
    return this.dragDropHelper.showDragOverFeedbackBelow(this.question);
  }
  public get dragOverFeedback(): SurveyElementTemplateData {
    return this.dragDropHelper.dragOverFeedback;
  }

  dragStart(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    setTimeout(() => (model.isDragged = true), 1);
    return model.dragDropHelper.dragStart(model.question, event);
  }
  dragOver(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    model.dragDropHelper.dragOver(model.question, event);
  }
  drop(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    model.dragDropHelper.drop(model.question, event);
  }
  dragEnd(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    setTimeout(() => (model.isDragged = false), 1);
    model.dragDropHelper.dragEnd(model.question, event);
  }
}
