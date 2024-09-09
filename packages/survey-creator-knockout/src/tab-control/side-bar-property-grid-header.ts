import * as ko from "knockout";
import { CssClassBuilder, getActionDropdownButtonTarget } from "survey-core";
import { ImplementorBase } from "survey-knockout-ui";

const template = require("./side-bar-property-grid-header.html");

ko.components.register("svc-side-bar-property-grid-header", {
  viewModel: {
    createViewModel: (params: any) => {
      new ImplementorBase(params.model);
      return {
        model: params.model,
        getTarget: getActionDropdownButtonTarget,
        buttonClassName: ko.computed<string>(() => {
          return new CssClassBuilder()
            .append("svc-sidebar__header-button")
            .append("svc-sidebar__header-button--with-subtitle")
            .append("svc-sidebar__header-button--pressed", params.model.pressed)
            .toString();
        })
      };
    }
  },
  template: template.default
});