import { PropertyGridViewModel } from "survey-creator-core";
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { QuestionFactory, QuestionButtonGroupModel } from "survey-core";

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
}

QuestionFactory.Instance.registerQuestion("buttongroup", (name) => {
  var q = new QuestionButtonGroupModel(name);
  q.choices = QuestionFactory.DefaultChoices;
  return q;
});

AngularComponentFactory.Instance.registerComponent("svc-property-grid", PropertyGridComponent);