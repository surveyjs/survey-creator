import React from "react";
import {
  ReactQuestionFactory,
  SurveyQuestionElementBase
} from "survey-react-ui";
import { editorLocalization, QuestionLinkValueModel } from "@survey/creator";
import { ActionButton } from "src/entries";

export class SurveyQuestionLinkValue extends SurveyQuestionElementBase {
  constructor(props: any) {
    super(props);
  }
  protected get question(): QuestionLinkValueModel {
    return this.questionBase as QuestionLinkValueModel;
  }
  protected renderClear(): JSX.Element {
    if (!this.questionBase.isReadOnly && this.questionBase.showClear) {
      return (
        <ActionButton
          classes="spg-question-link__clear-button"
          click={() => this.question.doClearClick()}
          selected={this.question.isSelected}
          text={editorLocalization.getString("pe.clear")}
        ></ActionButton>
      );
    }
    else {
      return null;
    }
  }
  protected renderElement(): JSX.Element {
    return (
      <>
        <ActionButton
          classes="spg-action-button spg-question-link__set-button"
          click={() => this.question.doLinkClick()}
          selected={this.question.isSelected}
          disabled={this.question.isReadOnly}
          text={this.question.linkValueText}
        ></ActionButton>
        {this.renderClear()}
      </>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("linkvalue", (props) => {
  return React.createElement(SurveyQuestionLinkValue, props);
});
