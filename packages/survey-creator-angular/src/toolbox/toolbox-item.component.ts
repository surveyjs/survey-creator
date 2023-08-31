import { Component, Input } from "@angular/core";
import { ToolboxToolViewModel, CreatorBase, IQuestionToolboxItem } from "survey-creator-core";
import { BaseAngular, AngularComponentFactory } from "survey-angular-ui";

@Component({
  selector: "svc-toolbox-item",
  templateUrl: "./toolbox-item.component.html",
  styles: [":host { display: none; }"]
})
export class ToolboxItemComponent extends BaseAngular<ToolboxToolViewModel> {
  @Input() creator!: CreatorBase;
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
AngularComponentFactory.Instance.registerComponent("svc-toolbox-item", ToolboxItemComponent);
