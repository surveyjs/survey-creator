import React from "react";
import { ItemValue, QuestionSelectBase, SurveyModel } from "survey-core";
import { ReactElementFactory, ReactSurveyElementsWrapper } from "survey-react-ui";
import {
  QuestionAdornerComponent,
  QuestionAdornerComponentProps
} from "./Question";

export class QuestionDropdownAdornerComponent extends QuestionAdornerComponent {
  renderElementPlaceholder(): JSX.Element {
    const question = this.props.question as QuestionSelectBase;
    const textStyle = (this.props.question as any).textStyle;
    return (
      <div className="svc-question__dropdown-choices">
        {(question.visibleChoices || []).map(
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
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-dropdown-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionDropdownAdornerComponent, props);
  }
);
