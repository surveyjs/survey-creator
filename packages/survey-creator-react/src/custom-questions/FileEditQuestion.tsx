import * as React from "react";
import { QuestionFileEditorModel } from "survey-creator-core";
import { ReactQuestionFactory, SurveyQuestionText, SvgIcon, attachKey2click } from "survey-react-ui";

export class SurveyQuestionFileEditor extends SurveyQuestionText {
  constructor(props: any) {
    super(props);
  }
  protected get questionFile(): QuestionFileEditorModel {
    return this.questionBase as QuestionFileEditorModel;
  }
  protected getValueCore() {
    return this.question.renderedValue;
  }
  protected renderInput() {
    return (
      <>
        <input
          disabled={this.question.isTextInputReadOnly}
          className={this.questionFile.cssClasses.control}
          placeholder={this.questionFile.renderedPlaceholder}
          ref={(input) => (this.setControl(input))}
          autoComplete="off"
          type="text"
          onBlur={(event) => this.questionFile.onInputBlur(event.nativeEvent)}
          onChange={(event) => this.questionFile.onInputChange(event.nativeEvent)}
        />
      </>
    );
  }
  protected renderFileInput(): React.JSX.Element {
    return (
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
        tabIndex={-1}
        onChange={(event) => this.questionFile.onFileInputChange(event.nativeEvent)} />
    );
  }
  protected renderButtons(): React.JSX.Element {
    return (
      <div className={this.questionFile.cssClasses.buttonsContainer}>
        {this.renderClearButton()}
        {this.renderChooseButton()}
      </div>
    );
  }
  protected renderClearButton(): React.JSX.Element {
    return attachKey2click((
      <button
        className={this.questionFile.cssClasses.clearButton}
        title={this.questionFile.clearButtonCaption}
        disabled={this.questionFile.getIsClearButtonDisabled()}
        onClick={this.questionFile.doClean}>
        <SvgIcon iconName={this.questionFile.cssClasses.clearButtonIcon} size={"auto"}></SvgIcon>
      </button>
    ));
  }
  protected renderChooseButton(): React.JSX.Element {
    return (
      attachKey2click(
        <label
          onClick={event => this.questionFile.chooseFiles(event.nativeEvent)}
          className={this.questionFile.getChooseButtonCss()}
          htmlFor={this.questionFile.inputId}
          aria-label={this.questionFile.chooseButtonCaption}>
          <SvgIcon iconName={this.questionFile.cssClasses.chooseButtonIcon} size={"auto"} title={this.questionFile.chooseButtonCaption}></SvgIcon>
        </label>
      )
    );
  }
  protected renderElement(): React.JSX.Element {
    return (
      <div
        className={this.questionFile.cssClasses.root}
        ref={el => this.setContent(el)}
        onDragEnter={this.questionFile.onDragEnter}
        onDragOver={this.questionFile.onDragOver}
        onDrop={this.questionFile.onDrop}
        onDragLeave={this.questionFile.onDragLeave}
        onKeyDown={event => this.question.onKeyDown(event.nativeEvent)}>
        {this.renderInput()}
        {this.renderFileInput()}
        {this.renderButtons()}
      </div>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("fileedit", (props) => {
  return React.createElement(SurveyQuestionFileEditor, props);
});