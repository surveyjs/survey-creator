import { Component, Input } from "@angular/core";
import { CreatorModelComponent } from "../creator-model.component";
import { CreatorBase, IQuestionToolboxItem, ToolboxToolViewModel } from "survey-creator-core";
import { Action } from "survey-core";

@Component({
  selector: "svc-toolbox-tool",
  templateUrl: "./toolbox-tool.component.html",
  styles: [":host { display: none; }"]
})
export class ToolboxToolComponent extends CreatorModelComponent<Action> {
  @Input() creator!: CreatorBase;
  @Input() item!: Action;
  @Input() isCompact: boolean = false;
  public model!: ToolboxToolViewModel;
  createModel() {
    this.model = new ToolboxToolViewModel(<any>this.item, this.creator);
  }
  protected getPropertiesToTrack(): string[] {
    return ["creator", "item"];
  }
  protected getModel(): Action {
    return this.item;
  }
  protected override getPropertiesToUpdateSync(): string[] {
    return ["mode"];
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.model.dispose();
  }
}
