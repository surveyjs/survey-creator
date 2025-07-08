import { QuestionAdornerViewModel, toggleHovered } from "survey-creator-core";
import * as React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import {
  SurveyActionBar,
  ReactElementFactory,
} from "survey-react-ui";

export interface QuestionWrapperFooterProps {
  className?: string;
  model: QuestionAdornerViewModel;
}
export class QuestionWrapperFooter extends React.Component<QuestionWrapperFooterProps, any> {
  render(): React.JSX.Element {
    return (<div className={this.props.className} onFocus={(e) => this.props.model.select(this.props.model, new ReactMouseEvent(e as any))}>
      <SurveyActionBar model={this.props.model.actionContainer} handleClick={false}></SurveyActionBar>
    </div>);
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question-footer",
  (props: QuestionWrapperFooterProps) => {
    return React.createElement(QuestionWrapperFooter, props);
  }
);

