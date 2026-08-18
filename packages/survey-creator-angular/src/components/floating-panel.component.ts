import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { DomDocumentHelper, DomWindowHelper } from "survey-core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-floating-panel",
  templateUrl: "./floating-panel.component.html",
  styles: [":host { display: none; }"]
})
export class FloatingPanelComponent extends BaseAngular implements OnInit, OnDestroy {
  @Input() model: any;
  @ViewChild("root") root!: ElementRef<HTMLElement>;

  getModel() {
    return this.model;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.updateViewport();
    DomWindowHelper.addEventListener("resize", this.onResize);
    this.model.onVisibleChanged.add(this.onVisibleChanged);
    // Escape closes the panel from anywhere, not just while focus is inside
    // it: the panel is non-modal, so the user is normally editing elsewhere.
    // The model no-ops the key when the panel is already hidden.
    this.doc = DomDocumentHelper.isAvailable() ? DomDocumentHelper.getDocument() : undefined;
    if (!!this.doc)this.doc.addEventListener("keydown", this.onDocumentKeyDown);
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    DomWindowHelper.removeEventListener("resize", this.onResize);
    this.model.onVisibleChanged.remove(this.onVisibleChanged);
    if (!!this.doc)this.doc.removeEventListener("keydown", this.onDocumentKeyDown);
  }

  private doc: Document | undefined;
  private onDocumentKeyDown = (e: KeyboardEvent): void => this.model.onKeyDown(e);

  // Move the caret into the panel once on open so keyboard and screen-reader
  // users land on the content they just asked for. Focus is never trapped: the
  // panel is non-modal and the user can tab straight back out.
  private onVisibleChanged = (_: any, options: { visible: boolean }): void => {
    if (!options.visible) return;
    DomWindowHelper.requestAnimationFrame(() => {
      if (this.model.visible && !!this.root)this.root.nativeElement.focus();
    });
  };

  public onPointerDown(e: PointerEvent): void {
    // Header buttons stay clickable: a press on one is not a drag.
    if (!this.model.allowDrag || e.button !== 0) return;
    if (e.target instanceof Element && !!e.target.closest("button")) return;
    const node = !!this.root ? this.root.nativeElement : undefined;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    this.model.startDrag({ x: e.clientX, y: e.clientY },
      { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
    const header: any = e.currentTarget;
    if (typeof header.setPointerCapture === "function" && typeof e.pointerId === "number") {
      header.setPointerCapture(e.pointerId);
    }
    e.preventDefault();
  }
  public onPointerMove(e: PointerEvent): void {
    this.model.drag({ x: e.clientX, y: e.clientY });
  }
  public onPointerUp(): void {
    this.model.endDrag();
  }

  private onResize = (): void => this.updateViewport();
  private updateViewport(): void {
    this.model.updateViewport({
      width: DomWindowHelper.getInnerWidth(),
      height: DomWindowHelper.getInnerHeight()
    });
  }
}

AngularComponentFactory.Instance.registerComponent("svc-floating-panel", FloatingPanelComponent);
