import * as ko from "knockout";
import { SvgRegistry } from "survey-core";
import { enableRenderIcons, disableRenderIcons } from "survey-creator-core";

ko.components.register("svc-svg-bundle", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const element = componentInfo.element.querySelector && componentInfo.element.querySelector("svg") || componentInfo.element.nextElementSibling;
      disableRenderIcons();
      element.innerHTML = SvgRegistry.iconsRenderedHtml();
      return {
        dispose: () => {
          enableRenderIcons();
        }
      };
    }
  },
  template: "<svg id='sv-icon-holder-global-container' style=\"display:none\"></svg>"
});