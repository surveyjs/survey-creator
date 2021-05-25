import * as ko from "knockout";
import {
  SurveyTemplateRendererViewModel,
  SurveyModel,
  Base,
  MatrixDropdownColumn
} from "survey-core";
import {
  CreatorBase,
} from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./matrix-column-header.html");

class KnockoutMatrixColumnHeaderWrapperViewModel extends Base { 
  constructor(public creator: CreatorBase<SurveyModel>, public templateData: any) {
    super();
  }
  get column() {
    return this.templateData.data.column as MatrixDropdownColumn
  }
  public celectColumn(model: KnockoutMatrixColumnHeaderWrapperViewModel, event: MouseEvent) {
    model.creator.selectElement(model.column);
    event.stopPropagation();
  }
}

ko.components.register("svc-matrix-column-neader", {
  viewModel: {
    createViewModel: (params: SurveyTemplateRendererViewModel, componentInfo: any) => {
      const creator = params.componentData.creator;

      params.templateData["nodes"] = componentInfo.templateNodes;

      const model = new KnockoutMatrixColumnHeaderWrapperViewModel(
        creator,
        params.templateData
      );
      new ImplementorBase(model);
      return model;
    },
  },
  template: template,
});
