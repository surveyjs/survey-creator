import * as React from "react";
import { QuestionColorModel } from "survey-creator-core";
import { ReactQuestionFactory, SurveyQuestionText, SvgIcon } from "survey-react-ui";

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
          onBlur={(event) => this.question.onBlur(event.nativeEvent) }
          onChange={this.question.onChange}
          onBeforeInput={event => this.question.onBeforeInput(event.nativeEvent as InputEvent)}
          aria-required={this.question.ariaRequired}
          aria-label={this.question.ariaLabel}
          aria-invalid={this.question.ariaInvalid}
          aria-describedby={this.question.ariaDescribedBy}
        />
      </>
    );
  }
  protected renderElement(): JSX.Element {
    return (
      <div className={this.question.cssClasses.root}>
        { this.renderColorSwatch() }
        { this.renderInput() }
        { this.renderColorInput() }
      </div>
    );
  }
  protected getValueCore() {
    return this.question.renderedValue;
  }
  protected renderColorSwatch(): JSX.Element {
    return <span className={this.question.cssClasses.swatch} style={this.question.getSwatchStyle()}></span>;
  }
  protected renderColorInput(): JSX.Element {
    return (
      <label className={this.question.cssClasses.colorDropdown}>
        <SvgIcon iconName={this.question.cssClasses.colorDrodownIcon} size={"auto"}></SvgIcon>
        <input type="color" value={this.question.renderedValue} className={this.question.cssClasses.colorInput} onChange={(event) => this.question.onColorInputChange(event.nativeEvent)}/>
      </label>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("color", (props) => {
  return React.createElement(SurveyQuestionColor, props);
});