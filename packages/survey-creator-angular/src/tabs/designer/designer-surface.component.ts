import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { TabDesignerViewModel } from "survey-creator-core";

@Component({
  selector: "svc-designer-surface",
  templateUrl: "./designer-surface.component.html",
  styles: [":host { display: none; }"]
})
export class DesignSurfaceComponent extends BaseAngular<TabDesignerViewModel> {
  @Input() model!: TabDesignerViewModel;
  public get survey() {
    return this.creator.survey;
  }
  public get creator() {
    return this.model.creator;
  }
  protected getModel(): TabDesignerViewModel {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-designer-surface", DesignSurfaceComponent);
