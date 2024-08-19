import * as React from "react";
import {
  ReactQuestionFactory,
  SurveyQuestionElementBase
} from "survey-react-ui";
import { editorLocalization, QuestionLinkValueModel } from "survey-creator-core";
import { ActionButton } from "./ActionButton";

export class SurveyQuestionLinkValue extends SurveyQuestionElementBase {
  protected get question(): QuestionLinkValueModel {
    return this.questionBase as QuestionLinkValueModel;
  }
  protected renderClear(): JSX.Element {
    const showClear = (this.questionBase as any).showClear;
    if (!this.questionBase.isReadOnly && showClear) {
      return (
        <ActionButton
          classes={this.question.linkClearButtonCssClasses}
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
          classes={this.question.linkSetButtonCssClasses}
          click={() => this.question.doLinkClick()}
          selected={this.question.isSelected}
          disabled={!this.question.isClickable}
          text={this.question.linkValueText}
          title={this.question.tooltip}
        ></ActionButton>
        {this.renderClear()}
      </>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("linkvalue", (props) => {
  return React.createElement(SurveyQuestionLinkValue, props);
});
