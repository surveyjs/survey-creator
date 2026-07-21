import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { Translation, TranslationSideBySide } from "survey-creator-core";

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
  public get sideBySideModel(): TranslationSideBySide | undefined {
    return this.model.isSideBySide ? <TranslationSideBySide>this.model : undefined;
  }
  // The strings-grid model: the tab model itself in the default mode, the scoped survey-level
  // strings model when the side-by-side mode shows the synthetic "Survey Strings" entry.
  public get stringsModel(): Translation | undefined {
    if (!this.model.isSideBySide) return this.model;
    const model = <TranslationSideBySide>this.model;
    return model.showSurveyStrings ? model.surveyStringsTranslation : undefined;
  }
  // The strings survey is fully recreated on reset(). Its elements keep deterministic ids across
  // instances, so *ngFor's element trackBy would reuse the disposed survey's (lazy-skeleton) rows.
  // Keying the survey-content by the per-instance elementIdPrefix forces Angular to recreate it.
  public trackStringsSurveyBy(_: number, survey: any): string {
    return survey?.elementIdPrefix || "";
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-translation", TranslationTabComponent);

