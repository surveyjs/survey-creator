import { Base, SurveyModel } from "survey-core";
import { IQuestionToolboxItem } from "../../toolbox";
import { CreatorBase } from "../../creator-base";

export class ToolboxItemViewModel extends Base {
  constructor(
    protected item: IQuestionToolboxItem,
    protected creator: CreatorBase<SurveyModel>
  ) {
    super();
  }

  // correct handle click vs drag
  private pointerDownEvent;
  private startX;
  private startY;
  private currentX;
  private currentY;

  public onPointerDown(pointerDownEvent) {
    pointerDownEvent.preventDefault();
    this.pointerDownEvent = pointerDownEvent;
    this.startX = pointerDownEvent.pageX;
    this.startY = pointerDownEvent.pageY;
    document.addEventListener("pointermove", this.startDragToolboxItem);
  }
  public click = (event) => {
    this.clearListeners();
    this.creator.clickToolboxItem(this.item.json);
  };
  private startDragToolboxItem = (pointerMoveEvent) => {
    pointerMoveEvent.preventDefault();

    this.currentX = pointerMoveEvent.pageX;
    this.currentY = pointerMoveEvent.pageY;
    if (this.isMicroMovement) return;

    this.clearListeners();

    var json = this.creator.getJSONForNewElement(this.item.json);
    this.creator.dragDropHelper.startDragToolboxItem(
      this.pointerDownEvent,
      json
    );
    return true;
  };

  // see https://stackoverflow.com/questions/6042202/how-to-distinguish-mouse-click-and-drag
  private get isMicroMovement() {
    const delta = 10;
    const diffX = Math.abs(this.currentX - this.startX);
    const diffY = Math.abs(this.currentY - this.startY);
    return diffX < delta && diffY < delta;
  }
  private clearListeners() {
    if(!this.pointerDownEvent) return;
    const toolboxItemHTMLElement = <HTMLElement>this.pointerDownEvent.target;
    document.removeEventListener("pointermove", this.startDragToolboxItem);
  }
  // EO correct handle click vs drag
}
