var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SurveyObjectEditorTests;
(function (SurveyObjectEditorTests) {
    var Tests;
    (function (Tests) {
        var Car = (function () {
            function Car() {
            }
            Car.prototype.getType = function () { return "car"; };
            return Car;
        })();
        Tests.Car = Car;
        var FastCar = (function (_super) {
            __extends(FastCar, _super);
            function FastCar() {
                _super.apply(this, arguments);
            }
            FastCar.prototype.getType = function () { return "fast"; };
            return FastCar;
        })(Car);
        Tests.FastCar = FastCar;
        var BigCar = (function (_super) {
            __extends(BigCar, _super);
            function BigCar() {
                _super.apply(this, arguments);
            }
            BigCar.prototype.getType = function () { return "big"; };
            return BigCar;
        })(Car);
        Tests.BigCar = BigCar;
        var SportCar = (function (_super) {
            __extends(SportCar, _super);
            function SportCar() {
                _super.apply(this, arguments);
            }
            SportCar.prototype.getType = function () { return "sport"; };
            return SportCar;
        })(FastCar);
        Tests.SportCar = SportCar;
        var Truck = (function (_super) {
            __extends(Truck, _super);
            function Truck() {
                _super.apply(this, arguments);
            }
            Truck.prototype.getType = function () { return "truck"; };
            return Truck;
        })(BigCar);
        Tests.Truck = Truck;
        var TruckDefaultValue = (function (_super) {
            __extends(TruckDefaultValue, _super);
            function TruckDefaultValue() {
                _super.apply(this, arguments);
            }
            TruckDefaultValue.prototype.getType = function () { return "truckDefault"; };
            Object.defineProperty(TruckDefaultValue.prototype, "title", {
                get: function () {
                    return "!" + this.titleValue + "!";
                },
                set: function (value) {
                    this.titleValue = value;
                },
                enumerable: true,
                configurable: true
            });
            return TruckDefaultValue;
        })(Truck);
        Tests.TruckDefaultValue = TruckDefaultValue;
        Survey.JsonObject.metaData.addClass("fast", [], function () { return new FastCar(); }, "car");
        Survey.JsonObject.metaData.addClass("big", [], null, "car");
        Survey.JsonObject.metaData.addClass("car", ["name"]);
        Survey.JsonObject.metaData.addClass("truck", ["maxWeight:number"], function () { return new Truck(); }, "big");
        Survey.JsonObject.metaData.addClass("sport", ["!maxSpeed:number"], function () { return new SportCar(); }, "fast");
        Survey.JsonObject.metaData.addClass("truckDefault", ["isNew:boolean", "title:string"], function () { return new TruckDefaultValue(); }, "truck");
        Survey.JsonObject.metaData.setPropertyValues("truckDefault", "title", null, null, function (obj) { return obj.titleValue; });
    })(Tests = SurveyObjectEditorTests.Tests || (SurveyObjectEditorTests.Tests = {}));
})(SurveyObjectEditorTests || (SurveyObjectEditorTests = {}));
