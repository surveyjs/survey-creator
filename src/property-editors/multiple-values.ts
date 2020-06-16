import * as ko from "knockout";

import "./multiple-values.scss";
import { SurveyPropertyMultipleValuesEditor } from '../propertyEditors/propertyMultipleValuesEditor';
const templateHtml = require("./multiple-values.html");

export class PropertyEditorMultipleValues{
  constructor(
    public koCategories: any,
  ) {}
}

ko.components.register("svd-property-editor-multiple-values", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyMultipleValuesEditor = params.model;
      return new PropertyEditorMultipleValues(
        model.koCategories
      );
    },
  },
  template: templateHtml,
});
