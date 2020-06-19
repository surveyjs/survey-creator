import * as ko from "knockout";

import "./nested.scss";
import { SurveyNestedPropertyEditor } from "../propertyEditors/propertyNestedPropertyEditor";

const templateHtml = require("./nested.html");

export class PropertyEditorNested {
  constructor(
    public onReturnToListClick: any,
    public koEditorName: any,
    public koEditItem: any
  ) {}
}

ko.components.register("svd-property-editor-nested", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyNestedPropertyEditor = params.model;

      return new PropertyEditorNested(
        model.onReturnToListClick,
        model.koEditorName,
        model.koEditItem
      );
    },
  },
  template: templateHtml,
});
