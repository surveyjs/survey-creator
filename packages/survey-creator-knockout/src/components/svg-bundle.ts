import { svgBundle } from "@survey/creator";
import * as ko from "knockout";

ko.components.register("svc-svg-bundle", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return params;
    }
  },
  template: svgBundle
});