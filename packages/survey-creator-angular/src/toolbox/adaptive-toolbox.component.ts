import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { SurveyCreatorModel, QuestionToolbox, QuestionToolboxItem } from "survey-creator-core";
import { Action } from "survey-core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-toolbox",
  templateUrl: "./adaptive-toolbox.component.html",
  styles: [":host { display: none; }"]
})
export class AdaptiveToolboxComponent extends BaseAngular<QuestionToolbox> implements AfterViewInit {
  @Input() model!: SurveyCreatorModel;
  @ViewChild("container") container!: ElementRef<HTMLDivElement>;
  public get toolbox() {
    return this.model.toolbox;
  }
  public get creator() {
    return this.model;
  }
  public get searchItem() {
    return this.toolbox.searchItem as Action;
  }
  private afterRender() {
    if (this.container?.nativeElement) {
      this.toolbox.afterRender(this.container.nativeElement);
    }
  }
  ngAfterViewInit() {
    this.afterRender();
  }
  override ngAfterViewChecked(): void {
    super.ngAfterViewChecked();
    this.afterRender();
  }
  protected override afterUpdate(isSync?: boolean): void {
    super.afterUpdate(isSync);
    this.afterRender();
  }
  protected getModel(): QuestionToolbox {
    return this.toolbox;
  }
  override ngOnDestroy(): void {
    this.toolbox.beforeDestroy();
    super.ngOnDestroy();
  }
  trackItemBy(_: number, item: QuestionToolboxItem) {
    return item.renderedId;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-toolbox", AdaptiveToolboxComponent);