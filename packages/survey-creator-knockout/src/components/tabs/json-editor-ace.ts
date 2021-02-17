import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout";
import { AceJsonEditorBaseModel, TabJsonEditorAcePlugin } from "@survey/creator";
import { SurveyCreator } from "../../creator";
const template: any = require("./json-editor-ace.html");
// import template from "./json-editor-ace.html";

export class AceJsonEditorModel extends AceJsonEditorBaseModel {
  constructor(creator: SurveyCreator) {
    super(creator);
    new ImplementorBase(this);
  }
}

ko.components.register("svc-tab-json-editor-ace", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const aceEditor: AceAjax.Editor = ace.edit(
        <HTMLElement>(componentInfo.element.nextElementSibling.
          querySelector(".svc-json-editor-tab__ace-editor"))
      );
      const plugin: TabJsonEditorAcePlugin = params.data;
      plugin.model.init(aceEditor);
      return plugin.model;
    }
  },
  template: template
});
