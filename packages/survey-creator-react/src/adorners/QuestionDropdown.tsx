import * as React from "react";
import { QuestionDropdownAdornerViewModel } from "survey-creator-core";
import { ItemValue, ListModel, QuestionDropdownModel, QuestionSelectBase, SurveyModel } from "survey-core";
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
  protected createQuestionViewModel(props: any): QuestionDropdownAdornerViewModel {
    return new QuestionDropdownAdornerViewModel(
      props.componentData,
      props.question as QuestionDropdownModel,
      null
    );
  }
  public get dropdownModel(): QuestionDropdownAdornerViewModel {
    return this.model as QuestionDropdownAdornerViewModel;
  }
  public get question(): QuestionSelectBase {
    return this.dropdownModel.question as QuestionSelectBase;
  }

  renderElementPlaceholder(): React.JSX.Element {
    if (this.dropdownModel.wysiwygMode) return null;
    const textStyle = (this.question as any).textStyle;
    return (
      <div
        className="svc-question__dropdown-choices--wrapper">
        <div>
          <div className="svc-question__dropdown-choices">
            {(this.dropdownModel.getRenderedItems() || []).map(
              (item: ItemValue, index: number) => (
                <div
                  className={this.dropdownModel.getChoiceCss()}
                  key={`editable_choice_${index}`}
                >
                  {ReactSurveyElementsWrapper.wrapItemValue(this.question.survey as SurveyModel,
                    ReactElementFactory.Instance.createElement(
                      this.dropdownModel.itemComponent,
                      {
                        key: item.value,
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
            ReactElementFactory.Instance.createElement("sv-action-bar-item", {
              item: this.dropdownModel.collapseAction,
            }) : null
          }
        </div>
      </div>
    );
  }
}

class WysiwygDropdownListItem extends React.Component<{ item: ItemValue, model: ListModel<ItemValue> }> {
  render(): React.ReactNode {
    const item = this.props.item;
    const question = this.props.model?.locOwner as QuestionSelectBase;
    if (!question || !item) return null;
    const element = ReactElementFactory.Instance.createElement(
      question.isDescendantOf("dropdown") ? "survey-radiogroup-item" : "survey-checkbox-item",
      {
        question: question,
        cssClasses: question.cssClasses,
        isDisplayMode: true,
        item: item,
        index: question.visibleChoices.findIndex(choice => choice === item),
        isChecked: question.isItemSelected(item)
      }
    );
    return (
      <div
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => event.stopPropagation()}
      >
        {ReactSurveyElementsWrapper.wrapItemValue(question.survey as SurveyModel, element, question, item)}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-wysiwyg-dropdown-item", (props) => {
  return React.createElement(WysiwygDropdownListItem, props);
});

ReactElementFactory.Instance.registerElement(
  "svc-dropdown-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionDropdownAdornerComponent, props);
  }
);
