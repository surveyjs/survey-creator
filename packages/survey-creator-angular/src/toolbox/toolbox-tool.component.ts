import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { CreatorModelComponent } from "../creator-model.component";
import { SurveyCreatorModel, ToolboxToolViewModel, QuestionToolboxItem } from "survey-creator-core";
import { Action, ActionContainer } from "survey-core";

@Component({
  selector: "svc-toolbox-tool",
  templateUrl: "./toolbox-tool.component.html",
  styles: [":host { display: none; }"]
})
export class ToolboxToolComponent extends CreatorModelComponent<Action> implements AfterViewInit {
  @Input() creator!: SurveyCreatorModel;
  @Input() item!: Action;
  @Input() parentModel!: ActionContainer;
  @Input() isCompact: boolean = false;
  @ViewChild("container") container!: ElementRef<HTMLDivElement>;
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
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.model.dispose();
    this.item.updateModeCallback = undefined as any;
  }
  ngAfterViewInit(): void {
    if(this.item) {
      this.item.updateModeCallback = (mode, callback) => {
        this.item.mode = mode;
        callback(mode, this.container?.nativeElement);
      };
      queueMicrotask(() => {
        this.item.afterRender();
      });
    }
  }

}
