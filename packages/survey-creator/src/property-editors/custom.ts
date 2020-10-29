import * as ko from "knockout";

import "./custom.scss";
import { SurveyPropertyCustomEditor } from "../propertyEditors/propertyCustomEditor";
const templateHtml = require("./custom.html");

export class PropertyEditorCustomViewModel {
  constructor(public model: SurveyPropertyCustomEditor, afterRender: any) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-custom", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyCustomEditor = params.model;
      return new PropertyEditorCustomViewModel(model, () => {
        typeof params.afterRender === "function" &&
          params.afterRender.call(model, componentInfo);

        typeof model.koAfterRender === "function" &&
          model.koAfterRender.call(model, componentInfo);
      });
    },
  },
  template: templateHtml,
});
