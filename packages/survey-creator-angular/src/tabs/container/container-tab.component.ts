import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { TabContainerViewModel } from "survey-creator-core";

@Component({
  selector: "svc-tab-container",
  templateUrl: "./container-tab.component.html",
  styles: [":host { display: none; }"]
})
export class ContainerTabComponent extends BaseAngular<TabContainerViewModel> {
  @Input() model!: TabContainerViewModel;
  protected getModel(): TabContainerViewModel {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-tab-container", ContainerTabComponent);

