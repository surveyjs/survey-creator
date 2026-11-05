import * as React from "react";
import { Base, ItemValue, QuestionSelectBase } from "survey-core";
import { TranslationDropdownViewModel, translationDropdownComponentName } from "survey-creator-core";
import { ReactElementFactory } from "survey-react-ui";
import { QuestionAdornerComponentProps } from "./Question";
import { CreatorModelElement } from "../ModelElement";

// The flattened choice list of a dropdown/tagbox question in the translation side-by-side
// panes. Chrome-free: no designer adorner, no itemvalue wrappers - the choice texts render
// through the survey's string renderer (editable in the target pane, plain in the source one).
export class TranslationDropdownQuestionComponent extends CreatorModelElement<
  QuestionAdornerComponentProps,
  any
> {
  private modelValue: TranslationDropdownViewModel;
  public get model(): TranslationDropdownViewModel {
    return this.modelValue;
  }
  protected createModel(props: any): void {
    const { question } = props;
    const translation = props.componentData ? props.componentData.translation : undefined;
    if (!this.modelValue) {
      this.modelValue = new TranslationDropdownViewModel(question, translation);
    } else {
      this.modelValue.attachToUI(question, translation);
    }
  }
  protected getUpdatedModelProps(): string[] {
    return ["question", "componentData"];
  }
  protected getStateElement(): Base {
    return this.model;
  }
  componentDidMount(): void {
    super.componentDidMount();
    this.createModel(this.props);
  }
  componentWillUnmount(): void {
    super.componentWillUnmount();
    this.model?.detachFromUI();
  }

  renderElement(): React.JSX.Element {
    const question = this.props.question as QuestionSelectBase;
    const textStyle = (this.props.question as any).textStyle;
    return (
      <React.Fragment>
        {this.props.element}
        <div className="st-dropdown-choices--wrapper">
          <div className="svc-question__dropdown-choices">
            {this.model.getRenderedItems().map(
              (item: ItemValue, index: number) => (
                <div className={this.model.getChoiceCss()} key={`translation_choice_${index}`}>
                  {ReactElementFactory.Instance.createElement(this.model.itemComponent, {
                    question: question,
                    cssClasses: question.cssClasses,
                    isDisplayMode: true,
                    item: item,
                    textStyle: textStyle,
                    index: index,
                    isChecked: false
                  })}
                </div>
              )
            )}
          </div>
          {this.model.needToCollapse ?
            ReactElementFactory.Instance.createElement("sv-action-bar-item", { item: this.model.collapseAction }) : null}
        </div>
      </React.Fragment>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  translationDropdownComponentName,
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(TranslationDropdownQuestionComponent, props);
  }
);
