import * as ko from "knockout";
import { SvgRegistry } from "survey-core";

ko.components.register("svc-svg-bundle", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const element = componentInfo.element.querySelector && componentInfo.element.querySelector("svg") || componentInfo.element.nextElementSibling;
      element.innerHTML = SvgRegistry.iconsRenderedHtml();
      return params;
    }
  },
  template: "<svg style=\"display:none\"></svg>"
});