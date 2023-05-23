import { ThemeSurveyTabViewModel } from "survey-creator-core";
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-tab-theme",
  templateUrl: "./theme.component.html",
  styles: [":host { display: none; }"]
})
export class ThemeTabComponent extends BaseAngular<ThemeSurveyTabViewModel> {
  @Input() model!: ThemeSurveyTabViewModel;
  protected getModel(): ThemeSurveyTabViewModel {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-theme", ThemeTabComponent);
