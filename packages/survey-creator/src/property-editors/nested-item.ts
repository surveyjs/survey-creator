import * as ko from "knockout";

import "./nested-item.scss";
import { SurveyNestedPropertyEditorItem,
    SurveyNestedPropertyEditorEditorCell } from "../propertyEditors/propertyNestedPropertyEditor";
import { SurveyHelper } from "../surveyHelper";

const templateHtml = require("./nested-item.html");

export class PropertyEditorNestedItemViewModel {
  constructor(
    public editor: any,
    public model: SurveyNestedPropertyEditorItem,
    public koCanDeleteItem: ko.Observable<boolean>,
    public dragIcon: string,
    public deleteIcon: string,
    public obj: any,
    public koHasDetails: any,
    rootElement
  ) {
    rootElement.addEventListener("keydown", (event) => {
        if (event.keyCode == 38 && event.altKey) {
          SurveyHelper.moveItemInArray(editor.originalValue, obj,
            (editor.originalValue.indexOf(obj) - 1 +
              editor.originalValue.length) % editor.originalValue.length
          );
          event.stopPropagation();
          return false;
        }
        if (event.keyCode == 40 && event.altKey) {
          SurveyHelper.moveItemInArray(editor.originalValue, obj,
            (editor.originalValue.indexOf(obj) + 1) % editor.originalValue.length
          );
          event.stopPropagation();
          return false;
        }
      });
  }

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
        model.koHasDetails,
        componentInfo.element.nextSibling
      );
    },
  },
  template: templateHtml
});
