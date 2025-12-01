import { Component, Input } from "@angular/core";
import { PageModel, SurveyModel } from "survey-core";
import { TabDesignerViewModel, cssVariablesToString } from "survey-creator-core";
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
  public trackPageBy(index: number, page: PageModel): string {
    return page.id;
  }
  public get surfaceCssVariablesString(): string {
    const styles = { ...this.model.surfaceCssVariables, maxWidth: this.survey.renderedWidth || "" };
    return cssVariablesToString(styles);
  }
}