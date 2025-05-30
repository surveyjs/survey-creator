import * as React from "react";
import { Base } from "survey-core";
import { QuestionRatingAdornerViewModel } from "survey-creator-core";
import { attachKey2click, ReactElementFactory, SvgIcon } from "survey-react-ui";
import { QuestionAdornerComponentProps } from "./Question";
import { CreatorModelElement } from "../ModelElement";

export class QuestionRatingAdornerComponent extends CreatorModelElement<QuestionAdornerComponentProps, any> {
  private modelValue: QuestionRatingAdornerViewModel;

  protected createModel(props: any): void {
    this.modelValue = this.createQuestionViewModel(props);
  }
  protected createQuestionViewModel(props: any): QuestionRatingAdornerViewModel {
    return new QuestionRatingAdornerViewModel(
      props.componentData,
      props.question as any,
      null
    );
  }
  protected getUpdatedModelProps(): string[] {
    return ["question", "componentData"];
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
  protected renderElement(): React.JSX.Element {
    const model = this.ratingModel;
    return (<>
      <div className="svc-rating-question-content">
        <div className={model.controlsClassNames}>
          {model.allowRemove ? attachKey2click(<span
            role="button"
            className={model.removeClassNames}
            aria-label={model.removeTooltip}
            onClick={() => model.removeItem(model)}
          >
            <SvgIcon size={"auto"} iconName={"icon-remove_16x16"} title={model.removeTooltip}></SvgIcon>
          </span>) : null}
          {model.allowAdd ? attachKey2click(<span
            role="button"
            className={model.addClassNames}
            aria-label={model.addTooltip}
            onClick={() => model.addItem(model)}
          >
            <SvgIcon size={"auto"} iconName={"icon-add_16x16"} title={model.addTooltip}></SvgIcon>
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
