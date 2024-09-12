import { Component, Input } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { ActionContainer } from "survey-core";
import { MenuButton } from "survey-creator-core";

@Component({
  selector: "svc-tabs",
  templateUrl: "./tabs.component.html",
  styles: [":host { display: none; }"]
})
export class TabsComponent extends BaseAngular<ActionContainer<MenuButton>> {
  @Input() model!: ActionContainer<MenuButton>;
  protected getModel(): ActionContainer<MenuButton> {
    return this.model;
  }
}