import React from "react";
import { PropertyGridViewModelBase, ResizeManager } from "@survey/creator";
import { Base } from "survey-core";
import { Survey, SurveyElementBase, SurveyActionBar, ReactQuestionFactory, SurveyQuestionButtonGroup, ReactElementFactory } from "survey-react-ui";

interface IPropertyGridComponentProps {
  model: PropertyGridViewModelBase;
}

export class PropertyPanelComponent extends SurveyElementBase<IPropertyGridComponentProps, any> {
  private resizeManager: ResizeManager;
  private containerRef: React.RefObject<HTMLDivElement>;

  get model(): PropertyGridViewModelBase {
    return this.props.model;
  }

  constructor(props: IPropertyGridComponentProps) {
    super(props);
    this.containerRef = React.createRef();
  }

  protected getStateElement(): Base {
    return this.model;
  }

  componentDidMount() {
    super.componentDidMount();
    this.resizeManager = new ResizeManager(this.containerRef.current);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.resizeManager.dispose();
  }
  public canRender(): boolean {
    if (!this.model) return false;
    return super.canRender();
  }
  renderElement() {
    const style = { display: !this.model.visible ? "none" : "" };
    const className = "svc-properties-container" + (this.model.flyoutPanelMode ? " svc-flyoutPanelMode-panel" : "");
    return (
      <div className={className}>
        <div className="svc-properties-shadow"></div>
        <div className="svc-flex-column svc-properties-wrapper">
          <div ref={this.containerRef} style={style} className="svc-property-panel">
            <div className="svc-property-panel__header">
              <div className="svc-property-panel__actions">
                <SurveyActionBar model={this.model.toolbar}></SurveyActionBar>
              </div>
              <div className="svc-property-panel__title">
                {this.model.headerText}
              </div>
            </div>
            <div className="svc-property-panel__expander">
              {ReactElementFactory.Instance.createElement("svc-property-grid", { model: this.model })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class PropertyGridComponent extends SurveyElementBase<IPropertyGridComponentProps, any> {

  get model(): PropertyGridViewModelBase {
    return this.props.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  renderElement() {
    return (
      <Survey model={this.model.survey}></Survey>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("buttongroup", (props) => {
  return React.createElement(SurveyQuestionButtonGroup, props);
});

export default PropertyPanelComponent;

ReactElementFactory.Instance.registerElement("svc-property-grid", (props) => {
  return React.createElement(PropertyGridComponent, props);
});

ReactElementFactory.Instance.registerElement("svc-property-panel", (props) => {
  return React.createElement(PropertyPanelComponent, props);
});
