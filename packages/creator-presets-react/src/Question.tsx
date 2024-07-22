import React from "react";
import { ReactElementFactory } from "survey-react-ui";
import { QuestionAdornerComponent, QuestionAdornerComponentProps } from "survey-creator-react";

export class QuestionPresetAdornerComponent extends QuestionAdornerComponent {
  protected renderElementContent(): JSX.Element {
    const info = <div>
      <span>Property name: <b>{this.model.element.name}</b></span> <span>, property type: <b>{this.model.element.getType()}</b></span>
    </div>;
    return <React.Fragment>
      {super.renderElementContent()}
      {info}
    </React.Fragment>;
  }
}

ReactElementFactory.Instance.registerElement("svc-preset-question", (props: QuestionAdornerComponentProps) => {
  return React.createElement(QuestionPresetAdornerComponent, props);
});