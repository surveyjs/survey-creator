import { Component } from "@angular/core";
import { RendererFactory, QuestionCheckboxModel } from "survey-core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";

@Component({
  selector: "sv-ng-boolean-switch",
  templateUrl: "./boolean-switch.component.html"
})
export class BooleanSwitchComponent extends QuestionAngular<QuestionCheckboxModel> { }

AngularComponentFactory.Instance.registerComponent("sv-boolean-switch", BooleanSwitchComponent);
RendererFactory.Instance.registerRenderer(
  "boolean",
  "switch",
  "sv-boolean-switch"
);
