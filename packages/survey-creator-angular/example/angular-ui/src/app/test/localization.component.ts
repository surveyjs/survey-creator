import { Component, ViewEncapsulation } from "@angular/core";
import { SurveyCreatorModel, localization } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
import SurveyCreatorTestTheme from "survey-creator-core/themes/test";

@Component({
  selector: "test-by-page",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestLocalizationComponent extends TestDefaultComponent {
  protected override createCreator(): void {
    const loc = localization.getLocale("de");
    loc.tabs.logic = "Miner Logik";
    localization.currentLocale = "de";
    this.creator = new SurveyCreatorModel({ expandCollapseButtonVisibility: "never", showLogicTab: true, showTranslationTab: true });
    this.creator.tabResponsivenessMode = "menu";
    this.creator["animationEnabled"] = false;
    this.creator.showOneCategoryInPropertyGrid = false;
    this.creator.allowZoom = false;
    this.creator.applyCreatorTheme(SurveyCreatorTestTheme);
  }
}