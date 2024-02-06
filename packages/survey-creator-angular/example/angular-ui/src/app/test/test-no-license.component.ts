import { Component, ViewEncapsulation } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
@Component({
  selector: "test-theme-preview",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class NoLicenseComponent extends TestDefaultComponent {
  constructor() {
    super();
  }
  protected override getSlk(): boolean { return false; }
  protected override createCreator(): void {
    this.creator = new SurveyCreatorModel({ showLogicTab: true, showTranslationTab: true });
  }
}