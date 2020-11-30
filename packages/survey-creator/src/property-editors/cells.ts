import * as ko from "knockout";

import "./cells.scss";
import { SurveyPropertyCellsEditor } from "../propertyEditors/propertyCellsEditor";
const templateHtml = require("./cells.html");

export class PropertyEditorCellsViewModel {
  constructor(
    public koCanEdit: any,
    public getLocString: (name: string) => any,
    public koColumns: any,
    public koRows: any,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-cells", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyCellsEditor = params.model;
      return new PropertyEditorCellsViewModel(
        model.koCanEdit,
        model.getLocString,
        model.koColumns,
        model.koRows,
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
