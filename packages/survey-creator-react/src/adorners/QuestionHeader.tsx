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

export interface QuestionWrapperHeaderProps {
  className?: string;
  model: QuestionAdornerViewModel;
}

export class QuestionWrapperHeader extends React.Component<QuestionWrapperHeaderProps, any> {
  render(): JSX.Element {
    if (!this.props.model.allowDragging) return null;
    return (
      <div className={"svc-question__drag-area"}
        onPointerDown={(event: any) =>
          this.props.model.onPointerDown(event)
        }
      >
        <div
          className={"svc-question__drag-element"}
        ></div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question-header",
  (props: QuestionWrapperHeaderProps) => {
    return React.createElement(QuestionWrapperHeader, props);
  }
);
