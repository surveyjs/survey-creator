import { Component, Input } from "@angular/core";
import { BaseAngular, AngularComponentFactory } from "survey-angular-ui";
import { Action } from "survey-core";
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
}
AngularComponentFactory.Instance.registerComponent("svc-tab-button", TabButtonComponent);