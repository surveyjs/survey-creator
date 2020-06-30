import * as ko from "knockout";

import "./nested.scss";
import { SurveyNestedPropertyEditor } from "../propertyEditors/propertyNestedPropertyEditor";

const templateHtml = require("./nested.html");

export class PropertyEditorNestedViewModel {
  constructor(
    public _onReturnToListClick: any,
    public koEditorName: any,
    public koEditItem: any,
    public model: SurveyNestedPropertyEditor,
    public afterRender: any
  ) {
    afterRender();
  }

  public onReturnToListClick() {
    this._onReturnToListClick(this.model);
  }
}

ko.components.register("svd-property-editor-nested", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyNestedPropertyEditor = params.model;

      return new PropertyEditorNestedViewModel(
        model.onReturnToListClick,
        model.koEditorName,
        model.koEditItem,
        model,
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
