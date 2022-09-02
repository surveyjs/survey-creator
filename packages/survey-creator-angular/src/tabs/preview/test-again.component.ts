import { Component, Input } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { Action } from "survey-core";

@Component({
  selector: "survey-test-again",
  templateUrl: "./test-again.component.html",
  styles: [":host { display: none; }"]
})
export class TestAgainActionComponent extends BaseAngular<Action> {
  @Input() model!: Action;
  protected getModel(): Action {
    return this.model;
  }
}