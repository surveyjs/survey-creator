import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { TabbedMenuItem } from "survey-creator-core";

@Component({
  selector: "svc-tabbed-menu-item",
  templateUrl: "./tabbed-menu-item.component.html",
  styles: [":host { display: none; }"]
})
export class TabbedMenuItemComponent extends BaseAngular<TabbedMenuItem> {
  @Input() model!: TabbedMenuItem;
  protected getModel(): TabbedMenuItem {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tabbed-menu-item", TabbedMenuItemComponent);