import { Component, Input } from "@angular/core";
import { BaseAngular, AngularComponentFactory, SurveyBaseProviders } from "survey-angular-ui";
import { TabControlModel } from "survey-creator-core";

@Component({
  selector: "svc-tab-control",
  templateUrl: "./tab-control.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class TabControlComponent extends BaseAngular<TabControlModel> {
  @Input() model!: TabControlModel;
  protected getModel(): TabControlModel {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-control", TabControlComponent);