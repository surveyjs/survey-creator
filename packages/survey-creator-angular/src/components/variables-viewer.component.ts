import { Component, Input } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";
import { VariablesViewerModel } from "survey-creator-core";

@Component({
  selector: "svc-variables-viewer",
  templateUrl: "./variables-viewer.component.html",
  styles: [":host { display: none; }"]
})
export class VariablesViewerComponent extends EmbeddedViewContentComponent {
  @Input() model!: VariablesViewerModel;
}
AngularComponentFactory.Instance.registerComponent("svc-variables-viewer", VariablesViewerComponent);
