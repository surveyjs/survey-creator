import { Component, SimpleChanges } from "@angular/core";
import { BaseAngular, SurveyBaseProviders } from "survey-angular-ui";
import { Base } from "survey-core";

@Component({
  template: "",
  providers: SurveyBaseProviders
})
export abstract class CreatorModelComponent<T extends Base> extends BaseAngular<T> {
  protected abstract getPropertiesToTrack(): string[];
  protected abstract createModel(): void;

  override ngOnInit(): void {
    this.createModel();
    super.ngOnInit();
  }
  override ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges();
    if (this.getPropertiesToTrack().some(key => !!changes[key])) {
      this.createModel();
    }
  }
}