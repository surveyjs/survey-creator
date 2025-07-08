import * as React from "react";
import { QuestionDropdownModel, RendererFactory } from "survey-core";
import { initLogicOperator } from "survey-creator-core";
import { SurveyQuestionDropdown, ReactQuestionFactory } from "survey-react-ui";

export class SurveyLogicOpertor extends SurveyQuestionDropdown {
  constructor(props: any) {
    super(props);
  }

  protected renderInput(): React.JSX.Element {
    const q = this.question as QuestionDropdownModel;
    initLogicOperator(q);
    const text = (q.locReadOnlyText) ? this.renderLocString(q.locReadOnlyText) : "";
    const dropdownListModel = this.question.dropdownListModel;

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
      role={dropdownListModel.ariaQuestionRole}
      aria-required={dropdownListModel.ariaQuestionRequired}
      aria-invalid={dropdownListModel.ariaQuestionInvalid}
      aria-errormessage={dropdownListModel.ariaQuestionErrorMessage}
      aria-expanded={dropdownListModel.ariaQuestionExpanded}
      aria-label={dropdownListModel.ariaQuestionLabel}
      aria-labelledby={dropdownListModel.ariaQuestionLabelledby}
      aria-controls={dropdownListModel.ariaQuestionControls}
    >
      <div className={this.question.cssClasses.controlValue}>
        {text}
      </div>
    </div>);
  }

  protected renderEditorButtons(): React.JSX.Element | null {
    return null;
  }
}

ReactQuestionFactory.Instance.registerQuestion("sv-logic-operator", (props) => {
  return React.createElement(SurveyLogicOpertor, props);
});

RendererFactory.Instance.registerRenderer("dropdown", "logicoperator", "sv-logic-operator");