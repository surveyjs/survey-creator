import React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, Survey } from "survey-react-ui";
import { EmbedModel, TabEmbedPlugin } from "@survey/creator";
import { TabBaseComponent } from "./TabBase";

interface ITabEmbedComponentProps {
  data: TabEmbedPlugin;
}

export class TabEmbedComponent extends TabBaseComponent<
  ITabEmbedComponentProps,
  any
> {
  private get model(): EmbedModel {
    return this.props.data.model;
  }
  protected getStateModel(): Base {
    return this.model;
  }
  renderElement(): JSX.Element {
    return (
      <div className="svc-creator-tab__content">
        {this.model.survey ? <Survey model={this.model.survey}></Survey> : null}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-tab-embed",
  (props: ITabEmbedComponentProps) => {
    return React.createElement(TabEmbedComponent, props);
  }
);
