import { QuestionAdornerViewModel, toggleHovered } from "survey-creator-core";
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

