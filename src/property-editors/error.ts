import * as ko from "knockout";

import "./error.scss";
import { SurveyPropertyEditorBase } from "../propertyEditors/propertyEditorBase";
const templateHtml = require("./error.html");

export class PropertyEditorError {
  constructor(
    public koDisplayError: any,
    public getLocString: any,
    public koErrorText: any,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-error", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyEditorBase = params.model;
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorError(
        model.koDisplayError,
        model.getLocString,
        model.koErrorText,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
