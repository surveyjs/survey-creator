
import { Component, Input } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { SidebarTabModel } from "survey-creator-core";

@Component({
  selector: "svc-side-bar-tab",
  templateUrl: "./side-bar-tab.component.html",
  styles: [":host { display: none; }"]
})
export class SidebarTabComponent extends BaseAngular<SidebarTabModel> {
  @Input() model!: SidebarTabModel;
  protected getModel(): SidebarTabModel {
    return this.model;
  }
}