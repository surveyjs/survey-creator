import * as React from "react";

import { QuestionImageMapModel } from "survey-core";
import { ReactElementFactory } from "survey-react-ui";
import {
  QuestionAdornerComponent,
  QuestionAdornerComponentProps
} from "./Question";

import { QuestionImagemapAdornerViewModel } from "survey-creator-core";

export class QuestionImagemapAdornerComponent extends QuestionAdornerComponent {
  constructor(props: QuestionAdornerComponentProps) {
    super(props);
  }
  protected createQuestionViewModel(props: any): QuestionImagemapAdornerViewModel {
    return new QuestionImagemapAdornerViewModel(
      props.componentData,
      props.question,
      props.templateData
    );
  }
  public get imagemapModel(): QuestionImagemapAdornerViewModel {
    return this.model as QuestionImagemapAdornerViewModel;
  }
  public get question(): QuestionImageMapModel {
    return this.imagemapModel.element as QuestionImageMapModel;
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-imagemap-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionImagemapAdornerComponent, props);
  }
);
