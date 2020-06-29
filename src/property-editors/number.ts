import * as ko from "knockout";

import "./number.scss";
import { SurveyNumberPropertyEditor } from "../propertyEditors/propertyEditorFactory";
const templateHtml = require("./number.html");

export class PropertyEditorNumber {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public koMaxValue: any,
    public koMinValue: any,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-number", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyNumberPropertyEditor = params.model;

      return new PropertyEditorNumber(
        model.koValue,
        model.readOnly,
        model.koMaxValue,
        model.koMinValue,
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
