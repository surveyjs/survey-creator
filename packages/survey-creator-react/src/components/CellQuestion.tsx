import { QuestionAdornerViewModel, toggleHovered } from "@survey/creator";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, Question } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  SurveyQuestion,
} from "survey-react-ui";
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
          data-svc-drop-target-element-name={this.model.surveyElement.name}
          className={"svc-question__adorner"}
        >
          <div
            className={" svc-question__content--selected-no-border svc-question__content " + this.model.css()}
            onClick={(e) => this.model.select(this.model, new ReactMouseEvent(e))}
          >
            {this.props.element}
          </div>
        </div>
      </React.Fragment >
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-cell-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(CellQuestionAdornerComponent, props);
  }
);
