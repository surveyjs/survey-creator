import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

// See the React CollabRow for what this renders. Presentation only, no events.
@Component({
  selector: "svc-collab-row",
  templateUrl: "./collab-row.component.html",
  styles: [":host { display: none; }"]
})
export class CollabRowComponent extends BaseAngular {
  // sv-list hands the action over as `model`, while the React and Vue list
  // renderers name it `item` - an inconsistency in survey-library. The
  // ComponentContainerModel elements built in creator-core therefore pass the
  // row under BOTH names, and each framework reads the one it expects.
  @Input() model: any;

  getModel() {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-collab-row", CollabRowComponent);
