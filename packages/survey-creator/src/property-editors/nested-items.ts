import * as ko from "knockout";

import "./nested-items.scss";
import {
  SurveyNestedPropertyEditor,
  SurveyNestedPropertyEditorColumn,
} from "../propertyEditors/propertyNestedPropertyEditor";
const templateHtml = require("./nested-items.html");

export class PropertyEditorNestedItemsViewModel {
  constructor(
    public koIsList: any,
    public getLocString: any,
    public koShowHeader: any,
    public columns: SurveyNestedPropertyEditorColumn[],
    public sortableOptions: any,
    public model: SurveyNestedPropertyEditor,
    public koAllowAddRemoveItems: ko.Observable<boolean>,
    public readOnly: any,
    public onAddClick: any,
    public onClearClick: any,
    public koAllowRemoveAllItems: ko.Observable<boolean>,
    public koCanAddItem: ko.Observable<boolean>,
    public addItemText: any,
    public afterRender: any
  ) {
    afterRender();
  }
  public get originalValue() {
    return this.model.originalValue;
  }
}

ko.components.register("svd-property-editor-nested-items", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyNestedPropertyEditor = params.model;

      return new PropertyEditorNestedItemsViewModel(
        model.koIsList,
        model.getLocString,
        model.koShowHeader,
        model.columns,
        model.sortableOptions,
        model, //TODO break on props,
        model.koAllowAddRemoveItems,
        model.readOnly,
        model.onAddClick,
        model.onClearClick,
        model.koAllowRemoveAllItems,
        model.koCanAddItem,
        model.addItemText,
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
