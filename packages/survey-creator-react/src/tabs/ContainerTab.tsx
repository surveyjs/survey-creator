import * as React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { TabContainerViewModel } from "survey-creator-core";
import { ComponentContainer } from "../components/ComponentContainer";

interface ITabContainerComponentProps {
  data: TabContainerViewModel;
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
  private get model(): TabContainerViewModel {
    return this.props.data;
  }
  renderElement(): React.JSX.Element {
    return <ComponentContainer model={this.model.containerModel} />;
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-tab-container",
  (props: ITabContainerComponentProps) => {
    return React.createElement(TabContainerComponent, props);
  }
);
