import { Component } from "@angular/core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";
import { QuestionEmbeddedSurveyModel } from "survey-creator-core";

@Component({
  selector: "svc-embeddedsurvey-question",
  templateUrl: "./question-embedded-survey.component.html",
  styles: [":host { display: none; }"]
})
export class EmbeddedSurveyQuestionComponent extends QuestionAngular<QuestionEmbeddedSurveyModel> {
  public get survey() {
    return this.model.embeddedSurvey;
  }
  protected override onModelChanged(): void {
    super.onModelChanged();
    if (!!this.model) {
      this.model.onEmbeddedSurveyValueChanged = () => {
        this.detectChanges();
      };
    }
  }
}

AngularComponentFactory.Instance.registerComponent("embeddedsurvey-question", EmbeddedSurveyQuestionComponent);