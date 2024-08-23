import { Component, Input } from "@angular/core";
import { ActionBarItemComponent, AngularComponentFactory } from "survey-angular-ui";
import { CreatorModelComponent } from "./creator-model.component";
import { Base } from "survey-core";

@Component(
  {
    selector: "svc-add-question-type-selector",
    templateUrl: "./add-question-type-selector.component.html",
    styles: [":host { display: none; }"]
  }
)
export class AddQuestionTypeSelectorComponent extends CreatorModelComponent<Base> {
  protected override getPropertiesToTrack(): string[] {
    return [];
  }
  protected override createModel(): void {
  }
  protected override getModel(): Base {
    return this.questionTypeSelectorModel;
  }
  @Input() questionTypeSelectorModel!: any;
  @Input() renderPopup?: boolean = true;
  public selectQuestionType(event: any) {
    event.stopPropagation();
    this.questionTypeSelectorModel.action();
  }
}
AngularComponentFactory.Instance.registerComponent("svc-add-question-type-selector", AddQuestionTypeSelectorComponent);