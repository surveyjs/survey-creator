import {
  AdaptiveActionContainer,
  Action,
  ResponsivityManager,
  UpdateResponsivenessMode
} from "survey-core";
class SurveyElementResponsivityManager extends ResponsivityManager {
  constructor(container: HTMLDivElement, model: SurveyElementActionContainer) {
    super(container, model);
  }
  shouldProcessResponsiveness(): boolean {
    return (this["model"] as SurveyElementActionContainer).isResponsivenessAllowed && super.shouldProcessResponsiveness();
  }
}
export class SurveyElementActionContainer extends AdaptiveActionContainer {
  public alwaysShrink = false;
  protected responsivityManager: SurveyElementResponsivityManager;

  private needToShrink(item: Action, shrinkTypeConverterAction: boolean) {
    return (item.innerItem.location == "start" && shrinkTypeConverterAction || item.innerItem.location != "start");
  }
  private setModeForActions(shrinkTypeConverterAction: boolean, exclude: string[] = []): void {
    this.visibleActions.forEach((item) => {
      if (exclude.indexOf(item.id) != -1) {
        item.mode = "removed";
        return;
      }
      if (this.needToShrink(item, shrinkTypeConverterAction)) {
        item.mode = item.canShrink ? "small" : "removed";
        return;
      }
      item.mode = "large";
    });
  }
  private calcItemSize(item: Action, shrinkTypeConverterAction: boolean, exclude: string[] = []) {
    if (exclude.indexOf(item.id) != -1) return 0;
    if (this.needToShrink(item, shrinkTypeConverterAction)) {
      if (!item.canShrink) return 0;
      return item.minDimension;
    }
    return item.maxDimension;
  }

  constructor() {
    super();
    this.dotsItem.iconSize = "auto" as any;
    this.dotsItem.popupModel.cssClass += " svc-creator-popup";
  }

  public fit(options: { availableSpace: number, gap?: number }) {
    if (options.availableSpace <= 0) return;
    options.gap = options.gap ?? 0;
    const { availableSpace, gap } = options;

    this.dotsItem.visible = false;
    const items = this.visibleActions;

    const calcItemsSpace = (items: Action[], calc: (item: Action) => number) => {
      return items.reduce((sum, item) => {
        const itemSize = calc(item);
        return sum + (!itemSize ? itemSize : itemSize + gap);
      }, 0) - gap;
    };

    if (!this.alwaysShrink) {
      if (availableSpace >= calcItemsSpace(items, i => i.maxDimension)) {
        items.forEach(i => i.mode = "large");
        return;
      }

      if (availableSpace >= calcItemsSpace(items, i => this.calcItemSize(i, false))) {
        this.setModeForActions(false);
        return;
      }

      if (availableSpace >= calcItemsSpace(items, i => this.calcItemSize(i, false, ["convertInputType"]))) {
        this.setModeForActions(false, ["convertInputType"]);
        return;
      }
    }

    if (availableSpace >= calcItemsSpace(items, i => this.calcItemSize(i, true))) {
      this.setModeForActions(true);
      return;
    }
    if (this.visibleActions.length > 1) {
      this.visibleActions.forEach((item) => {
        if (item.id == "convertTo") {
          item.mode = "small";
          return;
        }
        if (item.id == "convertInputType") {
          item.mode = "removed";
          return;
        }
        item.mode = "popup";
      });
      this.dotsItem.visible = true;
    } else {
      this.visibleActions.forEach(i => i.mode = "small");
    }

    this.hiddenItemsListModel.setItems(items.filter(i => i.mode == "popup").map(i => i.innerItem));
  }
  private _isResponsivenessAllowed: boolean = false;
  allowResponsiveness() {
    if (!this._isResponsivenessAllowed) {
      this._isResponsivenessAllowed = true;
      this.raiseUpdate({ updateResponsivenessMode: UpdateResponsivenessMode.Hard });
    }
  }
  public get isResponsivenessAllowed() {
    return this._isResponsivenessAllowed;
  }
  protected createResponsivityManager(container: HTMLDivElement): ResponsivityManager {
    return new SurveyElementResponsivityManager(container, this);
  }
}
