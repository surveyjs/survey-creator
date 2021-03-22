import { IPortableDragEvent, IPortableMouseEvent } from "@survey/creator";

export class KnockoutMouseEvent implements IPortableMouseEvent {
  constructor(public event: MouseEvent) {}
  stopPropagation() {
    this.event.stopPropagation();
  }
  preventDefault() {
    this.event.preventDefault();
  }
  get cancelBubble(): boolean {
    return this.event.cancelBubble;
  }
  set cancelBubble(value: boolean) {
    this.event.cancelBubble = value;
  }
  get target(): EventTarget | null {
    return this.event.target;
  }
  get currentTarget(): EventTarget | null {
    return this.event.currentTarget;
  }
  get clientX(): number {
    return this.event.clientX;
  }
  get clientY(): number {
    return this.event.clientY;
  }
  get offsetX(): number {
    return this.event.offsetX;
  }
  get offsetY(): number {
    return this.event.offsetY;
  }
}

export class KnockoutDragEvent extends KnockoutMouseEvent
  implements IPortableDragEvent {
  constructor(public event: DragEvent) {
    super(event);
  }

  get dataTransfer(): DataTransfer {
    return this.event.dataTransfer;
  }
}
