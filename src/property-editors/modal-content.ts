import * as ko from "knockout";

import "./modal-content.scss";
import { SurveyPropertyModalEditor } from "../propertyEditors/propertyModalEditor";
const templateHtml = require("./modal-content.html");

export class PropertyEditorModalContent {
  constructor(
    public koHtmlTop: any,
    public koHtmlBottom: any,
    public editorTypeTemplate: string,
    public model: SurveyPropertyModalEditor,
    public koAfterRender: any
  ) {}
}

ko.components.register("svd-property-editor-modal-content", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyModalEditor = params.model;
      return new PropertyEditorModalContent(
        model.koHtmlTop,
        model.koHtmlBottom,
        model.editorTypeTemplate,
        model, //TODO break on props,
        model.koAfterRender
      );
    },
  },
  template: templateHtml,
});
