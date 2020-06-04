import * as ko from "knockout";

import "./property-grid.scss";
const templateHtml = require("./property-grid.html");

import { PropertyGridObjectModel } from "../questionEditors/questionEditor";
import { SurveyCreator } from "../editor";

export class PropertyGrid {
  constructor(
    public koObjects: any,
    public koSelectedObject: any,
    public propertyGridObjectModel: PropertyGridObjectModel
  ) {}
}

ko.components.register("svd-property-grid", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const creator: SurveyCreator = params.creator;
      return new PropertyGrid(
        creator.koObjects,
        creator.koSelectedObject,
        creator.propertyGridObjectModel
      );
    },
  },
  template: templateHtml,
});
