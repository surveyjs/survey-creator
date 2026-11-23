import { Component, SimpleChange, SimpleChanges } from "@angular/core";
import { BaseAngular, SurveyBaseProviders } from "survey-angular-ui";
import { Base } from "survey-core";

export function compareComponentData(changes: SimpleChanges, props: Array<string>, componentDataProp: string) {
  return props.some(key => changes[componentDataProp]?.previousValue?.[key] !== changes[componentDataProp]?.currentValue?.[key]);
}

@Component({
  template: "",
  providers: SurveyBaseProviders
})
export abstract class CreatorModelComponent<T extends Base> extends BaseAngular<T> {
  protected abstract createModel(): void;

  override ngOnInit(): void {
    this.createModel();
    super.ngOnInit();
  }
  protected getPropertiesToTrack(): string[] {
    return [];
  }
  protected shouldUpdateModel(changes: SimpleChanges) {
    return this.getPropertiesToTrack().some(key => !!changes[key]);
  }
  override ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges();
    if (this.shouldUpdateModel(changes)) {
      this.createModel();
    }
  }
}