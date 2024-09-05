import * as React from "react";
import { Action, ActionContainer, Base, CssClassBuilder } from "survey-core";
import { TabControlModel } from "survey-creator-core";
import { SurveyElementBase, ReactElementFactory, SvgIcon } from "survey-react-ui";

interface ITabControlProps {
  model?: TabControlModel;
}

class TabControl extends SurveyElementBase<any, any> {
  constructor(props: ITabControlProps) {
    super(props);
  }

  protected getStateElement(): Base {
    return this.props.model;
  }

  public canRender(): boolean {
    if (!this.props.model) return false;
    return super.canRender();
  }
  renderElement() {
    const className = "svc-sidebar-tabs" + (this.props.model.sidePanel.visible ? "" : " svc-sidebar-tabs--collapsed");
    return (
      <div className={className}>
        <div className="svc-sidebar-tabs__top-container">
          <div className="svc-sidebar-tabs__collapse-button">
            <TabButtonComponent model={this.props.model.expandCollapseAction} ></TabButtonComponent>
          </div>
          <div className="svc-sidebar-tabs__separator">
            <div></div>
          </div>
          <div className="svc-sidebar-tabs__items">
            <TabsComponent model={this.props.model.topToolbar}></TabsComponent>
          </div>
        </div>
        <div className="svc-sidebar-tabs__bottom-container">
          <div className="svc-sidebar-tabs__items">
            <TabsComponent model={this.props.model.bottomToolbar}></TabsComponent>
          </div>
        </div>
      </div>
    );
  }

}

ReactElementFactory.Instance.registerElement("svc-tab-control", (props) => {
  return React.createElement(TabControl, props);
});

class TabsComponent extends SurveyElementBase<{ model: ActionContainer }, any> {
  constructor(props: { model: ActionContainer }) {
    super(props);
  }

  protected getStateElement(): Base {
    return this.props.model;
  }

  protected renderElement(): JSX.Element | null {
    return <>{this.props.model.actions.map(
      (item: Action, itemIndex: number) => <TabButtonComponent model={item} key={"item" + itemIndex}></TabButtonComponent>
    )}</>;
  }
}

class TabButtonComponent extends SurveyElementBase<{ model: Action }, any> {
  constructor(props: { model: Action }) {
    super(props);
  }

  protected getStateElement(): Base {
    return this.props.model;
  }

  protected renderElement(): JSX.Element | null {
    const className = new CssClassBuilder()
      .append("svc-menu-action__button")
      .append("svc-menu-action__button--selected", !!this.props.model.active)
      .toString();
    return (
      <div className="svc-menu-action">
        <div
          className={className}
          title={this.props.model.tooltip}
          onClick={() => { this.props.model.action(); }}
        >
          <div className="svc-menu-action__icon">
            <div className="svc-menu-action__icon-container">
              <SvgIcon iconName={this.props.model.iconName} size={24}></SvgIcon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
