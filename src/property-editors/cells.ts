import * as ko from "knockout";

import "./cells.scss";
import { SurveyPropertyCellsEditor } from "../propertyEditors/propertyCellsEditor";
const templateHtml = require("./cells.html");

export class PropertyEditorCells {
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
      const afterRender = params.afterRender || model.koAfterRender;
      return new PropertyEditorCells(
        model.koCanEdit,
        model.getLocString,
        model.koColumns,
        model.koRows,
        () => {
          afterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
