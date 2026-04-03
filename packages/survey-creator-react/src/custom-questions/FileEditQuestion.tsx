import * as React from "react";
import { Action, Base } from "survey-core";
import { QuestionFileEditorModel } from "survey-creator-core";
import { ReactElementFactory, ReactQuestionFactory, SurveyActionBar, SurveyElementBase, SurveyQuestionText, SvgIcon, attachKey2click } from "survey-react-ui";

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
  protected renderButtons(): React.JSX.Element {
    return this.question.hasVisibleInputActions ? <SurveyActionBar model={this.questionFile.inputActionsContainer}></SurveyActionBar> : null;
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
        {this.renderButtons()}
      </div>
    );
  }
}

export class SurveyQuestionFileEditorButton extends SurveyElementBase<{ item: Action }, any> {
  protected get item(): Action {
    return this.props.item;
  }
  protected get question(): QuestionFileEditorModel {
    return this.props.item.data.question as QuestionFileEditorModel;
  }
  protected getStateElement(): Base | null {
    return this.item;
  }
  protected renderElement(): React.JSX.Element | null {
    return (
      <div>
        {attachKey2click(
          <label
            onClick={event => this.question.chooseFiles(event.nativeEvent)}
            className={this.item.getActionBarItemCss()}
            htmlFor={this.question.inputId}
            aria-label={this.question.chooseButtonCaption}>
            <SvgIcon iconName={this.item.iconName} size={"auto"} title={this.item.title} className={this.item.cssClasses.itemIcon}></SvgIcon>
          </label>
        )}
        <input
          type="file"
          disabled={this.item.disabled}
          className={this.question.cssClasses.fileInput}
          id={this.question.inputId}
          aria-required={this.question.ariaRequired}
          aria-label={this.question.ariaLabel}
          aria-invalid={this.question.ariaInvalid}
          aria-describedby={this.question.ariaDescribedBy}
          multiple={false} title={this.question.inputTitle}
          accept={this.question.acceptedTypes}
          tabIndex={-1}
          onChange={(event) => this.question.onFileInputChange(event.nativeEvent)}
        />
      </div>

    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("fileedit", (props) => {
  return React.createElement(SurveyQuestionFileEditor, props);
});
ReactElementFactory.Instance.registerElement("sv-fileedit-button", (props) => {
  return React.createElement(SurveyQuestionFileEditorButton, props);
});