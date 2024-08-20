import * as React from "react";
import { ItemValue } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";

class ItemTemplateComponent extends SurveyElementBase<{ item: ItemValue }, any> {
  render() {
    const item = this.props.item;
    return (
      <>
        <span className="spg-color-editor__color-swatch" style={{ backgroundColor: item.value }}></span>
        <span key={2}>{this.renderLocString(item.locTitle, undefined, "locString")}</span>
      </>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "color-item",
  (props) => {
    return React.createElement(ItemTemplateComponent, props);
  }
);