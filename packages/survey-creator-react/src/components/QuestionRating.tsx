import { QuestionAdornerViewModel, QuestionImageAdornerViewModel, QuestionRatingAdornerViewModel, toggleHovered } from "@survey/creator";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, Question, QuestionImageModel, QuestionRatingModel, SurveyElement } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  SurveyQuestion,
  SvgIcon,
} from "survey-react-ui";

export interface QuestionRatingAdornerComponentProps {
  element: JSX.Element;
  question: QuestionRatingModel;
  componentData: any;
}

export class QuestionRatingAdornerComponent extends SurveyElementBase<
QuestionRatingAdornerComponentProps,
  any
> {
  model: QuestionRatingAdornerViewModel;

  constructor(props: QuestionRatingAdornerComponentProps) {
    super(props);
    this.model = new QuestionRatingAdornerViewModel(
      this.props.componentData,
      this.props.question as any,
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
          onMouseOut={e => toggleHovered(e.nativeEvent, e.currentTarget)}
          onMouseOver={e => toggleHovered(e.nativeEvent, e.currentTarget)}
        >
          <div
            className={"svc-question__content " + this.model.css()}
            onClick={(e) => this.model.select(this.model, new ReactMouseEvent(e))}
          >

            <div className={"svc-question__drag-area"}>
                <div
                  className={"svc-question__drag-element"}
                  onPointerDown={(event:any) => this.model.startDragSurveyElement(event)}
                ></div>
            </div>

            {this.props.element}

            <div className="svc-rating-question-controls svc-item-value-controls">
              <span className="svc-item-value-controls__button svc-item-value-controls__remove" onClick={() => this.model.removeItem(this.model)}>
                <SvgIcon size={16} iconName={'icon-remove-item-value'}></SvgIcon>
              </span>
              <span className="svc-item-value-controls__button svc-item-value-controls__add" onClick={() => this.model.addItem(this.model)}>
                <SvgIcon size={16} iconName={'icon-add-item-value'}></SvgIcon>
              </span>
            </div>

            <div className="svc-question__content-actions">
              <SurveyActionBar items={this.model.actions}></SurveyActionBar>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-rating-question",
  (props: QuestionRatingAdornerComponentProps) => {
    return React.createElement(QuestionRatingAdornerComponent, props);
  }
);
