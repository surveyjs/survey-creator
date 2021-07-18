import React from "react";
import { Base } from "survey-core";
import {
  ReactElementFactory,
  Survey,
  SurveyElementBase
} from "survey-react-ui";
import { EmbedModel } from "@survey/creator";

interface ITabEmbedComponentProps {
  data: EmbedModel;
}

export class TabEmbedComponent extends SurveyElementBase<
  ITabEmbedComponentProps,
  any
> {
  private get model(): EmbedModel {
    return this.props.data;
  }
  protected getStateElement(): Base {
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
