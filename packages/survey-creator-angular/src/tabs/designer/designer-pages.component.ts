import { Component, Input } from "@angular/core";
import { PagesController, TabDesignerViewModel } from "survey-creator-core";
import { BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-designer-pages",
  templateUrl: "./designer-pages.component.html",
  styles: [":host { display: none; }"]
})
export class DesignerPagesComponent extends BaseAngular<PagesController> {
  @Input() model!: TabDesignerViewModel;
  protected getModel(): PagesController {
    return this.model.pagesController;
  }
  public get creator() {
    return this.model.creator;
  }
  public get survey() {
    return this.creator.survey;
  }
}