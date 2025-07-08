import { Action, CssClassBuilder, property } from "survey-core";

import "./switcher.scss";

export class Switcher extends Action {
  @property() checked: boolean;

  public getSwitcherIconCss(): string {
    return new CssClassBuilder()
      .append("svc-switcher__icon")
      .append("svc-switcher__icon--checked", this.checked)
      .toString();
  }

  public getActionBarItemCss(): string {
    return "svc-switcher " + super.getActionBarItemCss();
  }
}