import * as ko from "knockout";

import "./element-selector.scss";
import { SurveyElementSelector } from '../propertyEditors/surveyElementSelector';
const templateHtml = require("./element-selector.html");

export class ElementSelectorViewModel {
  constructor(
    public model: SurveyElementSelector,
    public koValue: any,
    public optionsCaption: string,
    public koHasFocus: any,
    public koElements: any
  ) {}
}

ko.components.register("svd-element-selector", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyElementSelector = params.model;
      return new ElementSelectorViewModel(
        model,
        model.koValue,
        model.optionsCaption,
        model.koHasFocus,
        model.koElements
      );
    },
  },
  template: templateHtml,
});
