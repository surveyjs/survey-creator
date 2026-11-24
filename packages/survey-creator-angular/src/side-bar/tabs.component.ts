import { Component, Input } from "@angular/core";
import { BaseAngular, SurveyBaseProviders } from "survey-angular-ui";
import { Action, ActionContainer } from "survey-core";
@Component({
  selector: "svc-tabs",
  templateUrl: "./tabs.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class TabsComponent extends BaseAngular<ActionContainer<Action>> {
  @Input() model!: ActionContainer<Action>;
  protected getModel(): ActionContainer<Action> {
    return this.model;
  }
}