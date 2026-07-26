import { Component, ElementRef, Input, ViewChild } from "@angular/core";
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
    return this.model.isSideBySideForms ? <TranslationSideBySide>this.model : undefined;
  }
  // The setters also fire with undefined when *ngIf removes the panes, which detaches the listeners.
  @ViewChild("sourceScrollContainer") set sourceScrollContainer(ref: ElementRef<HTMLElement> | undefined) {
    this.sideBySideModel?.setSourceScrollElement(ref ? ref.nativeElement : undefined as any);
  }
  @ViewChild("targetScrollContainer") set targetScrollContainer(ref: ElementRef<HTMLElement> | undefined) {
    this.sideBySideModel?.setTargetScrollElement(ref ? ref.nativeElement : undefined as any);
  }
  // The strings-grid model: the tab model itself in the default mode and in the side-by-side grid view.
  public get stringsModel(): Translation | undefined {
    return this.sideBySideModel ? undefined : this.model;
  }
  // The strings survey is fully recreated on reset(). Its elements keep deterministic ids across
  // instances, so *ngFor's element trackBy would reuse the disposed survey's (lazy-skeleton) rows.
  // Keying the survey-content by the per-instance elementIdPrefix forces Angular to recreate it.
  public trackStringsSurveyBy(_: number, survey: any): string {
    return survey?.elementIdPrefix || "";
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-translation", TranslationTabComponent);

