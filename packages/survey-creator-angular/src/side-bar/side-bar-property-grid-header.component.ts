
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { getActionDropdownButtonTarget } from "survey-core";
import { MenuButton } from "survey-creator-core";

@Component({
  selector: "svc-side-bar-property-grid-header",
  templateUrl: "./side-bar-property-grid-header.component.html",
  styles: [":host { display: none; }"]
})
export class SidebarPropertyGridHeaderComponent extends BaseAngular<MenuButton> {
  @Input() model!: MenuButton;
  public getTarget: (container: HTMLElement) => HTMLElement = getActionDropdownButtonTarget;

  protected getModel(): MenuButton {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-side-bar-property-grid-header", SidebarPropertyGridHeaderComponent);
