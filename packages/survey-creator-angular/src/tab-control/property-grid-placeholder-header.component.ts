
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { SidebarPageModel } from "survey-creator-core";

@Component({
  selector: "svc-side-bar-property-grid-placeholder-header",
  templateUrl: "./property-grid-placeholder-header.component.html",
  styles: [":host { display: none; }"]
})
export class SidebarPropertyGridPlaceholderHeaderComponent extends BaseAngular<SidebarPageModel> {
  @Input() model!: SidebarPageModel;
  protected getModel(): SidebarPageModel {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-side-bar-property-grid-placeholder-header", SidebarPropertyGridPlaceholderHeaderComponent);
