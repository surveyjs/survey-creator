import * as ko from "knockout";
import {
  SurveyTemplateRendererViewModel,
  SurveyModel,
  Base,
  Question,
  settings,
  MatrixDropdownColumn,
} from "survey-core";
import { MatrixCellWrapperViewModel } from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./matrix-cell.html");

ko.components.register("svc-matrix-cell", {
  viewModel: {
    createViewModel: (params: SurveyTemplateRendererViewModel, componentInfo: any) => {
      const creator = params.componentData.creator;

      params.templateData["nodes"] = componentInfo.templateNodes;

      const model = new MatrixCellWrapperViewModel(
        creator,
        params.templateData
      );
      new ImplementorBase(model);
      return model;
    },
  },
  template: template,
});
