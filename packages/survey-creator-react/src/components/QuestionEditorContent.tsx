import { Base, Question, SurveyError, SurveyModel } from "survey-core";
import { ISurveyCreator, ReactElementFactory, ReactQuestionFactory, SurveyQuestion } from "survey-react-ui";
import { CreatorBase } from "@survey/creator";
import React from "react";

interface IQuestionEditorContentComponentProps {
  creator: CreatorBase<SurveyModel>;
  survey: SurveyModel;
}

export class QuestionEditorContentComponent extends React.Component<
  IQuestionEditorContentComponentProps,
  any
> implements ISurveyCreator {
  constructor(props: IQuestionEditorContentComponentProps) {
    super(props);
  }
  get survey() {
    return this.props.survey;
  }
  public createQuestionElement(question: Question): JSX.Element {
    return ReactQuestionFactory.Instance.createQuestion(
      !question.isDefaultRendering || question.isDefaultRendering()
        ? question.getTemplate()
        : question.getComponentName(),
      {
        question: question,
        isDisplayMode: question.isInputReadOnly,
        creator: this,
      }
    );
  }
  public questionTitleLocation(): string {
    return this.survey.questionTitleLocation;
  }
  public questionErrorLocation(): string {
    return this.survey.questionErrorLocation;
  }
  renderError(key: string, error: SurveyError, cssClasses: any): JSX.Element {
    return null;
  }

  render(): JSX.Element {
    const question = this.survey.getAllQuestions()[0];
    return (
      <>
        <SurveyQuestion creator={this} element={question}></SurveyQuestion>
      </>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question-editor-content",
  (props: IQuestionEditorContentComponentProps) => {
    return React.createElement(QuestionEditorContentComponent, props);
  }
);
