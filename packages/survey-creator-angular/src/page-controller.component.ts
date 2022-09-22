import { Component, Input } from "@angular/core";
import { QuestionRowModel, SurveyModel } from "survey-core";
import { CreatorBase, PagesController, RowViewModel, TabDesignerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-page-controller",
  templateUrl: "./page-controller.component.html",
  styles: [":host { display: none; }"]
})
export class PagesControllerComponent extends BaseAngular<PagesController> {
  @Input() model!: TabDesignerViewModel;
  protected getModel(): PagesController {
    return this.model.pagesController;
  }
  public get creator() {
    return this.model.creator;
  }
  public get survey() {
    return this.creator.survey;
  }
}