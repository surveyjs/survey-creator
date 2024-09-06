
import * as React from "react";
import { Action, Base, CssClassBuilder } from "survey-core";
import { SurveyElementBase, SvgIcon } from "survey-react-ui";

export class TabButtonComponent extends SurveyElementBase<{ model: Action }, any> {
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
