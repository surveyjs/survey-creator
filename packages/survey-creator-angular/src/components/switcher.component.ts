import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyBaseProviders } from "survey-angular-ui";

@Component({
  selector: "svc-switcher",
  templateUrl: "./switcher.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class SwitcherComponent extends BaseAngular {
  @Input() model: any;

  getModel() {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-switcher", SwitcherComponent);

