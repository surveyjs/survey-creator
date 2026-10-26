import * as React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyActionBar, SurveyElementBase, SvgIcon } from "survey-react-ui";
import { InlineDesignerModel } from "survey-creator-core";

interface IInlineElementToolbarProps {
  model: InlineDesignerModel;
}

// Inline layout mode (prompt 03): one floating toolbar for the whole creator, re-targeted on selection.
// TabDesignerComponent renders it next to .svc-tab-designer, so the survey theme and clickDesigner do not reach it.
export class InlineElementToolbarComponent extends SurveyElementBase<IInlineElementToolbarProps, any> {
  private rootRef: React.RefObject<HTMLDivElement> = React.createRef();
  private get model(): InlineDesignerModel {
    return this.props.model;
  }
  protected getStateElements(): Array<Base> {
    const res: Array<Base> = [this.model, this.model.extraActions];
    // The page title is shown in the toolbar.
    if (this.model.isPageTarget) res.push(this.model.toolbarTarget);
    return res;
  }
  componentDidMount(): void {
    super.componentDidMount();
    this.model.setToolbarElement(this.rootRef.current);
  }
  componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    if (prevProps.model !== this.props.model) {
      prevProps.model?.setToolbarElement(null);
    }
    this.model.setToolbarElement(this.rootRef.current);
  }
  componentWillUnmount(): void {
    super.componentWillUnmount();
    this.model.setToolbarElement(null);
  }
  renderElement(): React.JSX.Element {
    const model = this.model;
    const dragHandle = model.showDragHandle ? (
      <div className="svc-inline-element-toolbar__drag" onPointerDown={(e: any) => model.onDragHandlePointerDown(e)}>
        <SvgIcon size={"auto"} iconName={"icon-drag-area-indicator_24x16"}></SvgIcon>
      </div>
    ) : null;
    const title = model.toolbarTitle ? <span className="svc-inline-element-toolbar__title">{model.toolbarTitle}</span> : null;
    const extra = model.extraActions.hasActions ? (
      <div className="svc-inline-element-toolbar__extra">
        <SurveyActionBar model={model.extraActions} handleClick={false}></SurveyActionBar>
      </div>
    ) : null;
    // Keyed by toolbarVersion: a new adorner mounts a new bar, the old bar resets its responsivity manager.
    const actions = model.isToolbarVisible && !!model.elementActions ? (
      <div className="svc-inline-element-toolbar__actions">
        <SurveyActionBar key={"actions-" + model.toolbarVersion} model={model.elementActions} handleClick={false}></SurveyActionBar>
      </div>
    ) : null;
    return (
      <div ref={this.rootRef} className={model.toolbarCss} style={model.toolbarStyle}
        role="toolbar" aria-label={model.toolbarAriaLabel}
        onClickCapture={() => model.onToolbarClick()}
        onClick={(e) => e.stopPropagation()}>
        {dragHandle}
        {title}
        {extra}
        {actions}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-inline-element-toolbar", (props) => {
  return React.createElement(InlineElementToolbarComponent, props as IInlineElementToolbarProps);
});
