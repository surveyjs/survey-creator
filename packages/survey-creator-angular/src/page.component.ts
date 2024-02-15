import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, SurveyModel } from "survey-core";
import { SurveyCreatorModel, PageAdorner } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";

@Component({
  selector: "svc-page",
  templateUrl: "./page.component.html",
  styles: []
})
export class PageDesignerComponent extends CreatorModelComponent<PageAdorner> {
  @Input() model!: PageModel;
  @Input() survey!: SurveyModel;
  @Input() creator!: SurveyCreatorModel;
  @Input() isGhost?: boolean;
  public adorner!: PageAdorner;
  protected createModel(): void {
    if (this.model) {
      this.adorner = new PageAdorner(this.creator, this.model);
    }
  }
  protected getModel(): PageAdorner {
    return this.adorner;
  }
  protected getPropertiesToTrack(): string[] {
    return ["creator", "model"];
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.adorner.dispose();
  }
}

AngularComponentFactory.Instance.registerComponent("svc-page", PageDesignerComponent);

