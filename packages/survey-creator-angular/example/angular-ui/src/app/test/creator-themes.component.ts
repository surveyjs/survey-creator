import { Component, NgZone, ViewEncapsulation } from "@angular/core";
import { registerCreatorTheme, SurveyCreatorModel } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
import SurveyTheme from "survey-core/themes";

registerCreatorTheme(SurveyTheme);

@Component({
  selector: "creator-themes-preview",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class CreatorThemesComponent extends TestDefaultComponent {
  constructor(zone: NgZone) {
    super(zone);
  }
  protected override createCreator(): void {
    this.creator = new SurveyCreatorModel({ expandCollapseButtonVisibility: "never", showLogicTab: true, showTranslationTab: true });
    this.setupCreator(this.creator);
  }
  protected override setupCreator(creator: SurveyCreatorModel): void {
    creator.tabResponsivenessMode = "menu";
    creator["animationEnabled"] = false;
    creator.showOneCategoryInPropertyGrid = true;
    creator.allowZoom = true;
  }
}