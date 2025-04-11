
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
    const model = this.props.model;
    if (!model.visible) return null;
    const button = attachKey2click(
      <div
        className={model.buttonClassName}
        title={model.tooltip}
        onClick={() => { model.action(); }}
      >
        <div className="svc-menu-action__icon">
          <div className="svc-menu-action__icon-container">
            <SvgIcon iconName={model.iconName} size={"auto"}></SvgIcon>
          </div>
        </div>
      </div>, model
    );
    return (
      <div className="svc-menu-action">
        {button}
      </div>
    );
  }
}
