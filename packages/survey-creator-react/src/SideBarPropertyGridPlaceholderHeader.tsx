import * as React from "react";
import { Base } from "survey-core";
import { SidebarPageModel } from "survey-creator-core";
import { SurveyElementBase, ReactElementFactory } from "survey-react-ui";

class SideBarPropertyGridPlaceholderHeader extends SurveyElementBase<any, any> {
  get activePage(): SidebarPageModel {
    return this.props.model;
  }

  protected getStateElement(): Base | null {
    return this.activePage;
  }

  renderElement(): JSX.Element {
    return (
      <div className="svc-side-bar__container-header svc-sidebar__header-container">
        <div className="svc-side-bar__container-title">{this.activePage.caption}</div>
      </div>);
  }
}

ReactElementFactory.Instance.registerElement("svc-side-bar-property-grid-placeholder-header", (props) => {
  return React.createElement(SideBarPropertyGridPlaceholderHeader, props);
});