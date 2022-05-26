import React from "react";
import { Base } from "survey-core";
import { QuestionRatingAdornerViewModel } from "survey-creator-core";
import { attachKey2click, ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";
import { QuestionAdornerComponentProps } from "./Question";

export class QuestionRatingAdornerComponent extends SurveyElementBase<QuestionAdornerComponentProps, any> {
  private modelValue: QuestionRatingAdornerViewModel;

  constructor(props: QuestionAdornerComponentProps) {
    super(props);
    this.modelValue = this.createQuestionViewModel();
  }
  protected createQuestionViewModel(): QuestionRatingAdornerViewModel {
    return new QuestionRatingAdornerViewModel(
      this.props.componentData,
      this.props.question as any,
      null
    );
  }
  public get ratingModel(): QuestionRatingAdornerViewModel {
    return this.model as QuestionRatingAdornerViewModel;
  }

  public get model(): QuestionRatingAdornerViewModel {
    return this.modelValue;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  protected renderElement(): JSX.Element {
    const model = this.ratingModel;
    return (<>
      <div className="svc-rating-question-content">
        <div className="svc-rating-question-controls svc-item-value-controls">
          {model.allowRemove ? attachKey2click(<span
            className="svc-item-value-controls__button svc-item-value-controls__remove"
            aria-label={model.removeTooltip}
            onClick={() => model.removeItem(model)}
          >
            <SvgIcon size={16} iconName={"icon-remove_16x16"}></SvgIcon>
          </span>) : null}
          {model.allowAdd ? attachKey2click(<span
            className="svc-item-value-controls__button svc-item-value-controls__add"
            aria-label={model.addTooltip}
            onClick={() => model.addItem(model)}
          >
            <SvgIcon size={16} iconName={"icon-add_16x16"}></SvgIcon>
          </span>) : null}
        </div>
        {this.props.element}
      </div>
    </>);
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-rating-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionRatingAdornerComponent, props);
  }
);
ReactElementFactory.Instance.registerElement(
  "svc-rating-question-content",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionRatingAdornerComponent, props);
  }
);
