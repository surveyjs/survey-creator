import * as ko from "knockout";
import {
  MatrixDropdownRowModelBase,
  SurveyTemplateRendererViewModel,
  SurveyModel,
  Base,
} from "survey-core";
import {
  CreatorBase,
} from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./matrix-row-header.html");

class KnockoutMatrixRowHeaderWrapperViewModel extends Base { 
  constructor(public creator: CreatorBase<SurveyModel>, public templateData: any) {
    super();
  }
  get row() {
    return this.templateData.data.row as MatrixDropdownRowModelBase
  }
  public celectRow(model: KnockoutMatrixRowHeaderWrapperViewModel, event: MouseEvent) {
    model.creator.selectElement(model.row["item"]);
    event.stopPropagation();
  }
}

ko.components.register("svc-matrix-row-neader", {
  viewModel: {
    createViewModel: (params: SurveyTemplateRendererViewModel, componentInfo: any) => {
      const creator = params.componentData.creator;

      params.templateData["nodes"] = componentInfo.templateNodes;

      const model = new KnockoutMatrixRowHeaderWrapperViewModel(
        creator,
        params.templateData
      );
      new ImplementorBase(model);
      return model;
    },
  },
  template: template,
});
