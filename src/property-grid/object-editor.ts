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
    public contentHtmlTemplate: string,
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
        selectedElementPropertyGrid.contentHtmlTemplate,
        selectedElementPropertyGrid.koElementEditor
      );
    },
  },
  template: templateHtml,
});
