import * as React from "react";
import { ItemValue } from "survey-core";
import { ReactElementFactory, SurveyElementBase, SurveyActionBar, SvgIcon } from "survey-react-ui";

class ItemTemplateComponent extends SurveyElementBase<{ item: ItemValue }, any> {
  renderElement() {
    const item = this.props.item;
    return (
      <>
        <SvgIcon iconName={item.iconName} size={item.iconSize} className={"svc-json-error__icon"} ></SvgIcon>
        <div className="svc-json-error__container">
          <div className="svc-json-error__title" title={item.data.error?.text} onMouseDown={(event) => event.stopPropagation()}>
            <span key={2}>{this.renderLocString(item.locTitle, undefined, "locString")}</span>
          </div>
          <SurveyActionBar model={item.data.actions} />
        </div>
      </>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "json-error-item",
  (props) => {
    return React.createElement(ItemTemplateComponent, props);
  }
);