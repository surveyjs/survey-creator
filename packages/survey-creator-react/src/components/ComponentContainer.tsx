import * as React from "react";
import { ReactElementFactory } from "survey-react-ui";

interface IComponentContainerProps {
  elements: ComponentContainerModel;
}

export class ComponentContainer extends React.Component<IComponentContainerProps, any> {
  constructor(props: IComponentContainerProps) {
    super(props);
  }
  render(): React.JSX.Element {
    return (
      <div className="svc-component-container" >
        {this.props.elements.map((element, index) => {
          return ReactElementFactory.Instance.createElement(element.componentName, { model: element.componentData, key: index });
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