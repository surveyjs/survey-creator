import * as React from "react";
import { QuestionFileEditorModel } from "survey-creator-core";
import { ReactQuestionFactory, SurveyQuestionText, SvgIcon } from "survey-react-ui";

export class SurveyQuestionFileEditor extends SurveyQuestionText {
  constructor(props: any) {
    super(props);
  }
  protected get questionFile(): QuestionFileEditorModel {
    return this.questionBase as QuestionFileEditorModel;
  }
  protected renderInput() {
    return (
      <>
        <input
          disabled={this.isDisplayMode}
          className={this.questionFile.cssClasses.control}
          ref={(input) => (this.setControl(input))}
          autoComplete="off"
          onBlur={(event) => this.questionFile.onInputBlur(event.nativeEvent) }
          onChange={(event) => this.questionFile.onInputChange(event.nativeEvent)}
        />
      </>
    );
  }
  protected renderButtons(): JSX.Element {
    return (
      <div className={this.questionFile.cssClasses.buttonsContainer}>
        {this.renderClearButton()}
        {this.renderChooseButton()}
      </div>
    );
  }
  protected renderClearButton(): JSX.Element {
    return (
      <button type="button"
        className={this.questionFile.cssClasses.clearButton}
        disabled={this.questionFile.getIsClearButtonDisabled()}
        onClick={ this.questionFile.doClean}>
        <SvgIcon iconName={this.questionFile.cssClasses.clearButtonIcon} size={"auto"} title={this.questionFile.clearButtonCaption}></SvgIcon>
      </button>
    );
  }
  protected renderChooseButton(): JSX.Element {
    return (
      <label role="button"
        className={this.questionFile.getChooseButtonCss()}
        htmlFor={this.questionFile.inputId}
        aria-label={this.questionFile.chooseButtonCaption}>
        <SvgIcon iconName={this.questionFile.cssClasses.chooseButtonIcon} size={"auto"} title={this.questionFile.chooseButtonCaption}></SvgIcon>
        <input
          type="file"
          disabled={this.isDisplayMode}
          className={this.questionFile.cssClasses.fileInput}
          id={this.questionFile.inputId}
          aria-required={this.questionFile.ariaRequired}
          aria-label={this.questionFile.ariaLabel}
          aria-invalid={this.questionFile.ariaInvalid}
          aria-describedby={this.questionFile.ariaDescribedBy}
          multiple={false} title={this.questionFile.inputTitle}
          accept={this.questionFile.acceptedTypes}
          onChange={this.questionFile.doChange }/>
      </label>
    );
  }
  protected renderElement(): JSX.Element {
    return (
      <div
        className={this.questionFile.cssClasses.root}
        onDragEnter={this.questionFile.onDragEnter}
        onDragOver={this.questionFile.onDragOver}
        onDrop={this.questionFile.onDrop}
        onDragLeave={this.questionFile.onDragLeave}>
        { this.renderInput() }
        { this.renderButtons() }
      </div>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("fileedit", (props) => {
  return React.createElement(SurveyQuestionFileEditor, props);
});