import { QuestionAdornerViewModel } from "@survey/creator";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, Question } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  SurveyQuestion,
} from "survey-react-ui";

interface QuestionAdornerComponentProps {
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
      <>
        {this.renderDragOverFeedback(this.model.showDragOverFeedbackAbove)}
        <div
          className={"svc-question__content " + this.model.css()}
          onClick={(e) => this.model.select(this.model, new ReactMouseEvent(e))}
          onDragStart={(e) =>
            this.model.dragStart(this.model, new ReactDragEvent(e))
          }
          onDragOver={(e) => {
            this.model.dragOver(this.model, new ReactDragEvent(e));
          }}
          onDragEnd={(e) =>
            this.model.dragEnd(this.model, new ReactDragEvent(e))
          }
          onDrop={(e) => this.model.drop(this.model, new ReactDragEvent(e))}
          draggable={this.model.isDraggable}
        >
          {this.renderPanelPlaceholder()}
          {this.props.element}
          <div className="svc-question__content-actions">
            <SurveyActionBar items={this.model.actions}></SurveyActionBar>
          </div>
        </div>
        {this.renderDragOverFeedback(this.model.showDragOverFeedbackBelow)}
      </>
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
  renderDragOverFeedback(shouldRender: boolean): JSX.Element {
    if (!shouldRender) {
      return null;
    }

    return (
      <div style={{ pointerEvents: "none" }}>
        <SurveyQuestion
          creator={this.model.creator}
          element={this.model.dragOverFeedback.data}
        ></SurveyQuestion>
      </div>
    );
  }
}

// <!-- ko if: isEmptyElement -->
// <div class="svc-panel__placeholder_frame">
//   <div
//     class="svc-panel__placeholder"
//     data-bind="text: placeholderText"
//   ></div>
// </div>
// <!-- /ko -->

ReactElementFactory.Instance.registerElement(
  "svc-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionAdornerComponent, props);
  }
);
