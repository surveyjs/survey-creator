import { Component } from "@angular/core";
import { ItemValue, QuestionDropdownModel } from "survey-core";
import { AngularComponentFactory } from "survey-angular-ui";
import { CellQuestionComponent } from "./cell-question.component";

@Component({
  selector: "svc-cell-dropdown-question",
  templateUrl: "./cell-question-dropdown.component.html",
  styles: [":host { display: none; }"]
})
export class CellQuestionDropdownComponent extends CellQuestionComponent<QuestionDropdownModel> {
  public getItemValueComponentName(item: ItemValue): string {
    return this.model.getItemValueWrapperComponentName(item) || "sv-ng-selectbase-item";
  }
  public getItemValueComponentData(item: ItemValue): any {
    return {
      componentName: "sv-ng-selectbase-item",
      componentData: {
        question: this.model,
        model: item,
        inputType: "radio",
        data: this.model.getItemValueWrapperComponentData(item)
      }
    };
  }
}
AngularComponentFactory.Instance.registerComponent("svc-cell-dropdown-question", CellQuestionDropdownComponent);