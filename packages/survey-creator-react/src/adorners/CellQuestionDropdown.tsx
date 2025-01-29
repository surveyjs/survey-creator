import { QuestionAdornerViewModel, toggleHovered } from "survey-creator-core";
import * as React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, ItemValue, QuestionSelectBase, SurveyModel } from "survey-core";
import { ReactElementFactory, ReactSurveyElementsWrapper } from "survey-react-ui";
import { QuestionAdornerComponentProps } from "./Question";
import { CreatorModelElement } from "../ModelElement";
import { attachKey2click } from "survey-react-ui";

export class CellQuestionDropdownAdornerComponent extends CreatorModelElement<
  QuestionAdornerComponentProps,
  any
> {
  model: QuestionAdornerViewModel;
  protected createModel(props: any): void {
    this.model = new QuestionAdornerViewModel(
      props.componentData,
      props.question,
      null
    );
  }
  protected getUpdatedModelProps(): string[] {
    return ["question", "componentData"];
  }
  protected getStateElement(): Base {
    return this.model;
  }
  render(): React.JSX.Element {
    const question = this.props.question as QuestionSelectBase;
    const textStyle = (this.props.question as any).textStyle;
    return (
      <React.Fragment>
        <div
          data-sv-drop-target-survey-element={this.model.element.name}
          className={"svc-question__adorner"}
        >
          <div className={" svc-question__content--in-popup svc-question__content"}>
            {this.props.element}

            <div className="svc-question__dropdown-choices">
              {question.visibleChoices.map(
                (item: ItemValue, index: number) => (
                  <div
                    className="svc-question__dropdown-choice"
                    key={`editable_choice_${index}`}
                  >
                    {ReactSurveyElementsWrapper.wrapItemValue(question.survey as SurveyModel,
                      ReactElementFactory.Instance.createElement(
                        "survey-radiogroup-item",
                        {
                          question: question,
                          cssClasses: question.cssClasses,
                          isDisplayMode: true,
                          item: item,
                          textStyle: textStyle,
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
