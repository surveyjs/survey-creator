import React from "react";
import { QuestionDropdownAdornerViewModel } from "survey-creator-core";
import { ItemValue, QuestionDropdownModel, QuestionSelectBase, SurveyModel } from "survey-core";
import { ReactElementFactory, ReactSurveyElementsWrapper } from "survey-react-ui";
import {
  QuestionAdornerComponent,
  QuestionAdornerComponentProps
} from "./Question";
import { ActionButton } from "../ActionButton";

export class QuestionDropdownAdornerComponent extends QuestionAdornerComponent {
  constructor(props: QuestionAdornerComponentProps) {
    super(props);
  }
  protected createQuestionViewModel(): QuestionDropdownAdornerViewModel {
    return new QuestionDropdownAdornerViewModel(
      this.props.componentData,
      this.props.question as QuestionDropdownModel,
      null
    );
  }
  public get dropdownModel(): QuestionDropdownAdornerViewModel {
    return this.model as QuestionDropdownAdornerViewModel;
  }
  public get question(): QuestionSelectBase {
    return this.dropdownModel.question as QuestionSelectBase;
  }

  renderElementPlaceholder(): JSX.Element {
    const textStyle = (this.question as any).textStyle;
    return (
      <div
        className="svc-question__dropdown-choices--wrapper">
        <div className="svc-question__dropdown-choices">
          {(this.dropdownModel.getRenderedItems() || []).map(
            (item: ItemValue, index: number) => (
              <div
                className={this.dropdownModel.getChoiceCss()}
                key={`editable_choice_${index}`}
              >
                {ReactSurveyElementsWrapper.wrapItemValue(this.question.survey as SurveyModel,
                  ReactElementFactory.Instance.createElement(
                    "survey-radiogroup-item",
                    {
                      question: this.question,
                      cssClasses: this.question.cssClasses,
                      isDisplayMode: true,
                      item: item,
                      textStyle: textStyle,
                      index: index,
                      isChecked: this.question.value === item.value
                    }
                  ),
                  this.question,
                  item
                )}
              </div>
            )
          )}
        </div>
        {this.dropdownModel.needToCollapse ?
          <ActionButton
            click={this.dropdownModel.switchCollapse}
            text={this.dropdownModel.getButtonText()}
            allowBubble={true}
          ></ActionButton> :
          null
        }
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-dropdown-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionDropdownAdornerComponent, props);
  }
);
