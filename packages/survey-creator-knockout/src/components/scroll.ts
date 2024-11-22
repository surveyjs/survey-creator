import * as ko from "knockout";
import { ScrollViewModel } from "survey-creator-core";
const template = require("./scroll.html");

ko.components.register("svc-scroll", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const container = componentInfo.element;
      var model = new ScrollViewModel();
      model.setRootElement(container.nextSibling);
      return { model: model };
    }
  },
  template: template.default
});
