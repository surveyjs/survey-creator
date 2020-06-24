import * as ko from "knockout";

import "./nested.scss";
import { SurveyNestedPropertyEditor } from "../propertyEditors/propertyNestedPropertyEditor";

const templateHtml = require("./nested.html");

export class PropertyEditorNested {
  constructor(
    public onReturnToListClick: any,
    public koEditorName: any,
    public koEditItem: any,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-nested", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyNestedPropertyEditor = params.model;
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorNested(
        model.onReturnToListClick,
        model.koEditorName,
        model.koEditItem,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
