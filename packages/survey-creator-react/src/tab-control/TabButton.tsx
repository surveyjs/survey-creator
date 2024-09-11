
import * as React from "react";
import { Base } from "survey-core";
import { SurveyElementBase, SvgIcon } from "survey-react-ui";
import { MenuButton } from "survey-creator-core";

export class TabButtonComponent extends SurveyElementBase<{ model: MenuButton }, any> {
  constructor(props: { model: MenuButton }) {
    super(props);
  }

  protected getStateElement(): Base {
    return this.props.model;
  }

  protected renderElement(): JSX.Element | null {
    return (
      <div className="svc-menu-action">
        <div
          className={this.props.model.buttonClassName}
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
