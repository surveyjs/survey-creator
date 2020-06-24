import * as ko from "knockout";

import "./item-values.scss";
import { SurveyPropertyItemValuesEditor } from "../propertyEditors/propertyItemValuesEditor";
const templateHtml = require("./item-values.html");

export class PropertyEditorItemValues {
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
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorItemValues(
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
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
