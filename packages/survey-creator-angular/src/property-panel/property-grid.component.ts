import { PropertyGridViewModel } from "survey-creator-core";
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular, ButtonGroupQuestionComponent } from "survey-angular-ui";

@Component({
  selector: "svc-property-grid",
  templateUrl: "./property-grid.component.html",
  styles: [":host { display: none; }"]
})
export class PropertyGridComponent extends BaseAngular<PropertyGridViewModel> {
  @Input() model!: PropertyGridViewModel;
  protected getModel(): PropertyGridViewModel {
    return this.model;
  }
  protected override getPropertiesToUpdateSync(): Array<string> {
    return ["survey"];
  }
}
AngularComponentFactory.Instance.registerComponent("buttongroup-question", ButtonGroupQuestionComponent);
AngularComponentFactory.Instance.registerComponent("svc-property-grid", PropertyGridComponent);