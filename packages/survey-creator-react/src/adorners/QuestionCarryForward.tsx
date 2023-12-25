import { QuestionCarryForwardParams } from "survey-creator-core";
import React from "react";
import { ReactElementFactory } from "survey-react-ui";
import { ActionButton } from "../ActionButton";

export class QuestionCarrayForwardBanner extends React.Component<QuestionCarryForwardParams, any> {
  render(): JSX.Element {
    return (
      <div className="svc-carry-forward-panel-wrapper"><div className="svc-carry-forward-panel">
        <span>{this.props.text}{" "}</span>
        <span className="svc-carry-forward-panel__link">
          <ActionButton click={() => this.props.onClick()} text={this.props.question.name}></ActionButton>
        </span>
      </div></div>);
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question-carryforward",
  (props: QuestionCarryForwardParams) => {
    return React.createElement(QuestionCarrayForwardBanner, props);
  }
);

