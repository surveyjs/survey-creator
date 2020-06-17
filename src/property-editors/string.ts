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
    public displayName: string
  ) {}
}

ko.components.register("svd-property-editor-string", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyStringPropertyEditor = params.model;
      return new PropertyEditorString(
        model.koValue,
        model.readOnly,
        model.koInputType,
        model.defaultValue,
        model.koMaxLength,
        model.displayName
      );
    },
  },
  template: templateHtml,
});
