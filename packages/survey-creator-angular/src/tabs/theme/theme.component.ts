import { ThemeTabViewModel } from "survey-creator-core";
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-tab-theme",
  templateUrl: "./theme.component.html",
  styles: [":host { display: none; }"]
})
export class ThemeTabComponent extends BaseAngular<ThemeTabViewModel> {
  @Input() model!: ThemeTabViewModel;
  protected getModel(): ThemeTabViewModel {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-theme", ThemeTabComponent);
