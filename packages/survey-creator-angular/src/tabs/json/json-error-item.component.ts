import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyBaseProviders } from "survey-angular-ui";
import { Action } from "survey-core";

@Component({
  selector: "svc-json-error-item",
  templateUrl: "./json-error-item.component.html",
  styles: [":host { display: none }"],
  providers: SurveyBaseProviders
})
export class JsonErrorItemComponent extends BaseAngular<Action> {
  @Input() model!: Action;
  protected override getModel(): Action {
    return this.model;
  }

  // the list cancels mousedown, which also cancels a text selection
  onTitleMouseDown(event: Event) {
    event.stopPropagation();
  }
}

AngularComponentFactory.Instance.registerComponent("json-error-item", JsonErrorItemComponent);