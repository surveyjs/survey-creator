import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { SurveyCreatorModel, QuestionToolbox } from "survey-creator-core";
import { Action, VerticalResponsivityManager } from "survey-core";
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
  public get searchItem() {
    return this.model.searchItem as Action;
  }
  ngAfterViewInit() {
    this.model.setRootElement(this.container.nativeElement as HTMLDivElement);
    this.responsivityManager =
      new VerticalResponsivityManager(this.model.containerElement as HTMLDivElement,
        this.model, this.model.itemSelector);
  }
  protected getModel(): QuestionToolbox {
    return this.model;
  }
  override ngOnDestroy(): void {
    this.responsivityManager?.dispose();
    super.ngOnDestroy();
  }
}
