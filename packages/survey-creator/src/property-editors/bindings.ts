import * as ko from "knockout";

import "./bindings.scss";
import {
  SurveyPropertyBindingsEditor,
  SurveyPropertyBindingsItem,
} from "../propertyEditors/propertyBindingsEditor";
const templateHtml = require("./bindings.html");

export class PropertyEditorBindingsViewModel {
  constructor(
    public items: Array<SurveyPropertyBindingsItem>,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-bindings", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyBindingsEditor = params.model;
      return new PropertyEditorBindingsViewModel(model.items, () => {
        typeof params.afterRender === "function" &&
          params.afterRender.call(model, componentInfo);

        typeof model.koAfterRender === "function" &&
          model.koAfterRender.call(model, componentInfo);
      });
    },
  },
  template: templateHtml,
});
