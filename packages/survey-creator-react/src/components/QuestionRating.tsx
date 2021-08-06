import {
  QuestionAdornerViewModel,
  QuestionRatingAdornerViewModel
} from "@survey/creator";
import React from "react";
import {
  QuestionAdornerComponent,
  QuestionAdornerComponentProps
} from "./Question";
import { attachKey2click, ReactElementFactory, SvgIcon } from "survey-react-ui";

export class QuestionRatingAdornerComponent extends QuestionAdornerComponent {
  protected createQuestionViewModel(): QuestionAdornerViewModel {
    return new QuestionRatingAdornerViewModel(
      this.props.componentData,
      this.props.question as any,
      null
    );
  }
  public get ratingModel(): QuestionRatingAdornerViewModel {
    return this.model as QuestionRatingAdornerViewModel;
  }

  renderElementPlaceholder(): JSX.Element {
    const question = this.props.question;
    const model = this.ratingModel;
    return (
      <div className="svc-rating-question-controls svc-item-value-controls">
        {model.allowRemove ? attachKey2click(<span
          className="svc-item-value-controls__button svc-item-value-controls__remove"
          onClick={() => model.removeItem(model)}
        >
          <SvgIcon size={16} iconName={"icon-remove-item-value"}></SvgIcon>
        </span>) : null}
        {model.allowAdd ? attachKey2click(<span
          className="svc-item-value-controls__button svc-item-value-controls__add"
          onClick={() => model.addItem(model)}
        >
          <SvgIcon size={16} iconName={"icon-add-item-value"}></SvgIcon>
        </span>): null}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-rating-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionRatingAdornerComponent, props);
  }
);
