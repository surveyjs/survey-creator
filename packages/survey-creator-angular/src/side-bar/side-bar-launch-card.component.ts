import { Component, Input } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";

@Component({
  selector: "svc-side-bar-launch-card",
  templateUrl: "./side-bar-launch-card.component.html",
  styles: [":host { display: none; }"]
})
export class SideBarLaunchCardComponent extends EmbeddedViewContentComponent {
  @Input() model!: { onClick: () => void, title: string, description: string };
}

AngularComponentFactory.Instance.registerComponent("svc-side-bar-launch-card", SideBarLaunchCardComponent);
