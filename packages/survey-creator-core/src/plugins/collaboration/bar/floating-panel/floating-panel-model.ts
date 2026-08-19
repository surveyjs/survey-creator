import { Action, ActionContainer, Base, CssClassBuilder, DomDocumentHelper, DomWindowHelper, EventBase, property } from "survey-core";
import { getCollabString } from "../../collaboration-strings";
import { clampToViewport, dragPosition, grabOffset, IPanelBox, IPanelPoint, IPanelSize, restoreHeight, undockBox } from "./floating-panel-geometry";

import "./floating-panel.scss";

export interface IFloatingPanelOptions {
  id?: string;
  title?: string;
  contentComponentName?: string;
  contentComponentData?: any;
  width?: number;
  gap?: number;
  allowDrag?: boolean;
  allowMinimize?: boolean;
  allowClose?: boolean;
}

// Above the flyout sidebar (side-bar.scss: 1000) and below the modal popups.
const BASE_Z_INDEX = 1500;
const DEFAULT_WIDTH = 360;
const DEFAULT_GAP = 12;

let zIndexCounter = BASE_Z_INDEX;
let idCounter = 0;

// A non-modal window that stays open while the user keeps editing: docked to
// the viewport's right edge until the header is dragged, then free-floating and
// clamped to the viewport. Minimize collapses it to the header.
//
// The owner keeps the instance and renders it; the panel registers itself
// nowhere. `position: fixed` means it only has to sit somewhere inside the
// themed creator root to pick up the --sjs2-* variables.
//
// All geometry is arithmetic in `floating-panel-geometry`, and every DOM-shaped
// concern lives here behind `setComponentElement` / `resetComponentElement` - the
// same contract survey-core's popup views use. A framework view therefore only
// renders `rootCss` / `style`, hands over its root node once, and forwards the
// header's raw pointerdown; it owns no listeners and no arithmetic.
export class FloatingPanelModel extends Base {
  public static get baseZIndex(): number {
    return BASE_Z_INDEX;
  }

  public headerToolbar: ActionContainer = new ActionContainer();
  public onClose: EventBase<FloatingPanelModel> = new EventBase<FloatingPanelModel>();
  public onVisibleChanged: EventBase<FloatingPanelModel, { visible: boolean }> = new EventBase<FloatingPanelModel, { visible: boolean }>();

  @property({ defaultValue: false }) visible: boolean;
  @property({ defaultValue: true }) isDocked: boolean;
  @property({ defaultValue: false }) isMinimized: boolean;
  @property({ defaultValue: false }) isDragging: boolean;
  @property({ defaultValue: true }) allowDrag: boolean;
  @property({ defaultValue: true }) allowMinimize: boolean;
  @property({ defaultValue: true }) allowClose: boolean;

  @property() title: string;

  @property() contentComponentName: string;
  @property() contentComponentData: any;

  @property({ defaultValue: DEFAULT_WIDTH }) width: number;
  @property({ defaultValue: DEFAULT_GAP }) gap: number;
  @property({ defaultValue: 0 }) left: number;
  @property({ defaultValue: 0 }) top: number;
  @property({ defaultValue: 0 }) height: number;
  @property({ defaultValue: BASE_Z_INDEX }) zIndex: number;

  private grab: IPanelPoint = { x: 0, y: 0 };
  private dragSize: IPanelSize = { width: 0, height: 0 };
  private expandedHeight: number = 0;
  private viewportValue: IPanelSize = { width: 0, height: 0 };
  private rootElement: HTMLElement;
  private isTrackingPointer = false;

  // Bound once: add/removeEventListener compare by function identity.
  private onDocumentKeyDown = (event: KeyboardEvent): void => this.onKeyDown(event);
  private onWindowResize = (): void => this.syncViewport();
  private onDocumentPointerMove = (event: PointerEvent): void => this.drag({ x: event.clientX, y: event.clientY });
  private onDocumentPointerUp = (): void => {
    this.detachDragListeners();
    this.endDrag();
  };

  constructor(options: IFloatingPanelOptions = {}) {
    super();
    idCounter++;
    this.id = options.id || "floatingPanel" + idCounter;
    if (options.title !== undefined)this.title = options.title;
    if (options.contentComponentName !== undefined)this.contentComponentName = options.contentComponentName;
    if (options.contentComponentData !== undefined)this.contentComponentData = options.contentComponentData;
    if (typeof options.width === "number")this.width = options.width;
    if (typeof options.gap === "number")this.gap = options.gap;
    if (options.allowDrag !== undefined)this.allowDrag = options.allowDrag;
    if (options.allowMinimize !== undefined)this.allowMinimize = options.allowMinimize;
    if (options.allowClose !== undefined)this.allowClose = options.allowClose;
    this.buildHeaderToolbar();
  }

  public getType(): string {
    return "floatingpanel";
  }

  public get titleText(): string {
    return this.title || "";
  }
  public get titleId(): string {
    return this.id + "_title";
  }
  public get viewport(): IPanelSize {
    return this.viewportValue;
  }

  public get rootCss(): string {
    return new CssClassBuilder()
      .append("svc-floating-panel")
      .append("svc-floating-panel--docked", this.isDocked)
      .append("svc-floating-panel--floating", !this.isDocked)
      .append("svc-floating-panel--minimized", this.isMinimized)
      .append("svc-floating-panel--dragging", this.isDragging)
      .toString();
  }
  public get headerCss(): string {
    return new CssClassBuilder()
      .append("svc-floating-panel__header")
      .append("svc-floating-panel__header--dragging", this.isDragging)
      .toString();
  }
  public get bodyCss(): string {
    return "svc-floating-panel__body";
  }

  // The only inline geometry. Docked placement lives in the stylesheet and is
  // parameterized by these two custom properties.
  public get style(): { [index: string]: string } {
    const res: { [index: string]: string } = {
      "--svc-floating-panel-gap": this.gap + "px",
      "--svc-floating-panel-width": this.width + "px",
      zIndex: "" + this.zIndex
    };
    // The root stays in the DOM while hidden so the view hands it over once and
    // never thinks about the element again - the stable-wrapper shape
    // survey-core's popup views use. display:none also keeps the dialog out of
    // the accessibility tree.
    if (!this.visible) res.display = "none";
    if (this.isDocked) return res;
    res.left = this.left + "px";
    res.top = this.top + "px";
    res.height = this.isMinimized ? "auto" : this.height + "px";
    return res;
  }

  public show(): void {
    this.bringToFront();
    if (this.visible) return;
    this.visible = true;
    this.onVisibleChanged.fire(this, { visible: true });
    this.focusRoot();
  }
  public hide(): void {
    if (!this.visible) return;
    this.endDrag();
    this.visible = false;
    this.onVisibleChanged.fire(this, { visible: false });
    this.onClose.fire(this, {});
  }
  public minimize(): void {
    if (this.isMinimized) return;
    this.isMinimized = true;
    this.updateHeaderToolbar();
  }
  public restore(): void {
    if (!this.isMinimized) return;
    this.isMinimized = false;
    if (!this.isDocked) {
      const res = restoreHeight(this.top, this.expandedHeight, this.viewportValue.height, this.gap);
      this.top = res.top;
      this.height = res.height;
    }
    this.updateHeaderToolbar();
  }
  public toggleMinimize(): void {
    if (this.isMinimized)this.restore();
    else this.minimize();
  }
  public bringToFront(): void {
    zIndexCounter++;
    this.zIndex = zIndexCounter;
  }
  // Back to the right-edge dock; the explicit box is dropped.
  public redock(): void {
    this.endDrag();
    this.isDocked = true;
    this.left = 0;
    this.top = 0;
    this.height = 0;
  }

  // `rect` is the panel's measured box - the view is the only thing that can
  // read it, so it is passed in rather than queried here.
  public startDrag(pointer: IPanelPoint, rect: IPanelBox): void {
    if (!this.allowDrag) return;
    this.grab = grabOffset(pointer, rect);
    this.dragSize = { width: rect.width, height: rect.height };
    if (!this.isMinimized)this.expandedHeight = rect.height;
    if (this.isDocked) {
      const box = undockBox(rect, this.viewportValue, this.gap);
      this.isDocked = false;
      this.left = box.left;
      this.top = box.top;
      this.height = box.height;
      this.width = box.width;
    }
    this.isDragging = true;
    this.bringToFront();
  }
  public drag(pointer: IPanelPoint): void {
    if (!this.isDragging) return;
    const pos = dragPosition(pointer, this.grab, this.dragSize, this.viewportValue, this.gap);
    this.left = pos.x;
    this.top = pos.y;
  }
  public endDrag(): void {
    if (!this.isDragging) return;
    this.isDragging = false;
  }

  // The view hands over its root node and nothing else, exactly as
  // survey-core's popup views do (PopupBaseViewModel.setComponentElement).
  public setComponentElement(componentRoot: HTMLElement): void {
    if (!componentRoot || this.rootElement === componentRoot) return;
    this.resetComponentElement();
    this.rootElement = componentRoot;
    this.syncViewport();
    DomWindowHelper.addEventListener("resize", this.onWindowResize);
    // Escape closes the panel from anywhere, not only while focus is inside it:
    // the panel is non-modal, so the user is normally editing elsewhere. The
    // key is a no-op while the panel is hidden (see onKeyDown).
    const doc = this.getDocument();
    if (!!doc)doc.addEventListener("keydown", this.onDocumentKeyDown);
  }
  public resetComponentElement(): void {
    if (!this.rootElement) return;
    this.detachDragListeners();
    DomWindowHelper.removeEventListener("resize", this.onWindowResize);
    const doc = this.getDocument();
    if (!!doc)doc.removeEventListener("keydown", this.onDocumentKeyDown);
    this.rootElement = undefined;
  }

  // The header's only event, handed over raw - the same way sv-list and the
  // matrix rows hand their pointerdown to their models. From here the drag is
  // owned by document listeners, as DragDropDOMAdapter does, so the view takes
  // no part in it and no pointer capture is needed.
  public onPointerDown(event: PointerEvent): void {
    if (!this.allowDrag || !event || event.button !== 0 || !this.rootElement) return;
    // Header buttons stay clickable: a press on one is not a drag.
    const target: any = event.target;
    if (!!target && typeof target.closest === "function" && !!target.closest("button")) return;
    const rect = this.rootElement.getBoundingClientRect();
    this.startDrag({ x: event.clientX, y: event.clientY },
      { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
    this.attachDragListeners();
    if (typeof event.preventDefault === "function")event.preventDefault();
  }

  public updateViewport(size: IPanelSize): void {
    this.viewportValue = { width: size.width, height: size.height };
    if (this.isDocked) return;
    if (!this.isMinimized) {
      const res = restoreHeight(this.top, this.height, size.height, this.gap);
      this.top = res.top;
      this.height = res.height;
    }
    const pos = clampToViewport(
      { x: this.left, y: this.top },
      { width: this.width, height: this.isMinimized ? 0 : this.height },
      size, this.gap);
    this.left = pos.x;
    this.top = pos.y;
  }

  public onKeyDown(event: any): void {
    if (!event) return;
    if (event.key === "Escape" || event.keyCode === 27) {
      this.hide();
    }
  }

  public dispose(): void {
    this.resetComponentElement();
    this.endDrag();
    this.headerToolbar.dispose();
    this.onClose.clear();
    this.onVisibleChanged.clear();
    super.dispose();
  }

  private getDocument(): Document {
    return DomDocumentHelper.isAvailable() ? DomDocumentHelper.getDocument() : undefined;
  }
  // The window size is read here rather than passed in by the view.
  private syncViewport(): void {
    this.updateViewport({
      width: DomWindowHelper.getInnerWidth(),
      height: DomWindowHelper.getInnerHeight()
    });
  }
  private attachDragListeners(): void {
    const doc = this.getDocument();
    if (this.isTrackingPointer || !doc) return;
    this.isTrackingPointer = true;
    doc.addEventListener("pointermove", this.onDocumentPointerMove);
    doc.addEventListener("pointerup", this.onDocumentPointerUp);
    doc.addEventListener("pointercancel", this.onDocumentPointerUp);
  }
  private detachDragListeners(): void {
    const doc = this.getDocument();
    if (!this.isTrackingPointer || !doc) return;
    this.isTrackingPointer = false;
    doc.removeEventListener("pointermove", this.onDocumentPointerMove);
    doc.removeEventListener("pointerup", this.onDocumentPointerUp);
    doc.removeEventListener("pointercancel", this.onDocumentPointerUp);
  }
  // Move the caret into the panel once on open so keyboard and screen-reader
  // users land on the content they just asked for. Focus is never trapped: the
  // panel is non-modal and the user can tab straight back out. Deferred a frame
  // so the framework has applied the visible state first.
  private focusRoot(): void {
    if (!DomWindowHelper.isAvailable()) return;
    DomWindowHelper.requestAnimationFrame(() => {
      if (this.visible && !!this.rootElement)this.rootElement.focus();
    });
  }
  private buildHeaderToolbar(): void {
    const actions: Array<Action> = [];
    actions.push(new Action({
      id: "minimize",
      iconName: "icon-minimize-16x16",
      iconSize: 16,
      showTitle: false,
      title: getCollabString("floatingPanelMinimize"),
      visible: this.allowMinimize,
      action: () => this.toggleMinimize()
    }));
    actions.push(new Action({
      id: "close",
      iconName: "icon-close-16x16",
      iconSize: 16,
      showTitle: false,
      title: getCollabString("floatingPanelClose"),
      visible: this.allowClose,
      action: () => this.hide()
    }));
    this.headerToolbar.setItems(actions);
    this.headerToolbar.containerCss = "svc-floating-panel__actions";
    this.headerToolbar.setActionsAppearance({ style: "neutral", mode: "quaternary", size: "small" });
  }
  private updateHeaderToolbar(): void {
    const action = this.headerToolbar.getActionById("minimize");
    if (!action) return;
    action.iconName = this.isMinimized ? "icon-restoredown-16x16" : "icon-minimize-16x16";
    action.title = getCollabString(this.isMinimized ? "floatingPanelRestore" : "floatingPanelMinimize");
  }
}
