import * as React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { ComponentContainerModel } from "survey-creator-core";
import { ComponentContainer } from "../components/ComponentContainer";

interface ITabContainerComponentProps {
  data: ComponentContainerModel;
}

export class TabContainerComponent extends SurveyElementBase<
  ITabContainerComponentProps,
  any
> {
  constructor(props) {
    super(props);
  }
  protected getStateElement(): Base {
    return this.model;
  }
  private get model(): ComponentContainerModel {
    return this.props.data;
  }
  renderElement(): React.JSX.Element {
    return <ComponentContainer model={this.model} />;
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-tab-container",
  (props: ITabContainerComponentProps) => {
    return React.createElement(TabContainerComponent, props);
  }
);
