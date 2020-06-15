import * as ko from "knockout";

import "./property-editor-error.scss";
import { SurveyPropertyEditorBase } from "../propertyEditors/propertyEditorBase";
const templateHtml = require("./property-editor-error.html");

export class PropertyEditorError {
  constructor(
    public koDisplayError: any,
    public getLocString: any,
    public koErrorText: any
  ) {}
}

ko.components.register("svd-property-editor-error", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyEditorBase = params.model;
      return new PropertyEditorError(
        model.koDisplayError,
        model.getLocString,
        model.koErrorText
      );
    },
  },
  template: templateHtml,
});
