
import * as React from "react";
import { Base } from "survey-core";
import { attachKey2click, SurveyElementBase, SvgIcon } from "survey-react-ui";
import { MenuButton } from "survey-creator-core";

export class TabButtonComponent extends SurveyElementBase<{ model: MenuButton }, any> {
  constructor(props: { model: MenuButton }) {
    super(props);
  }

  protected getStateElement(): Base {
    return this.props.model;
  }

  protected renderElement(): React.JSX.Element | null {
    const button = attachKey2click(
      <div
        className={this.props.model.buttonClassName}
        title={this.props.model.tooltip}
        onClick={() => { this.props.model.action(); }}
      >
        <div className="svc-menu-action__icon">
          <div className="svc-menu-action__icon-container">
            <SvgIcon iconName={this.props.model.iconName} size={"auto"}></SvgIcon>
          </div>
        </div>
      </div>, this.props.model
    );
    return (
      <div className="svc-menu-action">
        {button}
      </div>
    );
  }
}
