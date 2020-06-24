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
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-modal-content", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyModalEditor = params.model;
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorModalContent(
        model.koHtmlTop,
        model.koHtmlBottom,
        model.editorTypeTemplate,
        model, //TODO break on props,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
