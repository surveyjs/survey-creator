import { Component } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";
import { editorLocalization } from "survey-creator-core";

@Component({
  selector: "svc-property-grid-placeholder",
  templateUrl: "./property-grid-placeholder.component.html",
  styles: [":host { display: none; }"]
})
export class PropertyGridPlaceholderComponent extends EmbeddedViewContentComponent {
  editorLocalization = editorLocalization;
}
AngularComponentFactory.Instance.registerComponent("svc-property-grid-placeholder", PropertyGridPlaceholderComponent);
