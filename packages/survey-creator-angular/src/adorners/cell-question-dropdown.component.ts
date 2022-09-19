import { Component, Input } from "@angular/core";
import { ItemValue, QuestionDropdownModel } from "survey-core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { QuestionAdornerViewModel } from "survey-creator-core";

@Component({
  selector: "svc-cell-dropdown-question",
  templateUrl: "./cell-question-dropdown.component.html",
  styles: [":host { display: none; }"]
})
export class CellQuestionDropdownComponent extends BaseAngular<QuestionDropdownModel> {
  @Input() componentName!: string;
  @Input() componentData!: any;
  protected getModel(): QuestionDropdownModel {
    return this.model;
  }
  public get model(): QuestionDropdownModel {
    return this.componentData.model;
  }
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