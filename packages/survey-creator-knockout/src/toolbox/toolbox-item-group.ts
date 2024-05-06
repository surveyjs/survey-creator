import * as ko from "knockout";
import { SurveyCreator } from "../creator";
import { editorLocalization } from "survey-creator-core";
import { IQuestionToolboxItem } from "survey-creator-core";
import { KnockoutToolboxItemViewModel } from "./toolbox-item";
const template = require("./toolbox-item-group.html");

ko.components.register("svc-toolbox-item-group", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new KnockoutToolboxItemViewModel(
        params.model,
        params.item,
        params.creator,
        params.isCompact
      );
    }
  },
  template: template
});
