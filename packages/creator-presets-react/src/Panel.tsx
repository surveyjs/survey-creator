import * as React from "react";
import { ReactElementFactory } from "survey-react-ui";
import { PanelAdornerComponent, QuestionAdornerComponentProps } from "survey-creator-react";
import { QuestionAdornerViewModel } from "survey-creator-core";
import { QuestionPresetAdornerViewModel } from "creator-presets-core";

export class PanelPresetAdornerComponent extends PanelAdornerComponent {
  protected createQuestionViewModel(props: any): QuestionAdornerViewModel {
    return new QuestionPresetAdornerViewModel(
      props.componentData,
      props.question,
      null
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-preset-panel", (props: QuestionAdornerComponentProps) => {
  return React.createElement(PanelPresetAdornerComponent, props);
});