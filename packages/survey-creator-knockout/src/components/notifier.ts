import * as ko from "knockout";
import { ImplementorBase, Survey } from "survey-knockout-ui";
import { SurveyCreator } from "../creator";

// import "./notifier.scss";
import template from "./notifier.html";

ko.components.register("svc-notifier", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    },
  },
  template: template,
});
