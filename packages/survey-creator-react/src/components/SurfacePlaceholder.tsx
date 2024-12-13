import * as React from "react";
import { ReactElementFactory } from "survey-react-ui";

interface ISurfacePlaceholderProps {
  name: string;
  placeholderTitleText: string;
  placeholderDescriptionText: string;
}

export class SurfacePlaceholder extends React.Component<ISurfacePlaceholderProps, any> {
  constructor(props: ISurfacePlaceholderProps) {
    super(props);
  }
  render(): React.JSX.Element {
    return (
      <div className="svc-surface-placeholder" >
        <div className={"svc-surface-placeholder__image svc-surface-placeholder__image--" + this.props.name}></div >
        <div className="svc-surface-placeholder__text">
          <div className="svc-surface-placeholder__title">{this.props.placeholderTitleText}</div>
          <div className="svc-surface-placeholder__description">{this.props.placeholderDescriptionText}</div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-surface-placeholder",
  (props: ISurfacePlaceholderProps) => {
    return React.createElement(SurfacePlaceholder, props);
  }
);