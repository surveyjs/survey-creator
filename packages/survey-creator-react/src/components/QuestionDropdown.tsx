import { QuestionAdornerViewModel, toggleHovered } from "@survey/creator";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, ItemValue } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  SurveyQuestion,
} from "survey-react-ui";
import { QuestionAdornerComponentProps } from "./Question";

export class QuestionDropdownAdornerComponent extends SurveyElementBase<
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
    const question = this.props.question;
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
            {this.props.element}

            <div className="svc-question__dropdown-choices">
                {(question.visibleChoices.map((item: ItemValue, index: number) => (
                  <div className="svc-question__dropdown-choice" key={`editable_choice_${index}`}>
                    {(question.survey["wrapItemValue"](SurveyElementBase.renderLocString(item.locText), question, item))}
                </div>
              )))}

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
  "svc-dropdown-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionDropdownAdornerComponent, props);
  }
);
