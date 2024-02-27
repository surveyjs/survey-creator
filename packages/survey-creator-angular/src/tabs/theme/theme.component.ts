import { ThemeEditorModel } from "survey-creator-core";
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-tab-theme",
  templateUrl: "./theme.component.html",
  styles: [":host { display: none; }"]
})
export class ThemeTabComponent extends BaseAngular<ThemeEditorModel> {
  @Input() model!: ThemeEditorModel;
  protected getModel(): ThemeEditorModel {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-theme", ThemeTabComponent);
