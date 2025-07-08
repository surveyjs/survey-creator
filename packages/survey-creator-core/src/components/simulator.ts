import { Base, CssClassBuilder, property, SurveyModel } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";

import "./simulator.scss";

export class SurveySimulatorModel extends Base {
  private surveyChanged() {
    const _this = this;
    this.survey.onOpenDropdownMenu.add((_, options) => {
      if (this.surveyProvider.isTouch) return;
      const device = simulatorDevices[_this.activeDevice];
      options.menuType = device.deviceType === "desktop" ? "dropdown" : (device.deviceType == "tablet" ? "popup" : "overlay");
    });
  }
  private updateSimulatorStyle(): void {
    const device = simulatorDevices[this.activeDevice];
    const deviceHeight = (this.landscapeOrientation ? device.width : device.height) / device.cssPixelRatio;

    const simulator = this.surveyProvider.rootElement?.getElementsByClassName("svd-simulator-content")[0] as HTMLElement;
    if (!!simulator) {
      let overlayHeight = undefined;
      if (device.deviceType === "tablet") {
        overlayHeight = `${deviceHeight * this.scale}px`;
      } else if (device.deviceType === "phone") {
        overlayHeight = "100%";
      }

      if (!!overlayHeight) {
        simulator.style.setProperty("--sv-popup-overlay-height", overlayHeight);
      } else {
        simulator.style.removeProperty("--sv-popup-overlay-height");
      }
    }
  }

  constructor(private surveyProvider: SurveyCreatorModel) {
    super();
    // if (!!_toolbarHolder) {
    //   this.simulatorOptions.survey = this._toolbarHolder.koSurvey;
    //   ko.computed(() => {
    //     this.simulatorEnabled = _toolbarHolder.showSimulator();
    //   });
    //   _toolbarHolder.toolbarItems.push({
    //     id: "svd-test-simulator",
    //     title: getLocString("pe.simulator"),
    //     visible: ko.computed(() => this.simulatorEnabled),
    //     tooltip: getLocString("pe.simulator"),
    //     component: "svd-dropdown",
    //     action: ko.computed({
    //       read: () => this.activeDevice,
    //       write: (val: any) => (this.activeDevice = val),
    //     }),
    //     items: <any>this.koDevices,
    //   });
    //   _toolbarHolder.toolbarItems.push({
    //     id: "svd-test-simulator-orientation",
    //     title: getLocString("pe.landscapeOrientation"),
    //     visible: this.koHasFrame,
    //     tooltip: getLocString("pe.landscapeOrientation"),
    //     component: "svd-boolean",
    //     action: ko.computed({
    //       read: () => this.landscapeOrientation,
    //       write: (val: any) => (this.landscapeOrientation = val),
    //     }),
    //   });
    // }
  }

  @property({ defaultValue: true,
    onSet: (newVal:string, targer: SurveySimulatorModel) => {
      targer.updateSimulatorStyle();
    }
  }) landscape: boolean;
  @property({
    onSet: (newVal: SurveyModel, target: SurveySimulatorModel) => { target.surveyChanged(); }
  }) survey: SurveyModel;
  @property({ defaultValue: "desktop",
    onSet: (newVal:string, targer: SurveySimulatorModel) => {
      targer.updateSimulatorStyle();
    }
  }) device: string;
  @property({ defaultValue: "l" }) orientation: string;
  @property({ defaultValue: true }) considerDPI: boolean;
  @property({ defaultValue: true }) isRunning: boolean;
  @property({ defaultValue: true }) simulatorEnabled: boolean;
  @property({ defaultValue: true }) simulatorScaleEnabled: boolean;

  private currZoomScale: number;
  public get zoomScale(): number {
    return this.currZoomScale;
  }
  public activateZoom = () => {
    document.addEventListener("keydown", this.listenTryToZoom);
    document.addEventListener("wheel", this.listenTryToZoomWithWheel, { passive: false });
  };
  public deactivateZoom = () => {
    document.removeEventListener("keydown", this.listenTryToZoom);
    document.removeEventListener("wheel", this.listenTryToZoomWithWheel);
  };
  private listenTryToZoomWithWheel = e => this.tryToZoomWithWheel(e, e);
  private tryToZoomWithWheel(data: any, event: any) {
    const diff: number = event.deltaY;
    if (event.ctrlKey || event.metaKey) {
      diff < 0 ? this.zoomSimulator("up", event) : this.zoomSimulator("down", event);
    }
    return true;
  }
  private listenTryToZoom = e => this.tryToZoom(e, e);
  public tryToZoom(data: any, event: any) {
    if (event.ctrlKey || event.metaKey) {
      if (event.keyCode == 107 || event.keyCode == 187) {
        this.zoomSimulator("up", event);
      }
      if (event.keyCode == 109 || event.keyCode == 189) {
        this.zoomSimulator("down", event);
      }
      if (event.keyCode == 48 || event.keyCode == 96) {
        this.zoomSimulator("zero", event);
      }
    }
    return true;
  }
  private changeZoomScale(type: "up" | "down" | "zero") {
    const coef: number = 1.01;
    const multiplier: number = type === "up" ? coef : (type === "down" ? 1 / coef : 1);
    this.currZoomScale = type === "zero" ? 1 : this.currZoomScale * multiplier;
  }
  private zoomSimulator(type: "up" | "down" | "zero", event: any) {
    event.preventDefault();

    this.changeZoomScale(type);

    const simulator = document.getElementById("svd-simulator-wrapper");
    if (!!simulator) simulator.style.transform = "scale(" + this.currZoomScale + ")";

    event.stopPropagation();
  }
  public resetZoomParameters(): void {
    this.currZoomScale = 1;
    const simulator = document.getElementById("svd-simulator-wrapper");
    if (!!simulator) simulator.style.transform = "";
  }

  public get activeDevice(): string {
    return this.device;
  }
  public set activeDevice(device: string) {
    this.device = device;
  }

  get landscapeOrientation(): boolean {
    return this.landscape;
  }
  // set landscapeOrientation(isLanscape: boolean) {
  //   this.landscape = isLanscape;
  // }

  get scale(): number {
    return 1;//DEFAULT_MONITOR_DPI / device.ppi
  }

  public get hasFrame(): boolean {
    var device = simulatorDevices[this.activeDevice];
    return this.simulatorEnabled && device.deviceType !== "desktop";
  }

  public get simulatorFrame() {
    if (!this.hasFrame) {
      return undefined;
    }
    const device = simulatorDevices[this.activeDevice];
    const scale = this.scale;

    const deviceWidth = (this.landscapeOrientation ? device.height : device.width) / device.cssPixelRatio;
    const deviceHeight = (this.landscapeOrientation ? device.width : device.height) / device.cssPixelRatio;
    const deviceLandscapedFrameWidth = (this.landscapeOrientation ? device.height : device.width) / device.cssPixelRatio;
    const deviceLandscapedFrameHeight = (this.landscapeOrientation ? device.width : device.height) / device.cssPixelRatio;
    const frameWidth = deviceLandscapedFrameWidth * scale + 2 * (this.landscapeOrientation ? 64 : 16);
    const frameHeight = deviceLandscapedFrameHeight * scale + 2 * (this.landscapeOrientation ? 16 : 64);

    return {
      scale: this.simulatorScaleEnabled ? scale /* * device.cssPixelRatio */ : 1,
      frameWidth: frameWidth,
      frameHeight: frameHeight,
      landscapedFrameWidth: this.landscapeOrientation ? frameHeight : frameWidth,
      landscapedFrameHeight: this.landscapeOrientation ? frameWidth : frameHeight,
      deviceWidth: deviceWidth,
      deviceHeight: deviceHeight,
      cssClass:
        device.cssClass +
        (this.landscapeOrientation ? " svd-simulator-frame-landscape" : ""),
    };
  }
  public getRootCss(): string {
    return new CssClassBuilder()
      .append("svd-simulator-main")
      .append("svd-simulator-main--frame", this.hasFrame)
      .append("svd-simulator-main--desktop", this.device === "desktop")
      .append("svd-simulator-main--running", this.isRunning)
      .toString();
  }
}

export var DEFAULT_MONITOR_DPI = (typeof window !== "undefined" ? window.devicePixelRatio : 1) * 96;
export var simulatorDevices: {
  [index: string]: {
    cssPixelRatio?: number,
    ppi?: number,
    width?: number,
    height?: number,
    deviceType: string,
    title: string,
    cssClass?: string,
    visibleIndex?: number,
  },
} = {
  desktop: {
    deviceType: "desktop",
    title: "Desktop",
  },
  // desktop_1280x720: {
  //   cssPixelRatio: 1,
  //   ppi: DEFAULT_MONITOR_DPI,
  //   width: 720,
  //   height: 1280,
  //   deviceType: "desktop",
  //   title: "Desktop 1280x720"
  // },
  // desktop_1440x900: {
  //   cssPixelRatio: 1,
  //   ppi: DEFAULT_MONITOR_DPI,
  //   width: 900,
  //   height: 1440,
  //   deviceType: "desktop",
  //   title: "Desktop 1440x900"
  // },
  // desktop_1920x1080: {
  //   cssPixelRatio: 1,
  //   ppi: DEFAULT_MONITOR_DPI,
  //   width: 1080,
  //   height: 1920,
  //   deviceType: "desktop",
  //   title: "Desktop 1920x1080"
  // },
  // iPhone: {
  //   cssPixelRatio: 2,
  //   ppi: 326,
  //   width: 640,
  //   height: 960,
  //   deviceType: "phone",
  //   title: "iPhone",
  //   cssClass: "svd-simulator-iphone4"
  // },
  // iPhone5: {
  //   cssPixelRatio: 2,
  //   ppi: 326,
  //   width: 640,
  //   height: 1136,
  //   deviceType: "phone",
  //   title: "iPhone 5",
  //   cssClass: "svd-simulator-iphone5",
  // },
  // iPhone6: {
  //   cssPixelRatio: 2,
  //   ppi: 326,
  //   width: 750,
  //   height: 1334,
  //   deviceType: "phone",
  //   title: "iPhone 6",
  //   cssClass: "svd-simulator-iphone6",
  // },
  // iPhone6plus: {
  //   cssPixelRatio: 2.6,
  //   ppi: 401,
  //   width: 1080,
  //   height: 1920,
  //   deviceType: "phone",
  //   title: "iPhone 6 Plus",
  //   cssClass: "svd-simulator-iphone6plus",
  // },
  // iPhone8: {
  //   cssPixelRatio: 2,
  //   ppi: 326,
  //   width: 750,
  //   height: 1334,
  //   deviceType: "phone",
  //   title: "iPhone 8",
  //   cssClass: "svd-simulator-iphone8",
  // },
  // iPhone8plus: {
  //   cssPixelRatio: 3,
  //   ppi: 401,
  //   width: 1080,
  //   height: 1920,
  //   deviceType: "phone",
  //   title: "iPhone 8 Plus",
  //   cssClass: "svd-simulator-iphone8plus",
  // },
  // iPhoneX: {
  //   cssPixelRatio: 3,
  //   ppi: 458,
  //   width: 1125,
  //   height: 2436,
  //   deviceType: "phone",
  //   title: "iPhone X",
  //   cssClass: "svd-simulator-iphonex",
  // },
  // iPhoneXmax: {
  //   cssPixelRatio: 3,
  //   ppi: 458,
  //   width: 1242,
  //   height: 2688,
  //   deviceType: "phone",
  //   title: "iPhone X Max",
  //   cssClass: "svd-simulator-iphonexmax",
  // },
  iPhoneSE: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 750,
    height: 1334,
    deviceType: "phone",
    title: "iPhone SE",
    cssClass: "svd-simulator-iphonexmax",
  },
  iPhone15: {
    cssPixelRatio: 3,
    ppi: 460,
    width: 1179,
    height: 2556,
    deviceType: "phone",
    title: "iPhone 15",
    cssClass: "svd-simulator-iphonexmax",
  },
  iPhone15Plus: {
    cssPixelRatio: 3,
    ppi: 460,
    width: 1290,
    height: 2796,
    deviceType: "phone",
    title: "iPhone 15 Plus",
    cssClass: "svd-simulator-iphonexmax",
  },
  iPadMini: {
    cssPixelRatio: 2.5,
    ppi: 326,
    width: 1536,
    height: 2048,
    deviceType: "tablet",
    title: "iPad Mini",
    cssClass: "svd-simulator-ipadmini",
  },
  iPad: {
    cssPixelRatio: 2,
    ppi: 264,
    width: 1640,
    height: 2360,
    deviceType: "tablet",
    title: "iPad Air",
    cssClass: "svd-simulator-ipad",
  },
  // iPadPro: {
  //   cssPixelRatio: 2,
  //   ppi: 264,
  //   width: 1688,
  //   height: 2388,
  //   deviceType: "tablet",
  //   title: 'iPad Pro 11"',
  //   cssClass: "svd-simulator-ipadpro",
  // },
  // iPadPro13: {
  //   cssPixelRatio: 2,
  //   ppi: 264,
  //   width: 2048,
  //   height: 2732,
  //   deviceType: "tablet",
  //   title: 'iPad Pro 12,9"',
  //   cssClass: "svd-simulator-ipadpro13",
  // },
  androidPhone: {
    cssPixelRatio: 3,
    ppi: 411,
    width: 1080,
    height: 2048,
    deviceType: "phone",
    title: "Android Phone",
    cssClass: "svd-simulator-androidphone",
  },
  androidTablet: {
    cssPixelRatio: 1.5,
    ppi: 149,
    width: 800,
    height: 1280,
    deviceType: "tablet",
    title: "Android Tablet",
    cssClass: "svd-simulator-androidtablet",
  },
  // win10Phone: {
  //   cssPixelRatio: 2,
  //   ppi: 294,
  //   width: 720,
  //   height: 1280,
  //   deviceType: "phone",
  //   title: "Windows 10 Phone",
  //   cssClass: "svd-simulator-win10phone",
  // },
  microsoftSurface: {
    cssPixelRatio: 1,
    ppi: 148,
    width: 768,
    height: 1366,
    deviceType: "tablet",
    title: "Microsoft Surface",
    cssClass: "svd-simulator-mssurface",
  },
  genericPhone: {
    cssPixelRatio: 1,
    deviceType: "phone",
    title: "",
    cssClass: "svd-simulator-genphone",
  },
};
