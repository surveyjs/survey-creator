import * as ko from "knockout";

import "./property-grid.scss";
const templateHtml = require("./property-grid.html");

import { SurveyElementPropertyGrid } from "../questionEditors/questionEditor";

export class PropertyGrid {
  constructor(
    public koObjects: any,
    public koSelectedObject: any,
    public selectedElementPropertyGrid: SurveyElementPropertyGrid
  ) {}
}

ko.components.register("property-grid", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new PropertyGrid(
        params.koObjects,
        params.koSelectedObject,
        params.selectedElementPropertyGrid
      );
    },
  },
  template: templateHtml,
});
