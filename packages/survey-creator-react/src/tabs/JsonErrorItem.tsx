import * as React from "react";
import { ItemValue } from "survey-core";
import { ReactElementFactory, SurveyElementBase, SvgIcon, attachKey2click } from "survey-react-ui";

class ItemTemplateComponent extends SurveyElementBase<{ item: ItemValue }, any> {
  render() {
    const item = this.props.item;
    return (
      <>
        <SvgIcon iconName={item.iconName} size={item.iconSize} className={"svc-json-error__icon"} ></SvgIcon>
        <div className="svc-json-error__container">
          <div className="svc-json-error__title">
            <span key={2}>{this.renderLocString(item.locTitle, undefined, "locString")}</span>
          </div>
          {this.renderFixButton()}
        </div>
      </>
    );
  }
  renderFixButton() {
    if (!this.props.item.data.showFixButton) return null;
    const item = this.props.item;
    return (attachKey2click(<button type="button" onClick={(event) => { event.stopPropagation(); item.data.fixError(); }} title={item.data.fixButtonTitle} className={"svc-json-error__fix-button"}>
      <SvgIcon iconName={item.data.fixButtonIcon} size={"auto"}></SvgIcon>
    </button>));
  }
}

ReactElementFactory.Instance.registerElement(
  "json-error-item",
  (props) => {
    return React.createElement(ItemTemplateComponent, props);
  }
);