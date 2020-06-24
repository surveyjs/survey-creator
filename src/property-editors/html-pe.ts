import * as ko from "knockout";

import "./html-pe.scss";
import { SurveyPropertyHtmlEditor } from "../propertyEditors/propertyModalEditor";
const templateHtml = require("./html-pe.html");

export class PropertyEditorHTML {
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
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorHTML(model.koValue, model.readOnly, () => {
        afterRender.call(model, componentInfo);
      });
    },
  },
  template: templateHtml,
});
