import * as React from "react";
import { Base } from "survey-core";
import { SidebarHeaderModel } from "survey-creator-core";
import { SurveyElementBase, ReactElementFactory } from "survey-react-ui";

interface ISideBarPropertyGridPlaceholderHeaderProps {
  model: SidebarHeaderModel;
}

class SideBarPropertyGridPlaceholderHeader extends SurveyElementBase<ISideBarPropertyGridPlaceholderHeaderProps, any> {
  get model(): SidebarHeaderModel {
    return this.props.model;
  }

  protected getStateElement(): Base | null {
    return this.model;
  }

  renderElement(): JSX.Element {
    return (
      <div className="svc-side-bar__container-header svc-sidebar__header-container">
        {(this.model.subTitle) ?
          <div className="svc-sidebar__header-caption">
            <span className="svc-sidebar__header-title">{this.model.title}</span>
            <span className="svc-sidebar__header-subtitle">{this.model.subTitle}</span>
          </div>
          : <div className="svc-side-bar__container-title">{this.model.title}</div>
        }
      </div>);
  }
}

ReactElementFactory.Instance.registerElement("svc-side-bar-property-grid-placeholder-header", (props) => {
  return React.createElement(SideBarPropertyGridPlaceholderHeader, props);
});