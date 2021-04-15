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
        <div
          className={"svc-question__adorner"}
          onDragOver={(e) => this.model.dragOver(this.model, new ReactDragEvent(e))
          }
          onDragEnd={(e) =>
            this.model.dragEnd(this.model, new ReactDragEvent(e))
          }
          onMouseOut={e => toggleHovered(e.nativeEvent, e.currentTarget)}
          onMouseOver={e => toggleHovered(e.nativeEvent, e.currentTarget)}
        >
          <div
            className={"svc-question__content " + this.model.css()}
            onClick={(e) => this.model.select(this.model, new ReactMouseEvent(e))}
            onDragStart={(e) =>
              this.model.dragStart(this.model, new ReactDragEvent(e))
            }
            // onDrop={(e) => this.model.drop(this.model, new ReactDragEvent(e))}
            draggable={this.model.isDraggable}
          >
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
