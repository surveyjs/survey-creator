import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";
import { Action } from "survey-core";

@Component({
  selector: "svc-image-item-drag-action",
  templateUrl: "./image-item-drag-action.component.html",
  styles: [":host { display: none; }"]
})
export class ImageItemDragActionComponent extends BaseAngular {
  @Input() model!: Action;
  getModel() {
    return this.model as Action;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-image-item-drag-action", ImageItemDragActionComponent);