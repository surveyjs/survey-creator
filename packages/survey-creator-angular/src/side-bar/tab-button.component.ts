import { Component, Input } from "@angular/core";
import { BaseAngular, AngularComponentFactory } from "survey-angular-ui";
import { MenuButton } from "survey-creator-core";

@Component({
  selector: "svc-tab-button",
  templateUrl: "./tab-button.component.html",
  styles: [":host { display: none; }"]
})
export class TabButtonComponent extends BaseAngular<MenuButton> {
  @Input() model!: MenuButton;
  protected getModel(): MenuButton {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-button", TabButtonComponent);