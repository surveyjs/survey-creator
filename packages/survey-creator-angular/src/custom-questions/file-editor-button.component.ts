import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { Action } from "survey-core";
import { QuestionFileEditorModel } from "survey-creator-core";

@Component({
  selector: "sv-ng-file-editor-button",
  templateUrl: "./file-editor-button.component.html",
  styles: ["{ :host { display: none; } }"]
})
export class FileEditorButtonComponent extends BaseAngular {
  @Input() model!: Action;
  get question() {
    return this.model.data.question as QuestionFileEditorModel;
  }
  getModel() {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("sv-fileedit-button", FileEditorButtonComponent);