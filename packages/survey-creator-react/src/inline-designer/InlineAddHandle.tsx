import * as React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";
import { InlineDesignerModel } from "survey-creator-core";

interface IInlineAddHandleProps {
  model: InlineDesignerModel;
}

// Inline layout mode (prompt 04): the "+" handle left of the selected question; it opens the toolbox popup.
// Always rendered (hidden by a class), so the popup can return focus to the same button.
export class InlineAddHandleComponent extends SurveyElementBase<IInlineAddHandleProps, any> {
  private rootRef: React.RefObject<HTMLButtonElement> = React.createRef();
  private get model(): InlineDesignerModel {
    return this.props.model;
  }
  protected getStateElements(): Array<Base> {
    return [this.model];
  }
  componentDidMount(): void {
    super.componentDidMount();
    this.model.setAddHandleElement(this.rootRef.current);
  }
  componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    if (prevProps.model !== this.props.model) {
      prevProps.model?.setAddHandleElement(null);
    }
    this.model.setAddHandleElement(this.rootRef.current);
  }
  componentWillUnmount(): void {
    super.componentWillUnmount();
    this.model.setAddHandleElement(null);
  }
  renderElement(): React.JSX.Element {
    const model = this.model;
    return (
      <button type="button" ref={this.rootRef} className={model.addHandleCss} style={model.addHandleStyle}
        title={model.addHandleTitle} aria-label={model.addHandleTitle} aria-haspopup="menu"
        onClick={(e) => { e.stopPropagation(); model.onAddHandleClick(); }}>
        <SvgIcon size={"auto"} iconName={"icon-add-lg"}></SvgIcon>
      </button>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-inline-add-handle", (props) => {
  return React.createElement(InlineAddHandleComponent, props as IInlineAddHandleProps);
});
