import { Component, ViewEncapsulation } from "@angular/core";
import { registerCreatorTheme, SurveyCreatorModel } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
import SurveyCreatorTheme from "survey-creator-core/themes";

registerCreatorTheme(SurveyCreatorTheme);

@Component({
  selector: "creator-themes-preview",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class CreatorThemesComponent extends TestDefaultComponent {
  constructor() {
    super();
  }
  protected override createCreator(): void {
    this.creator = new SurveyCreatorModel({ expandCollapseButtonVisibility: "never", showLogicTab: true, showTranslationTab: true });
  
    this.creator.tabResponsivenessMode = "menu";
    this.creator["animationEnabled"] = false;
    this.creator.showOneCategoryInPropertyGrid = true;
    this.creator.allowZoom = true;
  }
}