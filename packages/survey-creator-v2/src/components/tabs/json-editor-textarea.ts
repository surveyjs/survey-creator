import * as ko from "knockout";
import { getLocString } from "@survey/creator/editorLocalization";
import { ICreatorPlugin, SurveyCreator } from "../../creator";
import { JsonEditorBaseModel, TabJsonEditorBasePlugin } from "./json-editor-plugin";
import "./json-editor-textarea.scss";
const template: any = require("./json-editor-textarea.html");
// import template from "./json-editor-textarea.html";

export class TextareaJsonEditorModel extends JsonEditorBaseModel {
  private koText = ko.observable<string>("");
  private koErrors = ko.observableArray<any>();
  public ariaLabel: string = getLocString("ed.jsonEditor");
  private subscrKoText: ko.Subscription;

  constructor(creator: SurveyCreator) {
    super(creator);
  }

  public get text(): string {
    return this.koText();
  }
  public set text(value: string) {
    this.isProcessingImmediately = true;
    this.koText(value);
    this.onTextChanged();
    this.isProcessingImmediately = false;
  }
  public get errors(): any[] {
    return this.koErrors();
  }
  public init(): void {
    this.koText(this.creator.text);
    const self: TextareaJsonEditorModel = this;
    this.subscrKoText = this.koText.subscribe(() => {
      self.onTextChanged();
    });
  }

  protected onTextChanged(): void {
    this.isJSONChanged = true;
    super.onTextChanged();
  }
  protected setErrors(errors: any[]): void {
    this.koErrors(errors);
  }
  public onEditorActivated(): void {}
  public dispose(): void {
    if (typeof this.subscrKoText !== "undefined") {
      this.subscrKoText.dispose();
      this.subscrKoText = undefined;
    }
  }
}

export class TabJsonEditorTextareaPlugin
  extends TabJsonEditorBasePlugin<TextareaJsonEditorModel>
  implements ICreatorPlugin {
  constructor(creator: SurveyCreator) {
    super(creator);
    this.model = new TextareaJsonEditorModel(creator);
    creator.tabs.push({
      id: "editor",
      title: getLocString("ed.jsonEditor"),
      template: "svc-tab-json-editor-textarea",
      data: this,
      action: () => {
        creator.makeNewViewActive("editor");
        this.activate();
      },
    });
    creator.plugins["editor"] = this;
  }
}

ko.components.register("svc-tab-json-editor-textarea", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabJsonEditorTextareaPlugin = params.data;
      plugin.model.init();
      return plugin.model;
    }
  },
  template: template
});
