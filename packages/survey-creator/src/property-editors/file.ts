import * as ko from "knockout";
import { JsonObjectProperty } from "survey-knockout";
import { SurveyPropertyEditorBase } from "../propertyEditors/propertyEditorBase";

import "./file.scss";
import { SurveyPropertyEditorFactory } from "../propertyEditors/propertyEditorFactory";
import { editorLocalization } from "../editorLocalization";
const templateHtml = require("./file.html");

export class SurveyFilePropertyEditor extends SurveyPropertyEditorBase {
  constructor(property: JsonObjectProperty) {
    super(property);
  }
  public get editorType(): string {
    return "file";
  }
}

export class PropertyEditorFileViewModel {
  constructor(
    private rootElement: HTMLDivElement,
    private editor: any,
    public koValue: any,
    public readOnly: boolean,
    public isDiplayNameVisible: boolean,
    public displayName: string,
    public afterRender: any
  ) {
    afterRender();
  }

  get fileContent() {
    if (this.koValue()) {
      return this.koValue().substring(0, 45) + "...";
    } else {
      return this.getLocString("pe.noFile");
    }
  }

  public getLocString(str: string) {
    return editorLocalization.getString(str);
  }

  chooseFile = (model: PropertyEditorFileViewModel, event: Event) => {
    if (!!ko.unwrap(this.readOnly)) {
      return;
    }
    var fileInput = this.rootElement.nextElementSibling.getElementsByClassName(
      "svd-choose-file-control"
    )[0];
    this.editor.chooseFiles(fileInput, (files: File[]) => {
      this.editor.uploadFiles(files, (status: string, data: any) => {
        if (status === "success") {
          this.koValue(data);
        }
      });
    });
  };
  deleteFile = (model: PropertyEditorFileViewModel, event: Event) => {
    if (!!ko.unwrap(this.readOnly)) {
      return;
    }
    this.editor.clearFiles(this.koValue(), (status: string, data: any) => {
      if (status === "success") {
        this.koValue(undefined);
      }
    });
  };
}

ko.components.register("svd-property-editor-file", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      const model: SurveyFilePropertyEditor = params.model;

      return new PropertyEditorFileViewModel(
        componentInfo.element,
        model.options,
        model.koValue,
        model.readOnly,
        model.isDiplayNameVisible,
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

SurveyPropertyEditorFactory.registerEditor(
  "file",
  (property: JsonObjectProperty) => new SurveyFilePropertyEditor(property)
);
