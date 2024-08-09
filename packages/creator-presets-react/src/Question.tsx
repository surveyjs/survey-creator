import * as React from "react";
import { ReactElementFactory } from "survey-react-ui";
import { QuestionAdornerComponent, QuestionAdornerComponentProps } from "survey-creator-react";
import { QuestionAdornerViewModel } from "survey-creator-core";
import { QuestionPresetAdornerViewModel } from "creator-presets-core";

export class QuestionPresetAdornerComponent extends QuestionAdornerComponent {
  protected createQuestionViewModel(props: any): QuestionAdornerViewModel {
    return new QuestionPresetAdornerViewModel(
      props.componentData,
      props.question,
      null
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-preset-question", (props: QuestionAdornerComponentProps) => {
  return React.createElement(QuestionPresetAdornerComponent, props);
});