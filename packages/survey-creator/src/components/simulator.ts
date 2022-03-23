import * as ko from "knockout";
import { getLocString } from "../editorLocalization";

import "./simulator.scss";

var templateHtml = require("./simulator.html");

export class SurveySimulatorComponent {
  private simulator;

  public simulatorOptions = {
    device: "desktop",
    orientation: "l",
    // scale: 1,
    considerDPI: true
  };

  constructor(private _toolbarHolder: any, private _options = {
    landscape: ko.observable(true),
    device: ko.observable("desktop"),
    survey: <ko.Observable>undefined
  }) {
    this._options.device.subscribe((newValue) => {
      if (!!this.simulator) {
        this.simulatorOptions.device = newValue || "desktop";
        this.simulator.options(this.simulatorOptions);
      }
    });
    this._options.landscape.subscribe((newValue) => {
      if (!!this.simulator) {
        this.simulatorOptions.orientation = newValue ? "l" : "p";
        this.simulator.options(this.simulatorOptions);
      }
    });

    this.koHasFrame = ko.computed(() => {
      var device = simulatorDevices[this.activeDevice];
      return this.simulatorEnabled && device.deviceType !== "desktop";
    });

    this.koSimulatorFrame = ko.computed(() => {
      if (!this.koHasFrame) {
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
      const calculatedScale = this.simulatorScaleEnabled ? scale * 2 : 1;
      return {
        scale: calculatedScale,
        width: width,
        height: height,
        frameWidth: frameWidth,
        frameHeight: frameHeight,
        realWidth: width / calculatedScale,
        realHeight: height / calculatedScale,
        widthWithLandscape: this.landscapeOrientation ? frameHeight : frameWidth,
        heightWithLandscape: this.landscapeOrientation ? frameWidth : frameHeight,
        cssClass: ko.computed(() => {
          return device.cssClass + (this.landscapeOrientation ? " svd-simulator-frame-landscape" : "");
        })
      };
    });

    if (!!_toolbarHolder) {
      this._options.survey = this._toolbarHolder.koSurvey;
      ko.computed(() => {
        this.simulatorEnabled = _toolbarHolder.showSimulator();
      });
      _toolbarHolder.toolbarItems.push({
        id: "svd-test-simulator",
        title: getLocString("pe.simulator"),
        visible: ko.computed(() => this.simulatorEnabled),
        tooltip: getLocString("pe.simulator"),
        component: "svd-dropdown",
        action: ko.computed({
          read: () => this.activeDevice,
          write: (val: any) => this.activeDevice = val
        }),
        items: <any>this.koDevices
      });
      _toolbarHolder.toolbarItems.push({
        id: "svd-test-simulator-orientation",
        title: getLocString("pe.landscapeOrientation"),
        visible: this.koHasFrame,
        tooltip: getLocString("pe.landscapeOrientation"),
        component: "svd-boolean",
        action: ko.computed({
          read: () => this.landscapeOrientation,
          write: (val: any) => this.landscapeOrientation = val
        })
      });
    }
  }

  public get survey() {
    return this._options.survey();
  }

  private _simulatorEnabled = ko.observable<boolean>(true);
  public get simulatorEnabled() {
    return this._simulatorEnabled();
  }
  public set simulatorEnabled(value: boolean) {
    this._simulatorEnabled(value);
  }
  private _simulatorScaleEnabled = ko.observable<boolean>(true);
  public get simulatorScaleEnabled() {
    return this._simulatorScaleEnabled();
  }
  public set simulatorScaleEnabled(value: boolean) {
    this._simulatorScaleEnabled(value);
  }

  get activeDevice() {
    return this._options.device();
  }
  set activeDevice(device: string) {
    if (this.survey && typeof this.survey.setIsMobile === "function") {
      this.survey.setIsMobile(device !== "desktop");
    }
    this._options.device(device);
  }

  koDevices = ko.observableArray(
    Object.keys(simulatorDevices)
      .filter((key) => !!simulatorDevices[key].title)
      .map((key) => {
        return {
          text: simulatorDevices[key].title,
          value: key,
        };
      })
  );

  get landscapeOrientation() {
    return this._options.landscape();
  }
  set landscapeOrientation(isLanscape: boolean) {
    this._options.landscape(isLanscape);
  }

  public koHasFrame: ko.Computed;
  public koSimulatorFrame: ko.Computed;
}

ko.components.register("survey-simulator", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new SurveySimulatorComponent(params.model, params.options);
    }
  },
  template: templateHtml,
});

export var DEFAULT_MONITOR_DPI = (!!window ? window.devicePixelRatio : 1) * 96;
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
    cssClass: "svd-simulator-iphone5"
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
    cssClass: "svd-simulator-iphone6"
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
    cssClass: "svd-simulator-iphone6plus"
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
    cssClass: "svd-simulator-iphone8"
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
    cssClass: "svd-simulator-iphone8plus"
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
    cssClass: "svd-simulator-iphonex"
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
    cssClass: "svd-simulator-iphonexmax"
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
    cssClass: "svd-simulator-ipad"
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
    cssClass: "svd-simulator-ipadmini"
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
    cssClass: "svd-simulator-ipadpro"
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
    cssClass: "svd-simulator-ipadpro13"
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
    cssClass: "svd-simulator-androidphone"
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
    cssClass: "svd-simulator-androidtablet"
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
    cssClass: "svd-simulator-win10phone"
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
    cssClass: "svd-simulator-mssurface"
  },
  genericPhone: {
    cssPixelRatio: 1,
    deviceType: "phone",
    title: "",
    cssClass: "svd-simulator-genphone"
  },
};

