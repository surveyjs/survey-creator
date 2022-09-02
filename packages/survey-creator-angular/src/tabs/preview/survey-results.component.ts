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
  protected createModel(): any {
    if (!!this.survey) {
      return new SurveyResultsModel(this.survey);
    }
    return null;
  }
  protected getPropertiesToTrack(): string[] {
    return ["survey"];
  }
}