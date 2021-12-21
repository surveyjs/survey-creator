import { QuestionAdornerViewModel, toggleHovered } from "@survey/creator";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, ItemValue } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { QuestionAdornerComponentProps } from "./Question";
import { attachKey2click } from "survey-react-ui";

export class CellQuestionDropdownAdornerComponent extends SurveyElementBase<
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
          data-sv-drop-target-survey-element={this.model.surveyElement.name}
          className={"svc-question__adorner"}
        >
          {attachKey2click(
            <div
              className={
                " svc-question__content--selected-no-border svc-question__content"
              }
              onClick={(e) =>
                this.model.select(this.model, new ReactMouseEvent(e))
              }
            >
              {this.props.element}

              <div className="svc-question__dropdown-choices">
                {question.visibleChoices.map(
                  (item: ItemValue, index: number) => (
                    <div
                      className="svc-question__dropdown-choice"
                      key={`editable_choice_${index}`}
                    >
                      {question.survey["wrapItemValue"](
                        ReactElementFactory.Instance.createElement(
                          "survey-radiogroup-item",
                          {
                            question: question,
                            cssClasses: question.cssClasses,
                            isDisplayMode: true,
                            item: item,
                            textStyle: question.textStyle,
                            index: index,
                            isChecked: question.value === item.value
                          }
                        ),
                        question,
                        item
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-cell-dropdown-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(CellQuestionDropdownAdornerComponent, props);
  }
);
