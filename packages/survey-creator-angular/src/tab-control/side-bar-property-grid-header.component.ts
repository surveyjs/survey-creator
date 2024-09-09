
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { Action, CssClassBuilder } from "survey-core";

@Component({
  selector: "svc-side-bar-property-grid-header",
  templateUrl: "./side-bar-property-grid-header.component.html",
  styles: [":host { display: none; }"]
})
export class SidebarPropertyGridHeaderComponent extends BaseAngular<Action> {
  @Input() model!: Action;
  protected getModel(): Action {
    return this.model;
  }

  get buttonClassName(): string {
    return new CssClassBuilder()
      .append("svc-sidebar__header-button")
      .append("svc-sidebar__header-button--with-subtitle")
      .append("svc-sidebar__header-button--pressed", this.model.pressed)
      .toString();
  }
}
AngularComponentFactory.Instance.registerComponent("svc-side-bar-property-grid-header", SidebarPropertyGridHeaderComponent);
