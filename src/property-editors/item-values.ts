import * as ko from "knockout";

import "./item-values.scss";
import { SurveyPropertyItemValuesEditor } from "../propertyEditors/propertyItemValuesEditor";
const templateHtml = require("./item-values.html");

export class PropertyEditorItemValuesViewModel {
  constructor(
    public koIsList: any,
    public koShowTextView: any,
    public koActiveView: any,
    public changeToFormViewClick: any,
    public changeToTextViewClick: any,
    public getLocString: any,
    public koItemsText: any,
    public readOnly: any,
    public model: SurveyPropertyItemValuesEditor,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-item-values", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyItemValuesEditor = params.model;

      return new PropertyEditorItemValuesViewModel(
        model.koIsList,
        model.koShowTextView,
        model.koActiveView,
        model.changeToFormViewClick,
        model.changeToTextViewClick,
        model.getLocString,
        model.koItemsText,
        model.readOnly,
        model, //TODO break on props
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
