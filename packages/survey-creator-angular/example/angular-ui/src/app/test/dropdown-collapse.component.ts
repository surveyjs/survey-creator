import { Component, ViewEncapsulation } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
@Component({
  selector: "test-dropdown-collapse",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestDropdownCollapseComponent extends TestDefaultComponent {
  protected override getSlk(): boolean { return false; }
  protected override createCreator(): void {
    this.creator = new SurveyCreatorModel({ expandCollapseButtonVisibility: "never", maxVisibleChoices: 5 });
    this.creator.tabResponsivenessMode = "menu";
    this.creator["animationEnabled"] = false;
    this.creator.showOneCategoryInPropertyGrid = false;
    this.creator.allowZoom = false;
  }
}