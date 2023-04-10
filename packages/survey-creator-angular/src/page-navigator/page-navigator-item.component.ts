import { Component, Input } from "@angular/core";
import { Action, IAction } from "survey-core";
import { BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-page-navigator-item",
  templateUrl: "./page-navigator-item.component.html",
  styles: [":host { display: none; }"]
})
export class PageNavigatorItemComponent extends BaseAngular<Action> {
  @Input() model!: Action | IAction;
  protected getModel(): Action {
    return this.model as Action;
  }
  get anyModel(): any {
    return this.model as any;
  }
  click(event: any) {
    this.getModel().action();
    event.stopPropagation();
    event.preventDefault();
  }
}