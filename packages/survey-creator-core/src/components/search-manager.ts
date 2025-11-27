import { Action, ActionContainer, Base, ComputedUpdater, property } from "survey-core";
import { getLocString } from "../editorLocalization";

export abstract class SearchManager extends Base {
  public searchActionBar: ActionContainer = new ActionContainer();
  public get filterStringPlaceholder(): string { return this.getFilterStringPlaceholder(); }
  @property() filterString: string;
  @property() isVisible: boolean;
  @property() matchCounterText: string;

  protected getSearchActions() {
    return [new Action({
      id: "svd-grid-search-close",
      css: "sv-action--grid-search-close",
      iconName: "icon-clear_16x16",
      component: "sv-action-bar-item",
      title: getLocString("ed.clear"),
      showTitle: false,
      iconSize: "auto",
      disableTabStop: true,
      innerCss: "svc-search__bar-item",
      visible: <any>new ComputedUpdater(() => !!this.filterString),
      action: () => {
        this.clearFilterString();
      }
    })];
  }
  initActionBar() {
    this.searchActionBar.setItems(this.getSearchActions());
  }
  public clearFilterString(): void {
    this.filterString = "";
  }

  private _enabled = true;
  public get enabled():boolean {
    return this._enabled;
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }
  public getTabIndex():number {
    return this.enabled ? 0 : -1;
  }

  protected abstract setFiterString(newValue: string, oldValue: string);
  protected abstract getFilterStringPlaceholder(): string;

  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);

    if (name === "filterString") {
      this.setFiterString(newValue, oldValue);
    }
  }

  constructor() {
    super();
    this.initActionBar();
  }

  dispose(): void {
    this.searchActionBar.dispose();
    super.dispose();
  }
}