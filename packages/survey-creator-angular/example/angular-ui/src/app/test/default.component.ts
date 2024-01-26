import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import * as SurveyCreatorCore from "survey-creator-core";
import * as Survey from "survey-core";

@Component({
  selector: "test-default",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestDefaultComponent implements OnInit {
  public creator!: SurveyCreatorModel;
  ngOnInit(): void {
    if (this.getSlk()) {
      Survey.slk("YjA3ZGFkZTMtNjU5NS00YTYxLTkzZmEtYWJiOThjMWVhNjk3OzE9MjAzNC0xMC0xNiwyPTIwMzQtMTAtMTYsND0yMDM0LTEwLTE2");
    }
    this.createCreator();
    (<any>window).creator = this.creator;
    (<any>window).Survey = Survey;
    (<any>window).SurveyCreatorCore = SurveyCreatorCore;
  }
  protected getSlk(): boolean { return true; }
  protected createCreator(): void {
    this.creator = new SurveyCreatorModel({ showLogicTab: true, showTranslationTab: true });
  }
}