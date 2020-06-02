import * as ko from "knockout";

import "./object-editor.scss";
const templateHtml = require("./object-editor.html");

import {
  SurveyElementPropertyGrid,
  SurveyElementEditorContent,
} from "../questionEditors/questionEditor";

export class ObjectEditor {
  constructor(
    public hasCategories: boolean,
    public koElementEditorContent: ko.Observable<SurveyElementEditorContent>
  ) {}
}

ko.components.register("svd-object-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const surveyElementPropertyGrid: SurveyElementPropertyGrid =
        params.surveyElementPropertyGrid;
      return new ObjectEditor(
        surveyElementPropertyGrid.hasCategories,
        surveyElementPropertyGrid.koElementEditor
      );
    },
  },
  template: templateHtml,
});