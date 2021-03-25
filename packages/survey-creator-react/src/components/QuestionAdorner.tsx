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
import {DragOverFeedbackComponent} from "./DragOverFeedback";

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
      <React.Fragment>
        <DragOverFeedbackComponent 
          shouldRender={this.model.showDragOverFeedbackAbove}
          creator={this.model.creator}
          feedback={this.model.dragOverFeedback}>
        </DragOverFeedbackComponent>
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
          {this.props.element}
          <div className="svc-question__content-actions">
            <SurveyActionBar items={this.model.actions}></SurveyActionBar>
          </div>
        </div>
        <DragOverFeedbackComponent 
          shouldRender={this.model.showDragOverFeedbackBelow}
          creator={this.model.creator}
          feedback={this.model.dragOverFeedback}>
        </DragOverFeedbackComponent>
      </React.Fragment>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionAdornerComponent, props);
  }
);
