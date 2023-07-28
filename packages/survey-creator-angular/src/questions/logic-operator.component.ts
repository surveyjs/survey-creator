import { Component } from "@angular/core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";
import { DropdownListModel, QuestionDropdownModel, RendererFactory } from "survey-core";
import { initLogicOperator } from "survey-creator-core";

@Component({
  selector: "svc-logic-operator",
  templateUrl: "./logic-operator.component.html",
  styles: [":host { display: none; }"]
})
export class LogicOperatorComponent extends QuestionAngular<QuestionDropdownModel> {
  private dropdownListModel?: DropdownListModel;
  get dropdownModel(): DropdownListModel | undefined {
    return this.dropdownListModel;
  }
  click(event: any) {
    this.dropdownListModel?.onClick(event);
  }
  clear(event: any) {
    this.dropdownListModel?.onClear(event);
  }
  keyup(event: any) {
    this.dropdownListModel?.keyHandler(event);
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.dropdownListModel = this.model.dropdownListModel || new DropdownListModel(this.model);
    initLogicOperator(this.model);
  }
}
AngularComponentFactory.Instance.registerComponent("sv-logic-operator", LogicOperatorComponent);

RendererFactory.Instance.registerRenderer("dropdown", "logicoperator", "sv-logic-operator");