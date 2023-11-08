import { Component, ViewEncapsulation } from "@angular/core";
import { CreatorBase } from "survey-creator-core";
import { TestDefaultComponent } from "./default.component";
@Component({
  selector: "test-theme-preview",
  templateUrl: "./test.component.html",
  encapsulation: ViewEncapsulation.None
})
export class ThemeTabComponent extends TestDefaultComponent {
  constructor() {
    super();
  }
  protected override getSlk(): boolean { return false; }
  protected override createCreator(): void {
    this.creator = new CreatorBase({ showThemeTab: true });
  }
}