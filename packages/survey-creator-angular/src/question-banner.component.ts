import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { QuestionBannerParams } from "survey-creator-core";

@Component({
  selector: "svc-question-banner",
  templateUrl: "./question-banner.component.html",
  styles: [":host { display: none }"]
})
export class QuestionBannerComponent extends EmbeddedViewContentComponent {
  @Input() model!: QuestionBannerParams;
}

AngularComponentFactory.Instance.registerComponent("svc-question-banner", QuestionBannerComponent);

