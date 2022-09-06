import { ChangeDetectorRef, Component, KeyValueDiffers, ViewContainerRef } from "@angular/core";
import { BaseAngular } from "survey-angular-ui";
import { Base } from "survey-core";

@Component({
  template: ""
})
export abstract class CreatorModelComponent<T extends Base> extends BaseAngular<T> {
  public createdModel!: T;
  protected abstract createModel(): T;
  protected abstract getPropertiesToTrack(): string[];

  private hash: { [index: string]: any } = {};

  private createHash() {
    this.getPropertiesToTrack().forEach((prop: string) => {
      this.hash[prop] = (<any>this)[prop];
    });
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.createHash();
  }

  getModel() {
    if (this.needUpdateModel())
      this.createdModel = this.createModel();
    return this.createdModel;
  }
  needUpdateModel(): boolean {
    if (!this.createdModel) return true;
    if (Object.keys(this.hash).some(key => this.hash[key] != (<any>this)[key])) {
      return true;
    }
    return false;
  }
}