import { Component, ViewEncapsulation } from "@angular/core";
import { CreatorBase } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
@Component({
  selector: "test-theme-preview",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ThemeTabComponent extends TestDefaultComponent {
  constructor() {
    super();
  }
  protected override createCreator(): void {
    this.creator = new CreatorBase({ showThemeTab: true });
  }
}