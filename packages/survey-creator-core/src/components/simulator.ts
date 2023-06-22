import { Base, CssClassBuilder, property, SurveyModel } from "survey-core";

require("./simulator.scss");

export class SurveySimulatorModel extends Base {
  constructor() {
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

  @property({ defaultValue: true }) landscape: boolean;
  @property() survey: SurveyModel;
  @property({ defaultValue: "desktop" }) device: string;
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
  }
  public deactivateZoom = () => {
    document.removeEventListener("keydown", this.listenTryToZoom);
    document.removeEventListener("wheel", this.listenTryToZoomWithWheel);
  }
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

  public get hasFrame(): boolean {
    var device = simulatorDevices[this.activeDevice];
    return this.simulatorEnabled && device.deviceType !== "desktop";
  }

  public get simulatorFrame() {
    if (!this.hasFrame) {
      return undefined;
    }
    const device = simulatorDevices[this.activeDevice];
    const scale = 1;//DEFAULT_MONITOR_DPI / device.ppi;

    const deviceWidth = (this.landscapeOrientation ? device.height : device.width) / device.cssPixelRatio;
    const deviceHeight = (this.landscapeOrientation ? device.width : device.height) / device.cssPixelRatio;
    const deviceLandscapedFrameWidth = (this.landscapeOrientation ? device.frameHeight : device.frameWidth) / device.cssPixelRatio;
    const deviceLandscapedFrameHeight = (this.landscapeOrientation ? device.frameWidth : device.frameHeight) / device.cssPixelRatio;
    const frameWidth = deviceLandscapedFrameWidth * scale;
    const frameHeight = deviceLandscapedFrameHeight * scale;

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
export var simulatorDevices = {
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
  //   frameWidth: 730,
  //   frameHeight: 1340,
  //   deviceType: "phone",
  //   title: "iPhone",
  //   cssClass: "svd-simulator-iphone4"
  // },
  // iPhone5: {
  //   cssPixelRatio: 2,
  //   ppi: 326,
  //   width: 640,
  //   height: 1136,
  //   frameWidth: 750,
  //   frameHeight: 1500,
  //   deviceType: "phone",
  //   title: "iPhone 5",
  //   cssClass: "svd-simulator-iphone5",
  // },
  iPhone6: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 750,
    height: 1334,
    frameWidth: 960,
    frameHeight: 1750,
    deviceType: "phone",
    title: "iPhone 6",
    cssClass: "svd-simulator-iphone6",
  },
  iPhone6plus: {
    cssPixelRatio: 2.6,
    ppi: 401,
    width: 1080,
    height: 1920,
    frameWidth: 1330,
    frameHeight: 2550,
    deviceType: "phone",
    title: "iPhone 6 Plus",
    cssClass: "svd-simulator-iphone6plus",
  },
  iPhone8: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 750,
    height: 1334,
    frameWidth: 990,
    frameHeight: 1860,
    deviceType: "phone",
    title: "iPhone 8",
    cssClass: "svd-simulator-iphone8",
  },
  iPhone8plus: {
    cssPixelRatio: 3,
    ppi: 401,
    width: 1080,
    height: 1920,
    frameWidth: 1330,
    frameHeight: 2550,
    deviceType: "phone",
    title: "iPhone 8 Plus",
    cssClass: "svd-simulator-iphone8plus",
  },
  iPhoneX: {
    cssPixelRatio: 3,
    ppi: 458,
    width: 1125,
    height: 2436,
    frameWidth: 1330,
    frameHeight: 2680,
    deviceType: "phone",
    title: "iPhone X",
    cssClass: "svd-simulator-iphonex",
  },
  iPhoneXmax: {
    cssPixelRatio: 3,
    ppi: 458,
    width: 1242,
    height: 2688,
    frameWidth: 1410,
    frameHeight: 2980,
    deviceType: "phone",
    title: "iPhone X Max",
    cssClass: "svd-simulator-iphonexmax",
  },
  iPad: {
    cssPixelRatio: 2,
    ppi: 264,
    width: 1536,
    height: 2048,
    frameWidth: 1837,
    frameHeight: 2563,
    deviceType: "tablet",
    title: "iPad",
    cssClass: "svd-simulator-ipad",
  },
  iPadMini: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 1536,
    height: 2048,
    frameWidth: 1890,
    frameHeight: 2600,
    deviceType: "tablet",
    title: "iPad Mini",
    cssClass: "svd-simulator-ipadmini",
  },
  iPadPro: {
    cssPixelRatio: 2,
    ppi: 264,
    width: 1688,
    height: 2388,
    frameWidth: 2008,
    frameHeight: 2980,
    deviceType: "tablet",
    title: 'iPad Pro 11"',
    cssClass: "svd-simulator-ipadpro",
  },
  iPadPro13: {
    cssPixelRatio: 2,
    ppi: 264,
    width: 2048,
    height: 2732,
    frameWidth: 2360,
    frameHeight: 3300,
    deviceType: "tablet",
    title: 'iPad Pro 12,9"',
    cssClass: "svd-simulator-ipadpro13",
  },
  androidPhone: {
    cssPixelRatio: 2,
    ppi: 316,
    width: 720,
    height: 1280,
    frameWidth: 850,
    frameHeight: 1630,
    deviceType: "phone",
    title: "Android Phone",
    cssClass: "svd-simulator-androidphone",
  },
  androidTablet: {
    cssPixelRatio: 1.5,
    ppi: 149,
    width: 800,
    height: 1280,
    frameWidth: 1070,
    frameHeight: 1480,
    deviceType: "tablet",
    title: "Android Tablet",
    cssClass: "svd-simulator-androidtablet",
  },
  win10Phone: {
    cssPixelRatio: 2,
    ppi: 294,
    width: 720,
    height: 1280,
    frameWidth: 1152,
    frameHeight: 2030,
    deviceType: "phone",
    title: "Windows 10 Phone",
    cssClass: "svd-simulator-win10phone",
  },
  msSurface: {
    cssPixelRatio: 1,
    ppi: 148,
    width: 768,
    height: 1366,
    frameWidth: 1040,
    frameHeight: 1620,
    deviceType: "tablet",
    title: "MS Surface",
    cssClass: "svd-simulator-mssurface",
  },
  genericPhone: {
    cssPixelRatio: 1,
    deviceType: "phone",
    title: "",
    cssClass: "svd-simulator-genphone",
  },
};
