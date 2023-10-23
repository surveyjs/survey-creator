import { Component, ViewEncapsulation } from "@angular/core";
import { CreatorBase, localization } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
import * as Survey from "survey-core";

Survey.slk("YjA3ZGFkZTMtNjU5NS00YTYxLTkzZmEtYWJiOThjMWVhNjk3OzE9MjAzNC0xMC0xNiwyPTIwMzQtMTAtMTYsND0yMDM0LTEwLTE2");

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
    this.creator = new CreatorBase({ showLogicTab: true, showTranslationTab: true });
  }
}