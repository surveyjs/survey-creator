import { Component, Input } from "@angular/core";
import { ToolboxToolViewModel, SurveyCreatorModel, IQuestionToolboxItem } from "survey-creator-core";
import { BaseAngular, AngularComponentFactory } from "survey-angular-ui";

@Component({
  selector: "svc-toolbox-item-group",
  templateUrl: "./toolbox-item-group.component.html",
  styles: [":host { display: none; }"]
})
export class ToolboxItemGroupComponent extends BaseAngular<ToolboxToolViewModel> {
  @Input() creator!: SurveyCreatorModel;
  @Input() model!: IQuestionToolboxItem;
  @Input() isCompact: boolean = false;
  @Input() viewModel!: ToolboxToolViewModel
  protected getModel(): ToolboxToolViewModel {
    return this.viewModel;
  }
  public get item() {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-toolbox-item-group", ToolboxItemGroupComponent);
