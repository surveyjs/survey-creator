import { Component, Input } from "@angular/core";
import { QuestionRowModel } from "survey-core";
import { SurveyCreatorModel, RowViewModel } from "survey-creator-core";
import { CreatorModelComponent, compareComponentData } from "./creator-model.component";
import { AngularComponentFactory, SurveyBaseProviders } from "survey-angular-ui";
import { SimpleChanges } from "@angular/core";

@Component({
  selector: "svc-row",
  templateUrl: "./row.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
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
  protected override shouldUpdateModel(changes: SimpleChanges) {
    return compareComponentData(changes, ["row", "creator"], "componentData");
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.model.dispose();
  }

}

AngularComponentFactory.Instance.registerComponent("svc-row", CreatorRowComponent);