import { Component, Input } from "@angular/core";
import { CreatorModelComponent } from "../../creator-model.component";
import { SurveyModel } from "survey-core";
import { SurveyResultsModel } from "survey-creator-core";

@Component({
  selector: "survey-results",
  templateUrl: "./survey-results.component.html",
  styles: [":host { display: none; }"]
})
export class SurveyResultsComponent extends CreatorModelComponent<SurveyResultsModel> {
  @Input() survey!: SurveyModel;
  public model!: SurveyResultsModel;

  public createModel(): void {
    if (!!this.survey) {
      this.model = new SurveyResultsModel(this.survey);
    }
  }
  protected getModel(): SurveyResultsModel {
    return this.model;
  }
  protected getPropertiesToTrack(): string[] {
    return ["survey"];
  }
}