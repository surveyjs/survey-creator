import {
  SurveyElement,
  Question,
  propertyArray,
  Base,
  SurveyModel,
  SurveyElementTemplateData,
  property,
  QuestionHtmlModel,
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { DragDropHelper, DragDropHelper2 } from "../dragdrophelper";
import { IPortableDragEvent, IPortableMouseEvent } from "../utils/events";
import "./question.scss";

export class QuestionAdornerViewModel extends Base {
  public creator: CreatorBase<SurveyModel>;
  public surveyElement: SurveyElement;

  @propertyArray() actions;
  @property() isDragged: boolean;

  constructor(
    creator: CreatorBase<SurveyModel>,
    surveyElement: SurveyElement,
    public templateData: SurveyElementTemplateData
  ) {
    super();
    this.creator = creator;
    this.surveyElement = surveyElement;
    this.actions = creator.getContextActions(surveyElement);
  }
  select(model: QuestionAdornerViewModel, event: IPortableMouseEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
    model.creator.selectElement(model.surveyElement);
    return true;
  }
  css() {
    return this.creator.isElementSelected(this.surveyElement)
      ? "svc-question__content--selected"
      : "";
  }
  dispose() {}
  get isDraggable() {
    return true;
  }

  public get isEmptyElement(): boolean {
    if (this.surveyElement instanceof QuestionHtmlModel) {
      return !this.surveyElement.html;
    }
    return false;
  }

  public get placeholderText(): string {
    return "Drop questions here";
  }

  private get dragDropHelper(): DragDropHelper<SurveyModel> {
    return this.creator.dragDropHelper;
  }

  private get dragDropHelper2(): DragDropHelper2 {
    return this.creator.dragDropHelper2;
  }

  public get showDragOverFeedbackAbove(): boolean {
    return this.dragDropHelper.showDragOverFeedbackAbove(this.surveyElement);
  }
  public get showDragOverFeedbackBelow(): boolean {
    return this.dragDropHelper.showDragOverFeedbackBelow(this.surveyElement);
  }
  public get dragOverFeedback(): SurveyElementTemplateData {
    return this.dragDropHelper.dragOverFeedback;
  }

  dragStart(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    setTimeout(() => (model.isDragged = true), 1);
    return model.dragDropHelper2.startDragQuestion(event, model.surveyElement);
    // return model.dragDropHelper.dragStart(model.surveyElement, event);
  }
  dragOver(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    model.dragDropHelper2.doDragDropOver(event, model.surveyElement, true);
    // model.dragDropHelper.dragOver(model.surveyElement, event);
  }
  drop(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    model.dragDropHelper2.doDrop(event);
    // model.dragDropHelper.drop(model.surveyElement, event);
  }
  dragEnd(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    setTimeout(() => (model.isDragged = false), 1);
    model.dragDropHelper2.end();
    // model.dragDropHelper.dragEnd(model.surveyElement, event);
  }
}
