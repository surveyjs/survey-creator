import * as React from "react";
import { ReactQuestionFactory, SurveyPage, ISurveyCreator, SurveyQuestionElementBase } from "survey-react-ui";
import { QuestionEmbeddedSurveyModel } from "survey-creator-core";

export class SurveyElementEmbeddedSurvey extends SurveyQuestionElementBase {
  protected get embeddedSurvey(): QuestionEmbeddedSurveyModel {
    return (this.props.element || this.props.question) as QuestionEmbeddedSurveyModel;
  }
  protected get creator(): ISurveyCreator {
    return this.props.creator;
  }
  public render(): React.JSX.Element {
    if (!this.embeddedSurvey) return null;
    const survey = this.embeddedSurvey.embeddedSurvey;
    if (!survey || !survey.currentPage) return null;
    return <SurveyPage
      survey={survey}
      page={survey.currentPage}
      css={survey.css}
      creator={this.creator}
    />;

  }
}

ReactQuestionFactory.Instance.registerQuestion("embeddedsurvey", (props) => {
  return React.createElement(SurveyElementEmbeddedSurvey, props);
});
