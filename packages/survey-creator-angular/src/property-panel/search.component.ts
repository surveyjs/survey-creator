import { SearchManager } from "survey-creator-core";
import { Component, Input } from "@angular/core";
import { AngularComponentFactory, BaseAngular } from "survey-angular-ui";

@Component({
  selector: "svc-search",
  templateUrl: "./search.component.html",
  styles: [":host { display: none; }"]
})
export class SearchComponent extends BaseAngular<SearchManager> {
  @Input() model!: SearchManager;
  protected getModel(): SearchManager {
    return this.model;
  }
}
AngularComponentFactory.Instance.registerComponent("svc-search", SearchComponent);