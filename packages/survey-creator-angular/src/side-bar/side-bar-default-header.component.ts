
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { SidebarHeaderModel } from "survey-creator-core";

@Component({
  selector: "svc-side-bar-default-header",
  templateUrl: "./side-bar-default-header.component.html",
  styles: [":host { display: none; }"]
})
export class SidebarDefaultHeaderComponent extends BaseAngular<SidebarHeaderModel> {
  @Input() model!: SidebarHeaderModel;
  protected getModel(): SidebarHeaderModel {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-side-bar-default-header", SidebarDefaultHeaderComponent);