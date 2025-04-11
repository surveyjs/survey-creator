import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { SurveyCreatorModel, QuestionToolbox, QuestionToolboxItem } from "survey-creator-core";
import { Action, VerticalResponsivityManager } from "survey-core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-toolbox",
  templateUrl: "./adaptive-toolbox.component.html",
  styles: [":host { display: none; }"]
})
export class AdaptiveToolboxComponent extends BaseAngular<QuestionToolbox> implements AfterViewInit {
  @Input() model!: SurveyCreatorModel;
  @ViewChild("container") container!: ElementRef<HTMLElement>;
  private responsivityManager: VerticalResponsivityManager | undefined;
  public get toolbox() {
    return this.model.toolbox;
  }
  public get creator() {
    return this.model;
  }
  public get searchItem() {
    return this.toolbox.searchItem as Action;
  }
  ngAfterViewInit() {
    this.toolbox.setRootElement(this.container.nativeElement as HTMLDivElement);
    this.responsivityManager =
        new VerticalResponsivityManager(this.toolbox.containerElement as HTMLDivElement,
          this.toolbox);
  }
  protected getModel(): QuestionToolbox {
    return this.toolbox;
  }
  override ngOnDestroy(): void {
    this.responsivityManager?.dispose();
    this.toolbox.setRootElement(undefined as any);
    super.ngOnDestroy();
  }
  trackItemBy(_: number, item: QuestionToolboxItem) {
    return item.renderedId;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-toolbox", AdaptiveToolboxComponent);