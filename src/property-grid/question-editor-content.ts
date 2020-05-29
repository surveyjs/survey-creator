import * as ko from "knockout";

import "./question-editor-content.scss";
import { SurveyElementEditorContent } from "../questionEditors/questionEditor";
const templateHtml = require("./question-editor-content.html");

export class QuestionEditorContent {
  constructor(
    public useTabsInElementEditor: any,
    public koTabs: any,
    public name: any,
    public title: any
  ) {}
}

ko.components.register("svd-question-editor-content", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const elementEditorContent: SurveyElementEditorContent = params.elementEditorContent;
      return new QuestionEditorContent(
        elementEditorContent.useTabsInElementEditor,
        elementEditorContent.koTabs,
        elementEditorContent["name"], //TODO SurveyElementEditorContent class doesn't contain 'name' and 'title' properties
        elementEditorContent["title"]
      );
    },
  },
  template: templateHtml,
});
