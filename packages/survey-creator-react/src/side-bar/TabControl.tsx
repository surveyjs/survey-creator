import * as React from "react";
import { Action, ActionContainer, Base } from "survey-core";
import { SurveyElementBase, ReactElementFactory, Scroll } from "survey-react-ui";
import { MenuButton, TabControlModel } from "survey-creator-core";
import { TabButtonComponent } from "./TabButton";

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
    return (
      <div className={this.props.model.sideBarClassName}>
        <div className="svc-sidebar-tabs__top-container">
          <div className="svc-sidebar-tabs__collapse-button">
            <TabButtonComponent model={this.props.model.expandCollapseAction} ></TabButtonComponent>
          </div>
          <div className="svc-sidebar-tabs__separator">
            <div></div>
          </div>
          <Scroll>
            <div className="svc-sidebar-tabs__items">
              <TabsComponent model={this.props.model.topToolbar}></TabsComponent>
            </div>
          </Scroll>
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

  protected renderElement(): React.JSX.Element | null {
    return <>{this.props.model.actions.map(
      (item: Action, itemIndex: number) => <TabButtonComponent model={item as MenuButton} key={"item" + itemIndex}></TabButtonComponent>
    )}</>;
  }
}
