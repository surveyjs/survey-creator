import * as React from "react";
import { editorLocalization } from "survey-creator-core";
import { ReactElementFactory } from "survey-react-ui";

export class PropertyGridPlaceholderComponent extends React.Component<any, any> {

  render(): JSX.Element | null {
    return (
      <div className="Placeholder_21220_2028700">
        <div className="Title_20449_217613">
          <span className="Title_20449_217614">{editorLocalization.getString("ed.propertyGridPlaceholderTitle")}</span>
          <span className="Description_20449_217615">{editorLocalization.getString("ed.propertyGridPlaceholderDescription")}</span>
        </div>
        <div className="Container_20450_217630">
          <div className="Gap_20450_217633"></div>
          <div className="Image_20449_217611"></div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-property-grid-placeholder", (props) => {
  return React.createElement(PropertyGridPlaceholderComponent, props);
});