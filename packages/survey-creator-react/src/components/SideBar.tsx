import React from "react";
import { SideBarTabModel, SideBarModel } from "@survey/creator";
import { Base } from "survey-core";
import { SurveyElementBase, SurveyActionBar, ReactQuestionFactory, ReactElementFactory } from "survey-react-ui";

interface ISideBarComponentProps {
  model: SideBarModel;
}

export class SideBarComponent extends SurveyElementBase<ISideBarComponentProps, any> {
  private containerRef: React.RefObject<HTMLDivElement>;

  get model(): SideBarModel {
    return this.props.model;
  }

  constructor(props: ISideBarComponentProps) {
    super(props);
    this.containerRef = React.createRef();
  }

  protected getStateElement(): Base {
    return this.model;
  }

  componentDidMount() {
    super.componentDidMount();
    this.model.initResizeManager(this.containerRef.current);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.model.resetResizeManager();
  }
  public canRender(): boolean {
    if (!this.model) return false;
    return super.canRender();
  }
  renderElement() {
    const style = { display: !this.model.visible ? "none" : "" };
    const className = "svc-side-bar" + (this.model.flyoutPanelMode ? " svc-flyout-side-bar" : "");
    const items = this.model.tabs.map((item) => <SideBarTab item={item} key={item.id} />);
    return (
      <div className={className} style={{ display: !this.model.hasVisibleTabs ? "none" : "" }}>
        <div className="svc-side-bar__shadow"></div>
        <div className="svc-flex-column svc-side-bar__wrapper">
          <div ref={this.containerRef} style={style} className="svc-side-bar__container">
            <div className="svc-side-bar__container-header">
              <div className="svc-side-bar__container-actions">
                <SurveyActionBar model={this.model.toolbar}></SurveyActionBar>
              </div>
              <div className="svc-side-bar__container-title">
                {this.model.headerText}
              </div>
            </div>
            <div className="svc-side-bar__container-content">
              {items}
            </div>
            <div className="svc-side-bar__container-close">
              <div className="sd-btn sd-btn--action svc-side-bar__container-close-button" onClick={() => this.model.closePropertyGrid()}> {this.model.closeText} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SideBarTab extends SurveyElementBase<any, any> {
  private get item(): SideBarTabModel {
    return this.props.item;
  }

  protected getStateElement(): Base {
    return this.item;
  }

  renderElement(): JSX.Element {
    if (!this.item.visible) return null;

    const component = ReactElementFactory.Instance.createElement(this.item.componentName, { model: this.item.model });

    return component;
  }
}

ReactQuestionFactory.Instance.registerQuestion("svc-side-bar-tab", (props) => {
  return React.createElement(SideBarTab, props);
});

export default SideBarComponent;

ReactElementFactory.Instance.registerElement("svc-side-bar", (props) => {
  return React.createElement(SideBarComponent, props);
});