import { QuestionCarryForwardParams } from "survey-creator-core";
import React from "react";
import {
  ReactElementFactory,
  attachKey2click
} from "survey-react-ui";

export class QuestionCarrayForwardBanner extends React.Component<QuestionCarryForwardParams, any> {
  render(): JSX.Element {
    return (<div>
      <span>{this.props.text}</span>
      {attachKey2click(
        <span
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            this.props.onClick();
          }}
        >
          {this.props.question.name}
        </span>
      )}
    </div>);
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question-carryforward",
  (props: QuestionCarryForwardParams) => {
    return React.createElement(QuestionCarrayForwardBanner, props);
  }
);

