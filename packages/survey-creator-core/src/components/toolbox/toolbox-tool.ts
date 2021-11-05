import { Base, SurveyModel } from "survey-core";
import { IQuestionToolboxItem } from "../../toolbox";
import { CreatorBase } from "../../creator-base";
import { DragDropSurveyElements } from "survey-core";

export class ToolboxToolViewModel extends Base {
  constructor(
    protected item: IQuestionToolboxItem,
    protected creator: CreatorBase<SurveyModel>
  ) {
    super();
  }

  // correct handle click vs drag
  private pointerDownEvent;
  private currentTarget;
  private startX;
  private startY;
  private currentX;
  private currentY;

  public get allowAdd() {
    return !this.creator.readOnly;
  }

  public click = (event) => {
    if (!this.allowAdd) return;
    if (this.item.id === 'dotsItem-id') return true; //toolbox responsive popup
    this.creator.clickToolboxItem(this.item.json);
  };

  public onPointerDown(pointerDownEvent) {
    if (!this.allowAdd) return;
    if (this.item.id === 'dotsItem-id') return true; //toolbox responsive popup
    this.pointerDownEvent = pointerDownEvent;
    this.currentTarget = pointerDownEvent.currentTarget;
    this.startX = pointerDownEvent.pageX;
    this.startY = pointerDownEvent.pageY;
    document.addEventListener("pointermove", this.startDragToolboxItem);
    this.currentTarget.addEventListener("pointerup", this.onPointerUp);
  }
  public onPointerUp = (pointerUpEvent) => {
    this.clearListeners();
  }
  private startDragToolboxItem = (pointerMoveEvent) => {
    this.currentX = pointerMoveEvent.pageX;
    this.currentY = pointerMoveEvent.pageY;
    if (this.isMicroMovement) return;

    this.clearListeners();

    var json = this.creator.getJSONForNewElement(this.item.json);
    this.dragDropHelper.startDragToolboxItem(this.pointerDownEvent, json);
    return true;
  };

  private get dragDropHelper(): DragDropSurveyElements {
    return this.creator.dragDropSurveyElements;
  }

  // see https://stackoverflow.com/questions/6042202/how-to-distinguish-mouse-click-and-drag
  private get isMicroMovement() {
    const delta = 10;
    const diffX = Math.abs(this.currentX - this.startX);
    const diffY = Math.abs(this.currentY - this.startY);
    return diffX < delta && diffY < delta;
  }
  private clearListeners() {
    if (!this.pointerDownEvent) return;
    document.removeEventListener("pointermove", this.startDragToolboxItem);
    this.currentTarget.removeEventListener("pointerup", this.onPointerUp);
  }
  // EO correct handle click vs drag
}
