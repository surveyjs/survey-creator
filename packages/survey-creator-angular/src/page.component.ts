import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, SurveyModel } from "survey-core";
import { CreatorBase, PageAdorner } from "survey-creator-core";

@Component({
  selector: "svc-page",
  templateUrl: "./page.component.html",
  styles: []
})
export class PageDesignerComponent extends BaseAngular<PageModel> {
  @Input() model!: PageModel;
  @Input() survey!: SurveyModel;
  @Input() creator!: CreatorBase;
  public adorner?: PageAdorner;
  constructor(changeDetectorRef: ChangeDetectorRef, viewContainerRef?: ViewContainerRef) {
    super(changeDetectorRef, viewContainerRef);
    if(this.model) {
      this.adorner = new PageAdorner(this.creator, this.model);
    }
  }
  protected override onModelChanged(): void {
    super.onModelChanged();
    this.adorner = new PageAdorner(this.creator, this.model);
  }
  protected getModel(): PageModel {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-page", PageDesignerComponent);

