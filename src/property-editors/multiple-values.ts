import * as ko from "knockout";

import "./multiple-values.scss";
import { SurveyPropertyMultipleValuesEditor } from "../propertyEditors/propertyMultipleValuesEditor";
const templateHtml = require("./multiple-values.html");

export class PropertyEditorMultipleValues {
  constructor(
    public koCategories: any,
    public componentInfo: any,
    public koAfterRender: any,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-multiple-values", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyMultipleValuesEditor = params.model;
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorMultipleValues(
        model.koCategories,
        componentInfo,
        model.koAfterRender,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
