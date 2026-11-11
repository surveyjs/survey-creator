import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyBaseProviders } from "survey-angular-ui";
import { Action } from "survey-core";

@Component({
  selector: "svc-translate-from-action",
  templateUrl: "./translate-from-action.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class TranslateFromAction extends BaseAngular<Action> {
  @Input() model!: Action;

  protected getModel(): Action {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-translate-from-action", TranslateFromAction);

