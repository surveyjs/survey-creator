import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { SurveyCreatorModel, QuestionToolbox } from "survey-creator-core";
import { VerticalResponsivityManager } from "survey-core";
import { BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-adaptive-toolbox",
  templateUrl: "./adaptive-toolbox.component.html",
  styles: [":host { display: none; }"]
})
export class AdaptiveToolboxComponent extends BaseAngular<QuestionToolbox> implements AfterViewInit {
  @Input() creator!: SurveyCreatorModel;
  @ViewChild("container") container!: ElementRef<HTMLElement>;
  private responsivityManager: VerticalResponsivityManager | undefined;
  public get model() {
    return this.creator.toolbox;
  }
  ngAfterViewInit() {
    this.responsivityManager =
      new VerticalResponsivityManager(this.container.nativeElement as HTMLDivElement,
        this.model, ".svc-toolbox__tool:not(.sv-dots)");
  }
  protected getModel(): QuestionToolbox {
    return this.model;
  }
  override ngOnDestroy(): void {
    this.responsivityManager?.dispose();
    super.ngOnDestroy();
  }
}
