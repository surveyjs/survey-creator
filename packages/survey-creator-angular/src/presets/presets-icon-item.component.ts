import { Component, Input } from "@angular/core";
import { ItemValue } from "survey-core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";

@Component({
  selector: "svc-presets-icon-item",
  templateUrl: "./presets-icon-item.component.html",
  styles: [":host { display: none; }"]
})
export class PresetsIconItemComponent extends EmbeddedViewContentComponent {
  @Input() item?: ItemValue;
}

AngularComponentFactory.Instance.registerComponent("svc-presets-icon-item", PresetsIconItemComponent);
