import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-version-history",
  templateUrl: "./version-history.component.html",
  styles: [":host { display: none; }"]
})
export class VersionHistoryComponent extends BaseAngular {
  @Input() model: any;

  getModel() {
    return this.model;
  }

  // Row ids are stable across rebuilds, so ngFor keeps the DOM when only a
  // group's expansion changed.
  public trackByRowId(_index: number, row: any): string {
    return row.id;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-version-history", VersionHistoryComponent);
