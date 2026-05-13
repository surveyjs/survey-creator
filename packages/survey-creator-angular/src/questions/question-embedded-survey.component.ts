import { Component, ElementRef, ViewChild } from "@angular/core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";
import { QuestionEmbeddedSurveyModel } from "survey-creator-core";

@Component({
  selector: "svc-embeddedsurvey-question",
  templateUrl: "./question-embedded-survey.component.html",
  styles: [":host { display: none; }"]
})
export class EmbeddedSurveyQuestionComponent extends QuestionAngular<QuestionEmbeddedSurveyModel> {
  @ViewChild("container") container!: ElementRef<HTMLDivElement>;
  public get survey() {
    return this.model.embeddedSurvey;
  }
  public override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.survey.rootElement = this.container.nativeElement;
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