import * as ko from "knockout";
import { SurveyObjectProperty } from "@survey/creator/objectProperty";

import "./property-panel-item.scss";
const templateHtml = require("./property-panel-item.html");

export class PropertyPanelItemViewModel {
  public contentTemplateName: string;
  public editorModel: any;
  constructor(editorModel: any) {
    this.contentTemplateName = editorModel.contentTemplateName;
    this.editorModel = editorModel;
  }
}

ko.components.register("svc-property-panel-item", {
  viewModel: {
    createViewModel: (params: any) => {
      const model: SurveyObjectProperty = params.model;
      return new PropertyPanelItemViewModel(model.editor);
    },
  },
  template: templateHtml,
});
