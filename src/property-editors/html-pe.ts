import * as ko from "knockout";

import "./html-pe.scss";
import { SurveyPropertyHtmlEditor } from "../propertyEditors/propertyModalEditor";
const templateHtml = require("./html-pe.html");

export class PropertyEditorHTML {
  constructor(public koValue: ko.Observable<any>, public readOnly: boolean) {}
}

ko.components.register("svd-property-editor-html", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyHtmlEditor = params.model;
      return new PropertyEditorHTML(model.koValue, model.readOnly);
    },
  },
  template: templateHtml,
});
