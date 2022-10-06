import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CreatorBase } from "survey-creator-core";
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
  }
  protected createCreator(): void {
    this.creator = new CreatorBase({ showLogicTab: true, showTranslationTab: true, haveCommercialLicense: true });
  }
}