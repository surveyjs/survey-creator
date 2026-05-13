import * as React from "react";
import { ReactQuestionFactory, SurveyPage, ISurveyCreator, SurveyQuestionElementBase, SurveyModel } from "survey-react-ui";
import { QuestionEmbeddedSurveyModel, SurveyCreatorModel } from "survey-creator-core";

export class SurveyElementEmbeddedSurvey extends SurveyQuestionElementBase {
  private rootRef: React.RefObject<HTMLDivElement> = React.createRef();
  protected get embeddedSurvey(): SurveyModel {
    const element = (this.props.element || this.props.question) as QuestionEmbeddedSurveyModel;
    if (!element) return null;
    const survey = element.embeddedSurvey;
    if (!survey || !survey.currentPage) return null;
    return survey;
  }
  protected get creator(): ISurveyCreator {
    return this.props.creator;
  }
  componentDidMount() {
    super.componentDidMount();
    if (this.embeddedSurvey) {
      this.embeddedSurvey.rootElement = this.rootRef.current;
    }
  }
  public render(): React.JSX.Element {
    const survey = this.embeddedSurvey;
    if (!survey) return null;
    return <div style={{ display: "contents" }} ref={this.rootRef}>
      <SurveyPage
        survey={survey}
        page={survey.currentPage}
        css={survey.css}
        creator={this.creator}
      />
    </div>;

  }
}

ReactQuestionFactory.Instance.registerQuestion("embeddedsurvey", (props) => {
  return React.createElement(SurveyElementEmbeddedSurvey, props);
});
