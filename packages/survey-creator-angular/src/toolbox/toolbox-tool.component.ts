import { Component, Input } from "@angular/core";
import { CreatorModelComponent } from "../creator-model.component";
import { SurveyCreatorModel, ToolboxToolViewModel, QuestionToolboxItem } from "survey-creator-core";
import { Action, ActionContainer } from "survey-core";

@Component({
  selector: "svc-toolbox-tool",
  templateUrl: "./toolbox-tool.component.html",
  styles: [":host { display: none; }"]
})
export class ToolboxToolComponent extends CreatorModelComponent<Action> {
  @Input() creator!: SurveyCreatorModel;
  @Input() item!: Action;
  @Input() parentModel!: ActionContainer;
  @Input() isCompact: boolean = false;
  public model!: ToolboxToolViewModel;
  createModel() {
    this.model = new ToolboxToolViewModel(<any>this.item, this.creator, this.parentModel);
  }
  protected getPropertiesToTrack(): string[] {
    return ["creator", "item"];
  }
  protected getModel(): Action {
    return this.item;
  }
  public get itemCssClasses() {
    return (this.item as QuestionToolboxItem).css;
  }
  protected override getPropertiesToUpdateSync(): string[] {
    return ["mode"];
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.model.dispose();
  }
}
