import * as ko from "knockout";
import { Survey } from "survey-knockout";
import { SurveyTextWorker } from "../../../../survey-creator/src/textWorker";
// import { getLocString } from "../../../../survey-creator/src/editorLocalization";
import { SurveyCreator } from "../../creator";

import "./json-editor.scss";
const template: any = require("./json-editor.html");
// import template from "./json-editor.html";

export class TabJsonEditorViewModel {
  // public creator: SurveyCreator;
  // private _survey: Survey;

  public static updateTextTimeout: number = 1000;
  public static aceBasePath: string = "";
  public isInitialJSON: boolean = false;
  public isJSONChanged: boolean = false;
  public koText: ko.Observable<string> = ko.observable("");
  public koErrors: ko.ObservableArray<any> = ko.observableArray();
  private isProcessingImmediately: boolean = false;
  private textWorker: SurveyTextWorker;
  private aceEditor: AceAjax.Editor;
  private aceCanUndo: ko.Observable<boolean> = ko.observable(false);
  private aceCanRedo: ko.Observable<boolean> = ko.observable(false);
  private subscrKoText: ko.Subscription;

  constructor(creator: SurveyCreator, survey: Survey) {
    // this.creator = creator;
    // this._survey = survey;

    const self: TabJsonEditorViewModel = this;
    this.subscrKoText = this.koText.subscribe(() => {
      self.onJsonEditorChanged();
    });
    creator.setSurveyJSONTextCallback = (text) => {
      this.isInitialJSON = true;
      this.text = text;
    };
  }
  // get survey() {
  //   return ko.unwrap(this._survey);
  // }
  public get hasAceEditor(): boolean {
    return typeof ace !== "undefined";
  }
  public get text(): string {
    if (!this.hasAceEditor) return this.koText();
    return this.aceEditor.getValue();
  }
  public set text(value: string) {
    this.isProcessingImmediately = true;
    this.koText(value);
    if (this.aceEditor) {
      this.aceEditor.setValue(value);
      this.aceEditor.renderer.updateFull(true);
      this.aceEditor.getSession().getUndoManager().reset();
    }
    this.processJson(value);
    this.isProcessingImmediately = false;
  }
  dispose() {
    if (typeof this.subscrKoText !== "undefined") {
      this.subscrKoText.dispose();
      this.subscrKoText = undefined;
    }
  }
}

ko.components.register("svc-tab-json-editor", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      return new TabJsonEditorViewModel(params.creator, params.survey);
    },
  },
  template: template,
});
