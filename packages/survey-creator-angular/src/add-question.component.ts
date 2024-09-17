import { Component, Input } from "@angular/core";
import { ActionBarItemComponent, AngularComponentFactory } from "survey-angular-ui";
import { CreatorModelComponent } from "./creator-model.component";
import { Base } from "survey-core";

@Component(
  {
    selector: "svc-add-new-question-btn",
    templateUrl: "./add-question.component.html",
    styles: [":host { display: none; }"]
  }
)
export class AddQuestionButtonComponent extends CreatorModelComponent<Base> {
  protected override getPropertiesToTrack(): string[] {
    return [];
  }
  protected override createModel(): void {
  }
  protected override getModel(): Base {
    return this.model.data;
  }
  @Input() model!: any;
  @Input() buttonClass?: string = "svc-btn";
  @Input() renderPopup?: boolean = true;
  public get adorner() {
    return this.model.data;
  }
  public addNewQuestion(event: any) {
    event.stopPropagation();
    this.adorner.addNewQuestion(this.adorner, event);
  }
}
AngularComponentFactory.Instance.registerComponent("svc-add-new-question-btn", AddQuestionButtonComponent);