import * as Survey from "survey-react";
import { Base, ReactElementFactory, SurveyElementBase } from "survey-react";
import { CreatorBase } from "@survey/creator";
import React from "react";

export class TabPreviewSurveyComponent extends SurveyElementBase {
  constructor(props) {
    super(props);

    // const creator: CreatorBase<Survey.Model> = this.props.creator;
    // const survey: Survey.Model = this.props.survey;
    // const data: any = this.props.survey;
  }

  render(): JSX.Element {
    return <div>Test Survey</div>;
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-test", (props) => {
  return React.createElement(TabPreviewSurveyComponent, props);
});
