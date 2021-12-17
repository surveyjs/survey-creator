import * as ko from "knockout";

import "./text.scss";
import { SurveyPropertyTextEditor } from "../propertyEditors/propertyModalEditor";
const templateHtml = require("./text.html");

export class PropertyEditorTextViewModel {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public isDisplayNameVisible: boolean,
    public koMaxLength: any,
    public displayName: string,
    public onBlur: any,
    public onFocus: any,
    public onKeydown: any,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-text", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyTextEditor = params.model;

      return new PropertyEditorTextViewModel(
        model.koValue,
        model.readOnly,
        model.isDisplayNameVisible,
        model.koMaxLength,
        model.displayName,
        model.onBlur,
        model.onFocus,
        model.onInputKeydown,
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
