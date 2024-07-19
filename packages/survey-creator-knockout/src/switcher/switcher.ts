import * as ko from "knockout";
import { Switcher } from "survey-creator-core";
import { ImplementorBase } from "survey-knockout-ui";
const template = require("./switcher.html");

ko.components.register("svc-switcher", {
  viewModel: {
    createViewModel: (params: any) => {
      const item: Switcher = params.item;
      new ImplementorBase(item);
      return params;
    },
  },
  template: template.default
});
