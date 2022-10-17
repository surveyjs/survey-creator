import { Component, ViewEncapsulation } from "@angular/core";
import { CreatorBase } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
@Component({
  selector: "test-dropdown-collapse",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class TestDropdownCollapseComponent extends TestDefaultComponent {
  protected override createCreator(): void {
    this.creator = new CreatorBase({ maxVisibleChoices: 5 });
  }
}