import * as React from "react";
// Type-only - the model ships in "survey-creator-core/collaboration"; this
// import is erased at build so the view carries no runtime dependency on it.
import type { FloatingPanelModel } from "survey-creator-core/collaboration";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyActionBar, SurveyElementBase, SvgIcon } from "survey-react-ui";

interface IFloatingPanelProps {
  model: FloatingPanelModel;
}

// A non-modal window: docked to the viewport's right edge until its header is
// dragged, then free-floating. position:fixed, so it contributes nothing to the
// creator's flex layout while still living inside the themed root, where the
// --sjs2-* custom properties are defined.
//
// Markup only. The root node is handed to the model the way survey-core's popup
// views do, and the header's raw pointerdown is forwarded; geometry, listeners,
// focus and the drag itself all live in FloatingPanelModel. Hiding is part of
// `style` too, which is why the root is always rendered.
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

  componentDidMount() {
    super.componentDidMount();
    this.model.setComponentElement(this.root.current);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.model.resetComponentElement();
  }

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
        <div className={model.headerCss} onPointerDown={(e) => model.onPointerDown(e.nativeEvent)}>
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
