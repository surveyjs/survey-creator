import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { TabDesignerViewModel } from "survey-creator-core";

@Component({
  selector: "svc-tab-designer",
  templateUrl: "./designer.component.html",
  styles: [":host { display: none; }"]
})
export class DesignerTabComponent extends BaseAngular<TabDesignerViewModel> {
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
AngularComponentFactory.Instance.registerComponent("svc-tab-designer", DesignerTabComponent);