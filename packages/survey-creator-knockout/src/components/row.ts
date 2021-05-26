import * as ko from "knockout";
import {
  ItemValue,
  QuestionSelectBase,
  SurveyTemplateRendererViewModel,
  SurveyModel,
  QuestionRowModel
} from "survey-core";
import {
  CreatorBase,
  ItemValueWrapperViewModel,
  RowViewModel
} from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./row.html");

class KnockoutRowViewModel extends RowViewModel {
  constructor(
    public creator: CreatorBase<SurveyModel>,
    public row: QuestionRowModel,
    public templateData: any
  ) {
    super(creator, row, templateData);
  }
}

ko.components.register("svc-row", {
  viewModel: {
    createViewModel: (
      params: SurveyTemplateRendererViewModel,
      componentInfo: any
    ) => {
      const creator = params.componentData.creator;
      const row = params.componentData.row;

      const model = new KnockoutRowViewModel(creator, row, params.templateData);
      new ImplementorBase(model);
      return model;
    }
  },
  template: template
});
