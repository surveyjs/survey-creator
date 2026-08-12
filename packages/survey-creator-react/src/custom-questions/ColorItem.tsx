import * as React from "react";
import { ItemValue } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { Swatch } from "./Swatch";

class ItemTemplateComponent extends SurveyElementBase<{ item: ItemValue }, any> {
  render() {
    const item = this.props.item;
    return (
      <div className="sd-color-swatch-item">
        <div className="sd-color-swatch-item__label">
          <span key={2} className="sd-color-swatch-item__caption">{this.renderLocString(item.locTitle, undefined, "locString")}</span>
        </div>
        <Swatch color={item.value} />
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "color-item",
  (props) => {
    return React.createElement(ItemTemplateComponent, props);
  }
);