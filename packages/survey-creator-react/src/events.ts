import { IPortableDragEvent, IPortableMouseEvent } from "survey-creator-core";

export class ReactMouseEvent implements IPortableMouseEvent {
  constructor(public event: React.MouseEvent<HTMLDivElement, MouseEvent>) {}
  stopPropagation() {
    this.event.stopPropagation();
    //this.event.nativeEvent.stopPropagation();
    //this.event.nativeEvent.stopImmediatePropagation();
  }
  preventDefault() {
    this.event.preventDefault();
    //this.event.nativeEvent.preventDefault();
  }
  get cancelBubble(): boolean {
    //return this.event.cancelBubble;
    return false;
  }
  set cancelBubble(value: boolean) {
    //this.event.cancelBubble = value;
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
    return this.event.nativeEvent.offsetX;
  }
  get offsetY(): number {
    return this.event.nativeEvent.offsetY;
  }
}

export class ReactDragEvent extends ReactMouseEvent
  implements IPortableDragEvent {
  constructor(public event: React.DragEvent<HTMLDivElement>) {
    super(event);
  }

  get dataTransfer(): DataTransfer {
    return this.event.dataTransfer;
  }
}
