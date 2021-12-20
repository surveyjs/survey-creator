import * as ko from "knockout";

import "./boolean.scss";
import { SurveyBooleanPropertyEditor } from "../propertyEditors/propertyEditorFactory";
const templateHtml = require("./boolean.html");

export class PropertyEditorBooleanViewModel {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public isDisplayNameVisible: boolean,
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
      return new PropertyEditorBooleanViewModel(
        model.koValue,
        model.readOnly,
        model.isDisplayNameVisible,
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
