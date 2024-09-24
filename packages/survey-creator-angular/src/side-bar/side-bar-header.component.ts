
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { SidebarHeaderModel } from "survey-creator-core";

@Component({
  selector: "svc-side-bar-header",
  templateUrl: "./side-bar-header.component.html",
  styles: [":host { display: none; }"]
})
export class SidebarHeaderComponent extends BaseAngular<SidebarHeaderModel> {
  @Input() model!: SidebarHeaderModel;
  protected getModel(): SidebarHeaderModel {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-side-bar-header", SidebarHeaderComponent);
