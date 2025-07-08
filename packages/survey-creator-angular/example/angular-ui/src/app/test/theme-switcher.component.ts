import { Component, ViewEncapsulation } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";

@Component({
  selector: "test-theme-switcher",
  templateUrl: "./test.component.html",
  styleUrls: ["./theme-switcher.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class TestThemeSwitcherComponent extends TestDefaultComponent {
  protected override createCreator(): void {
    this.creator = new SurveyCreatorModel({});
    this.creator.showOneCategoryInPropertyGrid = false;
    this.creator.allowZoom = false;
  }
}