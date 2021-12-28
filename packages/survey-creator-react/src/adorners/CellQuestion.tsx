import React from "react";
import { Base, Question } from "survey-core";
import {
  attachKey2click,
  ReactElementFactory,
  SurveyElementBase
} from "survey-react-ui";
import { QuestionAdornerViewModel, toggleHovered } from "@survey/creator";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { QuestionAdornerComponentProps } from "./Question";

export class CellQuestionAdornerComponent extends SurveyElementBase<
  QuestionAdornerComponentProps,
  any
> {
  model: QuestionAdornerViewModel;
  constructor(props: QuestionAdornerComponentProps) {
    super(props);
    this.model = new QuestionAdornerViewModel(
      this.props.componentData,
      this.props.question,
      null
    );
  }
  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    if (this.model.isDragged) {
      return null;
    }

    return (
      <React.Fragment>
        <div
          data-sv-drop-target-survey-element={this.model.surveyElement.name}
          className={"svc-question__adorner"}
        >
          <div className={" svc-question__content--selected-no-border svc-question__content"}>
            {this.props.element}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-cell-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(CellQuestionAdornerComponent, props);
  }
);
