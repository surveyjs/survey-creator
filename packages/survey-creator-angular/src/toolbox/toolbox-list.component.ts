import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { ListModel } from "survey-core";
import { QuestionToolbox } from "survey-creator-core";

@Component({
  selector: "svc-toolbox-list ",
  templateUrl: "./toolbox-list.component.html",
  styles: [":host { display: none; }"]
})
export class ToolboxListComponent extends BaseAngular<ListModel> {
  @Input() model!: ListModel;
  @Input() toolbox!: QuestionToolbox;

  getModel() {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-toolbox-list", ToolboxListComponent);