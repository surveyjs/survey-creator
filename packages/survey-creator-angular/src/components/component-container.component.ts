import { Component, Input } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";
import { ComponentContainerModel } from "survey-creator-core";

@Component({
  selector: "svc-component-container",
  templateUrl: "./component-container.component.html",
  styles: [":host { display: none; }"]
})
export class ComponentContainerComponent extends EmbeddedViewContentComponent {
  @Input() model!: ComponentContainerModel;
}
AngularComponentFactory.Instance.registerComponent("svc-component-container", ComponentContainerComponent);