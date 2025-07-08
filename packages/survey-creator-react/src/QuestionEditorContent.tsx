import { Base, Question, SurveyError, SurveyModel } from "survey-core";
import { ISurveyCreator, ReactElementFactory, ReactQuestionFactory, SurveyQuestion } from "survey-react-ui";
import { SurveyCreatorModel } from "survey-creator-core";
import * as React from "react";

interface IQuestionEditorContentComponentProps {
  creator: SurveyCreatorModel;
  survey: SurveyModel;
  style: any;
}

export class QuestionEditorContentComponent extends React.Component<
  IQuestionEditorContentComponentProps,
  any
> implements ISurveyCreator {
  get survey() {
    return this.props.survey;
  }
  public createQuestionElement(question: Question): React.JSX.Element {
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
  renderError(key: string, error: SurveyError, cssClasses: any): React.JSX.Element {
    return null;
  }

  render(): React.JSX.Element {
    const question = this.survey.getAllQuestions()[0];
    return (
      <div style={this.props.style} >
        <SurveyQuestion creator={this} element={question}></SurveyQuestion>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question-editor-content",
  (props: IQuestionEditorContentComponentProps) => {
    return React.createElement(QuestionEditorContentComponent, props);
  }
);
