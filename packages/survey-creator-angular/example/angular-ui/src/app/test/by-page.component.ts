import { Component, ViewEncapsulation } from "@angular/core";
import { CreatorBase } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
import { TestComponent } from "./test.component";
import * as Survey from "survey-core";

Survey.slk("YjA3ZGFkZTMtNjU5NS00YTYxLTkzZmEtYWJiOThjMWVhNjk3OzE9MjAzNC0xMC0xNiwyPTIwMzQtMTAtMTYsND0yMDM0LTEwLTE2");

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