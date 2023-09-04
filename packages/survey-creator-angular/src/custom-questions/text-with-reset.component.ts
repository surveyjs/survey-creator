import { Component } from "@angular/core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";
import { QuestionCommentWithResetModel, QuestionTextWithResetModel } from "survey-creator-core";

@Component({
  templateUrl: "./text-with-reset.component.html",
  selector: "svc-text-with-reset"
})
export class QuestionTextWithResetComponent extends QuestionAngular<QuestionTextWithResetModel | QuestionCommentWithResetModel> {
  getComponentName() {
    return this.model.wrappedQuestionTemplate + "-question";
  }
}
AngularComponentFactory.Instance.registerComponent("textwithreset-question", QuestionTextWithResetComponent);
AngularComponentFactory.Instance.registerComponent("commentwithreset-question", QuestionTextWithResetComponent);