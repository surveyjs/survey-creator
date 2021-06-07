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
      const question = params.componentData.question;
      const row = params.componentData.row;
      const column = params.componentData.column;

      params.templateData["nodes"] = componentInfo.templateNodes;

      const model = new MatrixCellWrapperViewModel(
        creator,
        params.templateData,
        question,
        row,
        column
      );
      new ImplementorBase(model);
      return model;
    },
  },
  template: template,
});
