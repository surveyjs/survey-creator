import * as ko from "knockout";

import "./property-grid.scss";
const templateHtml = require("./property-grid.html");

import { PropertyGridObjectEditorModel } from "../questionEditors/questionEditor";
import { SurveyCreator } from "../editor";
import { editorLocalization } from '../editorLocalization';

export class PropertyGrid {
  constructor(
    public koObjects: any,
    public koSelectedObject: any,
    public propertyGridObjectEditorModel: PropertyGridObjectEditorModel
  ) {}
  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }
}

ko.components.register("svd-property-grid", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const creator: SurveyCreator = params.creator;
      return new PropertyGrid(
        creator.koObjects,
        creator.koSelectedObject,
        creator.propertyGridObjectEditorModel
      );
    },
  },
  template: templateHtml,
});
