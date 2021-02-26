import { Base, property, SurveyModel } from "survey-core";

import "./simulator.scss";

export class SimulatorOptions extends Base {
  @property({ defaultValue: true }) landscape: boolean;
  @property() survey: SurveyModel;
  @property({ defaultValue: "desktop" }) device: string;
  @property({ defaultValue: "l" }) orientation: string;
  @property({ defaultValue: true }) considerDPI: boolean;
}

export class SurveySimulatorComponent extends Base {
  constructor(public simulatorOptions: SimulatorOptions) {
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

  public get survey(): SurveyModel {
    return this.simulatorOptions.survey;
  }

  @property({ defaultValue: true }) simulatorEnabled: boolean;
  @property({ defaultValue: true }) simulatorScaleEnabled: boolean;

  public get activeDevice(): string {
    return this.simulatorOptions.device;
  }
  public set activeDevice(device: string) {
    this.simulatorOptions.device = device;
  }

  get landscapeOrientation(): boolean {
    return this.simulatorOptions.landscape;
  }
  // set landscapeOrientation(isLanscape: boolean) {
  //   this.simulatorOptions.landscape = isLanscape;
  // }

  public get hasFrame(): boolean {
    var device = simulatorDevices[this.activeDevice];
    return this.simulatorEnabled && device.deviceType !== "desktop";
  }

  public get simulatorFrame() {
    if (!this.hasFrame) {
      return undefined;
    }
    var device = simulatorDevices[this.activeDevice];
    var scale = DEFAULT_MONITOR_DPI / (device.ppi / device.cssPixelRatio);
    var width =
      ((this.landscapeOrientation ? device.height : device.width) /
        device.cssPixelRatio) *
      scale;
    var height =
      ((this.landscapeOrientation ? device.width : device.height) /
        device.cssPixelRatio) *
      scale;
    var frameWidth =
      ((this.landscapeOrientation ? device.frameHeight : device.frameWidth) /
        device.cssPixelRatio) *
      scale;
    var frameHeight =
      ((this.landscapeOrientation ? device.frameWidth : device.frameHeight) /
        device.cssPixelRatio) *
      scale;
    return {
      scale: this.simulatorScaleEnabled ? scale * 2 : 1,
      width: width,
      height: height,
      frameWidth: frameWidth,
      frameHeight: frameHeight,
      cssClass:
        device.cssClass +
        (this.landscapeOrientation ? " svd-simulator-frame-landscape" : ""),
    };
  }
}

export var DEFAULT_MONITOR_DPI = 102.69;
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
  iPhone5: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 640,
    height: 1136,
    frameWidth: 750,
    frameHeight: 1500,
    deviceType: "phone",
    title: "iPhone 5",
    cssClass: "svd-simulator-iphone5",
  },
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
    cssPixelRatio: 2,
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
    cssPixelRatio: 2,
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
    cssPixelRatio: 2,
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
    cssPixelRatio: 2,
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
    cssPixelRatio: 1,
    ppi: 163,
    width: 768,
    height: 1024,
    frameWidth: 945,
    frameHeight: 1300,
    deviceType: "tablet",
    title: "iPad Mini",
    cssClass: "svd-simulator-ipadmini",
  },
  iPadPro: {
    cssPixelRatio: 1,
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
    cssPixelRatio: 1,
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
    cssPixelRatio: 1,
    ppi: 152,
    width: 330,
    height: 568,
    frameWidth: 480,
    frameHeight: 846,
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
