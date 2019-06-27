(function($, undefined) {
    var WIDGET_NAME = "dxSimulator",
        SIMULATOR_APPLICATION_HASH = "dxapp-hash",
		DEVICE_KEY = "dx-force-device",
        DEVICE_OBJECT_KEY = "dx-force-device-object",
        ANDROID_PANEL_HEIGHT = 41,
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

    var Simulator = function(frame, options) {
        this._options = this.DEFAULT_OPTIONS;
        if(this._options.wrapFrame || options.wrapFrame) {
            this._wrapFrame(frame);
        }
        this.loadIndicator = options.loadIndicator;
        this.initMarkup(frame);
        this.options(options);
    };

    Simulator.prototype = {

        DEFAULT_OPTIONS: { 
            device: "iPad",
            orientation: "p",
            considerDPI: false,
            wrapFrame: false,
            // none, realDevice, simple
            chrome: "realDevice",
            scale: 1,
            displayExceptions: true
        },
        
        devices: {
            "iPhone": {
                cssPixelRatio: 2,
                ppi: 326,
                width: 640,
                height: 960,
                config: DEFAULT_IPHONE_CONFIG
            },
            "iPhone5": {
                cssPixelRatio: 2,
                ppi: 326,
                width: 640,
                height: 1136,
                config: DEFAULT_IPHONE_CONFIG
            },
            "iPhone6": {
                cssPixelRatio: 2,
                ppi: 326,
                width: 750,
                height: 1334,
                config: DEFAULT_IPHONE_CONFIG
            },
            "iPhone6plus": {
                cssPixelRatio: 2,
                ppi: 401,
                width: 1080,
                height: 1920,
                config: DEFAULT_IPHONE_CONFIG
            },
            "iPhone7": {
                cssPixelRatio: 2,
                ppi: 326,
                width: 750,
                height: 1334,
                config: DEFAULT_IPHONE_CONFIG
            },
            "iPad": {
                cssPixelRatio: 2,
                ppi: 264,
                width: 1536,
                height: 2048,
                config: DEFAULT_IPAD_CONFIG
            },
            "iPadMini": {
                cssPixelRatio: 1,
                ppi: 163,
                width: 768,
                height: 1024,
                config: DEFAULT_IPAD_CONFIG
            },
            "androidPhone": {
                cssPixelRatio: 2,
                ppi: 316,
                width: 720,
                height: 1280,
                config: ANDROID_PHONE_CONFIG
            },
            "androidTablet": {
                cssPixelRatio: 1.5,
                ppi: 149,
                width: 800,
                height: 1280,
                config: ANDROID_TABLET_CONFIG
            },
            "nexus7": {
                cssPixelRatio: 1.325,
                ppi: 216,
                width: 800,
                height: 1280,
                config: ANDROID_PHONE_CONFIG
            },
            "nokia920": {
                cssPixelRatio: 1.666,
                ppi: 332,
                width: 768,
                height: 1280,
                config: WIN_PHONE_CONFIG
            },
            "win10Phone": {
                cssPixelRatio: 1,
                ppi: 152,
                width: 330,
                height: 568
            },
            "msSurface": {
                cssPixelRatio: 1,
                ppi: 148,
                width: 768,
                height: 1366
            },
            //Sumsung Reference Device-PQ
            "tizen": {
                cssPixelRatio: 2,
                ppi: 306,
                width: 720,
                height: 1280
            },
            "desktop": {
                cssPixelRatio: 1,
                ppi: 149,
                width: 600,
                height: 766
            },
            "desktop_1280x720": {
                cssPixelRatio: 1,
                ppi: DEFAULT_MONITOR_DPI,
                width: 720,
                height: 1280,
                config: DEFAULT_DESKTOP_CONFIG
            },
            "desktop_1440x900": {
                cssPixelRatio: 1,
                ppi: DEFAULT_MONITOR_DPI,
                width: 900,
                height: 1440,
                config: DEFAULT_DESKTOP_CONFIG
            },
            "desktop_1920x1080": {
                cssPixelRatio: 1,
                ppi: DEFAULT_MONITOR_DPI,
                width: 1080,
                height: 1920,
                config: DEFAULT_DESKTOP_CONFIG
            },
            "genericPhone": {
            }
        },

        _calculateDeviceScale: function() {
            for(var deviceName in this.devices) {
                this.devices[deviceName].scaleFactor = 1;

                if(this._options.considerDPI) {
                    this.devices[deviceName].dpi = this.devices[deviceName].ppi / this.devices[deviceName].cssPixelRatio;
                    this.devices[deviceName].scaleFactor = DEFAULT_MONITOR_DPI / this.devices[deviceName].dpi;
                    this.devices[deviceName].widthCSS = this.devices[deviceName].width / this.devices[deviceName].cssPixelRatio;
                    this.devices[deviceName].heightCSS = this.devices[deviceName].height / this.devices[deviceName].cssPixelRatio;
                }
            }
        },

        _wrapFrame: function(frame) {
            if(!$(".dx-simulator-wrapper").length) {
                frame.wrap("<div class='dx-simulator-wrapper'/>");
            }
        },

        setScale: function(options) {
            this._calculateDeviceScale();
            var orientation = options.orientation,
                device = options.device,
                $frame = $(this.frame);

            if(options.considerDPI) {

                var width = orientation === "p" ? this.devices[device].widthCSS : this.devices[device].heightCSS,
                    height = orientation === "p" ? this.devices[device].heightCSS : this.devices[device].widthCSS;

                if(device === "androidTablet") {
                    if(orientation === "p") {
                        height = height - ANDROID_PANEL_HEIGHT;
                        width = width + ANDROID_PANEL_HEIGHT;
                    }
                }

                $frame.width(width);
                $frame.height(height);
            }

            var scale = this.getAbsoluteScale();

            if("-webkit-transform" in $(".dx-simulator")[0].style ||
                "-moz-transform" in $(".dx-simulator")[0].style ||
                "-ms-transform" in $(".dx-simulator")[0].style ||
                "-o-transform" in $(".dx-simulator")[0].style ||
                "transform" in $(".dx-simulator")[0].style) {

                $(".dx-simulator-wrapper").width($(".dx-simulator").outerWidth(true) * scale)
                                          .height($(".dx-simulator").outerHeight(true) * scale);
                

                $(".dx-simulator").css({
                    "-webkit-transform": "scale(" + scale + ")",
                    "-moz-transform": "scale(" + scale + ")",
                    "-ms-transform": "scale(" + scale + ")",
                    "-o-transform": "scale(" + scale + ")",
                    "transform": "scale(" + scale + ")",
                    "-webkit-transform-origin": "0 0",
                    "transform-origin": "0 0",
                    "-ms-transform-origin": "0 0",
                    "-moz-transform-origin": "0 0",
                    "-o-transform-origin": "0 0"
                });
            }
            else {
                $(".dx-simulator").css("zoom", 1);
                $(".dx-simulator-wrapper").width($(".dx-simulator").outerWidth(true) * scale)
                                          .height($(".dx-simulator").outerHeight(true) * scale);
                $(".dx-simulator").css("zoom", scale);
            }
        },

        initMarkup: function($frame) {
            this.frame = $frame;
            var self = this;
            this.frame.get(0).onload = function() {
                var frameWindow = self._frameWindow();
                $(frameWindow).on("hashchange", function() {
                    if(window.sessionStorage) {
                        sessionStorage.setItem(SIMULATOR_APPLICATION_HASH, this.location.hash.slice(1));
                    }
                });
                if(self._options.displayExceptions === true) {
                    attachErrorHandler(frameWindow);
                }
                self._tryToSetIOS7Theme();
                self._linkTouchEndHandlers($frame);
            };
            // Called from the player.cshtml when the app is started
            window.xetAppStartedHandler = function () {
                self.loadIndicator.hide();
                $(self).trigger("appstarted");
            };

            this.wrapperDiv = $("<div></div>");
            this.backDiv = $("<a></a>")
                .addClass("dx-simulator-back")
                .click($.proxy(this._handleBack, this));

            var $backDivWrapper = $("<div></div>")
                .addClass("dx-simulator-back-wrapper")
                .append(this.backDiv);

            this.frame.wrap(this.wrapperDiv);
            this.wrapperDiv = this.frame.parent();
            this.loadIndicator.remove().appendTo(this.wrapperDiv);
            this.wrapperDiv.append($backDivWrapper);
        },

        options: function(a, b) {
            var changes;

            if(typeof a === "string") {
                if(b === undefined)
                    return this._options[a];
                changes = { };
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

        _changeOptions: function (changes) {
            var prevOptions = this._options,
                newOptions = this._options = $.extend({}, prevOptions, changes);

            var urlChanged = prevOptions.url !== newOptions.url,
                deviceChanged = prevOptions.device !== newOptions.device;
            if (deviceChanged) {
                newOptions.osVersionNumber = changes.osVersionNumber;
            }
            deviceChanged |= prevOptions.osVersionNumber != newOptions.osVersionNumber;

            var framedWindow = this.frame[0].contentWindow;

            if (newOptions.url) {
                if (urlChanged) {
                    setTimeout(function() {
                        framedWindow.location = newOptions.url;
                    });
                    this.loadIndicator.show();
                } else if (deviceChanged) {
                    framedWindow.location.reload();
                    this.loadIndicator.show();
                }                
            }

            if (deviceChanged) {
                if (window.sessionStorage) {
                    sessionStorage.setItem("dx-device", newOptions.device);
                    sessionStorage.setItem(DEVICE_KEY, newOptions.device);
                }
                framedWindow.top[DEVICE_KEY] = newOptions.device;
                framedWindow.top[DEVICE_OBJECT_KEY] = this._getDeviceToForce(newOptions.device, newOptions.osVersionNumber);
            }
            this.wrapperDiv.attr("class", this._wrapperClasses());
            
            this.setScale(newOptions);
        },

        _getDeviceToForce: function(device, osVersionNumber) {
            if (this.devices[device] && this.devices[device].config) {
                return $.extend({}, this.devices[device].config, osVersionNumber ? { version: [parseInt(osVersionNumber)] } : null);
            }
            return device;
        },

        _tryToSetIOS7Theme: function() {
            var frameWindow = this._frameWindow();
            if(!frameWindow.$ || !frameWindow.DevExpress || this._frameworkVersion() >= 13.2) {
                return;
            }
            if(this._options && this._isAppleDevice(this._options.device) && this._isOsVersionNumber(7)) {
                frameWindow.$(function() {
                    $(".dx-viewport", frameWindow.document)
                        .removeClass("dx-theme-ios")
                        .addClass("dx-theme-ios7");
                });
            }
        },

        _frameworkVersion: function() {
            return this._frameWindow().DevExpress.utils.findBestMatches ? 13.2 : 0;
        },

        _isAppleDevice: function(deviceName) {
            return this.devices[deviceName] && this.devices[deviceName].config && this.devices[deviceName].config.platform == "ios";
        },

        _isOsVersionNumber: function(osVersionNumber) {
            return this._options.osVersionNumber && parseInt(this._options.osVersionNumber) === osVersionNumber;
        },

        destroy: function() {
            this.backDiv.remove();
            this.frame.unwrap();
        },
        _wrapperClasses: function () {
            
            var device = this.options("device").toLowerCase();
            
            var simpleChrome = this.options("chrome") == "simple" ? "simple-chrome" : "";
            var emptyChrome = this.options("chrome") == "none" ? "empty-chrome" : "";

            return [
                "dx-simulator",
                ["dx-simulator", device, this.options("orientation")].join("-"),
                simpleChrome,
                emptyChrome
            ].join(" ");
        },        

        _handleBack: function() {
            var framedWindow = this.frame[0].contentWindow;
			framedWindow.$(framedWindow).trigger("dxback");            
        },

        _frameWindow: function() {
            return this.frame.get(0).contentWindow;
        },

        _linkTouchEndHandlers: function () {
            var $frame = this.frame,
                frameWindow = this._frameWindow(),
                events = {
                    "pointerout": {
                        fireEvent: "pointerup",
                        $target: $frame,
                        needToFire: function() { return true; }
                    },
                    "touchend": {
                        fireEvent: "touchend",
                        $target: $(window.document),
                        needToFire: function() { return true; }
                    },
                    "mouseout": {
                        fireEvent: "mouseup",
                        $target: $frame,
                        needToFire: function(event) { return event.which === 1; }
                    }
                };
            $.each(events, function(handleEventType, handleEvent) {
                handleEvent.$target.off(handleEventType).on(handleEventType, function(event) {
                    if(frameWindow.$ && handleEvent.needToFire(event)) {
                        frameWindow.$(frameWindow.document).trigger(
                            createFrameEvent(frameWindow, $frame, event, handleEvent.fireEvent)
                        );
                    }
                });
            });
        }

    };

    $.fn.dxSimulator = function(options) {
        var returnValue = this;

        this.each(function() {
            if(this.tagName !== "IFRAME")
                throw Error();
            
            var $frame = $(this),
                instance = $frame.data(WIDGET_NAME);
            
            if(!instance) {
                instance = new Simulator($frame, options);
                $frame.data(WIDGET_NAME, instance);
            } else {
                instance.options(options);
            }

            if(options.returnInstance)
                returnValue = instance;
        });

        return returnValue;
    };

    function createFrameEvent(frameWindow, $frame, sourceEvent, newEventType) {
        var event = frameWindow.$.Event(sourceEvent),
            originalEvent = event.originalEvent;

        if(typeof frameWindow.$.event.props != 'undefined') {
            var propNames = frameWindow.$.event.props.slice();
            $.merge(propNames, frameWindow.$.event.mouseHooks.props);
            $.each(propNames, function() {
                event[this] = originalEvent[this];
            });
        }
        var frameOffsets = $frame.offset(),
            framedX = fitCoordinateToLimits(originalEvent.clientX, frameOffsets.left, $frame.width()),
            framedY = fitCoordinateToLimits(originalEvent.clientY, frameOffsets.top, $frame.height());
        $.each(['client', 'page', 'offset', 'screen'], function() {
            event[this + 'X'] = framedX;
            event[this + 'Y'] = framedY;
        });

        return frameWindow.$.extend(event, {
            srcElement: frameWindow.document,
            currentTarget: frameWindow.document,
            target: frameWindow.document,
            view: frameWindow,
            type: newEventType
        });
    }

    function fitCoordinateToLimits(coordinate, startValue, length) {
        if(coordinate < startValue) {
            return 0;
        }
        var fitedValue = coordinate - startValue;
        return fitedValue > length ? length : fitedValue;
    }
    
    function attachErrorHandler(frameWindow) {
        var window_onerror = frameWindow.onerror;
        frameWindow.onerror = function(message, url, line) {
            try {
                var encodedMessage = $('<div/>').text(message).html();
                $(frameWindow.document.body).append(
                    "<div style='z-index: 2000; top:100px; left: 0; \
                                position: fixed; display: block;\
                                width: 100%; overflow: auto;'>\
                        <div style='background: red; text-align: left; color: white;\
                                white-space: pre-wrap; \
                                border-radius: 5px;\
                                margin: 0 10px; padding: 10px;\
                                -webkit-user-select: text;\
                                -moz-user-select: text;\
                                -ms-user-select: text;\
                                -o-user-select: text;\
                                user-select: text;\
                                word-break: normal; white-space: pre-wrap'>" +
                            "Error: '" + encodedMessage + "', line " + line + ", file '" + url + "'." +
                        "</div>\
                    </div>");
            } catch(e) { }

            if(window_onerror) {
                try {
                    return window_onerror(message, url, line);
                } catch(e) { }
            }
            return true;
        };
    }    

})(jQuery);
