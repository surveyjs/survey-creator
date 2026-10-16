import * as React from "react";
import { Action, Base } from "survey-core";
import { QuestionRatingAdornerViewModel } from "survey-creator-core";
import { attachKey2click, ReactElementFactory, SurveyActionBar, SvgIcon } from "survey-react-ui";
import { QuestionAdornerComponentProps } from "./Question";
import { CreatorModelElement } from "../ModelElement";

export class QuestionRatingAdornerComponent extends CreatorModelElement<QuestionAdornerComponentProps, any> {
  private modelValue: QuestionRatingAdornerViewModel;

  protected createModel(props: any): void {
    if (this.modelValue && !this.modelValue.isDisposed) {
      this.modelValue.dispose();
    }
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
  componentDidMount(): void {
    // React StrictMode mounts the same component again after
    // componentWillUnmount disposed its model.
    if (this.modelValue.isDisposed) {
      this.createModel(this.props);
      this.forceUpdate();
    }
    super.componentDidMount();
  }
  componentWillUnmount(): void {
    super.componentWillUnmount();
    this.modelValue.dispose();
  }
  protected renderElement(): React.JSX.Element {
    const model = this.ratingModel;
    return (<>
      <div className="svc-rating-question-content">
        <SurveyActionBar model={model.rateActionsContainer} />
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
