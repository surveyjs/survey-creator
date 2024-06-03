import React from "react";
import { ReactQuestionFactory, SurveyQuestionElementBase } from "survey-react-ui";
import { QuestionEmbeddedCreatorModel } from "survey-creator-core";
import { SurveyCreatorComponent, SurveyCreator } from "./SurveyCreator";

export class SurveyElementEmbeddedCreator extends SurveyQuestionElementBase {
  protected get embeddedCreator(): QuestionEmbeddedCreatorModel {
    return (this.props.element || this.props.question) as QuestionEmbeddedCreatorModel;
  }
  public render(): JSX.Element {
    if (!this.embeddedCreator) return null;
    const creator = this.embeddedCreator.embeddedCreator as SurveyCreator;
    if (!creator) return null;
    return <SurveyCreatorComponent
      creator={creator}
    />;

  }
}

ReactQuestionFactory.Instance.registerQuestion("embeddedcreator", (props) => {
  return React.createElement(SurveyElementEmbeddedCreator, props);
});
