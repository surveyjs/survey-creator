import * as ko from "knockout";

import "./object-editor.scss";
const templateHtml = require("./object-editor.html");

import {
  PropertyGridObjectModel,
  SurveyElementEditorContent,
} from "../questionEditors/questionEditor";

export class ObjectEditor {
  constructor(
    public koAppearanceType: ko.Observable<string>,
    public koElementEditorContent: ko.Observable<SurveyElementEditorContent>,
    public koHasObject: ko.Observable<boolean>
  ) {}
}

ko.components.register("svd-object-editor", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: PropertyGridObjectModel = params.model;
      return new ObjectEditor(
        model.koAppearanceType,
        model.koElementEditor,
        model.koHasObject
      );
    },
  },
  template: templateHtml,
});
