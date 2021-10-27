import React from "react";
import {
  attachKey2click,
  ReactQuestionFactory,
  SurveyQuestionElementBase
} from "survey-react-ui";
import { editorLocalization, QuestionLinkValueModel } from "@survey/creator";

export class SurveyQuestionLinkValue extends SurveyQuestionElementBase {
  constructor(props: any) {
    super(props);
  }
  protected get question(): QuestionLinkValueModel {
    return this.questionBase as QuestionLinkValueModel;
  }
  protected renderClear(): JSX.Element {
    if(this.questionBase.showClear) {
      return (
        <>
          {attachKey2click(
            <a className="spg-question-link__clear-button"
              onClick={(e) => {
                e.stopPropagation();
                this.question.doClearClick();
              }}
            >
              { editorLocalization.getString("pe.clear") }
            </a>
          )}
        </>
      );
    }
    else {
      return null;
    }
  }
  protected renderElement(): JSX.Element {
    if (this.question.isReadOnly) {
      return <span>{this.question.linkValueText}</span>;
    }
    return (
      <>
        {attachKey2click(
          <a className="spg-question-link__set-button"
            onClick={(e) => {
              e.stopPropagation();
              this.question.doLinkClick();
            }}
          >
            {this.question.linkValueText}
          </a>
        )}
        {this.renderClear()}

      </>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("linkvalue", (props) => {
  return React.createElement(SurveyQuestionLinkValue, props);
});
