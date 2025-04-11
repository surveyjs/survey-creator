import * as React from "react";
import { Base, getActionDropdownButtonTarget } from "survey-core";
import { SurveyElementBase, ReactElementFactory, Popup, attachKey2click } from "survey-react-ui";
import { MenuButton } from "survey-creator-core";

interface ISideBarPropertyGridHeaderProps {
  model: MenuButton;
}

class SideBarPropertyGridHeader extends SurveyElementBase<ISideBarPropertyGridHeaderProps, any> {
  get objectSelectionAction(): MenuButton {
    return this.props.model;
  }

  protected getStateElement(): Base | null {
    return this.objectSelectionAction;
  }

  renderElement(): React.JSX.Element {
    const button = attachKey2click(
      <div className={this.objectSelectionAction.buttonClassName} onClick={() => this.objectSelectionAction.action()}>
        <div className="svc-sidebar__header-caption">
          <span className="svc-sidebar__header-title">{this.objectSelectionAction.title}</span>
          <span className="svc-sidebar__header-subtitle">{this.objectSelectionAction.tooltip}</span>
        </div>
      </div>, this.props.model
    );

    return (
      <div className="svc-sidebar__header svc-sidebar__header--tabbed">
        <div className="svc-sidebar__header-container svc-sidebar__header-container--with-subtitle">
          <div className="svc-sidebar__header-content">
            {button}
            <Popup model={this.objectSelectionAction.popupModel}></Popup>
          </div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-side-bar-property-grid-header", (props) => {
  return React.createElement(SideBarPropertyGridHeader, props);
});