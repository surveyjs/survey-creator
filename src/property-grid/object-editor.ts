import * as ko from "knockout";

import "./object-editor.scss";
const templateHtml = require("./object-editor.html");

import {
  SurveyElementPropertyGrid,
  SurveyElementEditorContent,
} from "../questionEditors/questionEditor";

export class ObjectEditor {
  constructor(
    public koHasObject: any,
    public hasCategories: boolean,
    public koElementEditorContent: ko.Observable<SurveyElementEditorContent>
  ) {}
}

ko.components.register("svd-object-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const selectedElementPropertyGrid: SurveyElementPropertyGrid =
        params.selectedElementPropertyGrid;
      return new ObjectEditor(
        selectedElementPropertyGrid.koHasObject,
        selectedElementPropertyGrid.hasCategories,
        selectedElementPropertyGrid.koElementEditor
      );
    },
  },
  template: templateHtml,
});