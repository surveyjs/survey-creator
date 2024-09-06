import { Component, Input } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { ActionContainer } from "survey-core";

@Component({
  selector: "svc-tabs",
  templateUrl: "./tabs.component.html",
  styles: [":host { display: none; }"]
})
export class TabsComponent extends BaseAngular<ActionContainer> {
  @Input() model!: ActionContainer;
  protected getModel(): ActionContainer {
    return this.model;
  }
}