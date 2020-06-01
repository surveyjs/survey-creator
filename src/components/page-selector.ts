import * as ko from "knockout";

import * as Survey from "survey-knockout";

import "./page-selector.scss";
import { PagesEditor } from "./pages-editor";
import { PagesEditorModel } from "../pages-editor-model";
import { SurveyCreator } from "../editor";
const templateHtml = require("./page-selector.html");

export class PageSelector extends PagesEditorModel {
  constructor(creator: SurveyCreator) {
    super(creator);
  }
}

ko.components.register("svd-page-selector", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const creator = params.creator || params.item.data;
      return new PageSelector(creator);
    },
  },
  template: templateHtml,
});
