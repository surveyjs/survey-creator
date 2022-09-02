import { Component, Input } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { Action } from "survey-core";
import { SurveyResultsItemModel } from "survey-creator-core";

@Component({
  selector: "survey-results-table-row",
  templateUrl: "./survey-results-row.component.html",
  styles: [":host { display: none; }"]
})
export class SurveyResultsTableRowComponent extends BaseAngular<SurveyResultsItemModel> {
  @Input() model!: SurveyResultsItemModel;
  protected getModel(): SurveyResultsItemModel {
    return this.model;
  }
}