import { Component, ViewEncapsulation } from "@angular/core";
import { CreatorBase } from "survey-creator-core";
import { TestComponent } from "./test.component";
@Component({
  selector: "test-by-page",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class TestByPageComponent extends TestComponent {
  protected override createCreator(): void {
    this.creator = new CreatorBase({ showLogicTab: true, showTranslationTab: true, pageEditMode: "bypage", haveCommercialLicense: true });
  }
}