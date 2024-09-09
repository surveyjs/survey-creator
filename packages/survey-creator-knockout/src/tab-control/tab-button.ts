import * as ko from "knockout";
import { CssClassBuilder } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./tab-button.html");

ko.components.register("svc-tab-button", {
  viewModel: {
    createViewModel: (params: any) => {
      new ImplementorBase(params.model);
      return {
        model: params.model,
        buttonClassName: ko.computed<string>(() => {
          return new CssClassBuilder()
            .append("svc-menu-action__button")
            .append("svc-menu-action__button--selected", !!params.model.active)
            .toString();
        })
      };
    }
  },
  template: template.default
});