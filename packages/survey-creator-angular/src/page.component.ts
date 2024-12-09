import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, SurveyModel } from "survey-core";
import { SurveyCreatorModel, PageAdorner } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";

@Component({
  selector: "svc-page",
  templateUrl: "./page.component.html",
  styles: [":host { display: none; }"]
})
export class PageDesignerComponent extends CreatorModelComponent<PageAdorner> {
  @Input() model!: PageModel;
  @Input() survey!: SurveyModel;
  @Input() creator!: SurveyCreatorModel;
  @Input() isGhost!: boolean;
  @ViewChild("container", { read: ElementRef }) container!: ElementRef<HTMLDivElement>
  public adorner!: PageAdorner;
  protected createModel(): void {
    if(this.adorner) {
      this.adorner.dispose();
    }
    if (this.model) {
      this.adorner = new PageAdorner(this.creator, this.model);
      this.adorner.isGhost = this.isGhost;
    }
  }
  override ngDoCheck(): void {
    super.ngDoCheck();
    if(this.adorner) {
      this.adorner.isGhost = this.isGhost;
    }
  }
  protected getModel(): PageAdorner {
    return this.adorner;
  }
  protected getPropertiesToTrack(): string[] {
    return ["creator", "model"];
  }
  public override ngAfterViewChecked(): void {
    super.ngAfterViewChecked();
    if(this.adorner && this.container?.nativeElement) {
      this.adorner.rootElement = this.container.nativeElement;
    }
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.adorner.dispose();
  }
}

AngularComponentFactory.Instance.registerComponent("svc-page", PageDesignerComponent);

