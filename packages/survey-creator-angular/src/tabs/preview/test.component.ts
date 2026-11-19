import { TestSurveyTabViewModel } from "survey-creator-core";
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyBaseProviders } from "survey-angular-ui";

@Component({
  selector: "svc-tab-preview",
  templateUrl: "./test.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class TestTabComponent extends BaseAngular<TestSurveyTabViewModel> {
  @Input() model!: TestSurveyTabViewModel;
  protected getModel(): TestSurveyTabViewModel {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-tab-preview", TestTabComponent);
