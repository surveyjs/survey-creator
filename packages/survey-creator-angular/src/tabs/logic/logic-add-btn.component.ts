import { Component, Input } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { Action } from "survey-core";
import { SurveyLogicUI } from "survey-creator-core";

@Component({
  selector: "svc-tab-logic-add-btn",
  templateUrl: "./logic-add-btn.component.html",
  styles: [":host { display: none; }"]
})
export class LogicAddButtonComponent extends BaseAngular<Action> {
  @Input() model!: Action;

  protected getModel(): Action {
    return this.model;
  }
  onClick(event: any) {
    event.stopPropagation();
    this.model.action();
  }
}

