import * as React from "react";
import { type QuestionBooleanModel, RendererFactory } from "survey-core";
import { attachKey2click, ReactQuestionFactory, SurveyElementBase, SurveyQuestionElementBase } from "survey-react-ui";
export class SurveyQuestionBooleanSwitch extends SurveyQuestionElementBase {
  protected renderElement(): React.JSX.Element {
    const button = attachKey2click(<div className={"spg-boolean-switch__button" + (this.questionBase.value ? " spg-boolean-switch__button--checked" : "")} tabIndex={0}
      role="checkbox"
      aria-checked={this.questionBase.booleanValue || false}
      aria-required={this.questionBase.a11y_input_ariaRequired}
      aria-label={this.questionBase.a11y_input_ariaLabel}
      aria-labelledby={this.questionBase.a11y_input_ariaLabelledBy}
      aria-invalid={this.questionBase.a11y_input_ariaInvalid}
      aria-errormessage={this.questionBase.a11y_input_ariaErrormessage}
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
          <div className="spg-boolean-switch__title" id={this.questionBase.labelRenderedAriaID}>
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
