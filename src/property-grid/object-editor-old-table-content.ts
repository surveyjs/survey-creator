import * as ko from "knockout";

import "./object-editor-old-table-content.scss";
import { SurveyElementEditorContentNoCategries } from "../questionEditors/questionEditor";
import { SurveyObjectProperty } from "../objectProperty";
const templateHtml = require("./object-editor-old-table-content.html");

export class ObjectEditorOldTableContent {
  constructor(
    public koProperties: ko.ObservableArray<SurveyObjectProperty>,
    public koTab: any
  ) {}
}

ko.components.register("svd-object-editor-old-table-content", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyElementEditorContentNoCategries =
        params.elementEditorContent;
      return new ObjectEditorOldTableContent(model.koProperties, model.koTab);
    },
  },
  template: templateHtml,
});
