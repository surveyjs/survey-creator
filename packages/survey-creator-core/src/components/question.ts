import {
  SurveyElement,
  Question,
  propertyArray,
  Base,
  SurveyModel,
  SurveyElementTemplateData,
  property,
  QuestionHtmlModel,
  PanelModel,
  PanelModelBase
} from 'survey-core';
import { CreatorBase } from '../creator-base';
import { DragDropHelper } from '../dragdrophelper';
import { IPortableDragEvent, IPortableMouseEvent } from '../utils/events';
import './question.scss';

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
    let result = this.creator.isElementSelected(this.surveyElement)
      ? 'svc-question__content--selected'
      : '';

    if (this.isEmptyElement) {
      result += ' svc-question__content--empty';
    }

    return result;
  }
  dispose() {}
  get isDraggable() {
    return true;
  }

  public get isEmptyElement(): boolean {
    if (this.surveyElement instanceof QuestionHtmlModel) {
      return !this.surveyElement.html;
    }

    if (this.surveyElement instanceof PanelModelBase) {
      const panel = (this.surveyElement as any) as PanelModelBase;
      return (
        !panel.rows || panel.rows.length <= 0 || panel.elements.length === 0
      );
    }

    return false;
  }

  public get placeholderText(): string {
    return 'Drop questions here';
  }

  private get dragDropHelper(): DragDropHelper {
    return this.creator.dragDropHelper;
  }

  startDrag(event: PointerEvent) {
    this.dragDropHelper.startDragQuestion(event, <any>this.surveyElement);
    return true;
  }

  dragStart(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    // setTimeout(() => (model.isDragged = true), 1);
    const sourceElement = model.surveyElement;
    return model.dragDropHelper.onDragStartQuestion(event, <any>sourceElement);
    // return model.dragDropHelper.dragStart(model.surveyElement, event);
  }
  dragOver(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    const draggedOverElement = model.surveyElement;
    return model.dragDropHelper.onDragOver(event, draggedOverElement);
    // model.dragDropHelper.dragOver(model.surveyElement, event);
  }
  drop(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    return model.dragDropHelper.onDrop(event);
    // model.dragDropHelper.drop(model.surveyElement, event);
  }
  dragEnd(model: QuestionAdornerViewModel, event: IPortableDragEvent) {
    // setTimeout(() => (model.isDragged = false), 1);
    return model.dragDropHelper.onDragEnd();
    // model.dragDropHelper.dragEnd(model.surveyElement, event);
  }
}
