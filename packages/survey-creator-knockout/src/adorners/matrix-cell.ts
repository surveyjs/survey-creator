import * as ko from "knockout";
import {
  SurveyTemplateRendererViewModel,
  SurveyModel,
  Base,
  Question,
  settings,
  MatrixDropdownColumn,
} from "survey-core";
import { MatrixCellWrapperViewModel } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./matrix-cell.html");

ko.components.register("svc-matrix-cell", {
  viewModel: {
    createViewModel: (params: SurveyTemplateRendererViewModel, componentInfo: any) => {
      const creator = params.componentData.creator;
      const question = params.componentData.question;
      const row = params.componentData.row;
      const column = params.componentData.column;
      const element = params.componentData.element;

      params.templateData["nodes"] = componentInfo.templateNodes;

      const model = new MatrixCellWrapperViewModel(
        creator,
        params.templateData,
        question,
        row,
        column || element.cell?.column
      );
      new ImplementorBase(model);
      return model;
    },
  },
  template: template.default,
});
