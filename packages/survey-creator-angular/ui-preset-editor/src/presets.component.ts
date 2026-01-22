import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { SurveyCreatorModel } from "survey-creator-core";

@Component({
  selector: "svc-tab-presets",
  templateUrl: "./presets.component.html",
  styles: [":host { display: none; }"]
})
export class TabPresetsComponent extends BaseAngular<any> {
  @Input() model: any = undefined;
  public get survey() {
    return this.model.model;
  }
  public get navigationBar() {
    return this.model.navigationBar;
  }
  public get creator() {
    return this.model.creator;
  }
  protected getModel() {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-tab-presets", TabPresetsComponent);
