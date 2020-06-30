import * as ko from "knockout";

import "./boolean.scss";
import { SurveyBooleanPropertyEditor } from "../propertyEditors/propertyEditorFactory";
const templateHtml = require("./boolean.html");

export class PropertyEditorBoolean {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public isDiplayNameVisible: boolean,
    public displayName: string,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-boolean", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyBooleanPropertyEditor = params.model;
      return new PropertyEditorBoolean(
        model.koValue,
        model.readOnly,
        model.isDiplayNameVisible,
        model.displayName,
        () => {
          typeof params.afterRender === "function" &&
            params.afterRender.call(model, componentInfo);

          typeof model.koAfterRender === "function" &&
            model.koAfterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
