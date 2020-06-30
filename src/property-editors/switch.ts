import * as ko from "knockout";

import "./switch.scss";
import { SurveySwitchPropertyEditor } from "../propertyEditors/propertyEditorFactory";
const templateHtml = require("./switch.html");

export class PropertyEditorSwitch {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public displayName: string,
    public afterRender: any
  ) {
    afterRender();
  }
}

ko.components.register("svd-property-editor-switch", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveySwitchPropertyEditor = params.model;

      return new PropertyEditorSwitch(
        model.koValue,
        model.readOnly,
        model.displayName,
        () => {
          typeof params.afterRender === "function" &&
            params.afterRender.call(model, componentInfo);

          typeof model.koAfterRender === "function" &&
            model.koAfterRender.call(model, componentInfo);
        }
      );
    },
  },
  template: templateHtml,
});
