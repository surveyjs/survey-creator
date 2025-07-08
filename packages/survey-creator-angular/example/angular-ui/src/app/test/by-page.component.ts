import { Component, ViewEncapsulation } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";

@Component({
  selector: "test-by-page",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestByPageComponent extends TestDefaultComponent {
  protected override createCreator(): void {
    this.creator = new SurveyCreatorModel({ expandCollapseButtonVisibility: "never", showLogicTab: true, showTranslationTab: true, pageEditMode: "bypage" });
    this.creator.tabResponsivenessMode = "menu";
    this.creator["animationEnabled"] = false;
    this.creator.showOneCategoryInPropertyGrid = false;
    this.creator.allowZoom = false;
  }
}