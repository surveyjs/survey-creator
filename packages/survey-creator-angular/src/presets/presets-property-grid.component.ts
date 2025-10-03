import { Component, Input } from "@angular/core";
import { PropertyGridViewModel } from "survey-creator-core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-presets-property-grid",
  templateUrl: "./presets-property-grid.component.html",
  styles: [":host { display: none; }"]
})
export class PresetsPropertyGridWrapperComponent extends BaseAngular<PropertyGridViewModel> {
  @Input() model: PropertyGridViewModel = undefined;

  showPresets() {
    (this.model as any)["showPresets"]?.();
  }

  protected getModel() {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-presets-property-grid", PresetsPropertyGridWrapperComponent);