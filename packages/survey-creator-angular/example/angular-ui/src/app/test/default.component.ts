import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CreatorBase } from "survey-creator-core";
import * as SurveyCreatorCore from "survey-creator-core";
import * as Survey from "survey-core";

@Component({
  selector: "test-default",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestDefaultComponent implements OnInit {
  public creator!: CreatorBase;
  ngOnInit(): void {
    this.createCreator();
    (<any>window).creator = this.creator;
    (<any>window).Survey = Survey;
    (<any>window).SurveyCreatorCore = SurveyCreatorCore;
  }
  protected getSlk(): boolean { return true; }
  protected createCreator(): void {
    if (this.getSlk()) {
      Survey.slk("YjA3ZGFkZTMtNjU5NS00YTYxLTkzZmEtYWJiOThjMWVhNjk3OzE9MjAzNC0xMC0xNiwyPTIwMzQtMTAtMTYsND0yMDM0LTEwLTE2");
    }
    this.creator = new CreatorBase({ showLogicTab: true, showTranslationTab: true });
  }
}