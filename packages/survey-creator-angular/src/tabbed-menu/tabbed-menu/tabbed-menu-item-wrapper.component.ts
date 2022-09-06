import { Component, Input } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { TabbedMenuItem } from "survey-creator-core";

@Component({
  selector: "svc-tabbed-menu-item-wrapper",
  templateUrl: "./tabbed-menu-item-wrapper.component.html",
  styles: [":host { display: none; }"]
})
export class TabbedMenuItemWrapperComponent extends BaseAngular<TabbedMenuItem> {
  @Input() model!: TabbedMenuItem;
  protected getModel(): TabbedMenuItem {
    return this.model;
  }
}