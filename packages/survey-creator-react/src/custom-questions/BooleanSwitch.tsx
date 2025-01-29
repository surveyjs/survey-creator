import * as React from "react";
import { RendererFactory } from "survey-core";
import { attachKey2click, ReactQuestionFactory, SurveyElementBase, SurveyQuestionElementBase } from "survey-react-ui";

export class SurveyQuestionBooleanSwitch extends SurveyQuestionElementBase {
  protected renderElement(): React.JSX.Element {
    const button = attachKey2click(<div className={"spg-boolean-switch__button" + (this.questionBase.value ? " spg-boolean-switch__button--checked" : "")} tabIndex={0}
      role="checkbox"
      aria-required={this.questionBase.ariaRequired}
      aria-label={this.questionBase.ariaLabel}
      aria-invalid={this.questionBase.ariaInvalid}
      aria-errormessage={this.questionBase.ariaErrormessage}
    >
      <div className="spg-boolean-switch__thumb">
        <div className="spg-boolean-switch__thumb-circle spg-boolean-switch__thumb--left"></div>
      </div>
      <div className="spg-boolean-switch__thumb">
        <div className="spg-boolean-switch__thumb-circle spg-boolean-switch__thumb--right"></div>
      </div>
    </div>, this.questionBase, { processEsc: false });

    return (
      <div className="spg-boolean-switch" onClick={() => this.questionBase.value = !this.questionBase.value}>
        {button}
        <div className="spg-boolean-switch__caption">
          <div className="spg-boolean-switch__title">
            {SurveyElementBase.renderLocString(this.questionBase.locTitle)}
          </div>
        </div>
      </div>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion(
  "sv-boolean-switch",
  (props) => {
    return React.createElement(SurveyQuestionBooleanSwitch, props);
  }
);

RendererFactory.Instance.registerRenderer(
  "boolean",
  "switch",
  "sv-boolean-switch"
);
