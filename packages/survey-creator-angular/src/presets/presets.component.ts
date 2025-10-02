import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { SurveyCreatorModel } from "survey-creator-core";

@Component({
  selector: "svc-tab-presets",
  templateUrl: "./presets.component.html",
  styles: [":host { display: none; }"]
})
export class TabPresetsComponent extends BaseAngular<any> {
  @Input() data: any = undefined;
  @Input() creator: SurveyCreatorModel = undefined;

  get model() {
    return this.data?.model;
  }

  protected getModel() {
    return this.data;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-tab-presets", TabPresetsComponent);
