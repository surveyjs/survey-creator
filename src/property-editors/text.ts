import * as ko from "knockout";

import "./text.scss";
import { SurveyPropertyTextEditor } from "../propertyEditors/propertyModalEditor";
const templateHtml = require("./text.html");

export class PropertyEditorText {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public isDiplayNameVisible: boolean,
    public koMaxLength: any,
    public displayName: string,
    public onBlur: any,
    public onFocus: any
  ) {}
}

ko.components.register("svd-property-editor-text", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyTextEditor = params.model;
      return new PropertyEditorText(
        model.koValue,
        model.readOnly,
        model.isDiplayNameVisible,
        model.koMaxLength,
        model.displayName,
        model.onBlur,
        model.onFocus
      );
    },
  },
  template: templateHtml,
});
