
import { Component, Input } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { SidebarPageModel } from "survey-creator-core";

@Component({
  selector: "svc-side-bar-page",
  templateUrl: "./side-bar-page.component.html",
  styles: [":host { display: none; }"]
})
export class SidebarPageComponent extends BaseAngular<SidebarPageModel> {
  @Input() model!: SidebarPageModel;
  protected getModel(): SidebarPageModel {
    return this.model;
  }
}