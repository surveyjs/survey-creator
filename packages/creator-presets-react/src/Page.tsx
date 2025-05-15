import * as React from "react";
import { PageModel } from "survey-core";
import { ReactElementFactory } from "survey-react-ui";
import { SurveyCreatorModel, PageAdorner } from "survey-creator-core";
import { CreatorSurveyPageComponent, QuestionAdornerComponentProps } from "survey-creator-react";
import { PagePresetAdorner } from "creator-presets-core";

export class PagePresetAdornerComponent extends CreatorSurveyPageComponent {
  constructor(props: any) {
    super(props);
  }
  protected createPageAdorner(creator: SurveyCreatorModel, page: PageModel): PageAdorner {
    return new PagePresetAdorner(creator, page);
  }
}

ReactElementFactory.Instance.registerElement("svc-page", (props: QuestionAdornerComponentProps) => {
  return React.createElement(PagePresetAdornerComponent, props);
});