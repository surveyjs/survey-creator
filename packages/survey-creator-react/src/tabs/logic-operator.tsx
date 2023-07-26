import * as React from "react";
import { QuestionDropdownModel, RendererFactory } from "survey-core";
import { initLogicOperator } from "survey-creator-core";
import { SurveyQuestionDropdown, ReactQuestionFactory } from "survey-react-ui";

export class SurveyLogicOpertor extends SurveyQuestionDropdown {
  constructor(props: any) {
    super(props);
  }

  protected renderInput(): JSX.Element {
    const q = this.question as QuestionDropdownModel;
    initLogicOperator(q);
    const text = (q.selectedItemLocText) ? this.renderLocString(q.selectedItemLocText) : "";

    return (<div
      id={this.question.inputId}
      className={q.getControlClass()}
      tabIndex={this.question.isInputReadOnly ? undefined : 0}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      disabled={this.question.isInputReadOnly}
      required={this.question.isRequired}
      onChange={this.updateValueOnEvent}
      onInput={this.updateValueOnEvent}
      onKeyUp={this.keyhandler}
      role={this.question.ariaRole}
      aria-required={this.question.ariaRequired}
      aria-label={this.question.ariaLabel}
      aria-invalid={this.question.ariaInvalid}
      aria-describedby={this.question.ariaDescribedBy}
    >
      <div className={this.question.cssClasses.controlValue}>
        {text}
        <div>{q.readOnlyText}</div>
      </div>
      {this.createClearButton()}
    </div>);
  }
}

ReactQuestionFactory.Instance.registerQuestion("sv-logic-operator", (props) => {
  return React.createElement(SurveyLogicOpertor, props);
});

RendererFactory.Instance.registerRenderer("dropdown", "logicoperator", "sv-logic-operator");