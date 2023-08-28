import { Component, Input } from "@angular/core";
import { ToolboxToolViewModel, CreatorBase, IQuestionToolboxItem, editorLocalization } from "survey-creator-core";
import { BaseAngular, AngularComponentFactory } from "survey-angular-ui";
import { Action } from "survey-core";

@Component({
  selector: "svc-toolbox-item",
  templateUrl: "./toolbox-item.component.html",
  styles: [":host { display: none; }"]
})
export class ToolboxItemComponent extends BaseAngular<ToolboxToolViewModel> {
  @Input() creator!: CreatorBase;
  @Input() model!: Action;
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
