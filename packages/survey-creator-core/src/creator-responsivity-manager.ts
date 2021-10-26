import { CreatorBase } from "./creator-base";

export class CreatorResponsivityManager {
  private resizeObserver: ResizeObserver = undefined;
  private screenWidth: { [key: string]: number } = {
    "xxl": 1920,
    "xl": 1280,
    "l": 960,
    "m": 768,
    "s": 376,
  }
  private getScreenWidth(): string {
    let res;
    Object.keys(this.screenWidth).forEach((mode: string) => {
      if (!res && this.container && !!this.screenWidth[mode] && this.container.offsetWidth >= this.screenWidth[mode]) {
        res = mode;
      }
    });
    return res || "xs";
  }

  constructor(protected container: HTMLDivElement, private creator: CreatorBase) {
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver((_) => this.process());
      this.resizeObserver.observe(this.container.parentElement);
    }

  }

  process() {
    const currentWidth = this.getScreenWidth();
    if (currentWidth === "xl" || currentWidth === "xxl") {
      this.creator.toolbox.isCompact = false;
      this.creator.toolbox.visible = true;
    } else if (currentWidth === "m" || currentWidth === "l") {
      this.creator.toolbox.isCompact = true;
      this.creator.toolbox.visible = true;
    } else {
      this.creator.toolbox.isCompact = true;
      this.creator.toolbox.visible = false;
    }
  }

  public dispose(): void {
    if (!!this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
