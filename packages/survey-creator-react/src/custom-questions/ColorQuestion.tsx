import * as React from "react";
import { QuestionColorModel } from "survey-creator-core";
import { ReactElementFactory, ReactQuestionFactory, SurveyQuestionText, SvgIcon, Popup } from "survey-react-ui";

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
      <div className={this.question.cssClasses.root} onKeyDown={event => this.question.onKeyDown(event.nativeEvent)}>
        { this.renderColorSwatch() }
        { this.renderInput() }
        { this.question.showDropdownAction ? this.renderDropdownAction() : null }
      </div>
    );
  }
  protected getValueCore() {
    return this.question.renderedValue;
  }
  protected renderColorSwatch(): JSX.Element {
    return <label className={this.question.getSwatchCss()} style={this.question.getSwatchStyle()}>
      <SvgIcon iconName={this.question.cssClasses.swatchIcon} size={"auto"}></SvgIcon>
      <input type="color" disabled={this.isDisplayMode} value={this.question.renderedColorValue} className={this.question.cssClasses.colorInput} onChange={(event) => this.question.onColorInputChange(event.nativeEvent)} tabIndex={-1}/>
    </label>;
  }
  protected renderDropdownAction(): JSX.Element {
    return (
      <>
        {ReactElementFactory.Instance.createElement("sv-action-bar-item", { item: this.question.dropdownAction })}
        {this.renderPopup()}
      </>
    );
  }
  protected renderPopup(): JSX.Element {
    return <Popup model={this.question.dropdownAction.popupModel}></Popup>;
  }
}

ReactQuestionFactory.Instance.registerQuestion("color", (props) => {
  return React.createElement(SurveyQuestionColor, props);
});