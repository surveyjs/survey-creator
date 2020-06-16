import * as ko from "knockout";

import "./one-selected.scss";
import { SurveyPropertyOneSelectedEditor } from "../propertyEditors/propertyOneSelectedEditor";
import { SurveyElementEditorContentModel } from '../questionEditors/questionEditor';
const templateHtml = require("./one-selected.html");

export class PropertyEditorOneSelected {
  constructor(
    public koAvailableClasses: any,
    public koAllowAddRemoveItems: ko.Observable<boolean>,
    public readOnly: any,
    public onAddClick: any,
    public koSelected: ko.Observable<any>,
    public getLocString: any,
    public originalValue: any,
    public getItemText: (item: any, counter?: any) => any,
    public koChangeCounter: ko.Observable<number>,
    public model: SurveyPropertyOneSelectedEditor,
    public onDeleteClick: any,
    public selectedObjectEditor: ko.Observable<SurveyElementEditorContentModel>
  ) {}
}

ko.components.register("svd-property-editor-one-selected", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyOneSelectedEditor = params.model;
      return new PropertyEditorOneSelected(
        model.koAvailableClasses,
        model.koAllowAddRemoveItems,
        model.readOnly,
        model.onAddClick,
        model.koSelected,
        model.getLocString,
        model.originalValue,
        model.getItemText,
        model.koChangeCounter,
        model, //TODO break on props
        model.onDeleteClick,
        model.selectedObjectEditor
      );
    },
  },
  template: templateHtml,
});
