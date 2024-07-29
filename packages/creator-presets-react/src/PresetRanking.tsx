import { LocalizableString } from "survey-core";
import { ReactQuestionFactory, ReactElementFactory, SurveyQuestionRanking, SurveyQuestionRankingItemContent } from "survey-react-ui";
import { SurveyCreatorModel } from "survey-creator-core";
import * as React from "react";
import { SurveyLocStringEditor } from "survey-creator-react";

ReactQuestionFactory.Instance.registerQuestion("presetranking", (props) => {
  return React.createElement(SurveyQuestionRanking, props);
});

export class PresetLocStringEditor extends SurveyLocStringEditor {
  protected get locString(): LocalizableString {
    return this.props.locStr;
  }
  protected get creator(): SurveyCreatorModel {
    return undefined;
  }
}

export class SurveyQuestionPresetRankingItemContent extends SurveyQuestionRankingItemContent {
  protected renderElement(): JSX.Element {
    const doStopPropagation = (event: any) => {
      event.stopPropagation();
    };
    const style = { overflow: "inherit" };
    return <div className={this.cssClasses.controlLabel} style={style}
      onPointerDown={doStopPropagation}
      onPointerUp={doStopPropagation}
      onKeyDown={doStopPropagation}>
      <PresetLocStringEditor locStr={this.item.locText} />
    </div>;
  }
}

ReactElementFactory.Instance.registerElement("sv-preset-ranking-item-content", props => {
  return React.createElement(SurveyQuestionPresetRankingItemContent, props);
});
