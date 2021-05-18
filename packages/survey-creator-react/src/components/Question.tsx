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

export interface QuestionAdornerComponentProps {
  element: JSX.Element;
  question: Question;
  componentData: any;
}

export class QuestionAdornerComponent extends SurveyElementBase<
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
                  onPointerDown={(e) => this.model.startDragElement()}
                ></div>
            </div>
            {this.renderPanelPlaceholder()}
            {this.props.element}
            <div className="svc-question__content-actions">
              <SurveyActionBar items={this.model.actions}></SurveyActionBar>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
  renderPanelPlaceholder(): JSX.Element {
    if (!this.model.isEmptyElement) {
      return null;
    }

    return (
      <div className="svc-panel__placeholder_frame">
        <div className="svc-panel__placeholder">
          {this.model.placeholderText}
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionAdornerComponent, props);
  }
);
