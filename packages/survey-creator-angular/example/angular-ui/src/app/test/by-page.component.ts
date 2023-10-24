import { Component, ViewEncapsulation } from "@angular/core";
import { CreatorBase } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
import { TestComponent } from "./test.component";

@Component({
  selector: "test-by-page",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestByPageComponent extends TestDefaultComponent {
  protected override createCreator(): void {
    this.creator = new CreatorBase({ showLogicTab: true, showTranslationTab: true, pageEditMode: "bypage" });
  }
}