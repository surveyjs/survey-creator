import * as ko from "knockout";

import "./nested.scss";
import { SurveyNestedPropertyEditor } from "../propertyEditors/propertyNestedPropertyEditor";

const templateHtml = require("./nested.html");

export class PropertyEditorNested {
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
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorNested(
        model.onReturnToListClick,
        model.koEditorName,
        model.koEditItem,
        model,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
