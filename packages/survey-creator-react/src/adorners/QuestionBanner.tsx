import { QuestionBannerParams } from "survey-creator-core";
import * as React from "react";
import { ReactElementFactory } from "survey-react-ui";
import { ActionButton } from "../ActionButton";

export class QuestionBanner extends React.Component<QuestionBannerParams, any> {
  render(): React.JSX.Element {
    return (
      <div className="svc-carry-forward-panel-wrapper"><div className="svc-carry-forward-panel">
        <span>{this.props.text}{" "}</span>
        <span className="svc-carry-forward-panel__link">
          <ActionButton click={() => this.props.onClick()} text={this.props.actionText}></ActionButton>
        </span>
      </div></div>);
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question-banner",
  (props: QuestionBannerParams) => {
    return React.createElement(QuestionBanner, props);
  }
);

