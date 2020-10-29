import * as ko from "knockout";
import { SurveyStringPropertyEditor } from "../../../propertyEditors/propertyEditorFactory";

import "./text-editor.scss";
const template = require("./text-editor.html");

export class TextEditorViewModel {
  constructor(
    public koValue: ko.Observable<string>,
    public readOnly: boolean,
    public koInputType: any,
    public defaultValue: any,
    public koMaxLength: any,
    public displayName: string,
    public showLabel: boolean,
    public koDisplayError: any,
    public getLocString: any,
    public koErrorText: any,
    public onKeydown: any,
    public afterRender: () => void
  ) {
    afterRender();
  }
}

ko.components.register("svc-text-editor", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const model: SurveyStringPropertyEditor = params.model;
      const viewModel = new TextEditorViewModel(
        model.koValue,
        model.readOnly,
        model.koInputType,
        model.defaultValue,
        model.koMaxLength,
        model.displayName,
        model.showDisplayNameOnTop,
        model.koDisplayError,
        model.getLocString,
        model.koErrorText,
        model.onInputKeydown,
        () => {
          typeof params.afterRender === "function" &&
            params.afterRender.call(model, componentInfo);

          typeof model.koAfterRender === "function" &&
            model.koAfterRender.call(model, componentInfo);
        }
      );
      return viewModel;
    },
  },
  template: template,
});
