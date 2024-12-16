import * as React from "react";
import { QuestionCommentWithResetModel, QuestionTextWithResetModel } from "survey-creator-core";
import { ReactQuestionFactory, SurveyQuestionElementBase, SurveyQuestionText, SvgIcon } from "survey-react-ui";

export class SurveyQuestionTextWithReset extends SurveyQuestionElementBase {
  protected get question(): QuestionTextWithResetModel | QuestionCommentWithResetModel {
    return this.questionBase as unknown as (QuestionTextWithResetModel | QuestionCommentWithResetModel);
  }
  protected renderElement(): React.JSX.Element {
    const textElement = this.renderInput();
    const resetButton = this.renderResetButton();
    return (
      <div className={this.question.getRootClass()}>
        {textElement}
        {resetButton}
      </div>
    );
  }

  protected renderInput() {
    return ReactQuestionFactory.Instance.createQuestion(this.question.wrappedQuestionTemplate,
      {
        question: this.question,
        isDisplayMode: this.question.isInputReadOnly,
        creator: this,
      });
  }
  protected renderResetButton() {
    return (<button
      className={this.question.cssClasses.resetButton}
      disabled={this.question.resetValueAdorner.isDisabled}
      title={this.question.resetValueAdorner.caption}
      onClick={() => this.question.resetValueAdorner.resetValue()}>
      <SvgIcon iconName={this.question.cssClasses.resetButtonIcon} size={"auto"}></SvgIcon>
    </button>);
  }
}

ReactQuestionFactory.Instance.registerQuestion("textwithreset", (props) => {
  return React.createElement(SurveyQuestionTextWithReset, props);
});

ReactQuestionFactory.Instance.registerQuestion("commentwithreset", (props) => {
  return React.createElement(SurveyQuestionTextWithReset, props);
});