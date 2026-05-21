import * as React from "react";
import { ComponentContainerModel } from "survey-creator-core";
import { ReactElementFactory, Scroll } from "survey-react-ui";

interface IComponentContainerProps {
  model: ComponentContainerModel;
}

export class ComponentContainer extends React.Component<IComponentContainerProps, any> {
  private rootRef = React.createRef<HTMLDivElement>();

  componentDidMount(): void {
    if (this.rootRef.current) {
      this.props.model.attachScrollListener(this.rootRef.current);
    }
  }

  componentWillUnmount(): void {
    this.props.model.detachScrollListener();
  }

  render(): React.JSX.Element {
    const children = this.props.model.elements.map((element, index) => {
      return ReactElementFactory.Instance.createElement(element.componentName, { ...element.componentData, key: index });
    });
    const inner = this.props.model.scrollable ? <Scroll> {children} </Scroll> : children;
    if (this.props.model.wrapped) {
      return <div ref={this.rootRef} className={this.props.model.cssClass}>{inner}</div>;
    }
    if (this.props.model.scrollable) {
      return <div ref={this.rootRef}>{inner}</div>;
    }
    return <>{inner}</>;
  }
}

ReactElementFactory.Instance.registerElement("svc-component-container",
  (props: IComponentContainerProps) => {
    return React.createElement(ComponentContainer, props);
  }
);