import * as ko from "knockout";
import {
  SurveyItemValueViewModel,
} from "survey-core";
import {
  ItemValueAdornerViewModel,
} from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./item-value.html");

ko.components.register("svc-item-value", {
  viewModel: {
    createViewModel: (params: SurveyItemValueViewModel, componentInfo: any) => {
      const creator = params.componentData.creator;
      const question = params.componentData.question;
      const item = params.templateData.data;

      const model = new ItemValueAdornerViewModel(
        creator,
        question,
        params.templateData.data
      );
      new ImplementorBase(model);
      return model;
    },
  },
  template: template,
});
