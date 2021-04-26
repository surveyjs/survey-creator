import React from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, Survey } from "survey-react-ui";
import { EmbedModel, TabEmbedPlugin } from "@survey/creator";

interface ITabEmbedComponentProps {
  data: TabEmbedPlugin;
}

export class TabEmbedComponent extends SurveyElementBase<ITabEmbedComponentProps, any> {
  private model: EmbedModel;
  constructor(props: ITabEmbedComponentProps) {
    super(props);
    this.model = props.data.model;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  render(): JSX.Element {
    return (
      <div className='svc-creator-tab__content'>
        {this.model.survey ? <Survey model={this.model.survey}></Survey> : null}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement('svc-tab-embed',
  (props: ITabEmbedComponentProps) => {
    return React.createElement(TabEmbedComponent, props);
  }
);