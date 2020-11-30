import * as ko from "knockout";

import "./html-pe.scss";
import { SurveyPropertyHtmlEditor } from "../propertyEditors/propertyModalEditor";
const templateHtml = require("./html-pe.html");

export class PropertyEditorHTMLViewModel {
  constructor(
    public koValue: ko.Observable<any>,
    public readOnly: boolean,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-html", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyHtmlEditor = params.model;

      return new PropertyEditorHTMLViewModel(model.koValue, model.readOnly, () => {
        typeof params.afterRender === "function" &&
          params.afterRender.call(model, componentInfo);

        typeof model.koAfterRender === "function" &&
          model.koAfterRender.call(model, componentInfo);
      });
    },
  },
  template: templateHtml,
});
