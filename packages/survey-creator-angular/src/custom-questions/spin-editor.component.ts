import { Component } from "@angular/core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";
import { QuestionSpinEditorModel } from "survey-creator-core";

@Component({
  templateUrl: "./spin-editor.component.html"
})
export class QuestionSpinEditorComponent extends QuestionAngular<QuestionSpinEditorModel> {
}
AngularComponentFactory.Instance.registerComponent("spinedit-question", QuestionSpinEditorComponent);