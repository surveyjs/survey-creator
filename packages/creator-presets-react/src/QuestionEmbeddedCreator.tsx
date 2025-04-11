import * as React from "react";
import { ReactQuestionFactory, SurveyQuestionElementBase } from "survey-react-ui";
import { QuestionEmbeddedCreatorModel } from "creator-presets-core";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";

export class SurveyElementEmbeddedCreator extends SurveyQuestionElementBase {
  protected get embeddedCreator(): QuestionEmbeddedCreatorModel {
    return (this.props.element || this.props.question) as QuestionEmbeddedCreatorModel;
  }
  public render(): JSX.Element {
    if (!this.embeddedCreator) return null;
    const creator = this.embeddedCreator.embeddedCreator as SurveyCreator;
    if (!creator) return null;
    const style = { width: "100%", height: "1000px" };
    return <div style={style}><SurveyCreatorComponent
      creator={creator}
    /></div>;

  }
}

ReactQuestionFactory.Instance.registerQuestion("embeddedcreator", (props) => {
  return React.createElement(SurveyElementEmbeddedCreator, props);
});
