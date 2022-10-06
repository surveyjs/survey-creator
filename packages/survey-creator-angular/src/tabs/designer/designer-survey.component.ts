import { Component, Input } from "@angular/core";
import { SurveyModel } from "survey-core";
import { TabDesignerViewModel } from "survey-creator-core";
import { BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-designer-survey",
  templateUrl: "./designer-survey.component.html",
  styles: [":host { display: none; }"]
})
export class DesignerSurveyComponent extends BaseAngular<SurveyModel> {
  @Input() model!: TabDesignerViewModel;
  protected getModel(): SurveyModel {
    return this.model.survey;
  }
  public get creator() {
    return this.model.creator;
  }
  public get survey() {
    return this.creator.survey;
  }
}