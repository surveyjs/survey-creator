
import * as React from "react";
import { Action } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";

export class TabButtonComponent extends SurveyElementBase<{ model: Action }, any> {
  constructor(props: { model: Action }) {
    super(props);
  }

  protected getStateElement(): Action {
    return this.props.model;
  }

  protected renderElement(): React.JSX.Element | null {
    const model = this.props.model;
    if (!model.visible) return null;
    const itemComponent = ReactElementFactory.Instance.createElement(
      this.props.model.component || "sv-action-bar-item",
      {
        item: this.props.model,
      }
    );
    return (
      <div className="svc-sidebar-tabs__item">
        {itemComponent}
      </div>
    );
  }
}
