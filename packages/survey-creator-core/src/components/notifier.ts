import { Base, property } from "survey-core";
import { settings } from "../settings";
import "./notifier.scss";

export class Notifier extends Base {
  @property({ defaultValue: false }) active;
  @property() message: string;
  @property() css: string;
  timeout = settings.notifications.lifetime;
  timer = undefined;

  notify(message: string, type: "info"|"error" = "info") {
    this.message = message;
    this.active = true;

    this.css = "svc-notifier";
    if(type === "error")
      this.css += " svc-notifier--error";
    if(!!this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
    this.timer = setTimeout(() => {
      this.timer = undefined;
      this.active = false;
    }, this.timeout);
  }
}
