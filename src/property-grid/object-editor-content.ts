import * as ko from "knockout";

import "./object-editor-content.scss";
import { SurveyElementEditorContent } from "../questionEditors/questionEditor";
const templateHtml = require("./object-editor-content.html");

export class ObjectEditorContent {
  constructor(
    public useTabsInElementEditor: any,
    public koTabs: any,
    public koActiveTab: any,
    public onTabClick: any
  ) {}
}

ko.components.register("svd-object-editor-content", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const elementEditorContent: SurveyElementEditorContent = params.elementEditorContent;
      return new ObjectEditorContent(
        elementEditorContent.useTabsInElementEditor,
        elementEditorContent.koTabs,
        elementEditorContent.koActiveTab, 
        elementEditorContent["onTabClick"]//TODO the property doesn't exist in SurveyElementEditorContent but exists in SurveyQuestionEditor
      );
    },
  },
  template: templateHtml,
});
