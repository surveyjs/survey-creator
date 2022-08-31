import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { ObjectSelectorModel, SidebarTabModel } from "survey-creator-core";

@Component({
  selector: "svc-object-selector",
  templateUrl: "./object-selector.component.html",
  styles: [":host { display: none; }"]
})
export class ObjectSelectorComponent extends BaseAngular<ObjectSelectorModel> {
  @Input() model!: ObjectSelectorModel;
  protected getModel(): ObjectSelectorModel {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-object-selector", ObjectSelectorComponent);