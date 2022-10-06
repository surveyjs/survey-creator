import { Component, ViewEncapsulation } from "@angular/core";
import { TestDefaultComponent } from "./default.component";
import { StylesManager } from "survey-core";
import * as SurveyCore from "survey-core";
import * as widgets from "surveyjs-widgets";
import "icheck";
@Component({
  selector: "test-custom-widget",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestCustomWidgetComponent extends TestDefaultComponent {
  constructor() {
    super();
    StylesManager.applyTheme("default");
    widgets.sortablejs(SurveyCore);
  }
}