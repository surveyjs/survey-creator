import { Component } from "@angular/core";
import { AngularComponentFactory, QuestionAngular, SurveyBaseProviders } from "survey-angular-ui";
import { QuestionSpinEditorModel } from "survey-creator-core";

@Component({
  templateUrl: "./spin-editor.component.html",
  providers: SurveyBaseProviders
})
export class QuestionSpinEditorComponent extends QuestionAngular<QuestionSpinEditorModel> {
}
AngularComponentFactory.Instance.registerComponent("spinedit-question", QuestionSpinEditorComponent);