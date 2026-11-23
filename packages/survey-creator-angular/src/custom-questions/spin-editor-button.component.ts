import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyBaseProviders } from "survey-angular-ui";
import { Action } from "survey-core";
import { ISpinEditorButton } from "survey-creator-core";

@Component({
  selector: "sv-ng-spin-edit-button",
  templateUrl: "./spin-editor-button.component.html",
  styles: ["{ :host { display: none; } }"],
  providers: SurveyBaseProviders
})
export class SpinEditorButtonComponent extends BaseAngular {
  @Input() model!: ISpinEditorButton;
  get modelAction(): Action {
    return this.model as Action;
  }
  get question() {
    return this.model.data.question;
  }
  getModel() {
    return this.modelAction;
  }
}

AngularComponentFactory.Instance.registerComponent("sv-spinedit-button", SpinEditorButtonComponent);