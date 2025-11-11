import { Component, Input } from "@angular/core";
import { getLocString, PropertyGridViewModel } from "survey-creator-core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-presets-property-grid",
  templateUrl: "./presets-property-grid.component.html",
  styles: [":host { display: none; }"]
})
export class PresetsPropertyGridWrapperComponent extends BaseAngular<PropertyGridViewModel> {
  @Input() model?: PropertyGridViewModel;

  showPresets() {
    (this.model as any)["showPresets"]?.();
  }

  buttonTitle = getLocString("presets.plugin.buttonTitle");
  buttonDescription = getLocString("presets.plugin.buttonDescription");

  protected getModel(): PropertyGridViewModel {
    return this.model!;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-presets-property-grid", PresetsPropertyGridWrapperComponent);