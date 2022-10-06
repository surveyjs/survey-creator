import { ChangeDetectorRef, Component, KeyValueDiffers, ViewContainerRef } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { Base } from "survey-core";

@Component({
  template: ""
})
export abstract class CreatorModelComponent<T extends Base> extends BaseAngular<T> {
  protected abstract getPropertiesToTrack(): string[];
  protected abstract createModel(): void;

  private hash!: { [index: string]: any };

  private createHash() {
    this.hash = {};
    this.getPropertiesToTrack().forEach((prop: string) => {
      this.hash[prop] = (<any>this)[prop];
    });
  }

  override ngOnInit(): void {
    this.createModel();
    this.createHash();
    super.ngOnInit();
  }
  override ngDoCheck(): void {
    if (this.needUpdateModel())
      this.createModel();
    super.ngDoCheck();
  }
  needUpdateModel(): boolean {
    let res = false;
    Object.keys(this.hash).forEach(key => {
      if (this.hash[key] != (<any>this)[key]) {
        this.hash[key] = (<any>this)[key];
        res = true;
      }
    });
    return res;
  }
}