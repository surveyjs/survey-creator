import * as ko from "knockout";
import { SurveyTextWorker } from "@survey/creator/textWorker";
import { getLocString } from "@survey/creator/editorLocalization";
import { ICreatorPlugin, SurveyCreator } from "../../creator";

import "./json-editor-textarea.scss";
const template: any = require("./json-editor-textarea.html");
// import template from "./json-editor-textarea.html";

export interface ITabJsonModel {
  isInitialJSON: boolean;
  isJSONChanged: boolean;
  text: string;
  init(...params: any[]): void;
  onJsonEditorChanged(): void;
  processJson(text: string): void;
  show(): void;
  dispose(): void;
}

export abstract class TabJsonBaseModel {
  public isInitialJSON: boolean = false;
  public isJSONChanged: boolean = false;
  public isProcessingImmediately: boolean = false;
  private static updateTextTimeout: number = 1000;
  private jsonEditorChangedTimeoutId: number = -1;

  public abstract text: string;
  public abstract processJson(text: string): void;
  public onJsonEditorChanged(): void {
    if (this.jsonEditorChangedTimeoutId !== -1) {
      clearTimeout(this.jsonEditorChangedTimeoutId);
    }
    if (this.isProcessingImmediately) {
      this.jsonEditorChangedTimeoutId = -1;
    }
    else {
      const self: TabJsonBaseModel = this;
      this.jsonEditorChangedTimeoutId = window.setTimeout(() => {
        self.jsonEditorChangedTimeoutId = -1;
        self.processJson(self.text);
      }, TabJsonBaseModel.updateTextTimeout);
    }
  }
}

export class TabJsonTextareaModel extends TabJsonBaseModel implements ITabJsonModel {
  private koText: ko.Observable<string>;
  private koErrors: ko.ObservableArray<any>;
  private subscrKoText: ko.Subscription;
  constructor(private creator: SurveyCreator) {
    super();
  }
  public get text(): string {
    return this.koText();
  }
  public set text(value: string) {
    this.isProcessingImmediately = true;
    this.koText(value);
    this.processJson(value);
    this.isProcessingImmediately = false;
  }
  public init(koText: ko.Observable<string>, koErrors: ko.ObservableArray<any>): void {
    this.koText = koText;
    this.koErrors = koErrors;
    this.koText(this.creator.text);
    const self: TabJsonTextareaModel = this;
    this.subscrKoText = this.koText.subscribe(() => {
      self.onJsonEditorChanged();
    });
  }
  public onJsonEditorChanged(): void {
    this.isJSONChanged = true;
    super.onJsonEditorChanged();
  }
  public processJson(text: string): void {
    const textWorker: SurveyTextWorker = new SurveyTextWorker(text);
    this.koErrors(textWorker.errors);
  }
  public show(): void {}
  public dispose(): void {
    if (typeof this.subscrKoText !== "undefined") {
      this.subscrKoText.dispose();
      this.subscrKoText = undefined;
    }
  }
}

export abstract class TabJsonEditorBasePlugin {
  public model: ITabJsonModel;
  constructor(private creator: SurveyCreator) {
  }
  public activate(): void {
    this.model.isInitialJSON = true;
    this.model.text = this.creator.text;
    this.model.show();
    this.model.isJSONChanged = false;
  }
  public deactivate(): boolean {
    const textWorker: SurveyTextWorker = new SurveyTextWorker(this.model.text);
    if (!textWorker.isJsonCorrect) {
      return false;
    }
    if (!this.readOnly && this.model.isJSONChanged) {
      this.creator._dummySetText(this.model.text);
    }
    return true;
  }
  public get readOnly(): boolean {
    return this.creator.readOnly;
  }
}

export class TabJsonEditorTextareaPlugin extends TabJsonEditorBasePlugin implements ICreatorPlugin {
  constructor(creator: SurveyCreator) {
    super(creator);
    this.model = new TabJsonTextareaModel(creator);
    creator.tabs.push({
      name: "editor",
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

export class TabJsonEditorTextareaViewModel {
  private koText: ko.Observable<string> = ko.observable("");
  private koErrors: ko.ObservableArray<any> = ko.observableArray();
  private ariaLabel: string = getLocString("ed.jsonEditor");
  constructor(private plugin: TabJsonEditorTextareaPlugin, element: any) {
      this.plugin.model.init(this.koText, this.koErrors);
  }
  public get readOnly(): boolean {
    return this.plugin.readOnly;
  }
  public dispose() {
    this.plugin.model.dispose();
  }
}

ko.components.register("svc-tab-json-editor-textarea", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new TabJsonEditorTextareaViewModel(params.data,
        componentInfo.element.nextElementSibling);
    }
  },
  template: template
});
