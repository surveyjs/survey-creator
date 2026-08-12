import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { Translation } from "survey-creator-core";

@Component({
  selector: "svc-tab-translation",
  templateUrl: "./translation.component.html",
  styles: [":host { display: none; }"]
})
export class TranslationTabComponent extends BaseAngular<Translation> {
  @Input() model!: Translation;

  protected getModel(): Translation {
    return this.model;
  }
  // The strings survey is fully recreated on reset(). Its elements keep deterministic ids across
  // instances, so *ngFor's element trackBy would reuse the disposed survey's (lazy-skeleton) rows.
  // Keying the survey-content by the per-instance elementIdPrefix forces Angular to recreate it.
  public trackStringsSurveyBy(_: number, survey: any): string {
    return survey?.elementIdPrefix || "";
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-translation", TranslationTabComponent);

