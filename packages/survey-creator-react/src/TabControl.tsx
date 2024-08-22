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
    return (
      <div className="Tabs_22400_60650">
        <div className="TopToolbar_22400_60651">
          <div className="CollapseButton_22400_60652">
            <TabButtonComponent model={this.props.model.expandCollapseAction} ></TabButtonComponent>
          </div>
          <div className="Separator_22400_60653">
            <div className="Line_21220_2204727"></div>
          </div>
          <div className="Items_22400_60654">
            <TabsComponent model={this.props.model.topToolbar}></TabsComponent>
          </div>
        </div>
        <div className="BottomToolbar_22400_60665">
          <div className="Items_22400_60666">
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
      .append("menu-toolbar-button")
      .append("menu-toolbar-button--selected", !!this.props.model.pressed)
      .toString();
    return (
      <div className="Layout_22408_73611">
        <div
          className={className}
          title={this.props.model.tooltip}
          onClick={() => { this.props.model.action(); }}
        >
          <div className="menu-toolbar-button-icon">
            <div className="Layout_24x24_21220_2484322">
              <SvgIcon iconName={this.props.model.iconName} size={24}></SvgIcon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
