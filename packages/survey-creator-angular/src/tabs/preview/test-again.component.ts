import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { Action } from "survey-core";
import { TestSurveyTabViewModel } from "survey-creator-core";

@Component({
  selector: "survey-test-again",
  templateUrl: "./test-again.component.html",
  styles: [":host { display: none; }"]
})
export class TestAgainActionComponent extends BaseAngular<Action> {
  @Input() model!: { testAgainAction: Action };
  protected getModel(): Action {
    return this.model.testAgainAction;
  }
  get action() {
    return this.getModel();
  }
}
AngularComponentFactory.Instance.registerComponent("svc-complete-page", TestAgainActionComponent);