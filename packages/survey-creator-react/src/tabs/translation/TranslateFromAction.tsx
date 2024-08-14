import * as React from "react";
import { Action, Base } from "survey-core";
import { SurveyElementBase, SvgIcon, attachKey2click, ReactElementFactory } from "survey-react-ui";

export class TranslateFromAction extends SurveyElementBase<{ item: Action }, any> {
  get item(): Action {
    return this.props.item;
  }
  protected getStateElement(): Base {
    return this.item;
  }

  renderElement() {
    const item = this.item;
    return (
      <div className={item.data.containerCss}>
        <span className={item.data.additionalTitleCss}>{item.data.additionalTitle}</span>
        {ReactElementFactory.Instance.createElement("sv-action-bar-item-dropdown", { item: this.item })}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-translate-from-action", (props) => {
  return React.createElement(TranslateFromAction, props);
});
