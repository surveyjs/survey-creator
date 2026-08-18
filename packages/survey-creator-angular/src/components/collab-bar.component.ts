import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-collab-bar",
  templateUrl: "./collab-bar.component.html",
  styles: [":host { display: none; }"]
})
export class CollabBarComponent extends BaseAngular {
  @Input() model: any;

  getModel() {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-collab-bar", CollabBarComponent);
