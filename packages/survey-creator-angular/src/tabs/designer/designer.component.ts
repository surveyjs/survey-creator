import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyBaseProviders } from "survey-angular-ui";
import { PageModel } from "survey-core";
import { cssVariablesToString, TabDesignerViewModel } from "survey-creator-core";

@Component({
  selector: "svc-tab-designer",
  templateUrl: "./designer.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class DesignerTabComponent extends BaseAngular<TabDesignerViewModel> {
  @Input() model!: TabDesignerViewModel;
  public get survey() {
    return this.creator.survey;
  }
  public get creator() {
    return this.model.creator;
  }
  protected getModel(): TabDesignerViewModel {
    return this.model;
  }
  public trackPageBy(index: number, page: PageModel): string {
    return page.id;
  }
  public get surfaceCssVariablesString(): string {
    const styles = { ...this.model.surfaceCssVariables, ["max-width"]: this.survey.renderedWidth || "" };
    return cssVariablesToString(styles);
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-designer", DesignerTabComponent);