import { Component, Input } from "@angular/core";
import { Question } from "survey-core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-cell-question",
  templateUrl: "./cell-question.component.html",
  styles: [":host { display: none; }"]
})
export class CellQuestionComponent<T extends Question> extends BaseAngular<T> {
  @Input() componentName!: string;
  @Input() componentData!: any;
  protected getModel(): T {
    return this.model;
  }
  public get model(): T {
    return this.componentData.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-cell-question", CellQuestionComponent);