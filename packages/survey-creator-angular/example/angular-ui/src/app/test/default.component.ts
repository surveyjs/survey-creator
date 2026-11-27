import { Component, NgZone, OnInit, ViewEncapsulation } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import * as SurveyCreatorCore from "survey-creator-core";
import * as SurveyCreatorUIPreset from "survey-creator-core/ui-presets";
import * as Survey from "survey-core";
import SurveyThemes from "survey-core/themes";
import "survey-core/survey.i18n";
import "survey-creator-core/survey-creator-core.i18n";
SurveyCreatorCore.registerSurveyTheme(SurveyThemes);
@Component({
  selector: "test-default",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestDefaultComponent implements OnInit {
  public creator!: SurveyCreatorModel;
  public creatorVisible = true;
  constructor(private zone?: NgZone) {
  }
  ngOnInit(): void {
    if (this.getSlk()) {
      Survey.slk("ZG9tYWluczoxMjcuMC4wLjE7MT0yMDM2LTAzLTE5LDI9MjAzNi0wMy0xOSw0PTIwMzYtMDMtMTksOD0yMDM2LTAzLTE5");
    }
    this.createCreator();
    (<any>window).creatorResetCount = 0;
    // Used by the e2e fixture (e2e/helper.ts) to reuse the default test page for the next test. After a test,
    // releaseCreatorForReuse() removes <survey-creator> (*ngIf) and disposes the creator (and the one
    // updateCreatorModel replaced); the next test's resetCreatorForReuse() builds the page's creator again with
    // createCreator() in a new <survey-creator>. Each bumps window.creatorResetCount once Angular has rendered it.
    // Swapping [model] on the mounted component instead breaks it after a selection (ViewContainerRef.move throws).
    // Both return false on the test pages built without NgZone (subclasses that call super()), where nothing would
    // re-render. The creators are disposed outside the zone, so an error there is an uncaught page error, not one
    // Angular's ErrorHandler only logs.
    (<any>window).releaseCreatorForReuse = () => {
      if (!this.zone) return false;
      const zone = this.zone;
      const oldCreators: Array<SurveyCreatorModel | undefined> = [this.creator, (<any>window).prevCreator];
      zone.run(() => {
        this.creatorVisible = false;
        zone.runOutsideAngular(() => setTimeout(() => {
          try {
            oldCreators.forEach(c => c && !c.isDisposed && c.dispose());
          } finally {
            (<any>window).creatorResetCount++;
          }
        }));
      });
      return true;
    };
    (<any>window).resetCreatorForReuse = () => {
      if (!this.zone) return false;
      this.zone.run(() => {
        this.createCreator();
        (<any>window).creator = this.creator;
        (<any>window).prevCreator = undefined;
        this.creatorVisible = true;
        setTimeout(() => (<any>window).creatorResetCount++);
      });
      return true;
    };
    (<any>window).updateCreatorModel = (options: any, json: any) => {
      this.zone && this.zone.run(() => {
        (<any>window).prevCreator = this.creator;
        this.creator = new SurveyCreatorModel(options);
        this.setupCreator(this.creator);
        this.creator.JSON = json;
        (<any>window).creator = this.creator;
      });
    };
    (<any>window).prevCreator = undefined;
    (<any>window).creator = this.creator;
    (<any>window).Survey = Survey;
    (<any>window).SurveyCreatorCore = SurveyCreatorCore;
    (<any>window).SurveyCreatorUIPreset = SurveyCreatorUIPreset;
  }
  protected getSlk(): boolean { return true; }
  protected createCreator(): void {
    this.creator = new SurveyCreatorModel({ expandCollapseButtonVisibility: "never", showLogicTab: true, showTranslationTab: true });
    this.setupCreator(this.creator);
  }
  protected setupCreator(creator: SurveyCreatorModel): void {
    creator.tabResponsivenessMode = "menu";
    creator["animationEnabled"] = false;
    creator.showOneCategoryInPropertyGrid = false;
    creator.allowZoom = false;
  }
}
