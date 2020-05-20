import * as ko from "knockout";
import { getLocString } from "../editorLocalization";
import * as Survey from "survey-knockout";
import { SurveyCreator } from '../editor';

import "./simulator.scss";

var templateHtml = require("./simulator.html");

export class SurveySimulatorComponent {
  private simulator;

  public simulatorOptions = {
    device: "desktop",
    orientation: "l",
    // scale: 1,
    considerDPI: true,
  };

  constructor(private _toolbarHolder: any) {
    this.koActiveDevice.subscribe((newValue) => {
      if (!!this.simulator) {
        this.simulatorOptions.device = newValue || "desktop";
        this.simulator.options(this.simulatorOptions);
      }
    });
    this.koLandscapeOrientation.subscribe((newValue) => {
      if (!!this.simulator) {
        this.simulatorOptions.orientation = newValue ? "l" : "p";
        this.simulator.options(this.simulatorOptions);
      }
    });

    _toolbarHolder.toolbarItems.push({
      id: "svd-test-simulator",
      title: getLocString("pe.simulator"),
      visible: this.simulatorEnabled,
      tooltip: getLocString("pe.simulator"),
      component: "svd-dropdown",
      action: ko.computed({
        read: () => this.koActiveDevice(),
        write: (val: any) => this.koActiveDevice(val)
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
        read: () => this.koLandscapeOrientation(),
        write: (val: any) => this.koLandscapeOrientation(val)
      })
    });
  }

  public get survey() {
    return this._toolbarHolder.koSurvey();
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

  koActiveDevice = ko.observable("desktop");
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

  koLandscapeOrientation = ko.observable(true);

  public koHasFrame = ko.computed(() => {
    var device = simulatorDevices[this.koActiveDevice()];
    return this.simulatorEnabled && device.deviceType !== "desktop";
  });

  public koSimulatorFrame = ko.computed(() => {
    if (!this.koHasFrame) {
      return undefined;
    }
    var device = simulatorDevices[this.koActiveDevice()];
    var scale = DEFAULT_MONITOR_DPI / (device.ppi / device.cssPixelRatio);
    var width =
      ((this.koLandscapeOrientation() ? device.height : device.width) /
        device.cssPixelRatio) *
      scale;
    var height =
      ((this.koLandscapeOrientation() ? device.width : device.height) /
        device.cssPixelRatio) *
      scale;
    var offsetRatioX = this.koLandscapeOrientation() ? 0.17 : 0.165;
    var offsetRatioY = this.koLandscapeOrientation() ? 0.17 : 0.165;
    return {
      scale: this.simulatorScaleEnabled ? scale * 2 : 1,
      width: width,
      height: height,
      frameWidth: width * 1.33,
      frameHeight: height * 1.34,
      frameX: width * offsetRatioX,
      frameY: height * offsetRatioY,
      cssClass: ko.computed(() => {
        return device.cssClass + (this.koLandscapeOrientation() ? " svd-simulator-frame-landscape" : "");
      })
    };
  });

}

ko.components.register("survey-simulator", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      return new SurveySimulatorComponent(params.model);
    }
  },
  template: templateHtml,
});

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
  iPhone: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 640,
    height: 960,
    deviceType: "phone",
    title: "iPhone",
    cssClass: "svd-simulator-iphone4"
  },
  iPhone5: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 640,
    height: 1136,
    deviceType: "phone",
    title: "iPhone 5",
    cssClass: "svd-simulator-iphone5"
  },
  iPhone6: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 750,
    height: 1334,
    deviceType: "phone",
    title: "iPhone 6",
    cssClass: "svd-simulator-iphone6"
  },
  iPhone6plus: {
    cssPixelRatio: 2,
    ppi: 401,
    width: 1080,
    height: 1920,
    deviceType: "phone",
    title: "iPhone 6 Plus",
    cssClass: "svd-simulator-iphone6plus"
  },
  iPhone8: {
    cssPixelRatio: 2,
    ppi: 326,
    width: 750,
    height: 1334,
    deviceType: "phone",
    title: "iPhone 8",
    cssClass: "svd-simulator-iphone8"
  },
  iPhone8plus: {
    cssPixelRatio: 2,
    ppi: 401,
    width: 1080,
    height: 1920,
    deviceType: "phone",
    title: "iPhone 8 Plus",
    cssClass: "svd-simulator-iphone8plus"
  },
  iPhoneX: {
    cssPixelRatio: 2,
    ppi: 458,
    width: 1125,
    height: 2436,
    deviceType: "phone",
    title: "iPhone X",
    cssClass: "svd-simulator-iphonex"
  },
  iPhoneXmax: {
    cssPixelRatio: 2,
    ppi: 458,
    width: 1242,
    height: 2688,
    deviceType: "phone",
    title: "iPhone X Max",
    cssClass: "svd-simulator-iphonexmax"
  },
  iPad: {
    cssPixelRatio: 2,
    ppi: 264,
    width: 1536,
    height: 2048,
    deviceType: "tablet",
    title: "iPad",
    cssClass: "svd-simulator-ipad"
  },
  iPadMini: {
    cssPixelRatio: 1,
    ppi: 163,
    width: 768,
    height: 1024,
    deviceType: "tablet",
    title: "iPad Mini",
    cssClass: "svd-simulator-ipadmini"
  },
  iPadPro: {
    cssPixelRatio: 1,
    ppi: 264,
    width: 1688,
    height: 2388,
    deviceType: "tablet",
    title: 'iPad Pro 11"',
    cssClass: "svd-simulator-ipadpro"
  },
  iPadPro13: {
    cssPixelRatio: 1,
    ppi: 264,
    width: 2048,
    height: 2732,
    deviceType: "tablet",
    title: 'iPad Pro 12,9"',
    cssClass: "svd-simulator-ipadpro13"
  },
  androidPhone: {
    cssPixelRatio: 2,
    ppi: 316,
    width: 720,
    height: 1280,
    deviceType: "phone",
    title: "Android Phone",
    cssClass: "svd-simulator-androidphone"
  },
  androidTablet: {
    cssPixelRatio: 1.5,
    ppi: 149,
    width: 800,
    height: 1280,
    deviceType: "tablet",
    title: "Android Tablet",
    cssClass: "svd-simulator-androidtablet"
  },
  win10Phone: {
    cssPixelRatio: 1,
    ppi: 152,
    width: 330,
    height: 568,
    deviceType: "phone",
    title: "Windows 10 Phone",
    cssClass: "svd-simulator-win10phone"
  },
  msSurface: {
    cssPixelRatio: 1,
    ppi: 148,
    width: 768,
    height: 1366,
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

