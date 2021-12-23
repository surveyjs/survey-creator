import { QuestionAdornerViewModel, toggleHovered } from "@survey/creator";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, Question } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  SurveyQuestion,
  attachKey2click,
  SvgIcon,
  Popup
} from "survey-react-ui";

export interface QuestionWrapperFooterProps {
  className?: string;
  model: QuestionAdornerViewModel;
}
export class QuestionWrapperFooter extends React.Component<QuestionWrapperFooterProps, any> {
  render(): JSX.Element {
    return (<div className={this.props.className}>
      <SurveyActionBar model={this.props.model.actionContainer}></SurveyActionBar>
    </div>);
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question-footer",
  (props: QuestionWrapperFooterProps) => {
    return React.createElement(QuestionWrapperFooter, props);
  }
);

