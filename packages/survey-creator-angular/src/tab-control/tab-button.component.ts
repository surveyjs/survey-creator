import { Component, Input } from "@angular/core";
import { Action, CssClassBuilder } from "survey-core";
import { BaseAngular, AngularComponentFactory } from "survey-angular-ui";

@Component({
  selector: "svc-tab-button",
  templateUrl: "./tab-button.component.html",
  styles: [":host { display: none; }"]
})
export class TabButtonComponent extends BaseAngular<Action> {
  @Input() model!: Action;
  protected getModel(): Action {
    return this.model;
  }

  get buttonClassName(): string {
    const className = new CssClassBuilder()
      .append("svc-menu-action__button")
      .append("svc-menu-action__button--selected", !!this.model.active)
      .toString();
    return className
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-button", TabButtonComponent);