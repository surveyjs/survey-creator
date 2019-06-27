import jQuery from "jquery";

var $ = jQuery;

import "./simulator.scss";

var ANDROID_PANEL_HEIGHT = 41,
  DEFAULT_MONITOR_DPI = 102.69,
  DEFAULT_IPHONE_CONFIG = {
    deviceType: "phone",
    platform: "ios",
    version: [7]
  },
  DEFAULT_IPAD_CONFIG = {
    deviceType: "tablet",
    platform: "ios",
    version: [6]
  },
  DEFAULT_DESKTOP_CONFIG = {
    platform: "desktop",
    version: []
  },
  ANDROID_PHONE_CONFIG = {
    platform: "android",
    deviceType: "phone",
    version: [5]
  },
  ANDROID_TABLET_CONFIG = {
    platform: "android",
    deviceType: "tablet",
    version: [5]
  },
  WIN_PHONE_CONFIG = {
    platform: "win",
    deviceType: "phone",
    version: [10]
  };

export var Simulator = function(frame, options) {
  var $frame = $(frame);
  this._options = this.DEFAULT_OPTIONS;
  if (this._options.wrapFrame || options.wrapFrame) {
    this._wrapFrame($frame);
  }
  this.initMarkup($frame);
  this.options(options);
};

Simulator.prototype = {
  DEFAULT_OPTIONS: {
    device: "iPad",
    orientation: "p",
    considerDPI: false,
    wrapFrame: true,
    // none, realDevice, simple
    chrome: "realDevice",
    scale: 1
  },

  devices: {
    iPhone: {
      cssPixelRatio: 2,
      ppi: 326,
      width: 640,
      height: 960,
      config: DEFAULT_IPHONE_CONFIG
    },
    iPhone5: {
      cssPixelRatio: 2,
      ppi: 326,
      width: 640,
      height: 1136,
      config: DEFAULT_IPHONE_CONFIG
    },
    iPhone6: {
      cssPixelRatio: 2,
      ppi: 326,
      width: 750,
      height: 1334,
      config: DEFAULT_IPHONE_CONFIG
    },
    iPhone6plus: {
      cssPixelRatio: 2,
      ppi: 401,
      width: 1080,
      height: 1920,
      config: DEFAULT_IPHONE_CONFIG
    },
    iPhone7: {
      cssPixelRatio: 2,
      ppi: 326,
      width: 750,
      height: 1334,
      config: DEFAULT_IPHONE_CONFIG
    },
    iPad: {
      cssPixelRatio: 2,
      ppi: 264,
      width: 1536,
      height: 2048,
      config: DEFAULT_IPAD_CONFIG
    },
    iPadMini: {
      cssPixelRatio: 1,
      ppi: 163,
      width: 768,
      height: 1024,
      config: DEFAULT_IPAD_CONFIG
    },
    androidPhone: {
      cssPixelRatio: 2,
      ppi: 316,
      width: 720,
      height: 1280,
      config: ANDROID_PHONE_CONFIG
    },
    androidTablet: {
      cssPixelRatio: 1.5,
      ppi: 149,
      width: 800,
      height: 1280,
      config: ANDROID_TABLET_CONFIG
    },
    nexus7: {
      cssPixelRatio: 1.325,
      ppi: 216,
      width: 800,
      height: 1280,
      config: ANDROID_PHONE_CONFIG
    },
    nokia920: {
      cssPixelRatio: 1.666,
      ppi: 332,
      width: 768,
      height: 1280,
      config: WIN_PHONE_CONFIG
    },
    win10Phone: {
      cssPixelRatio: 1,
      ppi: 152,
      width: 330,
      height: 568
    },
    msSurface: {
      cssPixelRatio: 1,
      ppi: 148,
      width: 768,
      height: 1366
    },
    //Sumsung Reference Device-PQ
    tizen: {
      cssPixelRatio: 2,
      ppi: 306,
      width: 720,
      height: 1280
    },
    desktop: {
      cssPixelRatio: 1,
      ppi: 149,
      width: 600,
      height: 766
    },
    desktop_1280x720: {
      cssPixelRatio: 1,
      ppi: DEFAULT_MONITOR_DPI,
      width: 720,
      height: 1280,
      config: DEFAULT_DESKTOP_CONFIG
    },
    desktop_1440x900: {
      cssPixelRatio: 1,
      ppi: DEFAULT_MONITOR_DPI,
      width: 900,
      height: 1440,
      config: DEFAULT_DESKTOP_CONFIG
    },
    desktop_1920x1080: {
      cssPixelRatio: 1,
      ppi: DEFAULT_MONITOR_DPI,
      width: 1080,
      height: 1920,
      config: DEFAULT_DESKTOP_CONFIG
    },
    genericPhone: {}
  },

  _calculateDeviceScale: function() {
    for (var deviceName in this.devices) {
      this.devices[deviceName].scaleFactor = 1;

      if (this._options.considerDPI) {
        this.devices[deviceName].dpi =
          this.devices[deviceName].ppi / this.devices[deviceName].cssPixelRatio;
        this.devices[deviceName].scaleFactor =
          DEFAULT_MONITOR_DPI / this.devices[deviceName].dpi;
        this.devices[deviceName].widthCSS =
          this.devices[deviceName].width /
          this.devices[deviceName].cssPixelRatio;
        this.devices[deviceName].heightCSS =
          this.devices[deviceName].height /
          this.devices[deviceName].cssPixelRatio;
      }
    }
  },

  _wrapFrame: function(frame) {
    if (!$(".svd-simulator-wrapper").length) {
      frame.wrap("<div class='svd-simulator-wrapper'/>");
    }
  },

  setScale: function(options) {
    this._calculateDeviceScale();
    var orientation = options.orientation,
      device = options.device,
      $frame = $(this.frame);

    if (options.considerDPI) {
      var width =
          orientation === "p"
            ? this.devices[device].widthCSS
            : this.devices[device].heightCSS,
        height =
          orientation === "p"
            ? this.devices[device].heightCSS
            : this.devices[device].widthCSS;

      if (device === "androidTablet") {
        if (orientation === "p") {
          height = height - ANDROID_PANEL_HEIGHT;
          width = width + ANDROID_PANEL_HEIGHT;
        }
      }

      $frame.width(width);
      $frame.height(height);
    }

    var scale = this.getAbsoluteScale();

    if (
      "-webkit-transform" in $(".svd-simulator")[0].style ||
      "-moz-transform" in $(".svd-simulator")[0].style ||
      "-ms-transform" in $(".svd-simulator")[0].style ||
      "-o-transform" in $(".svd-simulator")[0].style ||
      "transform" in $(".svd-simulator")[0].style
    ) {
      $(".svd-simulator-wrapper")
        .width($(".svd-simulator").outerWidth(true) * scale)
        .height($(".svd-simulator").outerHeight(true) * scale);

      $(".svd-simulator").css({
        "-webkit-transform": "scale(" + scale + ")",
        "-moz-transform": "scale(" + scale + ")",
        "-ms-transform": "scale(" + scale + ")",
        "-o-transform": "scale(" + scale + ")",
        transform: "scale(" + scale + ")",
        "-webkit-transform-origin": "0 0",
        "transform-origin": "0 0",
        "-ms-transform-origin": "0 0",
        "-moz-transform-origin": "0 0",
        "-o-transform-origin": "0 0"
      });
    } else {
      $(".svd-simulator").css("zoom", 1);
      $(".svd-simulator-wrapper")
        .width($(".svd-simulator").outerWidth(true) * scale)
        .height($(".svd-simulator").outerHeight(true) * scale);
      $(".svd-simulator").css("zoom", scale);
    }
  },

  initMarkup: function($frame) {
    this.frame = $frame;

    this.wrapperDiv = $("<div></div>");
    this.backDiv = $("<a></a>")
      .addClass("svd-simulator-back")
      .click($.proxy(this._handleBack, this));

    var $backDivWrapper = $("<div></div>")
      .addClass("svd-simulator-back-wrapper")
      .append(this.backDiv);

    this.frame.wrap(this.wrapperDiv);
    this.wrapperDiv = this.frame.parent();
    this.wrapperDiv.append($backDivWrapper);
  },

  options: function(a, b) {
    var changes;

    if (typeof a === "string") {
      if (b === undefined) return this._options[a];
      changes = {};
      changes[a] = b;
    } else {
      changes = a;
    }
    this._changeOptions(changes);
  },

  getAbsoluteScale: function(options) {
    var options = options || this._options;
    return this.devices[options.device].scaleFactor * options.scale;
  },

  _changeOptions: function(changes) {
    var prevOptions = this._options,
      newOptions = (this._options = $.extend({}, prevOptions, changes));

    var deviceChanged = prevOptions.device !== newOptions.device;
    if (deviceChanged) {
      newOptions.osVersionNumber = changes.osVersionNumber;
    }
    deviceChanged |= prevOptions.osVersionNumber != newOptions.osVersionNumber;

    this.wrapperDiv.attr("class", this._wrapperClasses());

    this.setScale(newOptions);
  },

  _getDeviceToForce: function(device, osVersionNumber) {
    if (this.devices[device] && this.devices[device].config) {
      return $.extend(
        {},
        this.devices[device].config,
        osVersionNumber ? { version: [parseInt(osVersionNumber)] } : null
      );
    }
    return device;
  },

  _isAppleDevice: function(deviceName) {
    return (
      this.devices[deviceName] &&
      this.devices[deviceName].config &&
      this.devices[deviceName].config.platform == "ios"
    );
  },

  _isOsVersionNumber: function(osVersionNumber) {
    return (
      this._options.osVersionNumber &&
      parseInt(this._options.osVersionNumber) === osVersionNumber
    );
  },

  destroy: function() {
    this.backDiv.remove();
    this.frame.unwrap();
  },

  _wrapperClasses: function() {
    var device = this.options("device").toLowerCase();

    var simpleChrome =
      this.options("chrome") == "simple" ? "simple-chrome" : "";
    var emptyChrome = this.options("chrome") == "none" ? "empty-chrome" : "";

    return [
      "svd-simulator",
      ["svd-simulator", device, this.options("orientation")].join("-"),
      simpleChrome,
      emptyChrome
    ].join(" ");
  },

  _handleBack: function() {
    var framedWindow = this.frame[0].contentWindow;
    framedWindow.$(framedWindow).trigger("dxback");
  }
};
