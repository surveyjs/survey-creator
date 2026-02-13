import * as React from "react";
import { ComponentContainerModel } from "survey-creator-core";
import { ReactElementFactory } from "survey-react-ui";

interface IComponentContainerProps {
  model: ComponentContainerModel;
}

export class ComponentContainer extends React.Component<IComponentContainerProps, any> {
  constructor(props: IComponentContainerProps) {
    super(props);
  }
  render(): React.JSX.Element {
    return (
      <div className={this.props.model.cssClass} >
        {this.props.model.elements.map((element, index) => {
          return ReactElementFactory.Instance.createElement(element.componentName, { ...element.componentData, key: index });
        })}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-component-container",
  (props: IComponentContainerProps) => {
    return React.createElement(ComponentContainer, props);
  }
);