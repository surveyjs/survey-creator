import { Component, NgZone, OnInit, ViewEncapsulation } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import * as SurveyCreatorCore from "survey-creator-core";
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
  constructor(private zone?: NgZone) {
  }
  ngOnInit(): void {
    if (this.getSlk()) {
      Survey.slk("YjA3ZGFkZTMtNjU5NS00YTYxLTkzZmEtYWJiOThjMWVhNjk3OzE9MjAzNC0xMC0xNiwyPTIwMzQtMTAtMTYsND0yMDM0LTEwLTE2");
    }
    this.createCreator();
    (<any>window).updateCreatorModel = (options: any, json: any) => {
      this.zone && this.zone.run(() => {
        (<any>window).prevCreator = this.creator;
        this.creator = new SurveyCreatorModel(options);
        this.creator.showOneCategoryInPropertyGrid = false;
        this.creator.allowZoom = false;
        this.creator.JSON = json;
        (<any>window).creator = this.creator;
      });
    };
    (<any>window).prevCreator = undefined;
    (<any>window).creator = this.creator;
    (<any>window).Survey = Survey;
    (<any>window).SurveyCreatorCore = SurveyCreatorCore;
  }
  protected getSlk(): boolean { return true; }
  protected createCreator(): void {
    this.creator = new SurveyCreatorModel({ expandCollapseButtonVisibility: "never", showLogicTab: true, showTranslationTab: true });
    this.creator.tabResponsivenessMode = "menu";
    this.creator["animationEnabled"] = false;
    this.creator.showOneCategoryInPropertyGrid = false;
    this.creator.allowZoom = false;
  }
}