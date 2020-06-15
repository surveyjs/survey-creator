import * as ko from "knockout";

import "./text.scss";
import { SurveyPropertyTextEditor } from "../propertyEditors/propertyModalEditor";
const templateHtml = require("./text.html");

export class PropertyEditorText {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public isDiplayNameVisible: boolean,
    public displayName: string
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
        model.displayName
      );
    },
  },
  template: templateHtml,
});
