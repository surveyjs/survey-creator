import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { SurveyLogicUI } from "survey-creator-core";

@Component({
  selector: "svc-tab-logic",
  templateUrl: "./logic.component.html",
  styles: [":host { display: none; }"]
})
export class LogicTabComponent extends BaseAngular<SurveyLogicUI> {
  @Input() model!: SurveyLogicUI;

  protected getModel(): SurveyLogicUI {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-logic", LogicTabComponent);

