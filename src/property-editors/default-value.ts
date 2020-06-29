import * as ko from "knockout";

import "./default-value.scss";
import { SurveyPropertyConditionEditor } from "../propertyEditors/propertyConditionEditor";
import { SurveyPropertyDefaultValueEditor } from "../propertyEditors/propertyDefaultValueEditor";
const templateHtml = require("./default-value.html");

export class PropertyEditorValue {
  constructor(
    public koSurvey: any,
    public resetValue: (model: SurveyPropertyDefaultValueEditor) => void,
    public resetText: () => string,
    public refreshSurvey: (model: SurveyPropertyDefaultValueEditor) => void,
    public refreshText: () => string,
    public model: SurveyPropertyDefaultValueEditor,
    public componentInfo: any,
    public koAfterRender: any,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-default-value", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyDefaultValueEditor = params.model;
      return new PropertyEditorValue(
        model.koSurvey,
        model.resetValue,
        model.resetText,
        model.refreshSurvey,
        model.refreshText,
        model, //TODO break on props
        componentInfo,
        model.koAfterRender,
        () => {
          typeof params.afterRender === "function" &&
            params.afterRender.call(model, componentInfo);

          typeof model.koAfterRender === "function" &&
            model.koAfterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
