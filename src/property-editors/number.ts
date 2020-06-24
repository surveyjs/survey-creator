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
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorNumber(
        model.koValue,
        model.readOnly,
        model.koMaxValue,
        model.koMinValue,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
