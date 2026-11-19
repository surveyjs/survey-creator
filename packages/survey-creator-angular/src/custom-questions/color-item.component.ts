import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular, SurveyBaseProviders } from "survey-angular-ui";
import { ItemValue } from "survey-core";

@Component({
  selector: "svc-color-item",
  templateUrl: "./color-item.component.html",
  styles: [":host { display: none }"],
  providers: SurveyBaseProviders
})
export class ColorItemComponent extends BaseAngular<ItemValue> {
  @Input() model!: ItemValue;
  protected override getModel(): ItemValue {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("color-item", ColorItemComponent);