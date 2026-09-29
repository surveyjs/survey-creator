import { Action, toCssClasses, property } from "survey-core";

import "./switcher.scss";

export class Switcher extends Action {
  @property() checked: boolean;

  public getSwitcherIconCss(): string {
    return toCssClasses("svc-switcher__icon", this.checked && "svc-switcher__icon--checked");
  }

  public getActionBarItemCss(): string {
    return "svc-switcher " + super.getActionBarItemCss();
  }
}