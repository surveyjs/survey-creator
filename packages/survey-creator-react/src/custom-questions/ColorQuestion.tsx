import * as React from "react";
import { QuestionColorModel } from "survey-creator-core";
import { ReactQuestionFactory, SurveyQuestionText, SurveyActionBar } from "survey-react-ui";
import { Swatch } from "./Swatch";

export class SurveyQuestionColor extends SurveyQuestionText {
  constructor(props: any) {
    super(props);
  }
  protected get question(): QuestionColorModel {
    return this.questionBase as QuestionColorModel;
  }
  protected renderInput() {
    return (
      <>
        <input
          id={this.question.inputId}
          disabled={this.isDisplayMode}
          className={this.question.cssClasses.control}
          ref={(input) => (this.setControl(input))}
          placeholder={this.question.renderedPlaceholder}
          autoComplete="off"
          onKeyUp={(event) => this.question.onKeyUp(event.nativeEvent)}
          onBlur={(event) => this.question.onBlur(event.nativeEvent)}
          onChange={this.question.onChange}
          onBeforeInput={event => this.question.onBeforeInput(event.nativeEvent as InputEvent)}
          aria-required={this.question.a11y_input_ariaRequired}
          aria-labelledby={this.question.a11y_input_ariaLabelledBy}
          aria-label={this.question.a11y_input_ariaLabel}
          aria-invalid={this.question.a11y_input_ariaInvalid}
          aria-describedby={this.question.a11y_input_ariaDescribedBy}
        />
      </>
    );
  }
  protected renderElement(): React.JSX.Element {
    return (
      <div className={this.question.cssClasses.rootWrapper}>
        <div className={this.question.cssClasses.root} onKeyDown={event => this.question.onKeyDown(event.nativeEvent)}>
          {this.renderColorSwatch()}
          {this.renderInput()}
          {this.renderButtons()}
        </div>
      </div>
    );
  }
  protected getValueCore() {
    return this.question.renderedValue;
  }
  protected renderColorSwatch(): React.JSX.Element {
    const question = this.question;
    return (
      <div className={question.cssClasses.colorSwatch}>
        <Swatch
          className={question.getSwatchCss()}
          swatchIcon={question.cssClasses.swatchIcon}
          iconClassName={question.cssClasses.iconClassName}
          color={question.renderedValue}
          showIcon={true}
          colorInputValue={question.renderedColorValue}
          colorInputClassName={question.cssClasses.colorInput}
          inputDisabled={this.isDisplayMode}
          onColorInputChange={(event) => question.onColorInputChange(event.nativeEvent)}
          arias={{
            "aria-required": question.a11y_input_ariaRequired,
            "aria-labelledby": question.a11y_input_ariaLabelledBy,
            "aria-label": question.a11y_input_ariaLabel,
            "aria-invalid": question.a11y_input_ariaInvalid,
            "aria-describedby": question.a11y_input_ariaDescribedBy,
          }}
        />
      </div>
    );
  }
  protected renderButtons(): React.JSX.Element {
    return this.question.hasVisibleInputActions ? <SurveyActionBar model={this.question.inputActionsContainer}></SurveyActionBar> : null;
  }
}

ReactQuestionFactory.Instance.registerQuestion("color", (props) => {
  return React.createElement(SurveyQuestionColor, props);
});