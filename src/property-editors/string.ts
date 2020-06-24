import * as ko from "knockout";

import "./string.scss";
import { SurveyStringPropertyEditor } from "../propertyEditors/propertyEditorFactory";
const templateHtml = require("./string.html");

export class PropertyEditorString {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public koInputType: any,
    public defaultValue: any,
    public koMaxLength: any,
    public displayName: string,
    public afterRender: () => void
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-string", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyStringPropertyEditor = params.model;
      const afterRender = params.afterRender || model.koAfterRender;

      return new PropertyEditorString(
        model.koValue,
        model.readOnly,
        model.koInputType,
        model.defaultValue,
        model.koMaxLength,
        model.displayName,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
