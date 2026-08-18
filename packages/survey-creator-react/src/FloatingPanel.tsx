import * as React from "react";
// Type-only - the model ships in "survey-creator-core/collaboration"; this
// import is erased at build so the view stays free of a runtime dependency.
import type { FloatingPanelModel } from "survey-creator-core/collaboration";
import { Base, DomDocumentHelper, DomWindowHelper } from "survey-core";
import { ReactElementFactory, SurveyActionBar, SurveyElementBase, SvgIcon } from "survey-react-ui";

interface IFloatingPanelProps {
  model: FloatingPanelModel;
}

// The panel is position:fixed, so it contributes nothing to the creator's flex
// layout while still living inside the themed root (where the --sjs2-* custom
// properties are defined). All geometry comes from the model.
export class FloatingPanelComponent extends SurveyElementBase<IFloatingPanelProps, any> {
  private root: React.RefObject<HTMLDivElement>;

  constructor(props: IFloatingPanelProps) {
    super(props);
    this.root = React.createRef();
  }

  get model(): FloatingPanelModel {
    return this.props.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  protected canRender(): boolean {
    return this.model.visible && super.canRender();
  }

  componentDidMount() {
    super.componentDidMount();
    this.updateViewport();
    DomWindowHelper.addEventListener("resize", this.onResize);
    this.model.onVisibleChanged.add(this.onVisibleChanged);
    // Escape closes the panel from anywhere, not just while focus is inside
    // it: the panel is non-modal, so the user is normally editing elsewhere.
    // The model no-ops the key when the panel is already hidden.
    this.doc = DomDocumentHelper.isAvailable() ? DomDocumentHelper.getDocument() : undefined;
    if (!!this.doc)this.doc.addEventListener("keydown", this.onDocumentKeyDown);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
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
      if (this.model.visible && !!this.root.current)this.root.current.focus();
    });
  };

  private onResize = (): void => this.updateViewport();
  private updateViewport(): void {
    this.model.updateViewport({
      width: DomWindowHelper.getInnerWidth(),
      height: DomWindowHelper.getInnerHeight()
    });
  }

  private onPointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
    // Header buttons must stay clickable, so a press on one is not a drag.
    if (!this.model.allowDrag || e.button !== 0) return;
    if (e.target instanceof Element && !!e.target.closest("button")) return;
    const node = this.root.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    this.model.startDrag({ x: e.clientX, y: e.clientY },
      { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
    const header: any = e.currentTarget;
    if (typeof header.setPointerCapture === "function" && typeof e.pointerId === "number") {
      header.setPointerCapture(e.pointerId);
    }
    e.preventDefault();
  };
  private onPointerMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    this.model.drag({ x: e.clientX, y: e.clientY });
  };
  private onPointerUp = (): void => this.model.endDrag();

  renderElement() {
    const model = this.model;
    const content = ReactElementFactory.Instance.createElement(
      model.contentComponentName, model.contentComponentData);
    return (
      <div
        ref={this.root}
        className={model.rootCss}
        style={model.style as any}
        role="dialog"
        aria-modal={false}
        aria-labelledby={model.titleId}
        tabIndex={-1}
        onPointerDownCapture={() => model.bringToFront()}
      >
        <div
          className={model.headerCss}
          onPointerDown={this.onPointerDown}
          onPointerMove={this.onPointerMove}
          onPointerUp={this.onPointerUp}
          onPointerCancel={this.onPointerUp}
        >
          <span id={model.titleId} className="svc-floating-panel__title">{model.titleText}</span>
          <span className="svc-floating-panel__drag" aria-hidden="true">
            <SvgIcon iconName="icon-draghorizontal-24x16" size="auto"></SvgIcon>
          </span>
          <SurveyActionBar model={model.headerToolbar}></SurveyActionBar>
        </div>
        <div className={model.bodyCss}>{content}</div>
      </div>
    );
  }
}

export default FloatingPanelComponent;

ReactElementFactory.Instance.registerElement("svc-floating-panel", (props) => {
  return React.createElement(FloatingPanelComponent, props);
});
