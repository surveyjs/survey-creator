import * as ko from "knockout";

import "./question-editor-content.scss";
import { SurveyElementEditorContent } from "../questionEditors/questionEditor";
const templateHtml = require("./question-editor-content.html");

export class QuestionEditorContent {
  constructor(
    public useTabsInElementEditor: any,
    public koTabs: any,
    public koActiveTab: any,
    public onTabClick: any
  ) {}
}

ko.components.register("svd-question-editor-content", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const elementEditorContent: SurveyElementEditorContent = params.elementEditorContent;
      return new QuestionEditorContent(
        elementEditorContent.useTabsInElementEditor,
        elementEditorContent.koTabs,
        elementEditorContent.koActiveTab, 
        elementEditorContent["onTabClick"]//TODO the property doesn't exist in SurveyElementEditorContent but exists in SurveyQuestionEditor
      );
    },
  },
  template: templateHtml,
});
