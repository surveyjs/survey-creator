import * as React from "react";
import { ComponentContainerModel } from "survey-creator-core";
import { ReactElementFactory, Scroll } from "survey-react-ui";

interface IComponentContainerProps {
  model: ComponentContainerModel;
}

export class ComponentContainer extends React.Component<IComponentContainerProps, any> {
  constructor(props: IComponentContainerProps) {
    super(props);
  }
  render(): React.JSX.Element {
    const children = this.props.model.elements.map((element, index) => {
      return ReactElementFactory.Instance.createElement(element.componentName, { ...element.componentData, key: index });
    });
    const inner = this.props.model.scrollable ? <Scroll> {children} </Scroll> : children;
    return (
      this.props.model.wrapped ? <div className={this.props.model.cssClass} > {inner} </div> : <>{inner}</>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-component-container",
  (props: IComponentContainerProps) => {
    return React.createElement(ComponentContainer, props);
  }
);