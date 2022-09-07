import { Component, Input } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { QuestionToolbox, QuestionToolboxCategory } from "survey-creator-core";

@Component({
  selector: "svc-toolbox-category ",
  templateUrl: "./toolbox-category.component.html",
  styles: [":host { display: none; }"]
})
export class ToolboxCategoryComponent extends BaseAngular<QuestionToolboxCategory> {
  @Input() category!: QuestionToolboxCategory;
  @Input() toolbox!: QuestionToolbox;
  getModel() {
    return this.category;
  }
}
