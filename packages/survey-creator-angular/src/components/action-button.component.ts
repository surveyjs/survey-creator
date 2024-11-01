import { Component, Input } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";

@Component({
  selector: "svc-action-button",
  templateUrl: "./action-button.component.html",
  styles: [":host { display: none; }"]
})
export class ActionButtonComponent extends EmbeddedViewContentComponent {

  @Input() classes: string = "";
  @Input() click!: () => void;
  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Input() text: string = "";
  @Input() title: string = "";
  @Input() iconName: string = "";
  @Input() allowBubble: boolean = false;
  onClick(event: any) {
    this.click();
    if (!this.allowBubble) {
      event.stopPropagation();
    }
  }
}

AngularComponentFactory.Instance.registerComponent("svc-action-button", ActionButtonComponent);

