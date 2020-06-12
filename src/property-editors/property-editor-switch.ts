import * as ko from "knockout";

import "./property-editor-switch.scss";
import { SurveySwitchPropertyEditor } from "../propertyEditors/propertyEditorFactory";
const templateHtml = require("./property-editor-switch.html");

export class PropertyEditorSwitch {
  constructor(
    public koValue: any,
    public readOnly: boolean,
    public displayName: string
  ) {}
}

ko.components.register("svd-property-editor-switch", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveySwitchPropertyEditor = params.model;
      return new PropertyEditorSwitch(
        model.koValue,
        model.readOnly,
        model.displayName
      );
    },
  },
  template: templateHtml,
});
