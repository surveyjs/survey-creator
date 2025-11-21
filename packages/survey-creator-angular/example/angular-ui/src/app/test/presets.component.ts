import { Component, ViewEncapsulation } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import { settings } from "survey-core";
import { TestDefaultComponent } from "./default.component";
import { TabPresetsPlugin } from "survey-creator-core/presets";
@Component({
  selector: "test-theme-preview",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class PresetsComponent extends TestDefaultComponent {
  constructor() {
    super();
  }
  protected override getSlk(): boolean { return true }
  protected override createCreator(): void {
    this.creator = new SurveyCreatorModel({ expandCollapseButtonVisibility: "never", showLogicTab: true, showTranslationTab: true, showJSONEditorTab: false });
    this.creator.tabResponsivenessMode = "menu";
    this.creator["animationEnabled"] = false;
    settings.animationEnabled = false;
    this.creator.allowZoom = false;
    this.creator.showOneCategoryInPropertyGrid = true;
    new TabPresetsPlugin(this.creator);
  }
}