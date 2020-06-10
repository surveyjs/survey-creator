import * as ko from "knockout";

import "./property-editor-boolean.scss";
import { SurveyBooleanPropertyEditor } from "../propertyEditors/propertyEditorFactory";
const templateHtml = require("./property-editor-boolean.html");

export class PropertyEditorBoolean {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public isDiplayNameVisible: boolean,
    public displayName: string
  ) {}
}

ko.components.register("svd-property-editor-boolean", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyBooleanPropertyEditor = params.model;
      return new PropertyEditorBoolean(
        model.koValue,
        model.readOnly,
        model.isDiplayNameVisible,
        model.displayName
      );
    },
  },
  template: templateHtml,
});
