import * as React from "react";
import { editorLocalization } from "survey-creator-core";
import { ReactElementFactory } from "survey-react-ui";

export class PropertyGridPlaceholderComponent extends React.Component<any, any> {

  render(): React.JSX.Element | null {
    return (
      <div className="svc-property-grid-placeholder">
        <div className="svc-property-grid-placeholder__header">
          <span className="svc-property-grid-placeholder__title">{editorLocalization.getString("ed.propertyGridPlaceholderTitle")}</span>
          <span className="svc-property-grid-placeholder__description">{editorLocalization.getString("ed.propertyGridPlaceholderDescription")}</span>
        </div>
        <div className="svc-property-grid-placeholder__content">
          <div className="svc-property-grid-placeholder__gap"></div>
          <div className="svc-property-grid-placeholder__image"></div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-property-grid-placeholder", (props) => {
  return React.createElement(PropertyGridPlaceholderComponent, props);
});