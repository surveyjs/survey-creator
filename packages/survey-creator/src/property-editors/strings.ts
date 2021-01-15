import * as ko from "knockout";

import "./strings.scss";
import { SurveyPropertyStringsEditor } from "../propertyEditors/propertyModalEditor";
const templateHtml = require("./strings.html");

export class PropertyEditorStringsViewModel {
  constructor(
    public koTextValue: any,
    public readOnly: boolean,
    public displayName: string,
    public koDisplayError: any,
    public koErrorText: any,
    public onKeydown: any,
    public afterRender: () => void
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-strings", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyStringsEditor = params.model;

      return new PropertyEditorStringsViewModel(
        model.koTextValue,
        model.readOnly,
        model.displayName,
        model.koDisplayError,
        model.koErrorText,
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
