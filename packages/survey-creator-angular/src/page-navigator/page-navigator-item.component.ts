import { Component, Input } from "@angular/core";
import { Action } from "survey-core";
import { BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-page-navigator-item",
  templateUrl: "./page-navigator-item.component.html",
  styles: [":host { display: none; }"]
})
export class PageNavigatorItemComponent extends BaseAngular<Action> {
  @Input() model!: Action;
  protected getModel(): Action {
    return this.model;
  }
}