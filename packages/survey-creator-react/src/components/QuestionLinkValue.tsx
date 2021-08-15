import React from "react";
import {
  attachKey2click,
  ReactQuestionFactory,
  SurveyQuestionElementBase
} from "survey-react-ui";
import { QuestionLinkValueModel } from "@survey/creator";

export class SurveyQuestionLinkValue extends SurveyQuestionElementBase {
  constructor(props: any) {
    super(props);
  }
  protected get question(): QuestionLinkValueModel {
    return this.questionBase as QuestionLinkValueModel;
  }
  protected renderElement(): JSX.Element {
    if (this.question.isReadOnly) {
      return <span>{this.question.linkValueText}</span>;
    }
    return (
      <>
        {attachKey2click(
          <a
            onClick={(e) => {
              e.stopPropagation();
              this.question.doLinkClick();
            }}
          >
            {this.question.linkValueText}
          </a>
        )}
      </>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("linkvalue", (props) => {
  return React.createElement(SurveyQuestionLinkValue, props);
});
