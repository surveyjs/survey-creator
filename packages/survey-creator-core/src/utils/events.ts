export interface IPortableEvent {
  stopPropagation();
  preventDefault();
  cancelBubble: boolean;
  readonly target: EventTarget | null;
  readonly currentTarget: EventTarget | null;
}
export interface IPortableMouseEvent extends IPortableEvent {
  readonly clientX: number;
  readonly clientY: number;
  readonly offsetX: number;
  readonly offsetY: number;
}

export interface IPortableDragEvent extends IPortableMouseEvent {
  readonly dataTransfer: DataTransfer;
}
