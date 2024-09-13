import { Component, Input } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";
import { editorLocalization } from "survey-creator-core";

@Component({
  selector: "svc-surface-placeholder",
  templateUrl: "./surface-placeholder.component.html",
  styles: [":host { display: none; }"]
})
export class SurfacePlaceholderComponent extends EmbeddedViewContentComponent {
  @Input() name!: string;
  @Input() placeholderTitleText!: string;
  @Input() placeholderDescriptionText!: string;
}
AngularComponentFactory.Instance.registerComponent("svc-surface-placeholder", SurfacePlaceholderComponent);
