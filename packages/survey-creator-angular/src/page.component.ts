import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, SurveyModel } from "survey-core";
import { CreatorBase, PageAdorner } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";

@Component({
  selector: "svc-page",
  templateUrl: "./page.component.html",
  styles: []
})
export class PageDesignerComponent extends CreatorModelComponent<PageAdorner> {
  @Input() model!: PageModel;
  @Input() survey!: SurveyModel;
  @Input() creator!: CreatorBase;
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
}

AngularComponentFactory.Instance.registerComponent("svc-page", PageDesignerComponent);

