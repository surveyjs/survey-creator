import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-switcher",
  templateUrl: "./switcher.component.html",
  styles: [":host { display: none; }"]
})
export class SwitcherComponent extends BaseAngular {
  @Input() model: any;

  getModel() {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-switcher", SwitcherComponent);

