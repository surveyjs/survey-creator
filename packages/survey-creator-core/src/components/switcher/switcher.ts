import { Action, CssClassBuilder, property } from "survey-core";

require("./switcher.scss");

export class Switcher extends Action {
  @property() checked: boolean;

  public getSwitcherIconCss(): string {
    return new CssClassBuilder()
      .append("svc-switcher__icon")
      .append("svc-switcher__icon--checked", this.checked)
      .toString();
  }
}