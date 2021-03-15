import { QuestionAdornerViewModel } from "@survey/creator";
import React from "react";
import { Base, Question } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
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
    return (
      <div
        className={"svc-question__content " + this.model.css()}
        onClick={(e) => this.model.select(this.model, e.nativeEvent)}
        onDragStart={(e) => this.model.dragStart(this.model, e.nativeEvent)}
        onDragOver={(e) => this.model.dragOver(this.model, e.nativeEvent)}
        onDragEnd={(e) => this.model.dragEnd(this.model, e.nativeEvent)}
        onDrop={(e) => this.model.drop(this.model, e.nativeEvent)}
        draggable={this.model.isDraggable}
      >
        {this.props.element}
        <div className="svc-question__content-actions">
          <SurveyActionBar items={this.model.actions}></SurveyActionBar>
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
