import * as ko from "knockout";

import "./object-editor-content.scss";
import { SurveyElementEditorContentModel } from "../questionEditors/questionEditor";
const templateHtml = require("./object-editor-content.html");

export class ObjectEditorContent {
  constructor(
    public useTabsInElementEditor: any,
    public koTabs: any,
    public koActiveTab: any,
    public onTabClick: any
  ) {}

  public get activeTab() {
    const tab = this.koActiveTab();
    if (typeof tab === "undefined") {
      return this.koTabs()[0].name;
    }
    return tab;
  }
}

ko.components.register("svd-object-editor-content", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      //TODO When templates/questioneditor.html will transform to component it ko.unwrap might be unneded
      const model: SurveyElementEditorContentModel = params.model || ko.unwrap(params.elementEditorContent); 
      return new ObjectEditorContent(
        model.useTabsInElementEditor,
        model.koTabs,
        model.koActiveTab,
        model["onTabClick"] //TODO the property doesn't exist in SurveyElementEditorContentModel but exists in SurveyQuestionEditor
      );
    },
  },
  template: templateHtml,
});
