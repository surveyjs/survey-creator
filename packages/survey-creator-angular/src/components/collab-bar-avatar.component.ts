import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-collab-bar-avatar",
  templateUrl: "./collab-bar-avatar.component.html",
  styles: [":host { display: none; }"]
})
export class CollabBarAvatarComponent extends BaseAngular {
  @Input() model: any;

  getModel() {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-collab-bar-avatar", CollabBarAvatarComponent);
