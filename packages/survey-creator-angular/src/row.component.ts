import { Component, Input } from "@angular/core";
import { QuestionRowModel } from "survey-core";
import { SurveyCreatorModel, RowViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";
import { AngularComponentFactory } from "survey-angular-ui";

@Component({
  selector: "svc-row",
  templateUrl: "./row.component.html"
})
export class CreatorRowComponent extends CreatorModelComponent<RowViewModel> {
  @Input() componentData!: { creator: SurveyCreatorModel, row: QuestionRowModel };

  public model!: RowViewModel;

  public get row() {
    return this.componentData.row;
  }
  public get creator() {
    return this.componentData.creator;
  }
  protected getModel(): RowViewModel {
    return this.model;
  }
  createModel() {
    this.model = new RowViewModel(this.creator, this.row, <any>undefined);
    this.model.subscribeElementChanges();
  }
  getPropertiesToTrack(): string[] {
    return ["creator", "row"];
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.model.dispose();
  }

}

AngularComponentFactory.Instance.registerComponent("svc-row", CreatorRowComponent);