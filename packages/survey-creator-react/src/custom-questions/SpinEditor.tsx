import * as React from "react";
import { QuestionSpinEditorModel } from "survey-creator-core";
import { ReactQuestionFactory, SurveyQuestionText, SvgIcon } from "survey-react-ui";

export class SurveyQuestionSpinEditor extends SurveyQuestionText {
  constructor(props: any) {
    super(props);
  }
  protected get question(): QuestionSpinEditorModel {
    return this.questionBase as QuestionSpinEditorModel;
  }
  protected renderInput() {
    return (
      <>
        <input
          role="spinbutton"
          id={this.question.inputId}
          disabled={this.isDisplayMode}
          className={this.question.cssClasses.control}
          ref={(input) => (this.setControl(input))}
          placeholder={this.question.renderedPlaceholder}
          autoComplete="off"
          onBlur={(event) => this.question.onBlur(event.nativeEvent)}
          onFocus={(event) => this.question.onFocus(event.nativeEvent)}
          onChange={this.question.onChange}
          onBeforeInput={event => this.question.onBeforeInput(event.nativeEvent as InputEvent)}
          onKeyUp={(event) => this.question.onKeyUp(event.nativeEvent)}
          onKeyDown={(event) => this.question.onInputKeyDown(event.nativeEvent)}
          aria-required={this.question.a11y_input_ariaRequired}
          aria-label={this.question.a11y_input_ariaLabel}
          aria-labelledby={this.question.a11y_input_ariaLabelledBy}
          aria-describedby={this.question.a11y_input_ariaDescribedBy}
          aria-invalid={this.question.a11y_input_ariaInvalid}
          aria-errormessage={this.question.a11y_input_ariaErrormessage}
        />
      </>
    );
  }
  protected renderElement(): React.JSX.Element {
    return (
      <div className={this.question.cssClasses.root} onKeyDown={event => this.question.onKeyDown(event.nativeEvent)}>
        {this.renderInput()}
        {this.renderButtons()}
      </div>
    );
  }
  protected getValueCore() {
    return this.question.renderedValue;
  }
  protected renderButtons(): React.JSX.Element {
    return (
      <span className={this.question.cssClasses.buttonsContainer}>
        <button
          tabIndex={-1}
          aria-hidden={"true"}
          className={this.question.cssClasses.arrowButton}
          disabled={this.isDisplayMode}
          onClick={this.question.onDownButtonClick}
          onMouseDown={this.question.onDownButtonMouseDown}
          onMouseUp={this.question.onButtonMouseUp}
          onMouseLeave={this.question.onButtonMouseLeave}
          onBlur={event => this.question.onBlur(event.nativeEvent)}
          onFocus={event => this.question.onFocus(event.nativeEvent)}>
          <SvgIcon iconName={this.question.cssClasses.decreaseButtonIcon} size={"auto"}></SvgIcon>
        </button>
        <button
          tabIndex={-1}
          aria-hidden={"true"}
          className={this.question.cssClasses.arrowButton}
          disabled={this.isDisplayMode}
          onClick={this.question.onUpButtonClick}
          onMouseDown={this.question.onUpButtonMouseDown}
          onMouseUp={this.question.onButtonMouseUp}
          onMouseLeave={this.question.onButtonMouseLeave}
          onBlur={event => this.question.onBlur(event.nativeEvent)}
          onFocus={event => this.question.onFocus(event.nativeEvent)}>
          <SvgIcon iconName={this.question.cssClasses.increaseButtonIcon} size={"auto"}></SvgIcon>
        </button>
      </span>
    );
  }

}

ReactQuestionFactory.Instance.registerQuestion("spinedit", (props) => {
  return React.createElement(SurveyQuestionSpinEditor, props);
});
