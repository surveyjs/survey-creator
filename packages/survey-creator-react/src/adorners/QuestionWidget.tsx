import {
  QuestionAdornerViewModel
} from "survey-creator-core";
import * as React from "react";
import {
  QuestionAdornerComponent,
  QuestionAdornerComponentProps
} from "./Question";
import { attachKey2click, ReactElementFactory, SvgIcon } from "survey-react-ui";

export class QuestionWidgetAdornerComponent extends QuestionAdornerComponent {
  protected createQuestionViewModel(props: any): QuestionAdornerViewModel {
    return new QuestionAdornerViewModel(
      props.componentData,
      props.question as any,
      null
    );
  }
  public get widgetModel(): QuestionAdornerViewModel {
    return this.model as QuestionAdornerViewModel;
  }
  protected renderElementContent(): React.JSX.Element {
    return (
      <div
        className={"svc-widget__content"}
      >
        {this.props.element}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-widget-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionWidgetAdornerComponent, props);
  }
);
