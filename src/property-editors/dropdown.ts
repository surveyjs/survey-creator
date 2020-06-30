import * as ko from "knockout";

import "./dropdown.scss";
import { SurveyDropdownPropertyEditor } from "../propertyEditors/propertyEditorFactory";
const templateHtml = require("./dropdown.html");

export class PropertyEditorDropdownViewModel {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public optionsCaption: string,
    public koChoices: any,
    public koHasFocus: ko.Observable<boolean>,
    public displayName: string,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-dropdown", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyDropdownPropertyEditor = params.model;

      return new PropertyEditorDropdownViewModel(
        model.koValue,
        model.readOnly,
        model.optionsCaption,
        model.koChoices,
        model.koHasFocus,
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
