import * as ko from "knockout";

import "./nested-item.scss";
import {
  SurveyNestedPropertyEditorItem,
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorEditorCell,
} from "../propertyEditors/propertyNestedPropertyEditor";

const templateHtml = require("./nested-item.html");

export class PropertyEditorNestedItemViewModel {
  constructor(
    public editor: any,
    public model: SurveyNestedPropertyEditorItem,
    public koCanDeleteItem: ko.Observable<boolean>,
    public dragIcon: string,
    public deleteIcon: string,
    public obj: any,
    public koHasDetails: any
  ) {}

  public get cells(): SurveyNestedPropertyEditorEditorCell[] {
    return this.model.cells;
  }

  public onEditItemClick() {
    this.editor.onEditItemClick(this.model);
  }
}

ko.components.register("svd-property-editor-nested-item", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const editor = params.editor;
      let model: SurveyNestedPropertyEditorItem;

      if (editor.columns.length === 0) editor.createColumns(); //TODO hot fix

      model = editor.createItemViewModel(params.item);
      model["editor"] = editor;

      return new PropertyEditorNestedItemViewModel(
        editor,
        model,
        model.koCanDeleteItem,
        model.dragIcon,
        model.deleteIcon,
        model.obj,
        model.koHasDetails
      );
    },
  },
  template: templateHtml,
});
