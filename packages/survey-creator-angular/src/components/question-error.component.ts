import { Component, Input } from "@angular/core";
import { AngularComponentFactory } from "survey-angular-ui";
import { SurveyError } from "survey-core";

@Component({
  selector: "svc-question-error",
  templateUrl: "./question-error.component.html"
})
export class QuestionPgErrorComponent {
  @Input() error!: SurveyError;
  @Input() cssClasses?: any;
  @Input() element: any;
}
AngularComponentFactory.Instance.registerComponent("svc-question-error", QuestionPgErrorComponent);