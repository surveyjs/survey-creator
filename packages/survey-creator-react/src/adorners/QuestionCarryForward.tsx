import { QuestionCarryForwardParams } from "survey-creator-core";
import React from "react";
import { ReactElementFactory } from "survey-react-ui";
import { ActionButton } from "../ActionButton";

export class QuestionCarrayForwardBanner extends React.Component<QuestionCarryForwardParams, any> {
  render(): JSX.Element {
    return (<div>
      <span>{this.props.text}</span>
      <ActionButton click={() => this.props.onClick()} text={this.props.question.name}></ActionButton>
    </div>);
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question-carryforward",
  (props: QuestionCarryForwardParams) => {
    return React.createElement(QuestionCarrayForwardBanner, props);
  }
);

