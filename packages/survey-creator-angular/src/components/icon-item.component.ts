import { Component, Input } from "@angular/core";
import { ItemValue } from "survey-core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";

@Component({
  selector: "svc-icon-item",
  templateUrl: "./icon-item.component.html",
  styles: [":host { display: none; }"]
})
export class IconItemComponent extends EmbeddedViewContentComponent {
  @Input() model!: ItemValue;
}

AngularComponentFactory.Instance.registerComponent("svc-presets-icon-item", IconItemComponent);
