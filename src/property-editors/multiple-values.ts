import * as ko from "knockout";

import "./multiple-values.scss";
import { SurveyPropertyMultipleValuesEditor } from "../propertyEditors/propertyMultipleValuesEditor";
const templateHtml = require("./multiple-values.html");

export class PropertyEditorMultipleValuesViewModel {
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

      return new PropertyEditorMultipleValuesViewModel(
        model.koCategories,
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
