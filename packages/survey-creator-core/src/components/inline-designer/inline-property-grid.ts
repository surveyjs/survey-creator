import { Base, DomDocumentHelper, DomWindowHelper, property } from "survey-core";
import { clampToViewport, dragPosition, grabOffset, IPanelPoint, IPanelSize } from "../../plugins/collaboration/bar/floating-panel/floating-panel-geometry";

// The box the panel opens next to (viewport coordinates). `leftReserve` is the space the "+" handle takes on the
// element's left side, so the panel does not cover it when it opens on the left.
export interface IInlinePropertyGridAnchor {
  left: number;
  top: number;
  right: number;
  bottom: number;
  leftReserve?: number;
}

// Inline layout mode (prompt 05, prototype): a small non-modal floating window for the property grid.
// Not FloatingPanelModel (collaboration): that one opens docked at full height, writes a fixed height, focuses its
// root on show and closes on Escape from anywhere. Only its pure geometry helpers are reused.
// Position is `fixed` (viewport coordinates): the panel does not follow selection or scrolling once open (PG02).
export class InlinePropertyGridPanelModel extends Base {
  public static Width = 320;
  // Space between the panel and the viewport edges / the element's outline.
  public static Gap = 8;
  // The panel keeps at least this height when it opens low in the viewport (it is moved up instead).
  public static MinOpenHeight = 480;
  public static MaxHeightRatio = 0.7;

  @property({ defaultValue: false }) isOpen: boolean;
  @property({ defaultValue: false }) isDragging: boolean;
  @property({ defaultValue: 0 }) left: number;
  @property({ defaultValue: 0 }) top: number;
  @property({ defaultValue: 0 }) maxHeight: number;
  // Set by the first drag: later opens reuse the user's position instead of the element's.
  private userPositioned: boolean = false;
  private grab: IPanelPoint;
  private dragSize: IPanelSize;
  public rootElement: HTMLElement;

  constructor() {
    super();
    if (DomWindowHelper.isAvailable()) {
      DomWindowHelper.addEventListener("resize", this.onWindowResize);
    }
  }

  public get width(): number {
    return Math.min(InlinePropertyGridPanelModel.Width, Math.max(0, this.viewport.width - 2 * InlinePropertyGridPanelModel.Gap));
  }
  public get rootCss(): string {
    return "svc-inline-property-grid" + (this.isDragging ? " svc-inline-property-grid--dragging" : "");
  }
  public get rootStyle(): { [index: string]: string } {
    return {
      left: this.left + "px",
      top: this.top + "px",
      width: this.width + "px",
      maxHeight: this.maxHeight + "px"
    };
  }

  // An open panel does not move (a Settings click on another element only re-focuses it).
  public open(anchor: IInlinePropertyGridAnchor): void {
    if (!this.isOpen) {
      this.place(anchor);
    }
    this.isOpen = true;
  }
  public close(): void {
    this.endDrag();
    this.isOpen = false;
  }

  // PG02: right of the element, top-aligned; on the left when there is no room on the right; over the element,
  // at the viewport's right edge, when neither side fits (a narrow host). Kept inside the viewport.
  private place(anchor: IInlinePropertyGridAnchor): void {
    const gap = InlinePropertyGridPanelModel.Gap;
    const vp = this.viewport;
    const width = this.width;
    if (this.userPositioned) {
      this.updateMaxHeight();
      this.clamp();
      return;
    }
    let left: number;
    if (!anchor) {
      left = vp.width - gap - width;
    } else {
      left = anchor.right + gap;
      if (left + width > vp.width - gap) {
        const onLeft = anchor.left - (anchor.leftReserve || 0) - gap - width;
        left = onLeft >= gap ? onLeft : vp.width - gap - width;
      }
    }
    const minHeight = Math.min(vp.height * InlinePropertyGridPanelModel.MaxHeightRatio, InlinePropertyGridPanelModel.MinOpenHeight);
    let top = !!anchor ? anchor.top : gap;
    top = Math.max(gap, Math.min(top, vp.height - gap - minHeight));
    this.left = Math.round(Math.max(gap, left));
    this.top = Math.round(top);
    this.updateMaxHeight();
  }
  private updateMaxHeight(): void {
    const vp = this.viewport;
    const gap = InlinePropertyGridPanelModel.Gap;
    this.maxHeight = Math.round(Math.max(120, Math.min(vp.height * InlinePropertyGridPanelModel.MaxHeightRatio, vp.height - gap - this.top)));
  }
  private clamp(): void {
    const size = this.measuredSize;
    const pos = clampToViewport({ x: this.left, y: this.top }, size, this.viewport, InlinePropertyGridPanelModel.Gap);
    this.left = Math.round(pos.x);
    this.top = Math.round(pos.y);
  }
  private onWindowResize = () => {
    if (!this.isOpen || this.isDisposed) return;
    this.updateMaxHeight();
    this.clamp();
  };

  public setRootElement(el: HTMLElement): void {
    this.rootElement = el;
  }

  // Header drag (borrowed from FloatingPanelModel.onPointerDown): document listeners own the drag.
  public onHeaderPointerDown(event: PointerEvent): void {
    if (!event || event.button !== 0 || !this.rootElement) return;
    const target: any = event.target;
    if (!!target && typeof target.closest === "function" && !!target.closest("button")) return;
    const rect = this.rootElement.getBoundingClientRect();
    this.grab = grabOffset({ x: event.clientX, y: event.clientY }, { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
    this.dragSize = { width: rect.width, height: rect.height };
    this.isDragging = true;
    const doc = DomDocumentHelper.getDocument();
    if (!!doc) {
      doc.addEventListener("pointermove", this.onDocumentPointerMove);
      doc.addEventListener("pointerup", this.onDocumentPointerUp);
      doc.addEventListener("pointercancel", this.onDocumentPointerUp);
    }
    if (typeof event.preventDefault === "function") event.preventDefault();
  }
  private onDocumentPointerMove = (event: PointerEvent) => {
    if (!this.isDragging) return;
    const pos = dragPosition({ x: event.clientX, y: event.clientY }, this.grab, this.dragSize, this.viewport, InlinePropertyGridPanelModel.Gap);
    this.left = Math.round(pos.x);
    this.top = Math.round(pos.y);
    this.userPositioned = true;
  };
  private onDocumentPointerUp = () => {
    this.endDrag();
  };
  private endDrag(): void {
    const doc = DomDocumentHelper.getDocument();
    if (!!doc) {
      doc.removeEventListener("pointermove", this.onDocumentPointerMove);
      doc.removeEventListener("pointerup", this.onDocumentPointerUp);
      doc.removeEventListener("pointercancel", this.onDocumentPointerUp);
    }
    if (this.isDragging)this.isDragging = false;
  }

  private get viewport(): IPanelSize {
    const docEl = DomDocumentHelper.getDocumentElement();
    return {
      width: DomWindowHelper.getInnerWidth() || docEl?.clientWidth || 0,
      height: DomWindowHelper.getInnerHeight() || docEl?.clientHeight || 0
    };
  }
  private get measuredSize(): IPanelSize {
    if (!!this.rootElement) {
      const rect = this.rootElement.getBoundingClientRect();
      if (rect.width > 0) return { width: rect.width, height: rect.height };
    }
    return { width: this.width, height: Math.min(this.maxHeight, InlinePropertyGridPanelModel.MinOpenHeight) };
  }

  public dispose(): void {
    this.endDrag();
    if (DomWindowHelper.isAvailable()) {
      DomWindowHelper.removeEventListener("resize", this.onWindowResize);
    }
    this.rootElement = undefined;
    super.dispose();
  }
}
