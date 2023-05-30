import { Component } from "@angular/core";
import { ActionBarItemComponent, AngularComponentFactory } from "survey-angular-ui";

@Component(
  {
    selector: "svc-add-new-question-btn",
    templateUrl: "./page-add-question.component.html",
    styles: [":host { display: none; }"]
  }
)
export class AddQuestionButtonComponent extends ActionBarItemComponent {
  public get adorner() {
    return this.model.data;
  }
  public addNewQuestion(event: any) {
    event.stopPropagation();
    this.adorner.addNewQuestion(this.adorner, event);
  }
  public selectQuestionType(event: any) {
    event.stopPropagation();
    this.adorner.questionTypeSelectorModel.action();
  }
}
AngularComponentFactory.Instance.registerComponent("svc-add-new-question-btn", AddQuestionButtonComponent);