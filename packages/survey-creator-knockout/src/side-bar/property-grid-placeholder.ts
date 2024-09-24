import * as ko from "knockout";
import { editorLocalization } from "survey-creator-core";

const template = require("./property-grid-placeholder.html");

ko.components.register("svc-property-grid-placeholder", {
  viewModel: {
    createViewModel: (params: any) => {
      return {
        title: editorLocalization.getString("ed.propertyGridPlaceholderTitle"),
        description: editorLocalization.getString("ed.propertyGridPlaceholderDescription")
      };
    },
  },
  template: template.default
});
