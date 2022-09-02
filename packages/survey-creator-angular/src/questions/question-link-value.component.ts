import { Component, Input } from "@angular/core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";
import { editorLocalization, QuestionLinkValueModel } from "survey-creator-core";

@Component({
  selector: "svc-link-value",
  templateUrl: "./question-link-value.component.html",
  styles: [":host { display: none; }"]
})
export class LinkValueQuestionComponent extends QuestionAngular<QuestionLinkValueModel> {
  get clearCaption() {
    return editorLocalization.getString("pe.clear");
  }
}

AngularComponentFactory.Instance.registerComponent("linkvalue-question", LinkValueQuestionComponent);
