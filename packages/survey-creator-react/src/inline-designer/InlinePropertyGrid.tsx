import * as React from "react";
import { Action, Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";
import { InlineDesignerModel } from "survey-creator-core";
import { TabButtonComponent } from "../side-bar/TabButton";

interface IInlinePropertyGridProps {
  model: InlineDesignerModel;
}

// Inline layout mode (prompt 05): the floating property grid panel. TabDesignerComponent renders it next to
// .svc-tab-designer (not inside it), so the Creator theme applies, not the survey theme. It mounts the designer
// plugin's own PropertyGridViewModel with svc-property-grid only while the panel is open. In the one-category
// mode (V3) the header shows the category and the element, and the categories are an icon strip on the side.
export class InlinePropertyGridComponent extends SurveyElementBase<IInlinePropertyGridProps, any> {
  private rootRef: React.RefObject<HTMLDivElement> = React.createRef();
  private bodyRef: React.RefObject<HTMLDivElement> = React.createRef();
  private renderedSurvey: any;
  private get model(): InlineDesignerModel {
    return this.props.model;
  }
  protected getStateElements(): Array<Base> {
    const res: Array<Base> = [this.model, this.model.propertyGridPanel, this.model.propertyGridCategories];
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
  private renderCategories(): React.JSX.Element {
    if (!this.model.isPropertyGridMultiPage) return null;
    return (
      <div className="svc-sidebar-tabs svc-inline-property-grid__tabs">
        <div className="svc-sidebar-tabs__items">
          {this.model.propertyGridCategories.actions.map((item: Action) => <TabButtonComponent model={item} key={item.id}></TabButtonComponent>)}
        </div>
      </div>
    );
  }
  renderElement(): React.JSX.Element {
    const model = this.model;
    const panel = model.propertyGridPanel;
    const pgModel = model.propertyGridViewModel;
    if (!panel.isOpen || !pgModel) return null;
    const elementName = model.propertyGridTitle;
    const categoryTitle = model.isPropertyGridMultiPage ? model.propertyGridCategoryTitle : "";
    const title = categoryTitle || elementName;
    const subtitle = !!categoryTitle ? <div className="svc-inline-property-grid__subtitle" title={elementName}>{elementName}</div> : null;
    return (
      <div ref={this.rootRef} className={panel.rootCss} style={panel.rootStyle}
        role="dialog" aria-modal="false" aria-label={elementName}
        onClick={(e) => e.stopPropagation()}>
        <div className="svc-inline-property-grid__header" onPointerDown={(e: any) => model.onPropertyGridHeaderPointerDown(e.nativeEvent)}>
          <div className="svc-inline-property-grid__caption">
            <div className="svc-inline-property-grid__title" title={title}>{title}</div>
            {subtitle}
          </div>
          <button type="button" className="svc-inline-property-grid__close" title={model.propertyGridCloseText}
            aria-label={model.propertyGridCloseText} onClick={() => model.hidePropertyGrid(true)}>
            <SvgIcon size={"auto"} iconName={"icon-clear_16x16"}></SvgIcon>
          </button>
        </div>
        <div className="svc-inline-property-grid__content">
          <div ref={this.bodyRef} className="svc-inline-property-grid__body">
            {ReactElementFactory.Instance.createElement("svc-property-grid", { model: pgModel })}
          </div>
          {this.renderCategories()}
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-inline-property-grid", (props) => {
  return React.createElement(InlinePropertyGridComponent, props as IInlinePropertyGridProps);
});
