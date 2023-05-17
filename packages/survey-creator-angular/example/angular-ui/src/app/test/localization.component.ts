import { Component, ViewEncapsulation } from "@angular/core";
import { CreatorBase, localization } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";

@Component({
  selector: "test-by-page",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestLocalizationComponent extends TestDefaultComponent {
  protected override createCreator(): void {
    const loc = localization.getLocale("de");
    loc.ed.logic = "Miner Logik";
    localization.currentLocale = "de";
    this.creator = new CreatorBase({ showLogicTab: true, showTranslationTab: true, haveCommercialLicense: true });
  }
}