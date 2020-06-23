import * as ko from "knockout";

import "./restfull.scss";
import { SurveyPropertyResultfullEditor } from "../propertyEditors/propertyRestfullEditor";
import { QuestionDropdown } from "survey-knockout";
const templateHtml = require("./restfull.html");

export class PropertyEditorRestfull {
  constructor(
    public koContentEditor: any,
    public getLocString: any,
    public question: QuestionDropdown,
    public componentInfo: any,
    public koAfterRender: any
  ) {
    koAfterRender(componentInfo.element); //TODO working check
  }
}

ko.components.register("svd-property-editor-restfull", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyPropertyResultfullEditor = params.model;
      return new PropertyEditorRestfull(
        model.koContentEditor,
        model.getLocString,
        model.question,
        componentInfo,
        model.koAfterRender
      );
    },
  },
  template: templateHtml,
});
