import { Component, ViewEncapsulation } from "@angular/core";
import { registerCreatorTheme, SurveyCreatorModel } from "survey-creator-core";
import { settings } from "survey-core";
import { TestDefaultComponent } from "./default.component";
import { UIPresetEditor } from "survey-creator-core/ui-preset-editor";
import SurveyCreatorTestTheme from "survey-creator-core/themes/test";
import SurveyCreatorUIPreset from "survey-creator-core/ui-presets";
import { registerUIPreset } from 'survey-creator-core';
registerUIPreset(SurveyCreatorUIPreset);
registerCreatorTheme(SurveyCreatorTestTheme);
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
    this.creator.applyCreatorTheme(SurveyCreatorTestTheme);
    this.creator.tabResponsivenessMode = "menu";
    this.creator["animationEnabled"] = false;
    settings.animationEnabled = false;
    this.creator.allowZoom = false;
    this.creator.showOneCategoryInPropertyGrid = true;
    new UIPresetEditor(this.creator);
  }
}

