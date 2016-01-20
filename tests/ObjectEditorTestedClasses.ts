module SurveyObjectEditorTests.Tests {
    export class Car {
        public name: string;
        public getType(): string { return "car"; }
    }
    export class FastCar extends Car {
        public getType(): string { return "fast"; }
    }
    export class BigCar extends Car {
        public getType(): string { return "big"; }
    }
    export class SportCar extends FastCar {
        public maxSpeed: number;
        public getType(): string { return "sport"; }
    }
    export class Truck extends BigCar {
        public maxWeight: number;
        public getType(): string { return "truck"; }
    }
    export class TruckDefaultValue extends Truck {
        public isNew: boolean;
        public getType(): string { return "truckDefault"; }
    }

    Survey.JsonObject.metaData.addClass("fast", [], function () { return new FastCar(); }, "car");
    Survey.JsonObject.metaData.addClass("big", [], null, "car");
    Survey.JsonObject.metaData.addClass("car", ["name"]);
    Survey.JsonObject.metaData.addClass("truck", ["maxWeight"], function () { return new Truck(); }, "big");
    Survey.JsonObject.metaData.addClass("sport", ["!maxSpeed"], function () { return new SportCar(); }, "fast");
    Survey.JsonObject.metaData.addClass("truckDefault", ["isNew"], function () { return new TruckDefaultValue(); }, "truck");

}