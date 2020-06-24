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
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorBoolean(
        model.koValue,
        model.readOnly,
        model.isDiplayNameVisible,
        model.displayName,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
