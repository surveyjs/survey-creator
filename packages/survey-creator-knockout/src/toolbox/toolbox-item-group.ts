import * as ko from "knockout";
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
  template: template.default
});
