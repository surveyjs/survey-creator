import * as React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";
import { InlineDesignerModel } from "survey-creator-core";

interface IInlinePropertyGridProps {
  model: InlineDesignerModel;
}

// Inline layout mode (prompt 05): the floating property grid panel. TabDesignerComponent renders it next to
// .svc-tab-designer (not inside it), so the Creator theme applies, not the survey theme. It mounts the designer
// plugin's own PropertyGridViewModel with svc-property-grid only while the panel is open.
export class InlinePropertyGridComponent extends SurveyElementBase<IInlinePropertyGridProps, any> {
  private rootRef: React.RefObject<HTMLDivElement> = React.createRef();
  private bodyRef: React.RefObject<HTMLDivElement> = React.createRef();
  private renderedSurvey: any;
  private get model(): InlineDesignerModel {
    return this.props.model;
  }
  protected getStateElements(): Array<Base> {
    const res: Array<Base> = [this.model, this.model.propertyGridPanel];
    if (!!this.model.propertyGridViewModel) res.push(this.model.propertyGridViewModel);
    return res;
  }
  componentDidMount(): void {
    super.componentDidMount();
    this.model.setPropertyGridElement(this.rootRef.current);
  }
  componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    if (prevProps.model !== this.props.model) {
      prevProps.model?.setPropertyGridElement(null);
    }
    // The grid survey is rebuilt on every selection: start each new one at the top.
    const survey = this.model.propertyGridViewModel?.survey;
    if (survey !== this.renderedSurvey) {
      this.renderedSurvey = survey;
      if (!!this.bodyRef.current)this.bodyRef.current.scrollTop = 0;
    }
    this.model.setPropertyGridElement(this.rootRef.current);
  }
  componentWillUnmount(): void {
    super.componentWillUnmount();
    this.model.setPropertyGridElement(null);
  }
  renderElement(): React.JSX.Element {
    const model = this.model;
    const panel = model.propertyGridPanel;
    const pgModel = model.propertyGridViewModel;
    if (!panel.isOpen || !pgModel) return null;
    const title = model.propertyGridTitle;
    return (
      <div ref={this.rootRef} className={panel.rootCss} style={panel.rootStyle}
        role="dialog" aria-modal="false" aria-label={title}
        onClick={(e) => e.stopPropagation()}>
        <div className="svc-inline-property-grid__header" onPointerDown={(e: any) => model.onPropertyGridHeaderPointerDown(e.nativeEvent)}>
          <div className="svc-inline-property-grid__title" title={title}>{title}</div>
          <button type="button" className="svc-inline-property-grid__close" title={model.propertyGridCloseText}
            aria-label={model.propertyGridCloseText} onClick={() => model.hidePropertyGrid(true)}>
            <SvgIcon size={"auto"} iconName={"icon-clear_16x16"}></SvgIcon>
          </button>
        </div>
        <div ref={this.bodyRef} className="svc-inline-property-grid__body">
          {ReactElementFactory.Instance.createElement("svc-property-grid", { model: pgModel })}
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-inline-property-grid", (props) => {
  return React.createElement(InlinePropertyGridComponent, props as IInlinePropertyGridProps);
});
