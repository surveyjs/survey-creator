import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { QuestionCarryForwardParams } from "survey-creator-core";

@Component({
  selector: "svc-question-carryforward",
  templateUrl: "./question-carryforward.component.html",
  styles: [":host { display: none }"]
})
export class QuestionCarryForwardComponent extends EmbeddedViewContentComponent {
  @Input() model!: QuestionCarryForwardParams;
}

AngularComponentFactory.Instance.registerComponent("svc-question-carryforward", QuestionCarryForwardComponent);

