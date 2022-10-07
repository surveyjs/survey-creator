import { Component, Input } from "@angular/core";
import { Notifier } from "survey-creator-core";
import { BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-notifier",
  templateUrl: "./notifier.component.html",
  styles: [":host { display: none; }"]
})
export class NotifierComponent extends BaseAngular<Notifier> {
  @Input() notifier!: Notifier;
  getModel(): Notifier {
    return this.notifier;
  }
}