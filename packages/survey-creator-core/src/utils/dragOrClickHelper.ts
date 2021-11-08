export class DragOrClickHelper {
  private pointerDownEvent;
  private currentTarget;
  private startX;
  private startY;
  private currentX;
  private currentY;

  constructor(private dragHandler) { }

  public onPointerDown(pointerDownEvent) {
    this.pointerDownEvent = pointerDownEvent;
    this.currentTarget = pointerDownEvent.currentTarget;
    this.startX = pointerDownEvent.pageX;
    this.startY = pointerDownEvent.pageY;
    document.addEventListener("pointermove", this.tryToStartDrag);
    this.currentTarget.addEventListener("pointerup", this.onPointerUp);
  }

  private onPointerUp = (pointerUpEvent) => {
    this.clearListeners();
  }

  private tryToStartDrag = (pointerMoveEvent) => {
    this.currentX = pointerMoveEvent.pageX;
    this.currentY = pointerMoveEvent.pageY;
    if (this.isMicroMovement) return;

    this.clearListeners();

    this.dragHandler(this.pointerDownEvent, this.currentTarget);
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
    if (!this.pointerDownEvent) return;
    document.removeEventListener("pointermove", this.tryToStartDrag);
    this.currentTarget.removeEventListener("pointerup", this.onPointerUp);
  }
}