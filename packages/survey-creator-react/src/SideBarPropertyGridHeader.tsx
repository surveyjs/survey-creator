import * as React from "react";
import { Action, Base, CssClassBuilder, getActionDropdownButtonTarget } from "survey-core";
import { SurveyElementBase, ReactElementFactory, Popup } from "survey-react-ui";

interface ISideBarPropertyGridHeaderProps {
  model: Action;
}

class SideBarPropertyGridHeader extends SurveyElementBase<ISideBarPropertyGridHeaderProps, any> {
  get objectSelectionAction(): Action {
    return this.props.model;
  }

  protected getStateElement(): Base | null {
    return this.objectSelectionAction;
  }

  renderElement(): JSX.Element {
    const buttonClassName = new CssClassBuilder()
      .append("svc-sidebar__header-button")
      .append("svc-sidebar__header-button--with-subtitle")
      .append("svc-sidebar__header-button--pressed", this.objectSelectionAction.pressed)
      .toString();

    return (
      <div className="svc-sidebar__header svc-sidebar__header--tabbed">
        <div className="svc-sidebar__header-container svc-sidebar__header-container--with-subtitle">
          <div className="svc-sidebar__header-content" onClick={() => this.objectSelectionAction.action()}>
            <div className={buttonClassName}>
              <div className="svc-sidebar__header-caption">
                <span className="svc-sidebar__header-title">{this.objectSelectionAction.title}</span>
                <span className="svc-sidebar__header-subtitle">{this.objectSelectionAction.tooltip}</span>
              </div>
            </div>
            <Popup model={this.objectSelectionAction.popupModel} getTarget={getActionDropdownButtonTarget}></Popup>
          </div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-side-bar-property-grid-header", (props) => {
  return React.createElement(SideBarPropertyGridHeader, props);
});