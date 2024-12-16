import * as React from "react";
import { Base } from "survey-core";
import { SurveyElementBase, ReactElementFactory, SurveyActionBar } from "survey-react-ui";
import { SidebarHeaderModel } from "survey-creator-core";

interface ISideBarHeaderProps {
  model: SidebarHeaderModel;
}

export class SideBarDefaultHeader extends SurveyElementBase<ISideBarHeaderProps, any> {
  get model(): SidebarHeaderModel {
    return this.props.model;
  }

  protected getStateElement(): Base | null {
    return this.model;
  }

  renderElement(): React.JSX.Element {
    const title = !!this.model.title ? (
      <div className="svc-side-bar__container-title">{this.model.title}</div>
    ) : null;
    return (
      <div className="svc-side-bar__container-header">
        <div className="svc-side-bar__container-actions">
          <SurveyActionBar model={this.model.toolbar}></SurveyActionBar>
        </div>
        {title}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-side-bar-default-header", (props) => {
  return React.createElement(SideBarDefaultHeader, props);
});
